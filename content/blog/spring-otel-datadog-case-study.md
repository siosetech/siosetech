---
title: "Case study: Spring Boot, OpenTelemetry, and Datadog as code"
description: "One login request across five services — why the trace says 526ms, the user waited 333ms, and what breaks when Kafka sits in the middle."
date: 2026-07-30T06:00:00Z
draft: false
tags: ["Case Study", "OpenTelemetry", "Datadog"]
---

This is a condensed case study of [spring-datadog-lab](https://github.com/siosetech/spring-datadog-lab): five Spring Boot services, one OTLP pipeline, two backends, and a login flow that fans out over Kafka.

Everything below comes from one real trace — `49d718ae…f238a3c3` — captured in the lab and visible in both Jaeger and Datadog.

## Start with the trace, not the architecture

![Jaeger waterfall for a single login request across api-gateway, auth-service, user-profile-service, notification-service and audit-log-service]({{< rel "assets/img/blog/login-trace-waterfall.png" >}})

Read the header first: **526ms duration, 4 services, depth 7, 15 spans.**

Now read the first row: `api-gateway http post` is **333ms**.

That gap is the whole point of this post.

| Phase | Spans | Blocking the user? |
|---|---|---|
| Sync | `http post` → `UserLoginProcess` → `fetch_user_profile` (166ms) | Yes |
| Handoff | `publish_kafka_event` (10.6ms) → `auth-events send` (10.7ms) | Briefly |
| Async | `consume_auth_event` on notification (202ms) and audit (13.4ms) | No — JWT already returned |

The user waited **333ms**. The trace lasted **526ms**. The 202ms notification consumer ran *after* the response went out.

If you read trace duration as user latency, you would open a ticket to optimise the notification service — the one component that costs the user nothing. The real target is `fetch_user_profile` at 166ms, half the blocking path.

This is the failure mode I see most often with new APM setups: the dashboard is correct, the reading is wrong.

## One pipeline, two backends

The services never embed a vendor SDK. They speak **OTLP only**. The Collector decides where telemetry lands:

```yaml
exporters:
  datadog:
    api:
      key: ${env:DD_API_KEY}
      site: ${env:DD_SITE}
  otlphttp/jaeger:
    endpoint: http://jaeger.spring-datadog-lab.svc.cluster.local:4318
    tls:
      insecure: true

service:
  pipelines:
    traces:
      receivers: [otlp]
      processors: [batch]
      exporters: [datadog, otlphttp/jaeger, debug]
```

Twelve lines that buy vendor flexibility. Same spans, same trace ID, two destinations — Jaeger for fast local drill-down, Datadog for maps, facets, and SLOs.

![Datadog service map for the same trace, showing auth-service at 60 percent of execution time and notification-service at 37 percent]({{< rel "assets/img/blog/datadog-service-map.png" >}})

Same trace, Datadog's view: `auth-service` 60% of exec time (315ms), `notification-service` 37% (192ms), `api-gateway` 1% (6.7ms). The percentages describe *work done*, not *time the user waited* — same trap, different UI.

Swapping backends is a Collector config change and a redeploy. No business code moves. That property is worth more than any single dashboard.

## The Kafka trap

Kafka is where most traces quietly break.

Without W3C `traceparent` written into the message headers by the producer, consumers do not continue the trace — they **start new ones**. Your APM looks healthy. Your service map looks connected. But no single trace crosses the async boundary, so you can never answer "what happened to *this* user's request after we returned 200?"

In this lab, producer and both consumers share one trace ID. That is why `notification-service` and `audit-log-service` appear in the waterfall at all, and why the 202ms consumer is visible as background work rather than invisible work.

The same class of problem hits **virtual threads**. Loom moves continuations across carrier threads; instrumentation that assumes thread-local context will silently drop spans. The lab validates trace context under load specifically so that adopting virtual threads does not quietly cost you observability.

Both cases share one lesson: **context propagation is the feature.** Spans are easy. Keeping them attached to each other across concurrency and network boundaries is the actual engineering.

## Monitors and SLOs as code

Monitors clicked together in a UI drift, and nobody notices until an alert does not fire. In the lab, Datadog monitors, dashboards, and error-budget SLOs are Terraform resources — reviewed in the same PR as the code that emits the telemetry they watch.

The practical effect is small and boring: alerting changes get a diff, a reviewer, and a history. That is the entire benefit, and it is enough.

## Trade-offs

- **Agent + Collector is more moving parts** than a single SDK embed. Worth it when you care about vendor flexibility and ops ownership of the pipeline. Not worth it for one service and one backend.
- **Terraform for Datadog has a learning curve.** The payoff is reviewable alerting, not faster setup — it is slower on day one.
- **The labs are opinionated.** The OTel instrumentation transfers anywhere; the IaC modules are Datadog-specific.
- **This is a laptop, not production.** The numbers above are real measurements from a real distributed trace, but the load is synthetic. Treat the shape as instructive and the absolute values as local.

## Run it yourself

```bash
git clone https://github.com/siosetech/spring-datadog-lab
cd spring-datadog-lab
cp .env.example .env    # add DD_API_KEY and DD_SITE
docker compose up
```

Jaeger comes up on `:9668`. Trigger a login, open the `api-gateway` entry span, and read the waterfall top-down.

A sibling [quarkus-datadog-lab](https://github.com/siosetech/quarkus-datadog-lab) runs the same instrumentation on Quarkus for a JVM-versus-native comparison.

## What I would keep

If I stripped this lab down to one idea worth carrying into a real system: **instrument the boundaries, then learn to read what you captured.** Most teams stop after the first half, get a green dashboard, and optimise the wrong 202 milliseconds.

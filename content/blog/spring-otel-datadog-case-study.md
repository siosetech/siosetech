---
title: "Case study: Spring Boot, OpenTelemetry, and Datadog as code"
description: "How spring-datadog-lab turns APM from a demo into a repeatable pipeline — agent, Collector, virtual threads, and Terraform-managed SLOs."
date: 2026-07-30T06:00:00Z
draft: false
tags: ["Case Study", "OpenTelemetry", "Datadog"]
---

This is a condensed case study of [spring-datadog-lab](https://github.com/siosetech/spring-datadog-lab): a production-shaped lab for Java services that need real tracing, not a hello-world span.

## Problem

Teams often "add Datadog" by dropping an agent and shipping a few custom metrics. That falls apart when:

- Virtual threads (Project Loom) lose trace context across handoffs
- Sidecar vs agent vs exporter choices stay undocumented tribal knowledge
- Monitors and SLOs drift because they were clicked together in the UI

The goal was a **repeatable** path: instrument, collect, export, alert — all reviewable in Git.

## Approach

1. **Spring Boot 4 / Java 25** service with the OpenTelemetry Java agent for auto-instrumentation and selective span enrichment.
2. **OTLP Collector** as the pipeline (receive, process, export) toward Datadog, instead of coupling the app directly to a vendor SDK for every concern.
3. **Trace context on virtual threads** validated under load so Loom adoption does not silently break APM.
4. **Terraform** for Datadog monitors, dashboards, and error-budget SLOs — same PR discipline as application code.
5. **Vault** for dynamic secrets so the lab also exercises a realistic credentials path.

A parallel Quarkus lab exists for A/B comparison (JVM vs native, extension-based OTel, Mutiny pipelines).

## Outcomes

- End-to-end traces that survive modern Java concurrency models
- Collector-centric telemetry path that is easier to reason about in ops reviews
- Monitors and SLOs that cannot silently diverge from the repo
- Study-grade documentation for OpenTelemetry and Datadog certification prep

## Trade-offs

- Agent + Collector is more moving parts than a single SDK embed — worth it when you care about vendor flexibility and ops ownership of the pipeline
- Terraform for Datadog has a learning curve; the payoff is reviewable alerting
- Labs are opinionated (Datadog-backed). The OTel pieces transfer; the IaC modules are Datadog-specific

## Where to go next

- Repo: [spring-datadog-lab](https://github.com/siosetech/spring-datadog-lab)
- Sibling: [quarkus-datadog-lab](https://github.com/siosetech/quarkus-datadog-lab)
- Portfolio overview: [Projects]({{< rel "portfolio/" >}})

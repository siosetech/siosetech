---
title: "What actually matters after you leave the monolith"
description: "Platform engineering, secrets, and observability are not buzzwords — they are the difference between a cluster and a system you can operate."
date: 2026-07-29T10:00:00Z
draft: false
tags: ["Platform Engineering", "Observability"]
---

Moving from a monolith to services on Kubernetes buys flexibility. It also multiplies failure modes. The teams that struggle are rarely short on YAML — they are short on a **paved road**: defaults that make the secure, observable path the easy path.

## Platform first, tools second

Giving every team a raw cluster is not enablement. A useful platform answers a few boring questions well:

- How do I provision infrastructure the same way every time?
- Where do secrets live, and how do services get them without copying files around?
- How do I see a request across twenty services when something is slow?

In practice that starts with **Terraform** for repeatable environments and **Vault** (or an equivalent) for short-lived credentials. Everything else sits on top of that baseline.

## Observability is how you keep the flexibility

Traditional monitoring asks whether a box is up. Distributed systems need **why** a user path broke. That is why **OpenTelemetry** for instrumentation and a backend that correlates traces, metrics, and logs (for example **Datadog**) matter more than another dashboard screenshot.

If you cannot follow a request across service boundaries — including on virtual threads or reactive pipelines — you do not have observability. You have hope.

## What I am practicing in public

I keep that loop concrete in labs: Spring Boot and Quarkus services instrumented with OpenTelemetry, shipped to Datadog, with monitors and SLOs managed as code. The public write-ups live in the [portfolio]({{< rel "portfolio/" >}}) and the longer study notes in the lab repositories.

Next on the path: GitOps depth with Flux and Argo (`cgoa-labs` / `capa-labs`) after the current cloud certification milestone.

---
title: "The paved road you skip becomes someone else's multi-year project"
description: "Platform defaults are not developer comfort. Skipping them compounds — and the bill arrives years later, on live traffic, with no rollback window."
date: 2026-07-29T10:00:00Z
draft: false
tags: ["Platform Engineering", "Observability"]
---

Most writing about platform engineering comes from people who built the paved road. I spent six years on the other end of it — modernising payment systems where the road had never been paved.

That work looked like this: upgrading core banking services from **Java 6 to 8** and **Spring 3 to 5** while they kept processing live traffic. Replacing an **Axis 1.4** SOAP stack — software that had been end-of-life for over a decade — with Apache CXF 3.5.x, because a known vulnerability class was sitting in the payment path. Moving caching from Infinispan to Redis 6 under high-volume flows.

None of that was hard in the sense of clever. It was hard in the sense of **irreversible**.

## Constraints, not preferences

In a regulated, high-volume payment environment, a few things stop being negotiable:

- You do not get a maintenance window that fits a big-bang migration.
- You do not get to "add a log line and redeploy" to understand what just happened.
- Every change is reviewed by people whose job is to stop you: network, operations, DBA, security. Correctly so.

Work under those constraints long enough and your definition of engineering shifts. You stop optimising for how fast you can write the change and start optimising for **how safely you can undo it**. Strangler-fig over rewrite. Dual-run over cutover. Feature flags not as a product tool but as a rollback mechanism.

That is what a platform is actually for. Not developer comfort — **reversibility**.

## Why skipped defaults compound

The Axis 1.4 dependency was not a decision anyone made. It was a decision nobody made, repeatedly, for years. Each release where upgrading was deferred was individually rational. The accumulation was not.

This is the part greenfield platform posts miss. A paved road is not primarily about making today's deployment pleasant. It is about ensuring no single component becomes so entangled that removing it turns into a multi-year project, staffed by someone who was not there when the choice was made.

Concretely, the defaults that pay off are boring:

- **Provisioning that is repeatable.** If environments drift, you cannot test a migration honestly — and an untested migration on live payment traffic is not a migration, it is a hope.
- **Secrets with a lifecycle.** Static credentials copied between config files are why "just rotate the key" becomes a quarter of work.
- **A dependency you can actually replace.** If swapping a library means touching business logic in forty places, you will not swap it. You will defer it. See above.

Terraform and Vault are the tools I reach for now. But the tool is downstream of the property: can this be changed later, by someone else, safely?

## Observability is the other half of reversibility

Traditional monitoring asks whether a box is up. Distributed systems need **why** a user path broke — and where you cannot casually redeploy to investigate, you often get one shot at diagnosis from the telemetry you already captured.

That is why instrumentation at the boundaries matters more than another dashboard. If you cannot follow a request across service boundaries — including across Kafka, virtual threads, or reactive pipelines — you do not have observability. You have hope.

I keep that concrete in public labs: Spring Boot and Quarkus services instrumented with OpenTelemetry, exported through a Collector, with monitors and SLOs managed as code. The [case study]({{< rel "blog/spring-otel-datadog-case-study/" >}}) walks through a single trace and why the number most people read first is the wrong one.

## The part I did not expect

Six years of removing other people's deferred decisions taught me more about platform design than building a greenfield system would have. When you inherit the consequences, you stop treating "we'll clean it up later" as a plan and start treating it as a forecast.

The platform is not the tooling. It is the set of decisions a future engineer no longer has to make — and the set of choices they can still reverse.

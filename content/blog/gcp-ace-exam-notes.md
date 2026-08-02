---
title: "Passing GCP Associate Cloud Engineer: what the exam actually tests"
description: "IAM least privilege, networking choices, compute trade-offs — plus the ten weeks I lost to postponing an exam I was already ready for."
date: 2026-07-30T22:00:00Z
draft: false
tags: ["Google Cloud", "Certification", "Cloud Engineering"]
---

I passed the **Google Cloud Associate Cloud Engineer (ACE)** exam. Credential: [Credly badge](https://www.credly.com/badges/107ab71c-44ee-4912-8499-9e3c8d165dce/public_url).

This is not a dump of exam questions. It is what I would tell another engineer who already knows cloud basics and wants to know where ACE is actually hard.

Written the same afternoon, a couple of hours after the result came through, while the shape of the questions was still sharp.

## What ACE is really measuring

ACE is less "can you click Deploy" and more "can you pick the **right** Google Cloud building block under constraints":

- **Least privilege** — not "does this role work?", but "which predefined role is the narrowest that still works?"
- **Networking shape** — VPC, subnets, firewall rules, Private Google Access, Cloud NAT, load balancer family (global vs regional, HTTP(S) vs TCP/UDP)
- **Compute fit** — GCE vs GKE vs Cloud Run vs App Engine for a given ops/scaling story
- **Data and ops** — Cloud Storage classes, Cloud SQL connectivity patterns, Cloud Monitoring / Logging enough to operate, not to design a full observability platform
- **Identity and org** — service accounts, IAM conditions, basic resource hierarchy (org / folder / project)

If you treat it as a console tour, you will under-prepare. If you treat it as architecture decision drills with Google names, you will be closer.

## Labs teach the console; the exam tests decisions

I built a lot of muscle memory on **Google Cloud Skills Boost** — badges and points across ACE, Developer, Architect, Security, and Networking paths. Labs are excellent for:

- Wiring a VPC and seeing firewall behavior
- Attaching service accounts and watching IAM deny/allow
- Deploying a workload and following logs

They are weaker at forcing this under time pressure:

> Application X needs to read objects in bucket Y from a GCE instance in a private subnet. Which combination of IAM role, network path, and API access is correct — and what do you *not* open?

That second skill is what practice exams and scenario drills train.

## I planned to sit it in May. I sat it at the end of July.

That is the most useful number in this post, so here it is in full.

I booked for **15 May**, with early June as the absolute worst case. I took the exam on **30 July**. Three postponements got me there:

- **One was forced.** The remote-proctoring system check failed and the slot was gone. Nothing to learn from except the obvious: run the system check days in advance, not an hour before. It is the one failure mode that has nothing to do with how well you know IAM.
- **Two were mine.** Practice scores sat in the 70s, review felt repetitive, and I decided I was not ready.

I was ready. Two reframes I wish I had applied instead of rescheduling:

1. **Bored is not the same as unprepared.** When the material feels familiar and you are tired of rereading the same IAM tables, that is usually readiness. Novelty is not the signal you think it is — by the end, nothing should feel new.
2. **Hard practice banks run hot.** I worked through two **Tutorials Dojo** sets for pressure testing. A mid-70 there is not a forecast that you will scrape a pass on exam day; those sets are deliberately calibrated tougher than the real thing. I read mine as a warning when it was closer to a good sign.

Here is the uncomfortable part: I can write "boredom is a go-signal" clearly enough to put it in a blog post, and I still postponed twice after recognising it. Knowing the heuristic and acting on it are separate skills. The gap between them cost me about ten weeks.

If your practice scores have plateaued in the 70s on a hard bank and your review sessions have stopped teaching you anything, that is not a reason to reschedule. That is the exam telling you to book it.

For structured video review, when labs alone felt scattered, Vladimir Raykov’s GCP ACE course on Udemy was systematic enough to keep the domains ordered.

## Domains I would prioritize in the last week

Not exhaustive — just where I saw the most decision density:

### IAM and service accounts

- Prefer predefined roles over Editor/Owner mental shortcuts
- Know when a **service account** needs `roles/iam.serviceAccountUser` vs the resource role itself
- Understand impersonation vs key files (prefer no long-lived keys)
- Resource hierarchy: who inherits what

### Networking

- Default deny mental model for firewalls; ingress vs egress
- Private Google Access / Cloud NAT for private VMs reaching Google APIs and the internet
- Shared VPC vs standalone project (conceptual level)
- Load balancing: pick by traffic type and scope, not by logo familiarity

### Compute

This is the densest decision area on the exam, so here is the table I actually studied from. ACE questions rarely name the product — they describe a constraint and expect you to map it.

| Signal in the question | Pick | Why |
|---|---|---|
| "scales to zero", "pay per request", "container, but we don't want to run a cluster" | **Cloud Run** | Request-driven and fully managed; no node operations |
| "we already run Kubernetes", "sidecars", "DaemonSet", "custom controllers" | **GKE** | You need control-plane semantics, not just containers |
| "specific OS or kernel", "licensed software", "persistent disk", "control the host network" | **GCE** | The only option with full VM ownership |
| "existing app, no containers, managed runtime, traffic splitting" | **App Engine** | Source deploy with versions and split traffic built in |

Managed instance groups and autoscaling signals sit on top of the GCE row — know which signal (CPU, LB capacity, custom metric) fits which scenario.


### Storage and data

Cloud Storage classes are the other place a table beats prose. The trap is that the answer is usually driven by the **minimum storage duration** (early-deletion fee), not by access frequency alone:

| Access pattern | Class | Minimum storage duration |
|---|---|---|
| Frequent, hot | Standard | none |
| Roughly monthly | Nearline | 30 days |
| Roughly quarterly | Coldline | 90 days |
| Yearly, or compliance retention | Archive | 365 days |

If a question says data is written once and read "maybe once a year, kept for seven years", Archive is right — and picking Coldline is the mistake the wording is fishing for.

- Uniform bucket-level access vs ACLs (prefer IAM)
- Cloud SQL: private IP, Cloud SQL Auth Proxy patterns at a high level

### Operations

- Cloud Monitoring metrics vs Logging sinks (who exports where)
- Basic alerting: condition, notification channel
- Cloud Build / Artifact Registry enough to reason about CI → deploy, not to be a full DevOps exam

## How this fits the rest of the stack

ACE sits next to credentials I already hold: **KCNA**, **KCSA**, **Terraform Associate**, **Vault Associate**. On the Google side it anchors project-level operations; on the Kubernetes side the next depth is Helm, then **CKA** / **CKS**, toward SRE and platform engineering.

Terraform remains Intermediate in my own skills matrix on purpose: ACE does not make you an IaC expert. It makes you fluent in the platform you automate.

## Practical study loop that worked

1. **Skills Boost lab** for a domain (do it once hands-on)
2. **Short notes** — decision tables, not paragraphs (e.g. "private VM → Google APIs" paths)
3. **Tutorials Dojo set** — review every miss as "which constraint did I ignore?"
4. **Stop polishing** when misses are careless or trick-calibration, not conceptual holes

## Closing

ACE is a solid associate-level signal that you can operate on Google Cloud without guessing. Pair it with real labs and harder practice banks, and treat boredom during review as a possible go-signal — not a reason to postpone forever.

If you are preparing: focus on **least privilege + network path + compute fit**. That triad shows up more than any single product deep dive.

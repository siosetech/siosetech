# 📂 Portfolio — Featured Projects

> A curated showcase of hands-on projects demonstrating cloud-native architecture, observability engineering, and modern Java development.

---

## 🔬 Hands-On Labs

### 1. spring-datadog-lab

> **Full-stack observability with Spring Boot 4, OpenTelemetry, and Datadog APM — including Terraform IaC for monitors and dashboards.**

[![Repository](https://img.shields.io/badge/GitHub-spring--datadog--lab-181717?style=for-the-badge&logo=github)](https://github.com/siosetech/spring-datadog-lab)

**Description**

A production-realistic lab that demonstrates end-to-end APM integration for a Spring Boot 4 microservice. The project goes beyond "hello world" instrumentation — it covers agent configuration, custom span attributes, Micrometer metrics, structured logging with MDC trace correlation, and full Terraform IaC for Datadog monitors and dashboards.

**Tech Stack**

| Layer | Technology |
| :--- | :--- |
| Framework | Spring Boot 4.x, Spring Web MVC |
| Observability | OpenTelemetry Java Agent, Datadog Agent |
| Metrics | Micrometer + Prometheus + Datadog |
| Logging | Logback + JSON structured logs + MDC |
| Infrastructure | Docker, Docker Compose |
| IaC | Terraform (Datadog provider) |
| Secrets | HashiCorp Vault |
| Language | Java 25 (virtual threads) |

**Key Achievements**

- ✅ Full OpenTelemetry instrumentation (traces, metrics, logs)
- ✅ Datadog APM integration with Agent and OTLP exporter
- ✅ Custom span enrichment and baggage propagation
- ✅ SLO / SLI monitors via Terraform Datadog provider
- ✅ Vault integration for secrets injection
- ✅ GitHub Actions CI with OTel test validation
- ✅ Comprehensive documentation series (4 phases, ~10,000 lines)

**Learning Outcomes**

- Deep understanding of the OTel SDK vs Agent instrumentation trade-offs
- Production patterns for trace context propagation across service boundaries
- Terraform-managed Datadog resources (monitors, dashboards, SLOs)
- Spring Boot 4 virtual thread observability considerations

---

### 2. quarkus-datadog-lab

> **Quarkus-native observability: GraalVM native compilation, OTLP Collector, and Datadog APM with side-by-side Spring comparison.**

[![Repository](https://img.shields.io/badge/GitHub-quarkus--datadog--lab-181717?style=for-the-badge&logo=github)](https://github.com/siosetech/quarkus-datadog-lab)

**Description**

A companion lab to `spring-datadog-lab` focused on the Quarkus ecosystem. Demonstrates how the Quarkus OTel extension differs from Spring's approach, covers native compilation challenges with OpenTelemetry, reactive Mutiny pipelines with trace context propagation, and direct comparison with the Spring Boot implementation.

**Tech Stack**

| Layer | Technology |
| :--- | :--- |
| Framework | Quarkus 3.x |
| Compilation | JVM mode + GraalVM native image |
| Observability | Quarkus OpenTelemetry extension, Datadog OTLP |
| Metrics | Quarkus Micrometer extension |
| Logging | JBoss Logging + JSON + MDC |
| Infrastructure | Docker, Docker Compose |
| IaC | Terraform (Datadog provider) |
| Secrets | HashiCorp Vault extension |
| Language | Java 25, Reactive (Mutiny) |

**Key Achievements**

- ✅ Quarkus OTel extension auto-instrumentation
- ✅ Native image build with OTel agent compatibility
- ✅ Reactive pipeline trace context preservation (Mutiny)
- ✅ OTLP Collector sidecar configuration
- ✅ Direct A/B comparison with Spring Boot lab
- ✅ Performance benchmarks (JVM vs native startup, memory)

**Learning Outcomes**

- Quarkus OTel extension vs manual SDK configuration
- Reactive vs imperative trace context handling
- Native compilation constraints for instrumentation agents
- Quarkus Vault extension for secrets management

---

<!-- HIDDEN until the repo is public. Restore this section when it ships.

### azure-dev-labs

> **Azure-focused cloud-native labs and reference implementations across platform, DevOps, and infrastructure patterns.**

**Description**

A dedicated repository for Azure-centric experiments and implementation guides, including Kubernetes operations, infrastructure automation, and platform engineering scenarios.

**Focus Areas**

- Azure cloud-native architecture patterns
- AKS and Kubernetes operational scenarios
- Terraform-based infrastructure provisioning
- DevOps workflows and deployment automation

-->

### 3. fleet-forge

> **Multi-tenant logistics and delivery platform with event-driven microservices, Vault/Keycloak security, and GitOps deployment model.**

> _Repository is currently private._

**Description**

`fleet-forge` is an end-to-end platform engineering project that combines business-domain microservices (orders, routing, location, reporting, identity, integration) with production-minded infrastructure. It demonstrates tenant isolation, outbox + CDC eventing, centralized secrets with Vault, OIDC/RBAC with Keycloak, and observable runtime behavior via OpenTelemetry, Prometheus, Grafana, and Jaeger.

**Tech Stack**

| Layer | Technology |
| :--- | :--- |
| Runtime | Spring Boot microservices (Java 25) |
| Data | PostgreSQL, Redis GEO, ClickHouse |
| Messaging | Kafka + Debezium (outbox CDC) |
| Identity | Keycloak (OIDC, roles, tenant claims) |
| Secrets | HashiCorp Vault + AppRole |
| Platform | Kubernetes, Helm, ArgoCD GitOps |
| Observability | OpenTelemetry, Prometheus, Grafana, Jaeger |
| Delivery | Docker, GitHub Actions |

**Key Achievements**

- ✅ Multi-tenant access model with tenant-scoped flows
- ✅ Outbox + Debezium CDC pipeline for reliable event propagation
- ✅ Vault/AppRole secret delivery pattern for app services
- ✅ GitOps packaging with separate infra and app charts
- ✅ Trace + metric visibility across services and infrastructure
- ✅ Public-readiness hardening (secret hygiene + leak scanning)

---

<!-- REMOVED: these three sections described platform work that is not backed by a repository
     and overlapped with fleet-forge. Re-add only what ships publicly. -->

## 📚 Documentation Series (spring-datadog-lab)

As part of the certification preparation work, a comprehensive documentation series was produced inside `spring-datadog-lab/docs/`:

| Document | Description | Lines |
| :--- | :--- | ---: |
| `OPENTELEMETRY_FUNDAMENTALS.md` | Core OTel concepts, SDK, Collector architecture | ~2,000 |
| `DATADOG_INTEGRATION.md` | APM, DogStatsD, OTLP, Terraform IaC, SLOs | ~900 |
| `SPRING_vs_QUARKUS_OTEL.md` | Side-by-side framework comparison | ~1,800 |
| `TEST_SCENARIOS_AND_VALIDATION.md` | Unit / integration / performance tests, exam scenarios | ~2,764 |

---

> 🔗 Back to [README.md](./README.md) | 📊 [SKILLS.md](./SKILLS.md) | 📅 [EXPERIENCE.md](./EXPERIENCE.md) | 🤝 [CONTRIBUTIONS.md](./CONTRIBUTIONS.md)

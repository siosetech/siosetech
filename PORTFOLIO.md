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

## 🏗️ Architecture & Platform Projects

### 3. Multi-Tenant Platform (Enterprise)

**Description**

Designed and implemented a multi-tenant SaaS platform serving multiple enterprise clients with strict data isolation, per-tenant configuration, and horizontal scalability. Built on Kubernetes with Keycloak for identity, Vault for secrets, and custom tenant routing middleware.

**Tech Stack**

| Layer | Technology |
| :--- | :--- |
| Runtime | Kubernetes (GKE) |
| Identity | Keycloak (OIDC / SAML) |
| Secrets | HashiCorp Vault |
| Cache | Redis Cluster |
| Database | PostgreSQL (per-tenant schemas) |
| Messaging | Apache Kafka |
| IaC | Terraform + Helm |
| Observability | Prometheus + Grafana + Jaeger |

**Key Achievements**

- ✅ Zero-downtime tenant onboarding
- ✅ Per-tenant rate limiting and quota management
- ✅ Keycloak realm-per-tenant with federation
- ✅ Vault dynamic database credentials (no static passwords)
- ✅ Kafka topic-per-tenant event streaming

---

### 4. Infrastructure as Code (IaC) Library

**Description**

Reusable Terraform modules and Helm charts for cloud-native deployments across GCP, Azure, and on-prem Kubernetes clusters. Covers networking, identity, observability stack, and application bootstrapping.

**Tech Stack**

| Component | Technology |
| :--- | :--- |
| IaC | Terraform (modules + workspaces) |
| Packaging | Helm 3 + Kustomize |
| Cloud | GCP, Azure, AWS |
| CI/CD | GitHub Actions, ArgoCD |
| Security | OPA / Gatekeeper policies |

**Key Achievements**

- ✅ DRY module library (network, IAM, GKE, monitoring)
- ✅ Environment parity (dev / staging / prod) with workspace isolation
- ✅ Policy-as-code enforcement via OPA
- ✅ Automated drift detection in CI

---

### 5. Observability Stack Bootstrap

**Description**

A composable, GitOps-managed observability stack deploying Prometheus, Grafana, Loki, Tempo, and OpenTelemetry Collector via Helm and ArgoCD. Designed as a reference implementation for platform teams.

**Tech Stack**

| Component | Technology |
| :--- | :--- |
| Metrics | Prometheus + Alertmanager |
| Dashboards | Grafana |
| Logs | Loki + Promtail |
| Traces | Tempo + Jaeger |
| Collection | OpenTelemetry Collector |
| GitOps | ArgoCD |

**Key Achievements**

- ✅ Single-command stack deployment
- ✅ Pre-built dashboards for Spring Boot and Quarkus services
- ✅ Auto-discovery of scrape targets via Prometheus operator
- ✅ Trace-to-log correlation across all three pillars

---

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

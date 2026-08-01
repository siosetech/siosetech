---
title: "Portfolio"
---

<!-- Page Hero -->
<section class="page-hero" aria-labelledby="portfolio-heading">
<div class="container">
<h1 id="portfolio-heading">Project Portfolio</h1>
<p>Hands-on labs, open-source work, and architecture showcases built over 15+ years of software engineering.</p>
</div>
</section>

<!-- Filter Bar -->
<section class="section" style="padding-bottom:0">
<div class="container">
<div class="filter-bar" role="group" aria-label="Filter projects by category">
<button class="filter-btn active" data-filter="all">All Projects</button>
<button class="filter-btn" data-filter="observability">Observability</button>
<button class="filter-btn" data-filter="infrastructure">Infrastructure</button>
<!-- HIDDEN with cgoa-labs / capa-labs. Restore together.
<button class="filter-btn" data-filter="gitops">GitOps</button>
-->
</div>
</div>
</section>

<!-- Projects -->
<section class="section" style="padding-top:1.5rem" aria-labelledby="projects-section-heading">
<div class="container">
<h2 id="projects-section-heading" class="sr-only">Projects</h2>

<!-- spring-datadog-lab -->
<article class="card" style="margin-bottom:2rem" data-category="observability">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon spring" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;flex-shrink:0">SB</div>
<div>
<h3 style="margin:0">spring-datadog-lab</h3>
<span class="project-status status-active" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Active</span>
</div>
</div>
<p>A production-shaped APM lab: Spring Boot 4 instrumented with OpenTelemetry, exported via OTLP Collector to Datadog, with monitors and SLOs managed in Terraform.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Spring Boot 4</span>
<span class="tag">Java 25</span>
<span class="tag">OpenTelemetry</span>
<span class="tag">Datadog APM</span>
<span class="tag">Terraform</span>
<span class="tag">Docker Compose</span>
<span class="tag">HashiCorp Vault</span>
<span class="tag">PostgreSQL</span>
</div>
<h4 style="margin-bottom:0.5rem">Problem</h4>
<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1rem">APM demos that ignore Loom context, Collector design, and UI-clicked monitors do not survive production reviews.</p>
<h4 style="margin-bottom:0.5rem">Approach</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> OTel Java agent + custom span enrichment</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Virtual thread trace-context preservation</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> OTLP Collector pipeline to Datadog</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Terraform-managed monitors, SLOs, dashboards</li>
</ul>
<h4 style="margin-bottom:0.5rem">Outcome</h4>
<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">Repeatable instrumentation and alerting path; study docs for OTel/Datadog certification prep.</p>
<div style="display:flex;gap:0.75rem;flex-wrap:wrap">
<a href="https://github.com/siosetech/spring-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
<a href="{{< rel "blog/spring-otel-datadog-case-study/" >}}" class="btn btn-secondary btn-sm">Case study</a>
</div>
</div>
<div style="min-width:200px;flex-shrink:0">
<div style="background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:10px;padding:1.25rem">
<h4 style="font-size:0.85rem;margin-bottom:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Documentation Series</h4>
<ul style="font-size:0.82rem;color:var(--text-secondary)">
<li style="padding:0.3rem 0;border-bottom:1px solid var(--border-color)">OPENTELEMETRY_FUNDAMENTALS.md</li>
<li style="padding:0.3rem 0;border-bottom:1px solid var(--border-color)">DATADOG_INTEGRATION.md</li>
<li style="padding:0.3rem 0;border-bottom:1px solid var(--border-color)">SPRING_vs_QUARKUS_OTEL.md</li>
<li style="padding:0.3rem 0">TEST_SCENARIOS.md</li>
</ul>
</div>
</div>
</div>
</article>

<!-- quarkus-datadog-lab -->
<article class="card" style="margin-bottom:2rem" data-category="observability">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon quarkus" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;flex-shrink:0">Q</div>
<div>
<h3 style="margin:0">quarkus-datadog-lab</h3>
<span class="project-status status-active" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Active</span>
</div>
</div>
<p>Quarkus-native observability lab extending the Spring Boot lab concepts — GraalVM native builds, reactive Mutiny pipelines, and a direct A/B comparison with the Spring counterpart.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Quarkus 3</span>
<span class="tag">Java 25</span>
<span class="tag">GraalVM Native</span>
<span class="tag">OpenTelemetry</span>
<span class="tag">Datadog APM</span>
<span class="tag">Mutiny Reactive</span>
<span class="tag">HashiCorp Vault</span>
<span class="tag">Terraform</span>
</div>
<h4 style="margin-bottom:0.5rem">Problem</h4>
<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1rem">Spring-centric OTel guidance does not answer native-image cold start, Mutiny context, or framework extension trade-offs.</p>
<h4 style="margin-bottom:0.5rem">Approach</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Quarkus OTel extension auto-instrumentation</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> GraalVM native image with OTel compatibility</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Reactive Mutiny pipeline trace context</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> JVM vs native startup and memory benchmarks</li>
</ul>
<h4 style="margin-bottom:0.5rem">Outcome</h4>
<p style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">Side-by-side Spring comparison; sub-100ms native cold start path validated in the lab.</p>
<div style="display:flex;gap:0.75rem">
<a href="https://github.com/siosetech/quarkus-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
</div>
</div>
<div style="min-width:200px;flex-shrink:0">
<div style="background:var(--bg-secondary);border:1px solid var(--border-color);border-radius:10px;padding:1.25rem">
<h4 style="font-size:0.85rem;margin-bottom:0.75rem;color:var(--text-muted);text-transform:uppercase;letter-spacing:0.05em">Performance Highlights</h4>
<ul style="font-size:0.82rem;color:var(--text-secondary)">
<li style="padding:0.3rem 0;border-bottom:1px solid var(--border-color)">⚡ &lt;100ms native cold start</li>
<li style="padding:0.3rem 0;border-bottom:1px solid var(--border-color)">💾 Lower memory footprint vs JVM</li>
<li style="padding:0.3rem 0;border-bottom:1px solid var(--border-color)">🔄 Reactive &amp; imperative modes</li>
<li style="padding:0.3rem 0">📊 Direct Spring A/B comparison</li>
</ul>
</div>
</div>
</div>
</article>

<!-- HIDDEN until the repo is public. Remove this comment wrapper to restore the card. (azure-dev-labs)
<article class="card" style="margin-bottom:2rem" data-category="infrastructure">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;background:linear-gradient(135deg,#0078d422,#0078d444);color:#0078d4;flex-shrink:0">AZ</div>
<div>
<h3 style="margin:0">azure-dev-labs</h3>
<span class="project-status status-wip" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Coming soon</span>
</div>
</div>
<p>Azure-focused cloud-native labs and reference implementations covering AKS operations, Terraform-based infrastructure automation, and DevOps delivery patterns. Repository remains private until public release.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Azure</span>
<span class="tag">AKS</span>
<span class="tag">Terraform</span>
<span class="tag">DevOps</span>
<span class="tag">Cloud-Native</span>
</div>
<h4 style="margin-bottom:0.75rem">Focus Areas</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Azure architecture and platform patterns</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> AKS operational runbooks and scenarios</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Terraform modules and environment automation</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> CI/CD and deployment workflow references</li>
</ul>
</div>
</div>
</article>
-->

<!-- fleet-forge -->
<article class="card" style="margin-bottom:2rem" data-category="infrastructure">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;background:linear-gradient(135deg,#0ea5e922,#0ea5e944);color:#0ea5e9;flex-shrink:0">FF</div>
<div>
<h3 style="margin:0">fleet-forge</h3>
<span class="project-status status-wip" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Private</span>
</div>
</div>
<p>Multi-tenant logistics platform combining business microservices with platform engineering practices — tenant-aware APIs, event-driven architecture, Vault + Keycloak, and GitOps-ready delivery. Repository is private.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Spring Boot</span>
<span class="tag">Java 25</span>
<span class="tag">Kafka</span>
<span class="tag">Debezium CDC</span>
<span class="tag">PostgreSQL</span>
<span class="tag">Redis GEO</span>
<span class="tag">ClickHouse</span>
<span class="tag">Vault</span>
<span class="tag">Keycloak</span>
<span class="tag">Kubernetes</span>
<span class="tag">ArgoCD</span>
<span class="tag">OpenTelemetry</span>
</div>
<h4 style="margin-bottom:0.75rem">Focus Areas</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Tenant-scoped domain and reporting flows</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Outbox + Debezium CDC pipeline to Kafka</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Vault AppRole and Keycloak OIDC RBAC</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Helm charts with ArgoCD GitOps path</li>
</ul>
</div>
</div>
</article>

<!-- HIDDEN until the repo is public. Remove this comment wrapper to restore the card. (cgoa-labs, capa-labs)
<article class="card" style="margin-bottom:2rem" data-category="gitops">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;background:linear-gradient(135deg,#fc6d2622,#fc6d2644);color:#fc6d26;flex-shrink:0">CG</div>
<div>
<h3 style="margin:0">cgoa-labs</h3>
<span class="project-status status-wip" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Coming soon</span>
</div>
</div>
<p>Hands-on lab path for the Certified GitOps Associate (CGOA) exam — Flux as the reconciler, GitLab CI for build/push only, and Minikube for local cluster practice.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Flux</span>
<span class="tag">GitOps</span>
<span class="tag">GitLab CI</span>
<span class="tag">Kubernetes</span>
<span class="tag">Minikube</span>
<span class="tag">Java</span>
</div>
<h4 style="margin-bottom:0.75rem">Focus Areas</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> CGOA domain-mapped lab chapters</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Desired-state delivery with Flux (no kubectl apply from CI)</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> App repo + gitops repo split</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Progressive delivery and platform/SRE capstone track</li>
</ul>
</div>
</div>
</article>

capa-labs
<article class="card" style="margin-bottom:2rem" data-category="gitops">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;background:linear-gradient(135deg,#ef7b4d22,#ef7b4d44);color:#ef7b4d;flex-shrink:0">CA</div>
<div>
<h3 style="margin:0">capa-labs</h3>
<span class="project-status status-wip" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Coming soon</span>
</div>
</div>
<p>Preparation environment for the Certified Argo Project Associate (CAPA) exam — covering Argo CD, Workflows, Rollouts, and Events with Helm and Kubernetes practice.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Argo CD</span>
<span class="tag">Argo Workflows</span>
<span class="tag">Argo Rollouts</span>
<span class="tag">Argo Events</span>
<span class="tag">Helm</span>
<span class="tag">Kubernetes</span>
</div>
<h4 style="margin-bottom:0.75rem">Focus Areas</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Full Argo project suite aligned to CAPA weights</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Argo CD + Helm deep practice</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Workflows as the largest exam domain</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Rollouts and Events labs for progressive delivery</li>
</ul>
</div>
</div>
</article>
-->

<!-- Terraform Datadog IaC (part of spring-datadog-lab) -->
<article class="card" data-category="observability">
<div style="display:flex;align-items:flex-start;gap:1.5rem;flex-wrap:wrap">
<div style="flex:1;min-width:260px">
<div style="display:flex;align-items:center;gap:1rem;margin-bottom:0.75rem">
<div class="project-icon" style="width:48px;height:48px;border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:0.85rem;font-weight:700;background:linear-gradient(135deg,#844fba22,#844fba44);color:#844fba;flex-shrink:0">TF</div>
<div>
<h3 style="margin:0">Terraform Datadog IaC</h3>
<span class="project-status status-active" style="font-size:0.75rem;padding:0.2rem 0.6rem;border-radius:100px">Part of spring-datadog-lab</span>
</div>
</div>
<p>Reusable Terraform modules for Datadog observability infrastructure — monitors, SLOs, dashboards, and alerting policies managed as code alongside application deployments.</p>
<div class="tech-tags" style="margin-bottom:1.25rem">
<span class="tag">Terraform</span>
<span class="tag">Datadog Provider</span>
<span class="tag">HCL</span>
<span class="tag">GitHub Actions</span>
<span class="tag">IaC</span>
</div>
<h4 style="margin-bottom:0.75rem">Capabilities</h4>
<ul style="font-size:0.9rem;color:var(--text-secondary);margin-bottom:1.25rem">
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Datadog monitors with composite alerting</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Error-budget SLOs (availability &amp; latency)</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Template-variable dashboards as JSON</li>
<li style="padding:0.2rem 0;padding-left:1rem;position:relative"><span style="position:absolute;left:0;color:var(--success);font-weight:700">✓</span> Environment-specific configurations (dev/staging/prod)</li>
</ul>
<div style="display:flex;gap:0.75rem">
<a href="https://github.com/siosetech/spring-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">View in spring-datadog-lab ↗</a>
</div>
</div>
</div>
</article>

</div>
</section>

<!-- CTA -->
<section class="cta-section" aria-labelledby="portfolio-cta">
<div class="container">
<h2 id="portfolio-cta">Interested in Collaborating?</h2>
<p>I'm always open to interesting architecture challenges, consulting work, and technical discussions.</p>
<div class="cta-actions">
<a href="mailto:fatih@siosetech.com" class="btn btn-primary">Get in Touch</a>
<a href="https://www.linkedin.com/in/sioseforge/" class="btn btn-secondary" target="_blank" rel="noopener">LinkedIn</a>
</div>
</div>
</section>


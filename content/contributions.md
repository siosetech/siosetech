---
title: "Contributions"
---

<section class="page-hero" aria-labelledby="contrib-heading">
<div class="container">
<h1 id="contrib-heading">Contributions</h1>
<p>Public labs, write-ups, and delivery with partner teams.</p>
</div>
</section>

<!-- Documentation Series -->
<section class="section" aria-labelledby="docs-heading">
<div class="container">
<div class="section-header">
<h2 id="docs-heading">Technical Documentation</h2>
<div class="section-divider"></div>
<p>Notes from the OpenTelemetry and Datadog lab repos</p>
</div>
<div class="contrib-grid">

<div class="contrib-card">
<div class="contrib-card-header">
<h4>OpenTelemetry Fundamentals</h4>
</div>
<p>Core OTel concepts, SDK architecture, Collector pipeline configuration, context propagation, and instrumentation strategies for Java services.</p>
<div class="tech-tags">
<span class="tag">OpenTelemetry</span>
<span class="tag">Java SDK</span>
<span class="tag">OTel Collector</span>
</div>
<div class="contrib-stats">
<div class="contrib-stat"><strong>Java</strong><span>instrumentation</span></div>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/spring-datadog-lab/blob/main/docs/OPENTELEMETRY_FUNDAMENTALS.md" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Read on GitHub ↗</a>
</div>
</div>

<div class="contrib-card">
<div class="contrib-card-header">
<h4>Datadog Integration</h4>
</div>
<p>Datadog APM integration guide — APM architecture, DogStatsD, OTLP, Terraform IaC for monitors and SLOs, log correlation.</p>
<div class="tech-tags">
<span class="tag">Datadog APM</span>
<span class="tag">Terraform</span>
<span class="tag">SLOs</span>
</div>
<div class="contrib-stats">
<div class="contrib-stat"><strong>APM</strong><span>Datadog</span></div>
<div class="contrib-stat"><strong>IaC</strong><span>monitors &amp; SLOs</span></div>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/spring-datadog-lab/blob/main/docs/DATADOG_INTEGRATION.md" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Read on GitHub ↗</a>
</div>
</div>

<div class="contrib-card">
<div class="contrib-card-header">
<h4>Spring vs Quarkus OTel</h4>
</div>
<p>Side-by-side framework comparison — OTel instrumentation differences, virtual threads vs Mutiny reactive, performance benchmarks, migration strategies.</p>
<div class="tech-tags">
<span class="tag">Spring Boot</span>
<span class="tag">Quarkus</span>
<span class="tag">Comparison</span>
</div>
<div class="contrib-stats">
<div class="contrib-stat"><strong>A/B</strong><span>frameworks</span></div>
<div class="contrib-stat"><strong>150+</strong><span>code examples</span></div>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/spring-datadog-lab/blob/main/docs/SPRING_vs_QUARKUS_OTEL.md" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Read on GitHub ↗</a>
</div>
</div>

<div class="contrib-card">
<div class="contrib-card-header">
<h4>Test Scenarios &amp; Validation</h4>
</div>
<p>Trace checks with Testcontainers and k6 — unit, integration, and load.</p>
<div class="tech-tags">
<span class="tag">Testing</span>
<span class="tag">Testcontainers</span>
<span class="tag">k6</span>
<span class="tag">CI/CD</span>
</div>
<div class="contrib-stats">
<div class="contrib-stat"><strong>e2e</strong><span>traces</span></div>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/spring-datadog-lab/blob/main/docs/TEST_SCENARIOS_AND_VALIDATION.md" class="btn btn-outline btn-sm" target="_blank" rel="noopener">Read on GitHub ↗</a>
</div>
</div>

</div>

<!-- Series Summary -->
<div class="card" style="margin-top:2rem">
<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1.5rem;text-align:center">
<div>
<div style="font-size:2rem;font-weight:800;color:var(--accent)">4</div>
<div style="font-size:0.82rem;color:var(--text-muted)">Lab notes</div>
</div>
<div>
<div style="font-size:2rem;font-weight:800;color:var(--accent)">150+</div>
<div style="font-size:0.82rem;color:var(--text-muted)">Code examples</div>
</div>
<div>
<div style="font-size:2rem;font-weight:800;color:var(--accent)">2</div>
<div style="font-size:0.82rem;color:var(--text-muted)">Public labs</div>
</div>
<div>
<div style="font-size:1rem;font-weight:600;margin-top:0.5rem">
<a href="{{< rel "blog/spring-otel-datadog-case-study/" >}}">Read the case study →</a>
</div>
<div style="font-size:0.82rem;color:var(--text-muted);margin-top:0.35rem">Blog write-up</div>
</div>
</div>
</div>
</div>
</section>

<!-- Open-Source Projects -->
<section class="section section-alt" aria-labelledby="oss-heading">
<div class="container">
<div class="section-header">
<h2 id="oss-heading">Open-Source Projects</h2>
<div class="section-divider"></div>
</div>
<div class="contrib-grid">
<div class="contrib-card">
<div class="contrib-card-header">
<h4>spring-datadog-lab</h4>
</div>
<p>Spring Boot, OpenTelemetry, Datadog APM, monitors in Terraform.</p>
<div class="tech-tags">
<span class="tag">Spring Boot 4</span>
<span class="tag">OpenTelemetry</span>
<span class="tag">Datadog</span>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/spring-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
</div>
</div>
<div class="contrib-card">
<div class="contrib-card-header">
<h4>quarkus-datadog-lab</h4>
</div>
<p>Quarkus, OpenTelemetry, Datadog APM, GraalVM native vs JVM on the same path.</p>
<div class="tech-tags">
<span class="tag">Quarkus 3</span>
<span class="tag">GraalVM</span>
<span class="tag">Datadog</span>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/quarkus-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
</div>
</div>
<!-- HIDDEN until the repo is public. Remove this comment wrapper to restore the card. (azure-dev-labs, cgoa-labs, capa-labs)
<div class="contrib-card">
<div class="contrib-card-header">
<h4>azure-dev-labs</h4>
</div>
<p>Azure-focused cloud-native labs and reference implementations. Public release planned.</p>
<div class="tech-tags">
<span class="tag">Azure</span>
<span class="tag">AKS</span>
<span class="tag">Terraform</span>
</div>
</div>
<div class="contrib-card">
<div class="contrib-card-header">
<h4>cgoa-labs</h4>
</div>
<p>CGOA exam labs — Flux GitOps, GitLab CI, Minikube. Coming soon.</p>
<div class="tech-tags">
<span class="tag">Flux</span>
<span class="tag">GitOps</span>
<span class="tag">GitLab CI</span>
</div>
</div>
<div class="contrib-card">
<div class="contrib-card-header">
<h4>capa-labs</h4>
</div>
<p>CAPA exam labs — Argo CD, Workflows, Rollouts, Events. Coming soon.</p>
<div class="tech-tags">
<span class="tag">Argo CD</span>
<span class="tag">Helm</span>
<span class="tag">Kubernetes</span>
</div>
</div>
-->
<div class="contrib-card">
<div class="contrib-card-header">
<h4>siosetech (Portfolio)</h4>
</div>
<p>This site — Hugo on GitHub Pages.</p>
<div class="tech-tags">
<span class="tag">Hugo</span>
<span class="tag">GitHub Pages</span>
<span class="tag">GitHub Actions</span>
</div>
<div style="margin-top:1rem">
<a href="https://github.com/siosetech/siosetech" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
</div>
</div>
</div>
</div>
</section>

<!-- Collaboration -->
<section class="section" aria-labelledby="collab-heading">
<div class="container">
<div class="section-header">
<h2 id="collab-heading">Collaboration &amp; Pairing</h2>
<div class="section-divider"></div>
<p>Delivering across network, operations, DevOps, DBA, and security boundaries</p>
</div>
<div class="achievements-grid">
<div class="achievement-card">
<h4>Cross-functional collaboration</h4>
<ul>
<li>Worked with Network, Operations / System Admin, DevOps, DBA, and Security teams on delivery and production issues</li>
<li>Aligned application changes with connectivity, runtime, data-store, and security constraints across those teams</li>
<li>Joined incident and release work as the Java / application counterpart alongside Security and operations</li>
</ul>
</div>
<div class="achievement-card">
<h4>Peer pairing</h4>
<ul>
<li>Paired with teammates on design and day-to-day implementation</li>
<li>Shared context through pair sessions and peer code review</li>
</ul>
</div>
<div class="achievement-card">
<h4>Writing</h4>
<ul>
<li>Write-ups on OpenTelemetry, Datadog as code, and the Spring/Quarkus labs — <a href="{{< rel "blog/" >}}">Blog</a></li>
<li>Public lab repos with runnable setups and JVM vs native numbers</li>
</ul>
</div>
</div>
</div>
</section>

<!-- Certifications & Learning -->
<section class="section section-alt" aria-labelledby="learning-heading">
<div class="container">
<div class="section-header">
<h2 id="learning-heading">Certifications</h2>
<div class="section-divider"></div>
</div>
<div class="certs-grid">
<div class="cert-card">
<div class="cert-card-icon">☸️</div>
<div class="cert-card-content">
<h4>KCNA</h4>
<p class="issuer">CNCF / Linux Foundation · 2026</p>
<a href="https://www.credly.com/badges/0bd97d70-9a88-4992-8324-ef5649b5bbd7/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-icon">🔐</div>
<div class="cert-card-content">
<h4>KCSA</h4>
<p class="issuer">CNCF / Linux Foundation · 2026</p>
<a href="https://www.credly.com/badges/ba527563-4239-4ee8-a81e-c0a385736587/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-icon">🏗️</div>
<div class="cert-card-content">
<h4>Terraform Associate</h4>
<p class="issuer">HashiCorp · 2026</p>
<a href="https://www.credly.com/badges/74a6acc9-87ed-4594-9657-b97495828a71/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-icon">🔑</div>
<div class="cert-card-content">
<h4>Vault Associate</h4>
<p class="issuer">HashiCorp · 2026</p>
<a href="https://www.credly.com/badges/bebecf80-5a36-46d9-b813-a9218db3a6c1/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-icon">☁️</div>
<div class="cert-card-content">
<h4>Google Cloud Associate Cloud Engineer (ACE)</h4>
<p class="issuer">Google Cloud · 2026</p>
<a href="https://www.credly.com/badges/107ab71c-44ee-4912-8499-9e3c8d165dce/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
</div>
</div>
</section>

<!-- Platforms & Profiles -->
<section class="section" aria-labelledby="profiles-heading">
<div class="container">
<div class="section-header">
<h2 id="profiles-heading">Platforms &amp; Profiles</h2>
<div class="section-divider"></div>
</div>
<div class="contrib-grid">
<a href="{{< param "linkedin_url" >}}" class="contrib-card" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">
<div class="contrib-card-header">
<div class="contrib-card-icon">💼</div>
<h4>LinkedIn</h4>
</div>
<p>Open to senior Java / backend roles.</p>
<span class="badge badge-blue">linkedin.com/in/siosetech ↗</span>
</a>
<a href="https://github.com/siosetech" class="contrib-card" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">
<div class="contrib-card-header">
<div class="contrib-card-icon">🐙</div>
<h4>GitHub</h4>
</div>
<p>Labs and this site.</p>
<span class="badge badge-blue">github.com/siosetech ↗</span>
</a>
<a href="https://www.credly.com/users/siosetech.ffs" class="contrib-card" target="_blank" rel="noopener" style="text-decoration:none;color:inherit">
<div class="contrib-card-header">
<div class="contrib-card-icon">🏅</div>
<h4>Credly</h4>
</div>
<p>KCNA, KCSA, Terraform Associate, Vault Associate, Google Cloud ACE.</p>
<span class="badge badge-blue">credly.com/users/siosetech.ffs ↗</span>
</a>
</div>
</div>
</section>

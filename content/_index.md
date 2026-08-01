---
title: "Home"
---

<section class="hero" aria-labelledby="hero-heading">
<div class="container">
<div class="hero-content">
<div class="hero-text">
<div class="hero-badge">
<span class="dot"></span>
Open to collaborations &amp; consulting
</div>
<h1 id="hero-heading">
Hi, I'm <span class="highlight">Fatih Şahin</span>
</h1>
<p class="hero-subtitle">Software Architect · Cloud-Native Systems · 15+ Years Experience</p>
<p class="hero-description">
Designing scalable, secure, and observable distributed systems — from architecture blueprints to production-ready deployments. Focus areas: Java ecosystems, Kubernetes, OpenTelemetry, and platform engineering.
</p>
<div class="cert-badges">
<span class="cert-badge">KCNA</span>
<span class="cert-badge">KCSA</span>
<span class="cert-badge">Terraform Associate</span>
<span class="cert-badge">Vault Associate</span>
<span class="cert-badge">GCP ACE</span>
<span class="cert-badge">15+ GCP Badges</span>
</div>
<div class="hero-actions" style="margin-top:2rem">
<a href="{{< rel "portfolio/" >}}" class="btn btn-primary">View Portfolio</a>
<a href="mailto:fatih@siosetech.com" class="btn btn-secondary">Get in Touch</a>
</div>
</div>
<div class="hero-visual">
<div class="hero-avatar" aria-hidden="true">
<span class="hero-monogram">FS</span>
</div>
</div>
</div>
</div>
<div class="scroll-indicator" aria-hidden="true">
<span>Scroll</span>
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
<polyline points="6 9 12 15 18 9"/>
</svg>
</div>
</section>

<section class="section" id="projects" aria-labelledby="projects-heading">
<div class="container">
<div class="section-header">
<h2 id="projects-heading">Featured Projects</h2>
<div class="section-divider"></div>
<p>Hands-on labs and platforms that demonstrate production-oriented cloud-native patterns</p>
</div>
<div class="card-grid">

<article class="project-card" data-category="observability">
<div class="project-card-header">
<div class="project-icon spring">SB</div>
<span class="project-status status-active">Active</span>
</div>
<div class="project-card-body">
<h3>spring-datadog-lab</h3>
<p>Spring Boot 4 + OpenTelemetry + Datadog APM, with Terraform-managed monitors, dashboards, and SLOs.</p>
<div class="tech-tags">
<span class="tag">Spring Boot 4</span>
<span class="tag">OpenTelemetry</span>
<span class="tag">Datadog</span>
<span class="tag">Terraform</span>
<span class="tag">Java 25</span>
</div>
<div class="project-achievements">
<ul>
<li>OTel Java agent with custom span enrichment</li>
<li>Virtual thread trace-context preservation</li>
<li>OTLP Collector pipeline to Datadog</li>
<li>Monitors and SLOs as code</li>
</ul>
</div>
</div>
<div class="project-card-footer">
<a href="https://github.com/siosetech/spring-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
<a href="{{< rel "portfolio/" >}}" class="btn btn-secondary btn-sm">Details</a>
</div>
</article>

<article class="project-card" data-category="observability">
<div class="project-card-header">
<div class="project-icon quarkus">Q</div>
<span class="project-status status-active">Active</span>
</div>
<div class="project-card-body">
<h3>quarkus-datadog-lab</h3>
<p>Quarkus observability lab with GraalVM native builds and a direct A/B comparison against the Spring Boot counterpart.</p>
<div class="tech-tags">
<span class="tag">Quarkus 3</span>
<span class="tag">OpenTelemetry</span>
<span class="tag">Datadog</span>
<span class="tag">GraalVM</span>
<span class="tag">Java 25</span>
</div>
<div class="project-achievements">
<ul>
<li>Quarkus OTel extension instrumentation</li>
<li>Native image compatibility with OTel</li>
<li>Reactive Mutiny trace context</li>
<li>JVM vs native startup and memory benchmarks</li>
</ul>
</div>
</div>
<div class="project-card-footer">
<a href="https://github.com/siosetech/quarkus-datadog-lab" class="btn btn-outline btn-sm" target="_blank" rel="noopener">GitHub ↗</a>
<a href="{{< rel "portfolio/" >}}" class="btn btn-secondary btn-sm">Details</a>
</div>
</article>

<article class="project-card" data-category="infrastructure">
<div class="project-card-header">
<div class="project-icon" style="background:linear-gradient(135deg,#0ea5e922,#0ea5e944);color:#0ea5e9">FF</div>
<span class="project-status status-wip">Private</span>
</div>
<div class="project-card-body">
<h3>fleet-forge</h3>
<p>Multi-tenant logistics platform: event-driven services, CDC pipelines, Vault + Keycloak, and a GitOps-ready delivery path. Currently private.</p>
<div class="tech-tags">
<span class="tag">Spring Boot</span>
<span class="tag">Kafka</span>
<span class="tag">PostgreSQL</span>
<span class="tag">Kubernetes</span>
<span class="tag">ArgoCD</span>
</div>
<div class="project-achievements">
<ul>
<li>Tenant-aware domain and reporting flows</li>
<li>Outbox + Debezium CDC to Kafka</li>
<li>Vault AppRole and Keycloak OIDC</li>
<li>Helm charts with ArgoCD GitOps path</li>
</ul>
</div>
</div>
<div class="project-card-footer">
<a href="{{< rel "portfolio/" >}}" class="btn btn-secondary btn-sm">Details</a>
</div>
</article>

</div>
<div class="text-center" style="margin-top:2.5rem">
<a href="{{< rel "portfolio/" >}}" class="btn btn-primary">View All Projects →</a>
</div>
</div>
</section>

<section class="section section-alt" id="skills-overview" aria-labelledby="skills-heading">
<div class="container">
<div class="section-header">
<h2 id="skills-heading">Core Expertise</h2>
<div class="section-divider"></div>
<p>Primary strengths across the cloud-native stack</p>
</div>
<div class="skills-overview-grid">
<div class="skill-badge-card">
<div class="name">Java / JVM</div>
<div class="level">Advanced · 15+ yrs</div>
</div>
<div class="skill-badge-card">
<div class="name">Spring Boot</div>
<div class="level">Advanced · 10+ yrs</div>
</div>
<div class="skill-badge-card">
<div class="name">Kubernetes</div>
<div class="level">KCNA / KCSA</div>
</div>
<div class="skill-badge-card">
<div class="name">OpenTelemetry</div>
<div class="level">Intermediate</div>
</div>
<div class="skill-badge-card">
<div class="name">Datadog APM</div>
<div class="level">Intermediate</div>
</div>
<div class="skill-badge-card">
<div class="name">Terraform</div>
<div class="level">Associate · Intermediate</div>
</div>
<div class="skill-badge-card">
<div class="name">Google Cloud</div>
<div class="level">ACE Certified</div>
</div>
<div class="skill-badge-card">
<div class="name">HashiCorp Vault</div>
<div class="level">Associate Certified</div>
</div>
<div class="skill-badge-card">
<div class="name">Keycloak / OIDC</div>
<div class="level">Intermediate</div>
</div>
</div>
<div class="text-center" style="margin-top:2.5rem">
<a href="{{< rel "skills/" >}}" class="btn btn-primary">Full Skills Matrix →</a>
</div>
</div>
</section>

<section class="section" id="certifications" aria-labelledby="certs-heading">
<div class="container">
<div class="section-header">
<h2 id="certs-heading">Certifications</h2>
<div class="section-divider"></div>
<p>Verified credentials and current preparation track</p>
</div>
<div class="certs-grid">
<div class="cert-card">
<div class="cert-card-content">
<h4>Kubernetes and Cloud Native Associate (KCNA)</h4>
<p class="issuer">The Linux Foundation / CNCF</p>
<a href="https://www.credly.com/badges/0bd97d70-9a88-4992-8324-ef5649b5bbd7/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-content">
<h4>Kubernetes and Cloud Native Security Associate (KCSA)</h4>
<p class="issuer">The Linux Foundation / CNCF</p>
<a href="https://www.credly.com/badges/ba527563-4239-4ee8-a81e-c0a385736587/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-content">
<h4>HashiCorp Certified: Terraform Associate</h4>
<p class="issuer">HashiCorp</p>
<a href="https://www.credly.com/badges/74a6acc9-87ed-4594-9657-b97495828a71/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-content">
<h4>HashiCorp Certified: Vault Associate</h4>
<p class="issuer">HashiCorp</p>
<a href="https://www.credly.com/badges/bebecf80-5a36-46d9-b813-a9218db3a6c1/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-content">
<h4>Google Cloud Associate Cloud Engineer (ACE)</h4>
<p class="issuer">Google Cloud</p>
<a href="https://www.credly.com/badges/107ab71c-44ee-4912-8499-9e3c8d165dce/public_url" class="cert-status cert-achieved" target="_blank" rel="noopener">Verified</a>
</div>
</div>
<div class="cert-card">
<div class="cert-card-content">
<h4>Google Cloud Skill Badges (15+)</h4>
<p class="issuer">Google Cloud</p>
<a href="https://www.skills.google/public_profiles/eadaba40-b8ee-428a-9ebf-0a49eb265060" class="cert-status cert-achieved" target="_blank" rel="noopener">View Profile</a>
</div>
</div>
</div>
<p class="certs-footnote">Also preparing: OpenTelemetry Associate (OTEA) and Datadog APM Associate.</p>
</div>
</section>

<section class="cta-section" aria-labelledby="cta-heading">
<div class="container">
<h2 id="cta-heading">Let's Build Something Together</h2>
<p>Open to collaborations, consulting engagements, architecture reviews, and speaking opportunities.</p>
<div class="cta-actions">
<a href="mailto:fatih@siosetech.com" class="btn btn-primary">Get in Touch</a>
<a href="https://www.linkedin.com/in/sioseforge/" class="btn btn-secondary" target="_blank" rel="noopener">LinkedIn</a>
<a href="{{< rel "portfolio/" >}}" class="btn btn-secondary">View Portfolio</a>
</div>
</div>
</section>

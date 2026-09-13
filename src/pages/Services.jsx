import { useState } from "react";

const services = [
  {
    number: "01",
    category: "ENGINEERING",
    icon: "terminal",
    title: "Custom Web Application & React Engineering",
    description:
      "Next.js 15, React 19, TypeScript, and Tailwind CSS engineered into modular architectures. We implement headless CMS pipelines, ultra-low latency server components, and enterprise-grade API structures.",
    deliverables: [
      "Custom Web Applications",
      "High-Scale SaaS Portals",
      "Headless E-Commerce Engines",
      "Performance Optimization",
    ],
    technologies: [
      "React 19",
      "Next.js 15",
      "TypeScript",
      "Tailwind CSS",
      "GraphQL",
    ],
  },
  {
    number: "02",
    category: "ARCHITECTURE",
    icon: "view_in_ar",
    title: "UI/UX Architecture & Design Systems",
    description:
      "End-to-end user interfaces crafted around atomic hierarchy principles. We build unified token ecosystems, interactive prototypes, and rigorous WCAG AA accessible components bridging flair with developer velocity.",
    deliverables: [
      "Wireframing & User Flows",
      "Design Tokens & Systems",
      "Multi-Device Responsive Sets",
      "Custom Micro-Interactions",
    ],
    technologies: ["Figma Pro", "Tailwind Tokens", "Storybook 8", "Framer Motion"],
  },
  {
    number: "03",
    category: "ACCELERATION",
    icon: "query_stats",
    title: "Full-Funnel Growth & Technical SEO",
    description:
      "Aggressive technical SEO audits paired with content engine modeling and conversion rate optimization (CRO). We turn passive organic traffic into high-intent inbound pipelines through predictive UX.",
    deliverables: [
      "Core Web Vitals Perfection",
      "Structured Schema Graphs",
      "Editorial Content Strategy",
      "Conversion Rate Tuning (CRO)",
    ],
    technologies: [
      "GA4 Telemetry",
      "Search Console",
      "Hotjar Heatmaps",
      "Semrush",
    ],
  },
  {
    number: "04",
    category: "MOBILE & APPS",
    icon: "stay_current_portrait",
    title: "Mobile & Cross-Platform Apps",
    description:
      "Native performance across iOS and Android via React Native and Expo. Unified codebase architectures with offline-first caching, biometrics, push notifications, and device hardware bridges.",
    deliverables: [
      "Cross-Platform iOS & Android",
      "Offline Data Synchronization",
      "App Store & Play Store Deployment",
      "Native Module Bridges",
    ],
    technologies: ["React Native", "Expo", "TypeScript", "Swift / Kotlin"],
  },
  {
    number: "05",
    category: "CLOUD & DEVOPS",
    icon: "cloud_sync",
    title: "Cloud Architecture & DevOps",
    description:
      "Serverless edge deployment pipelines paired with battle-tested AWS and Vercel architectures. Automated zero-downtime CI/CD, auto-scaling telemetry, and SOC2-ready security hardening.",
    deliverables: [
      "Serverless Edge Microservices",
      "Automated CI/CD Workflows",
      "99.99% Availability SLAs",
      "Infrastructure as Code (IaC)",
    ],
    technologies: [
      "AWS Lambda",
      "Vercel Edge",
      "Docker",
      "GitHub Actions",
      "Terraform",
    ],
  },
  {
    number: "06",
    category: "ARTIFICIAL INTELLIGENCE",
    icon: "smart_toy",
    title: "AI Integration & Autonomous Systems",
    description:
      "Production LLM pipelines, autonomous multi-agent workflows, vector retrieval (RAG), and generative streaming interfaces designed to automate complex processes and elevate user capabilities.",
    deliverables: [
      "Custom RAG & Vector Search",
      "Autonomous Agent Workflows",
      "Real-Time Streaming UX",
      "Fine-Tuning & Model Ops",
    ],
    technologies: [
      "OpenAI / Claude",
      "LangChain",
      "Pinecone",
      "Python",
      "Vercel AI SDK",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    icon: "explore",
    title: "Discovery & Strategy",
    description:
      "Deep dive into your business goals, target audience personas, technology constraints, and architectural roadmap.",
    duration: "Duration: 1–2 Weeks",
  },
  {
    number: "02",
    icon: "brush",
    title: "Wireframing & UX",
    description:
      "Pixel-perfect interactive Figma prototypes, design token structuring, and rigorous usability stress tests.",
    duration: "Duration: 2–3 Weeks",
  },
  {
    number: "03",
    icon: "code",
    title: "High-Velocity Build",
    description:
      "Component-driven clean code with Next.js 15, Tailwind CSS, TypeScript, and unit tests with daily staging previews.",
    duration: "Duration: 3–6 Weeks",
  },
  {
    number: "04",
    icon: "verified",
    title: "QA, Launch & Scale",
    description:
      "Performance tuning, SEO auditing, zero-downtime deployment, and ongoing post-launch growth telemetry support.",
    duration: "Ongoing Evolution",
  },
];

const techStack = [
  ["data_object", "React 19"],
  ["layers", "Next.js 15"],
  ["palette", "Tailwind CSS"],
  ["code_blocks", "TypeScript"],
  ["database", "Supabase"],
  ["cloud_upload", "Vercel"],
  ["auto_awesome", "Figma"],
  ["schema", "GraphQL"],
];

const faqs = [
  {
    question: "What is your typical project timeline?",
    answer:
      "Most bespoke platforms take between 4 to 8 weeks from initial architecture discovery to global deployment. For high-growth startups needing rapid MVP sprints, our condensed launch framework can deliver a production-ready product in as little as 3 weeks.",
  },
  {
    question: "How do you ensure 99+ Lighthouse performance?",
    answer:
      "We engineer with zero unnecessary dependencies, compile server components via Next.js 15, aggressively optimize static asset delivery, and use Tailwind CSS for microscopic CSS payloads. We run automated Core Web Vitals CI pipelines on every pull request.",
  },
  {
    question: "Can you work with our existing engineering team?",
    answer:
      "Absolutely. We often function as an elite special-ops unit: auditing architecture, setting up the Tailwind Design System, creating the interactive frontend, and integrating smoothly into your existing GitHub repository and CI/CD pipelines.",
  },
  {
    question: "What are your engagement models (Fixed vs Retainer)?",
    answer:
      "We offer both structured Fixed-Scope projects for greenfield product builds and dedicated Monthly Retainers for continuous iteration, ongoing CRO, and feature expansion. All engagements include defined milestone SLAs and transparent communication.",
  },
];

function Icon({ children, className = "" }) {
  return (
    <span className={`material-symbols-outlined ${className}`}>
      {children}
    </span>
  );
}

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="w-full min-h-screen overflow-x-hidden bg-surface-container-lowest text-on-surface font-body-md antialiased">
      <div className="relative flex w-full min-w-0 flex-col overflow-hidden">

        {/* ================= AMBIENT BACKGROUND ================= */}
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-40 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary-container/20 blur-[120px] sm:h-[550px] sm:w-[950px]" />

          <div className="absolute right-[-180px] top-1/3 h-72 w-72 rounded-full bg-secondary-container/25 blur-[100px] sm:right-1/4 sm:h-80 sm:w-80 sm:blur-[120px]" />

          <div className="absolute bottom-1/4 left-[-120px] h-64 w-64 rounded-full bg-primary-container/25 blur-[100px] sm:left-1/3 sm:h-72 sm:w-72 sm:blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,179,182,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* ================= HERO ================= */}
        <section className="relative z-10 mx-auto w-full max-w-[1360px] px-4 pt-10 pb-8 sm:px-6 sm:pt-14 sm:pb-10 lg:px-8 lg:pt-9 lg:pb-8">
          {/* Hero Content */}
          <div className="mx-auto flex w-full max-w-[980px] flex-col items-center text-center">

            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full bg-surface-container-high/70 px-4 py-2 backdrop-blur-md shadow-[0_0_24px_rgba(225,29,72,0.18)]">
              <span className="h-2 w-2 shrink-0 rounded-full bg-primary animate-pulse shadow-[0_0_10px_#e11d48]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
                Services &amp; Capabilities
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="mt-6 max-w-[1000px] break-words text-[44px] font-bold leading-[1.02] tracking-[-0.035em] text-on-surface sm:mt-7 sm:text-[58px] md:text-[68px] lg:text-[78px]">
              Engineering That
              <br />
              <span className="bg-gradient-to-r from-primary via-primary-fixed to-secondary-fixed-dim bg-clip-text text-transparent">
                Moves Business Forward.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-3xl px-2 text-base leading-7 text-on-surface-variant sm:mt-7 sm:text-lg sm:leading-8">
              From high-performance web applications to AI-powered systems, we
              engineer scalable digital products, design intelligent experiences,
              and build technology that turns ambitious ideas into measurable
              growth.
            </p>
          </div>

          {/* Capability Bar — inspired by the Portfolio hero */}
          <div className="mx-auto mt-8 w-full max-w-[1240px] rounded-2xl bg-surface-container-low/90 p-2 shadow-[0_12px_35px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:mt-10 sm:p-2.5">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">

              <span className="rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-4 py-2.5 text-xs font-semibold text-on-primary shadow-[0_0_18px_rgba(225,29,72,0.22)] sm:px-5 sm:text-sm">
                All Services
              </span>

              <span className="rounded-full px-3.5 py-2.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:px-4 sm:text-sm">
                Web Engineering
              </span>

              <span className="rounded-full px-3.5 py-2.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:px-4 sm:text-sm">
                UI/UX Systems
              </span>

              <span className="rounded-full px-3.5 py-2.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:px-4 sm:text-sm">
                Growth &amp; SEO
              </span>

              <span className="rounded-full px-3.5 py-2.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:px-4 sm:text-sm">
                Mobile Apps
              </span>

              <span className="rounded-full px-3.5 py-2.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:px-4 sm:text-sm">
                Cloud &amp; DevOps
              </span>

              <span className="rounded-full px-3.5 py-2.5 text-xs font-semibold text-on-surface-variant transition-colors hover:bg-surface-container-high hover:text-on-surface sm:px-4 sm:text-sm">
                AI Systems
              </span>
            </div>
          </div>
        </section>

        {/* ================= VISUAL SHOWCASE ================= */}
        <section className="mx-auto w-full max-w-[1360px] px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
          <div className="relative w-full min-w-0 overflow-hidden rounded-xl bg-surface-container-lowest/80 p-4 shadow-[0_24px_60px_rgba(0,0,0,0.8)] sm:p-6 lg:p-8">

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-surface-container-lowest via-surface-container-low/40 to-primary-container/10" />

            <div className="relative grid min-w-0 grid-cols-1 items-stretch gap-6 lg:grid-cols-12 lg:items-center lg:gap-8">

              {/* Performance Panel */}
              <div className="flex min-w-0 flex-col gap-5 lg:col-span-4">

                {/* Performance Card */}
                <div className="min-w-0 rounded-xl bg-surface-container-high/50 p-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:p-5">

                  <div className="flex items-start justify-between gap-3 pb-2">
                    <span className="min-w-0 break-words text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
                      Performance Surge
                    </span>

                    <span className="shrink-0 rounded-full bg-primary-container/20 px-2 py-1 text-[10px] text-primary">
                      +318% YoY
                    </span>
                  </div>

                  <div className="flex items-baseline gap-1 text-4xl font-bold text-on-surface sm:text-5xl">
                    99.8

                    <span className="text-lg text-primary sm:text-xl">
                      %
                    </span>
                  </div>

                  <p className="pt-1 text-sm leading-6 text-on-surface-variant">
                    Core Web Vitals stability across all deployed Next.js edge
                    nodes.
                  </p>

                  <div className="pt-4">
                    <svg
                      className="h-12 w-full overflow-visible text-primary"
                      viewBox="0 0 240 60"
                      preserveAspectRatio="none"
                    >
                      <defs>
                        <linearGradient
                          id="glowGrad"
                          x1="0%"
                          x2="0%"
                          y1="0%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#e11d48"
                            stopOpacity="0.35"
                          />

                          <stop
                            offset="100%"
                            stopColor="#e11d48"
                            stopOpacity="0"
                          />
                        </linearGradient>
                      </defs>

                      <path
                        d="M 0,45 Q 30,10 60,35 T 120,20 T 180,30 T 240,8 L 240,60 L 0,60 Z"
                        fill="url(#glowGrad)"
                      />

                      <path
                        d="M 0,45 Q 30,10 60,35 T 120,20 T 180,30 T 240,8"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeWidth="2.5"
                      />

                      <circle
                        className="fill-primary animate-ping"
                        cx="240"
                        cy="8"
                        r="4"
                      />

                      <circle
                        className="fill-on-primary-container"
                        cx="240"
                        cy="8"
                        r="4"
                      />
                    </svg>
                  </div>
                </div>

                {/* Architecture Card */}
                <div className="min-w-0 rounded-xl bg-surface-container-high/50 p-4 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.5)] sm:p-5">

                  <div className="mb-2 flex items-start gap-3">
                    <Icon className="shrink-0 text-[22px] text-primary">
                      hub
                    </Icon>

                    <div className="min-w-0">
                      <h4 className="break-words text-base font-semibold leading-5 text-on-surface sm:text-lg">
                        Decoupled Web Architecture
                      </h4>

                      <p className="mt-1 text-xs leading-5 text-on-surface-variant sm:text-sm">
                        Instant hydration &amp; global CDN routing
                      </p>
                    </div>
                  </div>

                  <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-container-highest/80">
                    <div className="h-full w-[94%] rounded-full bg-gradient-to-r from-secondary-container to-primary-container" />
                  </div>
                </div>
              </div>

              {/* Main Image */}
              <div className="relative min-w-0 lg:col-span-8">

                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-surface-container-lowest shadow-[0_20px_60px_rgba(225,29,72,0.25)] sm:aspect-video lg:aspect-[16/10]">

                  <img
                    className="h-full w-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDZLrrw8vDDZUkH_gXhnVN5O7Z7mIofkfdAJtRQyvZVDifO9DX7IbT93yjTtwS24hzQi5fCDoIq65GiYJLsFykdQbu3jyGUZx-FTVCYGQZcxis-urcnry8pQl0dDNGII8agKdjQriiEBq1blbsF-BMPGKsBMWj7XWOiJnmmTY2NBF5EkiHD2UIZTpSCplkSW4NxBc5ZPICuknckRexU6baGl3RmaE7UoASRhSH7BVXwiAjSV-S3zcg"
                    alt="Futuristic digital agency website showcase"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-surface-container-lowest/20 to-transparent" />

                  {/* Mobile Friendly Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex flex-col items-start gap-3 rounded-xl bg-surface-container-lowest/85 p-3 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5 sm:flex-row sm:items-center sm:justify-between sm:p-4">

                    <div className="flex min-w-0 items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-container/20 sm:h-10 sm:w-10">
                        <Icon className="text-[20px] text-primary sm:text-[22px]">
                          verified
                        </Icon>
                      </div>

                      <div className="min-w-0">
                        <div className="break-words text-xs font-semibold leading-5 text-on-surface sm:text-sm">
                          Client Showcase: L’Aura Haute Hospitality
                        </div>

                        <p className="mt-1 break-words text-[10px] leading-4 text-on-surface-variant sm:text-xs">
                          Tailwind CSS + Next.js 15 + Custom Dynamic Cart
                        </p>
                      </div>
                    </div>

                    <span className="shrink-0 rounded-full bg-primary-container px-3 py-1.5 text-[9px] font-semibold uppercase tracking-wider text-on-primary sm:px-4 sm:py-2 sm:text-[10px]">
                      Case Study Ready
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= SERVICES ================= */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="mb-10 flex flex-col gap-5 sm:mb-12 lg:mb-16 lg:flex-row lg:items-end lg:justify-between">

            <div className="max-w-2xl space-y-2">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Full-Spectrum Competencies
              </div>

              <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                Our Six Pillars of Digital Supremacy
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7">
              From deep infrastructure code to conversion psychology, we build
              platforms that capture enterprise authority and drive compounding
              returns.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low/70 p-5 backdrop-blur-xl shadow-[0_10px_35px_rgba(0,0,0,0.6)] transition-all duration-300 hover:bg-surface-container/80 hover:shadow-[0_15px_40px_rgba(225,29,72,0.2)] sm:p-6 lg:p-7"
              >

                <div className="min-w-0 space-y-5">

                  <div className="flex items-start justify-between gap-3">

                    <span className="min-w-0 break-words text-[10px] font-bold tracking-wider text-primary sm:text-xs">
                      {service.number} // {service.category}
                    </span>

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-container/15 text-primary transition-colors duration-300 group-hover:bg-primary-container group-hover:text-on-primary sm:h-12 sm:w-12">
                      <Icon className="text-[22px] sm:text-[24px]">
                        {service.icon}
                      </Icon>
                    </div>
                  </div>

                  <div className="min-w-0">
                    <h3 className="mb-2 break-words text-xl font-bold leading-tight text-on-surface sm:text-2xl">
                      {service.title}
                    </h3>

                    <p className="break-words text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7">
                      {service.description}
                    </p>
                  </div>

                  <div className="space-y-3 pt-1">

                    <div className="text-xs font-semibold uppercase tracking-wider text-on-surface">
                      Key Deliverables
                    </div>

                    <div className="grid grid-cols-1 gap-2">

                      {service.deliverables.map((item) => (
                        <div
                          key={item}
                          className="flex min-w-0 items-start gap-2 text-sm leading-5 text-on-surface-variant"
                        >
                          <Icon className="mt-0.5 shrink-0 text-[17px] text-primary">
                            check_circle
                          </Icon>

                          <span className="break-words">
                            {item}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2 border-t border-surface-container-high/60 pt-5">

                  {service.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="max-w-full break-words rounded bg-surface-container-high px-2 py-1 text-[10px] leading-4 text-on-surface-variant sm:text-[11px]"
                    >
                      {tech}
                    </span>
                  ))}

                </div>
              </div>
            ))}

          </div>
        </section>

        {/* ================= PROCESS ================= */}
        <section className="relative mx-auto w-full max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="mx-auto mb-10 max-w-3xl space-y-3 text-center sm:mb-12 lg:mb-16">

            <div className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
              Execution Methodology
            </div>

            <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
              Our Six Pillars of Digital Supremacy
            </h2>

            <p className="text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7">
              A synchronized four-phase engineering framework engineered to
              eliminate scope creep and accelerate time-to-market.
            </p>
          </div>

          <div className="relative mt-8">

            {/* Desktop Connector Line */}
            <div className="absolute left-10 right-10 top-1/2 z-0 hidden h-0.5 -translate-y-8 bg-gradient-to-r from-primary/30 via-primary-container to-primary/30 shadow-[0_0_12px_#e11d48] lg:block" />

            <div className="relative z-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex min-w-0 flex-col space-y-4 rounded-xl bg-surface-container/90 p-5 shadow-lg backdrop-blur-md transition-transform duration-200 hover:scale-[1.02] sm:p-6"
                >

                  <div className="flex items-center justify-between gap-3">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface-container-highest text-lg font-bold text-primary shadow-[0_0_15px_rgba(225,29,72,0.4)]">
                      {step.number}
                    </div>

                    <Icon className="shrink-0 text-[20px] text-on-surface-variant">
                      {step.icon}
                    </Icon>
                  </div>

                  <div className="min-w-0">
                    <h4 className="break-words text-lg font-bold leading-tight text-on-surface sm:text-xl">
                      {step.title}
                    </h4>

                    <p className="mt-2 break-words text-sm leading-6 text-on-surface-variant">
                      {step.description}
                    </p>
                  </div>

                  <div className="pt-1">
                    <span className="inline-block max-w-full break-words rounded bg-primary-container/10 px-2 py-1 text-[10px] text-primary">
                      {step.duration}
                    </span>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= TECHNOLOGY STACK ================= */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="rounded-xl bg-surface-container-low/60 p-5 backdrop-blur-lg sm:p-7 lg:p-10">

            <div className="mb-7 flex flex-col items-start justify-between gap-5 sm:mb-8 md:flex-row md:items-center">

              <div className="min-w-0">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                  Technological Dominance
                </span>

                <h3 className="mt-1 break-words text-2xl font-bold text-on-surface sm:text-3xl">
                  Modern Stacks We Master
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-on-surface-variant">
                We avoid outdated legacy frameworks. Our engineering stack is
                built exclusively on resilient, cloud-first tools with active
                ecosystems.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">

              {techStack.map(([icon, name]) => (
                <div
                  key={name}
                  className="flex min-h-[90px] min-w-0 flex-col items-center justify-center gap-1 rounded-lg bg-surface-container-high/60 p-3 text-center transition-colors hover:bg-primary-container/20"
                >
                  <Icon className="text-primary transition-transform group-hover:scale-110">
                    {icon}
                  </Icon>

                  <span className="break-words text-xs font-semibold leading-4 text-on-surface sm:text-sm">
                    {name}
                  </span>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="mx-auto max-w-3xl">

            <div className="mb-8 space-y-3 text-center sm:mb-10">

              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary sm:text-sm">
                Transparency First
              </span>

              <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                Our Six Pillars of Digital Supremacy
              </h2>

              <p className="text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7">
                Everything you need to know about partnering with NEXSHA on
                your next technical deployment.
              </p>
            </div>

            <div className="space-y-3">

              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;

                return (
                  <div
                    key={faq.question}
                    className="min-w-0 overflow-hidden rounded-xl bg-surface-container/70 backdrop-blur-md transition-all duration-200"
                  >

                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      className="flex w-full min-w-0 items-center justify-between gap-3 p-4 text-left text-on-surface transition-colors hover:text-primary focus:outline-none sm:gap-5 sm:p-5"
                    >
                      <span className="min-w-0 break-words pr-2 text-sm font-semibold leading-6 sm:text-base">
                        {faq.question}
                      </span>

                      <Icon
                        className={`shrink-0 text-primary transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        expand_more
                      </Icon>
                    </button>

                    <div
                      className={`grid transition-all duration-300 ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="px-4 pb-4 text-sm leading-6 text-on-surface-variant sm:px-5 sm:pb-5 sm:text-base">
                          {faq.answer}
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="mx-auto w-full max-w-[1360px] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">

          <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high via-surface-container-low to-surface-container-lowest p-5 shadow-[0_20px_50px_rgba(0,0,0,0.8)] sm:p-8 lg:p-12">

            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-container/30 blur-[90px] sm:h-96 sm:w-96 sm:blur-[100px]" />

            <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-secondary-container/20 blur-[90px] sm:h-96 sm:w-96 sm:blur-[100px]" />

            <div className="relative z-10 max-w-2xl space-y-5 sm:space-y-6">

              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-surface-container-highest/80 px-4 py-2">

                <span className="h-2 w-2 shrink-0 rounded-full bg-primary animate-ping" />

                <span className="break-words text-[10px] font-semibold uppercase tracking-wider text-primary sm:text-xs">
                  Quarterly Intake Now Open
                </span>

              </div>

              <h2 className="break-words text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
                Our Six Pillars of Digital Supremacy
              </h2>

              <p className="max-w-2xl text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7 lg:text-lg">
                Schedule a direct 30-minute technical evaluation with our
                partners. We'll examine your architecture, audit your UX, and
                propose a roadmap with guaranteed milestones.
              </p>

              <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row">

                <a
                  href="/contact"
                  className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-6 py-3.5 text-center text-sm font-semibold text-on-primary shadow-[0_0_24px_rgba(225,29,72,0.4)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_32px_rgba(225,29,72,0.65)] sm:w-auto sm:px-7"
                >
                  <span>Book a Free Consultation</span>

                  <Icon className="ml-2 text-[20px]">
                    arrow_forward
                  </Icon>
                </a>

                <a
                  href="/portfolio"
                  className="inline-flex w-full items-center justify-center rounded-full bg-surface-container-high/80 px-6 py-3.5 text-center text-sm font-semibold text-on-surface transition-colors hover:bg-surface-container-highest sm:w-auto sm:px-7"
                >
                  Explore Case Studies
                </a>

              </div>
            </div>
          </div>
        </section>

      </div>
    </main>
  );
}
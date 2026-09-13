import React from "react";

const principles = [
  {
    icon: "speed",
    number: "01 / ARCHITECTURE",
    title: "No Bloat, Only Performance",
    text: "We reject sluggish legacy architectures, heavy monolithic CMS stacks, and script-bloated frameworks. By deploying on edge networks using modern React patterns and fine-tuned Tailwind CSS, we secure fast payload delivery worldwide.",
    color: "primary",
  },
  {
    icon: "layers",
    number: "02 / CRAFT FIDELITY",
    title: "Pixel-Precision UI Systems",
    text: "Merging spatial micro-interactions with rigid atomic design systems. Every token, specular hairline, and spring easing curve is built to endure multiple product iterations without visual entropy.",
    color: "secondary",
  },
  {
    icon: "query_stats",
    number: "03 / METRICS",
    title: "Outcome-Driven Development",
    text: "Beautiful code without enterprise results is a luxury hobby. We align every development decision directly with conversion milestones, reduced cart abandonment, and customer lifetime value expansion.",
    color: "primary",
  },
  {
    icon: "group_work",
    number: "04 / TALENT PROFILE",
    title: "Senior-Only Direct Teams",
    text: "Zero junior delegates. Zero opaque account executive buffers. When you commission NEXSHA, you speak directly with experienced software architects and design leads who write the code and ship the features.",
    color: "secondary",
  },
];

const timeline = [
  {
    year: "2021",
    title: "Foundations",
    text: "Founded with a small group of principal software engineers committed to building high-performance digital experiences without unnecessary bloat.",
  },
  {
    year: "2022",
    title: "Scale & ARR",
    text: "Expanded the core specialist team and delivered high-concurrency infrastructure for growing digital businesses.",
  },
  {
    year: "2023",
    title: "Edge Mastery",
    text: "Focused on edge-cached architecture and ultra-performant headless commerce experiences.",
  },
  {
    year: "2024",
    title: "40+ Launches",
    text: "Deepened full-funnel CRO engineering systems and reached more than 40 high-profile production deliveries.",
  },
  {
    year: "2025",
    title: "AI & Spatial Web",
    text: "Exploring autonomous design engines, real-time spatial web experiences, and generative design systems.",
    active: true,
  },
];

const team = [
  {
    name: "Arman Vance",
    role: "Founder & CTO",
    badge: "EX-VERCEL",
    icon: "terminal",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqsbim5nrfMyiWn_TbnpDR9SKijhaS5ZYe7K1kYSgq9w8g0YvgMqytB6lZDC0EIu2ISwikPmMFLXy8WtNtROZgtN31-YqJnBLOLzIHWaxAfu7ACbR76lP8v3QyFLvZT6pO1RbXc-eCjrsfHH9vZ0nlTUFetQJsxc9fqjYe3Zb7uVMP1b_pFofDocWA08eNe1EXYyQQaq2hSHvrWHNQHbKpyLuUoVRrdsbzbucNy_qWET-uRaaIsI",
    description:
      "Former infrastructure engineer and React contributor. Leading low-latency architecture and edge runtime systems.",
  },
  {
    name: "Elena Rostova",
    role: "VP of Product & Design",
    badge: "EX-STRIPE",
    icon: "brush",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBZwqf8jxyqCGohnD9QA22AFLCl1sXEP6bBJ11HF6qnWx7RJWEMd4lygL7QV9swEe8rreC2g0cxjnCddPi-8rhILDySf4sXFeHEXCAMx1xivbn6mCib4N8bbeHMDlvELofT4MZKF1gvzNYUQdksdwaYghFDslbi639KE93aGGqrkdfe0zs5-Iw_4VuWzVNC2FS1Ir4XDmLJhJ0S_g-jdwA_6bYDyhNM6z8-YQsOVKNAWORTKOoSVs8",
    description:
      "Product design lead overseeing multi-brand design systems, spatial interactions, and accessible ergonomic UI frameworks.",
  },
  {
    name: "Kaelen Thorne",
    role: "Head of Cloud & Security",
    badge: "AWS PRINCIPAL",
    icon: "dns",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBvaqXA9NuciZgC116tQXxobdL0eGIvEbDH9zPA6b-x2w58Of9bP1pfnIoIJJnYaMPT2tLTf6a_lZichffeJD8MEl27CdZEkzbAiADEZut1WjK1-ur8M1gWWN5NEdwPyxF6mYUPwHZZuHCQJH1JvG172echQ4xyNO_iCxn0JOEUNF6wojiLtwKm42SvdoAGR3NdtElgHtn8MmaiGqSMz_3FjvBevUdafG0A7aG-78h1JVBMIhVYF0U",
    description:
      "Cloud security specialist designing zero-trust topologies, automated CI/CD pipelines, and high-volume data conduits.",
  },
  {
    name: "Sophia Lin",
    role: "Lead Conversion Strategist",
    badge: "CRO SPECIALIST",
    icon: "analytics",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB4n6kO0q5iaNIYkITLwuwfH1nFap9z3BRH5vWRqtQos4Fba-25DGHDIjJfHuWE7JJh6edOdMPKCA1tu7E4Wu81ExiHt5Homh2Nua8k5V5muB39vFjuDWSMbPtkMu7lLqZBUNwvOXGX2TeYXt2Hw_IoKzcRqjkir_co5KWkKtDo1sc6ryiiSScMFtW7l-2W4m5-rV0O0JsuxqIlL7ELN809VyXzXICMcVV1w-4odSiSCSqf-yMRAsY",
    description:
      "Data-driven CRO specialist turning complex telemetry pipelines and user sessions into clear optimization paths.",
  },
];

const stack = [
  ["code_blocks", "React 19", "Server Components", "primary"],
  ["terminal", "Next.js 15", "App Directory Edge", "secondary"],
  ["css", "Tailwind", "Atomic Tokens", "primary"],
  ["integration_instructions", "TypeScript", "Strict Type Safety", "secondary"],
  ["cloud", "Vercel", "Edge Compute", "secondary"],
  ["dataset", "Supabase", "Postgres & Realtime", "primary"],
  ["hub", "GraphQL", "Decoupled APIs", "secondary"],
  ["draw", "Figma Ent.", "Token Synced", "primary"],
];

function About() {
  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-surface-container-lowest text-on-surface font-body-md antialiased">
      {/* =====================================================
          AMBIENT BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-primary-container/20 blur-[110px] sm:h-[550px] sm:w-[950px] sm:blur-[130px]" />

        <div className="absolute right-[-120px] top-1/3 h-64 w-64 rounded-full bg-secondary-container/15 blur-[90px] sm:right-1/4 sm:h-80 sm:w-80 sm:blur-[120px]" />

        <div className="absolute bottom-1/4 left-[-100px] h-60 w-60 rounded-full bg-primary-container/15 blur-[90px] sm:left-1/3 sm:h-72 sm:w-72 sm:blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,179,182,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      {/* =====================================================
          PAGE CONTENT
          IMPORTANT:
          No extra pt-24 / pt-28 here.
          This removes the unwanted gap below navbar.
      ====================================================== */}
      <div className="relative z-10 w-full">

        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative mx-auto w-full max-w-[1360px] px-4 pb-10 pt-10 text-center sm:px-6 sm:pb-12 sm:pt-12 md:px-8 lg:px-10 lg:pb-14 lg:pt-10">

          {/* Badge */}
          <div className="mx-auto mb-6 inline-flex max-w-full items-center gap-2 rounded-full bg-surface-container-high/70 px-4 py-2 shadow-[0_0_20px_rgba(225,29,72,0.2)] backdrop-blur-md sm:mb-7">
            <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary-container shadow-[0_0_10px_#e11d48]" />

            <span className="break-words text-[10px] font-semibold uppercase tracking-[0.18em] text-primary sm:text-xs">
              WHO WE ARE
            </span>
          </div>

          {/* Hero Heading */}
          <h1 className="mx-auto max-w-[1120px] break-words text-[38px] font-bold leading-[1.08] tracking-tight text-on-surface sm:text-[52px] sm:leading-[1.06] md:text-[64px] lg:text-[76px]">
            We Bridge{" "}
            <span className="bg-gradient-to-r from-on-surface via-primary to-primary-container bg-clip-text text-transparent">
              Visionary Design
            </span>

            <br className="hidden sm:block" />

            <span className="bg-gradient-to-r from-primary via-primary-fixed to-secondary-fixed-dim bg-clip-text text-transparent">
              With Relentless Engineering.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-3xl px-2 text-base leading-7 text-on-surface-variant sm:mt-6 sm:text-lg sm:leading-8">
            Founded on the principle that digital experiences should be
            blazingly fast, visually arresting, and engineered to scale
            seamlessly as enterprise businesses grow.
          </p>

          {/* Stats */}
          <div className="mx-auto mt-8 grid w-full max-w-[1180px] grid-cols-2 gap-2 rounded-2xl bg-surface-container-low/80 p-2 shadow-[0_20px_45px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:mt-10 sm:grid-cols-4 sm:gap-3 sm:p-3">
            {[
              ["2021", "Founded"],
              ["28+", "Core Tech & Design"],
              ["48+", "Deployed Systems"],
              ["12", "Industry Honors"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="flex min-h-[82px] min-w-0 flex-col items-center justify-center rounded-xl bg-surface-container/70 px-2 py-3 transition-all duration-300 hover:bg-surface-container-high/80 sm:min-h-[94px] sm:px-3 sm:py-4"
              >
                <span className="text-2xl font-bold tracking-tight text-on-surface sm:text-3xl">
                  {value}
                </span>

                <span className="mt-1 max-w-full break-words text-center text-[9px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-[10px]">
                  {label}
                </span>
              </div>
            ))}
          </div>

          {/* =====================================================
              HERO VISUAL
          ====================================================== */}
          <div className="relative mx-auto mt-8 w-full overflow-hidden rounded-2xl bg-surface-container-lowest shadow-[0_25px_70px_rgba(0,0,0,0.8),0_0_35px_rgba(225,29,72,0.2)] sm:mt-12 sm:rounded-3xl lg:mt-14">

            {/* Browser Bar */}
            <div className="flex items-center justify-between border-b border-outline-variant/20 bg-surface-container-high/30 px-3 py-3 sm:px-6 sm:py-4">

              <div className="flex min-w-0 items-center gap-1.5 sm:gap-2">
                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-primary-container sm:h-3 sm:w-3" />

                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-outline-variant sm:h-3 sm:w-3" />

                <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-surface-bright sm:h-3 sm:w-3" />

                <span className="ml-1 truncate font-mono text-[9px] text-on-surface-variant sm:ml-3 sm:text-xs">
                  nexsha.studio/production-telemetry
                </span>
              </div>

              <div className="hidden items-center gap-3 sm:flex">
                <span className="flex items-center gap-1.5 rounded bg-secondary-container/30 px-2.5 py-1 font-label-md text-label-md text-secondary">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-secondary" />
                  99.98% SPEED INDEX
                </span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative h-[210px] w-full overflow-hidden sm:h-[300px] md:h-[390px] lg:h-[420px]">
              <div
                className="h-full w-full scale-105 transform bg-cover bg-center transition-transform duration-700 hover:scale-100"
                style={{
                  backgroundImage:
                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAOGKRDF9CBU3wZLIrF6oSpb0O2wIY_JMP77t4Pds4SBj-qozws40plaJtGCcwq_ytIJx96p1Tv9RxeM3NKYnNspk-j0tvV6tuRuyvTPZISLjQrDfL-5lbU_vUxXjuRANfgi-Ep7ufMJNnKS_dafvUACON26eVhO2B0bILp08sF5C_KtN_C62Gk0_nWuAXdFxcu3T1H9uHuJ9FVzOzVne1I1nS9T8jUaLTR4wlaMHZSq79KykflMto')",
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent" />

              {/* Telemetry Card */}
              <div className="absolute bottom-3 left-3 right-3 rounded-xl bg-surface-container-low/90 p-3 shadow-[0_16px_32px_rgba(0,0,0,0.6)] backdrop-blur-2xl sm:bottom-6 sm:left-6 sm:right-auto sm:max-w-md sm:rounded-2xl sm:p-5 md:left-10">

                <div className="mb-2 flex items-center justify-between gap-2 sm:mb-3">
                  <div className="flex min-w-0 items-center gap-2">
                    <span className="material-symbols-outlined text-lg text-primary-container sm:text-xl">
                      bolt
                    </span>

                    <span className="truncate text-xs font-semibold text-on-surface sm:text-sm">
                      Core Web Vital Telemetry
                    </span>
                  </div>

                  <span className="shrink-0 font-mono text-[10px] font-bold text-primary sm:text-xs">
                    LCP 0.38s
                  </span>
                </div>

                <svg
                  className="h-9 w-full text-primary sm:h-12"
                  fill="none"
                  preserveAspectRatio="none"
                  viewBox="0 0 300 60"
                >
                  <defs>
                    <linearGradient
                      id="heroGradient"
                      x1="0"
                      x2="0"
                      y1="0"
                      y2="1"
                    >
                      <stop
                        offset="0%"
                        stopColor="#E11D48"
                        stopOpacity="0.45"
                      />

                      <stop
                        offset="100%"
                        stopColor="#E11D48"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>

                  <path
                    d="M0,50 Q40,45 80,25 T160,30 T240,10 T300,5"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                  />

                  <path
                    d="M0,50 Q40,45 80,25 T160,30 T240,10 T300,5 L300,60 L0,60 Z"
                    fill="url(#heroGradient)"
                  />

                  <circle
                    className="animate-ping"
                    cx="240"
                    cy="10"
                    fill="#E11D48"
                    r="3.5"
                  />

                  <circle
                    cx="240"
                    cy="10"
                    fill="#FFFFFF"
                    r="3.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            ENGINEERING PHILOSOPHY
        ====================================================== */}
        <section className="relative mx-auto w-full max-w-[1360px] px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">

          <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">
            <div className="min-w-0">
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-secondary-container/20 px-3 py-1 font-label-md text-label-md uppercase tracking-wider text-secondary">
                <span className="material-symbols-outlined text-sm">
                  memory
                </span>

                <span>ARCHITECTURAL CREED</span>
              </div>

              <h2 className="max-w-2xl break-words font-headline-lg text-2xl leading-tight tracking-tight text-on-surface sm:text-3xl md:text-headline-lg">
                Engineering Built Without Compromise.
              </h2>
            </div>

            <p className="max-w-md font-body-md text-body-md leading-relaxed text-on-surface-variant">
              We dismantle software bloat, replace generic templates with
              custom precision engines, and build platforms designed to
              conquer search indexes and conversion funnels.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 md:grid-cols-12 md:gap-6">
            {principles.map((item, index) => (
              <div
                key={item.title}
                className={`min-w-0 ${
                  index === 0 || index === 3
                    ? "md:col-span-7"
                    : "md:col-span-5"
                } rounded-2xl bg-surface-container-low/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl transition-all duration-300 hover:bg-surface-container sm:rounded-3xl sm:p-8 md:p-10`}
              >
                <div>
                  <div
                    className={`mb-5 flex h-11 w-11 items-center justify-center rounded-xl ${
                      item.color === "primary"
                        ? "bg-primary-container/20 text-primary"
                        : "bg-secondary-container/20 text-secondary"
                    } sm:mb-6 sm:h-12 sm:w-12`}
                  >
                    <span className="material-symbols-outlined text-2xl">
                      {item.icon}
                    </span>
                  </div>

                  <span
                    className={`mb-2 block font-label-md text-label-md tracking-widest ${
                      item.color === "primary"
                        ? "text-primary"
                        : "text-secondary"
                    } uppercase`}
                  >
                    {item.number}
                  </span>

                  <h3 className="mb-3 break-words font-headline-md text-xl leading-tight text-on-surface sm:text-headline-md">
                    {item.title}
                  </h3>

                  <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                    {item.text}
                  </p>
                </div>

                {/* Bottom Info */}
                {index === 0 && (
                  <div className="mt-7 flex flex-col gap-4 rounded-xl bg-surface-container/60 p-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:rounded-b-3xl sm:p-6 md:-mx-8 md:-mb-8 md:rounded-t-none md:p-8">
                    <div className="flex items-center gap-3 sm:gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-container-high font-mono font-bold text-primary">
                        100
                      </div>

                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-on-surface sm:text-base">
                          Lighthouse Score Threshold
                        </p>

                        <p className="text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                          Guaranteed baseline SLA for client deployments
                        </p>
                      </div>
                    </div>

                    <span className="material-symbols-outlined hidden text-on-surface-variant sm:block">
                      arrow_forward
                    </span>
                  </div>
                )}

                {index === 1 && (
                  <div className="mt-7 flex items-center gap-3 rounded-xl bg-surface-container/80 p-4 sm:mt-8">
                    <span className="material-symbols-outlined shrink-0 text-xl text-secondary">
                      token
                    </span>

                    <span className="text-xs font-semibold leading-relaxed text-on-surface sm:text-sm">
                      TOKENS • COMPONENTS • FLUID GRID
                    </span>
                  </div>
                )}

                {index === 2 && (
                  <div className="mt-7 flex items-center justify-between gap-3 pt-2 sm:mt-8">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="shrink-0 font-mono text-sm font-bold text-primary">
                        +142%
                      </span>

                      <span className="text-xs text-on-surface-variant sm:text-sm">
                        Avg. Client Conversion Lift
                      </span>
                    </div>

                    <span className="material-symbols-outlined shrink-0 text-lg text-primary">
                      trending_up
                    </span>
                  </div>
                )}

                {index === 3 && (
                  <div className="mt-7 flex flex-col gap-4 rounded-xl bg-surface-container/60 p-4 sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:rounded-b-3xl sm:p-6 md:-mx-8 md:-mb-8 md:rounded-t-none md:p-8">
                    <div className="flex -space-x-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-container text-xs font-bold text-on-primary sm:h-10 sm:w-10">
                        AV
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary-container text-xs font-bold text-on-secondary sm:h-10 sm:w-10">
                        ER
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-bright text-xs font-bold text-on-surface sm:h-10 sm:w-10">
                        KT
                      </div>

                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest text-xs font-bold text-primary sm:h-10 sm:w-10">
                        +25
                      </div>
                    </div>

                    <span className="text-sm font-semibold text-primary sm:text-base">
                      Direct Founder Slack Access
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            TIMELINE
        ====================================================== */}
        <section className="relative w-full overflow-hidden bg-surface-container-lowest/80 py-14 sm:py-20 md:py-24">

          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 md:px-8 lg:px-10">

            <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-16 md:mb-20">
              <span className="mb-3 block font-label-md text-label-md uppercase tracking-widest text-primary">
                CHRONOLOGY
              </span>

              <h2 className="mb-4 font-headline-lg text-2xl leading-tight tracking-tight text-on-surface sm:text-3xl md:text-headline-lg">
                The NEXSHA Trajectory
              </h2>

              <p className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
                From an obsidian garage lab to an elite engineering powerhouse
                trusted by ambitious digital leaders.
              </p>
            </div>

            <div className="relative flex flex-col gap-5 md:flex-row md:items-stretch md:gap-4">

              {/* Timeline Line */}
              <div className="absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-transparent via-primary-container to-transparent md:bottom-auto md:left-0 md:right-0 md:top-10 md:h-0.5 md:w-auto md:bg-gradient-to-r" />

              {timeline.map((item) => (
                <div
                  key={item.year}
                  className={`relative z-10 min-w-0 flex-1 rounded-2xl p-5 pl-16 backdrop-blur-md sm:p-6 sm:pl-16 md:pl-6 ${
                    item.active
                      ? "bg-surface-container-high/90 shadow-[0_0_30px_rgba(225,29,72,0.3)]"
                      : "bg-surface-container/70"
                  }`}
                >
                  <div
                    className={`absolute left-0 top-5 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full sm:top-6 md:static md:mb-6 md:translate-x-0 ${
                      item.active
                        ? "bg-primary shadow-[0_0_20px_rgba(255,179,182,0.8)]"
                        : "bg-surface-container-lowest shadow-[0_0_16px_rgba(225,29,72,0.4)]"
                    }`}
                  >
                    {item.active ? (
                      <span className="material-symbols-outlined text-sm font-bold text-on-primary">
                        star
                      </span>
                    ) : (
                      <span className="h-4 w-4 rounded-full bg-primary-container" />
                    )}
                  </div>

                  <span
                    className={`mb-2 inline-block font-mono text-xl font-bold ${
                      item.active
                        ? "rounded bg-primary-container px-2 py-0.5 text-on-primary-container"
                        : "text-primary"
                    }`}
                  >
                    {item.year}
                  </span>

                  <h4 className="mb-2 font-headline-sm text-lg leading-tight text-on-surface sm:text-headline-sm">
                    {item.title}
                  </h4>

                  <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================================
            TEAM
        ====================================================== */}
        <section className="relative mx-auto w-full max-w-[1360px] px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">

          <div className="mb-10 flex flex-col gap-5 md:mb-16 md:flex-row md:items-end md:justify-between">

            <div className="min-w-0">
              <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full bg-secondary-container/20 px-3 py-1 font-label-md text-label-md uppercase tracking-wider text-secondary">
                <span className="material-symbols-outlined text-sm">
                  badge
                </span>

                <span>LEADERSHIP</span>
              </div>

              <h2 className="break-words font-headline-lg text-2xl leading-tight tracking-tight text-on-surface sm:text-3xl md:text-headline-lg">
                The Architects Behind NEXSHA.
              </h2>
            </div>

            <p className="max-w-md font-body-md text-body-md leading-relaxed text-on-surface-variant">
              Practitioners first, leaders second. Our team stays directly
              engaged on the terminal, canvas, and code review queue.
            </p>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {team.map((person) => (
              <div
                key={person.name}
                className="group min-w-0 rounded-2xl bg-surface-container-low/90 p-4 shadow-[0_12px_32px_rgba(0,0,0,0.5)] backdrop-blur-xl transition-all duration-300 hover:bg-surface-container sm:p-5"
              >
                <div className="relative mb-5 aspect-[4/5] w-full overflow-hidden rounded-xl bg-surface-container-highest sm:mb-6">

                  <img
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={person.image}
                    alt={person.name}
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-2">
                    <span className="max-w-[75%] truncate rounded bg-surface-container-lowest/80 px-2 py-1 text-[10px] font-semibold text-primary backdrop-blur-md sm:px-2.5 sm:text-xs">
                      {person.badge}
                    </span>

                    <a
                      href="#"
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-container-high/80 text-on-surface backdrop-blur-md transition-colors hover:text-primary"
                    >
                      <span className="material-symbols-outlined text-xs">
                        {person.icon}
                      </span>
                    </a>
                  </div>
                </div>

                <h4 className="break-words font-headline-sm text-lg leading-tight text-on-surface transition-colors group-hover:text-primary sm:text-headline-sm">
                  {person.name}
                </h4>

                <p className="mb-3 mt-1 font-label-md text-label-md uppercase tracking-wider text-secondary">
                  {person.role}
                </p>

                <p className="font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                  {person.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================================
            TECH STACK
        ====================================================== */}
        <section className="relative w-full bg-surface-container-low/50 py-14 sm:py-20 md:py-24">

          <div className="mx-auto max-w-[1360px] px-4 sm:px-6 md:px-8 lg:px-10">

            <div className="grid min-w-0 grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">

              <div className="min-w-0 space-y-5 sm:space-y-6 lg:col-span-5">

                <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-primary-container/20 px-3 py-1 font-label-md text-label-md uppercase tracking-wider text-primary">
                  <span className="material-symbols-outlined text-sm">
                    code
                  </span>

                  <span>PRODUCTION STANDARDS</span>
                </div>

                <h2 className="break-words font-headline-lg text-2xl leading-tight tracking-tight text-on-surface sm:text-3xl md:text-headline-lg">
                  Curated For Extreme Velocities.
                </h2>

                <p className="font-body-md text-body-md leading-relaxed text-on-surface-variant">
                  We do not chase transient hype. Every component in our stack
                  is benchmarked against real-world TTFB, strict type safety,
                  modular composability, and long-term ecosystem stability.
                </p>

                <div className="space-y-4 pt-2 sm:pt-4">

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-base">
                        verified
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-on-surface sm:text-base">
                        100% Strict TypeScript
                      </h5>

                      <p className="text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                        Zero runtime type surprises; contracts shared
                        end-to-end.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-surface-container text-primary">
                      <span className="material-symbols-outlined text-base">
                        verified
                      </span>
                    </div>

                    <div className="min-w-0">
                      <h5 className="text-sm font-semibold text-on-surface sm:text-base">
                        Zero Legacy Debt Handover
                      </h5>

                      <p className="text-xs leading-relaxed text-on-surface-variant sm:text-sm">
                        Thorough automated regression suites and interactive
                        Storybook systems.
                      </p>
                    </div>
                  </div>

                </div>
              </div>

              <div className="grid min-w-0 grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:col-span-7">
                {stack.map(([icon, name, subtitle, color]) => (
                  <div
                    key={name}
                    className="flex min-h-[120px] min-w-0 flex-col items-center justify-center rounded-2xl bg-surface-container p-3 text-center transition-all hover:bg-surface-container-high sm:min-h-[140px] sm:p-6"
                  >
                    <span
                      className={`material-symbols-outlined mb-2 text-2xl sm:mb-3 sm:text-3xl ${
                        color === "primary"
                          ? "text-primary"
                          : "text-secondary"
                      }`}
                    >
                      {icon}
                    </span>

                    <span className="break-words text-sm font-semibold text-on-surface sm:text-base">
                      {name}
                    </span>

                    <span className="mt-1 break-words text-[10px] leading-tight text-on-surface-variant sm:text-xs">
                      {subtitle}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </section>

        {/* =====================================================
            CTA
        ====================================================== */}
        <section className="relative mx-auto w-full max-w-[1360px] px-4 py-14 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">

          <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container to-surface-container-low p-6 text-center shadow-[0_24px_80px_rgba(0,0,0,0.8),0_0_40px_rgba(225,29,72,0.2)] sm:rounded-3xl sm:p-10 md:p-16">

            <div className="pointer-events-none absolute -top-32 left-1/2 h-48 w-72 -translate-x-1/2 bg-primary-container/30 blur-3xl sm:w-96" />

            <span className="relative mb-4 block font-label-md text-label-md uppercase tracking-widest text-primary">
              LET'S BUILD TOGETHER
            </span>

            <h2 className="relative mb-5 max-w-3xl break-words font-headline-lg text-2xl leading-tight tracking-tight text-on-surface sm:mb-6 sm:text-3xl md:text-headline-lg">
              Join Forces With An Engineering Team That Thinks Like
              Co-Founders.
            </h2>

            <p className="relative mb-7 max-w-2xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant sm:mb-10">
              Whether you are rebuilding an antiquated enterprise platform or
              engineering a market disruptor from day zero, we bring the
              velocity and craft your vision demands.
            </p>

            <div className="relative flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:gap-4">

              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-7 py-3.5 font-label-lg text-label-lg text-on-primary-container shadow-[0_0_24px_rgba(225,29,72,0.5)] transition-all duration-300 hover:shadow-[0_0_36px_rgba(225,29,72,0.7)] sm:w-auto sm:px-8 sm:py-4"
              >
                Work With Us
              </a>

              <a
                href="#"
                className="inline-flex w-full items-center justify-center rounded-full bg-surface-container-high/80 px-7 py-3.5 font-label-lg text-label-lg text-on-surface transition-all duration-300 hover:bg-surface-bright hover:text-primary sm:w-auto sm:px-8 sm:py-4"
              >
                Explore Open Roles
              </a>

            </div>
          </div>
        </section>

      </div>
    </main>
  );
}

export default About;
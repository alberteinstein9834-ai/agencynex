import { useMemo, useState } from "react";

const projects = [
  {
    id: 1,
    category: "ecommerce",
    tech: "Tailwind Headless Shopify Framer Motion React",
    badge: "Luxury Hospitality",
    title: "L'Aura — Haute Gastronomy & Hotel Portal",
    description:
      "Headless e-commerce & reservations engine delivering fluid booking journeys and sensory digital storytelling for a Michelin-starred hotel group.",
    metricLabel: "Conversion Impact",
    metric: "+180% Bookings",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAy-cvfC4Q6xtLkbrxI92F3G-JD_ReYR6fg3C-RjEww5njWKF1b7nCXdkOwxM0T_gqhhvZiaFoAluKCD2D6TLomWEfBSViwDBqAN2j10hUxafnk62QR1Ko2uneOpuyHY52K32bRqtkh6xUKwSrjEM2v0AJOtqumjg9MaO3ZuOnWYpqzyqrZqUlJDDK-656a9qMKyoE4ZSOrz_lr6qV3oytFRgfsb1LiAvX59ABUrHttscbl2Xr58hA",
    alt: "Dark luxury culinary editorial photography with mood lighting",
    tags: ["Tailwind", "Shopify Storefront API", "Framer Motion"],
  },

  {
    id: 2,
    category: "saas web-apps",
    tech: "React Tailwind Python API Next.js",
    badge: "AI & DevOps SaaS",
    title: "NovaPulse AI — Autonomous Workflow Orchestration",
    description:
      "Visual pipeline builder and agentic debugger built with canvas graph renderers and asynchronous streaming response models.",
    metricLabel: "User Retention Surge",
    metric: "4.8x Surge",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBOw9uQzkydhLEAPegoTXu_s15knXJulbS3MhDAg_0Maf5pD3NLO3kqM-HLyhuTvWPj1Xr9f7TgEfG371xyLBwua5L4x1MpLD6a5IIAK8ijltL05MF9J6dkGJR3A02FWdbgjaG4TcTQ0vMHkZI_fSxQZCUDyd_tB8QZOt57CuxbGADRdvyG5NckHlZGziM15bVsGeBnBJmcN-AXq01lOWG3_jvTMH8FsZDdaD5H5qKXlf5lgPIU9RM",
    alt: "High tech developer console dashboard interface",
    tags: ["React", "Tailwind CSS", "Python FastAPIs"],
  },

  {
    id: 3,
    category: "web-apps saas",
    tech: "Next.js Tailwind Solidity WebSockets",
    badge: "Web3 & Security",
    title: "Chronos Vault — Multi-Chain Asset Management System",
    description:
      "Zero-knowledge custody interface and multi-signature treasury engine with hardware key authorization workflows.",
    metricLabel: "Protected Capital",
    metric: "$450M TVL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWcAoG8JUUf6TM73RNKGw89h05DmSbEcAi498EBxeBp_i7QEqEY4S_OQETlKMxp_GV_UnEu216TZ50I85jrIn_K_YE_AjaRY1Vr-Bh4rzC1GP3W8iqFWd_IjCv8WUvOhzQ5D6HcMJmABqRfaWUUMQOlqxRtK1EpAqiZrXUUQEKL_4PV8yiNrlZmF7zPbTYZGlTYEEk93rS2c1SurGcp4BGdUelbKlcSRWEuoVQoyZx_azWGTV8zLo",
    alt: "Futuristic cybernetic cryptographic digital vault",
    tags: ["Next.js", "Tailwind", "Solidity"],
  },

  {
    id: 4,
    category: "mobile-cloud web-apps",
    tech: "React Native AWS Lambda Tailwind TypeScript",
    badge: "Enterprise IoT & Cloud",
    title: "Velox Logistics — Real-Time Fleet Tracking & Telematics",
    description:
      "Cross-platform mission command tracking 14,000 maritime & terrestrial freight assets with predictive geofencing alerts.",
    metricLabel: "Reliability SLA",
    metric: "99.99% Uptime",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCMyNBw8Ff1gmjcZzYFdwrzsVRoZCiSMNRM5MPl6cuvv-ipmtbm_DZFgmy6i2ZQeAg-xqzjiipZnFVwVpDxKQ1p3m_PLIoE-pdzzRgEs0X3wKgwb-lqkb9kwY8GYceNfUwvWf8myDKUS-9z-tJ3KaEsnwv52HjIt8oL2umsiaiwfhM8d90g-IgTiFP7f4QdZ217oyxyu9Md1REtkeUsh_cvfW8Gz7ruUsA8L7F045Nwt8f3slVbaFE",
    alt: "Port of Rotterdam logistics tracking map",
    tags: ["React Native", "AWS Lambda", "Tailwind"],
    isMap: true,
  },

  {
    id: 5,
    category: "design-systems",
    tech: "Three.js React Tailwind CSS WebGL",
    badge: "Creative Tech & Design System",
    title:
      "Kinetic Studio — Interactive 3D Brand Experience & Design Token Architecture",
    description:
      "Crafted an immersive spatial portfolio with real-time shader interactions, sound design, and an atomic Tailwind design system adopted across 4 subsidiary ventures.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCLRfOv7mVpZD0t4xAU2m9Hf5GziRKqeysNzBZ1x7peIfsXn7kORXPTX-uy0XdT7e61t7KjtmLS1ORhRu1CE1ixTRkXkqonIbD81NkB78pGecxNxP9uQy-d3Vmg8b20o49OMV-_mQEtqSw2pt3XGLFNbMCpWmadYrwWkaAYxZB_da5vwozIQZUEYzY7b_OGR-fX9d0sYRkjQzg94rxxE6emC0cmtIqh9Uu7ZEQNRhagCfAhTMs8VKc",
    alt: "Dynamic 3D kinetic typographic sculpture",
    tags: ["Three.js", "React", "Tailwind CSS", "WebGL"],
    large: true,
  },
];

const categories = [
  { label: "All Work", value: "all" },
  { label: "Web Applications", value: "web-apps" },
  { label: "SaaS Platforms", value: "saas" },
  { label: "UI/UX Systems", value: "design-systems" },
  { label: "E-Commerce", value: "ecommerce" },
  { label: "Mobile & Cloud", value: "mobile-cloud" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    const query = search.toLowerCase().trim();

    return projects.filter((project) => {
      const categoryMatch =
        activeCategory === "all" ||
        project.category.includes(activeCategory);

      const searchMatch =
        query === "" ||
        project.tech.toLowerCase().includes(query) ||
        project.title.toLowerCase().includes(query);

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, search]);

  return (
    <main className="relative isolate min-h-screen w-full overflow-x-hidden bg-surface-container-lowest font-body-md text-on-surface antialiased">
      <div className="relative flex min-w-0 w-full flex-col overflow-hidden">

        {/* =====================================================
            AMBIENT BACKGROUND
        ====================================================== */}

        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -left-1/2 -top-40 h-[400px] w-[700px] rounded-full bg-primary-container/20 blur-[100px] sm:left-1/2 sm:h-[550px] sm:w-[950px] sm:-translate-x-1/2 sm:blur-[130px]" />

          <div className="absolute right-[-120px] top-1/3 h-64 w-64 rounded-full bg-secondary-container/15 blur-[90px] sm:right-1/4 sm:h-80 sm:w-80 sm:blur-[120px]" />

          <div className="absolute bottom-1/4 left-[-80px] h-60 w-60 rounded-full bg-primary-container/15 blur-[90px] sm:left-1/3 sm:h-72 sm:w-72 sm:blur-[120px]" />

          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,179,182,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
        </div>

        {/* =====================================================
            HERO
        ====================================================== */}

        <section className="relative z-10 mx-auto w-full max-w-[1360px] px-4 pb-8 pt-10 sm:px-6 sm:pb-10 sm:pt-14 lg:px-gutter lg:pb-space-md lg:pt-space-lg">

          <div className="mx-auto flex max-w-4xl flex-col items-center space-y-4 text-center sm:space-y-space-sm">

            {/* Eyebrow */}

            <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-surface-container-low/90 px-3 py-1 shadow-sm backdrop-blur-md sm:px-space-md">

              <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-primary-container shadow-[0_0_8px_#e11d48]" />

              <span className="font-label-md text-[10px] uppercase tracking-[0.1em] text-primary sm:text-xs">
                Portfolio & Case Studies
              </span>

            </div>

            {/* Heading */}

            <h1 className="max-w-4xl font-display text-[38px] leading-[1.05] tracking-tight text-on-surface sm:text-[48px] md:text-display">

              Crafted For Impact.{" "}

              <span className="bg-gradient-to-r from-primary-fixed via-primary to-primary-container bg-clip-text text-transparent">
                Proven By Metrics.
              </span>

            </h1>

            {/* Subtitle */}

            <p className="max-w-2xl px-2 text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7 md:font-body-lg md:text-body-lg">
              Explore how we engineer scalable web applications, bespoke
              design systems, and conversion-optimized digital experiences
              for ambitious companies.
            </p>

          </div>

          {/* =================================================
              FILTER CONTROLS
          ================================================== */}

          <div className="mt-8 flex w-full min-w-0 flex-col gap-3 rounded-xl bg-surface-container-low/70 p-2 shadow-lg backdrop-blur-xl sm:mt-space-lg sm:gap-space-md lg:flex-row lg:items-center lg:justify-between">

            {/* Category Tabs */}

            <div className="scrollbar-none flex w-full min-w-0 items-center gap-1.5 overflow-x-auto pb-1 lg:w-auto lg:pb-0">

              {categories.map((category) => {
                const active = activeCategory === category.value;

                return (
                  <button
                    key={category.value}
                    onClick={() => setActiveCategory(category.value)}
                    className={`shrink-0 whitespace-nowrap rounded-full px-3 py-2 text-xs font-semibold transition-all sm:px-4 sm:text-sm ${
                      active
                        ? "bg-primary-container text-on-primary-container shadow-[0_0_14px_rgba(225,29,72,0.45)]"
                        : "text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"
                    }`}
                  >
                    {category.label}
                  </button>
                );
              })}

            </div>

            {/* Search */}

            <div className="relative w-full min-w-0 lg:w-72 lg:shrink-0">

              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">
                search
              </span>

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Filter by tech..."
                className="w-full min-w-0 rounded-lg bg-surface-container-lowest py-2.5 pl-10 pr-4 text-sm text-on-surface outline-none transition-all placeholder:text-outline-variant focus:bg-surface-container-high"
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            FEATURED CASE STUDY
        ====================================================== */}

        <section className="relative z-10 mx-auto w-full max-w-[1360px] px-4 py-6 sm:px-6 sm:py-10 lg:px-gutter lg:py-space-md">

          <div className="group relative min-w-0 overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high/90 via-surface-container/70 to-surface-container-lowest/90 p-3 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_20px_50px_rgba(225,29,72,0.18)] sm:p-5 md:p-space-lg">

            {/* Internal Glows */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-primary-container/20 blur-[70px] sm:h-96 sm:w-96 sm:blur-[90px]" />

            <div className="pointer-events-none absolute -bottom-24 right-1/3 h-60 w-60 rounded-full bg-secondary-container/15 blur-[70px] sm:h-80 sm:w-80 sm:blur-[80px]" />

            <div className="relative z-10 grid min-w-0 grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-space-lg">

              {/* LEFT */}

              <div className="min-w-0 space-y-5 lg:col-span-5 lg:space-y-space-md">

                <div className="flex flex-wrap items-center gap-2">

                  <span className="rounded-full bg-secondary-container/40 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary sm:px-3 sm:text-xs">
                    Fintech & Analytics
                  </span>

                  <span className="rounded-full bg-surface-container-highest px-2.5 py-1 text-[10px] font-semibold text-on-surface sm:px-3 sm:text-xs">
                    Featured Flagship
                  </span>

                </div>

                <div className="space-y-2">

                  <h2 className="break-words text-2xl font-bold leading-tight tracking-tight text-on-surface sm:text-3xl lg:font-headline-lg">
                    ApexGlobal - Enterprise Financial Intelligence Suite
                  </h2>

                  <p className="text-sm leading-6 text-on-surface-variant sm:text-base">
                    Engineered a mission-critical real-time liquidity
                    management console handling millisecond financial data
                    pipelines for institutional traders across Frankfurt and
                    New York.
                  </p>

                </div>

                {/* Metrics */}

                <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-3">

                  <Metric
                    value="+310%"
                    label="Data Throughput"
                    primary
                  />

                  <Metric
                    value="0.4s"
                    label="Sub-Second Latency"
                  />

                  <Metric
                    value="$1.2B"
                    label="Tx Volume Scaled"
                    primary
                  />

                </div>

                {/* Tech */}

                <div className="flex flex-wrap gap-1.5 pt-1">

                  {[
                    "Next.js 15",
                    "React 19",
                    "Tailwind CSS",
                    "WebSockets",
                    "Supabase",
                  ].map((item) => (
                    <TechBadge key={item}>{item}</TechBadge>
                  ))}

                </div>

                {/* Button */}

                <div className="pt-1 sm:pt-space-xs">

                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-5 py-3 text-sm font-semibold text-on-primary-container shadow-[0_0_24px_rgba(225,29,72,0.45)] transition-all duration-200 hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(225,29,72,0.7)] sm:w-auto sm:px-space-lg sm:text-base"
                  >
                    <span>View Complete Case Study</span>

                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>

                </div>

              </div>

              {/* RIGHT VISUAL */}

              <div className="relative flex min-w-0 items-center justify-center pt-2 lg:col-span-7 lg:pt-0">

                <div className="relative flex aspect-[16/11] w-full min-w-0 flex-col overflow-hidden rounded-xl bg-surface-container-lowest p-1.5 shadow-2xl sm:p-2">

                  {/* Mockup Header */}

                  <div className="flex min-w-0 items-center justify-between gap-2 rounded-t-lg bg-surface-container-low px-2.5 py-2 sm:px-3">

                    <div className="flex min-w-0 items-center gap-1.5">

                      <span className="h-2 w-2 shrink-0 rounded-full bg-error/70 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 shrink-0 rounded-full bg-tertiary-container/70 sm:h-2.5 sm:w-2.5" />
                      <span className="h-2 w-2 shrink-0 rounded-full bg-primary/70 sm:h-2.5 sm:w-2.5" />

                      <span className="ml-1 hidden truncate font-mono text-[10px] text-on-surface-variant sm:ml-2 sm:block sm:text-[11px]">
                        apex-analytics.engine.v2.internal
                      </span>

                    </div>

                    <span className="shrink-0 rounded bg-primary-container/20 px-1.5 py-0.5 font-mono text-[8px] text-primary sm:px-2 sm:text-[10px]">
                      LIVE
                    </span>

                  </div>

                  {/* Dashboard */}

                  <div className="relative flex min-h-0 flex-1 flex-col justify-between overflow-hidden bg-surface-dim p-2 sm:p-4">

                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-container via-transparent to-transparent opacity-40" />

                    {/* Stats */}

                    <div className="relative z-10 grid grid-cols-2 gap-1.5 sm:gap-2 md:grid-cols-4">

                      <DashboardStat
                        label="Active Streams"
                        value="18.4K"
                        change="↑ 24.2%"
                      />

                      <DashboardStat
                        label="Avg Execution"
                        value="3.8ms"
                        change="Optimal SLA"
                        secondary
                      />

                      <DashboardStat
                        label="Node Health"
                        value="99.98%"
                        change="32 Clusters"
                        primary
                      />

                      <DashboardStat
                        label="Net Hedged"
                        value="$48.9M"
                        change="↑ 8.1%"
                      />

                    </div>

                    {/* Graph */}

                    <div className="relative z-10 my-1.5 rounded-lg bg-surface-container-lowest/60 p-2 backdrop-blur-md sm:my-2 sm:p-3">

                      <div className="mb-1.5 flex items-center justify-between gap-2 sm:mb-2">

                        <div className="flex min-w-0 items-center gap-2">

                          <span className="truncate text-[9px] font-semibold uppercase tracking-wider text-on-surface sm:text-xs">
                            Throughput Momentum
                          </span>

                          <span className="hidden rounded-full bg-primary-container/20 px-2 py-0.5 font-mono text-[10px] text-primary sm:inline">
                            +248% Surge
                          </span>

                        </div>

                        <span className="shrink-0 font-mono text-[8px] text-on-surface-variant sm:text-[11px]">
                          Peak: 4.8 GB/s
                        </span>

                      </div>

                      <div className="relative h-16 w-full sm:h-24 md:h-32">

                        <svg
                          className="h-full w-full"
                          preserveAspectRatio="none"
                          viewBox="0 0 500 120"
                        >

                          <defs>

                            <linearGradient
                              id="apexGrad"
                              x1="0%"
                              x2="0%"
                              y1="0%"
                              y2="100%"
                            >

                              <stop
                                offset="0%"
                                stopColor="#e11d48"
                                stopOpacity="0.55"
                              />

                              <stop
                                offset="50%"
                                stopColor="#be123c"
                                stopOpacity="0.15"
                              />

                              <stop
                                offset="100%"
                                stopColor="#121318"
                                stopOpacity="0"
                              />

                            </linearGradient>

                          </defs>

                          <path
                            d="M0,105 C50,95 80,110 120,70 C160,30 200,85 250,55 C300,25 350,60 400,20 C440,-5 470,25 500,10 L500,120 L0,120 Z"
                            fill="url(#apexGrad)"
                          />

                          <path
                            d="M0,105 C50,95 80,110 120,70 C160,30 200,85 250,55 C300,25 350,60 400,20 C440,-5 470,25 500,10"
                            fill="none"
                            stroke="#e11d48"
                            strokeLinecap="round"
                            strokeWidth="3"
                          />

                          <circle
                            className="animate-ping"
                            cx="250"
                            cy="55"
                            fill="#ffb3b6"
                            r="4"
                          />

                          <circle
                            cx="400"
                            cy="20"
                            fill="#ffdada"
                            r="4"
                          />

                          <circle
                            cx="500"
                            cy="10"
                            fill="#ffffff"
                            r="5"
                          />

                        </svg>

                      </div>

                    </div>

                    {/* Bottom Status */}

                    <div className="relative z-10 flex flex-col justify-between gap-1 font-mono text-[8px] text-on-surface-variant sm:flex-row sm:gap-2 sm:text-[11px]">

                      <span className="flex min-w-0 items-center gap-1.5">

                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-container sm:h-2 sm:w-2" />

                        <span className="truncate">
                          Synchronized with Global Edge Gateway
                        </span>

                      </span>

                      <span className="shrink-0">
                        Supabase • 14ms
                      </span>

                    </div>

                  </div>

                </div>

                {/* Floating Widget */}

                <div className="absolute -bottom-6 -left-6 hidden w-60 flex-col gap-2 rounded-xl bg-surface-container-high/90 p-3 shadow-2xl backdrop-blur-2xl sm:flex">

                  <div className="flex items-center justify-between">

                    <span className="font-label-md uppercase text-on-surface">
                      Top Channel Load
                    </span>

                    <span className="material-symbols-outlined text-[18px] text-primary">
                      trending_up
                    </span>

                  </div>

                  <div className="flex items-center gap-3">

                    <div className="relative h-12 w-12 shrink-0">

                      <svg
                        className="h-full w-full -rotate-90"
                        viewBox="0 0 36 36"
                      >

                        <path
                          className="text-surface-container-highest"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4.5"
                        />

                        <path
                          className="text-primary-container"
                          d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          fill="none"
                          stroke="currentColor"
                          strokeDasharray="72, 100"
                          strokeLinecap="round"
                          strokeWidth="4.5"
                        />

                      </svg>

                      <div className="absolute inset-0 flex items-center justify-center font-label-md text-on-surface">
                        72%
                      </div>

                    </div>

                    <div className="min-w-0 space-y-0.5">

                      <div className="truncate text-[11px] font-semibold text-on-surface">
                        Algorithmic Order Flow
                      </div>

                      <div className="font-mono text-[10px] text-on-surface-variant">
                        28.4k req/sec peak
                      </div>

                    </div>

                  </div>

                </div>

                {/* Verification Badge */}

                <div className="absolute -right-4 -top-4 hidden items-center gap-2 rounded-full bg-surface-container/90 px-3.5 py-2 shadow-xl backdrop-blur-xl sm:flex">

                  <span className="material-symbols-outlined text-[16px] text-primary">
                    verified
                  </span>

                  <span className="font-label-md text-on-surface">
                    SOC2 Type II Verified
                  </span>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* =====================================================
            PROJECT GRID
        ====================================================== */}

        <section className="relative z-10 mx-auto w-full max-w-[1360px] px-4 py-10 sm:px-6 sm:py-14 lg:px-gutter lg:py-space-xl">

          <div className="mb-8 flex min-w-0 flex-col justify-between gap-4 md:flex-row md:items-end md:gap-space-sm">

            <div className="min-w-0">

              <div className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                Production Architectures
              </div>

              <h2 className="break-words text-2xl font-bold leading-tight text-on-surface sm:text-3xl lg:font-headline-lg">
                Recent Deployments & Case Highlights
              </h2>

            </div>

            <p className="max-w-md text-sm leading-6 text-on-surface-variant sm:text-base">
              Every solution is built with bespoke engineering, extreme
              performance budgets, and radical conversion orientation.
            </p>

          </div>

          {/* Projects */}

          <div className="grid min-w-0 grid-cols-1 gap-4 sm:gap-space-md md:grid-cols-2 lg:grid-cols-3">

            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}

          </div>

          {filteredProjects.length === 0 && (
            <div className="rounded-xl bg-surface-container-low p-8 text-center sm:p-12">

              <span className="material-symbols-outlined text-4xl text-primary">
                search_off
              </span>

              <h3 className="mt-4 text-xl font-bold sm:font-headline-sm">
                No projects found
              </h3>

              <p className="mt-2 text-sm text-on-surface-variant sm:text-base">
                Try another category or technology.
              </p>

            </div>
          )}

        </section>

        {/* =====================================================
            RESULTS
        ====================================================== */}

        <section className="relative z-10 mx-auto w-full max-w-[1360px] px-4 py-6 sm:px-6 sm:py-10 lg:px-gutter lg:py-space-lg">

          <div className="rounded-xl bg-surface-container-high/60 p-5 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-space-lg">

            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-space-md lg:grid-cols-4">

              <Result
                label="Aggregate Value"
                value="$120M+"
                primary
                description="Client revenue generated & venture rounds closed through platforms we engineered."
              />

              <Result
                label="Performance Standard"
                value="99.4%"
                description="Average Google Lighthouse score across Core Web Vitals, accessibility, and SEO."
              />

              <Result
                label="Design Excellence"
                value="35+"
                primary
                description="Global honors including FWA, Awwwards, CSS Design Awards, and Red Dot nominations."
              />

              <Result
                label="Execution Reliability"
                value="100%"
                description="On-time delivery rate tracked across sprint-level commitments and SLA guarantees."
              />

            </div>

          </div>

        </section>

        {/* =====================================================
            CTA
        ====================================================== */}

        <section className="relative z-10 mx-auto w-full max-w-[1360px] px-4 pb-10 pt-6 sm:px-6 sm:pb-14 sm:pt-10 lg:px-gutter lg:pb-space-xl lg:pt-space-md">

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-surface-container-high via-surface-container to-surface-container-lowest p-5 text-center shadow-2xl sm:p-8 lg:p-space-xl">

            {/* Glow */}

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(225,29,72,0.22)_0%,_rgba(181,0,54,0.08)_50%,_transparent_75%)]" />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center space-y-5 sm:space-y-space-md">

              <div className="inline-flex max-w-full items-center gap-2 rounded-full bg-surface-container-lowest/80 px-3 py-1 shadow-sm backdrop-blur-md sm:px-space-md">

                <span className="material-symbols-outlined shrink-0 text-[18px] text-primary">
                  terminal
                </span>

                <span className="text-[10px] font-semibold uppercase tracking-widest text-primary sm:text-xs">
                  Ready For Scale
                </span>

              </div>

              <h2 className="max-w-3xl break-words text-3xl font-bold leading-tight tracking-tight text-on-surface sm:text-4xl md:text-display">

                Have a vision for your next{" "}

                <span className="bg-gradient-to-r from-primary-fixed to-primary-container bg-clip-text text-transparent">
                  digital product?
                </span>

              </h2>

              <p className="max-w-xl text-sm leading-6 text-on-surface-variant sm:text-base sm:leading-7 md:font-body-lg">
                Let our senior engineers and digital product designers turn
                your ambitious roadmap into high-converting,
                production-ready software.
              </p>

              {/* CTA Buttons */}

              <div className="flex w-full flex-col items-center justify-center gap-3 pt-1 sm:w-auto sm:flex-row sm:gap-space-sm">

                <a
                  href="#"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-5 py-3 text-sm font-semibold text-on-primary-container shadow-[0_0_24px_rgba(225,29,72,0.5)] transition-all hover:scale-[1.02] hover:shadow-[0_0_36px_rgba(225,29,72,0.7)] sm:w-auto sm:px-space-lg sm:text-base"
                >
                  <span>Schedule Architecture Audit</span>

                  <span className="material-symbols-outlined text-[18px]">
                    calendar_month
                  </span>

                </a>

                <a
                  href="/services"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-surface-container-highest/80 px-5 py-3 text-sm font-semibold text-on-surface shadow-sm transition-all hover:bg-surface-container-high sm:w-auto sm:px-space-lg sm:text-base"
                >
                  <span>Explore All Services</span>

                  <span className="material-symbols-outlined text-[18px]">
                    arrow_outward
                  </span>

                </a>

              </div>

              {/* Guarantees */}

              <div className="flex flex-col items-start justify-center gap-3 pt-2 text-left text-xs text-on-surface-variant sm:flex-row sm:flex-wrap sm:items-center sm:gap-space-md sm:text-center sm:text-sm">

                <Guarantee>
                  Direct access to Senior Principal Engineers
                </Guarantee>

                <Guarantee>
                  Zero-lockin clean Next.js/Tailwind codebases
                </Guarantee>

                <Guarantee>
                  Sprint velocity guarantee
                </Guarantee>

              </div>

            </div>

          </div>

        </section>

      </div>
    </main>
  );
}

/* =============================================================
   PROJECT CARD
============================================================= */

function ProjectCard({ project }) {
  if (project.large) {
    return (
      <div className="group relative flex min-w-0 flex-col justify-between gap-5 overflow-hidden rounded-xl bg-surface-container-low/90 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_16px_36px_rgba(225,29,72,0.18)] sm:p-space-md md:flex-row lg:col-span-2">

        {/* Image */}

        <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg bg-surface-container-lowest sm:h-64 md:h-auto md:w-1/2">

          <img
            src={project.image}
            alt={project.alt}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent md:bg-gradient-to-r" />

          <span className="absolute left-3 top-3 max-w-[calc(100%-24px)] rounded-full bg-surface-container-lowest/80 px-3 py-1 text-[10px] font-semibold uppercase text-primary backdrop-blur-md sm:text-xs">
            {project.badge}
          </span>

        </div>

        {/* Content */}

        <div className="flex min-w-0 w-full flex-col justify-between">

          <div className="space-y-3 sm:space-y-space-xs">

            <div className="flex min-w-0 items-center gap-2">

              <span className="material-symbols-outlined shrink-0 text-[20px] text-primary">
                award_star
              </span>

              <span className="truncate font-mono text-[10px] uppercase text-on-surface-variant sm:text-[12px]">
                FWA & Awwwards Site of the Day
              </span>

            </div>

            <h3 className="break-words text-xl font-bold leading-tight text-on-surface transition-colors group-hover:text-primary sm:text-2xl md:font-headline-md">
              {project.title}
            </h3>

            <p className="text-sm leading-6 text-on-surface-variant sm:text-base">
              {project.description}
            </p>

          </div>

          <div className="space-y-4 pt-5 sm:space-y-space-sm sm:pt-space-md">

            <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">

              <div className="rounded-lg bg-surface-container-lowest/70 p-2.5">

                <span className="block text-xs text-on-surface-variant">
                  Frame Rate
                </span>

                <span className="text-base font-bold sm:font-headline-sm">
                  60 FPS Locked
                </span>

              </div>

              <div className="rounded-lg bg-surface-container-lowest/70 p-2.5">

                <span className="block text-xs text-on-surface-variant">
                  Recognition
                </span>

                <span className="text-base font-bold text-primary sm:font-headline-sm">
                  SOTD Honors
                </span>

              </div>

            </div>

            <div className="flex flex-col items-start gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <TechBadge key={tag}>{tag}</TechBadge>
                ))}
              </div>

              <CaseLink text="Explore Case Study" />

            </div>

          </div>

        </div>

      </div>
    );
  }

  return (
    <div className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low/90 p-3 shadow-xl backdrop-blur-md transition-all duration-300 hover:shadow-[0_16px_36px_rgba(225,29,72,0.18)] sm:p-space-md">

      <div className="min-w-0 space-y-4 sm:space-y-space-sm">

        <div className="relative h-52 w-full min-w-0 overflow-hidden rounded-lg bg-surface-container-lowest">

          {project.isMap ? (
            <div
              className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{
                backgroundImage: `url("${project.image}")`,
              }}
            />
          ) : (
            <img
              src={project.image}
              alt={project.alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent" />

          <span className="absolute left-3 top-3 max-w-[calc(100%-24px)] rounded-full bg-surface-container-lowest/80 px-3 py-1 text-[10px] font-semibold uppercase text-primary backdrop-blur-md sm:text-xs">
            {project.badge}
          </span>

        </div>

        <div className="min-w-0">

          <h3 className="break-words text-lg font-bold leading-tight text-on-surface transition-colors group-hover:text-primary sm:text-xl sm:font-headline-sm">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-on-surface-variant">
            {project.description}
          </p>

        </div>

      </div>

      <div className="space-y-4 pt-5 sm:space-y-space-sm sm:pt-space-md">

        <div className="flex min-w-0 items-center justify-between gap-3 rounded-lg bg-surface-container-lowest/70 p-2.5">

          <span className="min-w-0 text-xs text-on-surface-variant sm:text-sm">
            {project.metricLabel}
          </span>

          <span className="shrink-0 text-base font-bold text-primary sm:font-headline-sm">
            {project.metric}
          </span>

        </div>

        <div className="flex flex-wrap gap-1.5">

          {project.tags.map((tag) => (
            <TechBadge key={tag}>{tag}</TechBadge>
          ))}

        </div>

        <CaseLink text="Read Case Study" />

      </div>

    </div>
  );
}

/* =============================================================
   SMALL COMPONENTS
============================================================= */

function Metric({ value, label, primary = false }) {
  return (
    <div className="min-w-0 rounded-lg bg-surface-container-lowest/80 p-2.5 backdrop-blur-sm sm:p-3">

      <div
        className={`truncate text-lg font-bold tracking-tight sm:font-metric-val ${
          primary ? "text-primary" : "text-on-surface"
        }`}
      >
        {value}
      </div>

      <div className="mt-0.5 break-words text-[10px] leading-4 text-on-surface-variant sm:text-xs">
        {label}
      </div>

    </div>
  );
}

function TechBadge({ children }) {
  return (
    <span className="max-w-full break-words rounded bg-surface-container-highest px-2 py-0.5 text-[10px] leading-4 text-on-surface sm:text-[11px]">
      {children}
    </span>
  );
}

function CaseLink({ text }) {
  return (
    <a
      href="#"
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5 sm:text-base"
    >
      <span>{text}</span>

      <span className="material-symbols-outlined text-[16px]">
        arrow_forward
      </span>
    </a>
  );
}

function DashboardStat({
  label,
  value,
  change,
  primary = false,
  secondary = false,
}) {
  return (
    <div className="min-w-0 rounded-lg bg-surface-container-low/80 p-1.5 backdrop-blur-md sm:p-2.5">

      <span className="block truncate text-[8px] text-on-surface-variant sm:text-[11px]">
        {label}
      </span>

      <span
        className={`block truncate text-sm font-bold sm:font-headline-sm ${
          primary ? "text-primary" : "text-on-surface"
        }`}
      >
        {value}
      </span>

      <span
        className={`mt-0.5 block truncate font-mono text-[7px] sm:text-[10px] ${
          secondary ? "text-secondary" : "text-primary"
        }`}
      >
        {change}
      </span>

    </div>
  );
}

function Result({ label, value, description, primary = false }) {
  return (
    <div className="flex min-w-0 flex-col space-y-1">

      <span className="text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant sm:text-xs">
        {label}
      </span>

      <div
        className={`break-words text-4xl font-extrabold leading-none tracking-tight sm:text-5xl lg:font-display lg:text-display ${
          primary ? "text-primary" : "text-on-surface"
        }`}
      >
        {value}
      </div>

      <p className="pt-1 text-sm leading-5 text-on-surface-variant">
        {description}
      </p>

    </div>
  );
}

function Guarantee({ children }) {
  return (
    <div className="flex min-w-0 items-start gap-1.5">

      <span className="material-symbols-outlined shrink-0 text-[16px] text-primary">
        check_circle
      </span>

      <span className="leading-5">
        {children}
      </span>

    </div>
  );
}
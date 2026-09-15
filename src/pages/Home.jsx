import React from "react";
import { Link } from "react-router-dom";

function Reveal({ children, className = "", ...props }) {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
}

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">

      {/* ================= HERO ================= */}
      <section className="relative w-full -mt-20 pt-28 sm:pt-32 pb-16 sm:pb-24 overflow-hidden bg-surface-container-lowest">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] sm:w-[950px] h-[400px] sm:h-[550px] rounded-full bg-primary-container/20 blur-[100px] sm:blur-[130px]" />

        <div className="pointer-events-none absolute top-1/3 -left-48 w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] rounded-full bg-secondary-container/15 blur-[100px] sm:blur-[120px]" />

        <div className="pointer-events-none absolute top-1/2 -right-48 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-primary-container/15 blur-[100px] sm:blur-[120px]" />

        <div className="absolute inset-0 bg-[radial-gradient(rgba(255,179,182,0.07)_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

        <Reveal className="relative max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-gutter">

          <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 sm:gap-12 lg:gap-14 pt-4 sm:pt-6 lg:pt-12">

            {/* ================= LEFT ================= */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface-container-high/70 backdrop-blur-xl border border-outline-variant/20 shadow-lg mb-5 sm:mb-6">

                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>

                <span className="font-label-md text-label-md uppercase tracking-wider text-primary text-[10px] sm:text-xs">
                  Q2 2025 Booking Availability Open
                </span>
              </div>

              {/* Heading */}
              <h1 className="font-display text-[38px] sm:text-[48px] md:text-[56px] lg:text-[62px] xl:text-[68px] leading-[1.05] text-on-surface tracking-tight mb-5 sm:mb-6">
                We Build

                <span className="block bg-gradient-to-r from-primary via-primary-container to-secondary text-transparent bg-clip-text">
                  Digital Experiences
                </span>

                That Scale Brands
              </h1>

              {/* Description */}
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed mb-7 sm:mb-8 text-sm sm:text-base lg:text-lg">
                A full-cycle web engineering & design studio building
                high-performance React platforms, conversion-driven UI/UX
                systems and scalable digital products for ambitious brands.
              </p>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto">

                <Link
                  to="/contact"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-label-lg text-label-lg shadow-[0_0_28px_rgba(225,29,72,0.45)] hover:shadow-[0_0_40px_rgba(225,29,72,0.65)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  <span>Start a Project</span>

                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </Link>

                <a
                  href="#showcase"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 rounded-full bg-surface-container/70 backdrop-blur-xl border border-outline-variant/20 hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-all duration-300"
                >
                  <span className="material-symbols-outlined text-primary text-[21px]">
                    play_circle
                  </span>

                  <span>View Showcase</span>
                </a>
              </div>

              {/* Trust Info */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-x-5 sm:gap-x-6 gap-y-3 mt-7 sm:mt-8 text-on-surface-variant">

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    verified
                  </span>
                  <span className="text-xs sm:text-sm">
                    120+ Projects
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    star
                  </span>
                  <span className="text-xs sm:text-sm">
                    4.9 Client Rating
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    public
                  </span>
                  <span className="text-xs sm:text-sm">
                    Global Delivery
                  </span>
                </div>

              </div>
            </div>

            {/* ================= RIGHT DASHBOARD ================= */}
            <div className="relative w-full max-w-full lg:max-w-[540px] lg:ml-auto">

              {/* Glow */}
              <div className="absolute -inset-5 sm:-inset-8 bg-gradient-to-r from-primary-container/20 via-secondary-container/10 to-primary-container/20 blur-[60px] sm:blur-[80px] rounded-full pointer-events-none" />

              {/* Dashboard */}
              <div className="relative w-full max-w-full rounded-2xl sm:rounded-[28px] bg-surface-container-lowest/90 backdrop-blur-2xl border border-outline-variant/20 shadow-[0_20px_70px_rgba(0,0,0,0.55)] overflow-hidden">

                {/* Browser Header */}
                <div className="flex items-center justify-between px-3 sm:px-5 py-3 border-b border-outline-variant/15">

                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-primary/60" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-secondary/60" />
                    <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-tertiary/60" />
                  </div>

                  <div className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-container text-on-surface-variant text-xs">
                    <span className="material-symbols-outlined text-[14px] text-primary">
                      lock
                    </span>
                    dashboard.nexweb.agency
                  </div>

                  <span className="material-symbols-outlined text-on-surface-variant text-[18px]">
                    more_horiz
                  </span>
                </div>

                {/* Dashboard Body */}
                <div className="p-3 sm:p-5 bg-gradient-to-br from-surface-container-low via-surface-container-lowest to-surface-container">

                  {/* Stats */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3 sm:mb-4">

                    {/* Revenue */}
                    <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-surface-container/80 border border-outline-variant/10 shadow-lg">

                      <div className="flex items-start justify-between mb-3 sm:mb-4">

                        <div>
                          <p className="text-xs text-on-surface-variant mb-1">
                            Revenue
                          </p>

                          <h3 className="text-xl sm:text-2xl font-bold text-on-surface">
                            $48.2K
                          </h3>
                        </div>

                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-primary text-[18px] sm:text-[20px]">
                            payments
                          </span>
                        </div>

                      </div>

                      <div className="flex items-center gap-1 text-primary text-xs font-semibold">
                        <span className="material-symbols-outlined text-[15px]">
                          trending_up
                        </span>
                        +18.4%
                      </div>
                    </div>

                    {/* Conversion */}
                    <div className="rounded-xl sm:rounded-2xl p-3 sm:p-4 bg-surface-container/80 border border-outline-variant/10 shadow-lg">

                      <div className="flex items-start justify-between mb-3 sm:mb-4">

                        <div>
                          <p className="text-xs text-on-surface-variant mb-1">
                            Conversion
                          </p>

                          <h3 className="text-xl sm:text-2xl font-bold text-on-surface">
                            8.64%
                          </h3>
                        </div>

                        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-secondary/10 flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary text-[18px] sm:text-[20px]">
                            query_stats
                          </span>
                        </div>

                      </div>

                      <div className="flex items-center gap-1 text-primary text-xs font-semibold">
                        <span className="material-symbols-outlined text-[15px]">
                          north_east
                        </span>
                        +12.7%
                      </div>

                    </div>
                  </div>

                  {/* Chart */}
                  <div className="rounded-xl sm:rounded-2xl p-3 sm:p-5 bg-surface-container/75 border border-outline-variant/10 shadow-lg">

                    <div className="flex items-center justify-between mb-4">

                      <div>
                        <p className="text-xs text-on-surface-variant">
                          Performance
                        </p>

                        <h3 className="text-sm font-semibold text-on-surface mt-0.5">
                          Growth Analytics
                        </h3>
                      </div>

                      <div className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] sm:text-[11px] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Live
                      </div>

                    </div>

                    <div className="flex items-end justify-between gap-1 h-24 sm:h-28 pt-2">

                      <div className="w-full bg-primary/20 rounded-t-sm h-[40%]" />
                      <div className="w-full bg-primary/40 rounded-t-sm h-[60%]" />
                      <div className="w-full bg-primary/30 rounded-t-sm h-[50%]" />
                      <div className="w-full bg-primary/70 rounded-t-sm h-[85%]" />
                      <div className="w-full bg-primary/50 rounded-t-sm h-[65%]" />
                      <div className="w-full bg-gradient-to-t from-primary to-secondary rounded-t-sm h-[95%]" />
                      <div className="w-full bg-primary/60 rounded-t-sm h-[70%]" />

                    </div>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </Reveal>
      </section>

      {/* ================= METRICS ================= */}
      <section className="w-full py-12 sm:py-space-xl bg-surface-container-low relative">

        <Reveal className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-gutter">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-space-md">

            {[
              {
                icon: "payments",
                badge: "+140% YoY",
                value: "$48M+",
                text: "Verified Revenue Generated for Client Portfolios",
              },
              {
                icon: "verified_user",
                badge: "Top Tier",
                value: "99.4%",
                text: "Quarterly Client Retention & SLA Adherence Rate",
              },
              {
                icon: "devices",
                badge: "Production Ready",
                value: "120+",
                text: "Custom React & Next.js Architectures Delivered",
              },
              {
                icon: "grade",
                badge: "58 Verified",
                value: "4.9 / 5",
                text: "Average Clutch, Google & G2 Global Client Rating",
              },
            ].map((metric, i) => (

              <div
                key={i}
                className="p-5 sm:p-space-lg rounded-xl bg-surface-container shadow-md hover:bg-surface-container-high transition-all"
              >

                <div className="flex items-center justify-between mb-3">

                  <span className="material-symbols-outlined text-primary text-[28px] sm:text-[32px]">
                    {metric.icon}
                  </span>

                  <span className="font-label-md text-label-md px-2 py-0.5 rounded-full bg-primary/10 text-primary font-bold text-[10px] sm:text-xs">
                    {metric.badge}
                  </span>

                </div>

                <div className="font-metric-val text-metric-val text-on-surface mb-1 text-3xl sm:text-4xl">
                  {metric.value}
                </div>

                <p className="font-body-sm text-body-sm text-on-surface-variant text-sm">
                  {metric.text}
                </p>

              </div>
            ))}

          </div>
        </Reveal>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="w-full py-12 sm:py-space-xl bg-background relative">

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-gutter">

          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-space-xl gap-5 sm:gap-space-md">

            <div>

              <div className="flex items-center gap-2 text-primary font-label-md text-label-md uppercase tracking-widest mb-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Comprehensive Capabilities
              </div>

              <h2 className="font-headline-lg text-headline-lg text-on-surface text-3xl sm:text-4xl lg:text-5xl">
                Precision Digital Craftsmanship
              </h2>

            </div>

            <p className="font-body-md text-body-md text-on-surface-variant max-w-md text-sm sm:text-base">
              We merge modern software architecture with emotive design to
              manufacture unfair competitive advantages for ambitious founders.
            </p>

          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-space-md">

            {/* Card 1 */}
            <Reveal className="md:col-span-7 rounded-xl bg-surface-container p-5 sm:p-space-lg flex flex-col justify-between shadow-xl group hover:bg-surface-container-high transition-all">

              <div className="space-y-5 sm:space-y-space-md">

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">
                    code_blocks
                  </span>
                </div>

                <div>

                  <span className="font-label-md text-label-md text-primary uppercase tracking-wider block mb-1 text-xs">
                    Full-Cycle Engineering
                  </span>

                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl sm:text-3xl">
                    React 19 & Next.js Application Architecture
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
                    Production-grade web apps engineered with atomic
                    precision. We specialize in server components, edge
                    routing, Tailwind systems, and headless microservices.
                  </p>

                </div>

                <div className="flex flex-wrap gap-2">
                  {["Next.js", "TypeScript", "Tailwind CSS"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-label-md text-label-md text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </Reveal>

            {/* Card 2 */}
            <Reveal className="md:col-span-5 rounded-xl bg-surface-container p-5 sm:p-space-lg flex flex-col justify-between shadow-xl group hover:bg-surface-container-high transition-all">

              <div className="space-y-5 sm:space-y-space-md">

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-secondary-container/20 flex items-center justify-center text-secondary">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">
                    design_services
                  </span>
                </div>

                <div>

                  <span className="font-label-md text-label-md text-secondary uppercase tracking-wider block mb-1 text-xs">
                    Visual Design & Systems
                  </span>

                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl sm:text-3xl">
                    Conversion UI/UX & Design Tokens
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
                    From high-fidelity interactive Figma prototypes to
                    tokenized modular UI components with dark mode-first
                    aesthetics.
                  </p>

                </div>

              </div>
            </Reveal>

            {/* Card 3 */}
            <Reveal className="md:col-span-5 rounded-xl bg-surface-container p-5 sm:p-space-lg flex flex-col justify-between shadow-xl group hover:bg-surface-container-high transition-all">

              <div className="space-y-5 sm:space-y-space-md">

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-tertiary-container/20 flex items-center justify-center text-tertiary">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">
                    ads_click
                  </span>
                </div>

                <div>

                  <span className="font-label-md text-label-md text-tertiary uppercase tracking-wider block mb-1 text-xs">
                    Growth Engineering
                  </span>

                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl sm:text-3xl">
                    Full-Funnel Performance Marketing
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
                    Data-driven customer acquisition through programmatic paid
                    social, precision Google Search ads, and custom telemetry
                    data stacks.
                  </p>

                </div>

              </div>
            </Reveal>

            {/* Card 4 */}
            <Reveal className="md:col-span-7 rounded-xl bg-surface-container p-5 sm:p-space-lg flex flex-col justify-between shadow-xl group hover:bg-surface-container-high transition-all">

              <div className="space-y-5 sm:space-y-space-md">

                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-primary-container/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-[26px] sm:text-[28px]">
                    cloud_sync
                  </span>
                </div>

                <div>

                  <span className="font-label-md text-label-md text-primary uppercase tracking-wider block mb-1 text-xs">
                    Infrastructure & Serverless
                  </span>

                  <h3 className="font-headline-md text-headline-md text-on-surface mb-2 text-2xl sm:text-3xl">
                    Cloud Infrastructure & Cross-Platform Apps
                  </h3>

                  <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
                    Zero-friction deployments via AWS Lambda and Vercel
                    Enterprise. We architect reactive React Native mobile
                    solutions.
                  </p>

                </div>

              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ================= CASE STUDIES ================= */}
      <section
        id="showcase"
        className="w-full py-12 sm:py-space-xl bg-surface-container-low relative"
      >

        <div className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-gutter">

          <Reveal className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-space-xl gap-5">

            <div>

              <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-2 text-xs sm:text-sm">
                Selected Case Studies
              </span>

              <h2 className="font-headline-lg text-headline-lg text-on-surface text-3xl sm:text-4xl lg:text-5xl">
                Proven Market Disruption
              </h2>

            </div>

            <button className="inline-flex w-full md:w-auto justify-center items-center gap-2 px-5 py-2.5 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md hover:bg-surface-bright transition-colors">
              View All Case Studies

              <span className="material-symbols-outlined text-[16px]">
                arrow_forward
              </span>
            </button>

          </Reveal>

          <div className="space-y-6 sm:space-y-space-lg">

            {/* ================= FINPULSE ================= */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-center p-3 sm:p-space-lg rounded-xl bg-surface-container shadow-xl">

              {/* Dashboard Visual */}
              <div className="lg:col-span-7 relative overflow-hidden rounded-xl bg-surface-container-high min-h-[280px] sm:min-h-[320px] p-3 sm:p-space-lg">

                <div className="absolute inset-0 bg-gradient-to-br from-primary-container/20 via-transparent to-secondary-container/10" />

                <div className="relative h-full rounded-lg bg-surface-container-lowest/90 border border-outline-variant/30 p-3 sm:p-space-md shadow-2xl">

                  <div className="flex items-center justify-between mb-4">

                    <span className="font-label-md text-label-md text-on-surface-variant text-[9px] sm:text-xs">
                      FINPULSE / CAPITAL INTELLIGENCE
                    </span>

                    <span className="text-primary font-label-md text-label-md text-xs">
                      LIVE
                    </span>

                  </div>

                  {/* IMPORTANT MOBILE FIX */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">

                    <div className="rounded bg-surface-container p-3">
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Portfolio Value
                      </span>

                      <strong className="block text-2xl sm:text-3xl font-bold text-on-surface mt-1">
                        $14.2M
                      </strong>
                    </div>

                    <div className="rounded bg-surface-container p-3">
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Growth
                      </span>

                      <strong className="block text-2xl sm:text-3xl font-bold text-primary mt-1">
                        +310%
                      </strong>
                    </div>

                    <div className="rounded bg-surface-container p-3">
                      <span className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                        Risk Score
                      </span>

                      <strong className="block text-2xl sm:text-3xl font-bold text-secondary mt-1">
                        Low
                      </strong>
                    </div>

                  </div>

                  <svg
                    className="w-full h-24 sm:h-28"
                    viewBox="0 0 600 130"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient
                        id="pulseFill"
                        x1="0"
                        x2="0"
                        y1="0"
                        y2="1"
                      >
                        <stop
                          stopColor="#e11d48"
                          stopOpacity=".4"
                        />
                        <stop
                          offset="1"
                          stopColor="#e11d48"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    <path
                      d="M0 112 C50 100 62 108 98 80 S150 95 185 62 S240 78 280 45 S330 60 370 35 S420 58 462 24 S520 45 600 8 V130 H0Z"
                      fill="url(#pulseFill)"
                    />

                    <path
                      d="M0 112 C50 100 62 108 98 80 S150 95 185 62 S240 78 280 45 S330 60 370 35 S420 58 462 24 S520 45 600 8"
                      stroke="#ffb3b6"
                      strokeWidth="3"
                    />
                  </svg>

                  <div className="hidden sm:flex items-center justify-between pt-3 border-t border-outline-variant/30">

                    <span className="font-label-md text-label-md text-on-surface-variant text-xs">
                      React 19 Core Engine • Custom WebSockets
                    </span>

                    <span className="font-label-md text-label-md text-primary font-bold text-xs">
                      Live System
                    </span>

                  </div>

                </div>
              </div>

              {/* Content */}
              <div className="lg:col-span-5 space-y-4 sm:space-y-space-md">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-md text-label-md text-xs">
                  <span className="w-2 h-2 rounded-full bg-primary" />
                  FinTech Platform
                </div>

                <h3 className="font-headline-lg text-headline-lg text-on-surface text-2xl sm:text-3xl lg:text-4xl">
                  FinPulse — Autonomous Capital Management
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
                  Re-engineered a legacy financial web application into a
                  high-performance autonomous capital platform with real-time
                  market telemetry and an intelligent portfolio interface.
                </p>

                {/* MOBILE FIX */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-space-sm pt-1">

                  <div className="p-3 rounded bg-surface-container text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      +310%
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Revenue Growth
                    </div>
                  </div>

                  <div className="p-3 rounded bg-surface-container text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-on-surface">
                      120ms
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Load Time
                    </div>
                  </div>

                  <div className="p-3 rounded bg-surface-container text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-secondary">
                      $14.2M
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Assets Tracked
                    </div>
                  </div>

                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-primary hover:text-secondary transition-colors text-sm sm:text-base"
                >
                  Read FinPulse Deep Dive

                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>

              </div>
            </article>

            {/* ================= AURA ================= */}
            <article className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-center p-3 sm:p-space-lg rounded-xl bg-surface-container-low shadow-xl">

              <div className="lg:col-span-7 order-2 lg:order-1 relative overflow-hidden rounded-xl">

                <img
                  className="w-full h-64 sm:h-80 md:h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  alt="Warm luxury restaurant interior for Aura Dining"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0tVxp-1DzVbu2xLvLgOwwHh5BHcwpZDq4QVbv6XHF4isC3oQ-gldsHV8U7tuvEVoSf9peQXvmWg_upf0cw67ByDb30uyfKypj7f6v-F9W9Zoc3Kq7fO0rVZtaCn_hV7D8Os73W82nZ9sQ0jbI9jlPiH1Wny6kK3dmv_eHeEdHW--8azMOtiZlKl45V3yaBEHSqjnxFUCYqZH9NIM0RCE33aCtXWfBjAke6BZFmfo_P46ZB2a_SW4"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/90 via-transparent to-transparent" />

                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 p-3 rounded-lg bg-surface-container-lowest/80 backdrop-blur-md">

                  <span className="font-label-md text-label-md text-on-surface text-[9px] sm:text-xs">
                    Michelin Guide Partner
                  </span>

                  <span className="font-label-md text-label-md text-secondary font-bold text-[9px] sm:text-xs">
                    Award Winner
                  </span>

                </div>

              </div>

              <div className="lg:col-span-5 order-1 lg:order-2 space-y-4 sm:space-y-space-md">

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary font-label-md text-label-md text-xs">
                  <span className="w-2 h-2 rounded-full bg-secondary" />
                  Luxury Hospitality Group
                </div>

                <h3 className="font-headline-lg text-headline-lg text-on-surface text-2xl sm:text-3xl lg:text-4xl">
                  Aura Dining — Global Gastronomy Portal
                </h3>

                <p className="font-body-md text-body-md text-on-surface-variant text-sm sm:text-base">
                  Engineered an evocative digital destination for Aura’s six
                  international locations, coupling fluid typography
                  transitions with an ultra-low-friction table reservation
                  funnel.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">

                  <div className="p-3 rounded bg-surface-container text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-secondary">
                      +180%
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Online Bookings
                    </div>
                  </div>

                  <div className="p-3 rounded bg-surface-container text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-on-surface">
                      99
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Mobile Lighthouse
                    </div>
                  </div>

                  <div className="p-3 rounded bg-surface-container text-center">
                    <div className="text-2xl sm:text-3xl font-bold text-primary">
                      2.4x
                    </div>

                    <div className="text-xs text-on-surface-variant">
                      Order Size
                    </div>
                  </div>

                </div>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-label-lg text-label-lg text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                >
                  View Aura Dining Case Study

                  <span className="material-symbols-outlined text-[18px]">
                    arrow_forward
                  </span>
                </a>

              </div>

            </article>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="w-full py-12 sm:py-space-xl bg-background relative">

        <Reveal className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-gutter">

          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-space-xl">

            <span className="font-label-md text-label-md text-primary uppercase tracking-widest block mb-2 text-xs sm:text-sm">
              Founder Endorsements
            </span>

            <h2 className="font-headline-lg text-headline-lg text-on-surface text-3xl sm:text-4xl lg:text-5xl">
              What Engineering Leaders Say
            </h2>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-space-md">

            {[
              {
                text: "NEXWEB solved our web app performance bottlenecks in three weeks flat. They rebuilt our core SaaS interface into React 19, increasing our self-serve trial activations by 68%.",
                author: "Elena Rostova",
                role: "CTO at NovaTech Global",
                initials: "EL",
                color: "text-primary",
              },
              {
                text: "Their command over dark-mode aesthetics, custom design systems, and WebGL interactions gave our product the high-craft luxury feel we needed to close our $18M Series A.",
                author: "Marcus Kane",
                role: "Founder & CEO, Omnia Labs",
                initials: "MK",
                color: "text-secondary",
              },
              {
                text: "Most agencies hand over messy code. NEXWEB gave us a robust, documented design system and an edge-rendered Next.js stack with 99+ mobile Lighthouse scores.",
                author: "Sarah Thorne",
                role: "Head of Growth, Aura",
                initials: "ST",
                color: "text-tertiary",
              },
            ].map((t, i) => (

              <div
                key={i}
                className="p-5 sm:p-space-lg rounded-xl bg-surface-container shadow-xl flex flex-col justify-between"
              >

                <div className="space-y-4">

                  <div className="flex items-center gap-1 text-primary">

                    {[1, 2, 3, 4, 5].map((s) => (
                      <span
                        key={s}
                        className="material-symbols-outlined text-[17px] sm:text-[18px]"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                        }}
                      >
                        star
                      </span>
                    ))}

                  </div>

                  <p className="font-body-md text-body-md text-on-surface text-sm sm:text-base">
                    "{t.text}"
                  </p>

                </div>

                <div className="flex items-center gap-3 pt-7 sm:pt-space-lg">

                  <div
                    className={`w-10 h-10 rounded-full bg-surface-bright flex items-center justify-center font-bold ${t.color} font-headline-sm`}
                  >
                    {t.initials}
                  </div>

                  <div>

                    <div className="font-label-lg text-label-lg font-bold text-on-surface text-sm">
                      {t.author}
                    </div>

                    <div className="font-body-sm text-body-sm text-on-surface-variant text-xs">
                      {t.role}
                    </div>

                  </div>

                </div>

              </div>
            ))}

          </div>
        </Reveal>
      </section>

      {/* ================= CTA ================= */}
      <section className="w-full py-12 sm:py-space-xl bg-surface-container-lowest relative overflow-hidden">

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 sm:h-96 bg-primary-container/15 blur-[100px] sm:blur-[140px]" />

        <Reveal className="max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-gutter relative">

          <div className="relative p-6 sm:p-10 md:p-space-xl rounded-2xl bg-surface-container/90 backdrop-blur-2xl shadow-2xl overflow-hidden text-center max-w-4xl mx-auto">

            <h2 className="font-headline-lg text-headline-lg text-on-surface mb-6 sm:mb-space-md tracking-tight text-3xl sm:text-4xl lg:text-5xl">

              Ready to Accelerate Your{" "}

              <span className="text-primary">
                Digital Presence?
              </span>

            </h2>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-space-lg py-3 sm:py-space-sm rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-label-lg text-label-lg shadow-[0_0_20px_rgba(225,29,72,0.4)] w-full sm:w-auto"
            >
              Schedule a Strategy Call
            </Link>

          </div>

        </Reveal>
      </section>

    </div>
  );
}
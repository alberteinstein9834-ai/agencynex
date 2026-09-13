import { useState } from "react";

const categories = [
  "All Articles",
  "React & Next.js",
  "UI/UX Architecture",
  "Performance & SEO",
  "Cloud & DevOps",
  "Case Breakdowns",
];

const articles = [
  {
    category: "UI/UX Architecture",
    read: "6 min read",
    date: "March 2025",
    title: "Building Atomic Design Systems with Tailwind CSS v4",
    description:
      "Strategies for structuring enterprise-level component tokens, dynamic runtime variants, and zero-conflict CSS cascade layers at scale.",
    author: "Elena Rostova",
    initials: "ER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCuz8RcCPHvy695RlrTVASj6IBAEKieylJHQwm0n2c9cAWKh1qWM3no9wA-3tKTghefImevMOny-5k_LgBnzuJ3KIcDbwO5LXHXok5rnkrgViEFQW-MfL2LSi9ld-U8K5xt7Pe4fUOu46RXg1o4IRteFy-v2CfIHnsg7fAmYJc6iKpd4CWuK9vrl1-ZtqepZC2VeApPKWqDioaS0iwwqESA9c512I2SfLbzpgz7bgtsk3i1vuWSPtg",
  },
  {
    category: "React & Next.js",
    read: "10 min read",
    date: "Feb 2025",
    title:
      "React 19 Server Actions vs Headless GraphQL: Benchmarking High-Scale Workloads",
    description:
      "We benchmarked 2.5 million concurrent state mutations across microservice clusters to determine the ideal payload latency curve.",
    author: "Kaelen Thorne",
    initials: "KT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBI3b39D9s_Uoe8Dz48ZCLwIPU5IhJfPmyPYHJpKYt0Xc3OTnO4zv8h0D090_YtSrbbJ3nJwWfyqHv_MLY9awwq5RMm5uK6M5j51IYKjaKCMy1GSh0EQlyDJJoLDGejxwwxRL51LCAGsRFfRJiaRIYzGRqmrxBQIylJ9clEUdjvva6GQWoRR7I_8y2XzPuupalZlWWHtiR9TuUbDvQxPpt54nNILsb1ekM45gk7Sy0pXupZl93Frhs",
  },
  {
    category: "Conversion & CRO",
    read: "5 min read",
    date: "Feb 2025",
    title:
      "Why Micro-Interactions Increase Enterprise SaaS Conversion by 34%",
    description:
      "A behavioral neuroscience analysis on haptic feedback, cursor physics, and intent prediction in high-ticket checkout flows.",
    author: "Sophia Lin",
    initials: "SL",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDnJBNolA5jN8l4aFgrCmR-I9wNyMxnyzeeEn-VfZGXCdQcJYKmjoAlmyURDk48m9TfIosWaMHRpkd3-OatWgx0dB8v0OacZZrcCVrY0o_ZUTN_dJLPq58g38PV_YDMHMGiMAVy_4Jxevd8PmgsYToykegbJwRR7L7ltV4OPmZpIdAIL0_8n0PHKK3DG91aOXDszgqRRGNUvWPY0yA_z2b6l_z8K4ubrs12XUMz8qz_nMQbX99Fb_Y",
  },
  {
    category: "Case Breakdowns",
    read: "7 min read",
    date: "Jan 2025",
    title:
      "Decoupled E-Commerce: Migrating from Monoliths to Next.js Edge Stacks",
    description:
      "How we transitioned a $40M/year retail infrastructure to edge middleware without a single millisecond of scheduled downtime.",
    author: "Arman Vance",
    initials: "AV",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBVU0Ma2Xtqgr3BWQB0of4Te4IlhAUx6gyk-R40_jtOhK5kyOYatkgjUY23RWL4SpiRTtuEXH7caxuM-798c49K0B8NY0gFeBOKnMh59PM-B9F0WQnY83yoehAHHCYKI4xptj2BZzUU0bj8-wXBPKZC9jTJDIGiAwv8RYrTJcnnyYBXLAzb0UbTcEf9dbX0KDG53jpUJX1W15VcafxwWslRThGgIjZ1Dv-jKJ7rIYP5DpQHG3WKzvA",
  },
  {
    category: "Cloud & DevOps",
    read: "9 min read",
    date: "Jan 2025",
    title:
      "Zero-Downtime Multi-Region Deployments with AWS Lambda & Vercel",
    description:
      "Automating canary routing, synchronous global cache invalidation, and fallback replication across multi-cloud topologies.",
    author: "Kaelen Thorne",
    initials: "KT",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBUfh0Fw6Sl9rD0ymb1Xon-wPMx-RgActTVj_AuPHd9V32uWzF4vBg8xEcgxtTzSNmlSayeFvYuHevmTsYs_i7Ety3UD_2vnw3h9AimMD3_eZSOqM9kYO5X1mUNGGVZwAyNOtZDuIZ11DVFesnY9VwDelKah6i0LWkog49emSlTFZxBl7birVKeMorBFb-16qPqE5lKMRavNa4Bb1SHWK4Maf2s86cirmefHfAt8jH2n3Dnp8lST4",
  },
  {
    category: "UI/UX Architecture",
    read: "4 min read",
    date: "Jan 2025",
    title:
      "Typography Scales & Contrast Ratios in Dark-Mode Interfaces",
    description:
      "Mathematical formulations for optical compensation, halation mitigation, and WCAG AAA compliance when rendering high contrast typography.",
    author: "Elena Rostova",
    initials: "ER",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAYJOj4qayNaoG1kKb8ZYX7K3TTsxNjQg0vhvsB0bfm6oVIpSG64NWhiRR7Tpd8LfZNax0vIFIXjY7FHghTscmS7wqZgcUsrtFiHig5nusQ-olAOfqizQPdLIwXTrenyOtnS0QMb89-Ej2ZImx1vZdQl7E3Qa6fydd7xv6Fz5l_u9azbCGtAQoGYJNF8JQ0pWU69QfRHtms3EfsAOR13Qx8-jhsoH7FDAfU4JP35TUx_5KieqA2W3Q",
  },
];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All Articles");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const filteredArticles =
    activeCategory === "All Articles"
      ? articles
      : articles.filter((article) => article.category === activeCategory);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubscribed(true);
      setEmail("");
    }, 600);
  };

  return (
    <main className="w-full bg-surface-container-lowest min-h-screen text-on-surface font-body-md antialiased">
  <div className="flex flex-col w-full relative overflow-hidden"/>

    {/* Home Page Ambient Background */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[550px] rounded-full bg-primary-container/20 blur-[130px]" />

      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary-container/15 blur-[120px]" />

      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-primary-container/15 blur-[120px]" />

      {/* Home Page Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,179,182,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>

    {/* ================= HERO ================= */}
        {/* Main Container */}
        {/* ================= HERO ================= */}
<div className="relative z-10 mx-auto flex w-full max-w-[1360px] flex-col items-center gap-10 sm:gap-12 lg:gap-space-xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-space-xl">

  {/* ================= HEADER ================= */}
  <header className="mx-auto flex w-full max-w-4xl flex-col items-center gap-5 text-center sm:gap-space-md">

    <div className="inline-flex items-center gap-space-xs rounded-full bg-primary-container/10 px-space-md py-1 shadow-[0_0_16px_rgba(225,29,72,0.2)]">
      <span className="h-2 w-2 animate-pulse rounded-full bg-primary-container" />

      <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
        INSIGHTS & ENGINEERING ARCHITECTURE
      </span>
    </div>

    <h1 className="max-w-4xl text-2xl sm:text-3xl lg:text-headline-lg leading-tight font-headline-lg tracking-tight text-on-surface">
      Deep Dives Into{" "}
      <span className="bg-gradient-to-r from-on-surface via-primary to-primary-container bg-clip-text text-transparent">
        Modern Web Engineering
      </span>{" "}
      & Design Systems.
    </h1>

    <p className="mx-auto max-w-2xl text-base sm:text-lg lg:text-body-lg leading-7 sm:leading-8 text-on-surface-variant">
      Practical technical guides, architectural patterns, conversion
      science, and benchmarks written directly by our principal
      developers and systems architects.
    </p>

    {/* Category Filter */}
    {/* Category Filter */}
<div className="w-full overflow-x-auto scrollbar-none">
  <div className="flex w-max min-w-full items-center justify-start gap-2 px-1 pb-2 pt-1 sm:justify-center">
    {categories.map((category) => {
      const active = activeCategory === category;

      return (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`shrink-0 whitespace-nowrap rounded-full px-4 sm:px-space-md py-2 text-sm sm:text-label-lg transition-all ${
            active
              ? "bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container shadow-[0_0_16px_rgba(225,29,72,0.35)]"
              : "bg-surface-container-high/60 text-on-surface-variant backdrop-blur-md hover:bg-surface-container-highest hover:text-on-surface"
          }`}
        >
          {category}
        </button>
      );
    })}
  </div>
</div>

  </header>

          {/* ================= FEATURED ARTICLE ================= */}
          <section className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high/90 via-surface-container/70 to-surface-container-lowest/90 p-4 sm:p-5 md:p-space-lg lg:p-space-xl shadow-2xl backdrop-blur-2xl">

            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-primary-container/20 blur-[100px] transition-all duration-700 group-hover:scale-110" />

            <div className="relative z-10 grid grid-cols-1 items-center gap-8 sm:gap-10 lg:gap-space-lg lg:grid-cols-12">

              {/* Content */}
              <div className="flex min-w-0 flex-col gap-5 sm:gap-space-md lg:col-span-7">

                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-primary-container px-space-sm py-1 font-label-md text-label-md uppercase tracking-wider text-on-primary-container shadow-[0_0_12px_rgba(225,29,72,0.4)]">
                    FEATURED ARCHITECTURE GUIDE
                  </span>

                  <span className="text-on-surface-variant">•</span>

                  <span className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant">
                    <span className="material-symbols-outlined text-[16px] text-primary">
                      timer
                    </span>
                    8 min read
                  </span>

                  <span className="text-on-surface-variant">•</span>

                  <span className="font-label-md text-label-md text-on-surface-variant">
                    March 2025
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-headline-lg leading-tight font-headline-lg tracking-tight text-on-surface transition-colors duration-300 group-hover:text-primary">
                  Architecting for 100/100 Core Web Vitals in Next.js 15 and
                  Tailwind CSS
                </h2>

                <p className="text-base sm:text-lg lg:text-body-lg leading-7 sm:leading-8 text-on-surface-variant">
                  A comprehensive engineering guide on server-side streaming,
                  zero-runtime CSS optimization, and edge asset hydration that
                  reduced time-to-interactive by 64% across tier-one high
                  traffic e-commerce brands.
                </p>

                <div className="flex flex-col items-start gap-5 pt-1 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between sm:gap-space-md">

                  <div className="flex items-center gap-space-sm">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-surface-container-highest font-metric-val text-headline-sm text-primary shadow-md">
                      AV
                    </div>

                    <div className="flex flex-col">
                      <span className="font-headline-sm text-[1rem] text-on-surface">
                        Arman Vance
                      </span>

                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        Chief Technology Officer
                      </span>
                    </div>
                  </div>

                  <a
                    href="#"
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-5 sm:px-space-md py-3 sm:py-space-xs text-sm sm:text-label-lg font-label-lg text-on-primary-container shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(225,29,72,0.65)]"
                  >
                    Read Full Article
                    <span className="material-symbols-outlined text-[18px]">
                      arrow_forward
                    </span>
                  </a>
                </div>
              </div>

              {/* Code Mockup */}
              <div className="relative min-w-0 flex flex-col gap-3 sm:gap-space-sm lg:col-span-5">

                <div className="relative w-full min-w-0 overflow-hidden rounded-xl bg-surface-container-lowest/90 p-3 sm:p-space-md shadow-2xl backdrop-blur-xl">

                  <div className="flex min-w-0 items-center justify-between gap-2 border-b border-surface-container-highest pb-2 sm:pb-space-xs">
                    <div className="flex min-w-0 items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-error-container" />
                      <span className="h-3 w-3 rounded-full bg-surface-container-high" />
                      <span className="h-3 w-3 rounded-full bg-primary/30" />

                      <span className="ml-1 sm:ml-2 min-w-0 truncate font-mono text-[9px] sm:text-[11px] text-on-surface-variant">
                        edge.worker.streaming.ts
                      </span>
                    </div>

                    <span className="rounded bg-primary-container/20 px-2 py-0.5 font-mono text-[11px] font-bold text-primary">
                      200 OK
                    </span>
                  </div>

                  <div className="space-y-1 overflow-x-auto py-2 sm:py-space-xs font-mono text-[9px] sm:text-[12px] leading-relaxed text-on-surface-variant">
                    <p>
                      <span className="text-primary">export async function</span>{" "}
                      <span className="text-on-surface">generateMetadata</span>()
                      {" {"}
                    </p>

                    <p className="pl-4 text-tertiary-fixed-dim">
                      const telemetry = await fetchMetrics({" "}
                      {"{ cache: 'force-cache' }"});
                    </p>

                    <p className="pl-4 text-on-surface">
                      return {"{"} title: telemetry.vitals_score {"}"};
                    </p>

                    <p>{"}"}</p>

                    <p>
                      <span className="text-primary">
                        export default async function
                      </span>{" "}
                      <span className="text-on-surface">EdgeStream</span>() {"{"}
                    </p>

                    <p className="pl-4 text-primary-fixed-dim">
                      return &lt;HydrateSSR boundary="instant" /&gt;;
                    </p>

                    <p>{"}"}</p>
                  </div>

                  {/* Metrics */}
                  <div className="mt-2 sm:mt-space-xs flex flex-col gap-2 rounded-lg bg-surface-container-high/50 p-2 sm:p-space-sm">

                    <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <span className="font-label-md text-label-md uppercase text-on-surface-variant">
                        Lighthouse Audit Realtime
                      </span>

                      <span className="font-metric-val text-headline-sm font-bold text-primary">
                        100 / 100
                      </span>
                    </div>

                    {/* Sparkline */}
                    <div className="h-16 w-full pt-1">
                      <svg
                        className="h-full w-full overflow-visible"
                        fill="none"
                        preserveAspectRatio="none"
                        viewBox="0 0 300 60"
                      >
                        <defs>
                          <linearGradient
                            id="scoreGlow"
                            x1="0%"
                            x2="0%"
                            y1="0%"
                            y2="100%"
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
                          d="M0,50 Q40,48 80,30 T160,18 T240,8 T300,4 L300,60 L0,60 Z"
                          fill="url(#scoreGlow)"
                        />

                        <path
                          d="M0,50 Q40,48 80,30 T160,18 T240,8 T300,4"
                          stroke="#E11D48"
                          strokeLinecap="round"
                          strokeWidth="3"
                        />

                        <circle
                          className="animate-ping opacity-75"
                          cx="300"
                          cy="4"
                          fill="#FFFFFF"
                          r="5"
                        />

                        <circle
                          cx="300"
                          cy="4"
                          fill="#E11D48"
                          r="4"
                        />
                      </svg>
                    </div>

                    <div className="grid grid-cols-3 gap-1.5 sm:gap-2 pt-2 text-center">

                      {[
                        ["FCP", "0.42s", false],
                        ["LCP", "0.68s", false],
                        ["CLS", "0.000", true],
                      ].map(([label, value, primary]) => (
                        <div
                          key={label}
                          className="rounded bg-surface-container-lowest/60 p-1"
                        >
                          <span className="block font-label-md text-[10px] text-on-surface-variant">
                            {label}
                          </span>

                          <span
                            className={`font-metric-val text-[14px] font-bold ${
                              primary
                                ? "text-primary"
                                : "text-on-surface"
                            }`}
                          >
                            {value}
                          </span>
                        </div>
                      ))}

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= ARTICLES ================= */}
          <section className="flex flex-col gap-8 sm:gap-space-lg">

            <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                  LATEST RESEARCH & DISPATCHES
                </span>

                <h3 className="text-xl sm:text-2xl lg:text-headline-md font-headline-md leading-tight text-on-surface">
                  Curated Technical Articles
                </h3>
              </div>

              <div className="hidden items-center gap-space-xs font-label-md text-label-md text-on-surface-variant sm:flex">
                Showing {filteredArticles.length} of 42 articles
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">

              {filteredArticles.map((article) => (
                <article
                  key={article.title}
                  className="group relative flex min-w-0 flex-col justify-between overflow-hidden rounded-xl bg-surface-container-low/70 p-3.5 sm:p-space-md shadow-lg backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-surface-container-high/80 hover:shadow-[0_12px_32px_rgba(9,10,15,0.8),0_0_24px_rgba(225,29,72,0.2)]"
                >
                  <div className="flex flex-col gap-space-sm">

                    {/* Image */}
                    <div className="relative h-48 sm:h-44 w-full overflow-hidden rounded-lg">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent opacity-80" />

                      <span className="absolute bottom-2 left-2 rounded-full bg-surface-container-lowest/80 px-space-sm py-0.5 font-label-md text-label-md text-primary backdrop-blur-md">
                        {article.category}
                      </span>
                    </div>

                    {/* Meta */}
                    <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">
                          schedule
                        </span>
                        {article.read}
                      </span>

                      <span>{article.date}</span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-headline-sm leading-snug text-on-surface transition-colors group-hover:text-primary">
                      {article.title}
                    </h4>

                    <p className="line-clamp-3 text-sm sm:text-base font-body-md leading-6 text-on-surface-variant">
                      {article.description}
                    </p>
                  </div>

                  {/* Bottom */}
                  <div className="mt-4 flex items-center justify-between gap-3 border-t border-surface-container-highest/60 pt-4">

                    <div className="flex min-w-0 items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-highest text-xs font-bold text-primary">
                        {article.initials}
                      </div>

                      <span className="truncate text-sm font-body-sm text-on-surface">
                        {article.author}
                      </span>
                    </div>

                    <a
                      href="#"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-surface-container-highest text-on-surface transition-all group-hover:bg-primary-container group-hover:text-on-primary-container"
                    >
                      <span className="material-symbols-outlined text-[18px]">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                </article>
              ))}

            </div>
          </section>

          {/* ================= NEWSLETTER ================= */}
          <section className="relative w-full overflow-hidden rounded-xl bg-gradient-to-br from-surface-container-high/80 via-surface-container/60 to-surface-container-lowest/90 p-5 sm:p-6 md:p-space-lg lg:p-space-xl shadow-2xl backdrop-blur-2xl">

            <div className="pointer-events-none absolute -left-20 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-primary-container/20 blur-[110px]" />

            <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-5 sm:gap-space-md text-center">

              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-container/20 text-primary shadow-[0_0_20px_rgba(225,29,72,0.3)]">
                <span className="material-symbols-outlined text-[24px]">
                  mark_email_unread
                </span>
              </div>

              <div className="space-y-space-xs">

                <span className="font-label-md text-label-md font-bold uppercase tracking-widest text-primary">
                  BI-WEEKLY ARCHITECTURE BRIEFING
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-headline-lg leading-tight font-headline-lg tracking-tight text-on-surface">
                  The NEXSHA Weekly Dispatch
                </h3>

                <p className="mx-auto max-w-xl text-sm sm:text-base lg:text-body-lg leading-6 sm:leading-7 text-on-surface-variant">
                  Get curated React benchmarks, design token architectures,
                  and frontend insights delivered bi-weekly. Zero spam.
                </p>
              </div>

              {!subscribed ? (
                <form
                  onSubmit={handleSubscribe}
                  className="mt-space-xs flex w-full max-w-md flex-col gap-2 sm:flex-row"
                >
                  <div className="relative flex-1">

                    <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[20px] text-on-surface-variant">
                      alternate_email
                    </span>

                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your work email"
                      className="w-full rounded-full bg-surface-container-lowest py-3 pl-10 pr-4 font-body-md text-body-md text-on-surface shadow-inner placeholder:text-outline focus:outline-none focus:ring-1 focus:ring-primary-container"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="cursor-pointer whitespace-nowrap rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-space-lg py-3 font-label-lg text-label-lg text-on-primary-container shadow-[0_0_16px_rgba(225,29,72,0.4)] transition-all hover:scale-[1.02] hover:shadow-[0_0_24px_rgba(225,29,72,0.65)] disabled:cursor-not-allowed disabled:opacity-70"
                  >
                    {loading ? "Subscribing..." : "Subscribe"}
                  </button>
                </form>
              ) : (
                <div className="flex items-center gap-1 font-body-sm text-body-sm text-primary">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  Thank you for subscribing! Check your inbox for confirmation.
                </div>
              )}

              <div className="flex flex-col items-center gap-2 pt-1 text-xs sm:flex-row sm:gap-space-xs sm:text-label-md font-label-md text-on-surface-variant">

                <div className="flex -space-x-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-surface-container-highest text-[10px] font-bold text-on-surface ring-2 ring-surface-container-lowest">
                    JD
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-container text-[10px] font-bold text-on-primary-container ring-2 ring-surface-container-lowest">
                    MK
                  </span>

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary-container text-[10px] font-bold text-on-secondary-container ring-2 ring-surface-container-lowest">
                    AL
                  </span>
                </div>

                <span>Join 14,000+ developers and engineering leaders.</span>
              </div>
            </div>
          </section>

          {/* ================= CONSULTATION ================= */}
          <section className="flex w-full flex-col items-center justify-between gap-5 rounded-xl bg-surface-container-low p-5 sm:p-6 md:flex-row md:p-space-lg shadow-xl">

            <div className="flex min-w-0 flex-col gap-1 text-center md:text-left">

              <span className="font-label-md text-label-md uppercase tracking-wider text-primary">
                COLLABORATION INQUIRY
              </span>

              <h4 className="text-xl sm:text-2xl lg:text-headline-md font-headline-md leading-tight text-on-surface">
                Have an upcoming project that needs senior engineering?
              </h4>

              <p className="font-body-md text-body-md text-on-surface-variant">
                Let's audit your architecture, accelerate sprints, or design
                your next category-defining product.
              </p>
            </div>

            <a
              href="#"
              className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-gradient-to-r from-primary-container to-secondary-container px-5 sm:px-space-lg py-3 text-sm sm:text-label-lg font-label-lg text-on-primary-container shadow-[0_0_20px_rgba(225,29,72,0.4)] transition-all hover:scale-[1.03] hover:shadow-[0_0_28px_rgba(225,29,72,0.7)]"
            >
              Book a Technical Consultation

              <span className="material-symbols-outlined text-[18px]">
                calendar_month
              </span>
            </a>
          </section>

        </div>
      
    </main>
  );
}
import { useState } from "react";

const services = [
  "React / Next.js Core",
  "UI/UX & Design System",
  "Full-Funnel SEO & CRO",
  "Cloud / API Architecture",
  "Mobile App Parity",
  "Technical Audit & Perf",
];

const budgets = [
  ["< $20,000", "Scoped Sprint"],
  ["$20,000 - $50,000", "Flagship MVP"],
  ["$50,000 - $100,000", "Full Scale System"],
  ["$100,000+", "Enterprise Retainer"],
];

const slots = [
  ["Today", "3:00 PM PST"],
  ["Tomorrow", "10:30 AM PST"],
  ["Tomorrow", "2:15 PM PST"],
  ["Thursday", "11:00 AM PST"],
];

const channels = [
  {
    icon: "mail",
    title: "Client Engagements",
    email: "hello@nexweb.agency",
    href: "mailto:hello@nexweb.agency",
  },
  {
    icon: "handshake",
    title: "Press & Strategic Ventures",
    email: "partners@nexweb.agency",
    href: "mailto:partners@nexweb.agency",
  },
  {
    icon: "group_add",
    title: "Engineering & Design Roles",
    email: "careers@nexweb.agency",
    href: "mailto:careers@nexweb.agency",
  },
];

const certifications = [
  {
    icon: "verified_user",
    title: "SOC 2",
    subtitle: "Type II Certified Facility",
    text: "Rigorous data integrity",
  },
  {
    icon: "accessibility_new",
    title: "WCAG 2.1",
    subtitle: "AA Standard Compliance",
    text: "Inclusive digital architecture",
  },
  {
    icon: "policy",
    title: "GDPR",
    subtitle: "EEA & CCPA Ready",
    text: "Complete privacy jurisdiction",
  },
  {
    icon: "bolt",
    title: "99.99%",
    subtitle: "Availability SLA",
    text: "Enterprise uptime baseline",
  },
];

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState([
    "UI/UX & Design System",
  ]);

  const [selectedBudget, setSelectedBudget] = useState(
    "$20,000 - $50,000"
  );

  const [selectedSlot, setSelectedSlot] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    scope: "",
    nda: true,
  });

  const [showToast, setShowToast] = useState(false);

  const toggleService = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((item) => item !== service)
        : [...prev, service]
    );
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 4500);
  };

  return (
   <main className="w-full min-h-screen overflow-x-hidden bg-surface-container-lowest text-on-surface font-body-md antialiased">
  <div className="flex flex-col w-full relative overflow-hidden"/>

    {/* Contact Page Ambient Background */}
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[950px] h-[550px] rounded-full bg-primary-container/20 blur-[130px]" />

      <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-secondary-container/15 blur-[120px]" />

      <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full bg-primary-container/15 blur-[120px]" />

      {/* Contact Page Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,179,182,0.07)_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>

    {/* ================= HERO ================= */}
        {/* HERO */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 lg:pt-space-xl pb-6 sm:pb-space-md">
          <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto space-y-4 sm:space-y-space-sm">
            <div className="inline-flex items-center gap-space-xs px-space-md py-1 rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm">
              <span className="w-2 h-2 rounded-full bg-primary-container animate-ping" />

              <span className="font-label-md text-label-md tracking-widest text-primary uppercase">
                LET'S COLLABORATE
              </span>
            </div>

            <h1 className="font-display text-[38px] sm:text-[48px] md:text-display text-on-surface tracking-tight leading-[1.08]">
              Start Your Next{" "}
              <span className="bg-gradient-to-r from-primary to-primary-container bg-clip-text text-transparent">
                Technical Milestone.
              </span>
            </h1>

            <p className="w-full max-w-2xl font-body-lg text-body-lg text-on-surface-variant leading-relaxed px-1">
              Tell us about your project, timeline, and architectural
              requirements. We respond with a dedicated senior engineer
              evaluation within 24 hours.
            </p>
          </div>
        </section>

        {/* MAIN GRID */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-space-md pb-12 sm:pb-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-space-lg items-start min-w-0">
            {/* LEFT FORM */}
            <div className="lg:col-span-7 min-w-0 bg-surface-container-low/90 backdrop-blur-2xl rounded-xl p-4 sm:p-space-md md:p-space-lg shadow-2xl relative">
              {/* Form Header */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-space-sm">
                <div>
                  <span className="font-label-md text-label-md text-primary tracking-wider uppercase">
                    ARCHITECTURAL EVALUATION
                  </span>

                  <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                    Project Intake & Technical Scoping
                  </h2>
                </div>

                <div className="hidden sm:flex items-center gap-2 px-space-sm py-1 rounded-full bg-surface-container-lowest text-on-surface-variant font-label-md text-label-md">
                  <span className="material-symbols-outlined text-primary text-[16px]">
                    lock
                  </span>
                  256-bit Encrypted
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="space-y-space-md mt-space-sm"
              >
                {/* SERVICES */}
                <div className="space-y-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                    <span>1. Capabilities of Interest</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant break-words">
                      Multi-select
                    </span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                    {services.map((service) => {
                      const active = selectedServices.includes(service);

                      return (
                        <button
                          key={service}
                          type="button"
                          onClick={() => toggleService(service)}
                          className={`group min-w-0 px-3 py-3 sm:px-space-sm sm:py-space-xs rounded-lg text-left transition-all duration-200 focus:outline-none flex items-center justify-between ${
                            active
                              ? "bg-surface-container-high"
                              : "bg-surface-container hover:bg-surface-container-high"
                          }`}
                        >
                          <span
                            className={`font-body-sm text-body-sm ${
                              active
                                ? "text-primary"
                                : "text-on-surface"
                            }`}
                          >
                            {service}
                          </span>

                          <span
                            className={`material-symbols-outlined text-[16px] ${
                              active
                                ? "opacity-100 text-primary"
                                : "opacity-0 text-on-surface-variant"
                            }`}
                          >
                            check_circle
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* BUDGET */}
                <div className="space-y-space-xs">
                  <label className="font-label-lg text-label-lg text-on-surface flex items-center justify-between">
                    <span>2. Estimated Capital Allocation</span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant break-words">
                      USD Equivalent
                    </span>
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-1">
                    {budgets.map(([price, subtitle]) => {
                      const active = selectedBudget === price;

                      return (
                        <button
                          key={price}
                          type="button"
                          onClick={() => setSelectedBudget(price)}
                          className={`min-w-0 px-3 py-3 sm:px-space-sm sm:py-space-xs rounded-lg text-center transition-all duration-200 ${
                            active
                              ? "bg-surface-container-high shadow-sm"
                              : "bg-surface-container hover:bg-surface-container-high"
                          }`}
                        >
                          <span
                            className={`font-label-md text-label-md block ${
                              active
                                ? "text-primary"
                                : "text-on-surface"
                            }`}
                          >
                            {price}
                          </span>

                          <span className="font-body-sm text-[11px] text-on-surface-variant block">
                            {subtitle}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* CONTACT DETAILS */}
                <div className="space-y-space-sm pt-2">
                  <label className="font-label-lg text-label-lg text-on-surface block">
                    3. Stakeholder & Project Coordinates
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                    {/* NAME */}
                    <div className="space-y-1">
                      <span className="font-body-sm text-body-sm text-on-surface-variant break-words">
                        Full Name
                      </span>

                      <div className="relative">
                        <input
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Alexander Vance"
                          required
                          type="text"
                          className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs pr-10 outline-none focus:bg-surface-container transition-all"
                        />

                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[18px]">
                          badge
                        </span>
                      </div>
                    </div>

                    {/* EMAIL */}
                    <div className="space-y-1">
                      <span className="font-body-sm text-body-sm text-on-surface-variant break-words">
                        Work Email
                      </span>

                      <div className="relative">
                        <input
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="alex@venturecorp.io"
                          required
                          type="email"
                          className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs pr-10 outline-none focus:bg-surface-container transition-all"
                        />

                        <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[18px]">
                          alternate_email
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* COMPANY */}
                  <div className="space-y-1">
                    <span className="font-body-sm text-body-sm text-on-surface-variant break-words">
                      Company / Organization
                    </span>

                    <div className="relative">
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Venture Matrix Corp"
                        type="text"
                        className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs pr-10 outline-none focus:bg-surface-container transition-all"
                      />

                      <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[18px]">
                        domain
                      </span>
                    </div>
                  </div>

                  {/* PROJECT SCOPE */}
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-body-sm text-body-sm text-on-surface-variant break-words">
                        Project Scope & Deliverables
                      </span>

                      <span className="font-body-sm text-[11px] text-outline">
                        Markdown supported
                      </span>
                    </div>

                    <textarea
                      name="scope"
                      value={form.scope}
                      onChange={handleChange}
                      required
                      rows="4"
                      placeholder="Describe your vision, target timeline, key technical bottlenecks, or existing stack (e.g. Next.js, Postgres, AWS ECS)..."
                      className="w-full bg-surface-container-lowest text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-xs outline-none focus:bg-surface-container transition-all resize-none"
                    />
                  </div>
                </div>

                {/* NDA */}
                <div className="pt-1 flex items-center gap-space-sm bg-surface-container/50 p-space-sm rounded-lg">
                  <input
                    id="nda"
                    name="nda"
                    checked={form.nda}
                    onChange={handleChange}
                    className="w-4 h-4 rounded accent-primary-container cursor-pointer"
                    type="checkbox"
                  />

                  <label
                    htmlFor="nda"
                    className="font-body-sm text-body-sm text-on-surface cursor-pointer select-none"
                  >
                    Request mutual mutual NDA countersigned prior to formal
                    project technical brief
                  </label>
                </div>

                {/* SUBMIT */}
                <div className="space-y-space-sm pt-2">
                  <button
                    type="submit"
                    className="w-full py-space-sm px-space-md rounded-full bg-gradient-to-r from-primary-container to-secondary-container text-on-primary-container font-label-lg text-label-lg shadow-[0_0_24px_rgba(225,29,72,0.45)] hover:shadow-[0_0_32px_rgba(225,29,72,0.7)] hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 group"
                  >
                    <span>Send Project Proposal</span>

                    <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                      arrow_forward
                    </span>
                  </button>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-on-surface-variant pt-1 px-1">
                    <div className="flex items-center gap-1.5 font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        verified
                      </span>
                      Guaranteed 24-hr Response
                    </div>

                    <div className="flex items-center gap-1.5 font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        engineering
                      </span>
                      Lead Architect Assessment
                    </div>

                    <div className="flex items-center gap-1.5 font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-primary text-[18px]">
                        encrypted
                      </span>
                      Strict NDA Protocol
                    </div>
                  </div>
                </div>
              </form>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 min-w-0 space-y-6 lg:space-y-space-md">
              {/* BOOKING CARD */}
              <div className="bg-surface-container-low/90 backdrop-blur-2xl rounded-xl p-4 sm:p-space-md md:p-space-lg shadow-xl relative overflow-hidden">
                <div className="absolute -right-8 -bottom-8 w-40 h-40 bg-primary-container/15 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-start sm:items-center gap-3 sm:gap-space-sm mb-space-sm">
                  <div className="relative shrink-0">
                    <img
                      className="w-14 h-14 rounded-full object-cover shadow-md"
                      alt="Professional portrait"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLMTL9a0GzASfZJ43eqprRpass4kV-dmglTaA3N28F6y8eDsIdhu--hnE92H4DzOa_MQh9t_d8pcj8QgwOeUUgInEjg04kM-2XopUCuCVBN1O9ax9dLlRXVJBlYkBOWW_08h3TJJqzPIuMUKToDh4PgNnvihrc0OT8VVmfM5ifZBWSIFuwZaVlzLaf9EZIcK6bGBxvsyhK32FXZ9lVSR1LWTC-sXSDKWgWUDycop7UuO921QwqRS4"
                    />

                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-500 ring-2 ring-surface-container-low" />
                  </div>

                  <div>
                    <span className="font-label-md text-label-md text-primary uppercase tracking-wider block">
                      FAST-TRACK BOOKING
                    </span>

                    <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                      30-Min Architectural Sync
                    </h3>

                    <p className="font-body-sm text-body-sm text-on-surface-variant break-words">
                      Direct with Arman Vance, CTO
                    </p>
                  </div>
                </div>

                <p className="font-body-md text-body-md text-on-surface-variant mb-space-sm">
                  Skip the intake queue. Reserve a live discovery session to
                  review technical architecture, roadmap viability, and
                  engineering team fit.
                </p>

                {/* SLOTS */}
                <div className="bg-surface-container-lowest p-space-sm rounded-lg mb-space-sm space-y-2">
                  <div className="flex items-center justify-between text-on-surface font-label-md text-label-md">
                    <span className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-primary text-[16px]">
                        event_available
                      </span>
                      Earliest Slots Available
                    </span>

                    <span className="text-on-surface-variant font-body-sm text-[11px]">
                      PST Timezone
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                    {slots.map(([day, time], index) => {
                      const active = selectedSlot === index;

                      return (
                        <button
                          key={`${day}-${time}`}
                          type="button"
                          onClick={() => setSelectedSlot(index)}
                          className={`text-left p-2 rounded transition-colors ${
                            active
                              ? "bg-surface-container-high"
                              : "bg-surface-container hover:bg-surface-container-high"
                          }`}
                        >
                          <div
                            className={`font-label-md text-label-md ${
                              active
                                ? "text-primary"
                                : "text-on-surface"
                            }`}
                          >
                            {day}
                          </div>

                          <div className="font-body-sm text-body-sm text-on-surface-variant break-words">
                            {time}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                <a
                  href="#"
                  className="w-full py-space-xs px-space-md rounded-full bg-surface-container-highest hover:bg-surface-bright text-on-surface font-label-lg text-label-lg transition-all flex items-center justify-center gap-2 group"
                >
                  <span className="material-symbols-outlined text-primary text-[18px]">
                    calendar_month
                  </span>

                  <span>Instant Calendar Booking</span>

                  <span className="material-symbols-outlined text-[16px] transition-transform group-hover:translate-x-1">
                    north_east
                  </span>
                </a>
              </div>

              {/* CHANNELS */}
              <div className="bg-surface-container-low/90 backdrop-blur-2xl rounded-xl p-4 sm:p-space-md md:p-space-lg shadow-xl space-y-space-md">
                <div>
                  <span className="font-label-md text-label-md text-primary uppercase tracking-wider block">
                    DIRECT TRANSMISSION
                  </span>

                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-tight">
                    Communication Channels
                  </h3>
                </div>

                <div className="space-y-space-xs">
                  {channels.map((channel) => (
                    <a
                      key={channel.email}
                      href={channel.href}
                      className="flex items-center gap-3 justify-between p-3 sm:p-space-sm rounded-lg bg-surface-container hover:bg-surface-container-high transition-colors group min-w-0"
                    >
                      <div className="flex items-center gap-space-sm">
                        <div className="w-8 h-8 rounded-full bg-primary-container/20 text-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[18px]">
                            {channel.icon}
                          </span>
                        </div>

                        <div>
                          <div className="font-label-md text-label-md text-on-surface">
                            {channel.title}
                          </div>

                          <div className="font-body-sm text-body-sm text-on-surface-variant break-words">
                            {channel.email}
                          </div>
                        </div>
                      </div>

                      <span className="material-symbols-outlined text-on-surface-variant text-[18px] group-hover:text-primary transition-colors">
                        arrow_forward
                      </span>
                    </a>
                  ))}
                </div>

                {/* LOCATIONS */}
                <div className="pt-space-xs space-y-space-sm">
                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-primary text-[20px] mt-0.5">
                      apartment
                    </span>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-label-md text-label-md text-on-surface">
                          Global Headquarters
                        </span>

                        <span className="font-label-md text-[11px] text-primary">
                          SF • 09:42 AM PST
                        </span>
                      </div>

                      <p className="font-body-sm text-body-sm text-on-surface-variant break-words">
                        One Silicon Horizon Tower, Suite 1200
                        <br />
                        450 Obsidian Plaza, San Francisco, CA 94105
                      </p>
                    </div>
                  </div>

                  <div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5">
                      location_city
                    </span>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="font-label-md text-label-md text-on-surface">
                          European Innovation Hub
                        </span>

                        <span className="font-label-md text-[11px] text-secondary">
                          LDN • 17:42 GMT
                        </span>
                      </div>

                      <p className="font-body-sm text-body-sm text-on-surface-variant break-words">
                        Silicon Roundabout Core, 3rd Floor
                        <br />
                        London Tech City, EC2A 4NE, United Kingdom
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MAP */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-space-lg">
          <div className="relative rounded-xl overflow-hidden shadow-2xl bg-surface-container-lowest">
            <div
              className="w-full h-56 sm:h-72 bg-cover bg-center opacity-70 contrast-125 brightness-75"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1800&q=80')",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/40 to-transparent pointer-events-none" />

            <div className="absolute bottom-3 left-3 right-3 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-space-sm p-3 sm:p-space-sm rounded-xl bg-surface-container-high/90 backdrop-blur-xl">
              <div className="flex items-center gap-space-sm">
                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center shadow-[0_0_16px_rgba(225,29,72,0.6)]">
                  <span className="material-symbols-outlined text-on-primary-container text-[22px]">
                    near_me
                  </span>
                </div>

                <div>
                  <div className="font-label-lg text-label-lg text-on-surface">
                    Studio Access & Physical Briefings
                  </div>

                  <div className="font-body-sm text-body-sm text-on-surface-variant break-words">
                    In-person architectural war-rooms available by appointment
                    for tier-one partners.
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-center">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />

                <span className="font-label-md text-label-md text-on-surface-variant">
                  Operations Active: Mon - Fri (08:00 - 18:00 PST)
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* CERTIFICATIONS */}
        <section className="w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-space-xl">
          <div className="p-4 sm:p-space-md md:p-space-lg rounded-xl bg-surface-container-lowest shadow-xl">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-4 gap-5 md:gap-space-md items-center text-center">
              {certifications.map((item) => (
                <div key={item.title} className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[24px]">
                      {item.icon}
                    </span>

                    <span className="font-headline-sm text-headline-sm">
                      {item.title}
                    </span>
                  </div>

                  <p className="font-label-md text-label-md text-on-surface">
                    {item.subtitle}
                  </p>

                  <p className="font-body-sm text-[12px] text-on-surface-variant">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SUCCESS TOAST */}
        <div
          className={`fixed bottom-8 right-8 left-8 sm:left-auto z-50 transition-all duration-300 pointer-events-none ${
            showToast
              ? "translate-y-0 opacity-100"
              : "translate-y-24 opacity-0"
          }`}
        >
          <div className="w-full sm:max-w-md bg-surface-container-highest/95 backdrop-blur-xl p-4 sm:p-space-md rounded-xl shadow-2xl flex items-start gap-3 sm:gap-space-sm text-on-surface ml-auto">
            <div className="w-9 h-9 shrink-0 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
              <span className="material-symbols-outlined text-[20px]">
                mark_email_read
              </span>
            </div>

            <div>
              <div className="font-label-lg text-label-lg">
                Brief Received Successfully
              </div>

              <div className="font-body-sm text-body-sm text-on-surface-variant break-words">
                Senior Engineer evaluation initiated. Expect response within
                24h.
              </div>
            </div>
          </div>
        </div>
      
    </main>
  );
}
import Link from "next/link";
import { ArrowUpRight, BarChart3, Building2, Layers, Repeat, Target, GraduationCap } from "lucide-react";
import { academy, extraService, services, stats, team, whyUs, company } from "@/data/site";
import { Button, SectionHeading, ServiceIcon } from "../ui";
import { Counter, Reveal, Stagger, StaggerItem, Tilt } from "../motion";

/* ───────────── Stats ───────────── */
export function Stats() {
  return (
    <section className="container-x">
      <Stagger className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => (
          <StaggerItem key={s.label}>
            <div className="glass h-full rounded-3xl p-7">
              <Counter
                to={s.value}
                suffix={s.suffix}
                className="font-display text-5xl font-semibold tracking-[-0.04em] text-brand md:text-6xl"
              />
              <p className="mt-3 text-sm text-ink-soft">{s.label}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}

/* ───────────── Services ───────────── */
export function ServicesPreview() {
  return (
    <section className="container-x py-28 md:py-36">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="Our services"
          title={
            <>
              End-to-end solutions, from <span className="text-gradient">idea to impact.</span>
            </>
          }
          text="With deep expertise across creative storytelling and commercial growth strategy, Renzo Studio is your trusted partner from early-stage ideation to full-scale execution."
        />
        <Reveal>
          <Button href="/agency" variant="dark">
            Explore the agency
          </Button>
        </Reveal>
      </div>

      <Stagger className="mt-16 grid gap-5 md:grid-cols-3" gap={0.12}>
        {services.map((s, i) => (
          <StaggerItem key={s.slug}>
            <Link href={`/agency/${s.slug}`} className="group block h-full">
              <Tilt className="h-full rounded-[2rem]">
                <article
                  className={`relative flex h-full min-h-[440px] flex-col overflow-hidden rounded-[2rem] p-8 transition-shadow duration-500 group-hover:shadow-[0_40px_80px_-30px_rgba(23,61,237,0.5)] ${
                    i === 1 ? "bg-brand text-white" : "glass text-ink"
                  }`}
                >
                  <div
                    aria-hidden
                    className={`absolute -bottom-24 -right-24 size-72 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-125 ${
                      i === 1 ? "bg-sky/50" : "bg-brand/15"
                    }`}
                  />
                  <div className="relative flex items-center justify-between">
                    <span
                      className={`grid size-14 place-items-center rounded-2xl ${
                        i === 1 ? "bg-white text-brand" : "bg-brand text-white"
                      }`}
                    >
                      <ServiceIcon type={s.icon} className="size-7" />
                    </span>
                    <span
                      className={`grid size-11 place-items-center rounded-full border transition-all duration-500 group-hover:rotate-45 ${
                        i === 1 ? "border-white/30 group-hover:bg-white group-hover:text-brand" : "border-ink/10 group-hover:bg-brand group-hover:text-white"
                      }`}
                    >
                      <ArrowUpRight className="size-5" />
                    </span>
                  </div>
                  <div className="relative mt-auto pt-16">
                    <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${i === 1 ? "text-white/60" : "text-brand"}`}>
                      0{i + 1}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight">{s.short}</h3>
                    <p className={`mt-4 leading-relaxed ${i === 1 ? "text-white/80" : "text-ink-soft"}`}>{s.intro}</p>
                    <div className="mt-6 flex flex-wrap gap-2">
                      {s.offerings.slice(0, 3).map((o) => (
                        <span
                          key={o.title}
                          className={`rounded-full px-3 py-1 text-xs font-medium ${
                            i === 1 ? "bg-white/15 text-white" : "bg-brand/[0.07] text-brand"
                          }`}
                        >
                          {o.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Tilt>
            </Link>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal className="mt-5">
        <div className="glass flex flex-col items-start justify-between gap-6 rounded-[2rem] p-8 md:flex-row md:items-center">
          <div className="flex items-start gap-5">
            <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-ink text-white">
              <Target className="size-7" strokeWidth={1.6} />
            </span>
            <div>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{extraService.name}</h3>
              <p className="mt-2 max-w-2xl text-ink-soft">{extraService.text}</p>
            </div>
          </div>
          <Button href="/agency/digital-marketing" variant="outline">
            Learn more
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────── Why us (bento) ───────────── */
const whyIcons = [Layers, Building2, BarChart3, Repeat];

export function WhyUs() {
  return (
    <section className="container-x py-28 md:py-36">
      <SectionHeading
        align="center"
        eyebrow="Why Renzo"
        title={
          <>
            Our <span className="text-gradient">competitive</span> advantage
          </>
        }
        text={company.advantage}
      />
      <Stagger className="mt-16 grid gap-5 md:grid-cols-6" gap={0.1}>
        {whyUs.map((w, i) => {
          const Icon = whyIcons[i];
          const span = i === 0 || i === 3 ? "md:col-span-4" : "md:col-span-2";
          const dark = i === 0;
          return (
            <StaggerItem key={w.title} className={span}>
              <div
                className={`group relative h-full min-h-[240px] overflow-hidden rounded-[2rem] p-8 transition-transform duration-500 hover:-translate-y-1 ${
                  dark ? "bg-ink text-white" : "glass"
                }`}
              >
                {dark && (
                  <div aria-hidden className="absolute -right-10 -top-10 size-64 rounded-full bg-brand/60 blur-3xl transition-transform duration-700 group-hover:scale-125" />
                )}
                <Icon className={`relative size-9 ${dark ? "text-brand-300" : "text-brand"}`} strokeWidth={1.5} />
                <h3 className="relative mt-10 font-display text-2xl font-semibold tracking-tight md:text-3xl">{w.title}</h3>
                <p className={`relative mt-3 max-w-md ${dark ? "text-white/70" : "text-ink-soft"}`}>{w.text}</p>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </section>
  );
}

/* ───────────── Academy band ───────────── */
export function AcademyBand() {
  return (
    <section className="container-x">
      <Reveal>
        <div className="noise relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-600 to-brand-800 px-8 py-16 text-white md:px-16 md:py-20">
          <div aria-hidden className="absolute -right-20 -top-20 size-96 animate-float rounded-full bg-sky/40 blur-3xl" />
          <div aria-hidden className="absolute -bottom-32 left-10 size-80 animate-float-slow rounded-full bg-violet/40 blur-3xl" />
          <div aria-hidden className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:48px_48px]" />
          <div className="relative grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur">
                <GraduationCap className="size-4" /> Renzo Academy
              </span>
              <h2 className="mt-6 font-display text-4xl font-semibold leading-[1] tracking-[-0.04em] md:text-6xl">{academy.headline}</h2>
              <p className="mt-6 max-w-lg text-lg text-white/80">{academy.intro}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/academy" variant="glass" className="!bg-white !text-brand">
                  Explore the academy
                </Button>
                <Button href="/academy#internships" variant="glass" className="!border-white/25 !bg-white/10 !text-white">
                  Internships
                </Button>
              </div>
            </div>
            <div className="grid gap-3">
              {academy.tracks.map((t, i) => (
                <div
                  key={t.title}
                  className="flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md transition-all duration-500 hover:translate-x-2 hover:bg-white/20"
                  style={{ transitionDelay: `${i * 40}ms` }}
                >
                  <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-white text-brand">
                    <ServiceIcon type={t.icon} />
                  </span>
                  <div className="flex-1">
                    <p className="font-semibold">{t.title}</p>
                    <p className="text-sm text-white/70">
                      {t.duration} · {t.format}
                    </p>
                  </div>
                  <ArrowUpRight className="size-5 text-white/70" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ───────────── Team ───────────── */
const avatarGradients = [
  "from-brand to-sky",
  "from-violet to-brand",
  "from-brand-700 to-brand-300",
  "from-sky to-brand-600",
];

export function Team() {
  return (
    <section className="container-x py-28 md:py-36">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          eyebrow="The team"
          title={
            <>
              The people behind <span className="text-gradient">the pixels.</span>
            </>
          }
          text="Animators, visual designers, campaign managers and hospitality consultants — passionate, dedicated and results-driven."
        />
      </div>
      <Stagger className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4" gap={0.1}>
        {team.map((m, i) => (
          <StaggerItem key={m.name}>
            <article className="group glass relative h-full overflow-hidden rounded-[1.5rem] p-2 sm:rounded-[2rem] sm:p-3">
              <div
                className={`relative grid aspect-[4/5] place-items-center overflow-hidden rounded-[1.6rem] bg-gradient-to-br ${avatarGradients[i % 4]}`}
              >
                <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:14px_14px]" />
                <span className="relative font-display text-5xl font-semibold sm:text-7xl tracking-tighter text-white/95 transition-transform duration-700 group-hover:scale-110">
                  {m.initials}
                </span>
                <div className="absolute inset-x-3 bottom-3 hidden translate-y-[120%] rounded-2xl [@media(hover:hover)]:block bg-white/85 p-4 text-sm text-ink-soft backdrop-blur-md transition-transform duration-500 group-hover:translate-y-0">
                  {m.bio}
                </div>
              </div>
              <div className="px-2 pb-2 pt-4 sm:px-3 sm:pb-3 sm:pt-5">
                <h3 className="font-display text-base font-semibold tracking-tight sm:text-xl">{m.name}</h3>
                <p className="text-xs text-brand sm:text-sm">{m.role}</p>
                <p className="mt-2 text-xs text-ink-soft sm:text-sm [@media(hover:hover)]:hidden">{m.bio}</p>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}


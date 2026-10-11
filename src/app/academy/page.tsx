import type { Metadata } from "next";
import { Award, BookOpen, Briefcase, Download, FileText, LayoutTemplate, ListChecks, Users, Video, ArrowUpRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import { Faq, Roadmap, Tracks, Trailer } from "@/components/academy/AcademyClient";
import { Button, SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { academy, links } from "@/data/site";

export const metadata: Metadata = {
  title: "Academy",
  description: "Learn animation, digital marketing and hospitality management at Renzo Academy — live projects, mentorship and paid internships.",
};

const offerIcons = [Briefcase, Users, Award, BookOpen];
const assetIcons: Record<string, typeof FileText> = {
  Templates: LayoutTemplate,
  "PDF Guide": FileText,
  Checklist: ListChecks,
  Workbook: BookOpen,
  Video: Video,
};

export default function AcademyPage() {
  return (
    <>
      <PageHero
        eyebrow="Renzo Academy"
        title="Learn from the studio. Build for the real world."
        highlight="real"
        intro={academy.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Academy" }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">Apply now</Button>
          <Button href="#trailer" variant="glass" icon={false}>
            Watch trailer
          </Button>
        </div>
        <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4 text-sm text-ink-soft">
          {["3 career tracks", "Live client projects", "Paid internships", "Certification"].map((t) => (
            <span key={t} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-brand" /> {t}
            </span>
          ))}
        </div>
      </PageHero>

      {/* What we offer */}
      <section id="offer" className="container-x scroll-mt-28 py-12 md:py-16">
        <SectionHeading
          eyebrow="What we offer"
          title={
            <>
              Three tracks, <span className="text-gradient">one studio</span> experience.
            </>
          }
          text="Every course is taught by the people who run Renzo's agency work — so you learn the exact workflows, tools and standards used on real client projects."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.08}>
          {academy.offer.map((o, i) => {
            const Icon = offerIcons[i];
            return (
              <StaggerItem key={o.title}>
                <div className="glass h-full rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1">
                  <Icon className="size-8 text-brand" strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl font-semibold tracking-tight">{o.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft">{o.text}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
        <Reveal className="mt-8">
          <Tracks />
        </Reveal>
      </section>

      {/* Trailer */}
      <section id="trailer" className="container-x scroll-mt-28 py-20 md:py-28">
        <SectionHeading
          align="center"
          eyebrow="Trailer"
          title={
            <>
              A peek <span className="text-gradient">inside</span> the academy
            </>
          }
        />
        <Reveal className="mt-12">
          <Trailer />
        </Reveal>
      </section>

      {/* Internships / opportunity */}
      <section id="internships" className="container-x scroll-mt-28 py-16 md:py-24">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Opportunity"
            title={
              <>
                Internships that <span className="text-gradient">open doors.</span>
              </>
            }
            text="Top learners join Renzo's agency as interns — working on live briefs alongside our team. It's the fastest way from classroom to career."
          />
          <Reveal>
            <Button href={links.whatsapp} external variant="dark">
              Ask about openings
            </Button>
          </Reveal>
        </div>
        <Stagger className="mt-12 grid gap-5 md:grid-cols-3" gap={0.1}>
          {academy.internships.map((it, i) => (
            <StaggerItem key={it.title}>
              <article
                className={`group relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 ${
                  i === 0 ? "bg-brand text-white" : "glass"
                }`}
              >
                <div aria-hidden className={`absolute -bottom-20 -right-20 size-56 rounded-full blur-3xl ${i === 0 ? "bg-sky/50" : "bg-brand/10"}`} />
                <div className="relative flex flex-wrap gap-2">
                  {[it.type, it.mode].map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${i === 0 ? "bg-white/15 text-white" : "bg-brand/[0.07] text-brand"}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="relative mt-10 font-display text-3xl font-semibold tracking-tight">{it.title}</h3>
                <p className={`relative mt-3 flex-1 ${i === 0 ? "text-white/80" : "text-ink-soft"}`}>{it.text}</p>
                <a
                  href="/contact"
                  className={`relative mt-8 inline-flex items-center gap-2 text-sm font-semibold ${i === 0 ? "text-white" : "text-brand"}`}
                >
                  Apply <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Learning assets */}
      <section id="assets" className="container-x scroll-mt-28 py-16 md:py-24">
        <SectionHeading
          eyebrow="Learning assets"
          title={
            <>
              Tools & resources <span className="text-gradient">you keep.</span>
            </>
          }
          text="Every learner gets lifetime access to the templates, toolkits and recordings our own team uses every day."
        />
        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
          {academy.assets.map((a) => {
            const Icon = assetIcons[a.type] ?? FileText;
            return (
              <StaggerItem key={a.title}>
                <div className="group glass flex h-full items-start gap-5 rounded-3xl p-6 transition-all duration-500 hover:bg-white">
                  <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand to-sky text-white transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
                    <Icon className="size-6" />
                  </span>
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">{a.type}</p>
                    <h3 className="mt-1 font-display text-xl font-semibold tracking-tight">{a.title}</h3>
                    <p className="mt-2 text-sm text-ink-soft">{a.text}</p>
                  </div>
                  <Download className="size-5 shrink-0 text-ink/30 transition-all duration-500 group-hover:translate-y-0.5 group-hover:text-brand" />
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="container-x scroll-mt-28 py-16 md:py-24">
        <SectionHeading
          align="center"
          eyebrow="Roadmap"
          title={
            <>
              Your journey, <span className="text-gradient">step by step.</span>
            </>
          }
          text="From your first day to your first paid project — here's how the Renzo Academy experience unfolds."
        />
        <Roadmap />
      </section>

      {/* FAQ */}
      <section id="faq" className="container-x scroll-mt-28 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading eyebrow="FAQ" title={<>Questions, answered.</>} text="Can't find what you're looking for? Message us on WhatsApp and we'll reply within a day." />
              <Reveal delay={0.15} className="mt-8">
                <Button href={links.whatsapp} external>
                  Chat on WhatsApp
                </Button>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-8">
            <Reveal>
              <Faq />
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

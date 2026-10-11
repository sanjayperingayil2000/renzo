import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import AgencyExplorer from "@/components/agency/AgencyExplorer";
import Portfolio from "@/components/agency/Portfolio";
import { Button, Marquee, SectionHeading, ServiceIcon } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { competencies, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Agency",
  description: "Animation, digital marketing and hospitality consulting services by Renzo Studio.",
};

export default function AgencyPage() {
  const allProjects = services.flatMap((s) => s.projects.map((p) => ({ ...p, service: s.name })));

  return (
    <>
      <PageHero
        eyebrow="Renzo Agency"
        title="Three disciplines. One studio. Zero hand-offs."
        highlight="One"
        intro="From hand-drawn animation to performance campaigns and hotel operations audits — we bring creative storytelling and commercial strategy together to grow your brand."
        crumbs={[{ label: "Home", href: "/" }, { label: "Agency" }]}
      >
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {services.map((s, i) => (
            <Link
              key={s.slug}
              href={`/agency/${s.slug}`}
              className="group glass flex items-center gap-4 rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1 hover:bg-white"
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand text-white transition-transform duration-500 group-hover:scale-110">
                <ServiceIcon type={s.icon} />
              </span>
              <div className="flex-1">
                <p className="text-xs font-semibold text-brand">0{i + 1}</p>
                <p className="font-display text-lg font-semibold tracking-tight">{s.name}</p>
              </div>
              <ArrowUpRight className="size-5 text-ink/40 transition-all duration-500 group-hover:rotate-45 group-hover:text-brand" />
            </Link>
          ))}
        </div>
      </PageHero>

      <AgencyExplorer />

      <div className="my-28 border-y border-brand/10 bg-white/60 py-6">
        <Marquee items={services.flatMap((s) => s.deliverables)} reverse className="text-ink/80" />
      </div>

      <section className="container-x">
        <SectionHeading
          eyebrow="Selected works"
          title={
            <>
              Work that <span className="text-gradient">performs.</span>
            </>
          }
          text="A snapshot of projects across animation, marketing and hospitality. Tap any project to see the story and the outcome."
        />
        <div className="mt-12">
          <Portfolio items={allProjects} filters={["All", ...services.map((s) => s.name)]} />
        </div>
      </section>

      <section className="container-x py-28 md:py-36">
        <SectionHeading
          eyebrow="Core competencies"
          title={
            <>
              Strategy and craft, <span className="text-gradient">working together.</span>
            </>
          }
          text="Beyond our three core services, we support clients with business strategy and full creative & brand development."
        />
        <Stagger className="mt-14 grid gap-5 md:grid-cols-2" gap={0.12}>
          {competencies.map((c, i) => (
            <StaggerItem key={c.title}>
              <div className={`h-full rounded-[2rem] p-8 md:p-10 ${i === 0 ? "bg-ink text-white" : "glass"}`}>
                <h3 className="font-display text-3xl font-semibold tracking-tight">{c.title}</h3>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {c.items.map((it) => (
                    <li key={it} className="flex items-start gap-3">
                      <span
                        className={`mt-0.5 grid size-5 shrink-0 place-items-center rounded-full ${
                          i === 0 ? "bg-brand text-white" : "bg-brand/10 text-brand"
                        }`}
                      >
                        <Check className="size-3" strokeWidth={3} />
                      </span>
                      <span className={i === 0 ? "text-white/85" : "text-ink"}>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
        <Reveal className="mt-12 flex justify-center">
          <Button href="/contact">Discuss your project</Button>
        </Reveal>
      </section>
    </>
  );
}

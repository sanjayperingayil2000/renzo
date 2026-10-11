import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Portfolio from "@/components/agency/Portfolio";
import { Button, SectionHeading, ServiceIcon } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { services } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return s ? { title: s.name, description: s.intro } : {};
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = services.findIndex((x) => x.slug === slug);
  if (idx === -1) notFound();
  const s = services[idx];
  const prev = services[(idx - 1 + services.length) % services.length];
  const next = services[(idx + 1) % services.length];
  const lastWord = s.headline.split(" ").slice(-1)[0].replace(/[.,]/g, "");

  return (
    <>
      <PageHero
        eyebrow={s.short}
        title={s.headline}
        highlight={lastWord}
        intro={s.intro}
        crumbs={[{ label: "Home", href: "/" }, { label: "Agency", href: "/agency" }, { label: s.name }]}
      >
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href="/contact">Start a project</Button>
          <Button href="#portfolio" variant="glass" icon={false}>
            View portfolio
          </Button>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-3 md:max-w-2xl">
          {s.metrics.map((m) => (
            <div key={m.label} className="glass rounded-2xl p-4 md:p-5">
              <p className="font-display text-xl font-semibold tracking-tight text-brand md:text-2xl">{m.value}</p>
              <p className="mt-1 text-xs text-ink-soft md:text-sm">{m.label}</p>
            </div>
          ))}
        </div>
      </PageHero>

      {/* About */}
      <section className="container-x grid gap-10 py-16 md:grid-cols-12 md:py-24">
        <div className="md:col-span-5">
          <Reveal>
            <div className="relative grid aspect-square place-items-center overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-500 to-sky">
              <div aria-hidden className="absolute inset-0 opacity-20 [background-image:radial-gradient(white_1px,transparent_1px)] [background-size:18px_18px]" />
              <div aria-hidden className="absolute size-[70%] animate-spin-slow rounded-full border border-dashed border-white/40" />
              <div aria-hidden className="absolute size-[48%] animate-spin-slow rounded-full border border-white/30 [animation-direction:reverse]" />
              <span className="glass relative grid size-28 place-items-center rounded-[2rem] text-brand">
                <ServiceIcon type={s.icon} className="size-12" />
              </span>
            </div>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:pl-6">
          <SectionHeading eyebrow="About the service" title={<>What we do</>} />
          {s.about.map((p, i) => (
            <Reveal key={i} delay={0.1 + i * 0.05}>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">{p}</p>
            </Reveal>
          ))}
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap gap-2">
              {s.tools.map((t) => (
                <span key={t} className="rounded-full border border-brand/15 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-ink">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Offerings */}
      <section className="container-x py-16 md:py-24">
        <SectionHeading
          eyebrow="Capabilities"
          title={
            <>
              Everything you need, <span className="text-gradient">done right.</span>
            </>
          }
        />
        <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3" gap={0.07}>
          {s.offerings.map((o, i) => (
            <StaggerItem key={o.title}>
              <div className="group glass relative h-full overflow-hidden rounded-[2rem] p-8 transition-all duration-500 hover:-translate-y-1 hover:bg-white">
                <span className="font-display text-sm font-semibold text-brand">0{i + 1}</span>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight">{o.title}</h3>
                <p className="mt-3 text-ink-soft">{o.text}</p>
                <span aria-hidden className="absolute inset-x-8 bottom-0 h-1 origin-left scale-x-0 rounded-full bg-brand transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="container-x scroll-mt-28 py-16 md:py-24">
        <SectionHeading
          eyebrow="Projects & portfolio"
          title={
            <>
              Recent <span className="text-gradient">{s.name.toLowerCase()}</span> work
            </>
          }
        />
        <div className="mt-12">
          <Portfolio items={s.projects} />
        </div>
      </section>

      {/* How it works */}
      <section className="container-x py-16 md:py-24">
        <div className="noise relative overflow-hidden rounded-[2.5rem] bg-ink p-8 text-white md:p-16">
          <div aria-hidden className="absolute -right-20 -top-20 size-96 rounded-full bg-brand/50 blur-3xl" />
          <h2 className="relative font-display text-4xl font-semibold tracking-[-0.035em] md:text-5xl">How it works</h2>
          <Stagger className="relative mt-12 grid gap-6 md:grid-cols-4" gap={0.1}>
            {s.works.map((w, i) => (
              <StaggerItem key={w.step}>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="grid size-10 place-items-center rounded-full bg-brand font-semibold">{i + 1}</span>
                    {i < s.works.length - 1 && <span className="hidden h-px flex-1 bg-gradient-to-r from-brand to-transparent md:block" />}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-semibold">{w.step}</h3>
                  <p className="mt-2 text-white/65">{w.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Prev / next */}
      <section className="container-x grid gap-4 pb-8 md:grid-cols-2">
        {[
          { svc: prev, label: "Previous service", Icon: ArrowLeft, align: "" },
          { svc: next, label: "Next service", Icon: ArrowRight, align: "md:text-right md:flex-row-reverse" },
        ].map(({ svc, label, Icon, align }) => (
          <Link
            key={label}
            href={`/agency/${svc.slug}`}
            className={`group glass flex items-center gap-5 rounded-[2rem] p-6 transition-all duration-500 hover:bg-white ${align}`}
          >
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:scale-110">
              <Icon className="size-5" />
            </span>
            <div className="flex-1">
              <p className="text-sm text-ink-soft">{label}</p>
              <p className="font-display text-2xl font-semibold tracking-tight">{svc.name}</p>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}

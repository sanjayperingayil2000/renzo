"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useState } from "react";
import { services } from "@/data/site";
import { Button, ProjectArt, ServiceIcon } from "../ui";
import { ease } from "../motion";

/** Tabbed service switcher used on /agency. */
export default function AgencyExplorer() {
  const [active, setActive] = useState(services[0].slug);
  const s = services.find((x) => x.slug === active)!;

  return (
    <section id="services" className="container-x scroll-mt-28">
      <div className="glass-strong sticky top-24 z-20 mx-auto flex w-fit max-w-full gap-1 overflow-x-auto rounded-full p-1.5">
        {services.map((x) => (
          <button
            key={x.slug}
            onClick={() => setActive(x.slug)}
            className={`relative flex shrink-0 items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors md:px-6 ${
              active === x.slug ? "text-white" : "text-ink/70 hover:text-ink"
            }`}
          >
            {active === x.slug && (
              <motion.span
                layoutId="agency-tab"
                className="absolute inset-0 rounded-full bg-brand shadow-[0_10px_24px_-10px_rgba(23,61,237,0.9)]"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <ServiceIcon type={x.icon} className="relative size-4" />
            <span className="relative">{x.name}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={s.slug}
          initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
          transition={{ duration: 0.55, ease }}
          className="mt-12 grid gap-6 lg:grid-cols-12"
        >
          {/* About */}
          <div className="glass rounded-[2rem] p-8 md:p-10 lg:col-span-7">
            <span className="grid size-14 place-items-center rounded-2xl bg-brand text-white">
              <ServiceIcon type={s.icon} className="size-7" />
            </span>
            <h2 className="mt-8 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] md:text-5xl">{s.headline}</h2>
            <p className="mt-5 text-lg text-ink-soft">{s.intro}</p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {s.offerings.map((o, i) => (
                <motion.li
                  key={o.title}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-brand/10 text-brand">
                    <Check className="size-3" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-ink">{o.title}</span>
                </motion.li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button href={`/agency/${s.slug}`}>Explore {s.name}</Button>
              <Button href="/contact" variant="outline">
                Get a quote
              </Button>
            </div>
          </div>

          {/* Featured work */}
          <div className="grid gap-6 lg:col-span-5">
            <Link href={`/agency/${s.slug}#portfolio`} className="group relative block overflow-hidden rounded-[2rem]">
              <ProjectArt project={s.projects[0]} className="aspect-[4/3] w-full" />
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 rounded-2xl bg-white/80 p-5 backdrop-blur-xl">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Featured · {s.projects[0].category}</p>
                  <p className="mt-1 font-display text-xl font-semibold tracking-tight">{s.projects[0].title}</p>
                  <p className="text-sm text-ink-soft">{s.projects[0].result}</p>
                </div>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-white transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
            </Link>
            <div className="grid grid-cols-3 gap-3">
              {s.metrics.map((m) => (
                <div key={m.label} className="glass rounded-2xl p-4">
                  <p className="font-display text-lg font-semibold tracking-tight text-brand md:text-xl">{m.value}</p>
                  <p className="mt-1 text-xs text-ink-soft">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

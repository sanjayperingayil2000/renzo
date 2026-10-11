"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import type { ReactNode } from "react";
import { Eyebrow, Blobs } from "./ui";
import { SplitText, ease } from "./motion";

export default function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
  crumbs,
  children,
}: {
  eyebrow: string;
  title: string;
  highlight?: string; // a word in the title to colour with the gradient
  intro: string;
  crumbs: { label: string; href?: string }[];
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pb-16 pt-36 md:pb-24 md:pt-44">
      <Blobs className="-z-10" />
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_top,black_20%,transparent_70%)]" />
      <div className="container-x">
        <motion.nav
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          aria-label="Breadcrumb"
          className="mb-8 flex items-center gap-1.5 text-sm text-ink-soft"
        >
          {crumbs.map((c, i) => (
            <span key={c.label} className="flex items-center gap-1.5">
              {c.href ? (
                <Link href={c.href} className="transition hover:text-brand">
                  {c.label}
                </Link>
              ) : (
                <span className="font-medium text-ink">{c.label}</span>
              )}
              {i < crumbs.length - 1 && <ChevronRight className="size-3.5" />}
            </span>
          ))}
        </motion.nav>
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease }}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <SplitText
          text={title}
          delay={0.1}
          className="mt-6 max-w-5xl font-display text-[clamp(2.6rem,6vw,5.5rem)] font-semibold leading-[0.98] tracking-[-0.038em] text-ink"
          wordClassName={(w) => (highlight && w.replace(/[.,]/g, "") === highlight ? "text-gradient italic pr-2" : undefined)}
        />
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease }}
          className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl"
        >
          {intro}
        </motion.p>
        {children && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.65, ease }}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  );
}

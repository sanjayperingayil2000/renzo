"use client";

import { AnimatePresence, motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { company } from "@/data/site";
import { Eyebrow } from "../ui";
import { Reveal } from "../motion";

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  return (
    <span className="relative mr-[0.25em] inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

/** Paragraph whose words light up as you scroll through it. */
function ScrollText({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.85", "end 0.45"] });
  const words = text.split(" ");
  return (
    <p ref={ref} className="font-display text-[clamp(1.6rem,3.2vw,2.9rem)] font-medium leading-[1.18] tracking-[-0.025em] text-ink">
      {words.map((w, i) => (
        <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
          {w}
        </Word>
      ))}
    </p>
  );
}

function Rotator({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 1800);
    return () => clearInterval(t);
  }, [words.length]);
  return (
    <span className="relative inline-flex h-[1.15em] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-gradient whitespace-nowrap"
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function About() {
  const all = company.weAre.flat();
  return (
    <section id="about" className="relative py-28 md:py-40">
      <div className="container-x grid gap-12 md:grid-cols-12">
        <div className="md:col-span-3">
          <div className="md:sticky md:top-32">
            <Reveal>
              <Eyebrow>About us</Eyebrow>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-xs text-ink-soft">{company.mission}</p>
            </Reveal>
          </div>
        </div>
        <div className="md:col-span-9">
          <ScrollText text={company.about} />

          <Reveal className="mt-16">
            <div className="glass rounded-[2rem] p-8 md:p-10">
              <p className="font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                We are <Rotator words={all} />
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {company.weAre.map((group, gi) => (
                  <div key={gi} className="rounded-2xl border border-brand/10 bg-white/60 p-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">0{gi + 1}</p>
                    <p className="mt-2 text-ink">{group.join(", ")}.</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

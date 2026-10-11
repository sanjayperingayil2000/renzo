"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { workProcess } from "@/data/site";
import { Eyebrow } from "../ui";

/** Pinned section: vertical scroll drives a horizontal track of process cards (desktop). */
export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setDistance(Math.max(0, trackRef.current.scrollWidth - window.innerWidth + 64));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);
  const x = useTransform(scrollYProgress, [0.05, 0.95], [0, -distance]);
  const bar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="relative">
      {/* Desktop: pinned horizontal scroll */}
      <div ref={ref} className="relative hidden h-[300vh] lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="container-x flex items-end justify-between gap-10">
            <div>
              <Eyebrow>How we work</Eyebrow>
              <h2 className="mt-5 max-w-2xl font-display text-6xl font-semibold leading-[1] tracking-[-0.04em]">
                A structured, transparent & <span className="text-gradient">agile</span> methodology.
              </h2>
            </div>
            <div className="w-64 pb-3">
              <div className="h-1 overflow-hidden rounded-full bg-brand/10">
                <motion.div className="h-full rounded-full bg-brand" style={{ width: bar }} />
              </div>
              <p className="mt-3 text-sm text-ink-soft">Scroll to explore our 6-step process</p>
            </div>
          </div>

          <motion.div ref={trackRef} style={{ x }} className="mt-14 flex w-max gap-6 pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
            {workProcess.map((p, i) => (
              <article
                key={p.title}
                className="group glass relative flex h-[380px] w-[400px] shrink-0 flex-col justify-between overflow-hidden rounded-[2rem] p-9 transition-colors duration-500 hover:bg-brand"
              >
                <span className="pointer-events-none absolute -right-6 -top-10 font-display text-[11rem] font-bold leading-none tracking-tighter text-brand/[0.07] transition-colors duration-500 group-hover:text-white/10">
                  0{i + 1}
                </span>
                <span className="grid size-14 place-items-center rounded-2xl bg-brand font-display text-xl font-semibold text-white transition-colors duration-500 group-hover:bg-white group-hover:text-brand">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-3xl font-semibold tracking-tight text-ink transition-colors duration-500 group-hover:text-white">
                    {p.title}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-white/80">{p.text}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Mobile / tablet: vertical timeline */}
      <div className="container-x py-24 lg:hidden">
        <Eyebrow>How we work</Eyebrow>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] sm:text-5xl">
          A structured, transparent & <span className="text-gradient">agile</span> methodology.
        </h2>
        <ol className="relative ml-[18px] mt-12 space-y-5 border-l border-brand/20 pl-8">
          {workProcess.map((p, i) => (
            <motion.li
              key={p.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="glass relative rounded-3xl p-6"
            >
              <span className="absolute -left-[50px] top-6 grid size-9 place-items-center rounded-full bg-brand text-sm font-semibold text-white ring-4 ring-mist">
                {i + 1}
              </span>
              <h3 className="font-display text-2xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-2 text-ink-soft">{p.text}</p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

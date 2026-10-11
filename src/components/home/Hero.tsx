"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { Clapperboard, Hotel, Megaphone, Sparkles } from "lucide-react";
import { LogoMark } from "../Logo";
import { Button, Eyebrow } from "../ui";
import { Magnetic, SplitText, ease } from "../motion";
import { company } from "@/data/site";

const chips = [
  { label: "Animation", Icon: Clapperboard, pos: "left-0 top-[12%] sm:left-[-6%] sm:top-[14%]", delay: 0.9 },
  { label: "Digital Marketing", Icon: Megaphone, pos: "right-0 top-[40%] sm:right-[-10%] sm:top-[38%]", delay: 1.05 },
  { label: "Hospitality Consulting", Icon: Hotel, pos: "left-[2%] bottom-[8%]", delay: 1.2 },
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 60, damping: 18 });
  const sy = useSpring(my, { stiffness: 60, damping: 18 });
  const rotY = useTransform(sx, [0, 1], [-18, 18]);
  const rotX = useTransform(sy, [0, 1], [14, -14]);
  const tx = useTransform(sx, [0, 1], [-20, 20]);
  const ty = useTransform(sy, [0, 1], [-20, 20]);
  const spotX = useTransform(mx, (v) => `${v * 100}%`);
  const spotY = useTransform(my, (v) => `${v * 100}%`);
  const spotlight = useMotionTemplate`radial-gradient(600px circle at ${spotX} ${spotY}, rgba(23,61,237,0.12), transparent 60%)`;

  return (
    <section
      ref={ref}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (!r) return;
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative isolate flex min-h-[100svh] items-center overflow-hidden pb-20 pt-32 md:pt-36"
    >
      {/* Background layers */}
      <div aria-hidden className="absolute inset-0 -z-10 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div aria-hidden className="absolute inset-0 -z-10" style={{ background: spotlight }} />
      <div aria-hidden className="absolute -left-40 top-10 -z-10 size-[560px] animate-float rounded-full bg-brand/25 blur-[120px]" />
      <div aria-hidden className="absolute -right-20 bottom-0 -z-10 size-[520px] animate-float-slow rounded-full bg-sky/35 blur-[120px]" />

      <div className="container-x grid items-center gap-16 lg:grid-cols-[1.35fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease }}>
            <Eyebrow>Creative · Strategy · Hospitality</Eyebrow>
          </motion.div>

          <SplitText
            text="Creative digital solutions that grow your brand."
            delay={0.15}
            className="mt-7 font-display text-[clamp(2.6rem,5.6vw,5.25rem)] font-semibold leading-[0.98] tracking-[-0.038em] text-ink"
            wordClassName={(w) => (w.startsWith("grow") ? "text-gradient italic pr-2" : undefined)}
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl"
          >
            {company.shortAbout}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Magnetic>
              <Button href="/agency">Agency</Button>
            </Magnetic>
            <Magnetic>
              <Button href="/academy" variant="glass">
                Academy
              </Button>
            </Magnetic>
            <Magnetic>
              <Button href="/contact" variant="outline">
                Contact
              </Button>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-14 flex items-center gap-4 text-sm text-ink-soft"
          >
            <div className="flex -space-x-2">
              {["bg-brand", "bg-brand-400", "bg-sky", "bg-ink"].map((c, i) => (
                <span key={i} className={`size-9 rounded-full border-2 border-white ${c}`} />
              ))}
            </div>
            <p>
              <span className="font-semibold text-ink">Creators, artists & strategists</span>
              <br />
              building brands that perform.
            </p>
          </motion.div>
        </div>

        {/* Interactive brand object */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3, ease }}
          className="relative mx-auto aspect-square w-full max-w-[480px] [perspective:1200px]"
        >
          {/* orbit rings */}
          <div aria-hidden className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-brand/25" />
          <div aria-hidden className="absolute inset-[12%] animate-spin-slow rounded-full border border-brand/15 [animation-direction:reverse]" />
          <div aria-hidden className="absolute left-1/2 top-0 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand shadow-[0_0_20px_4px_rgba(23,61,237,0.5)]" />

          <motion.div
            style={{ rotateX: rotX, rotateY: rotY, x: tx, y: ty }}
            className="absolute inset-[18%] [transform-style:preserve-3d]"
          >
            {/* back glow card */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-brand via-brand-500 to-sky opacity-90 blur-[2px] [transform:translateZ(-60px)]" />
            {/* glass card */}
            <div className="glass absolute inset-0 grid place-items-center rounded-[2.5rem] [transform:translateZ(30px)]">
              <LogoMark className="h-[46%] w-auto text-brand drop-shadow-[0_20px_30px_rgba(23,61,237,0.35)]" />
              <span className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-sm font-semibold tracking-tight text-ink/70">
                Renzo Studio<sup>©</sup>
              </span>
            </div>
            <Sparkles className="absolute -right-4 -top-4 size-10 text-brand [transform:translateZ(80px)]" />
          </motion.div>

          {chips.map(({ label, Icon, pos, delay }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ delay, duration: 0.7, ease }}
              className={`absolute ${pos}`}
            >
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
                className="glass-strong flex items-center gap-2 rounded-2xl px-3 py-2 text-xs font-semibold text-ink sm:gap-2.5 sm:px-4 sm:py-3 sm:text-sm"
              >
                <span className="grid size-8 place-items-center rounded-xl bg-brand text-white">
                  <Icon className="size-4" />
                </span>
                {label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-ink-soft md:flex"
      >
        Scroll
        <span className="relative h-10 w-[22px] rounded-full border border-ink/20">
          <motion.span
            className="absolute left-1/2 top-2 size-1.5 -translate-x-1/2 rounded-full bg-brand"
            animate={{ y: [0, 14, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          />
        </span>
      </motion.div>
    </section>
  );
}

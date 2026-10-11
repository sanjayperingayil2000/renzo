"use client";

import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Clock, MapPin, Play, Plus, Signal, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { academy } from "@/data/site";
import { LogoMark } from "../Logo";
import { ServiceIcon } from "../ui";
import { ease } from "../motion";

/* ───────────── Tracks (course cards with tabbed modules) ───────────── */
export function Tracks() {
  const [active, setActive] = useState(0);
  const t = academy.tracks[active];
  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="flex flex-col gap-3 lg:col-span-5">
        {academy.tracks.map((tr, i) => (
          <button
            key={tr.title}
            onClick={() => setActive(i)}
            className={`group relative flex items-center gap-4 overflow-hidden rounded-3xl p-5 text-left transition-colors duration-300 ${
              active === i ? "text-white" : "glass text-ink hover:bg-white"
            }`}
          >
            {active === i && (
              <motion.span
                layoutId="track-bg"
                className="absolute inset-0 bg-brand"
                transition={{ type: "spring", stiffness: 300, damping: 32 }}
              />
            )}
            <span
              className={`relative grid size-12 shrink-0 place-items-center rounded-2xl ${
                active === i ? "bg-white text-brand" : "bg-brand/10 text-brand"
              }`}
            >
              <ServiceIcon type={tr.icon} />
            </span>
            <span className="relative flex-1">
              <span className="block font-display text-lg font-semibold tracking-tight">{tr.title}</span>
              <span className={`text-sm ${active === i ? "text-white/75" : "text-ink-soft"}`}>{tr.duration}</span>
            </span>
          </button>
        ))}
      </div>

      <div className="lg:col-span-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={t.title}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.45, ease }}
            className="glass-strong h-full rounded-[2rem] p-8 md:p-10"
          >
            <div className="flex flex-wrap gap-2 text-sm">
              {[
                { Icon: Clock, v: t.duration },
                { Icon: Signal, v: t.level },
                { Icon: MapPin, v: t.format },
              ].map(({ Icon, v }) => (
                <span key={v} className="inline-flex items-center gap-1.5 rounded-full bg-brand/[0.07] px-3 py-1.5 font-medium text-brand">
                  <Icon className="size-3.5" /> {v}
                </span>
              ))}
            </div>
            <h3 className="mt-6 font-display text-3xl font-semibold tracking-tight md:text-4xl">{t.title}</h3>
            <p className="mt-2 text-ink-soft">What you&apos;ll learn</p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {t.modules.map((m, i) => (
                <motion.li
                  key={m}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3 rounded-2xl border border-brand/10 bg-white/70 p-4"
                >
                  <span className="grid size-6 shrink-0 place-items-center rounded-full bg-brand text-[11px] font-semibold text-white">
                    {i + 1}
                  </span>
                  <span className="text-ink">{m}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* ───────────── Trailer ───────────── */
export function Trailer() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const { url, title, duration } = academy.trailer;
  const isEmbed = url.includes("youtube") || url.includes("vimeo");

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        whileHover="hover"
        initial="rest"
        animate="rest"
        className="group relative block aspect-video w-full overflow-hidden rounded-[2.5rem] bg-ink text-left"
        aria-label={`Play trailer: ${title}`}
      >
        <TrailerArt />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
        <div className="absolute inset-0 grid place-items-center">
          <span className="relative grid size-24 place-items-center md:size-28">
            <span className="absolute inset-0 animate-ping rounded-full bg-white/30" />
            <motion.span
              variants={{ rest: { scale: 1 }, hover: { scale: 1.12 } }}
              className="relative grid size-full place-items-center rounded-full bg-white text-brand shadow-2xl"
            >
              <Play className="ml-1 size-9 fill-current" />
            </motion.span>
          </span>
        </div>
        <div className="absolute inset-x-6 bottom-6 flex items-end justify-between text-white md:inset-x-10 md:bottom-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Watch the trailer</p>
            <p className="mt-1 font-display text-2xl font-semibold tracking-tight md:text-4xl">{title}</p>
          </div>
          <span className="rounded-full bg-white/15 px-3 py-1 text-sm backdrop-blur">{duration}</span>
        </div>
      </motion.button>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[70] grid place-items-center bg-ink/80 p-4 backdrop-blur-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.92, opacity: 0 }}
                  transition={{ duration: 0.45, ease }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative aspect-video w-full max-w-5xl overflow-hidden rounded-3xl bg-ink shadow-2xl"
                >
                  {url ? (
                    isEmbed ? (
                      <iframe src={`${url}?autoplay=1`} title={title} allow="autoplay; fullscreen" allowFullScreen className="size-full" />
                    ) : (
                      <video src={url} autoPlay controls className="size-full object-cover" />
                    )
                  ) : (
                    <TeaserPlaceholder />
                  )}
                  <button
                    onClick={() => setOpen(false)}
                    aria-label="Close trailer"
                    className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/90 text-ink transition hover:rotate-90"
                  >
                    <X className="size-5" />
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}

function TrailerArt() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-brand-800 via-brand to-sky">
      <div aria-hidden className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="absolute -left-10 top-10 size-72 animate-float rounded-full bg-sky/50 blur-3xl" />
      <div className="absolute bottom-0 right-10 size-80 animate-float-slow rounded-full bg-violet/50 blur-3xl" />
      <LogoMark className="absolute -right-10 -top-10 h-[120%] w-auto text-white/[0.07] transition-transform duration-[2s] group-hover:scale-105" />
      {/* film strip */}
      <div className="absolute inset-x-0 top-6 flex gap-3 opacity-30">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="h-3 w-6 shrink-0 rounded-sm bg-white" />
        ))}
      </div>
    </div>
  );
}

/** Shown in the modal until a real trailer URL is added in site.ts */
function TeaserPlaceholder() {
  const words = ["Learn.", "Create.", "Intern.", "Launch."];
  return (
    <div className="relative grid size-full place-items-center overflow-hidden bg-gradient-to-br from-ink via-brand-900 to-brand">
      <div className="absolute size-[60%] animate-spin-slow rounded-full border border-dashed border-white/20" />
      <div className="relative text-center text-white">
        <motion.div initial={{ scale: 0, rotate: -30 }} animate={{ scale: 1, rotate: 0 }} transition={{ duration: 0.9, ease }}>
          <LogoMark className="mx-auto h-16 w-auto text-white md:h-20" />
        </motion.div>
        <div className="mt-6 flex justify-center gap-3 font-display text-3xl font-semibold tracking-tight md:text-6xl">
          {words.map((w, i) => (
            <motion.span
              key={w}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.35, duration: 0.6, ease }}
              className={i === 3 ? "text-sky" : ""}
            >
              {w}
            </motion.span>
          ))}
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4 }}
          className="mt-6 text-sm uppercase tracking-[0.2em] text-white/60"
        >
          Full trailer premiering soon
        </motion.p>
      </div>
    </div>
  );
}

/* ───────────── Roadmap (scroll-drawn timeline) ───────────── */
export function Roadmap() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative mx-auto mt-16 max-w-4xl">
      <div className="absolute bottom-0 left-5 top-0 w-px bg-brand/15 md:left-1/2" />
      <motion.div style={{ height }} className="absolute left-5 top-0 w-px origin-top bg-gradient-to-b from-brand to-sky md:left-1/2" />
      <div className="space-y-10">
        {academy.roadmap.map((r, i) => {
          const left = i % 2 === 0;
          return (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease }}
              className={`relative grid items-center pl-14 md:grid-cols-2 md:pl-0`}
            >
              <span className="absolute left-5 top-6 z-10 grid size-4 -translate-x-1/2 place-items-center rounded-full bg-brand ring-[6px] ring-brand/15 md:left-1/2 md:top-1/2 md:-translate-y-1/2" />
              <div className={`${left ? "md:pr-14" : "md:col-start-2 md:pl-14"}`}>
                <div className="glass rounded-3xl p-6 transition-transform duration-500 hover:-translate-y-1">
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand">{r.phase}</span>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{r.title}</h3>
                  <p className="mt-2 text-ink-soft">{r.text}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

/* ───────────── FAQ accordion ───────────── */
export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {academy.faq.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className={`overflow-hidden rounded-3xl transition-colors duration-300 ${isOpen ? "bg-white shadow-[0_20px_50px_-25px_rgba(23,61,237,0.35)]" : "glass"}`}>
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 p-6 text-left md:p-7"
              aria-expanded={isOpen}
            >
              <span className="font-display text-lg font-semibold tracking-tight md:text-xl">{f.q}</span>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0, backgroundColor: isOpen ? "#173ded" : "rgba(23,61,237,0.08)", color: isOpen ? "#fff" : "#173ded" }}
                className="grid size-10 shrink-0 place-items-center rounded-full"
              >
                <Plus className="size-5" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4, ease }}
                >
                  <p className="px-6 pb-7 leading-relaxed text-ink-soft md:px-7">{f.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}


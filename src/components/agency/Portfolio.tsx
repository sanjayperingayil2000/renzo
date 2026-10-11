"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/data/site";
import { ProjectArt } from "../ui";
import { ease } from "../motion";

type Item = Project & { service?: string };

/** Filterable portfolio grid with an animated project detail modal. */
export default function Portfolio({ items, filters }: { items: Item[]; filters?: string[] }) {
  const [filter, setFilter] = useState("All");
  const [open, setOpen] = useState<Item | null>(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(null);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const tabs = filters ?? ["All", ...Array.from(new Set(items.map((p) => p.category)))];
  const shown = items.filter((p) => filter === "All" || p.service === filter || p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === t ? "text-white" : "bg-white/60 text-ink/70 hover:text-ink"
            }`}
          >
            {filter === t && (
              <motion.span layoutId={`pf-${tabs.join("")}`} className="absolute inset-0 rounded-full bg-ink" transition={{ type: "spring", stiffness: 400, damping: 32 }} />
            )}
            <span className="relative">{t}</span>
          </button>
        ))}
      </div>

      <motion.div layout className={`mt-10 grid gap-6 md:grid-cols-2 ${items.length > 6 ? "xl:grid-cols-3" : ""}`}>
        <AnimatePresence mode="popLayout">
          {shown.map((p, i) => (
            <motion.button
              layout
              key={p.title}
              onClick={() => setOpen(p)}
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.5, ease, delay: i * 0.04 }}
              className="group text-left"
            >
              <div className="relative overflow-hidden rounded-[2rem]">
                <ProjectArt project={p} className="aspect-[16/11] w-full transition-transform duration-700 group-hover:scale-[1.03]" />
                <span className="absolute left-5 top-5 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                  {p.category}
                </span>
                <span className="absolute right-5 top-5 grid size-11 scale-75 place-items-center rounded-full bg-white text-brand opacity-0 transition-all duration-500 group-hover:scale-100 group-hover:opacity-100">
                  <ArrowUpRight className="size-5" />
                </span>
              </div>
              <div className="mt-5 flex items-start justify-between gap-4 px-1">
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-tight transition-colors group-hover:text-brand">{p.title}</h3>
                  <p className="mt-1 text-ink-soft">
                    {p.client} · {p.year}
                  </p>
                </div>
                <p className="max-w-[45%] text-right text-sm font-medium text-brand">{p.result}</p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                className="fixed inset-0 z-[70] grid place-items-center bg-ink/40 p-4 backdrop-blur-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(null)}
              >
                <motion.div
                  role="dialog"
                  aria-modal="true"
                  aria-label={open.title}
                  initial={{ opacity: 0, y: 40, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 30, scale: 0.97 }}
                  transition={{ duration: 0.45, ease }}
                  onClick={(e) => e.stopPropagation()}
                  className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] bg-white shadow-2xl"
                >
                  <ProjectArt project={open} className="aspect-[16/8] w-full" />
                  <button
                    onClick={() => setOpen(null)}
                    aria-label="Close"
                    className="absolute right-4 top-4 grid size-11 place-items-center rounded-full bg-white/90 text-ink backdrop-blur transition hover:rotate-90"
                  >
                    <X className="size-5" />
                  </button>
                  <div className="p-8 md:p-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">
                      {open.category} · {open.year}
                    </p>
                    <h3 className="mt-3 font-display text-4xl font-semibold tracking-tight">{open.title}</h3>
                    <p className="mt-1 text-ink-soft">Client: {open.client}</p>
                    <p className="mt-6 text-lg leading-relaxed text-ink">{open.summary}</p>
                    <div className="mt-8 rounded-2xl bg-brand/[0.06] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand">Outcome</p>
                      <p className="mt-1 font-display text-2xl font-semibold tracking-tight text-ink">{open.result}</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}

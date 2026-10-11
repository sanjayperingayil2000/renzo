"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check, Loader2, Send } from "lucide-react";
import { useState, type FormEvent } from "react";
import { ease } from "../motion";

const interests = ["Animation", "Digital Marketing", "Hospitality Consulting", "Advertising", "Academy", "Internship", "Other"];
const budgets = ["< ₹50K", "₹50K – 2L", "₹2L – 5L", "₹5L +"];

type Errors = Partial<Record<"name" | "email" | "message", string>>;

/**
 * Static contact form — validates on the client and shows a success state.
 * TODO: connect to an email service / API route when the backend is ready.
 */
export default function ContactForm() {
  const [picked, setPicked] = useState<string[]>([]);
  const [budget, setBudget] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const toggle = (v: string) => setPicked((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    const next: Errors = {};
    if (name.length < 2) next.name = "Please tell us your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email.";
    if (message.length < 10) next.message = "A few more words about your project, please.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1200); // simulate a request
  }

  const field =
    "peer w-full rounded-2xl border border-ink/10 bg-white/70 px-5 pb-3 pt-7 text-ink outline-none transition focus:border-brand focus:bg-white focus:ring-4 focus:ring-brand/10";
  const label =
    "pointer-events-none absolute left-5 top-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-ink-soft transition peer-focus:text-brand";

  return (
    <div className="glass-strong relative overflow-hidden rounded-[2rem] p-6 md:p-10">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease }}
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
          >
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 16, delay: 0.1 }}
              className="grid size-24 place-items-center rounded-full bg-brand text-white shadow-[0_20px_50px_-15px_rgba(23,61,237,0.8)]"
            >
              <Check className="size-12" strokeWidth={2.5} />
            </motion.span>
            <h3 className="mt-8 font-display text-4xl font-semibold tracking-tight">Message received!</h3>
            <p className="mt-3 max-w-sm text-ink-soft">Thanks for reaching out. Our team will get back to you within one business day.</p>
            <button
              onClick={() => {
                setStatus("idle");
                setPicked([]);
                setBudget("");
              }}
              className="mt-8 rounded-full border border-ink/15 px-5 py-2.5 text-sm font-semibold transition hover:border-brand hover:text-brand"
            >
              Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form key="form" onSubmit={onSubmit} noValidate exit={{ opacity: 0, y: -10 }} className="space-y-6">
            <div>
              <p className="font-display text-2xl font-semibold tracking-tight">Tell us about your project</p>
              <p className="mt-1 text-sm text-ink-soft">Fields marked * are required.</p>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-ink">I&apos;m interested in</legend>
              <div className="flex flex-wrap gap-2">
                {interests.map((i) => {
                  const on = picked.includes(i);
                  return (
                    <motion.button
                      type="button"
                      key={i}
                      whileTap={{ scale: 0.94 }}
                      onClick={() => toggle(i)}
                      aria-pressed={on}
                      className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                        on ? "border-brand bg-brand text-white shadow-[0_8px_20px_-10px_rgba(23,61,237,0.9)]" : "border-ink/10 bg-white/60 text-ink hover:border-brand/40"
                      }`}
                    >
                      {i}
                    </motion.button>
                  );
                })}
              </div>
            </fieldset>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { name: "name", label: "Your name *", type: "text", auto: "name" },
                { name: "email", label: "Email *", type: "email", auto: "email" },
                { name: "phone", label: "Phone / WhatsApp", type: "tel", auto: "tel" },
                { name: "company", label: "Company / Hotel", type: "text", auto: "organization" },
              ].map((f) => (
                <div key={f.name}>
                  <div className="relative">
                    <input id={f.name} name={f.name} type={f.type} autoComplete={f.auto} placeholder=" " className={field} />
                    <label htmlFor={f.name} className={label}>
                      {f.label}
                    </label>
                  </div>
                  <AnimatePresence>
                    {errors[f.name as keyof Errors] && (
                      <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 pl-2 text-sm text-red-600">
                        {errors[f.name as keyof Errors]}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-ink">Estimated budget</legend>
              <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
                {budgets.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setBudget(b)}
                    aria-pressed={budget === b}
                    className={`relative rounded-2xl border px-3 py-3 text-sm font-medium transition ${
                      budget === b ? "border-brand text-brand" : "border-ink/10 bg-white/60 text-ink hover:border-brand/40"
                    }`}
                  >
                    {budget === b && <motion.span layoutId="budget" className="absolute inset-0 rounded-2xl bg-brand/[0.07]" />}
                    <span className="relative">{b}</span>
                  </button>
                ))}
              </div>
            </fieldset>

            <div>
              <div className="relative">
                <textarea id="message" name="message" rows={5} placeholder=" " className={`${field} resize-none`} />
                <label htmlFor="message" className={label}>
                  Project details *
                </label>
              </div>
              <AnimatePresence>
                {errors.message && (
                  <motion.p initial={{ opacity: 0, y: -4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="mt-1.5 pl-2 text-sm text-red-600">
                    {errors.message}
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={status === "sending"}
              className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-brand py-4 font-semibold text-white shadow-[0_16px_40px_-14px_rgba(23,61,237,0.9)] disabled:opacity-80"
            >
              <span aria-hidden className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              {status === "sending" ? (
                <>
                  <Loader2 className="size-5 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  Send message <Send className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-1" />
                </>
              )}
            </motion.button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

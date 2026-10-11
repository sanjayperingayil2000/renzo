import Link from "next/link";
import { ArrowUpRight, Clapperboard, Hotel, Megaphone } from "lucide-react";
import type { ReactNode } from "react";
import type { Project } from "@/data/site";
import { Reveal } from "./motion";

/* ───────────── Buttons ───────────── */

type BtnProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "glass" | "dark" | "outline";
  className?: string;
  external?: boolean;
  icon?: boolean;
};

export function Button({ href, children, variant = "primary", className = "", external, icon = true }: BtnProps) {
  const styles = {
    primary:
      "bg-brand text-white shadow-[0_12px_30px_-10px_rgba(23,61,237,0.7)] hover:shadow-[0_18px_40px_-10px_rgba(23,61,237,0.85)]",
    glass: "glass text-ink hover:bg-white/80",
    dark: "bg-ink text-white hover:bg-ink/90",
    outline: "border border-ink/15 text-ink hover:border-brand hover:text-brand bg-white/40",
  }[variant];
  const cls = `group relative inline-flex items-center gap-2 overflow-hidden rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-300 hover:-translate-y-0.5 ${styles} ${className}`;
  const inner = (
    <>
      {variant === "primary" && (
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
        />
      )}
      <span className="relative">{children}</span>
      {icon && (
        <span className="relative grid size-5 place-items-center overflow-hidden">
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-5 group-hover:translate-x-5" />
          <ArrowUpRight className="absolute size-4 -translate-x-5 translate-y-5 transition-transform duration-300 group-hover:translate-x-0 group-hover:translate-y-0" />
        </span>
      )}
    </>
  );
  if (external)
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/* ───────────── Section heading ───────────── */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-brand/15 bg-white/70 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand backdrop-blur ${className}`}
    >
      <span className="relative flex size-1.5">
        <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-60" />
        <span className="relative inline-flex size-1.5 rounded-full bg-brand" />
      </span>
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-ink sm:text-5xl md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-lg leading-relaxed text-ink-soft ${align === "center" ? "mx-auto" : ""} max-w-2xl`}>
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}

/* ───────────── Service icon ───────────── */

export function ServiceIcon({ type, className = "size-6" }: { type: "animation" | "marketing" | "hospitality"; className?: string }) {
  const Icon = { animation: Clapperboard, marketing: Megaphone, hospitality: Hotel }[type];
  return <Icon className={className} strokeWidth={1.6} />;
}

/* ───────────── Social icons (brand marks not in lucide) ───────────── */

export function InstagramIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className={className} aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.83v1.5h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.66 4.8 6.13v5.43h-4v-4.82c0-1.15-.02-2.63-1.6-2.63-1.6 0-1.85 1.25-1.85 2.55v4.9h-4v-11Z" />
    </svg>
  );
}

export function WhatsappIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M12 2a10 10 0 0 0-8.66 15l-1.3 4.77 4.9-1.28A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-2.9.76.78-2.83-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.08-.39-.12-.55.12-.16.25-.63.8-.78.97-.14.16-.29.18-.53.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.7c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.43.12-.15.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.13-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42h-.47a.9.9 0 0 0-.65.3 2.73 2.73 0 0 0-.85 2.03c0 1.2.87 2.36 1 2.52.12.17 1.71 2.62 4.15 3.67.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.46-.6 1.66-1.17.2-.58.2-1.07.15-1.17-.06-.1-.22-.17-.47-.29Z" />
    </svg>
  );
}

/* ───────────── Project artwork (generated, no images needed) ───────────── */

export function ProjectArt({ project, className = "" }: { project: Project; className?: string }) {
  const h = project.hue;
  const c1 = `hsl(${h} 84% 50%)`;
  const c2 = `hsl(${h + 6} 92% 68%)`;
  const c3 = `hsl(${h - 14} 95% 88%)`;
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ background: `linear-gradient(135deg, ${c3} 0%, ${c2} 45%, ${c1} 100%)` }}
    >
      <svg viewBox="0 0 400 300" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden>
        {project.pattern === "orbs" && (
          <g className="origin-center transition-transform duration-[1.2s] ease-out group-hover:scale-110">
            <circle cx="290" cy="90" r="90" fill="white" opacity=".22" />
            <circle cx="120" cy="220" r="120" fill={c1} opacity=".55" />
            <circle cx="230" cy="190" r="46" fill="white" opacity=".35" />
          </g>
        )}
        {project.pattern === "waves" && (
          <g className="transition-transform duration-[1.2s] ease-out group-hover:-translate-x-6">
            {[0, 1, 2, 3, 4].map((i) => (
              <path
                key={i}
                d={`M-20 ${150 + i * 28} C 80 ${100 + i * 28}, 160 ${210 + i * 28}, 260 ${150 + i * 28} S 420 ${110 + i * 28}, 460 ${150 + i * 28}`}
                fill="none"
                stroke="white"
                strokeWidth="14"
                opacity={0.14 + i * 0.06}
              />
            ))}
          </g>
        )}
        {project.pattern === "grid" && (
          <g className="transition-transform duration-[1.2s] ease-out group-hover:scale-105">
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 8 }).map((_, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 52 + 6}
                  y={r * 52 + 6}
                  width="40"
                  height="40"
                  rx="10"
                  fill="white"
                  opacity={((r * 7 + c * 3) % 5) * 0.07 + 0.06}
                />
              ))
            )}
          </g>
        )}
        {project.pattern === "rings" && (
          <g className="origin-center transition-transform duration-[1.2s] ease-out group-hover:rotate-12" style={{ transformOrigin: "260px 150px" }}>
            {[150, 115, 80, 45].map((r, i) => (
              <circle key={r} cx="260" cy="150" r={r} fill="none" stroke="white" strokeWidth="2" opacity={0.25 + i * 0.12} strokeDasharray={i % 2 ? "6 10" : undefined} />
            ))}
            <circle cx="260" cy="150" r="18" fill="white" opacity=".8" />
          </g>
        )}
        {project.pattern === "bars" && (
          <g>
            {[60, 110, 90, 160, 130, 200, 230].map((bh, i) => (
              <rect
                key={i}
                x={40 + i * 48}
                y={270 - bh}
                width="30"
                height={bh}
                rx="8"
                fill="white"
                opacity={0.2 + i * 0.08}
                className="origin-bottom transition-transform duration-700 ease-out group-hover:scale-y-110"
                style={{ transformBox: "fill-box" }}
              />
            ))}
          </g>
        )}
        {project.pattern === "blocks" && (
          <g className="transition-transform duration-[1.2s] ease-out group-hover:translate-y-[-8px]">
            <rect x="50" y="60" width="150" height="190" rx="22" fill="white" opacity=".25" />
            <rect x="170" y="110" width="180" height="140" rx="22" fill={c1} opacity=".6" />
            <rect x="230" y="40" width="110" height="90" rx="22" fill="white" opacity=".4" />
          </g>
        )}
      </svg>
      <div className="noise absolute inset-0" />
    </div>
  );
}

/* ───────────── Ambient background blobs ───────────── */

export function Blobs({ className = "" }: { className?: string }) {
  return (
    <div aria-hidden className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <div className="absolute -left-40 -top-40 size-[520px] animate-float rounded-full bg-brand/25 blur-[110px]" />
      <div className="absolute -right-32 top-20 size-[460px] animate-float-slow rounded-full bg-sky/30 blur-[110px] [animation-delay:-4s]" />
      <div className="absolute bottom-[-180px] left-1/3 size-[420px] animate-float rounded-full bg-violet/20 blur-[120px] [animation-delay:-7s]" />
    </div>
  );
}

/* ───────────── Marquee ───────────── */

export function Marquee({ items, reverse = false, className = "" }: { items: string[]; reverse?: boolean; className?: string }) {
  const row = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}>
      <div className={`flex shrink-0 gap-10 pr-10 ${reverse ? "animate-marquee-rev" : "animate-marquee"} hover:[animation-play-state:paused]`}>
        {row.map((w, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap font-display text-3xl font-semibold tracking-tight md:text-5xl">
            {w}
            <svg viewBox="0 0 24 24" className="size-6 text-brand md:size-8" fill="currentColor" aria-hidden>
              <path d="M12 0l2.6 9.4L24 12l-9.4 2.6L12 24l-2.6-9.4L0 12l9.4-2.6z" />
            </svg>
          </span>
        ))}
      </div>
    </div>
  );
}

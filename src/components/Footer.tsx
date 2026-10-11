import Link from "next/link";
import { Mail, MapPin, Phone, Clock } from "lucide-react";
import { company, contact, links, nav, services } from "@/data/site";
import { LogoMark } from "./Logo";
import { Button, InstagramIcon, LinkedinIcon, WhatsappIcon } from "./ui";
import { Reveal } from "./motion";

export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden bg-ink text-white">
      {/* glow */}
      <div aria-hidden className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[900px] -translate-x-1/2 rounded-full bg-brand/40 blur-[140px]" />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="container-x relative pt-24">
        {/* CTA */}
        <Reveal className="flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 md:flex-row md:items-end">
          <h2 className="max-w-3xl font-display text-5xl font-semibold leading-[0.98] tracking-[-0.04em] md:text-7xl">
            Have a project in mind?{" "}
            <span className="bg-gradient-to-r from-brand-300 via-sky to-white bg-clip-text text-transparent">Let&apos;s make it move.</span>
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button href="/contact">Start a project</Button>
            <Button href={links.whatsapp} external variant="glass" className="!bg-white/10 !text-white !border-white/20">
              WhatsApp us
            </Button>
          </div>
        </Reveal>

        {/* Columns */}
        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <LogoMark className="h-12 w-auto text-white" />
            <p className="mt-6 max-w-sm text-white/60">{company.shortAbout}</p>
            <div className="mt-6 flex gap-3">
              {[
                { href: links.whatsapp, Icon: WhatsappIcon, label: "WhatsApp" },
                { href: links.instagram, Icon: InstagramIcon, label: "Instagram" },
                { href: links.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:-translate-y-1 hover:border-brand hover:bg-brand"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Explore</h3>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className="text-white/75 transition hover:text-white">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Services</h3>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/agency/${s.slug}`} className="text-white/75 transition hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/academy" className="text-white/75 transition hover:text-white">
                  Renzo Academy
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">Contact</h3>
            <ul className="mt-5 space-y-4 text-white/75">
              <li>
                <a href={links.email} className="flex items-start gap-3 transition hover:text-white">
                  <Mail className="mt-0.5 size-4 shrink-0 text-brand-300" /> {contact.email}
                </a>
              </li>
              <li>
                <a href={links.phone} className="flex items-start gap-3 transition hover:text-white">
                  <Phone className="mt-0.5 size-4 shrink-0 text-brand-300" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={links.maps} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 transition hover:text-white">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-brand-300" />
                  <span>{contact.address.slice(1).join(", ")}</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-brand-300" /> {contact.hours}
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Giant wordmark */}
      <div className="relative select-none overflow-hidden">
        <p
          aria-hidden
          className="whitespace-nowrap text-center font-display text-[16.5vw] font-semibold leading-[0.85] tracking-[-0.06em] text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.14)]"
        >
          Renzo Studio
        </p>
      </div>
      <div className="container-x relative flex flex-col justify-between gap-3 border-t border-white/10 py-6 text-sm text-white/45 md:flex-row">
        <p>© {new Date().getFullYear()} Renzo Studio. All rights reserved.</p>
        <p>Animation · Digital Marketing · Hospitality Consulting · Academy</p>
      </div>
    </footer>
  );
}

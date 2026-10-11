import type { Metadata } from "next";
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { LogoMark } from "@/components/Logo";
import { contact, links } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Renzo Studio — WhatsApp, email, Instagram, LinkedIn or the contact form.",
};

const channels = [
  { label: "WhatsApp", value: contact.phone, note: "Fastest reply", href: links.whatsapp, Icon: WhatsappIcon, external: true, featured: true },
  { label: "Email", value: contact.email, note: "We reply within a day", href: links.email, Icon: Mail },
  { label: "Instagram", value: `@${contact.instagram}`, note: "See our latest work", href: links.instagram, Icon: InstagramIcon, external: true },
  { label: "LinkedIn", value: "Renzo Studio", note: "Follow our journey", href: links.linkedin, Icon: LinkedinIcon, external: true },
  { label: "Phone", value: contact.phone, note: contact.hours, href: links.phone, Icon: Phone },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's build something remarkable together."
        highlight="remarkable"
        intro="Whether it's an animated film, a growth campaign, a hotel audit or joining the academy — drop us a message and we'll get back within one business day."
        crumbs={[{ label: "Home", href: "/" }, { label: "Contact" }]}
      />

      <section className="container-x grid gap-6 lg:grid-cols-12">
        {/* Channels */}
        <div className="space-y-6 lg:col-span-5">
          <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1" gap={0.07}>
            {channels.map(({ label, value, note, href, Icon, external, featured }) => (
              <StaggerItem key={label}>
                <a
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 rounded-3xl p-5 transition-all duration-500 hover:-translate-y-0.5 ${
                    featured ? "bg-brand text-white shadow-[0_20px_50px_-20px_rgba(23,61,237,0.8)]" : "glass hover:bg-white"
                  }`}
                >
                  <span
                    className={`grid size-12 shrink-0 place-items-center rounded-2xl transition-transform duration-500 group-hover:scale-110 ${
                      featured ? "bg-white text-brand" : "bg-brand/10 text-brand"
                    }`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className={`text-xs font-semibold uppercase tracking-[0.14em] ${featured ? "text-white/70" : "text-brand"}`}>{label}</p>
                    <p className="truncate font-display text-lg font-semibold tracking-tight">{value}</p>
                    <p className={`text-sm ${featured ? "text-white/70" : "text-ink-soft"}`}>{note}</p>
                  </div>
                  <ArrowUpRight className={`size-5 shrink-0 transition-transform duration-500 group-hover:rotate-45 ${featured ? "" : "text-ink/30 group-hover:text-brand"}`} />
                </a>
              </StaggerItem>
            ))}
          </Stagger>

          {/* Address / map card */}
          <Reveal>
            <a
              href={links.maps}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-50 to-brand-100"
            >
              <div aria-hidden className="absolute inset-0 opacity-60 [background-image:linear-gradient(to_right,rgba(23,61,237,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(23,61,237,0.12)_1px,transparent_1px)] [background-size:28px_28px]" />
              <svg aria-hidden viewBox="0 0 400 220" className="absolute inset-0 h-full w-full" preserveAspectRatio="none">
                <path d="M0 160 C 80 120, 140 190, 220 140 S 340 60, 400 90" fill="none" stroke="rgba(23,61,237,0.25)" strokeWidth="10" />
                <path d="M120 0 C 140 80, 100 140, 160 220" fill="none" stroke="rgba(255,255,255,0.9)" strokeWidth="8" />
              </svg>
              <div className="relative grid h-56 place-items-center">
                <span className="relative grid place-items-center">
                  <span className="absolute size-20 animate-ping rounded-full bg-brand/25" />
                  <span className="relative grid size-14 place-items-center rounded-full bg-brand text-white shadow-xl transition-transform duration-500 group-hover:-translate-y-1">
                    <LogoMark className="h-6 w-auto" />
                  </span>
                </span>
              </div>
              <div className="relative m-3 flex items-start gap-3 rounded-2xl bg-white/85 p-5 backdrop-blur">
                <MapPin className="mt-0.5 size-5 shrink-0 text-brand" />
                <div className="flex-1">
                  <p className="font-semibold">{contact.address[0]}</p>
                  <p className="text-sm text-ink-soft">{contact.address.slice(1).join(", ")}</p>
                  <p className="mt-2 flex items-center gap-1.5 text-xs text-ink-soft">
                    <Clock className="size-3.5" /> {contact.hours}
                  </p>
                </div>
                <span className="text-sm font-semibold text-brand">Directions →</span>
              </div>
            </a>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal className="lg:col-span-7" delay={0.1}>
          <ContactForm />
        </Reveal>
      </section>
    </>
  );
}

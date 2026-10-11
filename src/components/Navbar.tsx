"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, links, contact } from "@/data/site";
import { Logo } from "./Logo";
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from "./ui";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-brand via-brand-400 to-sky"
        style={{ scaleX: progress }}
      />
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-3 z-50 px-3 md:top-5"
      >
        <nav
          className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-3 py-2 pl-5 transition-all duration-500 ${
            scrolled ? "glass-strong" : "border border-transparent bg-transparent"
          }`}
        >
          <Link href="/" aria-label="Renzo Studio home" className="shrink-0">
            <Logo />
          </Link>

          <ul className="hidden items-center gap-1 rounded-full p-1 md:flex">
            {nav.map((item) => (
              <li key={item.href} className="relative">
                <Link
                  href={item.href}
                  className={`relative z-10 block rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                    isActive(item.href) ? "text-white" : "text-ink/70 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive(item.href) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-brand shadow-[0_8px_20px_-8px_rgba(23,61,237,0.8)]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={links.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand md:inline-flex"
            >
              Let&apos;s talk <ArrowUpRight className="size-4" />
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="grid size-11 place-items-center rounded-full bg-ink text-white md:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl md:hidden"
            initial={{ clipPath: "circle(0% at 92% 6%)" }}
            animate={{ clipPath: "circle(150% at 92% 6%)" }}
            exit={{ clipPath: "circle(0% at 92% 6%)" }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-full flex-col justify-between px-6 pb-10 pt-28">
              <ul className="space-y-2">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.07 }}
                  >
                    <Link
                      href={item.href}
                      className={`font-display text-5xl font-semibold tracking-tight ${
                        isActive(item.href) ? "text-brand" : "text-ink"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="space-y-4">
                <a href={links.email} className="block text-lg text-ink-soft">
                  {contact.email}
                </a>
                <div className="flex gap-3">
                  {[
                    { href: links.whatsapp, Icon: WhatsappIcon, label: "WhatsApp" },
                    { href: links.instagram, Icon: InstagramIcon, label: "Instagram" },
                    { href: links.linkedin, Icon: LinkedinIcon, label: "LinkedIn" },
                  ].map(({ href, Icon, label }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className="grid size-12 place-items-center rounded-full bg-brand text-white">
                      <Icon />
                    </a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

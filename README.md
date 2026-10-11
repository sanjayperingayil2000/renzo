# Renzo Studio — Website

Marketing website for **Renzo Studio**: Animation, Digital Marketing, Hospitality Consulting and Renzo Academy.

Built with **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS v4** and **Framer Motion**. All content is static for now (no APIs).

## Run it locally

You need Node.js 18.18 or newer (20+ recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000

Production build:

```bash
npm run build
npm start
```

## Pages

| Route | What's on it |
| --- | --- |
| `/` | Hero, Agency / Academy / Contact buttons, about, stats, services, 6-step process (horizontal scroll), why us, academy teaser, team, footer with contact details |
| `/agency` | Service switcher, selected works (filterable portfolio + project modal), core competencies |
| `/agency/animation` · `/agency/digital-marketing` · `/agency/hospitality-consulting` | About, capabilities, portfolio, how it works |
| `/academy` | What we offer + course tracks, trailer, internships, learning assets, roadmap, FAQ |
| `/contact` | WhatsApp, email, Instagram, LinkedIn, phone, address/map card, contact form |

## Editing content

**Almost everything lives in one file: `src/data/site.ts`.** Look for `// TODO` comments:

- `contact`: email, phone, WhatsApp number, Instagram, LinkedIn, address, hours
- `team`: real names, roles and bios
- `services[].projects`: **these are sample case studies.** Replace them with real work before going live
- `academy.trailer.url`: paste a YouTube embed URL (`https://www.youtube.com/embed/VIDEO_ID`) or a file path such as `/videos/trailer.mp4` (put the file in `public/videos/`). While it's empty, an animated teaser is shown instead.

## Brand

- Primary blue: `#173DED` (from the company deck), defined in `src/app/globals.css` as `--color-brand`
- Logo: `src/components/Logo.tsx` (SVG, inherits colour). Standalone files are in `public/brand/`. The favicon is `src/app/icon.svg`.
- Fonts: Inter + Inter Tight, self-hosted through `@fontsource-variable` (no Google Fonts request needed)

## Project structure

```
src/
  app/            routes (page.tsx per page), layout, global styles
  components/     shared UI (Navbar, Footer, PageHero, motion helpers, ui)
    home/         home page sections
    agency/       service switcher + portfolio
    academy/      tracks, trailer, roadmap, FAQ
    contact/      contact form
  data/site.ts    ALL website content
```

## Next steps (when you're ready)

- Connect the contact form (`src/components/contact/ContactForm.tsx`) to an email service or API route
- Replace the generated project artwork with real images or videos
- Deploy to Vercel: push to GitHub, then import the repository at vercel.com

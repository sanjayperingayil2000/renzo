/**
 * ─────────────────────────────────────────────────────────────
 *  RENZO STUDIO — all website content lives here.
 *  Edit this file to change text, team, contact details, projects, etc.
 *  Anything marked  // TODO  is a placeholder to replace with real info.
 * ─────────────────────────────────────────────────────────────
 */

export const company = {
  name: "Renzo Studio",
  tagline: "Creative digital solutions that grow your brand.",
  shortAbout:
    "Renzo Studio blends animation, digital marketing, advertising and hospitality consulting under one roof — turning visionary concepts into everyday commercial success.",
  about:
    "At Renzo Studio, we blend our multi-disciplinary creative and strategic capabilities across animation, digital marketing, hospitality consulting, and high-impact advertising to engineer extraordinary possibilities. We specialize in turning visionary concepts into everyday commercial success, ensuring your brand stands out, captivates audiences, and performs at peak levels.",
  mission:
    "Fueled by a relentless desire to create lasting impact, we build meaningful experiences that transform how people interact with businesses — and with each other. We actively challenge status-quo norms to elevate how brands communicate, engage, and grow.",
  weAre: [
    ["Creators", "Artists", "Business Strategists"],
    ["Animators", "Visual Designers", "Campaign Managers", "Hospitality Consultants"],
    ["Passionate", "Dedicated", "Results-Driven"],
  ],
  advantage:
    "Renzo bridges the gap between operational excellence, creative storytelling, and digital growth. By integrating hospitality expertise with strategic marketing and high-quality visual communication, we deliver solutions that not only enhance brand presence but also improve business performance and create exceptional customer experiences.",
};

export const contact = {
  // TODO: replace all of these with the real details
  email: "hello@renzostudio.in",
  phone: "+91 98765 43210",
  whatsapp: "919876543210", // digits only, with country code
  instagram: "renzo.studio",
  linkedin: "renzo-studio",
  address: ["Renzo Studio", "2nd Floor, Creative Hub", "Kochi, Kerala 682001", "India"],
  hours: "Mon – Sat · 10:00 AM – 7:00 PM IST",
};

export const links = {
  whatsapp: `https://wa.me/${contact.whatsapp}`,
  email: `mailto:${contact.email}`,
  phone: `tel:${contact.phone.replace(/\s/g, "")}`,
  instagram: `https://instagram.com/${contact.instagram}`,
  linkedin: `https://www.linkedin.com/company/${contact.linkedin}`,
  maps: `https://maps.google.com/?q=${encodeURIComponent(contact.address.join(", "))}`,
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "Agency", href: "/agency" },
  { label: "Academy", href: "/academy" },
  { label: "Contact", href: "/contact" },
];

export const stats = [
  { value: 4, suffix: "", label: "Service verticals under one roof" },
  { value: 120, suffix: "+", label: "Creative & strategy deliverables" },
  { value: 6, suffix: "", label: "Step proven work process" },
  { value: 100, suffix: "%", label: "Focus on measurable results" },
];

export const team = [
  // TODO: replace with the real team
  {
    name: "Arjun Menon",
    role: "Founder & Creative Director",
    bio: "Leads brand vision and creative direction across every Renzo project.",
    initials: "AM",
  },
  {
    name: "Neha Varghese",
    role: "Head of Animation",
    bio: "2D animator and storyboard artist who turns scripts into living worlds.",
    initials: "NV",
  },
  {
    name: "Rahul Nair",
    role: "Digital Marketing Lead",
    bio: "Performance marketer obsessed with funnels, SEO and growth analytics.",
    initials: "RN",
  },
  {
    name: "Ananya Iyer",
    role: "Hospitality Consultant",
    bio: "Former hotel operations manager specialising in audits, SOPs and guest experience.",
    initials: "AI",
  },
];

export const workProcess = [
  {
    title: "Discover",
    text: "Exploring project goals, target audience, brand identity and market requirements before embarking on the journey.",
  },
  {
    title: "Plan & Concept",
    text: "Organising timelines, storyboards, campaign roadmaps and agile production sprints for seamlessly structured execution.",
  },
  {
    title: "Create & Build",
    text: "Developing 2D/3D visual assets, crafting ad copy, setting up marketing funnels and structuring consulting frameworks.",
  },
  {
    title: "Review & QA",
    text: "Continuous testing, creative review and refinement to eliminate flaws and ensure peak production quality.",
  },
  {
    title: "Launch & Deploy",
    text: "Deploying high-impact campaigns, delivering final animated media and launching operational hospitality models.",
  },
  {
    title: "Monitor & Scale",
    text: "Analysing campaign performance and guest metrics to optimise continuously and maximise long-term client success.",
  },
];

export const whyUs = [
  {
    title: "One studio, four disciplines",
    text: "Animation, marketing, advertising and hospitality strategy work together — no hand-offs between agencies.",
  },
  {
    title: "Hospitality DNA",
    text: "Real operational experience in hotels and restaurants means our creative work understands how your business runs.",
  },
  {
    title: "Data-driven creativity",
    text: "Every story we tell and every campaign we run is measured, reported and optimised for growth.",
  },
  {
    title: "Transparent & agile",
    text: "Structured sprints, clear timelines and honest reporting from kickoff to scale.",
  },
];

/* ───────────── Agency services ───────────── */
// TODO: the projects / clients / results below are SAMPLE case studies so the
// layout looks complete. Replace them with Renzo's real work before going live.

export type Project = {
  title: string;
  client: string;
  category: string;
  year: string;
  summary: string;
  result: string;
  hue: number; // used to generate the artwork colour
  pattern: "orbs" | "waves" | "grid" | "rings" | "bars" | "blocks";
};

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: "animation" | "marketing" | "hospitality";
  headline: string;
  intro: string;
  about: string[];
  offerings: { title: string; text: string }[];
  deliverables: string[];
  tools: string[];
  metrics: { value: string; label: string }[];
  projects: Project[];
  works: { step: string; text: string }[];
};

export const services: Service[] = [
  {
    slug: "animation",
    name: "Animation",
    short: "Animation & Visual Storytelling",
    icon: "animation",
    headline: "Stories that move. Literally.",
    intro:
      "High-end 2D/3D animation, motion graphics, visual effects and storyboarding designed to bring complex ideas to life and create unforgettable visual experiences.",
    about: [
      "From a single explainer to a full character-driven series, our animation team handles the entire pipeline — script, storyboard, animatic, design, animation, sound and final delivery.",
      "We craft visuals that simplify complicated ideas, give brands a personality and keep audiences watching until the very last frame.",
    ],
    offerings: [
      { title: "2D Animation", text: "Frame-by-frame and rigged animation with a distinctive, ownable style." },
      { title: "Storyboarding", text: "Shot-by-shot visual plans that lock the story before production begins." },
      { title: "Animatics", text: "Timed, rough-cut previews with voice and music to validate pacing." },
      { title: "Character Design", text: "Memorable mascots and characters built for every platform." },
      { title: "Motion Graphics", text: "Kinetic typography, data-viz and UI animation that feels premium." },
      { title: "Explainer & Promo Videos", text: "Short, punchy films that sell a product or explain a service." },
    ],
    deliverables: ["Brand films", "Explainer videos", "Social reels", "Title sequences", "Product demos", "Animated logos"],
    tools: ["After Effects", "Toon Boom", "Blender", "Illustrator", "Premiere Pro", "Procreate"],
    metrics: [
      { value: "2D / 3D", label: "Production pipeline" },
      { value: "4K", label: "Delivery quality" },
      { value: "10–60s", label: "Social-first cuts" },
    ],
    projects: [
      {
        title: "The Monsoon Journey",
        client: "Spice Route Resorts",
        category: "Brand Film",
        year: "2026",
        summary: "A hand-drawn 2D brand film following a traveller through Kerala's monsoon season.",
        result: "1.2M organic views in the first month",
        hue: 225,
        pattern: "waves",
      },
      {
        title: "Fintech Made Simple",
        client: "PayNest",
        category: "Explainer Video",
        year: "2026",
        summary: "A 90-second explainer turning a complex payments product into a friendly story.",
        result: "38% lift in landing-page conversions",
        hue: 205,
        pattern: "orbs",
      },
      {
        title: "Mascot 'Zippy'",
        client: "QuickBite",
        category: "Character Design",
        year: "2025",
        summary: "A lovable delivery mascot with a full expression sheet and animation rig.",
        result: "Used across 40+ campaigns",
        hue: 232,
        pattern: "rings",
      },
      {
        title: "Launch Day",
        client: "Nova Wearables",
        category: "Motion Graphics",
        year: "2025",
        summary: "Kinetic product-launch reels for Instagram, YouTube and in-store screens.",
        result: "3× average engagement rate",
        hue: 235,
        pattern: "bars",
      },
    ],
    works: [
      { step: "Script & concept", text: "We nail the message and tone in a tight script." },
      { step: "Storyboard & animatic", text: "Visual plan + timed preview you can approve early." },
      { step: "Design & animate", text: "Styleframes, characters and full animation production." },
      { step: "Sound & delivery", text: "Voice, music, SFX and exports for every platform." },
    ],
  },
  {
    slug: "digital-marketing",
    name: "Digital Marketing",
    short: "Digital Marketing & Advertising",
    icon: "marketing",
    headline: "Growth, engineered.",
    intro:
      "Data-driven growth campaigns, SEO architecture, social media management, performance marketing and full-funnel advertising engineered to drive engagement and boost your bottom line.",
    about: [
      "We combine brand strategy with performance marketing. That means content people love and campaigns that pay for themselves.",
      "From positioning and creative direction to media buying and analytics, we run high-conversion content ecosystems that put your brand front and centre.",
    ],
    offerings: [
      { title: "Brand Strategy & Positioning", text: "Find your edge and say it clearly across every channel." },
      { title: "Social Media Management", text: "Content calendars, community management and creator collaborations." },
      { title: "Search Engine Optimisation", text: "Technical SEO, content architecture and local search dominance." },
      { title: "Performance Marketing", text: "Meta, Google and YouTube ads optimised for ROAS, not vanity." },
      { title: "Content Marketing", text: "Reels, blogs, newsletters and campaigns that build authority." },
      { title: "Analytics & Growth Reporting", text: "Clear dashboards and monthly insights you can act on." },
    ],
    deliverables: ["Ad campaigns", "Social calendars", "SEO audits", "Landing pages", "Brand guidelines", "Growth reports"],
    tools: ["Meta Ads", "Google Ads", "GA4", "Search Console", "SEMrush", "Canva / Figma"],
    metrics: [
      { value: "Full-funnel", label: "Awareness → conversion" },
      { value: "Monthly", label: "Growth reporting" },
      { value: "ROAS", label: "Optimised spend" },
    ],
    projects: [
      {
        title: "Weekend Getaways",
        client: "Backwater Bay Hotel",
        category: "Performance Marketing",
        year: "2026",
        summary: "A Meta + Google campaign targeting weekend travellers from nearby metros.",
        result: "4.6× return on ad spend",
        hue: 220,
        pattern: "bars",
      },
      {
        title: "From Zero to Local Hero",
        client: "Brew & Bean Café",
        category: "SEO & Local Search",
        year: "2026",
        summary: "Local SEO and Google Business optimisation for a new café chain.",
        result: "#1 in local search for 12 keywords",
        hue: 200,
        pattern: "grid",
      },
      {
        title: "Rebrand Rollout",
        client: "UrbanNest Realty",
        category: "Brand Strategy",
        year: "2025",
        summary: "New positioning, visual identity and a 90-day social launch plan.",
        result: "+210% Instagram followers",
        hue: 228,
        pattern: "blocks",
      },
      {
        title: "Festive Season Push",
        client: "Kaveri Silks",
        category: "Advertising",
        year: "2025",
        summary: "Full-funnel festive ad campaign across Meta, YouTube and print.",
        result: "2.8× festive revenue vs last year",
        hue: 230,
        pattern: "orbs",
      },
    ],
    works: [
      { step: "Audit", text: "Deep dive into your brand, competitors and current channels." },
      { step: "Strategy", text: "Positioning, audience personas and a channel roadmap." },
      { step: "Launch", text: "Creative production, campaign setup and go-live." },
      { step: "Optimise", text: "Weekly tweaks, A/B tests and transparent monthly reports." },
    ],
  },
  {
    slug: "hospitality-consulting",
    name: "Hospitality Consulting",
    short: "Hotel Management Auditing & Consulting",
    icon: "hospitality",
    headline: "Better operations. Happier guests.",
    intro:
      "Operational optimisation, luxury brand positioning, guest experience design and spatial strategy tailored specifically for hotels, restaurants and leisure venues.",
    about: [
      "We combine strategic consulting, creative excellence and digital innovation to help hospitality brands strengthen their operations, elevate guest experiences and achieve sustainable business growth.",
      "Our consultants have worked inside hotels — so our audits are practical, our SOPs get used, and our recommendations show up in your reviews and revenue.",
    ],
    offerings: [
      { title: "Operational Audits", text: "Department-by-department performance evaluation with a clear action plan." },
      { title: "Guest Experience Enhancement", text: "Journey mapping and service design from booking to checkout." },
      { title: "SOP Development", text: "Practical standard operating procedures and training material." },
      { title: "Housekeeping & Facility Ops", text: "Efficiency, hygiene standards and maintenance planning." },
      { title: "Service Quality & Brand Standards", text: "Mystery audits and brand-standard compliance programmes." },
      { title: "Pre-opening Support", text: "Staffing, systems, SOPs and launch marketing for new properties." },
    ],
    deliverables: ["Audit reports", "SOP manuals", "Training modules", "Guest journey maps", "Brand standards", "Pre-opening plans"],
    tools: ["Mystery audits", "Guest surveys", "Review analytics", "PMS reporting", "Staff workshops", "KPI dashboards"],
    metrics: [
      { value: "360°", label: "Operational audits" },
      { value: "SOPs", label: "That teams actually use" },
      { value: "Pre-opening", label: "To steady state" },
    ],
    projects: [
      {
        title: "Heritage Revival",
        client: "The Fort Residency",
        category: "Operational Audit",
        year: "2026",
        summary: "A full operational audit and service redesign for a 48-room heritage hotel.",
        result: "Guest rating up from 4.1 to 4.7",
        hue: 215,
        pattern: "rings",
      },
      {
        title: "Opening Night",
        client: "Azure Bay Boutique Hotel",
        category: "Pre-opening Support",
        year: "2025",
        summary: "SOPs, team training and launch plan for a new boutique property.",
        result: "Opened on schedule, 82% occupancy in month 3",
        hue: 226,
        pattern: "blocks",
      },
      {
        title: "Housekeeping Reset",
        client: "Greenleaf Resorts",
        category: "Facility Operations",
        year: "2025",
        summary: "Re-engineered housekeeping workflows across three resort properties.",
        result: "22% faster room turnaround",
        hue: 210,
        pattern: "grid",
      },
      {
        title: "Signature Dining",
        client: "Saffron Table",
        category: "Guest Experience",
        year: "2026",
        summary: "Guest-journey mapping and service standards for a fine-dining restaurant.",
        result: "+35% repeat guests in six months",
        hue: 228,
        pattern: "waves",
      },
    ],
    works: [
      { step: "On-site audit", text: "We observe, measure and interview across every department." },
      { step: "Diagnosis", text: "A clear report of gaps, risks and quick wins." },
      { step: "Implementation", text: "SOPs, training and brand standards rolled out with your team." },
      { step: "Follow-up", text: "Re-audits and KPI tracking to make results stick." },
    ],
  },
];

export const extraService = {
  name: "Advertising & Brand Strategy",
  text: "Full-funnel ad campaigns, creative direction, media strategy and high-conversion content ecosystems that position your brand front and centre.",
};

export const competencies = [
  {
    title: "Business Strategy",
    items: [
      "Market research & competitor analysis",
      "Business growth planning",
      "Customer journey mapping",
      "Brand positioning",
      "Process improvement",
      "Strategic advisory",
    ],
  },
  {
    title: "Creative & Brand Development",
    items: [
      "Brand identity design",
      "Visual communication",
      "Website design",
      "Marketing collateral",
      "Corporate presentations",
      "Brand guidelines",
    ],
  },
];

/* ───────────── Academy ───────────── */

export const academy = {
  headline: "Learn from the studio. Build for the real world.",
  intro:
    "Renzo Academy is where working professionals teach the craft behind our agency — animation, digital marketing and hospitality management — through live projects, mentorship and paid internships.",
  trailer: {
    title: "Inside Renzo Academy",
    duration: "1:24",
    // TODO: put a YouTube embed URL here (e.g. https://www.youtube.com/embed/VIDEO_ID)
    // or a file in /public (e.g. "/videos/trailer.mp4"). Leave empty to show the teaser.
    url: "",
  },
  tracks: [
    {
      icon: "animation" as const,
      title: "Animation & Visual Storytelling",
      duration: "16 weeks",
      level: "Beginner → Pro",
      format: "Hybrid · Weekend batches",
      modules: [
        "Principles of animation",
        "Storyboarding & animatics",
        "Character design",
        "2D animation in Toon Boom / After Effects",
        "Motion graphics",
        "Showreel & portfolio project",
      ],
    },
    {
      icon: "marketing" as const,
      title: "Digital Marketing & Advertising",
      duration: "12 weeks",
      level: "Beginner → Intermediate",
      format: "Online + live sessions",
      modules: [
        "Brand strategy & positioning",
        "Social media marketing",
        "SEO & content marketing",
        "Meta & Google Ads",
        "Analytics with GA4",
        "Live client campaign",
      ],
    },
    {
      icon: "hospitality" as const,
      title: "Hospitality Management & Auditing",
      duration: "10 weeks",
      level: "Students & professionals",
      format: "Classroom + on-site visits",
      modules: [
        "Hotel operations fundamentals",
        "Front office & guest experience",
        "Housekeeping & facility management",
        "SOP writing",
        "Conducting operational audits",
        "Capstone audit of a real property",
      ],
    },
  ],
  offer: [
    { title: "Live client projects", text: "Work on real briefs from Renzo's agency clients — not dummy assignments." },
    { title: "1:1 mentorship", text: "Weekly reviews with the animators, marketers and consultants who run our studio." },
    { title: "Industry certification", text: "A Renzo Academy certificate backed by a portfolio that proves your skills." },
    { title: "Placement support", text: "Portfolio reviews, mock interviews and introductions to our partner network." },
  ],
  internships: [
    {
      title: "Animation Intern",
      type: "Paid · 3 months",
      mode: "On-site / Hybrid",
      text: "Assist on storyboards, cleanup and motion graphics for live client films.",
    },
    {
      title: "Digital Marketing Intern",
      type: "Paid · 3 months",
      mode: "Remote / Hybrid",
      text: "Plan content calendars, run ad experiments and build performance reports.",
    },
    {
      title: "Hospitality Audit Intern",
      type: "Stipend · 2 months",
      mode: "On-site visits",
      text: "Join our consultants on real hotel audits and help draft SOPs.",
    },
  ],
  assets: [
    { title: "Animation Starter Kit", type: "Templates", text: "Storyboard sheets, timing charts and character turnaround templates." },
    { title: "Social Media Playbook", type: "PDF Guide", text: "Content pillars, posting frameworks and caption formulas that work." },
    { title: "SEO Checklist", type: "Checklist", text: "A 60-point technical and on-page SEO checklist used by our team." },
    { title: "Hotel Audit Toolkit", type: "Workbook", text: "Department audit sheets, scoring rubrics and report templates." },
    { title: "SOP Template Library", type: "Templates", text: "Ready-to-adapt SOPs for front office, housekeeping and F&B." },
    { title: "Masterclass Recordings", type: "Video", text: "On-demand sessions from studio leads and guest experts." },
  ],
  roadmap: [
    { phase: "Week 0", title: "Apply & onboard", text: "Short application, a friendly call and access to the learning portal." },
    { phase: "Phase 1", title: "Foundations", text: "Core concepts, tools and daily practice with mentor feedback." },
    { phase: "Phase 2", title: "Specialise", text: "Deep-dive modules in your chosen track with weekly assignments." },
    { phase: "Phase 3", title: "Live projects", text: "Work on real client briefs inside the Renzo studio workflow." },
    { phase: "Phase 4", title: "Portfolio & certify", text: "Polish your showreel or case studies and earn your certificate." },
    { phase: "Launch", title: "Internship & career", text: "Top performers join paid internships or get placed with partners." },
  ],
  faq: [
    {
      q: "Do I need prior experience to join?",
      a: "No. Every track starts with foundations. A laptop, curiosity and consistency are all you need — we'll take care of the rest.",
    },
    {
      q: "Are classes online or offline?",
      a: "It depends on the track. Digital Marketing is online with live sessions, Animation is hybrid with weekend batches, and Hospitality includes classroom sessions plus on-site hotel visits.",
    },
    {
      q: "Will I get a certificate?",
      a: "Yes. On completing your track and capstone project you receive a Renzo Academy certificate, along with a portfolio you can show employers.",
    },
    {
      q: "How do internships work?",
      a: "Top learners from each batch are offered paid internships inside the Renzo agency. Others receive placement support through our partner network.",
    },
    {
      q: "What are the fees and is there an EMI option?",
      a: "Fees vary by track. Flexible instalment plans are available. Contact us on WhatsApp or the contact form for the current batch fees.",
    },
    {
      q: "When does the next batch start?",
      a: "New batches start every quarter. Reach out and we'll share the next start date and remaining seats.",
    },
  ],
};

export const marqueeWords = [
  "2D Animation",
  "Motion Graphics",
  "Storyboarding",
  "Brand Strategy",
  "Performance Marketing",
  "SEO",
  "Social Media",
  "Hotel Audits",
  "Guest Experience",
  "SOP Development",
  "Advertising",
  "Pre-opening Support",
];

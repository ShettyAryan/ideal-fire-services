# Ideal Fire Services — Website

A professional multi-page website for Ideal Fire Services, built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, Stats, About snapshot, Services grid, Why Choose Us, Marquee, CTA |
| `/about` | About Us — Company overview, Mission/Vision, Growth timeline, Values, Team |
| `/services` | Services — Installation, Extinguishers, Alarm Systems, AMC deep-dive |
| `/projects` | **Our Projects** — Filterable masonry grid with 9 showcase projects |
| `/contact` | Contact — Form with validation, FAQ accordion, Map section |

## Design System

- **Font**: Barlow Condensed (display/headings) + DM Sans (body)
- **Primary Color**: `#c20000` (deep red)
- **Background**: `#f8f5f5` (warm off-white) / `#0f0505` (near-black dark)
- **Radius**: rounded-xl / rounded-2xl throughout

## Animations

- **Scroll reveal**: `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale` classes — triggered by IntersectionObserver in `useScrollReveal` hook
- **Stagger delays**: `.delay-100` through `.delay-500`
- **Animated counter** (Home stats section)
- **CSS marquee** (client logo strip)
- **Project card hover**: image zoom + overlay fade + tag reveal
- **Navbar**: scroll-aware background + mobile slide-in drawer
- **Cursor glow** (desktop only, Home page)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build

```bash
npm run build
npm start
```

## Project Structure

```
ideal-fire/
├── components/
│   ├── Navbar.tsx         # Sticky nav with mobile drawer
│   ├── Footer.tsx         # Dark footer with links
│   └── useScrollReveal.ts # IntersectionObserver hook
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── index.tsx          # Home
│   ├── about.tsx          # About Us
│   ├── services.tsx       # Services
│   ├── projects.tsx       # Our Projects (new)
│   └── contact.tsx        # Contact
├── styles/
│   └── globals.css        # Tailwind + custom animations
├── tailwind.config.js
├── next.config.js
└── tsconfig.json
```

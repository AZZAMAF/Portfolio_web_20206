# PRD: Azzam Portfolio Website

**Owner:** Abdullah Azzam Firdaus (Azzam) | **Status:** Draft v0.1 | **Stack:** React.js

## 1. Overview

A single-page personal portfolio for Abdullah Azzam Firdaus, a web developer and visual designer from Serang, Indonesia. The site presents his design and front-end skills, certificates, experience, and projects, and drives visitors to contact him. The visual design is already made in Figma (maroon, cream, and yellow palette with an editorial serif look). This PRD defines what to build, in what order, and what "done" means.

## 2. Goals and Non-Goals

### Goals

- Show Azzam as a designer who also ships code: Figma to responsive React interface.
- Give recruiters, clients, and schools a fast path to contact him (email, WhatsApp, LinkedIn).
- Showcase real projects and certificates as proof, not template filler.
- Be fast, responsive, and accessible, and double as a live example of his React skills.

### Non-Goals (v1)

- No blog or CMS.
- No user accounts or admin dashboard.
- No multi-language toggle (English only in v1).
- No e-commerce or payment features.

## 3. Target Audience

| Audience | What they want | What the site must deliver |
| --- | --- | --- |
| Recruiters and hiring managers | Quick proof of skills and experience | Clear About, skills, experience, CV download |
| Freelance clients | Past work and an easy way to talk | Portfolio grid, "Let's Talk" CTA |
| Schools and academies | Teaching and mentoring background | Experience and certificates |
| Collaborators and peers | Style and technical level | Clean design, working code, GitHub link |

## 4. Success Metrics

| Metric | Target |
| --- | --- |
| Lighthouse Performance (mobile) | 90+ |
| Lighthouse Accessibility | 95+ |
| Lighthouse SEO | 95+ |
| Contact form or email click-through rate | Tracked from launch |
| Layout works with no horizontal scroll | 360px to 1440px+ |
| All placeholder text from template removed | 100% |

## 5. Information Architecture

Single page with anchor navigation. Section order, top to bottom:

1. Navbar (sticky)
2. Hero
3. Marquee ticker
4. About
5. Services (3 cards)
6. Certificates
7. Experience
8. Portfolio
9. Contact CTA
10. Footer

**Navbar items:** Home, About, Service, Project, Experience, Contact (plus Certificates if space allows). Center logo: "Azzam \[logo\] Firdaus" with the AAF mark.

## 6. Functional Requirements by Section

### 6.1 Navbar

- Pill-shaped, maroon, sticky at the top.
- Click scrolls smoothly to the section; active item highlights based on scroll position.
- Mobile (under 768px): collapses into a hamburger menu with a full-width dropdown.
- Keyboard accessible, with a visible focus state and a "Skip to content" link.

### 6.2 Hero

- Large heading "I'm Azzam" in the display serif, with the portrait photo (transparent PNG) layered over a circle drawn as an inline SVG.
- Circle SVG sits behind the photo; subtle entrance animation (scale and fade), disabled under `prefers-reduced-motion`.
- Decorative four-point star accent.
- "Let's Talk" outline button scrolls to Contact.
- Replace the template badge "3 Years Experience" and the testimonial line with content Azzam can back up (see Open Questions).

### 6.3 Marquee Ticker

- Tilted maroon band with looping text: WEB DEV, WEB DESIGN, UI/UX, DEPLOYMENT.
- Pure CSS animation (no library); pauses on hover; static under reduced motion.

### 6.4 About

**Copy (approved):**

> I'm Abdullah Azzam Firdaus, a web developer and visual designer from Serang. I turn ideas into clean, responsive interfaces, from Figma designs to working code in React, with a focus on usability and consistent visual storytelling.

### 6.5 Services (3 cards)

| Card | Copy (draft) |
| --- | --- |
| 01 Design | UI/UX, posters, and social media visuals built in Figma, from typography and auto layout to components and variants. Designed the Petingemil brand interface. |
| 02 Frontend | Responsive interfaces with HTML5, CSS3, JavaScript (ES6+), and React.js, turning Figma designs into clean, mobile-first pages. |
| 03 Coaching | Taught Design Fundamentals at SMP IT Darajatul Ashfad, mentored students on app interfaces, and ran a one-week UI/UX and front-end workshop. |

- The middle card uses the active (maroon) style; hovering any card applies the active style to it.
- "See more" link scrolls to the related Experience entry.

### 6.6 Certificates

- Placed directly below About and Services, before Experience.
- Label: "— CREDENTIALS". Heading: "My Certificates". Subtext: "Proof of the skills I've built, from design fundamentals to front-end development."
- Layout: grid of cream cards (or horizontal slider if there are more than 6). Layout choice is pending (see Open Questions).
- Each card: certificate image, title, issuer, year, optional credential link.
- Clicking a card opens a lightbox/modal with the full image; closes with Escape, the close button, or a click outside; focus is trapped while open.
- Content comes from the `certificates` array in `data/content.js`. **No certificates are listed in the CV yet; Azzam must supply them.**

### 6.7 Experience

- Label "— CAREER PATH", heading "Experience".
- Slider with photo on the left and text on the right; indicator bars below; arrows and swipe supported on mobile.
- Entries, based on the CV:

| Entry | Source in CV |
| --- | --- |
| Teaching: Design Fundamentals, SMP IT Darajatul Ashfad | Guided students on core design principles, visual communication, and practical design techniques |
| Social Media Manager and Designer, PT Beonet | Content creation and visual branding to boost engagement and online presence |
| Mentoring: Application Interfaces | Component-based thinking, user interaction flow, simple front-end logic via hands-on projects |
| Workshop: UI/UX and Front-End Implementation | One-week workshop on layout structure, responsive design, and the Figma-to-interface workflow |

- Each entry needs a photo and a date range. Only "2022 to 2023" for Teaching exists in the template; the other dates are missing.

### 6.8 Portfolio

- Heading "Let's have a look at my portfolio" with a decorative star graphic.
- Filter chips: All, Web Design, Landing Page, Poster, Website. The active chip is filled maroon.
- Grid: 4 columns on desktop, 2 on tablet, 1 on mobile. Cards use the yellow style with a project mockup and a circular ↗ button.
- Filtering is client-side with a short transition.
- Each card links to a case study page, live site, or Figma/GitHub link.
- Replace the 8 identical "ineTrade" template cards with real projects: Peti Ngemil (UI/UX), E-Commerce visual assets and front-end, posters, and others to be added.

### 6.9 Contact CTA

- Heading: "Have an Awesome Project Idea? Let's Discuss" (fix the "Awsome" typo).
- Email input with submit button. Submissions go to a form service (Formspree or EmailJS), with client-side validation, loading, success, and error states.
- Remove the unverifiable stats ("4.9/5 Average Ratings", "25+ Winning Awards", "Certified Product Designer") or replace them with true ones.

### 6.10 Footer

- Heading "Let's Connect" with a "Hire me ↗" button.
- Left: AAF logo, short bio, social icons (LinkedIn, GitHub, Instagram, and others as applicable).
- Navigation links; contact details: aafazzam@gmail.com, +6281319329015, LinkedIn URL.
- Newsletter field "Get the latest information": keep only if there is a real mailing list; otherwise remove.
- Copyright: "© 2026 Abdullah Azzam Firdaus. All rights reserved." Remove "Jayesh" and the `+91` number from the template.

## 7. Design System

Values are approximate from the Figma screenshot and should be verified in Figma.

### Tokens

| Token | Value |
| --- | --- |
| `--color-primary` | `#7A2230` (maroon) |
| `--color-surface` | `#FBF3E2` (cream) |
| `--color-accent` | `#FDB600` (yellow) |
| `--color-ink` | `#2D3A5C` (navy) |
| `--font-display` | Playfair Display |
| `--font-body` | Urbanist or Outfit |
| `--radius-pill` | 999px |
| `--radius-card` | 20px |

### Reusable Components

`Navbar`, `Hero`, `Marquee`, `SectionTitle`, `Button` (primary, outline, ghost), `ServiceCard`, `CertificateCard`, `Lightbox`, `ExperienceSlider`, `FilterChips`, `ProjectCard`, `ContactCTA`, `Footer`.

Each component supports the states default, hover, focus-visible, and disabled where relevant.

## 8. Technical Requirements

| Area | Decision |
| --- | --- |
| Framework | React 18 with Vite |
| Language | JavaScript (ES6+); TypeScript optional later |
| Styling | CSS variables for tokens plus CSS Modules (or Tailwind if preferred) |
| Routing | Single page with anchor scroll; React Router only if case-study pages are added |
| Animation | CSS first; Framer Motion only if needed |
| Forms | Formspree or EmailJS |
| Content | All copy and data in `src/data/content.js` so text never lives inside components |
| Version control | Git and GitHub |
| Hosting | Vercel or Netlify (free tier), with a custom domain optional |
| Analytics | Optional: Plausible or Google Analytics |

### Folder Structure

```
src/
  styles/tokens.css
  data/content.js
  components/
  assets/ (hero photo, circle SVG, certificates, project images)
  App.jsx
```

## 9. Non-Functional Requirements

- **Responsive:** mobile-first; breakpoints at 480, 768, 1024, and 1280px.
- **Performance:** images in WebP/AVIF with lazy loading and explicit width/height; total page weight under 2 MB on first load; fonts preloaded with `font-display: swap`.
- **Accessibility (WCAG 2.1 AA):** semantic landmarks; text contrast of 4.5:1 or better (verify cream-on-maroon and maroon-on-cream); alt text on every image; keyboard-reachable controls; `aria-label` on icon-only buttons; reduced-motion support.
- **SEO:** unique title and meta description, Open Graph image, semantic headings (one H1), `sitemap.xml` and `robots.txt`.
- **Browser support:** latest two versions of Chrome, Safari, Firefox, and Edge; iOS Safari and Android Chrome.

## 10. Content Inventory

| Item | Status |
| --- | --- |
| About paragraph | Done |
| Service card copy | Draft, needs review |
| Hero photo (transparent PNG) | Provided |
| Hero circle SVG | Provided |
| Certificates (names, issuers, years, images) | **Missing** |
| Experience photos and date ranges | **Missing** (except Teaching) |
| Project mockups and links | **Missing** (only template cards exist) |
| CV PDF for download | Provided (consider an updated version) |
| Social links (GitHub, Instagram, etc.) | **Missing** |
| Hero tagline or testimonial | Needs a real replacement |

## 11. Milestones

| Phase | Scope | Output |
| --- | --- | --- |
| 1. Setup | Vite project, tokens, fonts, folder structure, `content.js` | Empty shell that runs |
| 2. Core sections | Navbar, Hero, Marquee, About, Services | Top half of the page |
| 3. Content sections | Certificates, Experience, Portfolio with filter | Full page with real data |
| 4. Contact and Footer | Form integration, footer, social links | Complete page |
| 5. Polish | Responsive pass, accessibility, performance, SEO | Lighthouse targets met |
| 6. Launch | Deploy, domain, analytics | Live URL |

## 12. Risks and Mitigations

| Risk | Mitigation |
| --- | --- |
| Missing content delays launch | Build with clearly marked sample data; swap in real content later |
| Unverifiable claims make the site look like a template | Remove or replace every stat and testimonial before launch |
| Large hero and project images hurt performance | Compress and convert to WebP; lazy load below the fold |
| Maroon and cream contrast fails accessibility | Test colors early and adjust token values if needed |
| Scope creep (blog, dark mode, i18n) | Keep v1 non-goals firm; list ideas in a backlog |

## 13. Open Questions

1. Which certificates does Azzam have (title, issuer, year, image)?
2. Certificates layout: grid (3 to 6 items) or slider (7 or more)?
3. What replaces "3 Years Experience" and the testimonial in the Hero?
4. Date ranges and photos for each Experience entry?
5. Which real projects go into the Portfolio, and do any need full case-study pages?
6. Is there a real newsletter, or should the "Get the latest information" field be removed?
7. Should a downloadable CV button be added to the Hero or Navbar?
8. Custom domain or free subdomain (for example `azzam.vercel.app`)?

## 14. Future Ideas (Post-v1)

- Indonesian and English language toggle.
- Dark mode.
- Case-study pages for each project.
- Simple blog or notes section.

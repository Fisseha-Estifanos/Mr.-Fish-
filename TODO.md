# MR. FISH 🦈 — MASTER TODO
## Website Build Tracker

Reference files:
- `FULL WEBSITE.txt` — all website copy, section by section
- `DESIGN_SPEC.md` — full design system, component specs, tech stack, file structure

Mark tasks done with `[x]`. Add notes inline with `<!-- note -->` where needed.

---

## PHASE 0 — DESIGN SPEC ✅
- [x] Create DESIGN_SPEC.md covering color system, typography, spacing, component library, animation system, tech stack, file structure, and content data structures

---

## PHASE 1 — CONTENT ✅ (partially complete — see notes)

- [x] **1.1** Professional history sourced from GitHub, Google Sites, scraped public profiles
  - [x] Career timeline entries — 4 roles written (`data/timeline.ts`)
  - [x] Education cards — 2 entries written (`data/education.ts`)
  - [x] Featured project case studies — 5 projects written (`data/projects.ts`)
  - [x] History page professional bio section added (`/history` page)
  - [ ] LinkedIn export not yet received — update when available

- [x] **1.2** Site-wide placeholder variables:
  - [x] Email — `fisseha.137@gmail.com`
  - [x] WhatsApp — `251921307745`
  - [x] LinkedIn — `linkedin.com/in/fisseha-estifanos-109ba6199/`
  - [x] GitHub — `github.com/Fisseha-Estifanos`
  - [x] Medium — `medium.com/@rasfish5`
  - [x] Domain — `fish.pro.et`
  - [x] Twitter / X handle — `@fish0_16` → `x.com/fish0_16`
  - ~~Instagram~~ — removed from site
  - ~~YouTube~~ — removed from site
  - [ ] Calendly URL — **to be added** (currently empty string fallback)

- [x] **1.3** History page bio section written — origin (AAiT) → ICare roles → 10 Academy → Mr. Fish launch → current AI/RAG focus

- [x] **1.4** Career timeline written (`data/timeline.ts`) — 4 chronological entries

- [x] **1.5** Education & credential cards written (`data/education.ts`)

- [x] **1.6** 5 project case study cards written (`data/projects.ts`) in NDA-safe, business-impact language

- [x] **1.7** Skills & Tech Stack finalised — removed unconfirmed tools (Tableau, Power BI, Looker, D3.js, Metabase, Redis, GraphQL, BigQuery, PyTorch); added Generative AI & LLMs category as primary

- [x] **1.8** Stat strip set to conservative values: 10+ Projects, 5+ Clients, 5+ Industries, 100% Direct Senior Access

---


> ✅ **Built:** Next.js 16 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion.
> All pages scaffold complete and building cleanly. Awaiting Phase 1 content to populate /history page.
> Social icons: custom inline SVGs (LinkedIn not in @icons-pack — resolved with SocialIcons.tsx component).

## PHASE 2 — PROJECT SETUP ✅

- [x] **2.1** Initialise Next.js 14 project with App Router, TypeScript, Tailwind CSS v3, and ESLint
  ```bash
  npx create-next-app@latest mr-fish --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*"
  ```

- [x] **2.2** Configure `tailwind.config.ts` with all brand design tokens from DESIGN_SPEC.md — color palette, font families, spacing scale, border-radius, box-shadow presets

- [x] **2.3** Set up `styles/globals.css` — Tailwind directives, CSS custom properties (all `--color-*` tokens), keyframe animations (pulse-ring, slide-in-fab, fade-up, stagger variants)

- [x] **2.4** Configure `lib/fonts.ts` — next/font setup for Clash Display (local/fontshare), Cabinet Grotesk (local/fontshare), Inter (Google), JetBrains Mono (Google)

- [x] **2.5** Install all dependencies:
  - `framer-motion` — scroll animations
  - `lucide-react` — UI icons
  - `react-simple-icons` (or `@icons-pack/react-simple-icons`) — social brand icons
  - `react-hook-form` + `zod` — form validation
  - `resend` — email delivery
  - `next-sitemap` — sitemap + robots.txt generation
  - `@vercel/og` — dynamic OG image generation (built into Next.js 14)

- [x] **2.6** Create `lib/constants.ts` — single source of truth for all site config: domain, social URLs, WhatsApp link (built from number), Calendly URL, email, nav links array

- [x] **2.7** Create `lib/animations.ts` — Framer Motion variant library: `fadeUp`, `fadeIn`, `staggerContainer`, `staggerChild`, `slideInLeft`, `slideInRight` — all with `prefers-reduced-motion` fallbacks

- [x] **2.8** Scaffold all data files in `/data/` with TypeScript interfaces and placeholder arrays:
  - `data/services.ts`
  - `data/timeline.ts`
  - `data/education.ts`
  - `data/projects.ts`
  - `data/skills.ts`
  - `data/testimonials.ts`
  - `data/faq.ts`

- [x] **2.9** Create full file/folder structure as defined in DESIGN_SPEC.md Section 15 — create all page routes, component folders, and index files

- [x] **2.10** Set up `app/layout.tsx` — root layout with: font class injection, Navbar, Footer, WhatsAppFAB, global metadata defaults, GA4 script placeholder

---

## PHASE 3 — GLOBAL COMPONENTS ✅

- [x] **3.1** Build `components/layout/Navbar.tsx`
  - Sticky top, `backdrop-blur`, `bg-surface/85`
  - Logo/brand name left (Clash Display, links to `/`)
  - Nav links centre: Services | History | About | Work With Me | FAQ | Contact | Blog
  - Right: social icons row (LinkedIn, GitHub, X, Instagram, YouTube) + WhatsApp pill CTA button
  - Active link state: accent color + optional bottom border
  - Scroll > 50px: slightly more opaque border-bottom
  - Mobile: hamburger → full-screen overlay with stacked links + social icons + WhatsApp button

- [x] **3.2** Build `components/layout/Footer.tsx`
  - Brand tagline
  - Navigation link columns
  - Full social icons block with platform label and description (per FULL WEBSITE.txt Section 12)
  - Legal links (Privacy Policy, Terms of Service, Cookie Policy)
  - SEO copy paragraph (keyword-dense, small text)
  - Copyright line

- [x] **3.3** Build `components/layout/WhatsAppFAB.tsx`
  - Fixed bottom-right, z-50, 56px circle (52px mobile)
  - `#25D366` green with CSS pulse ring animation
  - Slide-in from bottom after 2.5s delay on page load
  - Hover: scale 1.08 + tooltip appears ("Chat with Mr. Fish on WhatsApp →")
  - Tooltip subtext: "Typically replies within a few hours."
  - `href`: `wa.me/[NUMBER]?text=Hi%20Mr.%20Fish%2C%20I%27d%20like%20to%20discuss%20a%20project.`
  - aria-label: "Chat with Mr. Fish on WhatsApp"
  - Visible on every page via root layout

- [x] **3.4** Build reusable UI primitives in `components/ui/`:
  - `Button.tsx` — primary / secondary / ghost variants, size props, loading state
  - `SectionLabel.tsx` — eyebrow text, JetBrains Mono, accent color, optional left rule
  - `TagPill.tsx` — tech / category / segment variants
  - `StatStrip.tsx` — responsive stat row with number, label, dividers
  - `ServiceCard.tsx` — icon, title, tagline, body, benefit checklist, ideal-for tags, CTA
  - `TestimonialCard.tsx` — quote, accent left border, name, title, company, tag pills
  - `ComparisonBlock.tsx` — title, copy, differentiation tag pill
  - `TimelineCard.tsx` — year range, role, company, achievements, tech tags
  - `PricingCard.tsx` — title, tagline, description, checklist, best-for, CTA, optional featured state
  - `ProjectCard.tsx` — category tag, challenge, solution, result, stack pills, expand link
  - `EducationCard.tsx` — credential name, institution, year, relevance note
  - `FAQAccordion.tsx` — accessible, aria-expanded, keyboard navigable, accent border on open

---

## PHASE 4 — HOMEPAGE (/) ✅

- [x] **4.1** Build `components/sections/home/Hero.tsx`
  - Full-screen (min-h-screen), centered text layout
  - Subtle radial accent glow background
  - Optional: low-opacity data grid SVG pattern
  - Staggered Framer Motion fade-up on load: eyebrow → H1 → subheadline → body → CTAs → social row → scroll indicator
  - Primary CTA: "Book a Free 30-Minute Strategy Call"
  - Secondary CTA text link: "Explore What I Build →"
  - Social proof micro-copy below CTAs
  - Social icon row (LinkedIn, GitHub, X, Instagram, YouTube)
  - Scroll indicator arrow at bottom

- [x] **4.2** Build `components/sections/home/TrustStrip.tsx`
  - Eyebrow: "Areas of Deep Expertise"
  - Horizontally scrolling marquee on mobile, pill grid on desktop
  - Tech tags pulled from `data/skills.ts` (top-level set)
  - Stat strip below: X+ Projects | X+ Clients | X Industries | 100% Direct Access
  - Micro-copy: "No junior hand-offs. No account managers. You get me, every time."

- [x] **4.3** Build `components/sections/home/ValueProp.tsx`
  - Section label: "Why Mr. Fish"
  - H2: "One Expert Who Sees the Entire Chessboard."
  - Subheadline + body copy (from FULL WEBSITE.txt Section 3)
  - Three-column card grid: End-to-End Architecture | Data Turned Into Decisions | Strategic Consulting Rigor
  - Each card: Lucide icon (accent), title, body copy
  - Secondary CTA row at bottom

- [x] **4.4** Build `components/sections/home/ProblemSolution.tsx`
  - Section label: "The Problem"
  - H2 headline
  - Three audience problem blocks: Startup Founder | CTO | Agency
  - Desktop: full 3-panel horizontal layout
  - Mobile: tabbed or accordion — one panel visible at a time
  - Each block: H3 problem, problem copy, solution response copy
  - Transition CTA at bottom

- [x] **4.5** Build `components/sections/home/ServicesPreview.tsx`
  - Section label: "What I Build"
  - H2 headline
  - 5 service teaser cards (condensed from full service cards) — icon, title, tagline, one-line benefit
  - "See All Services →" link at bottom
  - Discovery call CTA below

- [x] **4.6** Build `components/sections/home/Testimonials.tsx`
  - Section label: "Results That Speak"
  - H2 headline + intro copy
  - Three testimonial cards (content from `data/testimonials.ts`)
  - Metrics bar (from stat strip data)
  - "As Featured In" placeholder logo strip
  - Mobile: horizontal scroll carousel; Desktop: 3-column grid

- [x] **4.7** Build `components/sections/home/WhyNotAlternatives.tsx`
  - Section label: "Why Not Just..."
  - H2: "You've Had the Other Options. Here's Why They Didn't Work."
  - Intro copy
  - Four comparison blocks: Agency | Freelancers | No-Code | Full-Time Hire
  - Each: H3, copy, differentiation tag pill (green)
  - Transition CTA

- [x] **4.8** Assemble `app/page.tsx` — compose all homepage sections in order, add scroll-reveal wrappers, set page metadata

- [x] **4.9** Set homepage SEO metadata in `app/page.tsx`:
  - Title: "Mr. Fish | Apex Data Science and Analytics & Full-Stack Consulting"
  - Meta description (from FULL WEBSITE.txt)
  - OG title, OG description, OG image
  - Canonical URL
  - Person + ProfessionalService JSON-LD schema

---

## PHASE 5 — SERVICES PAGE (/services) ✅

- [x] **5.1** Build services page layout in `app/services/page.tsx`
  - Page hero: H1, subheadline, breadcrumb nav
  - Full-width horizontal service card per service (desktop) / stacked (mobile)
  - All 5 services rendered from `data/services.ts`
  - Each: icon, H3, tagline, body, benefit checklist, ideal-for tags, CTA button
  - Bottom section CTA: "Not sure which is right? Book a Discovery Call"

- [x] **5.2** Populate `data/services.ts` with all 5 service entries (content from FULL WEBSITE.txt Section 5)

- [x] **5.3** Set `/services` SEO metadata — title, meta description, semantic keywords per service

---

## PHASE 6 — HISTORY PAGE (/history) ✅

> Requires Phase 1 content tasks to be complete.

- [x] **6.1** Build `components/sections/history/HistoryHero.tsx`
  - Page hero: section label "The Track Record", H1, subheadline
  - LinkedIn badge embed placeholder
  - GitHub contribution graph placeholder
  - Social proof strip: X+ Years | X+ Projects | X Industries

- [x] **6.2** Build `components/sections/history/BioBio.tsx`
  - H2: "The Professional Behind the Brand."
  - Short bio block (populated from `data/bio.ts` or inline)
  - Long-form bio (populated once Phase 1.3 is complete)
  - LinkedIn + GitHub prominent link CTAs

- [x] **6.3** Build `components/sections/history/CareerTimeline.tsx`
  - Centered vertical connector line
  - Timeline cards alternating left/right (desktop), full-width stack (mobile)
  - Year badges on connector line, accent colored
  - Scroll-triggered: left cards slide in from left, right from right
  - Tech tag pills per entry
  - Populated from `data/timeline.ts`

- [x] **6.4** Build `components/sections/history/EducationGrid.tsx`
  - H2: "The Foundation Behind the Expertise."
  - 2-column grid desktop / 1-column mobile
  - Education cards from `data/education.ts`

- [x] **6.5** Build `components/sections/history/SkillsStack.tsx`
  - H2: "The Toolkit."
  - Grouped skill tag clouds by category (6 groups per DESIGN_SPEC.md)
  - Category labels in JetBrains Mono eyebrow style
  - NO percentage bars — visual weight via tag size/grouping only

- [x] **6.6** Build `components/sections/history/FeaturedProjects.tsx`
  - H2: "Problems Solved. Systems Built. Results Delivered."
  - 2-column masonry or grid of project cards
  - Content from `data/projects.ts`
  - Expandable / case study link per card

- [x] **6.7** Build history page CTA section (`components/sections/shared/PageCTA.tsx` reused)
  - H2: "You've Seen the Track Record. Now Let's Add Your Project to It."
  - Dual CTA: Book Discovery Call + View Services
  - LinkedIn badge + GitHub link closer

- [x] **6.8** Assemble `app/history/page.tsx` and set SEO metadata

---

## PHASE 7 — ABOUT PAGE (/about) ✅

- [x] **7.1** Build `app/about/page.tsx`
  - Section label: "The Consultant Behind the Brand"
  - H2: "Why 'Mr. Fish'? Because in a Sea of Average, You Need an Apex Partner."
  - Opening hook + story body copy + mission statement (from FULL WEBSITE.txt Section 7)
  - Four core values: 2x2 card grid — Radical Transparency | Precision Over Volume | Business First | Ownership & Accountability
  - Each value card: Lucide icon (accent), title, copy
  - CTA: Book Discovery Call

- [x] **7.2** Set `/about` SEO metadata

---

## PHASE 8 — PRICING PAGE (/work-with-me) ✅

- [x] **8.1** Build `app/work-with-me/page.tsx`
  - Section label: "Engagement Models"
  - H2: "Serious Expertise, Structured for Your Stage."
  - Intro copy + disclaimer note
  - 2x2 card grid (desktop) / stacked (mobile) — 4 engagement models:
    1. Paid Discovery & Technical Roadmap
    2. Value-Based Project Engagement
    3. Monthly Retainer — Fractional CTO (featured, accent border, "Most Popular" badge)
    4. Cash + Equity Hybrid (Startup Special)
  - Each card: title, tagline, description, what's included checklist, best-for tags, CTA button
  - Pricing disclaimer copy
  - Bottom CTA: Book Free Discovery Call

- [x] **8.2** Set `/work-with-me` SEO metadata — title, meta description, semantic targets (fractional CTO cost, data science consultant pricing, etc.)

---

## PHASE 9 — FAQ PAGE (/faq) ✅

- [x] **9.1** Populate `data/faq.ts` with all 10 FAQ entries (content from FULL WEBSITE.txt Section 10)

- [x] **9.2** Build `app/faq/page.tsx`
  - Section label + H2: "Your Questions, Answered Directly."
  - 10 FAQ items using `FAQAccordion.tsx` component
  - Accessible: aria-expanded, role="region", keyboard navigation
  - Accordion border highlights in accent color when open
  - Question number prefix in accent (optional)
  - Bottom CTA: Book Discovery Call

- [x] **9.3** Inject FAQ JSON-LD schema markup (all 10 Q&As) for Google rich results

- [x] **9.4** Set `/faq` SEO metadata

---

## PHASE 10 — CONTACT PAGE (/contact) ✅

- [x] **10.1** Build `app/contact/page.tsx`
  - Split layout: left = copy + contact details + social CTAs; right = form + Calendly embed
  - Section label + H2: "The Gap Between Where You Are and Where You Want to Be Is Usually Technical. Let's Close It."
  - Body copy
  - Contact details block: email, LinkedIn, "Available Globally | Remote-First", response time
  - Secondary CTA links: Custom Estimate | Fractional CTO | Direct Message

- [x] **10.2** Build `components/forms/ContactForm.tsx`
  - Fields: Name, Company/Org, Email, Role (dropdown: Startup Founder | CTO/Tech Leader | Agency Owner | Other), Biggest Technical Challenge (short text), Submit button
  - `react-hook-form` + `zod` validation
  - Input focus: accent border + glow
  - Submit → `POST /api/contact`
  - Success state: confirmation message (no page reload)
  - Error state: inline error messages per field

- [x] **10.3** Build `app/api/contact/route.ts` — receive form POST, send email via Resend to the owner's address with form field data

- [x] **10.4** Integrate Calendly embed widget
  - Inline embed or popup trigger on "Book Discovery Call" button click
  - Apply dark theme to Calendly embed to match site aesthetic
  - Calendly URL stored in `lib/constants.ts`

- [x] **10.5** Set `/contact` SEO metadata

---

## PHASE 11 — BLOG HOLDING PAGE (/blog)

- [x] **11.1** Build `app/blog/page.tsx` — Coming Soon holding page
  - H1: "Insights on Data, Engineering & Growth" (or similar)
  - Subheadline + brief description of upcoming content
  - Teaser cards for 4 content clusters (per FULL WEBSITE.txt Bonus section):
    1. Data Science for Business
    2. Full-Stack Architecture
    3. Fractional CTO / Consulting
    4. Industry Expertise
  - Email capture: "Notify Me When We Launch" — name + email → stores to mailing list (Resend audience or Mailchimp)
  - CTA: Link back to Contact page

- [x] **11.2** Set `/blog` SEO metadata

---

## PHASE 11B — POST-LAUNCH FEATURES ✅

- [x] **11B.1** Functional email system — `app/api/contact/route.ts` using Resend; fires from all contact form submissions across the site. Resend initialized lazily inside handler to avoid build-time errors.
  - Requires `RESEND_API_KEY` env var in Vercel
  - Requires `RESEND_FROM_EMAIL=noreply@fish.pro.et` once domain is verified in Resend
  - Until domain verified: uses `onboarding@resend.dev` (only delivers to Resend-registered email)

- [x] **11B.2** ContactForm upgraded — real `fetch` POST to `/api/contact`, loading state, success screen with reset, inline error display

- [x] **11B.3** Profile photo section on `/history` hero — 2-col layout desktop, photo right
  - **Add your photo at `site/public/images/profile.png`** — shows branded 🦈 placeholder until then

- [x] **11B.4** `/links` page (Linktree-style) — standalone shareable URL at `fish.pro.et/links`
  - Cards: Website, WhatsApp, Email, LinkedIn, GitHub, Twitter/X, Medium, Portfolio
  - No Navbar/Footer — clean standalone page

- [x] **11B.5** Dark / Light / System theme toggle
  - `lib/theme.tsx` — ThemeProvider + useTheme hook
  - `components/ui/ThemeToggle.tsx` — Sun/Monitor/Moon cycle button in Navbar (desktop + mobile)
  - Light mode token set in `globals.css` under `[data-theme="light"]`
  - No-flash inline script in layout prevents FOUC
  - Persists to `localStorage`

- [x] **11B.6** Navbar theme-aware — background, border, and text colors all use CSS variables; light mode uses soft grey translucent background

- [x] **11B.7** Hardcoded color audit — replaced all `rgba(0,212,255,...)` and `#00d4ff` with CSS variable tokens (`--color-accent-tint`, `--color-accent-subtle`, `--color-accent-border`, etc.) across all pages and components

- [x] **11B.8** Active nav link indicator — tiny accent dot under active link (desktop), accent dot left of active link (mobile); uses `usePathname`

- [x] **11B.9** Vercel Analytics integrated — `@vercel/analytics/next` `<Analytics />` component in root layout

- [x] **11B.10** Favicon — `app/icon.svg` with 🦈 emoji; `favicon.ico` removed so SVG takes priority

- [x] **11B.11** GitHub profile README — `GITHUB_PROFILE.md` at repo root; copy to `Fisseha-Estifanos/Fisseha-Estifanos` repo as `README.md`

---

## PHASE 12 — SEO TECHNICAL

- [ ] **12.1** Configure `next-sitemap` — `next-sitemap.config.js` covering all page routes: `/`, `/services`, `/about`, `/history`, `/work-with-me`, `/faq`, `/contact`, `/blog`

- [ ] **12.2** Verify `robots.txt` generated correctly — allow all crawlers, reference sitemap URL

- [ ] **12.3** Implement global JSON-LD schema in `components/seo/JsonLd.tsx` — inject in root layout:
  - `Person` schema (name, jobTitle, url, sameAs: all social URLs)
  - `ProfessionalService` schema (name, serviceType array)

- [ ] **12.4** Implement page-level `BreadcrumbList` JSON-LD on all inner pages

- [ ] **12.5** Create branded OG images for all pages using `@vercel/og` — dark background, Clash Display headline, accent glow, Mr. Fish mark — one per page:
  - `/opengraph-image.tsx` (homepage)
  - `/services/opengraph-image.tsx`
  - `/about/opengraph-image.tsx`
  - `/history/opengraph-image.tsx`
  - `/work-with-me/opengraph-image.tsx`
  - `/faq/opengraph-image.tsx`
  - `/contact/opengraph-image.tsx`

- [ ] **12.6** Add Google Analytics 4 (or Plausible) — script in `app/layout.tsx`, custom events on:
  - Primary CTA click (Discovery Call)
  - WhatsApp FAB click
  - Contact form submission
  - Calendly widget open

---

## PHASE 13 — PERFORMANCE & POLISH

- [ ] **13.1** Audit all images — convert to WebP, use `next/image` with correct `sizes` props, `priority` on hero image, lazy loading everywhere else

- [ ] **13.2** Run Lighthouse audit on all pages — target 90+ on Performance, Accessibility, Best Practices, SEO — resolve all blocking issues

- [ ] **13.3** Verify Core Web Vitals targets:
  - LCP < 2.5s
  - CLS < 0.1
  - INP < 100ms

- [ ] **13.4** Full mobile responsiveness QA — manually test at: 375px (iPhone SE), 430px (iPhone Pro Max), 768px (iPad), 1024px (landscape tablet / small desktop), 1280px, 1440px

- [ ] **13.5** Cross-browser QA — Chrome, Safari, Firefox, Edge:
  - WhatsApp FAB pulse animation
  - Navbar backdrop-blur
  - Framer Motion animations
  - Form inputs and validation
  - Calendly embed

- [ ] **13.6** Accessibility audit:
  - All interactive elements keyboard-navigable
  - All images have descriptive alt text
  - All CTAs have aria-labels
  - Color contrast passes WCAG AA (4.5:1 for body text, 3:1 for large text)
  - Focus styles visible on all interactive elements
  - FAQ accordion screen-reader tested

- [ ] **13.7** `prefers-reduced-motion` — wrap all Framer Motion animations with reduced-motion fallback, verify FAB animation disabled when set

- [ ] **13.8** Verify all copy matches FULL WEBSITE.txt — no placeholder text remaining in production build

---

## PHASE 14 — LAUNCH

- [x] **14.1** Create GitHub repository, push all code, verify CI passes

- [x] **14.2** Set up Vercel project — connected to GitHub repo, auto-deploys on push to `main`
  - Still needed: add `RESEND_API_KEY` and `RESEND_FROM_EMAIL` env vars in Vercel dashboard
  - Still needed: add `NEXT_PUBLIC_CALENDLY_URL` when Calendly is ready

- [x] **14.3** Connected custom domain `fish.pro.et` in Vercel — DNS TXT + CNAME records added

- [x] **14.4** `NEXT_PUBLIC_SITE_URL=https://fish.pro.et` set in `lib/constants.ts`

- [ ] **14.5** Verify sitemap is accessible at `https://[domain]/sitemap.xml`

- [ ] **14.6** Submit sitemap to **Google Search Console** — verify domain ownership, request indexing for all pages

- [ ] **14.7** Submit sitemap to **Bing Webmaster Tools**

- [ ] **14.8** Final pre-launch checklist:
  - [ ] All placeholder text `[BRACKET]` replaced with real content
  - [ ] All internal links functional (no 404s)
  - [ ] WhatsApp FAB opens correct wa.me link with correct number
  - [ ] Contact form submits and owner receives email
  - [ ] Calendly booking flow works end-to-end
  - [ ] All social icon links open correct profiles in new tab
  - [ ] OG images render correctly (test with [opengraph.xyz](https://www.opengraph.xyz) or similar)
  - [ ] Copyright year correct
  - [ ] Analytics events firing (verify in GA4 DebugView or Plausible)
  - [ ] Lighthouse score 90+ on production URL

---

## BACKLOG / FUTURE

- [ ] Add individual blog post pages (`/blog/[slug]`) once first articles are written
- [ ] Add case study detail pages (`/work/[slug]`) for expanded project write-ups
- [ ] Add dark/light mode toggle (dark is default and primary — light is optional enhancement)
- [ ] Set up email newsletter list management (Resend Audiences or Mailchimp)
- [ ] Add cookie consent banner (required for GDPR compliance if targeting EU)
- [ ] Privacy Policy, Terms of Service, Cookie Policy pages (legal copy)
- [ ] Consider adding a `/resources` or `/tools` page as SEO traffic driver

---

*Last updated: 2026-03-30*

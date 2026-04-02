# MR. FISH 🦈 — DESIGN SPECIFICATION
## Version 1.0 | Personal Brand Website

---

## 1. DESIGN PHILOSOPHY

The site must feel like a **premium, modern consulting firm** intersected with a **sharp personal brand**. Think: the technical authority of `linear.app`, the personal polish of `leerob.io`, and the bold dark confidence of `basement.studio`. It should read as a site that belongs to someone who is the best in the room — not someone trying to prove they are.

**Core principles:**
- Dark mode first. Always.
- Typography does the heavy lifting — no gimmicks, no gradients for the sake of it.
- Motion is subtle and purposeful — it communicates quality, not entertainment.
- Every element should earn its place. White space is not wasted space.
- Mobile is not an afterthought — it is designed in parallel.

---

## 2. COLOR SYSTEM

| Token                      | Hex                    | Usage                                          |
| -------------------------- | ---------------------- | ---------------------------------------------- |
| `--color-bg`               | `#0A0A0F`              | Primary page background                        |
| `--color-surface`          | `#111118`              | Card backgrounds, nav background               |
| `--color-surface-raised`   | `#1A1A24`              | Elevated cards, hover states                   |
| `--color-border`           | `#1E1E2E`              | Subtle borders, dividers                       |
| `--color-border-active`    | `#00D4FF`              | Hover borders, active states, timeline accents |
| `--color-accent`           | `#00D4FF`              | Primary accent — CTAs, highlights, active nav  |
| `--color-accent-glow`      | `rgba(0,212,255,0.15)` | Glow effects behind accent elements            |
| `--color-accent-secondary` | `#0EA5E9`              | Secondary blue, gradient endpoints             |
| `--color-text-primary`     | `#F5F5F0`              | Body text, headings                            |
| `--color-text-secondary`   | `#9898A8`              | Muted text, metadata, labels                   |
| `--color-text-tertiary`    | `#55556A`              | Placeholders, disabled states                  |
| `--color-whatsapp`         | `#25D366`              | WhatsApp FAB only                              |
| `--color-success`          | `#22C55E`              | Form success states                            |
| `--color-error`            | `#EF4444`              | Form error states                              |

**Gradient — Hero / Accent:**
```css
background: linear-gradient(135deg, #00D4FF 0%, #0EA5E9 50%, #7C3AED 100%);
```
Used sparingly: CTA button fill, selected highlight text, decorative elements.

**Gradient — Background texture:**
Subtle radial gradient on the hero background emanating from top-center:
```css
background: radial-gradient(ellipse 80% 50% at 50% -10%, rgba(0,212,255,0.08) 0%, transparent 70%);
```

---

## 3. TYPOGRAPHY

### Font Families

| Role            | Font                | Weight   | Source                                                           |
| --------------- | ------------------- | -------- | ---------------------------------------------------------------- |
| Display / H1    | **Clash Display**   | 600, 700 | [fontshare.com](https://www.fontshare.com/fonts/clash-display)   |
| Heading / H2–H3 | **Cabinet Grotesk** | 500, 700 | [fontshare.com](https://www.fontshare.com/fonts/cabinet-grotesk) |
| Body / UI       | **Inter**           | 400, 500 | Google Fonts / next/font                                         |
| Code / Tags     | **JetBrains Mono**  | 400      | Google Fonts / next/font                                         |

**Fallback stack:**
```css
font-family: 'Clash Display', 'Cabinet Grotesk', 'Inter', system-ui, -apple-system, sans-serif;
```

### Type Scale (rem, base 16px)

| Token             | Size            | Line Height | Weight | Usage                     |
| ----------------- | --------------- | ----------- | ------ | ------------------------- |
| `text-display`    | 4.5rem (72px)   | 1.05        | 700    | H1 hero headlines         |
| `text-display-md` | 3.5rem (56px)   | 1.1         | 700    | H1 inner pages            |
| `text-heading-xl` | 2.5rem (40px)   | 1.2         | 700    | H2 section headlines      |
| `text-heading-lg` | 2rem (32px)     | 1.25        | 600    | H2 secondary / H3 primary |
| `text-heading-md` | 1.5rem (24px)   | 1.3         | 600    | H3 card titles            |
| `text-heading-sm` | 1.25rem (20px)  | 1.4         | 600    | H4 / service taglines     |
| `text-body-lg`    | 1.125rem (18px) | 1.7         | 400    | Hero body, intro copy     |
| `text-body`       | 1rem (16px)     | 1.65        | 400    | Standard body text        |
| `text-body-sm`    | 0.875rem (14px) | 1.6         | 400    | Secondary body, captions  |
| `text-label`      | 0.75rem (12px)  | 1.5         | 500    | Eyebrow labels, tags      |
| `text-code`       | 0.875rem (14px) | 1.5         | 400    | Tech stack pills, code    |

**Mobile type scale:** Scale display down ~20% at `<768px` breakpoint.

### Eyebrow / Section Label Style
```css
font-family: 'JetBrains Mono';
font-size: 0.75rem;
font-weight: 500;
letter-spacing: 0.12em;
text-transform: uppercase;
color: var(--color-accent);
```

---

## 4. SPACING & LAYOUT

### Spacing Scale (Tailwind custom tokens)
Based on 4px base unit.

| Token      | Value | Usage                     |
| ---------- | ----- | ------------------------- |
| `space-1`  | 4px   | Icon padding, tight gaps  |
| `space-2`  | 8px   | Inline spacing            |
| `space-3`  | 12px  | Small component padding   |
| `space-4`  | 16px  | Base component padding    |
| `space-6`  | 24px  | Card internal padding     |
| `space-8`  | 32px  | Section sub-spacing       |
| `space-12` | 48px  | Component separation      |
| `space-16` | 64px  | Section padding (mobile)  |
| `space-24` | 96px  | Section padding (desktop) |
| `space-32` | 128px | Hero padding, large gaps  |

### Grid & Max Widths
```css
--max-width-content: 1200px;   /* Standard content wrapper */
--max-width-text: 720px;        /* Prose / body copy max width */
--max-width-narrow: 560px;      /* Forms, focused CTA blocks */
```

**Column grid:** 12-column grid, `gap-6` (24px), side padding `px-6` (mobile) → `px-8` (tablet) → `px-12` (desktop).

### Section Padding Pattern
```css
/* Standard section */
padding: 96px 0;   /* desktop */
padding: 64px 0;   /* tablet */
padding: 48px 0;   /* mobile */
```

---

## 5. COMPONENT LIBRARY

### 5.1 Buttons

**Primary CTA Button**
```
Background: accent gradient (#00D4FF → #0EA5E9)
Text: #0A0A0F (dark — for contrast on light button)
Border-radius: 8px
Padding: 14px 28px
Font: Inter 500, 15px
Hover: brightness 1.1 + subtle glow (box-shadow: 0 0 20px rgba(0,212,255,0.3))
Active: scale(0.98)
Transition: all 200ms ease
```

**Secondary CTA Button**
```
Background: transparent
Border: 1px solid var(--color-border-active) (#00D4FF)
Text: #00D4FF
Border-radius: 8px
Padding: 14px 28px
Hover: Background rgba(0,212,255,0.08)
```

**Ghost / Text Link CTA**
```
Background: none
Text: var(--color-text-secondary)
Underline on hover, color shifts to --color-accent
Arrow icon (→) appended, slides right 4px on hover
```

**WhatsApp Pill (Navbar)**
```
Background: #25D366
Text: white, Inter 500 13px
Border-radius: 999px
Padding: 8px 16px
Icon: WhatsApp SVG left of text
Hover: brightness 1.1
```

### 5.2 Cards

**Service Card**
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 16px
Padding: 32px
Hover: border-color → var(--color-accent), subtle glow
Transition: border 250ms ease, box-shadow 250ms ease
box-shadow on hover: 0 0 0 1px rgba(0,212,255,0.3), 0 8px 32px rgba(0,0,0,0.4)
```

**Testimonial Card**
```
Background: var(--color-surface)
Border-left: 3px solid var(--color-accent)
Border-radius: 12px
Padding: 28px
Quote mark: large decorative " in accent color at top-left
```

**Comparison Block**
```
Background: var(--color-surface-raised)
Border-radius: 12px
Padding: 24px
Left border accent: 2px solid var(--color-border)
Hover left border: var(--color-accent)
Tag pill at bottom: green (#22C55E bg) with "The difference: ..."
```

**Timeline Entry Card**
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 12px
Padding: 28px
Hover: border-color → var(--color-accent)
Left connector line: 2px solid var(--color-border)
Year badge: accent-colored pill on the connector
```

**Pricing / Engagement Card**
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 16px
Padding: 36px
Featured card (Fractional CTO): border → var(--color-accent), badge "Most Popular"
Checklist items: accent-colored checkmark icon + body-sm text
```

**Education / Certification Card**
```
Background: var(--color-surface)
Border-radius: 12px
Padding: 24px
Icon: institution logo or generic graduation/cert icon in accent
2-column desktop, 1-column mobile grid
```

### 5.3 Tag Pills / Badges

**Tech Stack Pill**
```
Background: rgba(0,212,255,0.08)
Border: 1px solid rgba(0,212,255,0.2)
Text: #00D4FF, JetBrains Mono 12px
Border-radius: 999px
Padding: 4px 12px
```

**Category Tag (project cards)**
```
Background: rgba(124,58,237,0.12)
Border: 1px solid rgba(124,58,237,0.25)
Text: #A78BFA, 12px 500
Border-radius: 999px
Padding: 4px 12px
```

**"Ideal For" Segment Tag**
```
Background: rgba(255,255,255,0.05)
Border: 1px solid var(--color-border)
Text: var(--color-text-secondary), 12px
Border-radius: 999px
Padding: 4px 12px
```

### 5.4 Section Label (Eyebrow)
```
Font: JetBrains Mono, 12px, 500
Color: var(--color-accent)
Letter-spacing: 0.12em
Text-transform: uppercase
Margin-bottom: 16px
Optional: small horizontal line (40px) left of text
```

### 5.5 Stat Strip
```
Layout: horizontal flex, evenly spaced, dividers between items (desktop) / 2x2 grid (mobile)
Number: Clash Display 700, 3rem, color: var(--color-accent)
Label: Inter 400, 14px, color: var(--color-text-secondary)
Divider: 1px solid var(--color-border)
```

### 5.6 Social Icons
```
Navbar: Lucide icons, 20px, color: var(--color-text-secondary)
Hover: color → var(--color-text-primary), scale(1.1)
Footer: 24px, with label text below
Hero row: 24px, row layout with slight gap
All transitions: 150ms ease
```

---

## 6. NAVIGATION

### Desktop Navbar
```
Position: sticky top-0, z-50
Background: rgba(10,10,15,0.85), backdrop-filter: blur(16px)
Border-bottom: 1px solid var(--color-border)
Height: 72px
Layout: [Logo/Brand Name] ← → [Nav Links] ← → [Social Icons + WhatsApp CTA]
```

**Logo/Brand:**
- Text: "Mr. Fish 🦈" in Clash Display 600
- Or SVG wordmark if created
- Color: var(--color-text-primary)

**Nav Links:** Inter 500, 14px, color: var(--color-text-secondary)
- Hover: color → var(--color-text-primary)
- Active: color → var(--color-accent), optional bottom border accent 2px

**Scroll behaviour:** Navbar border becomes slightly more opaque after 50px scroll.

### Mobile Navbar
```
Height: 64px
Right: hamburger icon (3 lines → X on open)
On open: full-screen overlay, dark bg, nav links stacked vertically, large type
Social icons at bottom of overlay
WhatsApp button prominent at bottom of overlay menu
```

---

## 7. HERO SECTION DESIGN

### Layout
```
Min-height: 100vh (or 90vh on screens > 900px tall)
Vertical centering: flexbox column, justify-center
Horizontal: centered text with max-width 800px for copy
```

### Background
- Base: `#0A0A0F`
- Radial glow: accent blue emanating from top-center (see Section 2)
- Optional subtle element: animated SVG wave / particles (low-opacity, performant — CSS only or minimal canvas)
- Consider: abstract data grid pattern (very low opacity, #00D4FF at 3-5% opacity)

### Content Stack (top to bottom)
1. Eyebrow label: "Apex Data Science and Analytics & Full-Stack Consulting"
2. H1: "The Apex Tech Partner Your Business Has Been Missing."
3. Subheadline: "Full-Stack Engineering. Advanced Data Science. One Expert. Zero Hand-Offs. Zero Excuses."
4. Body copy (max-width 620px, centered)
5. CTA row: [Primary Button] + [Secondary text link]
6. Social proof micro-copy (muted, small)
7. Social icon row

### Animation on load
- Staggered fade-up: eyebrow → H1 → subheadline → body → CTAs → social row
- Timing: 60ms stagger between each element, 500ms duration, ease-out
- Scroll indicator: subtle animated chevron / arrow at bottom of hero

---

## 8. ANIMATION & MOTION SYSTEM

### Principles
- **Entry only:** Elements animate in on first view (intersection observer). No looping, no distraction.
- **Performance first:** Use CSS transforms and opacity only. No layout-triggering animations.
- **Respect `prefers-reduced-motion`:** All animations must be wrapped in a media query check.

### Standard Scroll-Reveal (applied to most sections)
```css
/* Initial state */
opacity: 0;
transform: translateY(24px);

/* Animated state */
opacity: 1;
transform: translateY(0);
transition: opacity 600ms ease-out, transform 600ms ease-out;
```

### Stagger Pattern (card grids)
Each card delays by `index * 80ms` (max 320ms total delay).

### Hover Microinteractions
- Cards: border glow, scale(1.01) — 200ms ease
- Buttons: brightness, glow — 200ms ease
- Nav links: color shift — 150ms ease
- Social icons: color + scale — 150ms ease

### WhatsApp FAB Animation
```css
/* Pulse ring */
@keyframes pulse-ring {
  0% { transform: scale(1); opacity: 0.6; }
  100% { transform: scale(1.6); opacity: 0; }
}

/* Slide in on load */
@keyframes slide-in-fab {
  from { transform: translateY(80px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
animation: slide-in-fab 400ms ease-out 2.5s both;
```

### Timeline Cards
- Alternate: left cards slide in from left (`translateX(-32px)`), right from right (`translateX(32px)`)
- Year badge: scale + fade in after card, 100ms delay

---

## 9. PAGE-SPECIFIC DESIGN NOTES

### Homepage (/)
- Hero is full-screen with subtle motion background
- Trust Strip / Credibility Bar: horizontally scrolling marquee of tech tags on mobile, grid on desktop
- Value Prop: 3-column card grid desktop, stacked mobile
- Problem/Solution: tabbed or accordion layout on mobile (3 audience segments), full 3-panel on desktop
- Testimonials: horizontal scroll carousel on mobile, 3-column grid on desktop
- Comparison section: alternating left/right layout or 2x2 grid

### Services Page (/services)
- Page hero: smaller than homepage, left-aligned, H1 + subheadline + breadcrumb
- Services: full-width alternating layout (image/visual left + copy right, then swap) OR stacked cards with visible expand — recommend **full-width horizontal card per service** for desktop, stacked on mobile
- Each service card: icon in accent color top-left, H3, tagline, body, benefit checklist, ideal-for tags, CTA

### History Page (/history)
- The most visually rich page — LinkedIn-premium-meets-editorial
- Timeline: centered vertical line, cards alternating left/right, year badges on the line
- Skills section: grouped tag clouds by category, with subtle category header labels
- Projects: masonry or 2-column grid of case study cards

### About Page (/about)
- Clean, focused, editorial
- Optional: full-bleed subtle portrait or abstract visual on the right half (desktop)
- Values: 2x2 grid of value cards with icon, title, copy

### Pricing / Work With Me (/work-with-me)
- Pricing cards: 2x2 grid desktop, stacked mobile
- Featured card (Fractional CTO / Retainer): accent border, "Most Popular" badge, slightly larger
- Checklist items animated: each item fades in with stagger when card enters view

### FAQ (/faq)
- Clean accordion layout
- Accordion border highlights in accent on open
- Questions in Inter 500, 16px — answers in Inter 400, 16px, slightly muted color
- Question number prefix in accent (optional)

### Contact (/contact)
- Split layout desktop: left = copy + contact details + social CTAs; right = form + Calendly embed
- Form: minimal fields, full-width inputs, floating label style
- Input focus state: border → accent blue, subtle glow

### Blog Coming Soon (/blog)
- Single centered panel
- Teaser of upcoming content clusters as small cards
- Email capture field: simple, inline, "Notify Me" button

---

## 10. RESPONSIVE BREAKPOINTS

| Name  | Min-width | Description                       |
| ----- | --------- | --------------------------------- |
| `xs`  | 375px     | Minimum supported (iPhone SE)     |
| `sm`  | 640px     | Large phones                      |
| `md`  | 768px     | Tablets                           |
| `lg`  | 1024px    | Small desktops / landscape tablet |
| `xl`  | 1280px    | Desktop                           |
| `2xl` | 1536px    | Large desktop                     |

**Mobile-first approach:** All CSS starts mobile, enhanced at breakpoints.

---

## 11. ICON SYSTEM

**Primary icon library:** [Lucide React](https://lucide.dev/) — consistent, clean, MIT licensed.

**Social media icons:** Use [Simple Icons](https://simpleicons.org/) via `react-simple-icons` for brand-accurate social icons (LinkedIn, GitHub, X, Instagram, YouTube, WhatsApp).

**Custom icons / illustrations:**
- Shark motif: Subtle 🦈 use in brand mark, not overused
- Service icons: Use Lucide — `Layers` (architecture), `BarChart2` (analytics), `Search` (audit), `Zap` (MVP), `Briefcase` (Fractional CTO)
- Value block icons: `Eye` (transparency), `Target` (precision), `TrendingUp` (business first), `Shield` (accountability)

---

## 12. FORMS

### Input Style
```
Background: var(--color-surface)
Border: 1px solid var(--color-border)
Border-radius: 8px
Padding: 14px 16px
Font: Inter 400, 16px
Color: var(--color-text-primary)
Placeholder: var(--color-text-tertiary)

Focus: border-color → var(--color-accent), box-shadow: 0 0 0 3px rgba(0,212,255,0.15)
Error: border-color → var(--color-error)
```

### Dropdown Select
Same as input, custom arrow icon replaces native arrow.

### Form Submit Button
Full-width primary CTA button.

### Validation
- Real-time on blur (not on keypress — less disruptive)
- Error messages: small red text below field, `var(--color-error)`
- Success state: green border + checkmark icon

---

## 13. SEO TECHNICAL SPEC

### Meta Tags (per page)
Every page must have:
- `<title>` — unique, under 60 chars
- `<meta name="description">` — unique, 150–155 chars, includes primary keyword
- `<meta property="og:title">` — same as title or slightly expanded
- `<meta property="og:description">` — same as meta description
- `<meta property="og:image">` — 1200×630px branded OG image
- `<meta property="og:url">` — canonical full URL
- `<meta name="twitter:card" content="summary_large_image">`
- `<link rel="canonical">` — self-referencing

### Structured Data (JSON-LD)
**Homepage:**
```json
{
  "@type": "Person",
  "name": "Mr. Fish",
  "jobTitle": "Data Science & Full-Stack Consultant",
  "url": "https://[domain]",
  "sameAs": ["[linkedin]", "[github]", "[twitter]"]
}
```
**Homepage also:**
```json
{
  "@type": "ProfessionalService",
  "name": "Mr. Fish Consulting",
  "serviceType": ["Data Science Consulting", "Full-Stack Engineering", "Fractional CTO"]
}
```
**FAQ page:** FAQ schema for all 10 questions (enables Google rich results).

**History page:** `ItemList` or `ProfilePage` schema.

**Inner pages:** `BreadcrumbList` schema.

### Open Graph Images
- Dimensions: 1200×630px
- Design: dark background (#0A0A0F), Clash Display headline text, subtle accent glow, Mr. Fish brand mark
- One per page with page-specific headline
- Generate using `@vercel/og` (Next.js OG image generation) for dynamic generation

### Performance Targets
- Lighthouse score: 90+ on all four metrics
- LCP (Largest Contentful Paint): < 2.5s
- CLS (Cumulative Layout Shift): < 0.1
- FID / INP: < 100ms
- First load JS: < 150kb gzipped

---

## 14. TECHNOLOGY STACK (CONFIRMED)

| Layer      | Choice                                    | Reason                                                        |
| ---------- | ----------------------------------------- | ------------------------------------------------------------- |
| Framework  | **Next.js 14** (App Router)               | SSR/SSG for SEO, file-based routing, Vercel-native            |
| Language   | **TypeScript**                            | Type safety, better DX                                        |
| Styling    | **Tailwind CSS v3**                       | Utility-first, fast, easy token system                        |
| Animation  | **Framer Motion**                         | Best-in-class React animation, Intersection Observer built-in |
| Icons      | **Lucide React** + **react-simple-icons** | Consistent, lightweight                                       |
| Fonts      | **next/font** (local + Google)            | Zero layout shift, optimal loading                            |
| Forms      | **React Hook Form** + **Zod**             | Lightweight, type-safe validation                             |
| Email      | **Resend** (recommended)                  | Simple API, great DX, reliable delivery                       |
| Scheduling | **Calendly** embed                        | Industry standard, simple embed                               |
| Analytics  | **Google Analytics 4**                    | Standard; or Plausible for privacy-first                      |
| OG Images  | **@vercel/og**                            | Dynamic branded OG image generation                           |
| Sitemap    | **next-sitemap**                          | Automated sitemap + robots.txt generation                     |
| SEO        | Next.js **Metadata API**                  | Built-in, no extra library needed                             |
| Deployment | **Vercel**                                | Native Next.js platform, free tier sufficient                 |
| Repo       | **GitHub**                                | Version control + Vercel integration                          |

---

## 15. FILE STRUCTURE

```
mr-fish/
├── app/
│   ├── layout.tsx              # Root layout: Navbar, Footer, WhatsApp FAB, SEO defaults
│   ├── page.tsx                # Homepage (/)
│   ├── services/
│   │   └── page.tsx            # /services
│   ├── about/
│   │   └── page.tsx            # /about
│   ├── history/
│   │   └── page.tsx            # /history
│   ├── work-with-me/
│   │   └── page.tsx            # /work-with-me (pricing)
│   ├── faq/
│   │   └── page.tsx            # /faq
│   ├── contact/
│   │   └── page.tsx            # /contact
│   ├── blog/
│   │   └── page.tsx            # /blog (coming soon)
│   ├── api/
│   │   └── contact/
│   │       └── route.ts        # Contact form API route → Resend
│   └── opengraph-image.tsx     # Dynamic OG image (root)
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── WhatsAppFAB.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── SectionLabel.tsx
│   │   ├── TagPill.tsx
│   │   ├── StatStrip.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── TestimonialCard.tsx
│   │   ├── ComparisonBlock.tsx
│   │   ├── TimelineCard.tsx
│   │   ├── PricingCard.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── EducationCard.tsx
│   │   └── FAQAccordion.tsx
│   ├── sections/
│   │   ├── home/
│   │   │   ├── Hero.tsx
│   │   │   ├── TrustStrip.tsx
│   │   │   ├── ValueProp.tsx
│   │   │   ├── ProblemSolution.tsx
│   │   │   ├── ServicesPreview.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   └── WhyNotAlternatives.tsx
│   │   ├── history/
│   │   │   ├── HistoryHero.tsx
│   │   │   ├── BioBio.tsx
│   │   │   ├── CareerTimeline.tsx
│   │   │   ├── EducationGrid.tsx
│   │   │   ├── SkillsStack.tsx
│   │   │   └── FeaturedProjects.tsx
│   │   └── shared/
│   │       └── PageCTA.tsx
│   ├── forms/
│   │   └── ContactForm.tsx
│   └── seo/
│       └── JsonLd.tsx
├── lib/
│   ├── fonts.ts                # next/font configuration
│   ├── constants.ts            # Social URLs, WhatsApp number, site config
│   └── animations.ts           # Framer Motion variants
├── data/
│   ├── services.ts             # Service card content
│   ├── timeline.ts             # Career timeline entries
│   ├── education.ts            # Education/cert cards
│   ├── projects.ts             # Featured project case studies
│   ├── skills.ts               # Skill category groups
│   ├── testimonials.ts         # Testimonial cards
│   └── faq.ts                  # FAQ questions and answers
├── public/
│   ├── og/                     # Static OG images per page
│   ├── fonts/                  # Self-hosted font files
│   └── images/                 # Logo, portraits, etc.
├── styles/
│   └── globals.css             # Tailwind directives, CSS custom properties, keyframe animations
├── tailwind.config.ts          # Brand design tokens
├── next.config.ts
├── tsconfig.json
└── next-sitemap.config.js
```

---

## 16. CONTENT DATA STRUCTURE

All content is stored in `/data/` as TypeScript files with typed interfaces. This separates content from layout and makes the History page content easy to populate once professional source material is provided.

### `data/services.ts`
```typescript
interface Service {
  id: string
  icon: LucideIcon
  title: string
  tagline: string
  body: string
  benefits: string[]
  idealFor: string[]
  cta: { label: string; href: string }
}
```

### `data/timeline.ts`
```typescript
interface TimelineEntry {
  yearRange: string
  title: string
  company: string
  location: string
  achievements: string[]
  tags: string[]
}
```

### `data/projects.ts`
```typescript
interface Project {
  category: string
  challenge: string
  solution: string
  result: string
  stack: string[]
  caseStudyHref?: string
}
```

---

*End of Design Specification — Mr. Fish 🦈 v1.0*

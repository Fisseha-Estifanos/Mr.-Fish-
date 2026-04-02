# Mr. Fish 🦈 — Personal Brand Website

Personal brand and consulting website for **Fisseha Estifanos** (Mr. Fish) — Data Scientist, Generative AI Engineer, and Full-Stack Consultant based in Addis Ababa, Ethiopia.

**Live:** [fish.pro.et](https://fish.pro.et)

---

## Tech Stack

| Layer | Choice |
| --- | --- |
| Framework | Next.js 16 (App Router, TypeScript) |
| Styling | Tailwind CSS v4 + CSS custom properties |
| Animations | Framer Motion |
| Fonts | Clash Display · Cabinet Grotesk (Fontshare) · Inter · JetBrains Mono (Google) |
| Email | Resend (`/api/contact` route) |
| Analytics | Vercel Analytics |
| Deployment | Vercel (auto-deploy from `main`) |

---

## Project Structure

```text
site/
├── app/
│   ├── api/contact/        # Email handler (Resend)
│   ├── about/
│   ├── blog/               # Coming soon holding page
│   ├── contact/
│   ├── faq/
│   ├── history/            # Career timeline, bio, skills, projects
│   ├── links/              # Linktree-style standalone page
│   ├── services/
│   ├── work-with-me/
│   ├── icon.svg            # 🦈 favicon
│   ├── layout.tsx          # Root layout — fonts, theme, analytics
│   └── page.tsx            # Homepage
├── components/
│   ├── layout/             # Navbar, Footer, WhatsAppFAB
│   ├── sections/           # Page-specific section components
│   └── ui/                 # Button, TagPill, ServiceCard, ThemeToggle, SocialIcons, etc.
├── data/                   # Content files (TypeScript)
│   ├── education.ts
│   ├── faq.ts
│   ├── projects.ts
│   ├── services.ts
│   ├── skills.ts
│   ├── testimonials.ts
│   └── timeline.ts
├── lib/
│   ├── animations.ts       # Framer Motion variants
│   ├── constants.ts        # Site config, social URLs, contact details
│   └── theme.tsx           # ThemeProvider + useTheme hook
└── public/
    └── images/
        └── profile.png     # ← ADD YOUR PHOTO HERE
```

---

## Local Development

```bash
cd site
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Environment Variables

Create `site/.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=fisseha.137@gmail.com
NEXT_PUBLIC_WHATSAPP_NUMBER=251921307745
RESEND_API_KEY=re_...              # From resend.com
RESEND_FROM_EMAIL=noreply@fish.pro.et  # Once domain verified in Resend
NEXT_PUBLIC_CALENDLY_URL=          # Add when ready
```

In Vercel: **Settings → Environment Variables** — add the same keys with production values.

> **Note on Resend:** Until `fish.pro.et` is verified in your Resend dashboard, email will only deliver to your Resend-registered email address using `onboarding@resend.dev` as the sender.

---

## Theme System

The site supports **Dark / Light / System** themes via a cycle button in the navbar.

- Tokens defined in `app/globals.css` under `[data-theme="dark"]` and `[data-theme="light"]`
- Selected theme persisted to `localStorage` as `mrfish-theme`
- No flash on reload — an inline script in `layout.tsx` sets `data-theme` before paint

---

## Adding Your Profile Photo

Drop your photo at `site/public/images/profile.png`. It appears on the `/history` page hero. The 🦈 placeholder shows until the file exists.

Recommended: square crop, minimum 600×600px, PNG.

---

## Deployment

Pushes to `main` auto-deploy to Vercel. The `vercel.json` at the repo root tells Vercel to build from the `site/` subdirectory.

**Pending before full launch:**

- Add `RESEND_API_KEY` to Vercel env vars
- Verify `fish.pro.et` domain in Resend dashboard
- Add Calendly URL
- Upload profile photo
- Complete domain DNS verification in Vercel

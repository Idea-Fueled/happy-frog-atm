# Happy Frog ATM — Marketing Site (Next.js)

A production-ready Next.js 14 marketing site for Happy Frog ATM.
Built with the App Router, TypeScript, and `next/font` for zero-CLS Google Fonts.

---

## 🚀 Quick Start

```bash
npm install
npm run dev
# → open http://localhost:3000
```

Production build:
```bash
npm run build
npm start
```

**Requirements:** Node.js 18.17+ (Next.js 14 minimum).

---

## 📁 Project Structure

```
happyfrog-nextjs/
├── app/
│   ├── globals.css         ← All CSS (extracted from the static reference)
│   ├── layout.tsx          ← Root layout, fonts, metadata, OG tags
│   └── page.tsx            ← Home page (composes all sections)
├── components/
│   ├── site-config.ts      ← ⭐ Phone, email, calendar URL — single source of truth
│   ├── Icons.tsx           ← Reusable SVG icon components
│   ├── AnnounceBar.tsx
│   ├── SiteNav.tsx
│   ├── Hero.tsx
│   ├── TrustBar.tsx
│   ├── Stats.tsx
│   ├── WhatYouGet.tsx
│   ├── HowItWorks.tsx
│   ├── Equipment.tsx
│   ├── Comparison.tsx
│   ├── FAQ.tsx             ← Client component (accordion state)
│   ├── FinalCTA.tsx
│   ├── ContactForm.tsx     ← Client component (form state + submission)
│   └── Footer.tsx
├── public/
│   └── assets/
│       └── logo.png        ← Brand logo
├── REFERENCE-static-design.html   ← The static HTML target — open in browser for the exact visual reference
├── next.config.js
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎨 Design System

### Color palette (extracted from the brand logo)

All colors are defined as CSS custom properties in `app/globals.css` under `:root`. Edit there to change site-wide.

| Variable    | Hex       | Usage                                  |
|-------------|-----------|----------------------------------------|
| `--ink`     | `#000000` | Headlines, dark sections, footer       |
| `--olive`   | `#708010` | Primary brand color (the logo "ATM" green) |
| `--olive2`  | `#8C9E1C` | Hover state, accents on dark           |
| `--olive3`  | `#5A6610` | Section labels on light backgrounds    |
| `--olivelt` | `#EDEFCB` | Light tint for backgrounds             |
| `--cream`   | `#F0F0E0` | Warm cream backgrounds & paper feel    |
| `--frog`    | `#404000` | Deep frog-body green                   |
| `--eye`     | `#A02000` | Red accent (use sparingly)             |
| `--body`    | `#3A3A28` | Body text on light backgrounds         |

### Typography

- **Display headlines:** Barlow Condensed (700, 800, 900 weights)
- **Body & UI:** Inter (300–700 weights)

Both loaded via `next/font/google` in `app/layout.tsx` — self-hosted at build time, zero layout shift, no external network call from the user's browser.

### Section rhythm

The site alternates between light and dark sections:

| # | Section            | Bg     |
|---|--------------------|--------|
| 1 | Hero               | White  |
| 2 | Trust bar          | Dark   |
| 3 | Stats              | Cream  |
| 4 | What's Included    | White  |
| 5 | How It Works       | Dark   |
| 6 | Equipment          | Cream  |
| 7 | Comparison         | Dark   |
| 8 | FAQ                | White  |
| 9 | Final CTA          | Dark   |
| 10 | Contact Form      | Cream  |
| 11 | Footer            | Dark   |

---

## ⚙️ Configuration

### `components/site-config.ts` — the only file you should need to edit for non-design changes

```ts
export const siteConfig = {
  phone: {
    display: '(833) 818-8778',
    tel: 'tel:8338188778',
  },
  email: {
    display: 'kmckinley@happyfrogatm.com',
    mailto: 'mailto:kmckinley@happyfrogatm.com',
  },
  scheduleUrl: 'https://calendly.com/happyfrog-atm/intro-call',
};
```

- **Phone number:** Update both `display` and `tel` fields. The `tel:` prefix is required for click-to-call on mobile.
- **Email:** Update both `display` and `mailto` fields.
- **Calendar URL:** Replace with the real Calendly / Cal.com / Google Calendar booking URL. Three "Schedule a Call" buttons on the page pick it up automatically.

---

## 🔌 Integration TODO list — what needs to be done before launch

### 1. Contact form backend ⚠️ Required

The contact form in `components/ContactForm.tsx` currently `console.log`s submissions. Wire it up to one of:

#### Option A: Next.js Server Action (recommended)

Create `app/actions/submit-lead.ts`:
```ts
'use server';
export async function submitLead(formData: FormData) {
  // Send to CRM / email service / Slack / Airtable / Google Sheets / database
  // e.g. via Resend, Postmark, HubSpot API, Mailchimp, Airtable API
}
```

Then in `ContactForm.tsx`, replace the `handleSubmit` body with a call to that action.

#### Option B: Formspree (no-code, fastest)
Create a form at [formspree.io](https://formspree.io), then in `handleSubmit`:
```ts
await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  body: formData,
  headers: { Accept: 'application/json' },
});
```

#### Option C: Direct email via Resend / Postmark
Install `resend`, create an API route, send to `kmckinley@happyfrogatm.com`.

#### Option D: HubSpot Forms / Salesforce / CRM
Use the platform's web-to-lead form endpoint.

### 2. Calendar URL ⚠️ Required

Update `components/site-config.ts` → `scheduleUrl` with the actual booking URL. The placeholder `calendly.com/happyfrog-atm/intro-call` is illustrative only.

### 3. Domain & metadata ⚠️ Required

In `app/layout.tsx`, replace `https://happyfrogatm.com` in two places (`metadataBase` and the `openGraph.url`) with the actual deploy domain.

### 4. Favicon ⚠️ Required

Add `app/favicon.ico` (or `app/icon.svg` for SVG) — Next.js auto-detects.

### 5. Analytics (optional)

Choose one and add to `app/layout.tsx` before `</body>`:
- **Google Analytics 4:** Use `next/script` with the gtag snippet
- **Plausible:** `<script defer data-domain="happyfrogatm.com" src="https://plausible.io/js/script.js" />`
- **Vercel Analytics:** Add the `@vercel/analytics` package (zero-config on Vercel hosting)

### 6. Legal pages (optional but recommended)

The footer links to `/privacy` and `/terms`. Create:
- `app/privacy/page.tsx`
- `app/terms/page.tsx`

### 7. Sitemap & robots.txt (optional, SEO)

Create `app/sitemap.ts` and `app/robots.ts` per the [Next.js docs](https://nextjs.org/docs/app/api-reference/file-conventions/metadata).

---

## 🚢 Deployment

### Vercel (recommended — same company makes Next.js)
1. Push to GitHub
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Default settings work; deploy

### Cloudflare Pages
- Build command: `npm run build`
- Output directory: `.next`
- Node version: 18 or newer

### Netlify
- Install the Next.js runtime plugin
- Build command: `npm run build`
- Publish directory: `.next`

### Self-hosted (Docker, EC2, VPS)
- `npm run build && npm start`
- Reverse-proxy through nginx/Caddy on port 3000

---

## 🧪 Visual reference

`REFERENCE-static-design.html` in the project root is the final static HTML version of the design. **Open it in a browser** to see exactly what the Next.js site should look like when fonts load properly. If the Next.js build ever drifts from the reference visually, the static file is the source of truth for spacing, colors, and layout.

---

## 🛠️ Architecture notes

- **App Router** (not Pages Router) — modern Next.js pattern, React Server Components by default
- **Server Components** for static sections (everything except `FAQ` and `ContactForm`) — zero JS shipped to the browser for those parts
- **Client Components** only where interaction is needed (`'use client'` directive at top)
- **`next/font`** for Google Fonts — fonts are downloaded at build time and self-hosted, eliminating layout shift and external font requests
- **`next/image`** for the logo — automatic image optimization, lazy-load by default, modern formats served when supported
- **No CSS framework** — plain CSS with custom properties. No Tailwind, no styled-components. Keeps the bundle tiny and the styles editable in one file.

---

## ❓ Common questions

**Q: Why no Tailwind / CSS-in-JS / SCSS?**
A: The design was already complete as a single CSS file. Adding a framework would require rewriting every selector with no functional gain. Plain CSS + custom properties gives the same flexibility with less complexity.

**Q: Can I add a CMS for content editing?**
A: Yes — the section text lives inside each component (arrays at the top of each file). To make it editable without code changes, integrate Sanity, Contentful, or Payload CMS and replace the hard-coded arrays with `await sanity.fetch(...)` in Server Components.

**Q: Can I add a blog?**
A: Yes — create `app/blog/page.tsx` for the index, `app/blog/[slug]/page.tsx` for posts. MDX (`@next/mdx`) works well for markdown-authored posts.

**Q: Is the form spam-protected?**
A: Not yet. Add Cloudflare Turnstile, hCaptcha, or a honeypot field before launch. Formspree and most form backends include their own spam filtering.

**Q: How is responsive design handled?**
A: Pure CSS media queries in `globals.css`. Breakpoints at 1000px, 900px, 600px, 540px. Tested down to 380px mobile width.

---

## 📞 Site contact info

- Phone: (833) 818-8778
- Email: kmckinley@happyfrogatm.com

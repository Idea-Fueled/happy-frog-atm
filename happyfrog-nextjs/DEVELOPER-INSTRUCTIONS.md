# Developer Handoff — Happy Frog ATM

## What this is

A complete Next.js 14 + TypeScript marketing site for **Happy Frog ATM** (cannabis-compliant ATM placement for licensed dispensaries). Built and ready to deploy. Designed mobile-first; matches the visual reference file in this package exactly.

## What's included in this folder

```
happyfrog-nextjs/
├── DEVELOPER-INSTRUCTIONS.md      ← You are here
├── README.md                       ← Full technical documentation
├── REFERENCE-static-design.html    ← Open in a browser to see what the site should look like
├── package.json                    ← npm dependencies (Next.js 14, React 18, TypeScript 5)
├── tsconfig.json
├── next.config.js
├── .gitignore
├── app/
│   ├── layout.tsx                  ← Root layout, fonts, SEO meta
│   ├── page.tsx                    ← Home page (composes section components)
│   └── globals.css                 ← All site CSS
├── components/
│   ├── site-config.ts              ← ⭐ Phone, email, calendar URL — edit here
│   ├── Icons.tsx                   ← Reusable SVG icons
│   ├── AnnounceBar.tsx
│   ├── SiteNav.tsx                 ← Sticky top nav
│   ├── Hero.tsx                    ← White hero w/ price card on right
│   ├── TrustBar.tsx
│   ├── Stats.tsx                   ← +20% / 10% / 80% / +8% stat block
│   ├── WhatYouGet.tsx              ← 6-card grid
│   ├── HowItWorks.tsx              ← 4 dark steps
│   ├── Equipment.tsx
│   ├── Comparison.tsx              ← Dark comparison table
│   ├── FAQ.tsx                     ← Accordion (client component)
│   ├── FinalCTA.tsx
│   ├── ContactForm.tsx             ← Lead capture form (client component)
│   └── Footer.tsx
└── public/
    └── assets/
        └── logo.png                ← Brand logo
```

## How to run it locally

```bash
# Make sure you have Node.js 18.17 or newer:
node --version

# From inside the project folder:
npm install
npm run dev
```

Then open `http://localhost:3000` in your browser. You should see the site exactly as shown in `REFERENCE-static-design.html`.

## What you need to do before launch

There are **7 items** that need real values or integration before this site goes live. All are clearly marked in the code with `TODO` or detailed in `README.md`. Here they are in priority order:

### MUST-DO (site doesn't work without these)

1. **Wire up the contact form to a real backend.**
   The form in `components/ContactForm.tsx` currently logs submissions to the browser console. Connect it to whichever backend the client prefers. Recommended in order of simplicity:
   - **Formspree** (no code, ~5 min setup) — sign up at formspree.io, drop the form ID into a fetch call.
   - **Next.js Server Action + Resend** (proper way) — submissions go directly to `kmckinley@happyfrogatm.com`.
   - **HubSpot / Salesforce** — if the client uses a CRM, use the platform's web-to-lead form endpoint.

   All submissions should end up reaching `kmckinley@happyfrogatm.com` one way or another.

2. **Replace the placeholder calendar URL.**
   In `components/site-config.ts`, line 18:
   ```ts
   scheduleUrl: 'https://calendly.com/happyfrog-atm/intro-call',
   ```
   This is a placeholder. The client will provide a real Calendly / Cal.com / Google Calendar booking URL — drop it in here and three "Schedule a Call" buttons across the site update automatically.

3. **Update the domain in metadata.**
   In `app/layout.tsx`, replace `https://happyfrogatm.com` (appears twice) with the actual production domain. This affects social-share previews and SEO canonicals.

4. **Add a favicon.**
   Drop `favicon.ico` (or `icon.svg`) into the `app/` folder. Next.js detects it automatically.

### SHOULD-DO (site works without these but launch isn't complete)

5. **Add analytics.**
   The client hasn't picked a tool yet. Recommend Google Analytics 4, Plausible, or Vercel Analytics (the last is free and zero-config if hosting on Vercel). See README.md for snippets.

6. **Create privacy policy and terms pages.**
   The footer links to `/privacy` and `/terms` — both 404 currently. Either create stub pages at `app/privacy/page.tsx` and `app/terms/page.tsx` or remove the links until copy is ready.

7. **Add spam protection to the form.**
   Add Cloudflare Turnstile (free), hCaptcha, or at minimum a honeypot field. Formspree and most backends include their own filtering.

## Where to deploy

The client has not yet chosen a host. **Recommend Vercel** — it's made by the same company that makes Next.js, has a free tier suitable for marketing sites, and requires zero configuration. To deploy:

1. Push this folder to a new GitHub repo.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Click Deploy. It will work out of the box.

If the client prefers Cloudflare Pages, Netlify, AWS Amplify, or self-hosted: see `README.md` for instructions for each.

## Reference: what the finished site should look like

Open `REFERENCE-static-design.html` (in the project root) in any browser. That file is the design source of truth. The Next.js build should match it pixel-for-pixel when fonts have loaded.

The design uses:
- **Barlow Condensed** (Google Fonts) — bold uppercase display headlines
- **Inter** (Google Fonts) — body text and UI
- **Logo palette** — olive `#708010`, ink black `#000000`, warm cream `#F0F0E0`

All fonts and colors load automatically from `app/globals.css` and `app/layout.tsx`. Nothing to install separately.

## Brand details to know

- **Company:** Happy Frog ATM
- **Service:** Free, fully managed ATM placement for licensed cannabis dispensaries (the client supplies the machine, installs it, manages the cash, monitors it 24/7, and pays the dispensary a monthly commission on every transaction)
- **Coverage:** Nationwide (US — wherever cannabis is legal at the state level)
- **Contact:** kmckinley@happyfrogatm.com / (833) 818-8778

## Questions?

For technical questions: see `README.md` — it covers architecture, deployment, integration, and FAQ.

For brand or content questions: contact the client directly at the email above.

# GCC Elite Transport

Next.js 15 (App Router) + TypeScript + Tailwind CSS, exported as a fully static site.

## Cloudflare Pages
- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
- Environment variable: `NODE_VERSION` = `22`

## Edit business facts
`lib/site.ts` — phone/WhatsApp, email, routes, fleet, FAQs. `lib/pages.ts` — inner page content.
Hero and country/vehicle artwork are vector placeholders in `components/Art.tsx`; replace with real photography (WebP/AVIF in `public/`) when available.
The quote form opens WhatsApp with a pre-filled request (no backend needed).

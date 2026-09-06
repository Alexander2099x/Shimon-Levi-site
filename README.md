# אתר לחשמלאי למכירה — local website

Hebrew RTL sales template for an electrician, built from the user-selected T1 Energy / Refero direction. Configured for GitHub → Netlify continuous deployment.

## Run

```sh
npm install
npm run dev -- --hostname 127.0.0.1 --port 9275
```

Visit http://localhost:9275. Build with `npm run build` and type-check with `npx tsc --noEmit`.

`next.config.ts` uses a static export. Netlify runs `npm run build` and publishes `dist/client` as configured in `netlify.toml`.

## Content and assets

- Template placeholders: `[שם שלך]`, `[שם העסק שלך]`, `[הסמכה]`, `[אזור השירות שלך]` and `[שעות הפעילות שלך]` must be updated for each buyer.
- All contact links route to WhatsApp 053-715-6553. Replace this with the buyer's chosen contact route before their launch.
- Design reference: https://styles.refero.design/style/e79b761d-f476-4c5d-8943-e31a58664e4d
- Hero: KIE MCP, GPT Image 2. It is an illustrative generated image, not a real project photograph. No fabricated reviews or experience figures are shown.
- No API key or other credentials are included in this site. Contact uses direct phone/WhatsApp links without collecting submissions.
- Hebrew type: Heebo is served locally. Before a buyer's public launch, replace all template placeholders and review the legal pages for their real data flow. Preview is marked noindex.

Core files: `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `public/images/`.

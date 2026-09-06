# לביא חשמל — local website

Hebrew RTL landing page for שמעון לביא, built from the user-selected T1 Energy / Refero direction. Configured for GitHub → Netlify continuous deployment.

## Run

```sh
npm install
npm run dev -- --hostname 127.0.0.1 --port 9275
```

Visit http://localhost:9275. Build with `npm run build` and type-check with `npx tsc --noEmit`.

`next.config.ts` uses a static export. Netlify runs `npm run build` and publishes `dist/client` as configured in `netlify.toml`.

## Content and assets

- Main content: user's supplied Facebook post, 052-4242952, Ashkelon and surroundings, center by arrangement, evening availability until 21:00.
- Public identity/phone cross-check: https://easy.co.il/page/10139652
- Design reference: https://styles.refero.design/style/e79b761d-f476-4c5d-8943-e31a58664e4d
- Logo and hero: KIE MCP, GPT Image 2. Hero is an illustrative generated image, not a real project photograph. No fabricated reviews or experience figures are shown.
- No API key or other credentials are included in this site. Contact uses direct phone/WhatsApp links without collecting submissions.
- Hebrew type: Heebo from Google Fonts.
- Before public launch, verify the exact professional license title (the brief says מוסמך and the quoted post says ראשי) and business hours. Preview is marked noindex.

Core files: `app/page.tsx`, `app/globals.css`, `app/layout.tsx`, `public/images/`.

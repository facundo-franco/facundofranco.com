// Renders the 1200×630 social cards (app/**/opengraph-image.jpg) with the
// site's own fonts and colour tokens, by borrowing a page from a running build.
//
//   npm run build && npm start            # in one terminal
//   PW=playwright OUT=/tmp/og node scripts/og-cards.cjs
//
// Then copy /tmp/og/<name>.jpg to the route as opengraph-image.jpg and
// twitter-image.jpg ("home" → app/). Requires Playwright (not a dependency).
const { chromium } = require(process.env.PW || "playwright");
const OUT = process.env.OUT || ".";
const CARDS = [
  { file: 'home', eyebrow: 'Founder of ScoutHalo', title: 'Facundo<br>Franco.', size: 118,
    sub: 'Building location intelligence<br>for production teams.', bottom: '',
    photo: { src: '/images/facundo-franco-founder-scouthalo.png', w: 336, h: 420, pos: 'center 23%', filter: 'saturate(0.72) contrast(1.04) brightness(0.9)' } },
  { file: 'about', eyebrow: 'About', title: 'Facundo<br>Franco.', size: 108,
    sub: 'From Punta del Este, Uruguay, to founding ScoutHalo.', bottom: 'Founder of ScoutHalo',
    photo: { src: '/images/facundo-franco-about.jpg', w: 380, h: 355, pos: 'center' } },
  { file: 'building-scouthalo', eyebrow: 'Building ScoutHalo', title: 'From a note<br>to a product.', size: 88,
    sub: 'How an idea in my Notes became ScoutNYC, and then ScoutHalo.', bottom: 'Facundo Franco · Founder of ScoutHalo',
    photo: { src: '/images/scouthalo-build-room-uruguay-2026.jpg', w: 318, h: 424, pos: 'center' } },
  { file: 'now', eyebrow: 'Now', title: 'Now.', size: 118,
    sub: 'Turning ScoutHalo into a company, and building the next stage from Miami.', bottom: 'Facundo Franco · Founder of ScoutHalo',
    photo: { src: '/images/brickell-miami.jpg', w: 390, h: 390, pos: '50% 50%' } },
  { file: 'privacy', eyebrow: 'Legal', title: 'Privacy.', size: 118,
    sub: 'No accounts, forms, or cookies —<br>just privacy-friendly analytics and email.', bottom: 'Facundo Franco' },
  { file: 'exposure', eyebrow: 'Exposure', title: 'Exposure.', size: 118,
    sub: 'Talks, interviews and features with Facundo Franco and ScoutHalo.', bottom: 'Facundo Franco · Founder of ScoutHalo' },
];
const css = `
  html, body { margin: 0 !important; padding: 0 !important; background: #090d10 !important; }
  body > *:not(.og) { display: none !important; }
  .og { width: 1200px; height: 630px; box-sizing: border-box; display: flex; overflow: hidden;
    background: var(--background) radial-gradient(760px 460px at 88% -8%, rgba(99,217,232,0.11), transparent 62%);
    border-bottom: 2px solid rgba(99,217,232,0.55); font-family: var(--font-inter), sans-serif; }
  .og-left { flex: 1; min-width: 0; padding: 60px 40px 56px 72px; display: flex; flex-direction: column; justify-content: space-between; }
  .og-top { display: flex; align-items: center; gap: 18px; }
  .og-mark { width: 50px; height: 50px; display: grid; place-items: center; border: 1px solid var(--border); background: var(--surface);
    color: var(--cyan); font-family: var(--font-mono), monospace; font-size: 16px; letter-spacing: 0.12em; padding-left: 2px; box-sizing: border-box; }
  .og-site { color: var(--muted); font-family: var(--font-mono), monospace; font-size: 17px; letter-spacing: 0.16em; }
  .og-eyebrow { display: flex; align-items: center; gap: 16px; color: var(--cyan); font-family: var(--font-mono), monospace;
    font-size: 18px; letter-spacing: 0.16em; text-transform: uppercase; }
  .og-eyebrow::before { content: ""; width: 44px; height: 1.5px; background: var(--cyan); }
  .og-title { margin: 22px 0 0; color: var(--text); font-weight: 600; line-height: 0.93; letter-spacing: -0.06em; }
  .og-sub { margin: 26px 0 0; max-width: 620px; color: var(--muted); font-size: 28px; line-height: 1.42; letter-spacing: -0.015em; }
  .og-bottom { color: var(--subtle); font-family: var(--font-mono), monospace; font-size: 15px; letter-spacing: 0.14em; text-transform: uppercase; min-height: 18px; }
  .og-right { flex: none; padding: 0 72px 0 0; display: flex; align-items: center; }
  .og-photo { padding: 10px; border: 1px solid var(--border); background: var(--surface); }
  .og-photo div { overflow: hidden; background: var(--surface-raised); }
  .og-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
`;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto('http://localhost:3000/privacy', { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: css });
  for (const c of CARDS) {
    await p.evaluate((c) => {
      document.querySelectorAll('.og').forEach((e) => e.remove());
      const el = document.createElement('div'); el.className = 'og';
      const photo = c.photo ? `<div class="og-right"><div class="og-photo"><div style="width:${c.photo.w}px;height:${c.photo.h}px">
        <img src="${c.photo.src}" style="object-position:${c.photo.pos};${c.photo.filter ? 'filter:' + c.photo.filter : ''}"></div></div></div>` : '';
      el.innerHTML = `<div class="og-left">
          <div class="og-top"><span class="og-mark">FF</span><span class="og-site">FACUNDOFRANCO.COM</span></div>
          <div><p class="og-eyebrow">${c.eyebrow}</p><p class="og-title" style="font-size:${c.size}px">${c.title}</p><p class="og-sub">${c.sub}</p></div>
          <p class="og-bottom">${c.bottom}</p></div>${photo}`;
      document.body.prepend(el); window.scrollTo(0, 0);
    }, c);
    await p.waitForFunction(() => [...document.querySelectorAll('.og img')].every((i) => i.complete && i.naturalWidth > 0));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    await p.locator('.og').screenshot({ path: `${OUT}/${c.file}.jpg`, type: 'jpeg', quality: 90 });
  }
  await b.close();
})();

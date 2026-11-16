// Renders the 1200×630 social cards (app/**/opengraph-image.jpg) with the
// site's own fonts and colour tokens, by borrowing a page from a running build.
//
//   npm run build && npm start            # in one terminal
//   PW=playwright OUT=/tmp/og node scripts/og-cards.cjs
//   (BASE=http://localhost:3123 if the build runs on another port)
//
// Then copy /tmp/og/<name>.jpg to the route as opengraph-image.jpg and
// twitter-image.jpg ("home" → app/). Requires Playwright (not a dependency).
const { chromium } = require(process.env.PW || "playwright");
const OUT = process.env.OUT || ".";
// Sized for the X feed, where a 1200px card shows at ~516px (desktop) and
// ~343px (phone): every line is at least ~34px here so it stays ~10px there.
// No domain row (X prints the domain with the card) and nothing in the
// bottom-left corner, where some X clients overlay it.
const CARDS = [
  { file: 'home', title: 'Facundo<br>Franco.', size: 136,
    role: 'Founder &amp; CEO of ScoutHalo', sub: 'AI search for real-world places.',
    photo: { src: '/images/facundo-franco-founder-scouthalo.png', w: 260, h: 325, pos: 'center 23%', filter: 'saturate(0.72) contrast(1.04) brightness(0.9)' } },
  { file: 'about', eyebrow: 'About', title: 'Facundo<br>Franco.', size: 120,
    sub: 'From Punta del Este, Uruguay, to founding ScoutHalo.',
    photo: { src: '/images/facundo-franco-about.jpg', w: 300, h: 280, pos: 'center' } },
  { file: 'building-scouthalo', eyebrow: 'Building ScoutHalo', title: 'From a note<br>to a product.', size: 96,
    sub: 'How an idea in my Notes became ScoutNYC, and then ScoutHalo.',
    photo: { src: '/images/scouthalo-build-room-uruguay-2026.jpg', w: 255, h: 340, pos: 'center' } },
  { file: 'now', eyebrow: 'Now', title: 'Now.', size: 136,
    sub: 'Preparing to raise, building a founding team, and finding ScoutHalo’s first customers.',
    photo: { src: '/images/scouthalo-home-mobile-october-2026.webp', w: 240, h: 345, pos: 'center top' } },
  { file: 'privacy', eyebrow: 'Legal', title: 'Privacy.', size: 136,
    sub: 'No accounts, forms, or cookies —<br>just privacy-friendly analytics and email.' },
  { file: 'talks', eyebrow: 'Talks', title: 'Talks.', size: 136,
    sub: 'My first public talk: building ScoutHalo with AI agents, on DataCamp.' },
];
const css = `
  html, body { margin: 0 !important; padding: 0 !important; background: #090d10 !important; }
  body > *:not(.og) { display: none !important; }
  .og { width: 1200px; height: 630px; box-sizing: border-box; display: flex; align-items: center; overflow: hidden;
    background: var(--background) radial-gradient(760px 460px at 88% -8%, rgba(99,217,232,0.11), transparent 62%);
    border-bottom: 2px solid rgba(99,217,232,0.55); font-family: var(--font-inter), sans-serif; }
  .og-left { flex: 1; min-width: 0; padding: 0 48px 56px 80px; }
  .og-eyebrow { display: flex; align-items: center; gap: 18px; margin: 0 0 26px; color: var(--cyan);
    font-family: var(--font-mono), monospace; font-size: 24px; letter-spacing: 0.14em; text-transform: uppercase; }
  .og-eyebrow::before, .og-rule { content: ""; display: block; width: 48px; height: 2px; background: var(--cyan); }
  .og-rule { margin: 0 0 30px; }
  .og-title { margin: 0; color: var(--text); font-weight: 600; line-height: 0.92; letter-spacing: -0.06em; }
  .og-role { margin: 34px 0 0; color: var(--body); font-size: 38px; font-weight: 500; line-height: 1.25; letter-spacing: -0.02em; }
  .og-sub { margin: 30px 0 0; max-width: 760px; color: var(--muted); font-size: 34px; line-height: 1.36; letter-spacing: -0.015em; }
  .og-role + .og-sub { margin-top: 8px; }
  .og-right { flex: none; padding: 0 80px 56px 0; display: flex; align-items: center; }
  .og-photo { padding: 10px; border: 1px solid var(--border); background: var(--surface); }
  .og-photo div { overflow: hidden; background: var(--surface-raised); }
  .og-photo img { display: block; width: 100%; height: 100%; object-fit: cover; }
`;
(async () => {
  const b = await chromium.launch(); const p = await b.newPage({ viewport: { width: 1200, height: 630 } });
  await p.goto((process.env.BASE || 'http://localhost:3000') + '/privacy', { waitUntil: 'networkidle' });
  await p.addStyleTag({ content: css });
  for (const c of CARDS) {
    await p.evaluate((c) => {
      document.querySelectorAll('.og').forEach((e) => e.remove());
      const el = document.createElement('div'); el.className = 'og';
      const photo = c.photo ? `<div class="og-right"><div class="og-photo"><div style="width:${c.photo.w}px;height:${c.photo.h}px">
        <img src="${c.photo.src}" style="object-position:${c.photo.pos};${c.photo.filter ? 'filter:' + c.photo.filter : ''}"></div></div></div>` : '';
      el.innerHTML = `<div class="og-left">
          ${c.eyebrow ? `<p class="og-eyebrow">${c.eyebrow}</p>` : '<span class="og-rule"></span>'}
          <p class="og-title" style="font-size:${c.size}px">${c.title}</p>
          ${c.role ? `<p class="og-role">${c.role}</p>` : ''}
          <p class="og-sub">${c.sub}</p></div>${photo}`;
      document.body.prepend(el); window.scrollTo(0, 0);
    }, c);
    await p.waitForFunction(() => [...document.querySelectorAll('.og img')].every((i) => i.complete && i.naturalWidth > 0));
    await p.evaluate(() => document.fonts.ready);
    await p.waitForTimeout(300);
    await p.locator('.og').screenshot({ path: `${OUT}/${c.file}.jpg`, type: 'jpeg', quality: 90 });
  }
  await b.close();
})();

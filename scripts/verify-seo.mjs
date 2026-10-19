// Optional check for a running server. Not executed as part of this delivery.
import assert from 'node:assert/strict';
const base = process.env.CHECK_URL || 'http://localhost:3000';
const response = await fetch(base);
assert.equal(response.status, 200, 'Homepage should respond with HTTP 200');
const html = await response.text();
assert.match(html, /<html[^>]*lang="ru"/);
assert.equal((html.match(/<h1\b/g) || []).length, 1, 'Exactly one H1');
assert.match(html, /<title>[^<]*Temple/);
assert.match(html, /name="description"/);
assert.match(html, /CafeOrCoffeeShop/);
assert.match(html, /application\/ld\+json/);
assert.match(html, /Фридриха Энгельса/);
assert.match(html, /alt="[^\"]+"/);
assert.match(html, /id="menu"/);
assert.match(html, /id="contacts"/);
if (process.env.NEXT_PUBLIC_SITE_URL) {
  assert.match(html, /rel="canonical"/);
  const sitemap = await fetch(new URL('/sitemap.xml', base));
  assert.equal(sitemap.status, 200);
  assert.match(await sitemap.text(), /<url>/);
}
console.log('SEO document checks passed.');

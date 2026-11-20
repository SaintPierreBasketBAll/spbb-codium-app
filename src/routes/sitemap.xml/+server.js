import { siteOrigin } from '$lib/seo';
const pages = Object.keys(import.meta.glob('/src/routes/**/+page.svelte')).map(path => path.replace('/src/routes', '').replace('/+page.svelte', '') || '/').filter(path => path !== '/sinscrire');
export function GET() {
 return new Response('<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + pages.sort().map(path => '<url><loc>' + siteOrigin + path + '</loc></url>').join('') + '</urlset>', { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}

<script>
import '../app.css';
import { page } from '$app/stores';
import Footer from '$lib/components/Footer.svelte';
import Header from '$lib/components/Header.svelte';
import CookieBanner from '$lib/components/CookieBanner.svelte';
import { seoFor, siteOrigin } from '$lib/seo';
let { children } = $props();
const seo = $derived(seoFor($page.url.pathname));
const canonical = $derived(siteOrigin + ($page.url.pathname === '/' ? '/' : $page.url.pathname.replace(/\/$/, '')));
const organization = { '@context': 'https://schema.org', '@type': 'SportsOrganization', '@id': siteOrigin + '/#organization', name: 'Saint-Pierre Basket Ball', alternateName: 'SPBB', sport: 'Basketball', url: siteOrigin, logo: siteOrigin + '/images/logo.png', foundingDate: '2001-08-14', email: 'contact.spbb@gmail.com', address: { '@type': 'PostalAddress', streetAddress: '3 avenue de Soweto, Gymnase Nelson Mandela', postalCode: '97410', addressLocality: 'Saint-Pierre', addressRegion: 'La Réunion', addressCountry: 'FR' }, sameAs: ['https://www.facebook.com/SPBB974', 'https://www.instagram.com/saintpierrebasketball/'] };
const breadcrumb = $derived({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Accueil', item: siteOrigin + '/' }, ...($page.url.pathname === '/' ? [] : [{ '@type': 'ListItem', position: 2, name: seo.title, item: canonical }])] });
</script>
<svelte:head>
<title>{seo.title} | SPBB</title>
<meta name="description" content={seo.description} />
<link rel="canonical" href={canonical} />
<meta property="og:type" content="website" />
<meta property="og:locale" content="fr_FR" />
<meta property="og:site_name" content="Saint-Pierre Basket Ball" />
<meta property="og:title" content={seo.title} />
<meta property="og:description" content={seo.description} />
<meta property="og:url" content={canonical} />
<meta property="og:image" content={siteOrigin + '/images/logo.png'} />
<meta property="og:image:alt" content="Logo Saint-Pierre Basket Ball" />
<meta name="twitter:card" content="summary" />
{@html '<script type="application/ld+json">' + JSON.stringify(organization).replaceAll('<', '\u003c') + '</scr' + 'ipt>'}
{@html '<script type="application/ld+json">' + JSON.stringify(breadcrumb).replaceAll('<', '\u003c') + '</scr' + 'ipt>'}
</svelte:head>
<a class="skip-link" href="#main-content">Aller au contenu</a>
<Header />
<div id="main-content" tabindex="-1">{@render children()}</div>
<Footer />
<CookieBanner />
<style>
:global(html) { color-scheme: dark; }
.skip-link { position: fixed; top: -100px; left: 1rem; z-index: 2000; padding: 1rem; background: #fff; color: #111; }
.skip-link:focus { top: 1rem; }
</style>

<script>
	import '../app.css';
 /*  import Header from '$lib/components/Header.svelte'; */
	import Footer from '../lib/components/Footer.svelte';
  import Header from '../lib/components/Header.svelte';
  import CookieBanner from '../lib/components/CookieBanner.svelte';
	let { children } = $props();
</script>
<svelte:head>

  <script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "SportsOrganization"],
      "@id": "https://www.spbb.re/#organization",
      "name": "Saint-Pierre Basket Ball (SPBB)",
      "alternateName": "SPBB",
      "url": "https://www.spbb.re/",
      "logo": {
        "@type": "ImageObject",
        "@id": "https://www.spbb.re/#logo",
        "url": "https://www.spbb.re/images/logo.png",
        "contentUrl": "https://www.spbb.re/images/logo.png",
        "caption": "Logo du Saint-Pierre Basket Ball"
      },
      "image": {
        "@type": "ImageObject",
        "url": "https://www.spbb.re/images/spbb_img1.jpg",
        "caption": "Club Saint-Pierre Basket Ball"
      },
      "sameAs": [
        "https://www.facebook.com/SPBB974",
        "https://www.instagram.com/saintpierrebasketball/",
        /* Ajoutez d'autres profils si disponibles :
        "https://www.instagram.com/....",
        "https://www.youtube.com/@...."
        */
      ],
      "foundingDate": "19xx-01-01",
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "La Réunion",
        "identifier": "FR-RE"
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR",
        "addressRegion": "La Réunion",
        "addressLocality": "Saint-Pierre",
        "postalCode": "97410",
        "streetAddress": "GYMNASE NELSON MANDELA 3 AVENUE DE SOWETO 97410 SAINT-PIERRE"
      },
      "email": "mailto:contact.spbb@gmail.com",
      /* "telephone": "+262-XXX-XXX-XXX", */
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "contactType": "Administration",
          "email": "mailto:contact.spbb@gmail.com",
          /* "telephone": "+262-XXX-XXX-XXX", */
          "areaServed": "FR-RE",
          "availableLanguage": ["fr"]
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://www.spbb.re/#website",
      "url": "https://www.spbb.re/",
      "name": "Saint-Pierre Basket Ball",
      "inLanguage": "fr-RE",
      "publisher": { "@id": "https://www.spbb.re/#organization" }
      /* Si vous avez une recherche interne, décommentez et adaptez :
      ,"potentialAction": {
        "@type": "SearchAction",
        "target": "https://www.spbb.re/recherche?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
      */
    },
    {
      "@type": "WebPage",
      "@id": "https://www.spbb.re/#webpage",
      "url": "https://www.spbb.re/",
      "name": "Accueil — Saint-Pierre Basket Ball",
      "description": "Site officiel du Saint-Pierre Basket Ball (SPBB) : actualités, inscriptions, équipes, planning des entraînements et événements à Saint-Pierre, La Réunion.",
      "inLanguage": "fr-RE",
      "isPartOf": { "@id": "https://www.spbb.re/#website" },
      "about": { "@id": "https://www.spbb.re/#organization" },
      "primaryImageOfPage": {
        "@type": "ImageObject",
        "url": "https://www.spbb.re/og-image.jpg"
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Accueil",
            "item": "https://www.spbb.re/"
          }
        ]
      }
    }
    /* Exemple (facultatif) pour une page “Inscriptions” : copiez ce bloc dans la page /inscription
    ,{
      "@type": "WebPage",
      "@id": "https://www.spbb.re/inscription/#webpage",
      "url": "https://www.spbb.re/inscription/",
      "name": "Inscriptions — SPBB",
      "inLanguage": "fr-RE",
      "isPartOf": { "@id": "https://www.spbb.re/#website" },
      "about": { "@id": "https://www.spbb.re/#organization" },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.spbb.re/" },
          { "@type": "ListItem", "position": 2, "name": "Inscriptions", "item": "https://www.spbb.re/inscription/" }
        ]
      }
    }
    */
  ]
}
</script>


  <title>SPBB - Saint Pierre Basket Ball</title>
  <meta name="description" content="Bienvenue à l'association Saint Pierre Basket Ball (SPBB). Découvrez nos activités, événements et informations pratiques pour profiter pleinement du basket-ball à Saint Pierre." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link rel="icon" href="/favicon.ico" />
  <meta name="color-scheme" content="dark light">
<meta name="supported-color-schemes" content="dark light">
</svelte:head>
<!-- <Header/> -->
<Header/> 
	
{@render children()}
	
	
<Footer/>
<CookieBanner />


<style>
  :global(html) {
    color-scheme: dark light;
  }

    :root {
      --black: #000000;
      --white: #FFFFFF;
      --orange-light: #FFa500;
      --orange-dark: #FF4500;
      --grey: #808080;
      font-family: Arial, Helvetica, sans-serif;
    }

    @keyframes flameMove {
      0% {
        transform: translateY(0) scale(1);
      }

      100% {
        transform: translateY(-50px) scale(1.1);
      }
    }
  
    @media (max-width: 768px) {
    
    }   

    @media (max-width: 768px) {
     
    }

    @media screen and (max-width: 1024px) {
        
    }
        

    @media (max-width: 768px) {
      
    }
  </style>
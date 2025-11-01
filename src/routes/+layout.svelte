<script>
	import '../app.css';
 /*  import Header from '$lib/components/Header.svelte'; */
	import Footer from '../lib/components/Footer.svelte';
  import Header from '../lib/components/Header.svelte';
  import CookieBanner from '../lib/components/CookieBanner.svelte';
	let { children } = $props();
</script>
<svelte:head>
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
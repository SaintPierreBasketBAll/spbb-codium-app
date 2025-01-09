<script>
	import '../app.css';
 /*  import Header from '$lib/components/Header.svelte'; */
	import Footer from '../lib/components/Footer.svelte';
  import Header from '../lib/components/Header.svelte';
	let { children } = $props();
</script>

<Header/> 
	
{@render children()}
	
	
<Footer/>

<style>
    :root {
      --black: #000000;
      --white: #FFFFFF;
      --orange-light: #FFA500;
      --orange-dark: #FF4500;
      --grey: #808080;
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
<script>
    import { onDestroy } from 'svelte';
    import NewsCard from './NewsCard.svelte';
    import * as newsUtils from '../lib/utils/fetchNews.js';
  
    let news = [];
  
    async function loadNews() {
      try {
        news = await newsUtils.fetchNews();
      } catch (error) {
        console.error('Erreur lors de la récupération des actualités', error);
      }
    }
  
    loadNews();
    onDestroy(() => {
      // Cleanup if nécessaire
    });
  </script>
<section class="bg-zinc-900 text-white py-12">
  <div class="container mx-auto py-10">
    <!-- Titre de la section -->
    <h2 class="text-3xl font-bold text-center text-orange-400 mb-10">Actualités</h2>

    <!-- Grille de cartes -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <!-- Première carte -->
      <div class="bg-zinc-800 rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img src="https://via.placeholder.com/400x250" alt="Image Tacos" class="w-full h-48 object-cover">
          
        </div>
        <div class="p-5">
          <div class="bg-grey bg-opacity-60 text-orange-400 text-sm  py-1 rounded-br-lg">
            15 Mai 2023
          </div>
          <h3 class="text-lg font-bold mb-2">Victoire écrasante en finale régionale</h3>
          <p class="text-gray-300 text-sm mb-4">
            Notre équipe senior a remporté la finale régionale avec un score de 89-65. Une performance remarquable qui nous qualifie pour les championnats nationaux.
          </p>
          <a href="#" class="text-orange-400 hover:underline text-sm font-semibold">
            Lire la suite &rarr;
          </a>
        </div>
      </div>

      <!-- Deuxième carte -->
      <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img src="https://via.placeholder.com/400x250" alt="Image Basketball" class="w-full h-48 object-cover">
          <div class="absolute top-0 left-0 bg-black bg-opacity-60 text-gray-300 text-sm px-3 py-1 rounded-br-lg">
            10 Mai 2023
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-lg font-bold mb-2">Stage d'été 2023 : Inscriptions ouvertes</h3>
          <p class="text-gray-300 text-sm mb-4">
            Les inscriptions pour notre stage d'été sont maintenant ouvertes. Une occasion unique pour les jeunes de 8 à 16 ans de progresser.
          </p>
          <a href="#" class="text-orange-400 hover:underline text-sm font-semibold">
            Lire la suite &rarr;
          </a>
        </div>
      </div>

      <!-- Troisième carte -->
      <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div class="relative">
          <img src="https://via.placeholder.com/400x250" alt="Image Tacos Partenariat" class="w-full h-48 object-cover">
          <div class="absolute top-0 left-0 bg-black bg-opacity-60 text-gray-300 text-sm px-3 py-1 rounded-br-lg">
            5 Mai 2023
          </div>
        </div>
        <div class="p-5">
          <h3 class="text-lg font-bold mb-2">Nouveau partenariat équipementier</h3>
          <p class="text-gray-300 text-sm mb-4">
            Nous sommes fiers d'annoncer notre nouveau partenariat avec un équipementier majeur pour la saison 2023-2024.
          </p>
          <a href="#" class="text-orange-400 hover:underline text-sm font-semibold">
            Lire la suite &rarr;
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  
  <!-- <section class="actualites bg-gray-100 py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8">Actualités</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each news as item}
          <NewsCard title={item.title} description={item.description} date={item.date} />
        {/each}
      </div>
    </div>
  </section> -->
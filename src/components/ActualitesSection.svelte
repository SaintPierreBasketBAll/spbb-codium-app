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
  
  <section class="actualites bg-gray-100 py-16">
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold mb-8">Actualités</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {#each news as item}
          <NewsCard title={item.title} description={item.description} date={item.date} />
        {/each}
      </div>
    </div>
  </section>
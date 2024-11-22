<script>
    import { onMount } from 'svelte';
  
    let message = 'Rejoignez-nous';
    onMount(() => {
      // Par exemple, personnalisation dynamique lors du montage du composant
      message = 'Rejoignez notre équipe !';
    });
  </script>
  
  <section class="hero relative text-white py-36">
    <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('spbb_img1.jpg');">
      <div class="absolute inset-0 bg-black opacity-70">
        
      </div>
    </div>
    <div class="container mx-auto relative text-center">
      <h1 class="text-5xl font-bold">Saint-Pierre Basket Ball</h1>
      <p class="text-lg mt-4">Passion, Performance, Excellence</p>
      <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 mt-8 rounded">
        {message}
      </button>
    </div>
  </section>
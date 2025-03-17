import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel(),
    // Autres réglages si nécessaires
    alias: {
      $components: './src/lib/components',
      $lib: '/src/lib',
      $utils: './src/utils',
      $stores: './src/stores',
      $styles: './src/styles',
      $routes: './src/routes',
      $assets: './src/assets'
    }
  }
};
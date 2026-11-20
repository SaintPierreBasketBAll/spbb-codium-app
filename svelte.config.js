import vercel from '@sveltejs/adapter-vercel';
import auto from '@sveltejs/adapter-auto';

// Sur Windows, la prévisualisation locale utilise la sortie de SvelteKit.
const localWindows = process.platform === 'win32' && process.env.VERCEL !== '1';

export default {
  kit: {
    adapter: localWindows ? auto() : vercel(),
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

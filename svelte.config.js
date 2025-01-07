import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel(),
    // Autres réglages si nécessaires
  }
};
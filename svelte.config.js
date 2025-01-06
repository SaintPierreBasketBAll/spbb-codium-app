import vercel from '@sveltejs/adapter-vercel';

export default {
  kit: {
    adapter: vercel({
      runtime: 'nodejs20.x' // ou 'nodejs20.x'
    })
  }
};
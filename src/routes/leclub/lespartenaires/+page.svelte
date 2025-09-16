<!-- +page.svelte -->
<svelte:head>
  <title>Nos Partenaires — SPBB</title>
  <meta name="description" content="Découvrez les partenaires officiels du SPBB." />
</svelte:head>

<script>
  // Images présentes dans /static/images/partners
  const partners = [
    { src: '/images/partners/NEVA.png', alt: 'Neva' },
    { src: '/images/partners/atlas.png', alt: 'Atlas' },
    { src: '/images/partners/capri-sun.png', alt: 'Capri-Sun' },
    { src: '/images/partners/cindy-brows.png', alt: 'Cindy Brows' },
    { src: '/images/partners/cot.png', alt: 'COT' },
    { src: '/images/partners/dk&co.png', alt: 'DK & Co' },
    { src: '/images/partners/garage-oltra.png', alt: 'Garage Oltra' },
    { src: '/images/partners/kitm_logo_400.png', alt: 'Kit-M' },
    { src: '/images/partners/kokot.png', alt: 'Kokot' },
    { src: '/images/partners/la-caz-a-peche.png', alt: 'La Caz à Pêche' },
    { src: '/images/partners/logo_ffbb.png', alt: 'Fédération Française de BasketBall (FFBB)' },
    { src: '/images/partners/logo_lrbb.jpeg', alt: 'Ligue Régionale de BasketBall de La Réunion (LRBB)' },
    { src: '/images/partners/logo_ostl.png', alt: 'OSTL Saint‑Pierre' },
    { src: '/images/partners/logo_saint_pierre1.png', alt: 'Ville de Saint‑Pierre (blason)' },
    { src: '/images/partners/nestle.png', alt: 'Nestlé' },
    { src: '/images/partners/oasis.png', alt: 'Oasis' },
    { src: '/images/partners/snack-le-boulevard.jpg', alt: 'Snack Le Boulevard' },
    { src: '/images/partners/u-express.png', alt: 'U Express' },
    { src: '/images/partners/univers-pharmacie.png', alt: 'Univers Pharmacie' }
  ];
</script>

<section class="partners" aria-labelledby="partners-title">
      <h2 class="section-title">Nos Partenaires</h2>
  <div class="partners__container">
    <h1 id="partners-title" class="partners__title">Nos Partenaires</h1>

    <ul class="partners__grid" role="list">
      {#each partners as p}
        <li class="partners__item">
          {#if p.href}
            <a class="partners__logo partners__logo--link" href={p.href} target="_blank" rel="noopener noreferrer">
              <img class="partners__logo-img" src={p.src} alt={p.alt} loading="lazy" />
            </a>
          {:else}
            <div class="partners__logo" role="img" aria-label={p.alt}>
              <img class="partners__logo-img" src={p.src} alt={p.alt} loading="lazy" />
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  /* ===== Block: partners ===== */
  .partners {
    background-color: #0f0f0f; /* fond sombre pour matcher le header */
    color: #fff;
  }

  .partners__container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 32px 20px 48px;
  }

  .partners__title {
    margin: 0 0 28px;
    font-size: 2rem;
    font-weight: 700;
    line-height: 1.2;
    color: #ff7a00; /* orange du site */
    text-align: center;
  }

  /* ===== Grille ===== */
  .partners__grid {
    display: flex;
    flex-wrap: wrap;
    gap: 28px 36px; /* row / column gaps */
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  .partners__item {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* ===== Logo wrapper ===== */
  .partners__logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;

    /* Dimension visuelle uniforme pour tous les logos */
    width: min(240px, 40vw);
    height: 120px;

    /* pour centrer les images différentes */
    padding: 8px 10px;
    background: transparent;
    border-radius: 8px;
    box-sizing: border-box;

    /* pas d'effet de niveaux de gris */
    transition: transform 0.25s ease, background-color 0.25s ease;
  }

  .partners__logo--link {
    text-decoration: none;
    cursor: pointer;
  }

  .partners__logo:hover,
  .partners__logo:focus-within {
    transform: translateY(-2px);
    background-color: rgba(255, 255, 255, 0.04);
  }

  /* ===== Image ===== */
  .partners__logo-img {
    /* règle clé : garde les proportions et s’adapte au même "cadre" */
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    display: block;
  }
   .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

  /* ===== Responsif ===== */
  @media (min-width: 640px) {
    .partners__logo {
      width: 220px;
      height: 120px; /* hauteur uniforme principale */
    }
  }

  @media (min-width: 960px) {
    .partners__logo {
      width: 240px;
      height: 130px;
    }
  }
</style>

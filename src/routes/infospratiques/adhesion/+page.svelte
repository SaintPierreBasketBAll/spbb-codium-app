<script>
  import { onMount } from 'svelte';

  onMount(() => {
    const renderInstagramPost = () => window.instgrm?.Embeds.process();
    const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]');

    if (existingScript) {
      renderInstagramPost();
      existingScript.addEventListener('load', renderInstagramPost, { once: true });
      return () => existingScript.removeEventListener('load', renderInstagramPost);
    }

    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.addEventListener('load', renderInstagramPost, { once: true });
    document.body.appendChild(script);

    return () => script.removeEventListener('load', renderInstagramPost);
  });
</script>

<section class="trial">
  <h2 class="section-title">Deux séances d’essai offertes</h2>
  <div class="trial__content">
    <p>
      Avant toute nouvelle inscription, chaque futur licencié a droit à <strong>deux séances d’essai gratuites</strong>.
    </p>
    <ul class="trial__steps">
      <li>Consultez le planning des entraînements sur notre site : <a href="https://www.spbb.re" target="_blank" rel="noopener">www.spbb.re</a></li>
      <li>Rendez-vous le jour de l’entraînement correspondant à votre catégorie</li>
      <li>Demandez simplement un essai au coach présent</li>
    </ul>
  </div>
</section>

<section class="categories">
  <h2 class="section-title">Catégories &amp; années de naissance</h2>
  <div class="categories__embed">
    <blockquote
      class="instagram-media"
      data-instgrm-captioned
      data-instgrm-permalink="https://www.instagram.com/p/DclXaIXlshK/"
      data-instgrm-version="14"
    >
      <a
        href="https://www.instagram.com/p/DclXaIXlshK/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Voir les catégories et années de naissance sur Instagram
      </a>
    </blockquote>
  </div>
</section>

<section class="membership">
  <h2 class="section-title">Adhésion et Licence</h2>
  <div class="membership-container">
    <p class="membership-info">
      Le montant de l’adhésion pour la licence du <strong
        >Saint-Pierre Basket-Ball (SPBB)</strong
      >
      est fixé à <span class="highlight">150 euros (hors assurances)</span> pour la saison.
    </p>

    <div class="payment-options">
      <p>
        💳 <strong>Paiement :</strong> De préférence
        <span class="highlight">directement en ligne lors de l'inscription sur le site de la ligue, ou par virement bancaire</span>.
      </p>
     
        <a href="/infospratiques/tarifsetaides"> <p>
        📆 <strong>📌 Aide financière : Cliquez ici pour plus d’informations</strong>— aide disponible via
        <span class="highlight">le Pass Sport.</span>
      </p></a>
      <p>
        🛡️ <strong>Assurance :</strong> L'assurance proposée lors de la
        souscription est <span class="highlight">optionnelle</span> et son coût
        est <span class="highlight">en supplément</span> de la licence.
      </p>
    </div>

    <p class="membership-contact">
      Pour toute question concernant les inscriptions, vous pouvez nous contacter à l’adresse suivante : <a
        href="mailto:inscription.spbb@gmail.com"
        class="email-link">communication.spbb@gmail.com
</a
      >
    </p>
  </div>
  
  <a class="membership__cta" href="/inscription">S'inscrire</a>
</section>

<style>
  .section-title {
    padding-top: 4rem;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  .membership {
    padding: 1rem 2rem;
    background-color: #1a1a1a;
    position: relative;
    text-align: center;
  }

  .membership-container {
    max-width: 800px;
    margin: 0 auto;
    color: var(--grey);
    line-height: 1.6;
  }

  .membership-info {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }

  .payment-options p {
    margin-bottom: 1rem;
  }

  .highlight {
    color: var(--orange-light);
    font-weight: bold;
  }

  .email-link {
    color: var(--orange-light);
    text-decoration: none;
    font-weight: bold;
  }

  .email-link:hover {
    text-decoration: underline;
  }
  .membership__cta {
    display: inline-block;
    margin-top: 2rem;
    padding: 0.9rem 1.4rem;
    border-radius: 10px;
    border: 2px solid var(--orange-light);
    color: var(--orange-light);
    text-decoration: none;
    font-weight: 700;
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
  }
  .membership__cta:hover {
    transform: translateY(-1px);
    background-color: var(--orange-light);
    color: #111;
  }

  :root {
    --black: #000000;
    --white: #FFFFFF;
    --orange-light: #FFA500;
    --orange-dark: #FF4500;
    --grey: #808080;
  }

  /* =============================
     Deux séances d’essai (trial)
     ============================= */
  .trial {
    padding: 2rem;
    background-color: #1a1a1a;
  }
  .trial__content {
    max-width: 900px;
    margin: 0 auto;
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    color: var(--white);
    border-radius: 15px;
    padding: 1.5rem;
  }
  .trial__content p {
    font-size: 1.1rem;
    margin-bottom: 0.75rem;
  }
  .trial__steps {
    list-style: none;
    padding-left: 0;
  }
  .trial__steps li {
    position: relative;
    padding-left: 1.25rem;
    margin: 0.4rem 0;
    color: var(--grey);
  }
  .trial__steps li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--orange-light);
  }
  .trial a { color: var(--orange-light); }

  /* =============================
     Catégories (publication Instagram)
     ============================= */
  .categories {
    padding: 2rem;
     /* background-color: #e0e0e0;  */
    background: linear-gradient(
      180deg,
      rgb(0, 0, 0) 0%,
      rgb(171, 168, 168) 50%,
      rgba(255, 255, 255) 100%
      );
  }
  .categories__embed {
    width: 100%;
    max-width: 540px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    min-height: 500px;
  }

  .categories__embed :global(.instagram-media),
  .categories__embed :global(iframe) {
    width: 100%;
    max-width: 540px;
    min-width: 0 !important;
    margin: 0 auto !important;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.35);
  }

  .categories__embed > blockquote {
    box-sizing: border-box;
    padding: 1.25rem;
    background: #fff;
    color: #262626;
    text-align: center;
  }

  .categories__embed > blockquote a {
    color: #c13584;
    font-weight: 700;
  }

  @media (max-width: 600px) {
    .categories {
      padding-inline: 1rem;
    }

    .categories__embed {
      min-height: 420px;
    }
  }
</style>

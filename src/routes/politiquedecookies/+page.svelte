  <script>
    import { onMount } from 'svelte';

    let showScrollTop = false;

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onMount(() => {
      const handleScroll = () => {
        showScrollTop = window.scrollY > 120;
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    });
  </script>


  <main class="legal">
    <div class="legal__logo">
      <img src="/images/logo.png" alt="Logo SPBB Saint-Pierre Basket Ball" />
    </div>
    <h1 class="legal__title">Politique de cookies (UE)</h1>
    <div class="legal__subtitle">Utilisation des cookies sur le site du SPBB – Saint-Pierre Basket Ball</div>

    <section class="legal__section">
      <div class="legal__section-title">1. Qu'est-ce qu'un cookie ?</div>
      <div class="legal__content">
        Un cookie est un petit fichier texte enregistré sur votre appareil lors de la consultation d’un site internet. Il permet de collecter des informations relatives à votre navigation et d’adapter certains services à votre terminal.
    </section>

    <section class="legal__section">
      <div class="legal__section-title">2. Utilisation des cookies sur ce site</div>
      <div class="legal__content">
        Le site www.spbb.re utilise différents types de cookies :
        <ul class="legal__list">
          <li><strong>Cookies strictement nécessaires</strong> : essentiels au fonctionnement du site (navigation, accès aux espaces sécurisés, etc.).</li>
          <li><strong>Cookies de mesure d’audience</strong> : permettent de mesurer la fréquentation et d’améliorer le contenu.</li>
          <li><strong>Cookies fonctionnels</strong> : facilitent l’utilisation du site en mémorisant vos choix ou préférences.</li>
        </ul>
        Aucun cookie publicitaire n’est utilisé.
    </section>

    <section class="legal__section">
      <div class="legal__section-title">3. Consentement</div>
      <div class="legal__content">
        Lors de votre première visite, un bandeau vous informe de la présence de cookies. En poursuivant votre navigation sur le site, vous acceptez l’utilisation des cookies décrits dans cette politique.<br>
        Vous pouvez à tout moment refuser ou paramétrer l’utilisation des cookies via les réglages de votre navigateur.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">4. Gestion des cookies</div>
      <div class="legal__content">
        Vous pouvez désactiver les cookies en modifiant les paramètres de votre navigateur. Le refus de certains cookies peut dégrader votre expérience utilisateur. <br>
        Pour en savoir plus : 
        <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener">Consulter le guide de la CNIL</a>.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">5. Durée de conservation</div>
      <div class="legal__content">
        Les cookies sont conservés pour une durée maximale de 13 mois à compter de leur dépôt sur votre terminal.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">6. Vos droits</div>
      <div class="legal__content">
        Conformément au RGPD et à la loi Informatique et Libertés, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition sur vos données personnelles collectées via les cookies.<br>
        Pour exercer ces droits, contactez-nous à : <a href="mailto:contact.spbb@gmail.com">contact.spbb@gmail.com</a>
      </div>
    </section>

    <section class="legal__section">
  {#if showScrollTop}
    <button class="scrolltop" aria-label="Retour en haut" title="Remonter en haut" on:click={scrollToTop}>
      ↑
    </button>
  {/if}
    </section>

    <div class="legal__footer">
      &copy; SPBB – Saint-Pierre Basket Ball, 2001‑2025. Tous droits réservés.
    </div>
  </main>
  <!-- Removed duplicate scroll-to-top button outside the conditional block -->

  <style>
   
    .legal {
      max-width: 800px;
      margin: 80px auto 20px auto;
      background: #fff;
      border-radius: 24px;
      box-shadow: 0 8px 32px rgba(39, 71, 135, 0.13);
      padding: 32px 24px 24px 24px;
      box-sizing: border-box;
    }
    .legal__logo {
      display: flex;
      justify-content: center;
      margin-bottom: 18px;
    }
    .legal__logo img {
      width: 150px;
      max-width: 90vw;
      height: auto;
      border-radius: 0;
      box-shadow: 0 4px 22px 0 rgba(0,0,0,0.08);
      background: none;
      padding: 0;
      margin: 0;
    }
    .legal__title {
      background: linear-gradient(90deg, #ff5722 0%, #ff9800 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 2.5rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: 1px;
      text-align: center;
    }
    .legal__subtitle {
      font-size: 1.15rem;
      color: #444;
      margin: 0 0 28px 0;
      text-align: center;
      font-weight: 400;
    }
    .legal__section {
      margin-bottom: 30px;
    }
    .legal__section-title {
      font-size: 1.25rem;
      font-weight: 700;
      color: #ff9800;
      margin: 20px 0 10px 0;
    }
    .legal__content {
      font-size: 1rem;
      color: #222;
      margin: 0 0 10px 0;
    }
    .legal__content a {
      color: #C2922B; /* jaune foncé */
      text-decoration: none;
      transition: color .2s;
    }
    .legal__content a:hover {
      color: #ff9800; /* orange vif */
      text-decoration: underline;
    }
    .legal__list {
      padding-left: 20px;
      margin-top: 5px;
    }
    .legal__footer {
      text-align: center;
      color: #999;
      margin-top: 36px;
      font-size: .95rem;
    }
    .scrolltop {
      position: fixed;
      right: 32px;
      bottom: 32px;
      background: linear-gradient(90deg, #255af2 0%, #993eea 100%);
      color: #fff;
      border: none;
      border-radius: 50%;
      width: 48px;
      height: 48px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0 4px 18px rgba(39, 71, 135, 0.18);
      font-size: 1.7rem;
      transition: background .2s;
      z-index: 9;
      opacity: 0.93;
    }
    .scrolltop:hover { opacity: 1; }
    @media (max-width: 600px) {
      .legal {
        padding: 18px 4vw 16px 4vw;
        border-radius: 12px;
      }
      .legal__title { font-size: 2rem; }
      .legal__section-title { font-size: 1.13rem; }
      .legal__logo img { width: 110px; }
    }
  </style>
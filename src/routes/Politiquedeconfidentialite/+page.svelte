  <script>
    import { onMount } from 'svelte';

    let btnScroll;

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    onMount(() => {
      btnScroll.style.display = 'none';
      window.addEventListener('scroll', () => {
        btnScroll.style.display = (window.scrollY > 120) ? 'flex' : 'none';
      });
    });
  </script>



  <main class="legal">
    <div class="legal__logo">
       <img src="/images/logo.png" alt='logo S.P.B.B'/>
    </div>
    <h1 class="legal__title">Politique de confidentialité</h1>
    <div class="legal__subtitle">Protection des données personnelles sur le site du SPBB – Saint-Pierre Basket Ball</div>

    <section class="legal__section">
      <div class="legal__section-title">1. Préambule</div>
      <div class="legal__content">
        Le SPBB s’engage à protéger la confidentialité des utilisateurs de son site www.spbb.re, conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">2. Données collectées</div>
      <div class="legal__content">
        Les données collectées sur ce site le sont principalement via :
        <ul class="legal__list">
          <li>Formulaires de contact et d’inscription (nom, prénom, adresse e-mail, numéro de téléphone, informations sur la pratique sportive, etc.)</li>
          <li>Formulaires d’abonnement à la newsletter</li>
          <li>Données techniques de navigation (adresse IP, navigateur, cookies…)</li>
        </ul>
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">3. Utilisation des données</div>
      <div class="legal__content">
        Les données personnelles collectées sont utilisées pour :
        <ul class="legal__list">
          <li>Gérer les inscriptions, adhésions et relations avec les membres</li>
          <li>Répondre aux demandes adressées via le formulaire de contact</li>
          <li>Envoyer la newsletter si vous y avez consenti</li>
          <li>Respecter les obligations légales ou réglementaires</li>
        </ul>
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">4. Conservation des données</div>
      <div class="legal__content">
        Les données sont conservées pendant la durée strictement nécessaire à la gestion de la relation ou pour répondre aux obligations légales du SPBB.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">5. Destinataires des données</div>
      <div class="legal__content">
        Les données sont destinées uniquement au SPBB et ne sont jamais cédées à des tiers, sauf obligation légale ou accord exprès de votre part.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">6. Sécurité des données</div>
      <div class="legal__content">
        Le SPBB met en œuvre toutes les mesures de sécurité nécessaires pour garantir la confidentialité et l’intégrité de vos données (stockage sécurisé, accès limité, etc.).
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">7. Vos droits</div>
      <div class="legal__content">
        Conformément à la législation en vigueur, vous disposez des droits suivants sur vos données :
        <ul class="legal__list">
          <li>Droit d’accès</li>
          <li>Droit de rectification</li>
          <li>Droit d’opposition</li>
          <li>Droit à l’effacement (“droit à l’oubli”)</li>
          <li>Droit à la limitation du traitement</li>
          <li>Droit à la portabilité</li>
        </ul>
        Pour exercer vos droits ou pour toute question sur le traitement de vos données, contactez-nous à l’adresse suivante :
        <a href="mailto:contact.spbb@gmail.com">contact.spbb@gmail.com</a>
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">8. Cookies</div>
      <div class="legal__content">
        Le site www.spbb.re utilise des cookies pour le bon fonctionnement du site et à des fins statistiques. Vous pouvez configurer votre navigateur pour refuser les cookies. Pour en savoir plus, consultez notre <a href="/mentions-legales">page Mentions légales</a>.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">9. Modification de la politique</div>
      <div class="legal__content">
        Le SPBB se réserve le droit de modifier à tout moment la présente politique de confidentialité. Toute modification sera affichée sur cette page avec la date de mise à jour.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">10. Contact</div>
      <div class="legal__content">
        Pour toute question relative à la présente politique ou à vos données, vous pouvez écrire à :
  <button
    class="scrolltop"
    aria-label="Retour en haut"
    title="Remonter en haut"
    bind:this={btnScroll}
    on:click={scrollToTop}
  >
    ↑
  </button>

    <div class="legal__footer">
      &copy; SPBB – Saint-Pierre Basket Ball, 2001‑2025. Tous droits réservés.
    </div>
  </main>

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
<script>import { openConsentSettings } from '$lib/consent';</script>
<main class="legal"><h1 class="legal__title">Politique de cookies et médias externes</h1>
<section class="legal__section"><h2>Votre choix</h2><div class="legal__content">Les cartes Google Maps et les médias Facebook, Instagram ou Canva sont bloqués tant que vous n’avez pas autorisé leur chargement. La poursuite de navigation ne vaut pas acceptation. Vous pouvez tout refuser et consulter les informations du club sans ces intégrations.</div></section>
<section class="legal__section"><h2>Personnaliser ou retirer votre accord</h2><div class="legal__content"><button type="button" onclick={openConsentSettings}>Gérer mes préférences</button><p>Les boutons « Tout accepter » et « Tout refuser » sont proposés au même niveau. Le retrait de votre accord désactive les intégrations chargées sur le site ; les cookies déjà déposés par un service tiers peuvent être supprimés dans votre navigateur.</p></div></section>
<section class="legal__section"><h2>Mémorisation du choix</h2><div class="legal__content">Votre choix est conservé pendant six mois dans le stockage local de votre navigateur, sous la clé spbb-consent-v1. Ce stockage sert uniquement à mémoriser vos préférences. Si votre navigateur le bloque, le choix reste actif pendant la visite.</div></section>
<section class="legal__section"><h2>Services externes</h2><div class="legal__content">Les médias et cartes autorisés se connectent à leurs fournisseurs, qui peuvent recevoir notamment votre adresse IP et des informations de navigation. Un lien ouvrant un service externe vous conduit sur un site qui applique sa propre politique de confidentialité. Aucun outil de mesure d’audience ni de publicité n’est intégré directement dans le code du site.</div></section>
<section class="legal__section"><h2>Nous contacter</h2><div class="legal__content"><a href="mailto:contact.spbb@gmail.com">contact.spbb@gmail.com</a>. <a href="https://www.cnil.fr/fr/cookies-les-outils-pour-les-maitriser" target="_blank" rel="noopener noreferrer">Conseils de la CNIL pour gérer les traceurs</a>.</div></section>
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
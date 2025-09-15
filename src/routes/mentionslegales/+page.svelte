  <main class="legal">
    <div class="legal__logo">
      <img src="/images/logo.png" />
    </div>
    <h1 class="legal__title">Mentions légales</h1>
    <div class="legal__subtitle">Site officiel du SPBB – Saint-Pierre Basket Ball (La Réunion)</div>

    <section class="legal__section">
      <div class="legal__section-title">1. Éditeur du site</div>
      <div class="legal__content">
        <strong>SPBB – Saint-Pierre Basket Ball</strong><br>
        Association loi 1901, RNA&nbsp;: <strong>W9R2000412</strong> (créée le 14 août 2001)<br>
        Siège social : Gymnase Nelson Mandela, 3 avenue de Soweto, 97410 Saint-Pierre, La Réunion<br>
        Directeur de la publication : Frédéric Morel (Secrétaire Général)<br>
        Contact principal&nbsp;: <a href="mailto:contact.spbb@gmail.com">contact.spbb@gmail.com</a>
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">2. Hébergement</div>
      <div class="legal__content">
        <strong>Vercel Inc.</strong> – 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br>
        <a href="https://vercel.com" target="_blank" rel="noopener">https://vercel.com</a>
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">3. Conception et développement</div>
      <div class="legal__content">
        Réalisé par <strong>RunMyWeb by Frédéric Morel</strong><br>
        Entrepreneur individuel, SIRET&nbsp;: <strong>907 493 142 00018</strong><br>
        Contact : <a href="mailto:runmyweb974@gmail.com">runmyweb974@gmail.com</a>
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">4. Propriété intellectuelle</div>
      <div class="legal__content">
        Tous les contenus de ce site (textes, images, logos, PDF…) sont la propriété exclusive de SPBB ou de leurs auteurs respectifs. Toute reproduction, représentation ou diffusion, même partielle, est strictement interdite sans autorisation écrite préalable.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">5. Données personnelles &amp; RGPD</div>
      <div class="legal__content">
        Les données collectées via les formulaires sont utilisées uniquement pour l’inscription, la communication interne ou la newsletter du club.<br>
        Conformément au RGPD, vous pouvez exercer vos droits d’accès, de modification ou de suppression par e-mail à <a href="mailto:contact.spbb@gmail.com">contact.spbb@gmail.com</a>.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">6. Cookies</div>
      <div class="legal__content">
        Ce site peut utiliser des cookies à des fins statistiques ou pour améliorer votre expérience utilisateur. Vous pouvez configurer votre navigateur pour les refuser à tout moment.
      </div>
    </section>

    <section class="legal__section">
      <div class="legal__section-title">7. Responsabilité</div>
      <div class="legal__content">
        SPBB met tout en œuvre pour fournir des informations fiables, mais ne garantit pas l’exactitude permanente. L’utilisation du site se fait sous la seule responsabilité de l’utilisateur.
      </div>
    </section>

    <div class="legal__footer">
      &copy; SPBB – Saint-Pierre Basket Ball, 2001‑2025. Tous droits réservés.
    </div>
  </main>
  <button class="scrolltop" aria-label="Retour en haut" title="Remonter en haut" on:click={() => window.scrollTo({top:0,behavior:'smooth'})}>
    ↑
  </button>

   <style>
  
    .legal {
      max-width: 800px;
      margin: 140px auto 20px auto;
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
      background: linear-gradient(90deg, #ff3c00 0%, #ff9800 100%);
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
      color: #ff5e00;
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
  

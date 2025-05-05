<script>
  import Title from "$lib/components/atomic/Title.svelte";
  import Subtitle from "$lib/components/atomic/Subtitle.svelte";
  import Text from "$lib/components/atomic/Text.svelte";
  import Card from "$lib/components/atomic/Card.svelte";
  import Section from "$lib/components/atomic/Section.svelte";
  import Icon from "$lib/components/atomic/Icon.svelte";
</script>

<Section backgroundColor="#1a1a1a" padding="6rem 2rem">
  <!-- En-tête de l'inscription -->
  <Title text="INSCRIPTION AU SPBB" />
  <Subtitle text="Rejoignez la communauté et développez vos talents !" />
  <Text
    content="Remplissez le formulaire ci-dessous pour vous inscrire et découvrir nos programmes d'entraînement, compétitions et formations. Nous sommes impatients de vous accueillir !"
  />

  <!-- Carte d'inscription -->
  <Card>
    <div class="signup-card">
      <div class="signup-card__header">
        <Icon name="basketball" />
        <Title text="Inscrivez-vous" />
      </div>
      <Text
        content="Entrez vos informations personnelles et commencez votre aventure avec SPBB."
      />
      <!-- Formulaire d'inscription simplifié -->
      <form>
        <div class="signup-card__group">
          <label for="fullname">Nom complet :</label>
          <input type="text" id="fullname" placeholder="Votre nom complet" />
        </div>
        <div class="signup-card__group">
          <label for="email">Email :</label>
          <input type="email" id="email" placeholder="Votre adresse email" />
        </div>
        <div class="signup-card__group">
          <label for="password">Mot de passe :</label>
          <input
            type="password"
            id="password"
            placeholder="Votre mot de passe"
          />
        </div>
        <div class="box-signup-card__submit">
          <button type="submit" class="signup-card__submit">S'inscrire</button>
        </div>
       
      </form>
    </div>
  </Card>

  <!-- choix des documents -->
</Section>
<section class="licence-info">
  <h2 class="section-title">Demande de Licence</h2>
  <div class="licence-content">
    <p class="licence-intro">
      La saison sportive s'étend du 1er juillet au 30 juin. La qualité de membre
      est effective après le paiement de la cotisation. Pour les membres
      existants, elle est reconduite automatiquement dès le paiement de la
      cotisation annuelle.
    </p>

    <div class="licence-tabs">
      <button class="licence-tab active" data-tab="nouveau"
        >Nouveau Joueur</button
      >
      <button class="licence-tab" data-tab="transfert">Transfert</button>
      <button class="licence-tab" data-tab="renouvellement"
        >Renouvellement</button
      >
    </div>

    <div class="licence-panel active" id="nouveau-panel">
      <h3>Nouveau Joueur (jamais licencié)</h3>
      <ul class="licence-docs">
        <li>
          <strong>Fiche de Renseignements</strong> : À lire, remplir, signer et renvoyer
          par mail
        </li>
        <li>
          <strong>Règlement Intérieur</strong> : À lire, signer avec mention « Lu
          et approuvé » et date
        </li>
        <li>
          <strong>Charte Joueur</strong> : À lire, signer (+ signature des parents
          pour les mineurs)
        </li>
        <li>
          <strong>Certificat Médical</strong> : Rempli par un médecin avec signature
          et cachet
        </li>
        <li><strong>Copie numérique d'une pièce d'identité</strong></li>
        <li>
          <strong>QR Code du Pass-Sport</strong> (si applicable, pour déduction)
        </li>
        <li><strong>Règlement total</strong> : 150€ pour la saison</li>
      </ul>
    </div>

    <div class="licence-panel" id="transfert-panel">
      <h3>Joueur déjà licencié dans un autre club</h3>
      <ul class="licence-docs">
        <li>
          <strong>Fiche de Renseignements</strong> : À lire, remplir, signer et renvoyer
        </li>
        <li>
          <strong>Règlement Intérieur</strong> : À lire, signer avec mention « Lu
          et approuvé » et date
        </li>
        <li>
          <strong>Charte Joueur</strong> : À lire, signer (+ signature des parents
          pour les mineurs)
        </li>
        <li>
          <strong>Certificat Médical</strong> : Rempli par un médecin avec signature
          et cachet
        </li>
        <li>
          <strong>QR Code du Pass-Sport</strong> (si applicable, pour déduction)
        </li>
        <li><strong>Règlement total</strong> : 150€ pour la saison</li>
      </ul>
    </div>

    <div class="licence-panel" id="renouvellement-panel">
      <h3>Renouvellement (déjà licencié au SPBB)</h3>
      <ul class="licence-docs">
        <li>
          <strong>Fiche de Renseignements</strong> : À actualiser, signer et renvoyer
        </li>
        <li>
          <strong>Règlement Intérieur</strong> : À relire, signer avec mention «
          Lu et approuvé » et date
        </li>
        <li><strong>Charte Joueur</strong> : À relire et signer</li>
        <li>
          <strong>Charte Parents</strong> : Pour les mineurs, à lire et signer par
          les parents
        </li>
        <li>
          <strong>Certificat Médical</strong> : Rempli par un médecin avec signature
          et cachet
        </li>
        <li>
          <strong>QR Code du Pass-Sport</strong> (si applicable, pour déduction)
        </li>
        <li>
          <strong>Photo récente et conforme</strong> (peut être modifiée sur le lien
          d'inscription)
        </li>
        <li><strong>Règlement total</strong> : 150€ pour la saison</li>
      </ul>
    </div>

    <div class="licence-note">
      <p>
        <strong>Note :</strong> Un lien d'inscription est envoyé après réception
        des documents signés. La licence est validée à réception du règlement total.
      </p>
      <a href="#" class="cta-button licence-cta">Télécharger les formulaires</a>
    </div>
  </div>
</section>

<style>
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
    /* background-clip: text;  */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  /* Styles spécifiques à la carte d'inscription */
  .signup-card {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .signup-card__header {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  .signup-card__group {
    display: flex;
    flex-direction: column;
  }
  .signup-card__group label {
    margin-bottom: 0.3rem;
    color: var(--grey, #808080);
    font-family: Arial, sans-serif;
  }
  .signup-card__group input {
    padding: 0.8rem;
    border: 1px solid #333;
    border-radius: 4px;
    background-color: #222;
    color: var(--white, #ffffff);
    font-family: Arial, sans-serif;
  }
  .box-signup-card__submit {
    padding-top: 1rem;
    display: flex;
    justify-content: center;
  }
  .signup-card__submit {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .signup-card__submit {
    margin-top: 1rem;
    font-size: 1.2rem;

    padding: 0.8rem 1.5rem;
    background: linear-gradient(
      45deg,
      var(--orange-light, #ff4500),
      var(--orange-dark, #ffa500)
    );
    border: none;
    border-radius: 25px;
    color: var(--white, #ffffff);
    cursor: pointer;
    transition: background 0.3s ease;
    font-family: Arial, sans-serif;
  }
  .signup-card__submit:hover {
    background: linear-gradient(
      45deg,
      var(--orange-dark, #ffa500),
      var(--orange-light, #ff4500)
    );
  }
  /* Styles pour la section de demande de licence */

  .licence-info {
    color: var(--white);
    font-size: larger;
    padding: 6rem 2rem;
    background-color: #000000;
    position: relative;
  }

  .licence-content {
    max-width: 900px;
    margin: 0 auto;
    color: var(--grey);
    line-height: 1.6;
  }

  .licence-intro {
    margin-bottom: 2rem;
    text-align: center;
  }

  .licence-tabs {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 2rem;
  }

  .licence-tab {
    padding: 0.8rem 1.5rem;
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    border: 2px solid transparent;
    border-radius: 25px;
    color: var(--white);
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .licence-tab:hover {
    transform: translateY(-3px);
  }

  .licence-tab.active {
    border-color: var(--orange-light);
    background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
  }

  .licence-panel {
    display: none;
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    padding: 2rem;
    border-radius: 15px;
    margin-bottom: 2rem;
  }

  .licence-panel.active {
    display: block;
    animation: fadeIn 0.5s ease-in-out;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .licence-panel h3 {
    color: var(--orange-light);
    margin-bottom: 1.5rem;
    text-align: center;
    font-size: 1.5rem;
  }

  .licence-docs {
    list-style-type: none;
  }

  .licence-docs li {
    margin-bottom: 1rem;
    position: relative;
    padding-left: 1.5rem;
  }

  .licence-docs li::before {
    content: "•";
    color: var(--orange-light);
    position: absolute;
    left: 0;
    font-size: 1.5rem;
  }

  .licence-note {
    text-align: center;
    margin-top: 2rem;
  }

  .licence-cta {
    display: inline-block;
    margin-top: 1.5rem;
  }
  /* Responsive styles */
</style>

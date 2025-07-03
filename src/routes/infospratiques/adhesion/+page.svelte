<script>
  import NewButton from "$lib/components/NewButton.svelte";
</script>

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
        <span class="highlight">directement en ligne lors de l'inscription sur le site de la ligue ou par virement bancaire</span>. Si besoin, vous pouvez régler
        en espèces ou par chèque lors des permanences au
        <strong>Club House</strong>.
      </p>
      <p>
        📆 <strong>Attention :</strong> Le
        <span class="highlight">Pass’Sport</span>
        ne sera plus valide après le
        <span class="highlight">31 décembre 2024</span>.
      </p>
      <p>
        🛡️ <strong>Assurance :</strong> L'assurance proposée lors de la
        souscription est <span class="highlight">optionnelle</span> et son coût
        est <span class="highlight">en supplément</span> de la licence.
      </p>
    </div>

    <p class="membership-contact">
      Pour toute question, contactez-nous à cette adresse email : <a
        href="mailto:inscription.spbb@gmail.com"
        class="email-link">spbb.inscriptions@gmail.com</a
      >
    </p>
  </div>
  
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
    padding: 6rem 2rem;
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
</style>

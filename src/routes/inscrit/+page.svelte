<div class="container">
  <section class="profils">
    <h2 class="profils__title">Quel est votre profil ?</h2>
    <div class="profils__list">
      <div class="profil-card">Nouveau joueur</div>
      <div class="profil-card">Transfert</div>
      <div class="profil-card">Renouvellement</div>
      <div class="profil-card">Coach</div>
      <div class="profil-card">Parent accompagnateur</div>
    </div>
  </section>

  <section class="details">
    <article class="details__bloc">
      <h3>Nouveau joueur</h3>
      <ul>
        <li>Fiche de renseignements signée</li>
        <li>Règlement intérieur signé</li>
        <li>Charte joueur signée</li>
        <li>Certificat médical</li>
        <li>Copie pièce d'identité</li>
        <li>QR Code Pass-Sport (si applicable)</li>
        <li>Photo récente</li>
        <li>Règlement total: 150€</li>
      </ul>
    </article>
    <article class="details__bloc">
      <h3>Transfert</h3>
      <ul>
        <li>Mêmes documents qu'un nouveau joueur</li>
      </ul>
    </article>
    <article class="details__bloc">
      <h3>Renouvellement</h3>
      <ul>
        <li>Fiche de renseignements signée</li>
        <li>Règlement intérieur signé</li>
        <li>Charte joueur signée</li>
        <li>Charte parents (si mineur)</li>
        <li>Certificat médical</li>
        <li>QR Code Pass-Sport (si applicable)</li>
        <li>Photo récente</li>
        <li>Règlement total: 150€</li>
      </ul>
    </article>
    <article class="details__bloc">
      <h3>Coach</h3>
      <ul>
        <li>Fiche de renseignements</li>
        <li>Règlement intérieur</li>
        <li>Charte entraîneur</li>
        <li>Certificat médical</li>
        <li>Copie pièce d'identité (si 1〈re inscription)</li>
        <li>Photo récente</li>
        <li>Règlement total (tarif &agrave; confirmer)</li>
      </ul>
    </article>
    <article class="details__bloc">
      <h3>Parent accompagnateur</h3>
      <ul>
        <li>Règlement intérieur</li>
        <li>Charte parents</li>
        <li>Photo récente</li>
        <li>Règlement total: gratuit ou 100€ selon cas</li>
      </ul>
    </article>
  </section>
</div>



  <style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  background: #121212;
  color: #fff;
}
/* Profils */
.profils {
  padding: 2rem 1rem;
  text-align: center;
}

.profils__title {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: #ffa600;
}

.profils__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.profil-card {
  background: #222;
  padding: 1rem 1.5rem;
  border: 2px solid #ff6700;
  border-radius: 10px;
  color: #fff;
  font-weight: bold;
  cursor: default;
  transition: transform 0.2s;
}

.profil-card:hover {
  transform: scale(1.05);
  background: #333;
}

/* Détails */
.details {
  padding: 2rem 1rem;
  display: grid;
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.details__bloc {
  background: #1a1a1a;
  border-left: 6px solid #ffa600;
  padding: 1.5rem;
  border-radius: 8px;
}

.details__bloc h3 {
  color: #ffa600;
  margin-top: 0;
  font-size: 1.4rem;
}

.details__bloc ul {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.details__bloc li::before {
  content: "\2022";
  color: #ff6700;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

  </style>
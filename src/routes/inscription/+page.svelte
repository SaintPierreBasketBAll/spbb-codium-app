<script>
  // Type de licencié sélectionné
  let selectedType = $state("nouveau");
  let titre = $state("Nouveau licencié");

  // Met à jour le titre à chaque changement de selectedType
  $effect(() => {
    if (selectedType === "nouveau") {
      titre = "Nouveau licencié";
    } else if (selectedType === "renouvellement") {
      titre = "Renouvellement";
    } else if (selectedType === "mutation") {
      titre = "Mutation";
    } else if (selectedType === "surclassement") {
      titre = "Surclassement";
    } else if (selectedType === "coach") {
      titre = "Entraîneur / Assistant entraîneur";
    } else if (selectedType === "senior") {
      titre = "senior fille ou senior garçon";
    } else {
      titre = selectedType;
    }
  });

  // Dictionnaire des fiches documents par type
  const fichesDocuments = $state({
    nouveau: {
      title: "Nouveau licencié (joueur) — première inscription",
      items: [
        "Vous trouverez en-dessous de cette liste les liens de téléchargement correspondants : ",
        "- Déclaration d'adhésion signée",
        "- Certificat médical attestant l’aptitude à la pratique du basket qui sera à fournir lors de l'inscription finale sur le site de la F.F.B.B (Fédération Française de Basket-Ball)",
        "- Copie numérique d’une pièce d’identité (obligatoire pour première inscription)",
        "- Charte joueur",
        " - Charte parents si mineur",
        "- Règlement intérieur",
        "- Photo récente conforme aux exigences de la Ligue (pour licence)",
      ],
      links: [
        "/pdf/declaration_d_adhesion.pdf",
        "/pdf/charte_joueur.pdf",
        "/pdf/reglement_interieur_spbb.pdf",
        "/pdf/charte_parent.pdf",
        "/pdf/certificat_medical.pdf",
      ],
    },
    renouvellement: {
      title: "Licencié déjà inscrit dans le club (renouvellement)",
      items: [
       "Vous trouverez en-dessous de cette liste les liens de téléchargement correspondants : ",
        "- Certificat médical (selon les règles de la FFBB, parfois renouvellement requis tous les 3 ans)",
        "- Charte joueur signée (à renouveler chaque saison)",
        "- Charte parents signée si mineur (à renouveler chaque saison)",
        "- Règlement intérieur signé (à renouveler chaque saison)",
      ],
      links: [
        "/pdf/charte_joueur.pdf",
        "/pdf/reglement_interieur_spbb.pdf",
        "/pdf/charte_parent.pdf",
        "/pdf/declaration_d_adhesion.pdf",
        "/pdf/certificat_medical.pdf",
      ],
    },
    mutation: {
      title: "Joueur en mutation (changement de club)",
      items: [
       "Vous trouverez en-dessous de cette liste les liens de téléchargement correspondants : ",
        "- Certificat médical (ou copie du certificat valide si récent)",
        "- Charte joueur",
        "- Charte parents",
        "- Règlement intérieur",
        "- Attestation ou document de mutation du club précédent"
      ],
      links: [
        "/pdf/charte_joueur.pdf",
        "/pdf/reglement_interieur_spbb.pdf",
        "/pdf/charte_parent.pdf",
        "/pdf/declaration_d_adhesion.pdf",
        "/pdf/2025-2026_certificat_medical.pdf",
      ],
    },
    surclassement: {
      title:
        "Surclassement (joueur compétitif pratiquant en catégorie supérieure)",
      items: [
        "Vous trouverez en-dessous de cette liste les liens de téléchargement correspondants : ",
        "- Liste des documents demandés pour, soit un nouveau licencié (joueur),soit un Renouvellement ou une Mutation",
        "+",
        "- Certificat médical de surclassement normal, voir lien ci-dessous. Ou, un certificat médical spécifique de surclassement, établi par médecin agréé, attestant l’aptitude à jouer dans la catégorie supérieure, document envoyé par le club aux joueurs concernés.",
      ],
      links: [
        "/pdf/surclassement_simple.pdf",
        "/pdf/charte_joueur.pdf",
        "/pdf/reglement_interieur_spbb.pdf",
        "/pdf/charte_parent.pdf",
        "/pdf/declaration_d_adhesion.pdf",
        
      ],
    },
    coach: {
      title: "Entraîneur/ Assistant entraîneur",
      items: [
        "Vous trouverez en-dessous de cette liste les liens de téléchargement correspondants : ",
        "- Déclaration d'adhésion",
        "- Charte entraîneur-assistant",
        "- Règlement intérieur signé",
      ],
      links: [
        "/pdf/reglement_interieur_spbb.pdf",
        "/pdf/charte_entraineur_assistant.pdf",
        "/pdf/declaration_d_adhesion.pdf",     
      ],
    },
    
    senior: {
      title: "Senior fille ou garçon",
      items: [
        "Vous trouverez en-dessous de cette liste les liens de téléchargement correspondants : ",
        "- Déclaration d'adhésion",
        "- CHARTE D’ENGAGEMENTS : Des Joueurs et Joueuses de NM2, NM3, PNM, NF1, NF2, NF3 et PNF",
        "Certificat médical",
        "- Règlement intérieur",
        "- Charte joueur",
       
      ],
      links: [
        "/pdf/certificat_medical.pdf",
        "/pdf/charte_d_engagement.pdf",
        "/pdf/charte_joueur.pdf",
        "/pdf/reglement_interieur_spbb.pdf",      
        "/pdf/declaration_d_adhesion.pdf",
      ],
    },
  });

  function selectType(type) {
    selectedType = type;
  }
</script>

<!-- Page d'inscription pour la saison 2025/2026 -->

<section class="licence-info">
  <!-- Titre de la section -->
  <h1 class="section-title_h1">LES INSCRIPTIONS 2025/2026</h1>
  <!-- Sous-titre de la section -->

  <h2 class="section-title_h1">🏀 Procédure d’inscription au SPBB</h2>
  <p>
    1️⃣ &nbsp;Demande de préinscription : 
  </p>
  <p>- Veuillez remplir le formulaire de demande de
    préinscription en cliquant sur Formulaire de demande de préinscription
    ci-dessous</p>
  <br />
   <h3 class="section-title">Cliquez ici :</h3>
  <p class="inscription_form_link">
    <a
      href="https://docs.google.com/forms/d/e/1FAIpQLSceCokeBqxNcACXk8VAjKczXRd2heP-lbCNmKop0IbtsxdbBw/viewform?usp=dialog"
      target="_blank">Formulaire de demande de préinscription</a
    >
  </p>
  <p>
    2️⃣ &nbsp; Étude de votre demande : 
  </p>
  <p>- Votre demande de préinscription sera étudiée par
    le club, en fonction des places disponibles. Vous recevrez une réponse par
    e-mail si refus,sinon un lien FFB vous sera envoyé par mail si votre demande
    est acceptée.</p>
  <br />
  <p>
    3️⃣ &nbsp; Réception d'un lien F.F.B.B : 
  </p>
  <p> - Vous devrez alors cliquer sur le lien FFBB et compléter le formulaire <span>
    muni des documents à fournir(photo d'identité, certificat medical, etc.), voir ci-dessous.</span>
     À cette étape, il vous faudra aussi <span>télécharger et surtout bien lire et être bien informé du contenu,</span>  du règlement intérieur et des chartes en fonction du type de licence. La demande d'adhésion devra alors nous être retournée complétée et signée à l'adresse email : 
     <span>
     <a href="mailto:spbb.inscriptions@gmail.com?subject=Demande%20d%27adh%C3%A9sion%20sign%C3%A9e&body=Bonjour%20SPBB%2C%0AVoici%20en%20pi%C3%A8ce%20jointe%20la%20demande%20d%27adh%C3%A9sion%20sign%C3%A9e.">
      spbb.inscriptions@gmail.com
    </a>
     </span> 
 .</p>
  <br />
  <p>
    4️⃣ &nbsp; Paiement de la licence : 
  </p>
  <p>- Une fois que nous avons recu le demande d'adhésion
    signée et le paiement de la licence effectué, vous recevrez votre licence et
    serez officiellement licencié au SPBB pour la saison 2025/2026.</p>
  <br /><br />
 
  <h2 class="section-title_h1">📄 Liste des documents à fournir</h2>
  <div class="licence-tabs" role="tablist" aria-label="Types de licenciés">
    <button
      role="tab"
      class="licence-tab"
      class:selected={selectedType === "nouveau"}
      onclick={() => selectType("nouveau")}
      aria-selected={selectedType === "nouveau"}
      tabindex={selectedType === "nouveau" ? 0 : -1}
    >
      Nouveau licencié
    </button>
    <button
      role="tab"
      class="licence-tab"
      class:selected={selectedType === "renouvellement"}
      onclick={() => selectType("renouvellement")}
      aria-selected={selectedType === "renouvellement"}
      tabindex={selectedType === "renouvellement" ? 0 : -1}
    >
      Renouvellement
    </button>
    <button
      role="tab"
      class="licence-tab"
      class:selected={selectedType === "mutation"}
      onclick={() => selectType("mutation")}
      aria-selected={selectedType === "mutation"}
      tabindex={selectedType === "mutation" ? 0 : -1}
    >
      Mutation
    </button>
    <button
      role="tab"
      class="licence-tab"
      class:selected={selectedType === "surclassement"}
      onclick={() => selectType("surclassement")}
      aria-selected={selectedType === "surclassement"}
      tabindex={selectedType === "surclassement" ? 0 : -1}
    >
      Surclassement
    </button>
    <button
      role="tab"
      class="licence-tab"
      class:selected={selectedType === "coach"}
      onclick={() => selectType("coach")}
      aria-selected={selectedType === "coach"}
      tabindex={selectedType === "coach" ? 0 : -1}
    >
      Entraîneur / Assistant entraîneur
    </button>
  
    <button
      role="tab"
      class="licence-tab"
      class:selected={selectedType === "senior"}
      onclick={() => selectType("senior")}
      aria-selected={selectedType === "senior"}
      tabindex={selectedType === "senior" ? 0 : -1}
    >
      Senior
    </button>
  </div>

  <div class="licence-panel active" role="tabpanel" aria-live="polite">
   

    <h3>Liste des documents à fournir pour un/une {titre}</h3>

    <!-- Affichage de la liste des items -->
    <ul>
      {#each fichesDocuments[selectedType]?.items as item}
        <li>{item}</li>
      {/each}
    </ul>
    <h3>Liste des liens de téléchargement par rapport à la liste ci-dessus</h3>
    <!-- Affichage des liens (s'il y en a) -->
    {#if fichesDocuments[selectedType]?.links}
      <ul>
        {#each fichesDocuments[selectedType]?.links as link}
          <div>
            <a href={link} target="_blank">{link.split("/").pop()}</a>
          </div>
        {/each}
      </ul>
    {/if}
    <br /> <br />
  </div>
</section>

<style>
  /* Styles de base */
  .licence-info {
    color: var(--white);
    font-size: larger;
    padding: 8rem 4rem 2rem;
    background-color: #222;
    max-width: 100vw;
    margin: 0rem 0 auto;
    width: 100%;
  }
  .section-title_h1 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, var(--orange-dark), var(--orange-light));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }

  .section-title {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, var(--orange-dark), gold);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 700;
  }
  span {
    color: var(--orange-light);
    font-weight: bold;
  }
  .inscription_form_link {
    text-align: center;
    font-size: 2rem;
    margin-bottom: 3rem;
    color: aliceblue;
    text-decoration: underline;
  }

  /* Onglets */
  .licence-tabs {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    /*max-width: 90rem;*/
    margin-left: auto;
    margin-right: auto;
  }

  .licence-tab {
    /* taille fixe pour tous les boutons */
    flex: 0 0 240px; /* ne grandit pas, ne rétrécit pas, base 140px */
    width: 19rem;
    /*height: 6rem;*/
    padding: 0.8rem 1rem;
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    border: 2px solid transparent;
    border-radius: 25px;
    color: var(--white);
    cursor: pointer;
    font-weight: 600;
    transition: all 0.3s ease;
    user-select: none;
    text-align: center;
    font-size: 0.9em;
    /*line-height: 40px;*/
  }

  .licence-tab:hover {
    transform: translateY(-3px);
  }

  .licence-tab.selected,
  .licence-tab[aria-selected="true"] {
    border-color: var(--orange-light);
    background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
  }

  /* Panel des documents */
  .licence-panel {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    padding: 2rem;
    border-radius: 15px;
    color: var(--grey);
    line-height: 1.6;
  }

  .licence-panel h3 {
    color: var(--orange-light);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 700;
  }

  .licence-docs {
    list-style-type: none;
    padding-left: 0;
  }

  .licence-docs li {
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    position: relative;
  }

  .licence-docs li::before {
    content: "•";
    color: var(--orange-light);
    position: absolute;
    left: 0;
    font-size: 1.5rem;
    line-height: 1;
  }

  /* Responsive */

  /* Tablettes et petits écrans */
  @media (max-width: 768px) {
    .licence-info {
      padding: 4rem 1.5rem;
    }

    .section-title {
      font-size: 2rem;
    }

    .licence-tab {
      flex: 0 0 320px;
      width: 120px;
      padding: 0.7rem 1rem;
      font-size: 0.95rem;
    }

    .licence-panel {
      padding: 1.5rem;
    }

    .licence-panel h3 {
      font-size: 1.3rem;
    }
  }

  /* Smartphones : empilement vertical des onglets */
  @media (max-width: 480px) {
    .licence-tabs {
      flex-direction: column;
      gap: 0.6rem;
      align-items: stretch;
    }

    .licence-tab {
      flex: none;
      width: 100%;
      min-width: unset;
      font-size: 1rem;
      padding: 1rem 1.2rem;
      border-radius: 12px;
    }

    .licence-panel {
      padding: 1rem 1rem 2rem;
    }

    .section-title {
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
  }
</style>

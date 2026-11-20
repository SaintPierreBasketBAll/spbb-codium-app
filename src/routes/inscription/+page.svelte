<script>
import PaymentTerms from '$lib/components/infos-pratiques/PaymentTerms.svelte';
import FamilyDiscounts from '$lib/components/infos-pratiques/FamilyDiscounts.svelte';


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
        "/pdf/certificat_medical.pdf",
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
        "/pdf/Surclassement 2026-2027.pdf",
        "/pdf/charte_joueur.pdf",
        "/pdf/reglement_interieur_spbb.pdf",
        "/pdf/charte_parent.pdf",
        "/pdf/declaration_d_adhesion.pdf",
        "/pdf/Certificat_d_aptitude_au_surclassement.pdf",
        "/pdf/Tableau surclassements 2026-2027.pdf"

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

<!-- Page d'inscription pour la saison 2026/2027 -->

<section class="licence-info">
  <!-- Titre de la section -->
  <h1 class="section-title_h1">LES INSCRIPTIONS 2026/2027</h1>
  <!-- Sous-titre de la section -->



  <div class="registration-paths">
    <h2>Choisissez votre parcours</h2>
    <div class="licence-tabs" role="group" aria-label="Parcours d’inscription">
      <button class="licence-tab" class:selected={selectedType === 'nouveau'} aria-pressed={selectedType === 'nouveau'} onclick={() => selectType('nouveau')}>Nouveau licencié</button>
      <button class="licence-tab" class:selected={selectedType === 'renouvellement'} aria-pressed={selectedType === 'renouvellement'} onclick={() => selectType('renouvellement')}>Renouvellement</button>
      <button class="licence-tab" class:selected={selectedType === 'mutation'} aria-pressed={selectedType === 'mutation'} onclick={() => selectType('mutation')}>Mutation</button>
    </div>
    <ol class="registration-steps" aria-live="polite">
      {#if selectedType === 'nouveau'}
        <li><strong>Profitez de deux séances d’essai gratuites.</strong> Sur spbb.re, ouvrez « <a href="/infospratiques/leshoraires">Infos pratiques → Horaires</a> ». En bas de la page, repérez la catégorie de votre enfant dans la rubrique « Catégorie et année de naissance », puis consultez ses horaires d’entraînement. Venez directement au gymnase indiqué à l’heure de l’entraînement, sans rendez-vous, et demandez une séance d’essai au coach sur place.</li>
        <li><strong>Demandez l’inscription au coach.</strong> Après les deux essais, faites votre demande au coach. S’il reste une place et qu’il donne son accord, il transmet lui-même au bureau le NOM DE FAMILLE (tout en majuscules), le prénom, la date de naissance et le numéro de téléphone du futur licencié.</li>
        <li><strong>Finalisez votre inscription.</strong> Le club enregistre votre demande sur la plateforme FFBB et vous envoie un lien par e-mail. Remplissez le formulaire de préinscription via ce lien, puis réglez votre licence. Lisez le règlement intérieur et les chartes des joueurs et des parents disponibles ci-dessous, puis envoyez la déclaration d’adhésion signée à <a href="mailto:contact.spbb@gmail.com">contact.spbb@gmail.com</a>. Le club valide votre inscription après réception du dossier FFBB complet, de la déclaration signée et du paiement.</li>
      {:else}
        {#if selectedType === 'renouvellement'}
          <li><strong>Préparez votre renouvellement.</strong> Vérifiez vos coordonnées et les documents à fournir ci-dessous.</li>
          <li><strong>Complétez le lien FFBB transmis par le club.</strong> Si vous ne l’avez pas reçu, contactez <a href="mailto:communication.spbb@gmail.com">communication.spbb@gmail.com</a>.</li>
        {:else}
          <li><strong>Envoyez votre demande.</strong> Remplissez le <a href="https://forms.gle/dLCrdVUgqZvj2ir7A" target="_blank" rel="noopener noreferrer">formulaire de préinscription</a>. {#if selectedType === 'mutation'}Indiquez votre club précédent ; le SPBB vous précisera les démarches et éventuels frais de mutation.{/if}</li>
          <li><strong>Attendez la réponse du club.</strong> La demande est étudiée selon les places disponibles. En cas d’accord, vous recevez un lien FFBB par e-mail.</li>
          <li><strong>Complétez votre dossier FFBB.</strong> Préparez les justificatifs correspondant à votre profil ci-dessous.</li>
        {/if}
        <li><strong>Lisez les documents du club.</strong> Consultez le règlement et les chartes ; retournez la déclaration d’adhésion signée à <a href="mailto:communication.spbb@gmail.com">communication.spbb@gmail.com</a>.</li>
        <li><strong>Réglez votre licence.</strong> Consultez les <a href="/infospratiques/tarifsetaides">tarifs et aides</a> et les <a href="/infospratiques/adhesion">modalités d’adhésion</a>. Votre inscription 2026/2027 est effective après validation de votre dossier et de votre règlement par le club.</li>
      {/if}
    </ol>
  </div>
  <PaymentTerms />
  <FamilyDiscounts />
  <h2 class="section-title_h1">📄 Liste des documents à fournir</h2>
  <div class="licence-tabs" role="group" aria-label="Types de licenciés">
    <button

      class="licence-tab"
      class:selected={selectedType === "nouveau"}
      onclick={() => selectType("nouveau")}
      aria-pressed={selectedType === "nouveau"}

    >
      Nouveau licencié
    </button>
    <button

      class="licence-tab"
      class:selected={selectedType === "renouvellement"}
      onclick={() => selectType("renouvellement")}
      aria-pressed={selectedType === "renouvellement"}
    >
      Renouvellement
    </button>
    <button

      class="licence-tab"
      class:selected={selectedType === "mutation"}
      onclick={() => selectType("mutation")}
      aria-pressed={selectedType === "mutation"}
    >
      Mutation
    </button>
    <button

      class="licence-tab"
      class:selected={selectedType === "surclassement"}
      onclick={() => selectType("surclassement")}
      aria-pressed={selectedType === "surclassement"}
    >
      Surclassement
    </button>
    <button

      class="licence-tab"
      class:selected={selectedType === "coach"}
      onclick={() => selectType("coach")}
      aria-pressed={selectedType === "coach"}
    >
      Entraîneur / Assistant entraîneur
    </button>

    <button

      class="licence-tab"
      class:selected={selectedType === "senior"}
      onclick={() => selectType("senior")}
      aria-pressed={selectedType === "senior"}
    >
      Senior
    </button>
  </div>

  <div class="licence-panel active" role="region" aria-live="polite">


    <h3>{titre} : Liste des documents à fournir.</h3>

    <!-- Affichage de la liste des items -->
    <ul>
      {#each fichesDocuments[selectedType]?.items as item}
        <li>{item}</li>
      {/each}
    </ul>
    <h3 class="download_link_h3">Liste des liens de téléchargement par rapport à la liste ci-dessus</h3>
    <!-- Affichage des liens (s'il y en a) -->
    {#if fichesDocuments[selectedType]?.links}
      <ul>
        {#each fichesDocuments[selectedType]?.links as link}
          <li><a href={link} target="_blank" rel="noopener noreferrer">{link.split("/").pop()}</a></li>
        {/each}
      </ul>
    {/if}
    <br /> <br />
  </div>
</section>

<style>
.registration-paths { max-width: 65rem; margin: 0 auto 3rem; }
.registration-steps { list-style: decimal; padding-left: 1.5rem; }
.registration-steps li { margin: 1rem 0; line-height: 1.6; }
.registration-steps a { color: #ffb347; text-decoration: underline; }

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
    background-clip: text;
    font-weight: 700;
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
  .licence-tab[aria-pressed="true"] {
    border-color: var(--orange-light);
    background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
  }

  /* Panel des documents */
  .licence-panel {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    padding: 2rem;
    border-radius: 15px;
    color: var(--white);
    line-height: 1.6;
  }

  .licence-panel h3 {
    color: var(--orange-light);
    margin-bottom: 1.5rem;
    font-size: 1.5rem;
    text-align: left;
    font-weight: 700;
  }
  .download_link_h3{
    padding-top: 2rem;
  }







  /* Responsive */

  /* Tablettes et petits écrans */
  @media (max-width: 768px) {
    .licence-info {
      padding: 4rem 1.5rem;
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
    .section-title_h1 {
      margin-top: 3rem;
    }

  }
</style>

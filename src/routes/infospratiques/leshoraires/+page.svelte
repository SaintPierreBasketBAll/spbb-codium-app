<script>
import PlanningCards from '$lib/components/infos-pratiques/PlanningCards.svelte';
</script>


<section class="schedule">
  <h2 class="section-title">Planning des entraînements saison 2025/2026</h2>
  <p class = "text_planning">Ce planning est fourni à titre indicatif et susceptible de modifications de dernière minute.</p>

<!-- Planning en mode carte par sections -->

<PlanningCards />
<!-- Fin Planning en mode carte par sections  -s->



  <div style="position: relative; width: 100%; height: 0; padding-top: 70.7071%;
 padding-bottom: 0; box-shadow: 0 2px 8px 0 rgba(63,69,81,0.16); margin-top: 1.6em; margin-bottom: 0.9em; overflow: hidden;
 border-radius: 8px; will-change: transform;">
  <iframe loading="lazy" style="position: absolute; width: 100%; height: 100%; top: 0; left: 0; border: none; padding: 0;margin: 0;"
    src="https://www.canva.com/design/DAGzt5he_zI/cIhqCPfdIFH3z_V4sIINVQ/view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
  </iframe>
</div>
<!-- <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGzt5he_zI&#x2F;cIhqCPfdIFH3z_V4sIINVQ&#x2F;view?utm_content=DAGzt5he_zI&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Planning des entraînements saison 2025&#x2F;2026</a> -->
 
</section>

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
    <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FSPBB974%2Fposts%2Fpfbid02wzSnNkhv6jv1McgfvxJuJv6jK8vQH3nwWnfNGuRGfchvrgFg1vz6jRj1V5cayZqbl&show_text=true&width=500" width="500" height="693" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
  </div>
</section>

<!-- <section class="clubhouse">
    <h2 class="section-title">Le club House</h2>
    <div class="clubhouse-container">
      <div class="clubhouse-alert">
         <p>
        🏠🔴 La permanence du Club House est définitivement fermée, en raison du
        manque de bénévoles disponibles pour assurer ce service. 🙏
      </p>

      <br />

      <p>
        ➡️ Pour toute demande d’inscription, merci d’utiliser directement le
        formulaire en ligne : <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSceCokeBqxNcACXk8VAjKczXRd2heP-lbCNmKop0IbtsxdbBw/viewform?usp=dialog"
          >Formulaire d’inscription SPBB</a
        >
        🖱️
      </p>
      <br>
      <p>
        Pour toute question ou demande d’information, merci de privilégier le
        contact par e-mail :
      </p>
      <br>
      <p>
        • 📅 evenements.spbb@gmail.com : pour les inscriptions ou renseignements
        concernant les événements (camps basket, tournois 3x3, etc.)
      </p>
      <br>
      <p>
        • 📝 spbb.inscriptions@gmail.com : pour toute demande de licence ou
        question relative aux licences
      </p>
      <br />
      <p>
        • ℹ️ contact.spbb@gmail.com : pour toute autre demande ou information
        générale
      </p>
      <br />
      <p>Nous vous remercions de votre compréhension.</p>
      </div>
    </div>
</section> -->

<style>
    :root {
      --black: #000000;
      --white: #FFFFFF;
      --orange-light: #FFA500;
      --orange-dark: #FF4500;
      --grey: #808080;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }
      .clubhouse {
       padding: 6rem 2rem 2rem 2rem;
    background-color: #000000;
    position: relative;
  }
  
  .clubhouse-container {
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
  }
  
  .clubhouse-alert {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    padding: 2rem;
    border-radius: 15px;
    margin: 2rem auto;
    max-width: 600px;
  }
  
  .clubhouse-alert p {
    color: var(--orange-light);
    font-size: 1.5rem;
    line-height: 1.6;
  }
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    padding-top: 4rem;
    background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .text__bold{
    font-weight: bold;
   }
   
    
    @keyframes flameMove {
      0% {
        transform: translateY(0) scale(1);
      }
      100% {
        transform: translateY(-50px) scale(1.1);
      }
    }
    
    @media (max-width: 768px) {
      .schedule-table table {
    font-size: 0.8rem;
    min-width: 600px; /* garde une largeur minimale pour éviter que ça s'écrase */
  }
      .schedule-table th, 
      .schedule-table td {
        padding: 0.5rem;
      } 
      .schedule-notes{
        font-size: 0.9rem;    
      }

    }
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .text_planning {
      text-align: center;
      font-size: 1.4rem;
      color: var(--grey);
      margin-bottom: 2rem;
    }

    .schedule {
      padding: 2rem 2rem;
      background-color: #000000;
      position: relative;
    }
    
    .schedule-content {
      display: grid;
      grid-template-rows: auto auto;
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    @media (min-width: 992px) {
      .schedule-content {
        grid-template-rows: auto auto;
      }
    }
    
    .schedule-table {
      overflow-x: auto;
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
      padding: 1.5rem;
    }
    
    .schedule-table table {
      width: 100%;
      border-collapse: collapse;
      color: var(--white);
    }
    
    .schedule-table th, 
    .schedule-table td {
      padding: 1rem;
      text-align: left;
      border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      
    }
    .schedule-table td{
      font-size: 0.9rem;
      border-right:1px solid rgba(255, 255, 255, 0.1);
    }
    
    .schedule-table th {
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
    }
    
    .schedule-table tr:hover {
      background-color: rgba(255, 165, 0, 0.1);
    }
    
    .schedule-notes {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
      padding: 1.5rem;
      color: var(--grey);
    }
    
    .schedule-notes h3 {
      color: var(--orange-light);
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }
    
    .schedule-notes ul {
      list-style-type: none;
      padding: 0;
      margin-bottom: 2rem;
    }
    
    .schedule-notes li {
      padding: 0.5rem 0;
      position: relative;
      padding-left: 1.5rem;
      line-height: 1.5;
    }
    
    .schedule-notes li::before {
      content: "•";
      color: var(--orange-light);
      position: absolute;
      left: 0;
      font-weight: bold;
    }
    
    .schedule-download {
      display: inline-block;
      margin-top: 1rem;
      padding: 0.8rem 1.5rem;
      background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
      border: none;
      border-radius: 25px;
      color: var(--white);
      text-decoration: none;
      cursor: pointer;
      transition: transform 0.3s ease;
    }
    
    .schedule-download:hover {
      transform: scale(1.05);
    }
    
    @media (max-width: 768px) {
      .schedule-table {
        font-size: 0.9rem;
      }
      
      .schedule-table th, 
      .schedule-table td {
        padding: 0.7rem;
      }
    }
    
    @media (max-width: 768px) {
      
    }
    
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
  /* =============================
     Deux séances d’essai (trial)
     ============================= */
  .trial {
    padding: 2rem;
    background-color: #000000;
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
     Catégories (Facebook embed)
     ============================= */
  .categories {
    padding: 2rem;
    background: linear-gradient(
      180deg,
      rgb(0,0,0) 0%,
      rgb(226, 223, 223) 50%,
      rgb(255, 255, 255) 100%
    );
  }
  .categories__embed {
    max-width: 900px;
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }
  .categories__embed iframe {
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.35);
  }
</style>
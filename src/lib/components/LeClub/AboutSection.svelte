<script>
  let yearOfBirth = $state(2001)
  let currentYear = $state(new Date().getFullYear());
  let clubAge = $derived(currentYear - yearOfBirth);
  

</script>
  
  <section class="about-club">
    <h2 class="section-title">Présentation du Club</h2>
    <div class="about-grid">
      <div class="about-content">
        <h3>Un Club Historique et Ambitieux</h3>
        <p>Le Saint-Pierre Basket Ball est bien plus qu'un simple club de basket. Fondé le en 2001, nous sommes devenus une référence dans le paysage du basket Réunionnais, alliant performance sportive et formation de qualité.</p>
        <p>Notre mission est de promouvoir le basketball auprès de tous les publics, des plus jeunes aux vétérans, tout en transmettant les valeurs essentielles du sport : respect, dépassement de soi et esprit d'équipe.</p>
        <div class="about-stats">
          <div class="stat-item">
            <div class="stat-number">361</div>
            <div class="stat-label">Licenciés</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">15</div>
            <div class="stat-label">Équipes</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">25</div>
            <div class="stat-label">Entraîneurs</div>
          </div>
          <div class="stat-item">
            <div class="stat-number">{clubAge}</div>
            <div class="stat-label">Années d'existence</div>
          </div>
        </div>
      </div>
      <div class="about-image">
        <img src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3" alt="Équipe de basket Saint-Pierre en action">
      </div>
    </div>
  </section>
  
  <style>
    :global(:root) {
      --black: #000000;
      --white: #FFFFFF;
      --orange-light: #FFA500;
      --orange-dark: #FF4500;
      --grey: #808080;
    }
    
    :global(*) {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Arial', sans-serif;
    }
    
    
    .section-title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .about-club {
      padding: 8rem 2rem 2rem 2rem;
      background-color: #000000;
      position: relative;
    }
    
    .about-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 3rem;
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .about-content {
      color: var(--grey);
      line-height: 1.6;
    }
    
    .about-content h3 {
      color: var(--orange-light);
      font-size: 1.8rem;
      margin-bottom: 1.5rem;
    }
    
    .about-stats {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      margin-top: 2rem;
    }
    
    .stat-item {
      text-align: center;
      padding: 1.5rem;
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
    }
    
    .stat-number {
      font-size: 2.5rem;
      color: var(--orange-light);
      margin-bottom: 0.5rem;
    }
    
    .stat-label {
      color: var(--grey);
    }
    
    .about-image {
      border-radius: 15px;
      overflow: hidden;
      height: 400px;
      position: relative;
    }
    
    .about-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    /* Styles for other club sections belong in their respective components. */
    /*
    .team-section {
      padding: 13rem 7rem 2rem;
      background-color: #1a1a1a;
      position: relative;
    }
    
    .team-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .team-intro {
      color: var(--grey);
      line-height: 1.6;
      margin-bottom: 3rem;
      text-align: center;
    }
    
    .team-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .team-member {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
      padding: 2rem;
      transition: transform 0.3s ease;
    }
    
    .team-member:hover {
      transform: translateY(-10px);
    }
    
    .team-member h3 {
      color: var(--orange-light);
      font-size: 1.5rem;
      margin-bottom: 0.5rem;
    }
    
    .team-member .role {
      color: var(--white);
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    
    .team-member p {
      color: var(--grey);
      line-height: 1.6;
    }
    
    .team-outro {
      margin-top: 2rem;
      text-align: center;
      color: var(--grey);
      line-height: 1.6;
    }
    
    .projects {
      padding: 6rem 2rem;
      background-color: #000000;
      position: relative;
    }
    
    .projects-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .projects-intro,
    .projects-outro {
      color: var(--grey);
      line-height: 1.6;
      text-align: center;
      margin: 2rem 0;
    }
    
    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      margin: 3rem 0;
    }
    
    .project-card {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      padding: 2rem;
      border-radius: 15px;
      transition: transform 0.3s ease;
    }
    
    .project-card:hover {
      transform: translateY(-10px);
    }
    
    .project-card h3 {
      color: var(--orange-light);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .project-card p {
      color: var(--grey);
      line-height: 1.6;
    }
    
    */

    @media (max-width: 768px) {
      .section-title {
        font-size: 2rem;
      }
      
      .about-stats {
        grid-template-columns: 1fr;
      }
      
      .about-grid {
        grid-template-columns: 1fr;
      }
    }
    </style>

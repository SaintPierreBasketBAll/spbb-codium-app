<!-- <script>
    import Enconstruction from '$lib/components/Enconstruction.svelte';
</script>

<Enconstruction /> -->

<section class="teams">
    <h2 class="section-title">Nos Équipes Seniors</h2>
    <div class="teams-grid">
        <a href="/nosequipes/seniorsgarcons/saison2024-2025/equipesseniors/equipe1/"><div class="team-card">
            <div class="team-header">
              <h3>Seniors Garçons 1</h3>
              <div class="team-division">Division Régionale 2</div>
            </div>
            <div class="team-info">
              <div class="team-stats">
                <div class="stat">
                  <span class="stat-label">Entraîneur principal : </span>
                  <span class="stat-value">Laurent PARATA</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Entraîneur adjoint : </span>
                  <span class="stat-value">Eric RABY</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Entraînements : </span>
                  <span class="stat-value">Mardi et Jeudi 20h-22h</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Matches</span>
                  <span class="stat-value">Le week-end</span>
                </div>
              </div>
              <div class="team-description">
                <p>Notre équipe fanion évolue en Régionale et est en pleine phase de construction. Composée de joueurs investis et en progression, elle travaille avec détermination pour renforcer sa cohésion et son niveau de jeu. L’objectif est de devenir une équipe compétitive, capable de rivaliser avec les meilleures formations du championnat régional et de viser, à terme, les premières places.</p>
              </div>
            </div>
          </div></a>
      
          <a href="/nosequipes/seniorsgarcons/saison2024-2025/equipesseniors/equipe2">
             <div class="team-card">
            <div class="team-header">
              <h3>Seniors Garçons 2</h3>
              <div class="team-division">Division Départementale 1</div>
            </div>
            <div class="team-info">
              <div class="team-stats">
                <div class="stat">
                  <span class="stat-label">Entraîneur : </span>
                  <span class="stat-value">Banor Jean Hugues</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Entraîneur adjoint : </span>
                  <span class="stat-value">Eric RABY</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Entraînements : </span>
                  <span class="stat-value">Lundi et Mercredi 20h-22h</span>
                </div>
                <div class="stat">
                  <span class="stat-label">Matches</span>
                  <span class="stat-value">Le weekend</span>
                </div>
              </div>
              <div class="team-description">
                <p>Notre équipe réserve évolue en championnat régionale masculine 2. Mélange de jeunes talents et de joueurs d'expérience, elle assure la formation continue des futurs joueurs de l'équipe première tout en visant le haut du tableau.</p>
              </div>
            </div>
          </div> </a>
     
    </div>
  </section>

  <style>
 .teams {
    padding: 10rem 2rem 1rem 4rem;
    background-color: #1a1a1a;
    position: relative;
  }
  
  .teams h2 {
    padding-bottom: 2rem;
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .teams-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .team-card {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    border-radius: 15px;
    padding: 2rem;
    transition: transform 0.3s ease;
    position: relative;
    overflow: hidden;
  }
  
  .team-card:hover {
    transform: translateY(-10px);
  }
  
  .team-header {
    margin-bottom: 1rem;
  }
  
  .team-header h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--orange-light);
  }
  
  .team-division {
    font-size: 1rem;
    color: var(--grey);
  }
  
  .team-info {
    display: flex;
    flex-direction: column;
  }
  
  .team-stats {
    margin-bottom: 1rem;
  }
  
  .stat {
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    color: var(--grey);
    font-size: 1rem;
  }
  
  .stat-value {
    color: var(--white);
    font-size: 1rem;
  }
  
  .team-description {
    color: var(--grey);
    line-height: 1.6;
  }
  
  .team-description p {
    margin-bottom: 1rem;
  }
  </style>
  
  
 
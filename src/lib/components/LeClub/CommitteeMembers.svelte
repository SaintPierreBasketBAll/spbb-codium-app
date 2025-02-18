<section class="committee">
    <h2 class="section-title">Les membres du comité directeur</h2>
    <div class="committee-grid">
     
        <div class="committee-member">
        <h3>Patricia Thiong-ly</h3>
        <h4>Collaboratrice aux projets et fonctionnement général</h4>
        <p>Patricia Thiong-ly est une figure incontournable de SPBB. Avec son sens de l'organisation et son enthousiasme, elle contribue activement à la mise en œuvre des projets du club. Patricia est aussi un pilier dans la gestion quotidienne, apportant une aide précieuse pour garantir le succès des initiatives sportives et administratives.</p>
      </div>
  
      <div class="committee-member">
        <h3>Nathalie Hafeji</h3>
        <h4>Collaboratrice aux projets et fonctionnement général</h4>
        <p>Nathalie Hafeji est une alliée précieuse pour SPBB, grâce à son implication sans faille dans les projets et le fonctionnement courant du club. Sa capacité à gérer des tâches variées et son sens du détail font d'elle une partenaire essentielle pour la réalisation des ambitions du club. Nathalie incarne la passion et le dévouement qui caractérisent SPBB.</p>
      </div>
      <div class="committee-member">
        <h3>Micael Babef</h3>
        <h4>Collaborateur au fonctionnement général</h4>
        <p>Micael Babef joue un rôle clé dans le quotidien de l'association Saint Pierre Basket Ball. Toujours disponible et impliqué, il apporte son énergie et son expertise pour assurer le bon déroulement des activités. Que ce soit dans la coordination des équipes ou dans l'appui à l'organisation, Micael est une véritable force motrice pour le club.</p>
      </div>
    </div>
  </section>
  
  <style>
    .committee {
  padding: 6rem 2rem;
  position: relative;
  background-color: #1a1a1a;
}
.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.committee-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.committee-member {
  background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
  border-radius: 15px;
  padding: 2rem;
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.committee-member::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
}

.committee-member:hover {
  transform: translateY(-10px);
}

.committee-member h3 {
  color: var(--orange-light);
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
}

.committee-member h4 {
  color: var(--grey);
  margin-bottom: 1rem;
  font-size: 1.1rem;
  font-style: italic;
}

.committee-member p {
  color: var(--grey);
  line-height: 1.6;
}

  </style>
<script>
    /* document.querySelector('.cta-button').addEventListener('click', function() {
      window.location.href = 'https://paris-f.com/contact';
    });

    document.querySelectorAll('a[href^="https://paris-f.com"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        window.location.href = href;
      });
    });
    
    // Add specific handler for the Accueil link
    document.querySelector('a[href="index.html"]').addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'index.html';
    });
    
    document.querySelectorAll('.donate-button').forEach(button => {
      button.addEventListener('click', function() {
        alert('Redirection vers la page de paiement sécurisé...');
      });
    });

    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Message envoyé ! Nous vous répondrons dans les plus brefs délais.');
      this.reset();
    });
 */
    
  </script>

<main class="hero">
    <div class="flame-animation"></div>
    <div class="hero-content">
      <h1>Saint-Pierre Basket Ball</h1>
      <p>Passion, Performance, Excellence</p>
      <button class="cta-button">Rejoignez-nous</button>
    </div>
  </main>

  <section class="activities">
    <h2>Nos Activités</h2>
    <div class="activities-grid">
      <div class="activity-card">
        <svg class="activity-icon" viewBox="0 0 24 24">
          <path d="M12,5A3,3,0,0,1,15,8V9H9V8A3,3,0,0,1,12,5M12,2A6,6,0,0,0,6,8V9H4v12H20V9H18V8A6,6,0,0,0,12,2Z"/>
        </svg>
        <h3>École de Basketball</h3>
        <p>Formation des jeunes talents dès l'âge de 5 ans. Entraînements adaptés, développement technique et apprentissage des fondamentaux du basketball dans un environnement ludique et professionnel.</p>
      </div>

      <div class="activity-card">
        <svg class="activity-icon" viewBox="0 0 24 24">
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"/>
        </svg>
        <h3>Compétitions</h3>
        <p>Participation aux championnats départementaux et régionaux. Matches réguliers pour toutes les catégories d'âge, des mini-poussins aux seniors, en passant par les équipes féminines et masculines.</p>
      </div>

      <div class="activity-card">
        <svg class="activity-icon" viewBox="0 0 24 24">
          <path d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"/>
        </svg>
        <h3>Événements</h3>
        <p>Organisation de tournois, stages vacances, et événements festifs tout au long de l'année. Participation active à la vie locale avec des manifestations sportives et des actions caritatives.</p>
      </div>

      <div class="activity-card">
        <svg class="activity-icon" viewBox="0 0 24 24">
          <path d="M12,5.5A3.5,3.5,0,0,1,15.5,9a3.5,3.5,0,0,1-7,0A3.5,3.5,0,0,1,12,5.5M5,8c.56,0,1.08,.15,1.53,.42-.15,.56-.24,1.17-.24,1.8,0,3.31,2.69,6,6,6s6-2.69,6-6c0-.63-.09-1.24-.24-1.8,.45-.27,.97-.42,1.53-.42,1.66,0,3,1.34,3,3v7c0,1.66-1.34,3-3,3H5c-1.66,0-3-1.34-3-3v-7c0-1.66,1.34-3,3-3Z"/>
        </svg>
        <h3>Formation Continue</h3>
        <p>Formation des entraîneurs et des arbitres. Perfectionnement technique pour les joueurs confirmés. Sessions spéciales de préparation physique et mentale.</p>
      </div>
    </div>
  </section>

  <section class="history">
    <h2 class="section-title">Notre Histoire</h2>
    <div class="history-content">
      <div class="timeline">
        <div class="timeline-item">
          <div class="timeline-date">14/08/2001</div>
          <div class="timeline-text">Création du club Saint-Pierre Basket Ball</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">1975</div>
          <div class="timeline-text">Premier titre régional</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">1990</div>
          <div class="timeline-text">Ouverture de l'école de basket</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2010</div>
          <div class="timeline-text">Rénovation complète des installations</div>
        </div>
        <div class="timeline-item">
          <div class="timeline-date">2023</div>
          <div class="timeline-text">Plus de 500 licenciés actifs</div>
        </div>
      </div>
    </div>
  </section>

  <section class="donate">
    <h2 class="section-title">Faire un Don</h2>
    <div class="donate-content">
      <p>Votre soutien est essentiel pour maintenir et développer nos activités. Chaque don compte et nous aide à former les champions de demain.</p>
      <div class="donate-options">
        <div class="donate-option">
          <div class="donate-amount">20€</div>
          <p>Don Supporter</p>
          <button class="donate-button">Faire un don</button>
        </div>
        <div class="donate-option">
          <div class="donate-amount">50€</div>
          <p>Don Partenaire</p>
          <button class="donate-button">Faire un don</button>
        </div>
        <div class="donate-option">
          <div class="donate-amount">100€</div>
          <p>Don Mécène</p>
          <button class="donate-button">Faire un don</button>
        </div>
      </div>
    </div>
  </section>

  <section class="contact">
    <h2 class="section-title">Nous Contacter</h2>
    <div class="contact-grid">
      <div class="contact-form">
        <form id="contactForm">
          <div class="form-group">
            <label for="name">Nom</label>
            <input type="text" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit" class="donate-button">Envoyer</button>
        </form>
      </div>
      <div class="contact-info">
        <h3>Informations de Contact</h3>
        <p>Adresse: GYMNASE NELSON MANDELA</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 3 AVENUE DE SOWETO</p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 97410 SAINT PIERRE</p> <br>
        
        <p>Email: contact.spbb@gmail.com</p> <br>
        <h3>Permanence Club House SPBB</h3>
        <p>Mercredi : 15h - 17h</p>
     
      </div>
    </div>
  </section>

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

 

    .hero {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      overflow: hidden;
    }

    .hero::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('/images/hero.jpg');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: brightness(0.3);
      z-index: -2;
    }

    .hero-content {
      text-align: center;
      z-index: 1;
    }

    .hero h1 {
      font-size: 4rem;
      margin-bottom: 1rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .hero p {
      font-size: 1.5rem;
      color: var(--grey);
      margin-bottom: 2rem;
    }

    .cta-button {
      padding: 1rem 2rem;
      font-size: 1.2rem;
      background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
      border: none;
      border-radius: 30px;
      color: var(--white);
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .cta-button:hover {
      transform: translateY(-3px);
    }

    .flame-animation {
      position: absolute;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background: black;
      filter: blur(100px); 
      animation: flameMove 8s infinite alternate;
      z-index: -1;
    }

    @keyframes flameMove {
      0% {
        transform: translateY(0) scale(1);
      }

      100% {
        transform: translateY(-50px) scale(1.1);
      }
    }

    .activities {
      padding: 6rem 2rem;
      background-color: #1a1a1a;
      position: relative;
    }

    .activities h2 {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    .activities-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .activity-card {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
      padding: 2rem;
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }

    .activity-card:hover {
      transform: translateY(-10px);
    }

    .activity-card::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
    }

    .activity-card h3 {
      color: var(--orange-light);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .activity-card p {
      color: var(--grey);
      line-height: 1.6;
    }

    .activity-icon {
      width: 50px;
      height: 50px;
      margin-bottom: 1rem;
      fill: var(--orange-light);
    }

    @media (max-width: 768px) {
      .activities-grid {
        grid-template-columns: 1fr;
      }
    }

    .history,
    .donate,
    .contact {
      padding: 6rem 2rem;
      position: relative;
    }

    .history {
      background-color: #1a1a1a;
    }

    .donate {
      background-color: #000000;
    }

    .contact {
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

    .history-content,
    .donate-content {
      max-width: 800px;
      margin: 0 auto;
      color: var(--grey);
      line-height: 1.6;
    }

    .timeline {
      margin: 2rem 0;
      position: relative;
      padding: 2rem 0;
    }

    .timeline::before {
      content: '';
      position: absolute;
      left: 50%;
      width: 2px;
      height: 100%;
      background: linear-gradient(var(--orange-light), var(--orange-dark));
      transform: translateX(-50%);
    }

    .timeline-item {
      margin: 2rem 0;
      position: relative;
      width: 50%;
      padding: 0 2rem;
    }

    .timeline-item:nth-child(odd) {
      left: 0;
      text-align: right;
    }

    .timeline-item:nth-child(even) {
      left: 50%;
    }

    .timeline-date {
      color: var(--orange-light);
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .donate-options {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      margin-top: 3rem;
    }

    .donate-option {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      padding: 2rem;
      border-radius: 15px;
      text-align: center;
      transition: transform 0.3s ease;
    }

    .donate-option:hover {
      transform: translateY(-5px);
    }

    .donate-amount {
      font-size: 2rem;
      color: var(--orange-light);
      margin: 1rem 0;
    }

    .donate-button {
      padding: 0.8rem 1.5rem;
      background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
      border: none;
      border-radius: 25px;
      color: var(--white);
      cursor: pointer;
      transition: transform 0.3s ease;
    }

    .donate-button:hover {
      transform: scale(1.05);
    }

    .contact-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .contact-form {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      padding: 2rem;
      border-radius: 15px;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-group label {
      display: block;
      margin-bottom: 0.5rem;
      color: var(--grey);
    }

    .form-group input,
    .form-group textarea {
      width: 100%;
      padding: 0.8rem;
      background-color: #333;
      border: none;
      border-radius: 5px;
      color: var(--white);
    }

    .contact-info {
      color: var(--grey);
      line-height: 1.6;
    }

    .contact-info h3 {
      color: var(--orange-light);
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .timeline::before {
        left: 0;
      }

      .timeline-item {
        width: 100%;
        padding-left: 2rem;
      }

      .timeline-item:nth-child(odd),
      .timeline-item:nth-child(even) {
        left: 0;
        text-align: left;
      }

      .contact-grid {
        grid-template-columns: 1fr;
      }
    }

    @media screen and (max-width: 1024px) {}

    

  

   



  
  
  

    @media (max-width: 768px) {
    
    }
  </style>

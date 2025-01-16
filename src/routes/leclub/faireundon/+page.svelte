

<section class="donate">
  <h2 class="section-title">Faire un Don</h2>
  <div class="donate-content">
    <p>
      Votre soutien est essentiel pour maintenir et développer nos activités.
      Chaque don compte et nous aide à former les champions de demain.
    </p>
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



<style>
  :root {
    --black: #000000;
    --white: #ffffff;
    --orange-light: #ffa500;
    --orange-dark: #ff4500;
    --grey: #808080;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Arial", sans-serif;
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
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("/images/hero.jpg");
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
    content: "";
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

  .history-description {
    max-width: 800px;
    margin: 0 auto;
    color: var(--grey);
    line-height: 1.6;
  }

  .timeline-cup {
    display: inline-block;
    width: 40px; /* Ajustez la taille selon vos besoins */
    height: auto;
    margin-left: 10px; /* Espace entre le texte et l'image */
    vertical-align: middle; /* Aligne l'image au centre du texte */
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
    content: "";
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

  @media screen and (max-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
</style>

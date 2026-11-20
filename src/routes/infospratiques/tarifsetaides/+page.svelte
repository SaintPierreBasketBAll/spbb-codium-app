<script>
import PaymentTerms from '$lib/components/infos-pratiques/PaymentTerms.svelte';
import FamilyDiscounts from '$lib/components/infos-pratiques/FamilyDiscounts.svelte';
</script>
<section class="pass-sport"><h1 class="section-title">Tarifs et aides 2026/2027</h1>
<div class="pass-sport-content"><div class="pass-sport-card"><div class="pass-sport-text">
<h2>Adhésion au SPBB</h2><p>La cotisation affichée par le club est de <strong>150 € hors assurance optionnelle</strong>. Consultez les <a href="/infospratiques/adhesion">modalités d’adhésion et de paiement</a> avant de régler votre inscription.</p>
<PaymentTerms />
<FamilyDiscounts />
<h2>Pass Sport 2026/2027</h2><p>Le Pass Sport est une aide de <strong>50 €</strong>, sous conditions, utilisable du <strong>1er septembre au 31 décembre 2026</strong>.</p>
<ul><li>Jeunes de 6 à 17 ans révolus : quotient familial CAF ou MSA inférieur ou égal à 699 €.</li><li>Jeunes de 6 à 19 ans révolus bénéficiaires de l’AEEH, ou de 16 à 30 ans révolus bénéficiaires de l’AAH.</li><li>Étudiants boursiers jusqu’à 28 ans révolus, titulaires d’une bourse éligible attribuée avant le 15 octobre 2026.</li></ul>
<p>Présentez votre code au club avant le règlement afin de vérifier sa prise en compte.</p>
<p><a href="https://www.education.gouv.fr/le-pass-sport-458742" target="_blank" rel="noopener noreferrer">Conditions officielles du Pass Sport 2026/2027</a></p>
<a href="https://www.pass.sports.gouv.fr/" class="pass-sport-button" target="_blank" rel="noopener noreferrer">Vérifier mon éligibilité</a>
</div></div></div></section>
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

 

 

  .logo {
    width: 80px;
    height: auto;
    transition: transform 0.3s ease;
  }

  .logo:hover {
    transform: scale(1.1);
  }

  .nav-links {
    display: flex;
    gap: 2rem;
  }

  .nav-links > a,
  .nav-item > a {
    color: var(--white);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-links > a:hover,
  .nav-item > a:hover {
    color: var(--orange-light);
  }

  .nav-item {
    position: relative;
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background: linear-gradient(45deg, var(--black), #1a1a1a);
    min-width: 200px;
    border-radius: 5px;
    padding: 0.5rem 0;
    z-index: 1000;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  }

  .nav-item:hover .dropdown {
    display: block;
  }

  .dropdown a {
    display: block;
    padding: 0.8rem 1.5rem;
    color: var(--white);
    text-decoration: none;
    font-size: 1rem;
    text-align: left;
    transition:
      color 0.3s ease,
      background-color 0.3s ease;
  }

  .dropdown a:hover {
    color: var(--orange-light);
    background-color: rgba(255, 165, 0, 0.1);
  }

  .nav-links > a {
    padding: 1rem 0;
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
    background-image: url("https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3");
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
    opacity: 0.3;
    background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
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

  .news {
    padding: 6rem 2rem;
    background-color: #1a1a1a;
    position: relative;
  }

  .news-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  .news-card {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    border-radius: 15px;
    overflow: hidden;
    transition: transform 0.3s ease;
  }

  .news-card:hover {
    transform: translateY(-10px);
  }

  .news-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  .news-content {
    padding: 1.5rem;
  }

  .news-date {
    color: var(--orange-light);
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }

  .news-title {
    color: var(--white);
    font-size: 1.25rem;
    margin-bottom: 1rem;
  }

  .news-excerpt {
    color: var(--grey);
    line-height: 1.6;
    margin-bottom: 1rem;
  }

  .news-link {
    color: var(--orange-light);
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease;
  }

  .news-link:hover {
    color: var(--orange-dark);
  }

  .schedule {
    padding: 6rem 2rem;
    background-color: #000000;
    position: relative;
  }

  .schedule-content {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }

  @media (min-width: 992px) {
    .schedule-content {
      grid-template-columns: 2fr 1fr;
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

  .pass-sport {
    padding: 6rem 2rem;
    background-color: #1a1a1a;
    position: relative;
  }

  .pass-sport-content {
    max-width: 800px;
    margin: 0 auto;
  }

  .pass-sport-card {
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  }

  .pass-sport-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
  }

  .pass-sport-icon {
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }

  .pass-sport-text {
    color: var(--grey);
    line-height: 1.6;
  }

  .pass-sport-text p {
    margin-bottom: 1.5rem;
  }

  .pass-sport-text strong {
    color: var(--white);
  }

  .alert {
    background-color: rgba(255, 69, 0, 0.1);
    border-left: 4px solid var(--orange-dark);
    padding: 1rem;
    border-radius: 0 5px 5px 0;
    margin: 1.5rem 0;
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
  }
  /* alert.css */
.alert__container {
display: flex;
flex-direction: column;
gap: 0.5rem;
}

.alert__container p,
.alert__container ul {
margin: 0;
padding: 0;
}

.alert__container ul {
list-style: none;
}

  .alert-icon {
    flex-shrink: 0;
    margin-top: 0.2rem;
  }

  .alert p {
    margin: 0;
  }

  .pass-sport-button {
    display: inline-block;
    padding: 0.8rem 1.5rem;
    background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
    border: none;
    border-radius: 25px;
    color: var(--white);
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.3s ease;
    margin-top: 1rem;
  }

  .pass-sport-button:hover {
    transform: scale(1.05);
  }

  @media (min-width: 768px) {
    .pass-sport-card {
      flex-direction: row;
      align-items: center;
    }

    .pass-sport-icon {
      margin-bottom: 0;
      margin-right: 2rem;
    }
  }
</style>

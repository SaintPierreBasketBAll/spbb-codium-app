

  <section class="partners">
    <h2 class="section-title">Nos Partenaires</h2>
    <div class="partners-container">
      <div class="partners-grid">
        <img src="/images/kitm_logo_400.png" alt="KITM Logo" class="partner-logo">
        <img src="/images/logo_ffbb.png" alt="FFBB Logo" class="partner-logo">
        <img src="/images/logo_saint_pierre.png" alt="Saint Pierre Logo" class="logo-ville-stpierre">
        <img src="/images/logo_lrbb.jpeg" alt="LRBB Logo" class="partner-logo">
        <img src="/images/logo_ostl.png" alt="OSTL Logo" class="partner-logo">
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
    
    body {
      background-color: var(--black);
      color: var(--white);
    }
    
    .navbar {
      background: linear-gradient(45deg, var(--black), #1a1a1a);
      padding: 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
    }
    
    .nav-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      padding: 0 1rem;
    }
    
    .hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 21px;
      background: transparent;
      border: none;
      cursor: pointer;
      padding: 0;
      z-index: 10;
    }
    
    .hamburger-line {
      width: 100%;
      height: 3px;
      background: var(--white);
      transition: all 0.3s linear;
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
      align-items: center;
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
      height: 100%;
      display: flex;
      align-items: center;
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
      box-shadow: 0 2px 5px rgba(0,0,0,0.2);
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
      transition: color 0.3s ease, background-color 0.3s ease;
    }
    
    .dropdown a:hover {
      color: var(--orange-light);
      background-color: rgba(255,165,0,0.1);
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
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url('https://images.unsplash.com/photo-1504450758481-7338eba7524a?ixlib=rb-4.0.3');
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
    
    .history, .donate, .contact {
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
    
    .history-content, .donate-content {
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
    
    .about-club {
      padding: 6rem 2rem;
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
    
    .team-section {
      padding: 6rem 2rem;
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
    
    .clubhouse {
      padding: 6rem 2rem;
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
    
    .credits {
      padding: 2rem;
      background-color: #1a1a1a;
      text-align: center;
    }
    
    .credits a {
      color: var(--grey);
      text-decoration: none;
      transition: color 0.3s ease;
    }
    
    .credits a:hover {
      color: var(--orange-light);
    }
    
    .teams {
      padding: 6rem 2rem;
      background-color: #000000;
      position: relative;
    }
    
    .teams-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .teams-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }
    
    .team-card {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
      overflow: hidden;
      transition: transform 0.3s ease;
    }
    
    .team-card:hover {
      transform: translateY(-10px);
    }
    
    .team-image {
      width: 100%;
      height: 250px;
      object-fit: cover;
    }
    
    .team-card-content {
      padding: 1.5rem;
    }
    
    .team-card h3 {
      color: var(--orange-light);
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
    
    .team-card p {
      color: var(--grey);
      line-height: 1.6;
    }
    
    .partners {
      padding: 6rem 2rem;
      background-color: #000000;
      position: relative;
    }
    
    .partners-container {
      max-width: 1200px;
      margin: 0 auto;
    }
    
    .partners-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
      align-items: center;
      justify-items: center;
      margin-top: 3rem;
    }
    
    .partner-logo {
      max-width: 200px;
      height: auto;
      transition: transform 0.3s ease;
      filter: grayscale(100%) brightness(150%);
    }
    
    .partner-logo:hover {
      transform: scale(1.1);
      filter: grayscale(0%) brightness(100%);
    }
    .logo-ville-stpierre {
      max-width: 60rem;
      height: auto;
      padding-left: 25rem;
      transition: transform 0.3s ease;
      filter: grayscale(100%) brightness(150%);
    }
    .logo-ville-stpierre:hover {
      transform: scale(1.1);
      filter: grayscale(0%) brightness(100%);
    }
    
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        padding: 1rem 0;
      }
      
      .hamburger {
        display: flex;
      }
    
      .nav-links {
        display: none;
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        background: linear-gradient(45deg, var(--black), #1a1a1a);
        padding: 1rem;
        box-shadow: 0 2px 5px rgba(0,0,0,0.2);
      }
    
      .nav-links.active {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }
    
      .nav-links > a,
      .nav-item > a {
        width: 100%;
        padding: 1rem;
      }
    
      .dropdown {
        position: static;
        width: 100%;
        display: none;
        margin-left: 1rem;
      }
    
      .nav-item:hover .dropdown {
        display: none;
      }
    
      .nav-item.active .dropdown {
        display: block;
      }
    
      .hamburger.active .hamburger-line:nth-child(1) {
        transform: translateY(9px) rotate(45deg);
      }
    
      .hamburger.active .hamburger-line:nth-child(2) {
        opacity: 0;
      }
      
      .hamburger.active .hamburger-line:nth-child(3) {
        transform: translateY(-9px) rotate(-45deg);
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero p {
        font-size: 1.2rem;
      }
      
      .section-title {
        font-size: 2rem;
      }
      
      .timeline::before {
        left: 0;
      }
      
      .timeline-item {
        width: 100%;
        padding-left: 2rem;
        text-align: left;
      }
      
      .timeline-item:nth-child(even) {
        left: 0;
      }
      
      .about-stats {
        grid-template-columns: 1fr;
      }
      
      .contact-grid {
        grid-template-columns: 1fr;
      }
      
      .activities-grid,
      .news-grid,
      .about-grid,
      .donate-options,
      .projects-grid,
      .team-grid,
      .teams-grid {
        grid-template-columns: 1fr;
      }
      
      .team-card {
        margin: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .cta-button {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
      }
      
      .news-card,
      .activity-card,
      .donate-option,
      .project-card {
        margin: 1rem;
      }
      
      .stat-number {
        font-size: 2rem;
      }
    }
    
    @media (max-width: 768px) {
      .partners-grid {
        grid-template-columns: repeat(2, 1fr);
        gap: 2rem;
      }
      
      .partner-logo {
        max-width: 150px;
      }
      .logo-ville-stpierre {
        max-width: 150px;
      }
    }
    
    @media (max-width: 480px) {
      .partners-grid {
        grid-template-columns: 1fr;
      }
    }
    </style>
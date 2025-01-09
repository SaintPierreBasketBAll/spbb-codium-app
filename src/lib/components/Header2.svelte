<script>
    let isMenuOpen = $state(false);
  
    function toggleMenu() {
      isMenuOpen = !isMenuOpen;
    }
  </script>
  
  <nav class="navbar">
    <div class="nav-header">
      <img src="/a/aa40fb5b-f5b0-4830-9d97-85959841ffdd" alt="SPBB Basketball Logo with flame design" class="logo" />
      <button class="hamburger" aria-label="Menu" onclick={toggleMenu}>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>
    </div>
    <div class="nav-links" class:active={isMenuOpen}>
      <a href="https://paris-f.com/accueil">Accueil</a>
      <div class="nav-item">
        <a href="https://paris-f.com/le-club">Le club</a>
        <div class="dropdown">
          <a href="https://paris-f.com/le-club/presentation">Présentation du club</a>
          <a href="https://paris-f.com/le-club/equipe-dirigeante">L'équipe dirigeante</a>
          <a href="https://paris-f.com/le-club/projets">Les projets</a>
          <a href="https://paris-f.com/le-club/staff-technique">Le staff technique</a>
          <a href="https://paris-f.com/le-club/partenaires">Les partenaires</a>
          <a href="https://paris-f.com/le-club/faire-un-don">Faire un don</a>
        </div>
      </div>
      <a href="https://paris-f.com/nos-equipes">Nos équipes</a>
      <a href="https://paris-f.com/infos-pratiques">Infos pratiques</a>
      <a href="https://paris-f.com/contact">Contact</a>
    </div>
  </nav>
  
  <style>
    :root {
      --black: #000000;
      --white: #FFFFFF;
      --orange-light: #FFA500;
      --orange-dark: #FF4500;
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
      transition: all 0.3s ease;
    }
  
    .nav-links.active {
      display: block;
      flex-direction: column;
    }
  
    .nav-links > a {
      color: var(--white);
      text-decoration: none;
      transition: color 0.3s ease;
      padding: 1rem 0;
    }
  
    .nav-links > a:hover {
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
      transition: color 0.3s ease, background-color 0.3s ease;
    }
  
    .dropdown a:hover {
      color: var(--orange-light);
      background-color: rgba(255, 165, 0, 0.1);
    }
  
    @media (max-width: 768px) {
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
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }
  
      .nav-links.active {
        display: flex;
      }
    }
  </style>
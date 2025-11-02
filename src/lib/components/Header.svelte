<script>
  let isMenuOpen = $state(false); // État pour gérer l'ouverture du menu

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function handleClickOutside(event) {
    // Vérifier si l'élément cliqué est en dehors des éléments spécifiés
    if (!event.target.closest('.nav-links') && !event.target.closest('.hamburger')) {
      isMenuOpen = false;
    }
  }

  // Effet pour gérer l'ajout et la suppression de l'événement de clic
  $effect(() => {
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });
</script>

<nav class="navbar">
  <a href="/"><img
    src="/images/logo.png"
    alt="Logo du Saint-Pierre Basket Ball avec le dessin d'un ballon de basket avec des flammes et le texte SPBB Saint Pierre Basket Ball"
    class="logo logo-radius"
  /></a>
  
  <div class="hamburger" onclick={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>
 
  <div class="nav-links" class:active={isMenuOpen}>
    <!-- Contenu des liens de navigation -->
    <a href="/">Accueil</a>
    <div class="nav-item">
      <a href="#">Le club</a>
      <div class="dropdown-menu">
        <a href="/leclub/presentationduclub/">Présentation du club</a>
        <a href="/leclub/lebureau/">L'équipe dirigeante</a>
        <a href="/leclub/lesprojets/">Les projets</a>
        <a href="/leclub/lestafftechnique/">Le staff technique</a>
        <a href="/leclub/lespartenaires">Les partenaires</a>
        <a href="/leclub/faireundon/">Faire un don</a>
      </div>
    </div>
    <div class="nav-item">
      <a href="#">Nos Équipes</a>
      <div class="dropdown-menu">
        <a href="/nosequipes/seniorsgarcons/saison2024-2025/">Seniors garçons</a>
        <a href="/nosequipes/seniorsfilles/">Seniors filles</a>
        <a href="/nosequipes/u18/">U18</a>
        <a href="/nosequipes/u18/u18filles/">U18 filles</a>
        <a href="/nosequipes/u15/">U15</a>
        <a href="/nosequipes/u13/">U13</a>
        <a href="/nosequipes/ecoledebasket/">École de Basket</a>
      </div>
    </div>
    <div class="nav-item">
      <a href="#">Infos pratiques</a>
      <div class="dropdown-menu">
        <a href="/infospratiques/adhesion">Adhésion</a>
        <a href="/infospratiques/leshoraires/">Les horaires</a>
        <a href="/infospratiques/lesgymnases/">Les gymnases</a>
        <a href="/infospratiques/tarifsetaides/">Tarifs et aides</a>
      </div>
    </div>
    <a href="/contact">Contact</a>
    <a href="/inscription">S'inscrire</a>
  </div>
  <div class="header__social" aria-label="Réseaux sociaux">
    <a
      class="header__social-link"
      href="https://www.facebook.com/profile.php?id=61565916243122"
      target="_blank"
      rel="noopener"
      aria-label="Facebook SPBB"
      title="Facebook SPBB"
    >
      <!-- Facebook brand icon: fixed black stroke + white fill for contrast on dark header -->
      <svg class="header__icon" width="56" height="56" viewBox="0 0 24 24" fill="white" stroke="black" stroke-width="1.5" aria-hidden="true" focusable="false">
        <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" />
      </svg>
    </a>

    <a
      class="header__social-link"
      href="https://instagram.com"
      target="_blank"
      rel="noopener"
      aria-label="Instagram SPBB"
      title="Instagram SPBB"
    >
      <!-- Instagram glyph in solid style -->
      <svg class="header__icon" width="56" height="56" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" focusable="false">
        <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
      </svg>
    </a>
  </div>
</nav>

<style>
  .navbar {
      background: linear-gradient(45deg, var(--black), #1a1a1a);
      padding: 0.5rem 2rem 0.5rem 1rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1000;
  }

  .logo {
      width: 80px;
      height: auto;
      transition: transform 0.3s ease;
      margin-left: 1rem;
  }
  .logo-radius {
      border-radius: 50%;
  }

  .logo:hover {
      transform: scale(1.1);
  }

  .hamburger {
      display: none;
      flex-direction: column;
      justify-content: space-between;
      width: 30px;
      height: 1.5rem;
      cursor: pointer;
      z-index: 1001;
  }

  .hamburger span {
      display: block;
      width: 100%;
      height: 3px;
      background: var(--orange-light);
      transition: all 0.3s ease;
  }

  .nav-links {
      position: relative;
      display: flex;
      gap: 2rem;
  }

  .nav-links a {
      color: var(--white);
      text-decoration: none;
      font-size: 1.1rem;
      position: relative;
      background: linear-gradient(
          90deg,
          var(--orange-light),
          var(--orange-dark)
      );
      background-size: 200% 100%;
      background-position: 100% 0;
      -webkit-background-clip: text;
      background-clip: text;
      transition:
          color 0.3s ease,
          background-position 0.3s ease;
  }

  .nav-links a:hover {
      color: transparent;
      -webkit-text-fill-color: transparent;
      background-position: 0 0;
  }

  .nav-item {
      position: relative;
      display: inline-block;
  }

  .dropdown-menu {
      display: none;
      position: absolute;
      top: 100%;
      left: 0;
      background: linear-gradient(45deg, var(--black), #1a1a1a);
      min-width: 200px;
      border-radius: 5px;
      padding: 0.5rem 0;
      z-index: 1000;
      margin-right: 1rem;
  }

  .nav-item:hover .dropdown-menu {
      display: block;
  }

  .dropdown-menu a {
      display: block;
      padding: 0.5rem 1rem;
      color: var(--white);
      text-decoration: none;
      background: linear-gradient(
          90deg,
          var(--orange-light),
          var(--orange-dark)
      );
      background-size: 200% 100%;
      background-position: 100% 0;
      -webkit-background-clip: text;
      background-clip: text;
      transition:
          color 0.3s ease,
          background-position 0.3s ease;
  }

  .dropdown-menu a:hover {
      color: transparent;
      -webkit-text-fill-color: transparent;
      background-position: 0 0;
      background-color: transparent;
  }
  @media screen and (max-width: 900px) {
      /* .hamburger {
          display: flex;
      } */
      .hamburger {
          display: flex; /* Ensure hamburger is visible on small screens */
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 1.5rem;
          cursor: pointer;
          z-index: 1001; /* Ensure it's above other elements */
      }
      .hamburger span {
          display: block;
          width: 100%;
          height: 3px;
          background: var(--orange-light);
          transition: all 0.3s ease;
      }
      /*  .nav-links {
          position: fixed;
          top: 0;
          right: -100%;
          height: 100vh;
          width: 250px;
          background: linear-gradient(45deg, var(--black), #1a1a1a);
          flex-direction: column;
          padding: 80px 20px;
          transition: 0.3s ease;
          gap: 1.5rem;
        } */
      .nav-links {
          display: none; /* Initially hidden */
          position: fixed;
          top: 0;
          right: -100%; /* Hidden off-screen */
          height: 100vh;
          width: 250px;
          background: linear-gradient(45deg, var(--black), #1a1a1a);
          flex-direction: column;
          padding: 80px 20px;
          transition: 0.3s ease;
          gap: 1.5rem;
      }
      .nav-links.active {
          display: flex; /* Show menu when active */
          right: 0; /* Slide into view */
      }

      .nav-item {
          width: 100%;
      }

      .dropdown-menu {
          position: static;
          width: 100%;
          display: none;
          padding-left: 1rem;
          background: transparent;
      }

      .nav-item:hover .dropdown-menu {
          display: block;
      }

      .navbar {
          padding: 1rem;
          justify-content: space-between;
      }

      .logo {
          width: 60px;
      }
  }

  .header__social {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .header__social-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 46px;
    height: 46px;
    border-radius: 8px;
    text-decoration: none;
    background: transparent;
    transition: transform 0.2s ease, background-color 0.2s ease;
  }

  .header__icon {
    display: block;
    width: 64px;
    height: 64px;
    color: var(--white);
  }

  .header__social-link:hover {
    transform: translateY(-1px);
    background-color: rgba(255, 165, 0, 0.15); /* léger halo orange */
  }

  /* Sur fond sombre, forcer l'icône Instagram à suivre la couleur du texte */
  .header__social-link svg[fill="currentColor"] { color: var(--white); }

  @media screen and (max-width: 900px) {
    .header__social {
      gap: 0.25rem;
    }
    .header__social-link {
      width: 42px;
      height: 42px;
    }
    .header__icon {
      width: 67px;
      height: 67px;
    }
  }
</style>

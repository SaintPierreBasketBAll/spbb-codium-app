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
    alt="SPBB Basketball Logo with flame design"
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
      <a href="">Le club</a>
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
      <a href="/nosequipes">Nos Équipes</a>
      <div class="dropdown-menu">
        <a href="https://paris-f.com/le-club/presentation">Séniors garçons</a>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">Séniors filles</a>
        <a href="https://paris-f.com/le-club/Les projets">U18 garçon</a>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">U18 filles</a>
        <a href="https://paris-f.com/le-club/presentation">U15</a>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">U13</a>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">École de Basket</a>
      </div>
    </div>
    <div class="nav-item">
      <a href="/infospratiques">Infos pratiques</a>
      <div class="dropdown-menu">
        <a href="https://paris-f.com/le-club/presentation">Adhésion</a>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">Les horaires</a>
        <a href="https://paris-f.com/le-club/Les projets">Les gymnases</a>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">Tarifs et aides</a>
      </div>
    </div>
    <a href="https://paris-f.com/resultats">Contact</a>
    <a href="https://paris-f.com/news">S'inscrire</a>
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
</style>

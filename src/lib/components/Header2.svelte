<script>

  let isMenuOpen = $state(false);
  let isTeamsMenuOpen = $state(false);
  let isSeniorBoysMenuOpen = $state(false);

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
  }

  function toggleTeamsMenu(event) {
    event.stopPropagation();
    isTeamsMenuOpen = !isTeamsMenuOpen;
  }

  function toggleSeniorBoysMenu(event) {
    event.stopPropagation();
    isSeniorBoysMenuOpen = !isSeniorBoysMenuOpen;
  }

  function handleClickOutside(event) {
    if (
      !event.target.closest(".nav-links") &&
      !event.target.closest(".hamburger")
    ) {
      isMenuOpen = false;
      isTeamsMenuOpen = false;
      isSeniorBoysMenuOpen = false;
    }
  }

  $effect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
</script>

<nav class="navbar">
  <a href="/"
    ><img
      src="/images/logo.png"
      alt="SPBB Basketball Logo"
      class="logo logo-radius"
    /></a
  >

  <div class="hamburger" on:click={toggleMenu}>
    <span></span>
    <span></span>
    <span></span>
  </div>

  <div class="nav-links" class:active={isMenuOpen}>
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
      <a href="#" on:click={toggleTeamsMenu}>Nos Équipes</a>
      <div class="dropdown-menu" class:active={isTeamsMenuOpen}>
        <div class="nav-item">
          <a href="#" on:click={toggleSeniorBoysMenu}>Séniors garçons</a>
          <div class="dropdown-submenu" class:active={isSeniorBoysMenuOpen}>
            <a href="/nosequipes/seniorsgarcons/equipe1">Équipe 1</a>
            <a href="/nosequipes/seniorsgarcons/equipe2">Équipe 2</a>
          </div>
        </div>
        <a href="https://paris-f.com/le-club/equipe-dirigeante">Séniors filles</a>
        <a href="https://paris-f.com/le-club/Les projets">U18 garçons</a>
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

    <a href="/contact">Contact</a>
    <a href="https://paris-f.com/news">S'inscrire</a>
  </div>
</nav>

<style>
  .navbar {
    background: linear-gradient(45deg, var(--black), #1a1a1a);
    padding: 0.5rem 2rem;
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

  .hamburger {
    display: none;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 1.5rem;
    cursor: pointer;
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
    transition: color 0.3s ease;
  }

  .nav-item {
    position: relative;
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
  }

  .nav-item:hover .dropdown-menu,
  .dropdown-menu.active {
    display: block;
  }

  .dropdown-submenu {
    display: none;
    position: absolute;
    top: 0;
    left: 100%;
    background: linear-gradient(45deg, var(--black), #1a1a1a);
    min-width: 180px;
    border-radius: 5px;
    padding: 0.5rem 0;
    z-index: 1000;
  }

  .nav-item:hover .dropdown-submenu,
  .dropdown-submenu.active {
    display: block;
  }

  @media screen and (max-width: 900px) {
    .hamburger {
      display: flex;
    }

    .nav-links {
      display: none;
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
    }

    .nav-links.active {
      display: flex;
      right: 0;
    }
  }
</style>
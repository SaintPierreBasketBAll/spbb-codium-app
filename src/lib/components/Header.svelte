<script>
 /*  document.querySelectorAll('.nav-item a').forEach(anchor => {
		  anchor.addEventListener('click', function (e) {
			const href = this.getAttribute('href');
			if (href && !e.target.closest('.dropdown-menu')) {
			  e.preventDefault();
			  window.location.href = href;
			}
		  });
		});
	
		document.querySelectorAll('.dropdown-menu a').forEach(anchor => {
		  anchor.addEventListener('click', function (e) {
			e.preventDefault();
			const href = this.getAttribute('href');
			window.location.href = href;
		  });
		});
	
		const hamburger = document.querySelector('.hamburger');
		const navLinks = document.querySelector('.nav-links');
	
		hamburger.addEventListener('click', () => {
		  navLinks.classList.toggle('active');
		  
		  // Animate hamburger to X
		  const spans = hamburger.querySelectorAll('span');
		  spans[0].style.transform = navLinks.classList.contains('active') 
			? 'rotate(45deg) translate(6px, 6px)' 
			: 'none';
		  spans[1].style.opacity = navLinks.classList.contains('active') 
			? '0' 
			: '1';
		  spans[2].style.transform = navLinks.classList.contains('active') 
			? 'rotate(-45deg) translate(6px, -6px)' 
			: 'none';
		});
	
		// Close menu when clicking outside
		document.addEventListener('click', (e) => {
		  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
			navLinks.classList.remove('active');
			const spans = hamburger.querySelectorAll('span');
			spans[0].style.transform = 'none';
			spans[1].style.opacity = '1';
			spans[2].style.transform = 'none';
		  }
		});
	
		// Close menu when clicking a link
		navLinks.querySelectorAll('a').forEach(link => {
		  link.addEventListener('click', () => {
			navLinks.classList.remove('active');
			const spans = hamburger.querySelectorAll('span');
			spans[0].style.transform = 'none';
			spans[1].style.opacity = '1';
			spans[2].style.transform = 'none';
		  });
		}); */
</script>


<nav class="navbar">
  <img src="images/logo.png" alt="SPBB Basketball Logo with flame design" class="logo">
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="nav-links">
    <a href="index.html">Accueil</a>
    <div class="nav-item">
    <a href="/leclub">Le club</a>
    <div class="dropdown-menu">
      <a href="/leclub/presentationduclub">Présentation du club</a>
      <a href="https://paris-f.com/le-club/equipe-dirigeante">L'équipe dirigeante</a>
	  <a href="https://paris-f.com/le-club/Les projets">Les projets</a>
      <a href="https://paris-f.com/le-club/equipe-dirigeante">Le staff technique</a>
	  <a href="https://paris-f.com/le-club/presentation">Les partenaires</a>
      <a href="https://paris-f.com/le-club/equipe-dirigeante">Faire un don</a>
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
		<a href="https://paris-f.com/equipe">Infos pratiques</a>
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
	  padding: 1rem 2rem 1rem 1rem;
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
	}
	
	.logo:hover {
	  transform: scale(1.1);
	}
	
	.hamburger {
	  display: none;
	  flex-direction: column;
	  justify-content: space-between;
	  width: 30px;
	  height: 21px;
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
	  background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
	  background-size: 200% 100%;
	  background-position: 100% 0;
	  -webkit-background-clip: text;
	  background-clip: text;
	  transition: color 0.3s ease, background-position 0.3s ease;
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
	}
	
	.nav-item:hover .dropdown-menu {
	  display: block;
	}
	
	.dropdown-menu a {
	  display: block;
	  padding: 0.5rem 1rem;
	  color: var(--white);
	  text-decoration: none;
	  background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
	  background-size: 200% 100%;
	  background-position: 100% 0;
	  -webkit-background-clip: text;
	  background-clip: text;
	  transition: color 0.3s ease, background-position 0.3s ease;
	}
	
	.dropdown-menu a:hover {
	  color: transparent;
	  -webkit-text-fill-color: transparent;
	  background-position: 0 0;
	  background-color: transparent;
	}
	@media screen and (max-width: 1024px) {
	  .hamburger {
		display: flex;
	  }
	
	  .nav-links {
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
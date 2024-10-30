<script>
	import '../app.css';
	let logo_img = 'spbb_logo.png'
	let { children } = $props();
</script>

<div class="header-container">
	<header>
		<img src={logo_img} alt="Saint Pierre Basket Club logo" class="logo">
		<nav>
			
			<ul>
				<li><a href="/">Accueil</a></li>
				<li>
					<a href="https://saintpierrebc.com/le-club">Le club</a>
					<div class="dropdown-content">
						<a href="https://saintpierrebc.com/le-club/presentation">Présentation du club</a>
						<a href="https://saintpierrebc.com/le-club/equipe-dirigeante">L'équipe dirigeante</a>
						<a href="https://saintpierrebc.com/le-club/projets">Les projets</a>
						<a href="https://saintpierrebc.com/le-club/staff">Le staff</a>
						<a href="https://saintpierrebc.com/le-club/partenaires">Les partenaires</a>
						<a href="https://saintpierrebc.com/le-club/faire-un-don">Faire un don</a>
					</div>
				</li>
				<li><a href="https://saintpierrebc.com/nos-equipes">Nos équipes</a></li>
				<li><a href="https://saintpierrebc.com/infos-pratiques">Infos pratiques</a></li>
				<li><a href="https://saintpierrebc.com/boutique">Boutique</a></li>
				<li><a href="https://saintpierrebc.com/contact">Contact</a></li>
			</ul>
		</nav>
	</header>
</div>	

	

	
	
	{@render children()}
	
	
	
	
	<footer>
        <p>&copy; 2023 Saint Pierre Basket Club. Tous droits réservés.</p>
        <p>Suivez-nous sur les réseaux sociaux : 
            <a href="https://www.facebook.com/SaintPierreBasketClub" style="color: white;">Facebook</a> | 
            <a href="https://www.instagram.com/saintpierrebasket" style="color: white;">Instagram</a> | 
            <a href="https://twitter.com/SPBasketClub" style="color: white;">Twitter</a>
        </p>
    </footer>

<!--Noir : #000000
Blanc : #FFFFFF
Orange (dégradé des flammes) : Un dégradé allant d’un 
orange clair (#FFA500) 
à des teintes plus foncées 
proches du rouge (#FF4500)
Gris (pour les ombrages) : Un gris moyen (#808080)  -->

<style>
	.header-container {
  background-color: #000000;
}
	header {
		
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		

	}
	.logo {
		width: 5rem;
		height: auto;
		margin-bottom: 10px;
	}
	h1{
		font-size: 4rem;
		font-weight: bolder;
		box-shadow: -1px -1px 10px black, 1px 1px 10px black;
		
	}
	nav {
		background-color: #000000;
		padding: 0.5rem;
	}
	nav ul {
		list-style-type: none;
		padding: 0;
		margin: 0;
		display: flex;
		justify-content: center;
	}
	nav ul li {
		margin: 0 15px;
		position: relative;
	}
	nav ul li a {
		color: white;
		text-decoration: none;
		font-weight: bold;
		padding: 10px;
		display: block;
	}
	nav ul li:hover > a {
		background-color: #004080;
	}
	.dropdown-content {
		display: none;
		position: absolute;
		background-color: #003366;
		min-width: 200px;
		box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
		z-index: 1;
	}
	.dropdown-content a {
		color: white;
		padding: 12px 16px;
		text-decoration: none;
		display: block;
		text-align: left;
	}
	.dropdown-content a:hover {
		background-color: #004080;
	}
	nav ul li:hover .dropdown-content {
		display: block;
	}
	.content-wrapper {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 2rem;
		max-width: 1200px;
		margin: 0 auto;
		width: 100%;
	}
	.hero {
		text-align: center;
		background-color: #0050a0;
		color: white;
		padding: 2rem;
		margin-bottom: 2rem;
		border-radius: 10px;
		width: 100%;
	}
	main {
		width: 100%;
	}
	.news-events {
		display: flex;
		justify-content: space-between;
		gap: 2rem;
	}
	.news, .events {
		flex: 1;
		background-color: white;
		padding: 1rem;
		border-radius: 10px;
		box-shadow: 0 2px 5px rgba(0,0,0,0.1);
	}
	.btn {
		display: inline-block;
		background-color: #0050a0;
		color: white;
		padding: 0.5rem 1rem;
		text-decoration: none;
		border-radius: 5px;
		transition: background-color 0.3s;
	}
	.btn:hover {
		background-color: #003366;
	}
	footer {
		background-color: #0000;
		color: white;
		text-align: center;
		padding: 1rem;
		margin-top: auto;
	}
</style>
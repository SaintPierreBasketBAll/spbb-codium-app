<script>
    let yearOfBirth = $state(2001);
    let currentYear = $state(new Date().getFullYear());
    let clubAge = $derived(currentYear - yearOfBirth);
</script>

<section class="about-club">
    <h2 class="section-title">
        Début de la saison de basket au mois de septembre !
    </h2>
    <div class="about-grid">
        <div class="about-content">
            <p>
                <br />📢 🏀 De septembre à juin, une année de passion et de
                compétition <br />
                <br />
                Le championnat de basket organisé par Saint-Pierre Basket-Ball suit
                le rythme de l’année scolaire ! Chaque mois de septembre, à l’occasion
                de la rentrée des classes, les joueurs et joueuses retrouvent les
                terrains pour une nouvelle saison riche en défis et en émotions.
                Les matchs et entraînements s’enchaînent tout au long de l’année,
                permettant à chaque licencié de progresser, de partager des moments
                conviviaux et de défendre les couleurs de notre club. Enfin, avec
                l’arrivée du mois de juin, la saison touche à sa fin, marquant une
                belle conclusion avant la pause des vacances de l'hiver austral.
                Préparez-vous à une nouvelle saison de basket et rejoignez-nous pour
                vivre ensemble cette aventure sportive passionnante ! 🏀🔥
            </p>
                <div class="about-stats">
                    <a href="/nosequipes/seniorsgarcons/saison2024-2025/equipesseniors/">
                    <div class="stat-item">
                        <div class="stat-label">Saison</div>
                        <div class="stat-number">2024/2025</div>
                    </div>
                </a>
                </div>
            
        </div>
        <div class="about-image">
            <img
                src="https://images.unsplash.com/photo-1519861531473-9200262188bf?ixlib=rb-4.0.3"
                alt="Équipe de basket Saint-Pierre en action"
            />
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
    body {
        background-color: var(--black);
        color: var(--white);
    }
    .section-title {
        text-align: center;
        font-size: 2.5rem;
        background: linear-gradient(
            90deg,
            var(--orange-light),
            var(--orange-dark)
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .about-club {
        padding: 8rem 2rem 2rem;
        background-color: #000000;
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
</style>

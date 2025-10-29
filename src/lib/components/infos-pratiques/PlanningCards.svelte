<script>
  const legendItems = [
    { key: 'mandela', color: '#d7263d', label: 'Gymnase Nelson-Mandela' },
    { key: 'gaston', color: '#0b67d1', label: 'Gymnase Gaston-Richardson' },
    { key: 'dome', color: '#e09524', label: 'Dôme de Terre Sainte' },
    { key: 'lbb', color: '#2faa52', label: 'Gymnase Ligne des Bambous' },
    { key: 'exterieur', color: '#8b5a2b', label: 'Terrains Extérieurs au gymnase Nelson Mandela' }
  ];

  const locationColorVars = legendItems
    .map((item) => `--color-${item.key}: ${item.color}`)
    .join('; ');

  const teams = [
    {
      name: 'SENIORS Garçons 1',
      staff: 'Coach : Laurent Parata',
      sessions: [
        { day: 'Lundi', time: '19h00–20h30', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Mardi', time: '20h30–22h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Jeudi', time: '20h30–22h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    },
    {
      name: 'SENIORS Garçons 2',
      staff: 'Coach : Daniel Doro • Assistant : Toto J',
      sessions: [
        { day: 'Lundi', time: '20h30–22h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Mercredi', time: '20h00–22h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    },
    {
      name: 'SENIORS Garçons 3',
      staff: 'Coach : Nicolas Merlin',
      sessions: [
        { day: 'Lundi', time: '20h30–21h45', venue: 'Gymnase <span class="gaston">Gaston‑Richardson</span>' },
        { day: 'Mardi', time: '20h30–22h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Mercredi', time: '20h30–21h45', venue: 'Gymnase <span class="gaston">Gaston‑Richardson</span>' }
      ]
    },
    {
      name: 'SENIORS Filles 1',
      staff: 'Coach : Lise Sinacouty',
      sessions: [
        { day: 'Mardi', time: '19h00–20h30', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Jeudi', time: '19h00–20h30', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Vendredi', time: '19h00–20h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    },
    {
      name: 'SENIORS Filles 2',
      staff: 'Coach : Jocely Laiton • Assistant : Jessie Gigant',
      sessions: [
        { day: 'Mardi', time: '19h00–20h30', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Jeudi', time: '20h00–20h30', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Vendredi', time: '19h00–20h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    },
    {
      name: 'U18 Garçons 1',
      staff: 'Coach : Jean-Hugues Banor',
      sessions: [
        { day: 'Lundi', time: '17h30–19h00', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Jeudi', time: '17h30–19h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Samedi', time: '10h00–11h30', venue: 'Gymnase <span class="gaston">Gaston‑Richardson</span>' }
      ]
    },
    {
      name: 'U18 Garçons 2',
      staff: 'Coach : Romain Enault',
      sessions: [
        { day: 'Mardi', time: '18h30–20h00', venue: 'Gymnase <span class="lbb">Ligne des Bambous</span>' },
        { day: 'Jeudi', time: '17h30–19h00', venue: '<span class="dome">Dôme de Terre Sainte</span>' }
      ]
    },
    {
      name: 'U18 Filles',
      staff: 'Coach : Pauline Payet • Assistant : Daniel Barret',
      sessions: [
        { day: 'Lundi', time: '17h30–19h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' },
        { day: 'Mercredi', time: '18h30–20h00', venue: 'Gymnase <span class="gaston">Gaston‑Richardson</span>' }
      ]
    },
    {
      name: 'U15 M1',
      staff: 'Coach : Christophe Simon • Assistant : Jean-Marie Gonneville',
      sessions: [
        { day: 'Lundi', time: '17h30–19h00', venue: '<span class="exterieur">Terrains Extérieurs</span>' },
        { day: 'Mercredi', time: '16h30–18h30', venue: 'Gymnase <span class="lbb">Ligne des Bambous</span>' }
      ]
    },
    {
      name: 'U15 M2',
      staff: 'Coach : Faïz Djanfar • Assistant : Daniel C',
      sessions: [
        { day: 'Lundi', time: '17h30–19h00', venue: '<span class="exterieur">Terrains Extérieurs</span>' },
        { day: 'Mercredi', time: '16h30–18h30', venue: 'Gymnase <span class="lbb">Ligne des Bambous</span>' }
      ]
    },
    {
      name: 'U15 F',
      staff: 'Coach : Neyma Ibrahim • Assistant : Darrell Coupama',
      sessions: [
        { day: 'Lundi', time: '17h30–19h00', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Mercredi', time: '17h30–19h00', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Vendredi', time: '17h30–19h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    },
    {
      name: 'U13 M1',
      staff: 'Coach : Guillaume Delmas • Assistant : Fabien Sobczack',
      sessions: [
        { day: 'Mardi', time: '17h30–19h00', venue: '<span class="dome">Dôme</span> ou <span class="exterieur">Terrains Extérieurs</span>' },
        { day: 'Vendredi', time: '17h30–19h00', venue: '<span class="exterieur">Terrains Extérieurs</span>' }
      ]
    },
    {
      name: 'U13 M2',
      staff: 'Coach : Melvin Antou',
      sessions: [
        { day: 'Mardi', time: '17h30–19h00', venue: '<span class="dome">Dôme de Terre Sainte</span> ou <span class="exterieur">TerrainsExtérieurs</span>' },
        { day: 'Vendredi', time: '17h30–19h00', venue: '<span class="exterieur">Terrains Extérieurs</span>' }
      ]
    },
    {
      name: 'U13 F',
      staff: 'Coach : Darrell Coupama',
      sessions: [
        { day: 'Mercredi', time: '17h30–19h00', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Samedi', time: '10h30–12h00', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    },
    {
      name: 'U11',
      staff: 'Coach : Floriane • Assistants : Philippe • Anli • Romain • Julien',
      sessions: [
        { day: 'Mercredi', time: '16h00–17h30', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Samedi', time: '10h30–12h00', venue: '<span class="dome">Dôme de Terre Sainte</span>' }
      ]
    },
    {
      name: 'U7–U9',
      staff: 'Coach : José Séry  • Assistants : Romain, Daniel Barret',
      sessions: [
        { day: 'Mercredi', time: '16h00–17h30', venue: '<span class="dome">Dôme de Terre Sainte</span>' },
        { day: 'Samedi', time: '09h00–10h30', venue: 'Gymnase <span class="mandela">Nelson‑Mandela</span>' }
      ]
    }
  ];
</script>

<section class="planning" style={locationColorVars}>
  <header class="page-header">
    <div class="wrap">
      <div class="title">
        <span class="badge">SPBB</span>
        <h1>Légende des terrains d’entraînement</h1>
      </div> 
      <div class="legend">
        {#each legendItems as item}
          <span class="chip">
            <span class="dot" style={`background:${item.color}`}></span>
            {item.label}
          </span>
        {/each}
      </div>
    </div>
  </header>

  <main class="grid">
    {#each teams as team}
      <article class="card">
        <header>
          <div class="head">
            <h2>{team.name}</h2>
            {#if team.staff}
              <div class="coach">{team.staff}</div>
            {/if}
          </div>
        </header>
        <div class="body">
          <div class="sessions">
            {#each team.sessions as session}
              <div class="session">
                <div class="day">{session.day}</div>
                <div class="detail">
                  <div class="time">{session.time}</div>
                  <div class="venue">{@html session.venue}</div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </article>
    {/each}
  </main>

  <footer class="page-footer">
    <p>
      Source : planning fourni par le SPBB. Couleurs des salles et style inspirés des
      couleurs du SPBB.
    </p>
  </footer>
</section>

<style>
  .planning {
    --bg: #0a0a0a;
    --panel: #121212;
    --red: #d7263d;
    --offwhite: #f5f5f5;
    --muted: #bdbdbd;
    --chip: #1b1b1b;
    --stroke: #2a2a2a;
    --shadow: 0 6px 16px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.03);
    --radius: 18px;
    min-height: 100%;
    font-family: system-ui, -apple-system, Segoe UI, Roboto, Inter, 'Helvetica Neue', Arial,
      'Noto Sans', sans-serif;
    background: radial-gradient(1200px 800px at 20% -10%, rgba(215, 38, 61, 0.12), transparent 60%),
      radial-gradient(900px 600px at 120% 10%, rgba(255, 255, 255, 0.05), transparent 60%),
      var(--bg);
    color: var(--offwhite);
  }

  @media (prefers-color-scheme: light) {
    .planning {
      --bg: #efefef;
      --panel: #fff;
      --chip: #f4f4f4;
      --stroke: #e8e8e8;
      --offwhite: #111;
      --muted: #444;
    }
  }

  .page-header {
    position: sticky;
    top: 0;
    z-index: 10;
    backdrop-filter: blur(8px);
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.85), rgba(10, 10, 10, 0.6));
    border-bottom: 1px solid var(--stroke);
  }

  .wrap {
    max-width: 1200px;
    margin: 0 auto;
    padding: 18px clamp(16px, 3vw, 28px);
  }

  .title {
    display: flex;
    align-items: center;
    gap: 14px;
  }

  .badge {
    background: var(--red);
    color: white;
    padding: 6px 10px;
    border-radius: 999px;
    font-weight: 700;
    letter-spacing: 0.3px;
  }

  h1 {
    margin: 0;
    font-size: clamp(20px, 2.6vw, 30px);
    letter-spacing: 0.3px;
  }

  .legend {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .legend .chip {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 10px;
    border-radius: 999px;
    background: var(--chip);
    border: 1px solid var(--stroke);
    font-size: 13px;
    color: var(--muted);
  }

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  .grid {
    display: grid;
    gap: 18px;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    padding: 22px clamp(16px, 3vw, 28px);
    max-width: 1200px;
    margin: 0 auto;
  }

  .card {
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent 50%), var(--panel);
    border: 1px solid var(--stroke);
    border-radius: var(--radius);
    box-shadow: var(--shadow);
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .card header {
    position: relative;
    background: linear-gradient(180deg, rgba(230, 46, 46, 0.18), rgba(130, 30, 2, 0.06));
    border: 0;
    backdrop-filter: none;
  }

  .card .head {
    padding: 14px 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 4px;
  }

  .card h2 {
    margin: 0;
    font-size: 18px;
    color: var(--offwhite);
    letter-spacing: 0.4px;
  }

  .coach {
    font-size: 13px;
    color: var(--muted);
    text-align: left;
    width: 100%;
  }

  .body {
    padding: 14px 16px 16px;
  }

  .sessions {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  .session {
    display: flex;
    gap: 10px;
    align-items: flex-start;
    padding: 10px;
    border: 1px dashed var(--stroke);
    border-radius: 12px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), transparent);
  }

  .day {
    min-width: 78px;
    font-weight: 700;
    color: #fff;
    background: var(--chip);
    border: 1px solid var(--stroke);
    padding: 6px 10px;
    border-radius: 999px;
    text-align: center;
  }

  .detail {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .time {
    font-weight: 700;
  }

  .venue {
    opacity: 0.9;
  }

  .venue :global(.mandela),
  .venue :global(.gaston),
  .venue :global(.dome),
  .venue :global(.lbb),
  .venue :global(.exterieur) {
    font-weight: 700;
  }

  .venue :global(.mandela) {
    color: var(--color-mandela);
  }

  .venue :global(.gaston) {
    color: var(--color-gaston);
  }

  .venue :global(.dome) {
    color: var(--color-dome);
  }

  .venue :global(.lbb) {
    color: var(--color-lbb);
  }

  .venue :global(.exterieur) {
    color: var(--color-exterieur);
  }

  .page-footer {
    max-width: 1200px;
    margin: 16px auto 60px;
    color: var(--muted);
    padding: 0 clamp(16px, 3vw, 28px);
  }
</style>

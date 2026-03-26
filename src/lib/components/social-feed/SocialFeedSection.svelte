<script>
  const DEFAULT_PROFILE_URL = "https://www.instagram.com/saintpierrebasketball/";

  let {
    feed = null,
    title = "Dernieres actualites Instagram",
    limit = 5,
    enabled = true
  } = $props();

  const emptyFeed = {
    posts: [],
    profileUrl: DEFAULT_PROFILE_URL,
    source: "fallback",
    isFallback: true
  };

  const socialFeed = feed ?? emptyFeed;
  const profileUrl = socialFeed.profileUrl || DEFAULT_PROFILE_URL;
  const posts = Array.isArray(socialFeed.posts) ? socialFeed.posts.slice(0, limit) : [];
  const isFallback = Boolean(socialFeed.isFallback);

  function formatDate(value) {
    if (!value) return "Publication recente";

    const date = new Date(value);
    if (Number.isNaN(date.getTime())) return "Publication recente";

    return date.toLocaleDateString("fr-FR", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });
  }

  function shortCaption(caption) {
    if (!caption) return "Retrouvez cette actualite sur le compte Instagram du SPBB.";
    if (caption.length <= 130) return caption;

    return `${caption.slice(0, 127).trimEnd()}...`;
  }
</script>

{#if enabled}
  <section class="social-feed" id="social-feed" aria-labelledby="social-feed-title">
    <div class="social-feed__container">
      <header class="social-feed__header">
        <h2 class="social-feed__title" id="social-feed-title">{title}</h2>
        <p class="social-feed__subtitle">Les 5 dernieres publications du club.</p>
      </header>

      {#if isFallback}
        <p class="social-feed__notice">
          Apercu local actif. Le flux Instagram peut etre branche cote serveur sans
          modifier le composant.
        </p>
      {/if}

      {#if posts.length}
        <ul class="social-feed__grid">
          {#each posts as post (post.id)}
            <li class="social-feed__item">
              <a
                class="social-feed__card"
                href={post.permalink || profileUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div class="social-feed__media">
                  <img
                    class="social-feed__image"
                    src={post.imageUrl}
                    alt="Publication Instagram du SPBB"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div class="social-feed__content">
                  <p class="social-feed__caption">{shortCaption(post.caption)}</p>
                  <p class="social-feed__meta">{formatDate(post.timestamp)}</p>
                </div>
              </a>
            </li>
          {/each}
        </ul>
      {:else}
        <p class="social-feed__empty">
          Les dernieres actualites Instagram seront affichees ici.
        </p>
      {/if}

      <div class="social-feed__footer">
        <a
          class="social-feed__cta"
          href={profileUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Voir le compte Instagram
        </a>
      </div>
    </div>
  </section>
{/if}

<style>
  .social-feed {
    padding: 4rem 2rem;
    background-color: #000000;
  }

  .social-feed__container {
    max-width: 1200px;
    margin: 0 auto;
  }

  .social-feed__header {
    margin-bottom: 2rem;
    text-align: center;
  }

  .social-feed__title {
    margin: 0 0 0.8rem;
    font-size: clamp(2rem, 3vw, 2.6rem);
    background: linear-gradient(90deg, #ffa500, #ff4500);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .social-feed__subtitle {
    margin: 0;
    color: #808080;
    font-size: 1rem;
  }

  .social-feed__notice {
    margin: 0 0 2rem;
    padding: 0.9rem 1rem;
    border-left: 3px solid #ffa500;
    background: linear-gradient(45deg, #1a1a1a, #242424);
    border-radius: 10px;
    color: #cccccc;
  }

  .social-feed__grid {
    margin: 0;
    padding: 0;
    list-style: none;
    display: grid;
    grid-template-columns: repeat(5, minmax(0, 1fr));
    gap: 1.2rem;
  }

  .social-feed__item {
    min-width: 0;
  }

  .social-feed__card {
    display: flex;
    flex-direction: column;
    height: 100%;
    border-radius: 14px;
    overflow: hidden;
    text-decoration: none;
    background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
    border: 1px solid #333333;
    transition: transform 0.25s ease, border-color 0.25s ease;
  }

  .social-feed__card:hover {
    transform: translateY(-4px);
    border-color: #ff4500;
  }

  .social-feed__media {
    aspect-ratio: 1 / 1;
    background-color: #111111;
  }

  .social-feed__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .social-feed__content {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    padding: 0.9rem;
  }

  .social-feed__caption {
    margin: 0;
    color: #cccccc;
    line-height: 1.45;
    font-size: 0.95rem;
  }

  .social-feed__meta {
    margin: auto 0 0;
    color: #ffa500;
    font-size: 0.82rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  .social-feed__empty {
    margin: 0;
    color: #cccccc;
    text-align: center;
  }

  .social-feed__footer {
    margin-top: 1.8rem;
    text-align: center;
  }

  .social-feed__cta {
    display: inline-block;
    text-decoration: none;
    color: #ffffff;
    font-weight: 700;
    border-radius: 28px;
    border: 1px solid #ff7a00;
    padding: 0.7rem 1.4rem;
    background: linear-gradient(45deg, #ffa500, #ff4500);
    transition: transform 0.25s ease;
  }

  .social-feed__cta:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 1200px) {
    .social-feed__grid {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  @media (max-width: 768px) {
    .social-feed {
      padding: 3rem 1rem;
    }

    .social-feed__grid {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
  }

  @media (max-width: 560px) {
    .social-feed__grid {
      grid-template-columns: 1fr;
    }
  }
</style>

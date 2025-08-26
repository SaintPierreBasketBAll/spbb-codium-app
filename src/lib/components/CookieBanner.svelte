<script>
  let visible = $state(true);

  $effect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (consent) {
      visible = false;
    }
  });

  function setConsent(value) {
    localStorage.setItem('cookieConsent', value ? 'accepted' : 'refused');
    visible = false;
  }
</script>

{#if visible}
  <div class="cookie-banner">
    <div class="cookie-banner__text">
      Ce site utilise des cookies pour vous garantir la meilleure expérience. 
      <br>
      <a href="/politique-de-cookies" target="_blank">Personnaliser les préférences</a>
    </div>
    <div class="cookie-banner__buttons">
      <button class="cookie-banner__button" onclick={() => setConsent(true)}>Accepter tous les cookies</button>
      <button class="cookie-banner__button" onclick={() => setConsent(false)}>Refuser tous les cookies</button>
    </div>
  </div>
{/if}

<style>
  .cookie-banner {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    background-color: #222;
    color: #fff;
    padding: 1.5rem;
    border-top: 1px solid #444;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 1000;
    gap: 1rem;
  }

  .cookie-banner__text {
    text-align: center;
    font-size: 1rem;
  }

  .cookie-banner__text a {
    color: #ffd700;
    text-decoration: underline;
  }

  .cookie-banner__buttons {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.5rem;
  }

  .cookie-banner__button {
    background-color: transparent;
    border: 2px solid orange;
    color: orange;
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-weight: bold;
    cursor: pointer;
    transition: 0.3s ease;
  }

  .cookie-banner__button:hover {
    background-color: orange;
    color: #111;
  }

  @media screen and (max-width: 600px) {
    .cookie-banner__text {
      font-size: 0.9rem;
    }

    .cookie-banner__button {
      flex: 1 1 100%;
    }
  }
</style>
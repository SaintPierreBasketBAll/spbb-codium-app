<script>
import { onMount } from 'svelte';
import { externalConsent, consentKey, consentDuration } from '$lib/consent';
let visible = $state(false);
let customize = $state(false);
let external = $state(false);
onMount(() => {
  try {
    const saved = JSON.parse(localStorage.getItem(consentKey) || 'null');
    if (saved && saved.expires > Date.now() && typeof saved.external === 'boolean') {
      external = saved.external; externalConsent.set(external);
    } else visible = true;
  } catch { visible = true; }
  const reopen = () => { visible = true; customize = true; };
  window.addEventListener('spbb:consent-settings', reopen);
  return () => window.removeEventListener('spbb:consent-settings', reopen);
});
function save(value) {
 external = value; externalConsent.set(value);
 try { localStorage.setItem(consentKey, JSON.stringify({ external: value, expires: Date.now() + consentDuration })); } catch { /* Choix actif pour cette visite. */ }
 visible = false;
}
</script>
{#if visible}
<section class="cookie-banner" aria-label="Préférences de confidentialité">
<p>Les cartes et médias externes (Google Maps, Facebook, Instagram, Canva) peuvent utiliser des traceurs. Ils restent bloqués avant votre autorisation. <a href="/politiquedecookies">Politique de cookies</a></p>
{#if customize}
<p>La mémorisation de votre choix permet de gérer vos préférences.</p>
<label><input type="checkbox" bind:checked={external} /> Autoriser les cartes et médias externes</label>
<button type="button" onclick={() => save(external)}>Enregistrer mes choix</button>
{/if}
<div class="buttons">
<button type="button" onclick={() => save(true)}>Tout accepter</button>
<button type="button" onclick={() => save(false)}>Tout refuser</button>
<button type="button" onclick={() => customize = !customize}>Personnaliser</button>
</div></section>
{/if}
<style>
.cookie-banner { position: fixed; bottom: 0; left: 0; width: 100%; box-sizing: border-box; max-height: 65vh; overflow: auto; background: #222; color: #fff; padding: 1rem; border-top: 2px solid #ffa500; z-index: 1000; text-align: center; }
p { margin: .5rem auto; max-width: 65rem; } a { color: #ffb347; text-decoration: underline; }
.buttons { display: flex; flex-wrap: wrap; justify-content: center; gap: .5rem; margin-top: .75rem; }
button { background: #222; border: 2px solid #ffb347; color: #ffb347; padding: .65rem 1rem; border-radius: 8px; cursor: pointer; font-weight: bold; }
button:hover, button:focus-visible { background: #ffb347; color: #111; }
</style>
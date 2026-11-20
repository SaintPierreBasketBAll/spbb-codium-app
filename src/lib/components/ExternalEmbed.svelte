<script>
import { externalConsent, openConsentSettings } from '$lib/consent';
let { src, title = 'Contenu externe', ...attributes } = $props();
</script>
{#if $externalConsent}
<iframe {src} {title} {...attributes}></iframe>
{:else}
<div class="external-placeholder"><p>{title} : ce service externe reste désactivé avant votre autorisation.</p>
<button type="button" onclick={openConsentSettings}>Choisir mes préférences</button>
<a href={src} target="_blank" rel="noopener noreferrer">Ouvrir sur le site externe</a></div>
{/if}
<style>
.external-placeholder { padding: 1.5rem; background: #222; color: #fff; border: 1px solid #ffa500; border-radius: 8px; }
button, a { display: inline-block; margin: .5rem; padding: .6rem; color: #ffb347; }
button { background: #111; border: 1px solid #ffb347; border-radius: 6px; cursor: pointer; }
</style>
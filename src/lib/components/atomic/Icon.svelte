<script>
    // Composant d'icône réutilisable.
    // La prop 'name' permet de choisir l'icône à afficher parmi les options définies.
    export let name = "";
  </script>
  
  {#if name === "basketball"}
    <svg class="icon icon--basketball" viewBox="0 0 24 24">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
    </svg>
  {:else if name === "competition"}
    <svg class="icon icon--competition" viewBox="0 0 24 24">
      <path d="M12 2L1 21h22L12 2z"/>
    </svg>
  {:else if name === "event"}
    <svg class="icon icon--event" viewBox="0 0 24 24">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zM5 19V8h14v11H5z"/>
    </svg>
  {:else if name === "training"}
    <svg class="icon icon--training" viewBox="0 0 24 24">
      <path d="M20 6h-3V4c0-1.1-.9-2-2-2H9C7.9 2 7 2.9 7 4v2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zM9 4h6v2H9V4z"/>
    </svg>
  {:else}
    <!-- Option par défaut ou vide -->
  {/if}
  
  <style>
    .icon {
      width: 24px;
      height: 24px;
      fill: var(--icon-color, var(--orange-light, #ff4500));
    }
  </style>
<script>
    // Composant de section vierge qui sert de conteneur.
    // On peut personnaliser le padding et la couleur via des props
    export let padding = "4rem 2rem";
    export let backgroundColor = "var(--section-bg, #000)";
  </script>
  
  <section class="section" style="padding: {padding}; background-color: {backgroundColor};">
    <slot />
  </section>
  
  <style>
    .section {
      width: 100%;
      box-sizing: border-box;
    }
  </style>
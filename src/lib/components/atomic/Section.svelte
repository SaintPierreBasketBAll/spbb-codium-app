<script>
    // Propriété optionnelle pour le titre de la section
    export let title = "";
  </script>
  
  <section class="section">
    {#if title}
      <h2 class="section__title">{title}</h2>
    {/if}
    <div class="section__content">
      <slot />
    </div>
  </section>
  
  <style>
    .section {
      padding: 6rem 2rem;
      position: relative;
      background-color: #1a1a1a;
    }
    .section__title {
      text-align: center;
      font-size: 2.5rem;
      margin-bottom: 3rem;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .section__content {
      max-width: 1200px;
      margin: 0 auto;
      color: var(--grey);
      line-height: 1.6;
    }
  </style>
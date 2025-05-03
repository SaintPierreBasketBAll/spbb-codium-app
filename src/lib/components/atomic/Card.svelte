<script>
    // Composant générique pour afficher un bloc de contenu avec une bordure, un fond et un espace intérieur.
    // Le contenu est passé via le slot
  </script>
  
  <div class="card">
    <slot />
  </div>
  
  <style>
    .card {
      background-color: var(--card-bg, #1a1a1a);
      border: 1px solid var(--card-border, #333);
      border-radius: 8px;
      padding: 1.5rem;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      margin: 1rem;
    }
  </style>
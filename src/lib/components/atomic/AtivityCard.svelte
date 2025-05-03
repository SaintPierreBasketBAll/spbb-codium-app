<script>
    // Propriétés pour le titre et la description de la carte
    export let title = "";
    export let description = "";
  </script>
  
  <div class="activity-card">
    <div class="activity-card__icon">
      <slot name="icon" />
    </div>
    <h3 class="activity-card__title">{title}</h3>
    <p class="activity-card__description">{description}</p>
  </div>
  
  <style>
    .activity-card {
      background: linear-gradient(45deg, #1a1a1a, #2a2a2a);
      border-radius: 15px;
      padding: 2rem;
      transition: transform 0.3s ease;
      position: relative;
      overflow: hidden;
    }
    .activity-card:hover {
      transform: translateY(-10px);
    }
    .activity-card::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, var(--orange-light), var(--orange-dark));
    }
    .activity-card__title {
      color: var(--orange-light);
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
    .activity-card__description {
      color: var(--grey);
      line-height: 1.6;
    }
    .activity-card__icon {
      width: 50px;
      height: 50px;
      margin-bottom: 1rem;
    }
  </style>
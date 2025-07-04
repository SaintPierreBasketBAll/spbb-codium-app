<script>
    // Propriétés avec valeurs par défaut
    export let type = "button";
    export let disabled = false;
    export let onClick = () => {};
  </script>
  
  <button
    type={type}
    disabled={disabled}
    onclick={onClick}
    class="button"
  >
    <slot />
  </button>
  
  <style>
    .button {
      padding: 1.5rem 4rem;
      margin-top: 5rem;
      margin-bottom: -3rem;
      font-size: 1.5rem;
      background: linear-gradient(45deg, var(--orange-light), var(--orange-dark));
      border: none;
      border-radius: 50px;
      color: var(--white);
      cursor: pointer;
      transition: transform 0.3s ease;
      
    }
    .button:hover {
      transform: translateY(-3px);
    }
  </style>
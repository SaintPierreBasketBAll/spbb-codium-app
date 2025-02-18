<section class="construction">
    <h2 class="section-title">En cours de construction</h2>
    <div class="construction-content">
      <div class="construction-icon">
        <svg viewBox="0 0 24 24" width="120" height="120">
          <path fill="var(--orange-light)" d="M12,1L3,5v6c0,5.55,3.84,10.74,9,12c5.16-1.26,9-6.45,9-12V5L12,1z M11,7h2v2h-2V7z M11,11h2v6h-2V11z"/>
        </svg>
      </div>
      <p class="construction-message">Cette section est actuellement en cours de développement.</p>
      <p class="construction-submessage">Nous travaillons activement pour vous offrir de nouveaux contenus. Revenez bientôt !</p>
      <div class="construction-animation">
        <div class="gear"></div>
        <div class="gear"></div>
        <div class="gear"></div>
      </div>
    </div>
  </section>
  
    <style>
        .construction {
  padding: 6rem 2rem;
  background-color: #1a1a1a;
  position: relative;
}
.section-title {
  font-size: 2rem;
  color: var(--orange-light);
  text-align: center;
  margin-bottom: 3rem;
  margin-top: 3rem;
}

.construction-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.construction-icon {
  margin-bottom: 2rem;
}

.construction-message {
  font-size: 1.5rem;
  color: var(--white);
  margin-bottom: 1rem;
}

.construction-submessage {
  font-size: 1rem;
  color: var(--grey);
  margin-bottom: 2rem;
}

.construction-animation {
  display: flex;
  gap: 2rem;
}

.gear {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 10px solid var(--orange-light);
  border-top: 10px solid transparent;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
    </style>
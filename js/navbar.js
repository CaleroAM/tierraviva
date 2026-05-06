/* ============================================================
   navbar.js — Barra de navegación
   - Barra de progreso de lectura (Heurística #1)
   - Resaltar sección activa (Heurística #1)
   ============================================================ */

/**
 * Heurística #1 — Visibilidad del estado del sistema
 * La barra roja en la parte superior le indica al usuario
 * cuánto ha leído de la página en todo momento.
 */
function initProgressBar() {
  const bar = document.getElementById('statusBar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const total = document.body.scrollHeight - window.innerHeight;
    const progress = total > 0 ? window.scrollY / total : 0;
    bar.style.transform = `scaleX(${progress})`;
  });
}

/**
 * Heurística #1 — Visibilidad del estado del sistema
 * El link del menú correspondiente a la sección visible
 * se resalta para que el usuario sepa dónde se encuentra.
 */
function initActiveNavLinks() {
  const sections = document.querySelectorAll('section[id], header[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(
            `.nav-links a[href="#${entry.target.id}"]`
          );
          if (active) active.classList.add('active');
        }
      });
    },
    { threshold: 0.4 }
  );

  sections.forEach(s => observer.observe(s));
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  initProgressBar();
  initActiveNavLinks();
});

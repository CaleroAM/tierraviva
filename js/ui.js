/* ============================================================
   ui.js — Componentes de interfaz reutilizables
   - Toast / notificación (Heurística #1)
   - Modal de destino   (Heurística #3)
   - Ayuda              (Heurística #10)
   ============================================================ */

/* ── Toast ───────────────────────────────────────────────── */

/**
 * Heurística #1 — Visibilidad del estado del sistema
 * El toast confirma al usuario que su acción fue registrada
 * (búsqueda, filtro, envío de formulario, etc.)
 */
let toastTimer;

export function showToast(message, icon = '✓') {
  const toast     = document.getElementById('toast');
  const msgEl     = document.getElementById('toastMsg');
  const iconEl    = document.getElementById('toastIcon');

  if (!toast || !msgEl || !iconEl) return;

  msgEl.textContent  = message;
  iconEl.textContent = icon;
  toast.classList.add('show');

  clearTimeout(toastTimer);
  toastTimer = setTimeout(closeToast, 4500);
}

export function closeToast() {
  const toast = document.getElementById('toast');
  if (toast) toast.classList.remove('show');
}

// Exponer al HTML (onclick="closeToast()")
window.closeToast = closeToast;


/* ── Modal de destino ────────────────────────────────────── */

/**
 * Datos de cada destino para el modal.
 * Agregar o editar destinos aquí — no tocar el HTML.
 */
const destinosData = {
  oaxaca: {
    titulo: 'Oaxaca',
    descripcion: 'Conoce sus zonas arqueológicas, mercados de colores, gastronomía única y la vida cultural que gira en torno al mezcal y las artesanías zapotecas.',
  },
  yucatan: {
    titulo: 'Yucatán',
    descripcion: 'Nada en cenotes sagrados, visita Chichén Itzá y descubre Mérida, la "Ciudad Blanca", con su rica mezcla maya y colonial.',
  },
  cdmx: {
    titulo: 'Ciudad de México',
    descripcion: 'Uno de los centros culturales más importantes del mundo: museos, arte urbano, gastronomía de vanguardia y una historia de más de 700 años.',
  },
  guerrero: {
    titulo: 'Guerrero',
    descripcion: 'Playas poco exploradas en Zihuatanejo, el surf de Puerto Escondido y la biodiversidad de la Costa Grande esperan por ti.',
  },
  chiapas: {
    titulo: 'Chiapas',
    descripcion: 'Cascadas de Agua Azul, las ruinas de Palenque entre la selva y el encanto colonial de San Cristóbal de las Casas.',
  },
};

/**
 * Heurística #3 — Control y libertad del usuario
 * El modal tiene: botón ✕ visible, clic fuera para cerrar,
 * y tecla ESC — tres formas distintas de salir.
 */
export function openModal(key) {
  const data = destinosData[key];
  if (!data) return;

  document.getElementById('modalTitle').textContent = data.titulo;
  document.getElementById('modalBody').innerHTML = `
    <p>${data.descripcion}</p>
    <div style="margin-top:1.5rem">
      <a href="#planifica" class="btn-primary"
         onclick="closeModalDirect()"
         style="display:inline-flex">
        Planifica este viaje →
      </a>
    </div>
  `;

  const overlay = document.getElementById('modalOverlay');
  overlay.classList.add('open');
  overlay.focus();
}

export function closeModalDirect() {
  document.getElementById('modalOverlay')?.classList.remove('open');
}

// Exponer al HTML
window.openModal       = openModal;
window.closeModalDirect = closeModalDirect;

function initModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;

  // Clic fuera del modal lo cierra
  overlay.addEventListener('click', e => {
    if (e.target === overlay) closeModalDirect();
  });

  // ESC lo cierra (Heurística #3 — salida de emergencia)
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModalDirect();
  });

  // Enter / Espacio activan las tarjetas de destino
  document.querySelectorAll('.dest-card[tabindex]').forEach(card => {
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') card.click();
    });
  });
}


/* ── Ayuda (Heurística #10) ──────────────────────────────── */

/**
 * Heurística #10 — Ayuda y documentación
 * El centro de ayuda es fácil de encontrar en cualquier
 * momento desde la barra de navegación fija.
 */
export function openHelp() {
  showToast('Centro de ayuda: escríbenos a ayuda@tierraviva.mx', 'ℹ️');
}

window.openHelp = openHelp;


/* ── Búsqueda rápida ─────────────────────────────────────── */

export function handleSearch() {
  const destino = document.getElementById('sf-destino')?.value ?? 'cualquier destino';
  const tipo    = document.getElementById('sf-tipo')?.value    ?? 'todas las experiencias';
  showToast(`Buscando: ${destino} · ${tipo}`, '🔍');
  setTimeout(() => {
    document.getElementById('destinos')?.scrollIntoView({ behavior: 'smooth' });
  }, 600);
}

window.handleSearch = handleSearch;


// Init
document.addEventListener('DOMContentLoaded', initModal);

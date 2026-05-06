/* ============================================================
   destinos.js — Filtros de destinos
   ============================================================ */

import { showToast } from './ui.js';

/**
 * Heurística #6 — Reconocer antes que recordar
 * El usuario filtra haciendo clic en chips visibles;
 * no necesita recordar ni escribir las categorías.
 *
 * Heurística #1 — Visibilidad del estado del sistema
 * El chip activo cambia de color y un toast confirma
 * qué filtro está aplicado en ese momento.
 *
 * @param {HTMLElement} btn  - El chip que se clickeó
 * @param {string}      cat  - Categoría a filtrar ('todos' | 'naturaleza' | 'cultura' | 'playa')
 */
export function filterDest(btn, cat) {
  // Desactivar todos los chips
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.classList.remove('active');
    chip.setAttribute('aria-pressed', 'false');
  });

  // Activar el chip seleccionado
  btn.classList.add('active');
  btn.setAttribute('aria-pressed', 'true');

  // Mostrar / ocultar tarjetas según la categoría
  document.querySelectorAll('.dest-card').forEach(card => {
    const cats = card.dataset.cat ?? '';
    const visible = cat === 'todos' || cats.includes(cat);
    card.style.display = visible ? '' : 'none';
  });

  // Confirmar al usuario qué está viendo (Heurística #1)
  showToast(`Mostrando: ${btn.textContent}`, '🔍');
}

// Exponer al HTML (onclick="filterDest(this,'todos')")
window.filterDest = filterDest;

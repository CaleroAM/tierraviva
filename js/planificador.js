/* ============================================================
   planificador.js — Formulario de planificación en 3 pasos
   Heurísticas aplicadas: #1, #3, #5, #7, #9
   ============================================================ */

import { showToast } from './ui.js';

let currentStep = 1;
const TOTAL_STEPS = 3;

/* ── Navegación entre pasos ──────────────────────────────── */

/**
 * Heurística #1 — Visibilidad del estado del sistema
 * Muestra el panel del paso indicado y actualiza el
 * indicador visual de progreso (tabs superiores).
 */
export function goStep(n) {
  // Ocultar panel actual
  document.getElementById(`panel${currentStep}`).style.display = 'none';
  document.getElementById(`step${currentStep}`).classList.remove('active');

  currentStep = n;

  // Mostrar panel nuevo
  document.getElementById(`panel${currentStep}`).style.display = '';
  document.getElementById(`step${currentStep}`).classList.add('active');

  // Marcar pasos anteriores como completados
  for (let i = 1; i < n; i++) {
    document.getElementById(`step${i}`)?.classList.add('done');
  }
}

// Exponer al HTML
window.goStep = goStep;


/* ── Validación del paso 1 ───────────────────────────────── */

/**
 * Heurística #5 — Prevención de errores
 * Valida los campos antes de permitir avanzar.
 *
 * Heurística #9 — Reconocer y recuperarse de errores
 * Muestra mensajes descriptivos junto al campo problemático
 * (no en un alert global) para que el usuario sepa exactamente
 * qué corregir y cómo.
 */
export function validateStep1() {
  const nombre  = document.getElementById('p-nombre').value.trim();
  const email   = document.getElementById('p-email').value.trim();
  const destino = document.getElementById('p-destino').value;

  const errNombre  = document.getElementById('err-nombre');
  const errEmail   = document.getElementById('err-email');
  const errDestino = document.getElementById('err-destino');

  let isValid = true;

  // Validar nombre
  const nombreValido = nombre.length > 0;
  errNombre.classList.toggle('show', !nombreValido);
  if (!nombreValido) {
    isValid = false;
    document.getElementById('p-nombre').focus();
  }

  // Validar email (formato básico)
  const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  errEmail.classList.toggle('show', !emailValido);
  if (!emailValido && isValid) {
    isValid = false;
    document.getElementById('p-email').focus();
  }

  // Validar destino
  const destinoValido = destino !== '';
  errDestino.classList.toggle('show', !destinoValido);
  if (!destinoValido && isValid) {
    isValid = false;
    document.getElementById('p-destino').focus();
  }

  // Si todo válido, avanzar
  if (isValid) {
    showToast('Paso 1 completado ✓', '✅');
    goStep(2);
  }
}

window.validateStep1 = validateStep1;


/* ── Envío final ─────────────────────────────────────────── */

/**
 * Construye el resumen del paso 3 con los datos
 * ingresados y simula el envío.
 */
export function submitForm() {
  const nombre  = document.getElementById('p-nombre')?.value   || '(sin nombre)';
  const destino = document.getElementById('p-destino')?.value  || '(sin destino)';
  const llegada = document.getElementById('p-llegada')?.value  || '—';
  const salida  = document.getElementById('p-salida')?.value   || '—';

  const resumenEl = document.getElementById('resumen');
  if (resumenEl) {
    resumenEl.innerHTML = `
      <strong>Nombre:</strong> ${nombre}<br>
      <strong>Destino:</strong> ${destino}<br>
      <strong>Llegada:</strong> ${llegada}
      &nbsp;&nbsp;
      <strong>Salida:</strong> ${salida}
    `;
  }

  // Mostrar paso 3 si no estamos ya ahí
  if (currentStep !== 3) {
    goStep(3);
    return;
  }

  // Confirmar envío (Heurística #1: feedback inmediato)
  showToast('¡Solicitud enviada! Te contactaremos pronto.', '🎉');
  setTimeout(resetForm, 2000);
}

window.submitForm = submitForm;


/* ── Resetear formulario ─────────────────────────────────── */

/**
 * Heurística #3 — Control y libertad del usuario
 * Permite al usuario cancelar y empezar de cero en
 * cualquier momento sin consecuencias.
 */
export function resetForm() {
  // Limpiar campos
  document.querySelectorAll(
    '#panel1 input, #panel1 select, #panel1 textarea, #panel2 input'
  ).forEach(el => { el.value = ''; });

  // Ocultar errores
  document.querySelectorAll('.form-error').forEach(el => {
    el.classList.remove('show');
  });

  // Resetear indicador de pasos
  document.getElementById('step2')?.classList.remove('done', 'active');
  document.getElementById('step3')?.classList.remove('done', 'active');

  currentStep = 1;
  goStep(1);
  document.getElementById('step1')?.classList.remove('done');
}

window.resetForm = resetForm;

# Análisis de Heurísticas de Nielsen – TierraViva
**Proyecto:** Página web de promoción del turismo en México  
**URL del archivo:** `mexico-turismo.html`  
**Alumno:** ___________________  
**Fecha:** ___________________

---

## ¿Qué son las Heurísticas de Nielsen?

Las **10 Heurísticas de Usabilidad de Jakob Nielsen** son principios generales de diseño de interacción que guían la creación de interfaces intuitivas, eficientes y libres de errores. A continuación se analizan **3 pantallas/secciones** de la página desarrollada.

---

## Pantalla 1 — Barra de Navegación + Hero

**Descripción:** Sección superior de la página. Incluye la barra de navegación fija, la barra de progreso de lectura y el encabezado principal (Hero).

### Captura de pantalla

> 📸 **Imagen sugerida:** Toma una captura de la parte superior de la página, mostrando el navbar y el encabezado principal.

```
┌─────────────────────────────────────────────────────────────┐
│ ▓▓▓ [BARRA DE PROGRESO — roja, fija en la parte superior] ▓▓▓│
│  TierraViva  | Destinos | Experiencias | Planifica | Galería │
│──────────────────────────────────────────────────────────────│
│                                                              │
│   Turismo en México                                          │
│   Descubre la                                                │
│   *tierra más viva*                                          │
│   del mundo                                                  │
│                                                              │
│   [Explorar destinos →]   [Planifica tu viaje]               │
└─────────────────────────────────────────────────────────────┘
```

---

### Leyes de Nielsen aplicadas en esta pantalla

---

#### 🔴 Flecha 1 → Barra de progreso de lectura (línea roja en la parte superior)

**Heurística aplicada:**  
**#1 — Visibilidad del estado del sistema**

> *"El sistema siempre debe mantener a los usuarios informados sobre lo que está pasando, mediante retroalimentación apropiada dentro de un tiempo razonable."*
> — Jakob Nielsen

**Comentario explicativo:**  
La barra roja que avanza en la parte superior de la página le comunica al usuario en todo momento cuánto ha leído de la página. Sin ella, el usuario no sabe si está a la mitad o al final del contenido. Al ver que la barra está al 30%, sabe que le queda más por explorar. Esto reduce la incertidumbre y mejora la experiencia de lectura.

**Elemento HTML responsable:**  
```html
<div class="status-bar" id="statusBar" role="progressbar" aria-label="Progreso de lectura"></div>
```

---

#### 🔴 Flecha 2 → Enlace activo resaltado en la navegación ("Destinos")

**Heurística aplicada:**  
**#1 — Visibilidad del estado del sistema**  
(también refuerza la **#4 — Consistencia y estándares**)

**Comentario explicativo:**  
Cuando el usuario se desplaza por la página, el enlace de la sección visible actualmente se resalta con color dorado (`--ocre`) y una línea inferior. Esto cumple la heurística #1 porque el sistema le informa al usuario *en qué sección se encuentra* sin que tenga que memorizar su posición. También cumple la #4 porque el mismo sistema visual se aplica de forma consistente en toda la barra de navegación.

**Elemento HTML + CSS responsable:**  
```css
.nav-links a.active { color: var(--ocre); }
.nav-links a.active::after { width: 100%; }
```

---

#### 🔴 Flecha 3 → Botón "¿Necesitas ayuda?" en el navbar

**Heurística aplicada:**  
**#10 — Ayuda y documentación**

**Comentario explicativo:**  
El botón de ayuda está siempre visible en la barra de navegación fija. Aunque un sistema bien diseñado no debería requerir documentación, es necesario proveer acceso fácil a la ayuda cuando el usuario la necesite. Su posición en la navegación principal garantiza que cualquier usuario —sin importar en qué sección esté— pueda encontrarla en menos de 1 segundo.

---

---

## Pantalla 2 — Sección de Destinos (con filtros y tarjetas)

**Descripción:** Sección principal de contenido. Muestra 5 destinos turísticos en una cuadrícula, con filtros de categoría y badges informativos en cada tarjeta.

### Captura de pantalla

> 📸 **Imagen sugerida:** Toma una captura de la sección "Destinos destacados", mostrando la cuadrícula completa de tarjetas y los filtros de categoría en la parte superior derecha.

```
┌─────────────────────────────────────────────────────────────┐
│  Explora México                                              │
│  Destinos destacados         [Todos] [Naturaleza] [Cultura]  │
│                                              [Playa]         │
│                                                              │
│  ┌──────────────────┐  ┌──────────┐  ┌──────────┐           │
│  │                  │  │⭐Top dest│  │🏛Cultura  │           │
│  │  Oaxaca (grande) │  │ Yucatán  │  │ CDMX     │           │
│  │                  │  └──────────┘  └──────────┘           │
│  │                  │  ┌──────────┐  ┌──────────┐           │
│  │ ⭐ Top destino   │  │🏖Playa   │  │🌿Natural │           │
│  │                  │  │ Guerrero │  │ Chiapas  │           │
│  └──────────────────┘  └──────────┘  └──────────┘           │
└─────────────────────────────────────────────────────────────┘
```

---

### Leyes de Nielsen aplicadas en esta pantalla

---

#### 🔴 Flecha 1 → Chips de filtro ("Todos", "Naturaleza", "Cultura", "Playa")

**Heurística aplicada:**  
**#6 — Reconocer antes que recordar**

> *"Minimiza la carga de memoria del usuario haciendo visibles objetos, acciones y opciones. El usuario no debería tener que recordar información de una parte de la interfaz a otra."*
> — Jakob Nielsen

**Comentario explicativo:**  
En lugar de que el usuario tenga que recordar qué tipos de destinos existen o escribirlos en un campo de búsqueda, los filtros están expuestos como botones visibles. El usuario simplemente *reconoce* la opción que le interesa y la selecciona. Si el filtro activo se destaca en rojo-tierra, el usuario también sabe en todo momento cuál está aplicado (complementando la Heurística #1).

**Elemento HTML responsable:**  
```html
<div class="dest-filters" role="group" aria-label="Filtrar destinos">
  <button class="filter-chip active">Todos</button>
  <button class="filter-chip">Naturaleza</button>
  ...
</div>
```

---

#### 🔴 Flecha 2 → Badges en las tarjetas ("⭐ Top destino", "🌿 Naturaleza", etc.)

**Heurística aplicada:**  
**#4 — Consistencia y estándares**

**Comentario explicativo:**  
Todos los badges siguen el mismo patrón visual: fondo ámbar (`--ocre`), texto oscuro, tamaño pequeño, posicionados en la esquina superior derecha de cada tarjeta. Esta uniformidad hace que el usuario, al leer la primera tarjeta, entienda inmediatamente el sistema que se repite en todas las demás. Si cada badge tuviera un diseño diferente, el usuario gastaría energía cognitiva en interpretar cada uno. La consistencia reduce ese esfuerzo.

**CSS responsable:**  
```css
.dest-badge {
  position: absolute;
  top: 1rem; right: 1rem;
  background: var(--ocre);
  color: var(--noche);
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  padding: 0.3rem 0.7rem;
  border-radius: 2px;
}
```

---

#### 🔴 Flecha 3 → Efecto hover en las tarjetas (elevación + tooltip)

**Heurística aplicada:**  
**#1 — Visibilidad del estado del sistema**  
(también refuerza la **#6 — Reconocer antes que recordar**)

**Comentario explicativo:**  
Cuando el usuario pasa el cursor sobre una tarjeta, esta se eleva ligeramente (`translateY(-4px)`) y aparece una sombra. Esto le comunica visualmente que el elemento *es clickeable* y que su acción está siendo registrada por el sistema. Sin esta retroalimentación visual, el usuario podría no saber si la tarjeta responde a clics o no.

---

---

## Pantalla 3 — Planificador de Viaje (formulario de 3 pasos)

**Descripción:** Formulario interactivo dividido en 3 pasos: (1) Destino, (2) Fechas, (3) Confirmación. Incluye validación de errores en tiempo real, indicador de progreso y botón de cancelar.

### Captura de pantalla

> 📸 **Imagen sugerida:** Toma una captura de la sección "Planifica tu itinerario", mostrando los tabs de pasos en la parte superior y el formulario con sus campos, hints y botones.

```
┌─────────────────────────────────────────────────────────────┐
│  Tu próximo viaje                                            │
│  Planifica tu itinerario                                     │
│                                                              │
│  [✓ 1. Destino] ──── [2. Fechas] ──── [3. Confirmar]        │
│  ────────────────────────────────────────────────────        │
│                                                              │
│  Nombre completo          Correo electrónico                 │
│  [_________________]      [_______________________]          │
│                           ⓘ Recibirás tu itinerario aquí     │
│                                                              │
│  Destino                  Número de viajeros                 │
│  [— Elige destino —▾]     [1        ]                        │
│                           ⓘ Entre 1 y 20 personas            │
│                                                              │
│  ⚠ Por favor elige al menos un destino para continuar.       │
│                                                              │
│  ← Cancelar                        [Siguiente paso →]        │
└─────────────────────────────────────────────────────────────┘
```

---

### Leyes de Nielsen aplicadas en esta pantalla

---

#### 🔴 Flecha 1 → Indicador de pasos "1. Destino → 2. Fechas → 3. Confirmar"

**Heurística aplicada:**  
**#1 — Visibilidad del estado del sistema**

**Comentario explicativo:**  
El usuario ve en todo momento en qué paso del formulario se encuentra. El paso completado muestra un ✓, el paso activo se resalta en rojo-tierra, y los pasos pendientes están en gris. Esto elimina la frustración de no saber cuánto falta para terminar. Es especialmente importante en formularios de múltiples pasos, donde el usuario puede sentirse perdido si no hay una guía visual clara.

**HTML responsable:**  
```html
<div class="plan-steps" role="tablist">
  <div class="plan-step active done">1. Destino</div>
  <div class="plan-step">2. Fechas</div>
  <div class="plan-step">3. Confirmar</div>
</div>
```

---

#### 🔴 Flecha 2 → Textos de ayuda bajo los campos ("Recibirás tu itinerario en este correo", "Entre 1 y 20 personas")

**Heurística aplicada:**  
**#5 — Prevención de errores**

> *"Mejor que buenos mensajes de error es un diseño cuidadoso que prevenga que ocurran problemas en primer lugar."*
> — Jakob Nielsen

**Comentario explicativo:**  
Antes de que el usuario cometa un error, el formulario ya le indica qué se espera de cada campo. El hint "Recibirás tu itinerario en este correo" le recuerda que el correo debe ser real y funcional. El hint "Entre 1 y 20 personas" le indica el rango permitido, evitando que ingrese un número imposible. Esta información previa *previene* el error antes de que suceda, en lugar de corregirlo después.

**HTML responsable:**  
```html
<span class="form-hint" id="hint-viajeros">Entre 1 y 20 personas.</span>
```

---

#### 🔴 Flecha 3 → Mensaje de error "⚠ Por favor elige al menos un destino para continuar"

**Heurística aplicada:**  
**#9 — Ayuda a los usuarios a reconocer, diagnosticar y recuperarse de los errores**

> *"Los mensajes de error deben estar en lenguaje llano (sin códigos), indicar con precisión el problema y sugerir constructivamente una solución."*
> — Jakob Nielsen

**Comentario explicativo:**  
Cuando el usuario intenta avanzar sin llenar un campo obligatorio, aparece un mensaje de error específico, en lenguaje natural, que le dice exactamente qué campo está mal y qué debe hacer. Nótese que:
- ✅ Usa un ícono visual (⚠) para llamar la atención
- ✅ Está en español sencillo, no en jerga técnica
- ✅ Aparece junto al campo problemático, no en otro lugar de la pantalla
- ✅ Desaparece tan pronto como el usuario corrige el error

**CSS + HTML responsable:**  
```html
<span class="form-error" id="err-destino" role="alert">
  ⚠ Elige al menos un destino para continuar.
</span>
```
```css
.form-error { display: none; color: #c0392b; font-size: 0.75rem; }
.form-error.show { display: flex; }
```

---

#### 🔴 Flecha 4 → Botón "← Cancelar"

**Heurística aplicada:**  
**#3 — Control y libertad del usuario**

> *"Los usuarios a menudo eligen funciones del sistema por error y necesitan una salida de emergencia claramente marcada para abandonar el estado no deseado sin pasar por un diálogo extendido."*
> — Jakob Nielsen

**Comentario explicativo:**  
El botón "← Cancelar" le permite al usuario salir del flujo del formulario en cualquier momento, limpiando todos los campos y regresando al paso 1. Sin este botón, el usuario se sentiría "atrapado" en el formulario. La flecha hacia la izquierda usa un lenguaje visual familiar que refuerza la idea de "volver atrás" (Heurística #2 también aplicada aquí).

---

---

## Resumen de Heurísticas Aplicadas

| # | Heurística | ¿Dónde aparece? |
|---|------------|-----------------|
| 1 | Visibilidad del estado del sistema | Barra de progreso, nav activo, indicador de pasos |
| 2 | Relación sistema-mundo real | Iconos emoji, lenguaje natural en errores y hints |
| 3 | Control y libertad del usuario | Botón Cancelar, tecla ESC para cerrar modal |
| 4 | Consistencia y estándares | Badges uniformes, botones con mismo estilo |
| 5 | Prevención de errores | Hints en campos del formulario, input con `min/max` |
| 6 | Reconocer antes que recordar | Filtros de categoría visibles, buscador con opciones |
| 7 | Flexibilidad y eficiencia | Buscador rápido en hero, botón principal destacado |
| 8 | Diseño estético y minimalista | Layout limpio, sin información redundante |
| 9 | Recuperarse de errores | Mensajes de error claros y descriptivos junto al campo |
| 10 | Ayuda y documentación | Botón "¿Necesitas ayuda?" siempre visible en el nav |

---

*Análisis elaborado como parte del curso de Diseño de Interfaces.*  
*Entrega parcial: 3 de 10 capturas.*

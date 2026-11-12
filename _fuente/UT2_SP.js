// ===== UT2_SP · Semipresencial: los 4 ejercicios de la UT2 en uno (EI SP, IS SP y MC SP) =====
// Bloque 1 = UT2_E1 (parejas + tecnologías en tu profesión) · Bloque 2 = UT2_E2 (robot, individual y sin Canva)
// Bloque 3 = UT2_E3 (app de realidad virtual o mixta, sin la parte de las gafas) · Bloque 4 = el plano (antes la página UT2_E4)
// Cada ejercicio original se incluye entero dentro de su propia función (E1, E2, E3, E4), así sus nombres no chocan entre sí;
// construir.js cambia cada marca «INCLUYE» (comentario con el nombre del archivo) por el contenido de ese _fuente/*.js.
// Si cambias un original, este se actualiza solo al construir.
// El plano (_fuente/UT2_SP_plano.js) se genera desde la página del plano con el script hacer_plano.js (ver INDICE.md).

const COMUN = {
  codigo: 'UT2_SP',
  corto: 'UT2 · Semipresencial',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT2 · Tecnologías habilitadoras digitales',
  ejercicio: 'Tecnologías habilitadoras digitales',
  ra: 'RA2',
  ce: 'a, b, c, d, e, g',
  modalidad: 'Individual · semipresencial',
  raTexto: 'Caracteriza las tecnologías habilitadoras digitales necesarias para la adecuación/transformación de las empresas a entornos digitales describiendo sus características y aplicaciones.',
  ceTextos: [
    ['a', 'Se han identificado las principales tecnologías habilitadoras digitales.'],
    ['b', 'Se han relacionado las THD con el desarrollo de productos y servicios.'],
    ['c', 'Se ha relacionado la importancia de las THD con la economía sostenible y eficiente.'],
    ['d', 'Se han identificado nuevos mercados generados por las THD.'],
    ['e', 'Se ha analizado la implicación de THD tanto en la parte de negocio como en la parte de planta.'],
    ['g', 'Se ha elaborado un informe que relacione las tecnologías con sus características y áreas de aplicación.']
  ],
  objetivo: 'Conocer las tecnologías habilitadoras digitales y aplicarlas a tu profesión: las identificarás en un juego, diseñarás un robot y una app de realidad virtual o mixta para tu sector y decidirás qué tecnologías instalarías en tu centro de trabajo. Es individual.',
  pasos: [
    'Este ejercicio reúne los 4 ejercicios de la UT2 en <b>4 bloques</b>. Hazlos en orden: cada bloque tiene sus propias instrucciones.',
    '<b>Bloque 1:</b> casa las 50 tecnologías con su definición en el juego de parejas y explica 5 de ellas en tu profesión.',
    '<b>Bloque 2:</b> monta tu robot pieza a pieza, justifícalo y crea con IA una imagen de tu robot trabajando.',
    '<b>Bloque 3:</b> clasifica las situaciones, diseña tu app de realidad virtual o mixta, su ficha en la tienda y sus ventajas, riesgos y mercado.',
    '<b>Bloque 4:</b> coloca 10 tecnologías en el plano de tu centro, justifica cada una y escribe la reflexión final.',
    'Cita tus fuentes, revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Es individual: todo lo que hagas y escribas tiene que ser tuyo.',
    'Escribe con tus palabras (pegar texto está desactivado) y piensa en tu profesión: no copies definiciones ni textos de internet o de una IA.',
    'Si usas inteligencia artificial (por ejemplo, para la imagen del robot), di qué herramienta y qué descripción usaste.'
  ],
  // Reparto provisional: 2,5 por bloque (pendiente de recortar y ajustar)
  criterios: [
    ['Bloque 1 · Parejas de tecnologías y su uso en tu profesión', 'Las 50 tecnologías casadas con su definición y 5 tecnologías explicadas con un ejemplo concreto de tu profesión.', 2.5],
    ['Bloque 2 · Diseña tu robot', 'Robot completo con tecnologías que encajan con el reto de tu sector, justificación del montaje e imagen hecha con IA.', 2.5],
    ['Bloque 3 · Diseña tu app de realidad virtual o mixta', 'Situaciones bien clasificadas, app coherente con el reto, ficha de la tienda y ventajas, riesgos y mercado.', 2.5],
    ['Bloque 4 · Tecnologías habilitadoras en tu centro (plano)', '10 tecnologías bien colocadas (al menos 2 en cada espacio), fichas justificadas y reflexión final relacionada con tu ciclo.', 2.5]
  ],
  numFuentes: '5',
  fuentes: 'Cita las webs, apps o vídeos que hayas consultado o que te hayan inspirado (título, web y enlace) y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y qué parte es tuya.',
  siglas: []
};

// Solo ciclos semipresenciales (individual)
const ORDEN = ['ei_sp', 'is_sp', 'mc_sp'];
const NOMBRES_SP = { ei_sp: 'Educación Infantil Semipresencial', is_sp: 'Integración Social Semipresencial', mc_sp: 'Mediación Comunicativa Semipresencial' };
const CICLOS = {};
for (const k of ORDEN) CICLOS[k] = { nombre: NOMBRES_SP[k], semipresencial: true };

// ===== Mediación Comunicativa: contenido propio para el robot y la app (los originales no tienen MC) =====
const MC_ROBOT = {
  reto: 'Tu servicio de mediación comunicativa quiere un robot que ayude a los profesionales a atender a personas sordas, sordociegas o con dificultades de comunicación: que facilite la comunicación, la autonomía y el acceso a la información.',
  entorno: 'la sala de atención de un servicio de mediación comunicativa, con una mediadora atendiendo a una persona sorda que se comunica en lengua de signos',
  piezas: [
    { id: 'mc_avisos',     t: 'antena',  v: 'baliza',      e: '💡', n: 'Avisos luminosos',                          d: 'Avisar con luces del timbre, de una alarma o del turno a quien no puede oírlos.' },
    { id: 'mc_subtitulos', t: 'orejas',  v: 'micro',       e: '🎙️', n: 'Micrófono con subtítulos',                  d: 'Convertir en texto, en directo, lo que dicen las personas oyentes.' },
    { id: 'mc_signos',     t: 'ojos',    v: 'visor',       e: '🤟', n: 'Cámara que reconoce la lengua de signos',   d: 'Reconocer signos básicos y pasarlos a texto o a voz.' },
    { id: 'mc_video',      t: 'torso',   v: 'panel',       e: '📺', n: 'Pantalla de videointerpretación',           d: 'Conectar en vídeo con un intérprete de lengua de signos a distancia.' },
    { id: 'mc_pictos',     t: 'torso',   v: 'panel',       e: '🖼️', n: 'Tablero de pictogramas',                    d: 'Comunicarse tocando imágenes y pictogramas en la pantalla.' },
    { id: 'mc_facil',      t: 'torso',   v: 'panel',       e: '📖', n: 'Traductor a lectura fácil',                 d: 'Convertir documentos y avisos en textos de lectura fácil.' },
    { id: 'mc_braille',    t: 'brazo',   v: 'herramienta', e: '🔠', n: 'Línea braille',                             d: 'Mostrar en braille los textos para las personas sordociegas.' },
    { id: 'mc_tactil',     t: 'brazo',   v: 'mano',        e: '✋', n: 'Mano para la lengua de signos apoyada',      d: 'Signar sobre las manos de una persona sordociega para que reciba el mensaje.' },
    { id: 'mc_bucle',      t: 'brazo',   v: 'pinza',       e: '🦻', n: 'Bucle magnético',                           d: 'Enviar el sonido directamente a los audífonos y a los implantes cocleares.' },
    { id: 'mc_guia',       t: 'piernas', v: 'ruedas',      e: '🦯', n: 'Base de guía',                              d: 'Acompañar y guiar a una persona sordociega por el edificio.' }
  ]
};
const MC_APP = {
  sector: 'Comunicación y accesibilidad', centro: 'un servicio de mediación comunicativa',
  sit: [
    ['Una mediadora en formación practica cómo atender una urgencia en un hospital simulado, con un paciente sordo virtual.', 'rv'],
    ['Un joven sordo ensaya una entrevista de trabajo con un entrevistador virtual que signa, en una oficina virtual.', 'rv'],
    ['Una persona con autismo practica, en una estación de guaguas virtual, cómo pedir ayuda.', 'rv'],
    ['Un grupo visita un museo virtual con todas las explicaciones en lengua de signos, sin salir del aula.', 'rv'],
    ['Con las gafas ves la sala real y, a tu lado, un intérprete virtual de tamaño real signa lo que dice la profesora.', 'rm'],
    ['Mientras hablas con un vecino, los subtítulos de lo que dice flotan en el aire junto a él.', 'rm'],
    ['Pictogramas virtuales se quedan pegados a los objetos reales de la cocina para aprender una rutina.', 'rm'],
    ['Un avatar sentado en tu mesa real te enseña signos nuevos y puedes ver sus manos desde cualquier lado.', 'rm'],
    ['Apuntas con el móvil a un cartel de la estación y en la pantalla aparece un vídeo en lengua de signos.', 'ra'],
    ['Una app muestra en la pantalla del móvil, sobre la imagen de la cámara, el texto de lo que dice la persona que tienes delante.', 'ra'],
    ['Escaneas con la tablet el código de un folleto y aparece encima la versión en lectura fácil.', 'ra'],
    ['En la tablet, la foto de la carta de un restaurante aparece con pictogramas dibujados encima de cada plato.', 'ra']
  ],
  retos: [
    ['🤟', 'Aprender lengua de signos', 'Practicar signos con un profesor virtual que corrige la posición de las manos.'],
    ['🏥', 'Ir al médico sin barreras', 'Ensayar una consulta médica con intérprete y saber qué decir.'],
    ['🚌', 'Moverse por la ciudad', 'Practicar trayectos, avisos y carteles en una ciudad accesible.'],
    ['🧩', 'Comunicarse con pictogramas', 'Aprender rutinas y pedir cosas con pictogramas en espacios reales.'],
    ['🎓', 'Formar a mediadores', 'Situaciones difíciles simuladas para practicar la mediación.'],
    ['🫂', 'Personas sordociegas', 'Experiencias con tacto y vibración para orientarse y comunicarse.'],
    ['🎭', 'Ocio y cultura accesibles', 'Teatro, museos o cine con lengua de signos y subtítulos.'],
    ['🗣️', 'Hablar en público', 'Ensayar una presentación o una entrevista sin nervios.']
  ]
};
// Añade a los CICLOS de un ejercicio las tres versiones semipresenciales (EI SP e IS SP copian las presenciales; MC SP usa su contenido)
function versionesSemi(C, mc, extra){
  if (!C.ei_sp) C.ei_sp = structuredClone(C.ei);
  if (!C.is_sp) C.is_sp = structuredClone(C.is);
  if (!C.mc_sp) C.mc_sp = structuredClone(mc);
  for (const k of ORDEN) Object.assign(C[k], { nombre: NOMBRES_SP[k], semipresencial: true }, extra);
}

// ===== Bloque 1 · UT2_E1 (juego de parejas + las tecnologías en tu profesión) =====
const E1 = (() => {
/*__INCLUYE:UT2_E1__*/
;return { CICLOS, siglas: COMUN.siglas, construirTarea, pdfTarea, listaChecks, alActualizar, progresoPropio, notaD, ejemploCampos, ejemploRespuesta };
})();

// ===== Bloque 2 · UT2_E2 (robot), individual y sin Canva =====
const E2 = (() => {
/*__INCLUYE:UT2_E2__*/
;versionesSemi(CICLOS, MC_ROBOT, { individual: true });
for (const k of ['ei_sp', 'is_sp', 'mc_sp']) CICLOS[k].reto = CICLOS[k].reto.replace(/^Vuestr[oa] /, 'Tu ');   // aquí ORDEN es el del robot
return { CICLOS, siglas: COMUN.siglas, construirTarea, pdfTarea, listaChecks, alActualizar, progresoPropio, ejemploCampos, ejemploRespuesta };
})();

// ===== Bloque 3 · UT2_E3 (app de realidad virtual o mixta), sin la parte de las gafas =====
const E3 = (() => {
/*__INCLUYE:UT2_E3__*/
;versionesSemi(CICLOS, MC_APP, { sinGafas: true });
return { CICLOS, siglas: COMUN.siglas, construirTarea, pdfTarea, listaChecks, alActualizar, progresoPropio, ejemploCampos, ejemploRespuesta };
})();

// ===== Bloque 4 · el plano (antes UT2_E4, página aparte) =====
const E4 = (() => {
/*__INCLUYE:UT2_SP_plano__*/
;return { construir, alActualizar, checks, progreso, pdf, ejemploCampos, ejemploRespuesta };
})();

// Siglas de los tres ejercicios, sin repetir
for (const s of [...E1.siglas || [], ...E2.siglas || [], ...E3.siglas || []]) if (!COMUN.siglas.some(x => x[0] === s[0])) COMUN.siglas.push(s);

const BLOQUES = [
  { n: 1, t: 'Bloque 1 · Parejas de tecnologías y su uso en tu profesión' },
  { n: 2, t: 'Bloque 2 · Diseña tu robot' },
  { n: 3, t: 'Bloque 3 · Diseña tu app de realidad virtual o mixta' },
  { n: 4, t: 'Bloque 4 · Tecnologías habilitadoras en tu centro (plano)' }
];
const claveDe = C => ORDEN.find(k => CICLOS[k] === C) || ORDEN[0];

document.head.insertAdjacentHTML('beforeend', `<style>
.sp-bloque{margin:2.2rem 0 0}
.sp-tit{display:flex;align-items:center;gap:.6rem;font-size:1.35rem;margin:0 0 .8rem;padding:.7rem 1rem;border-radius:16px;background:var(--mint);border:1px solid var(--mint2)}
.sp-tit .sp-n{flex:none;width:2.1rem;height:2.1rem;border-radius:50%;display:grid;place-items:center;background:var(--mint3);color:#fff;font-size:1.05rem}
.sp-indice{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:.6rem;margin:.6rem 0 0;padding:0;list-style:none}
.sp-indice li{background:#fff;border:1px solid var(--line);border-radius:14px;padding:.6rem .8rem}
.sp-indice b{display:block}
@media (max-width:600px){.sp-tit{font-size:1.1rem}}
</style>`);

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>
    <ol class="sp-indice">${BLOQUES.map(b => `<li><b>${esc(b.t.split(' · ')[0])}</b>${esc(b.t.split(' · ').slice(1).join(' · '))}</li>`).join('')}</ol>`;
}
function construirTarea(C){
  const k = claveDe(C);
  const bloque = (b, html) => `<div class="sp-bloque" id="spB${b.n}"><h2 class="sp-tit"><span class="sp-n">${b.n}</span>${esc(b.t.split(' · ').slice(1).join(' · '))}</h2>${html}</div>`;
  return bloque(BLOQUES[0], E1.construirTarea(E1.CICLOS[k]))
    + bloque(BLOQUES[1], E2.construirTarea(E2.CICLOS[k]))
    + bloque(BLOQUES[2], E3.construirTarea(E3.CICLOS[k]))
    + bloque(BLOQUES[3], `<section class="fase f1"><header><h2>Tu plano del centro</h2></header><div class="cuerpo">${E4.construir(C)}</div></section>`);
}
function alActualizar(){
  for (const m of [E1, E2, E3, E4]) { try { m.alActualizar(); } catch(e){ console.error(e); } }
}
// Progreso: cada bloque cuenta lo mismo
function progresoPropio(){
  const fr = p => p && p.total ? Math.min(1, p.hechas / p.total) : 0;
  const partes = [E1.progresoPropio(), E2.progresoPropio(), E3.progresoPropio(), E4.progreso()].map(fr);
  const hechas = partes.reduce((a, b) => a + b, 0);
  return { hechas, total: 4, texto: `${Math.round(hechas / 4 * 100)} % del ejercicio hecho` };
}
function listaChecks(C){
  const pon = (n, l) => (l || []).map(x => Object.assign({}, x, { t: `Bloque ${n} · ${x.t}` }));
  return [...pon(1, E1.listaChecks()), ...pon(2, E2.listaChecks()), ...pon(3, E3.listaChecks()), ...pon(4, E4.checks())];
}
// Nota guardada para la administración: la del juego de parejas, sobre 10
function notaEntrega(){ return Math.round(E1.notaD()) / 10; }

async function pdfTarea(api, C){
  const k = claveDe(C);
  const titulo = b => { api.sitio(24); api.P(b.t, { size: 15, b: true, color: api.COL.mint, tras: 3 }); };
  titulo(BLOQUES[0]); await E1.pdfTarea(api, E1.CICLOS[k]);
  api.nuevaPag(); titulo(BLOQUES[1]); await E2.pdfTarea(api, E2.CICLOS[k]);
  api.nuevaPag(); titulo(BLOQUES[2]); await E3.pdfTarea(api, E3.CICLOS[k]);
  api.nuevaPag(); titulo(BLOQUES[3]); await E4.pdf(api, C);
}

function ejemploCampos(){ return Object.assign({}, E1.ejemploCampos(), E2.ejemploCampos(), E3.ejemploCampos(), E4.ejemploCampos()); }
function ejemploRespuesta(id){
  for (const m of [E4, E3, E2, E1]) { const r = m.ejemploRespuesta(id); if (r) return r; }
  if (id === 'fuentes') return '<ul><li>[Web, app o vídeo consultado · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y qué parte es tuya] o «No he usado IA».</p>';
  return '';
}

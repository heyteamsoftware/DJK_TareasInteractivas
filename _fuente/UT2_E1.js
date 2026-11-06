// ===== UT2_E1 · Juego de parejas: tecnologías habilitadoras y sus definiciones =====
// Las 50 tecnologías y definiciones son las del UT2_E2 (algunas definiciones están reescritas
// para que no repitan el nombre de la tecnología y la pareja no sea evidente).
const TEC = [
  ['Impresión 3D', 'Fabricar objetos físicos capa a capa a partir de un diseño hecho en el ordenador.', '🧊'],
  ['Códigos QR', 'Llevar al instante a una web, un documento o un vídeo al escanearlos con la cámara del móvil.', '🔳'],
  ['Pago con el móvil', 'Pagar acercando el teléfono o el reloj al datáfono, sin efectivo ni tarjeta física.', '📲'],
  ['Datáfono (TPV)', 'Cobrar con tarjeta o móvil y dejar registrada cada venta.', '💳'],
  ['Wi-Fi', 'Conectar ordenadores, tablets y móviles a internet sin cables dentro de un edificio.', '📶'],
  ['Fibra óptica', 'Llevar internet de alta velocidad y muy estable hasta el edificio.', '🌐'],
  ['Bluetooth', 'Conectar sin cables dispositivos cercanos: altavoces, auriculares, teclados o ratones.', '🎧'],
  ['Pizarra digital interactiva', 'Proyectar contenidos en la pared y escribir o tocar sobre ellos con el dedo o un lápiz especial.', '🖊️'],
  ['Tablets', 'Consultar, crear y presentar contenidos con una pantalla táctil que se lleva a cualquier sitio.', '📱'],
  ['Ordenadores portátiles', 'Trabajar con programas completos desde cualquier lugar, sin estar en un puesto fijo.', '💻'],
  ['Videoconferencia', 'Hacer reuniones, tutorías o clases a distancia con imagen y sonido.', '🎥'],
  ['Aula virtual', 'Compartir materiales, entregar tareas y comunicarse por internet.', '🎓'],
  ['Documentos compartidos en línea', 'Que varias personas escriban y editen a la vez el mismo texto desde distintos dispositivos.', '📝'],
  ['Calendario compartido', 'Organizar citas, reservas y eventos que todo el equipo puede ver.', '📅'],
  ['Mensajería instantánea de grupo', 'Enviar avisos rápidos a muchas personas a la vez.', '💬'],
  ['Firma electrónica', 'Dar validez legal a un documento desde el ordenador o el móvil, sin papel ni bolígrafo.', '✍️'],
  ['Certificado digital', 'Identificarse de forma segura para hacer trámites por internet.', '🪪'],
  ['Lector de huella dactilar', 'Reconocer a una persona por la marca única de su dedo para darle acceso o registrarla.', '👆'],
  ['Tarjeta de acceso', 'Abrir puertas o fichar acercando una pieza de plástico con chip a un lector.', '🎫'],
  ['Control horario digital', 'Registrar la hora de entrada y salida de cada trabajador.', '⏱️'],
  ['Cerradura electrónica', 'Abrir y cerrar puertas con un código, una tarjeta o el móvil, sin llaves.', '🔐'],
  ['Videoportero', 'Ver y hablar con quien llama antes de abrirle la puerta.', '🚪'],
  ['Cámaras de videovigilancia', 'Grabar y vigilar un espacio para mejorar la seguridad.', '📹'],
  ['Alarma antirrobo', 'Avisar con una sirena si alguien entra cuando el espacio está cerrado.', '🚨'],
  ['Detector de humo', 'Avisar con un pitido en cuanto nota las primeras señales de un posible incendio.', '🔥'],
  ['Desfibrilador (DEA)', 'Analizar el corazón en una parada cardíaca y dar una descarga, guiando paso a paso con la voz.', '🫀'],
  ['Sensor de presencia', 'Encender luces o aparatos solo cuando detecta que hay alguien.', '🚶'],
  ['Iluminación LED', 'Dar luz gastando mucha menos electricidad que las bombillas tradicionales.', '💡'],
  ['Termostato programable', 'Encender y apagar la calefacción o el aire acondicionado a las horas elegidas.', '🌡️'],
  ['Medidor de CO2', 'Medir la calidad del aire y avisar cuando hay que ventilar.', '🌬️'],
  ['Placas solares', 'Producir electricidad a partir de la luz del sol.', '☀️'],
  ['Enchufe programable', 'Encender o apagar un aparato a una hora fija o desde el móvil.', '🔌'],
  ['Persianas motorizadas', 'Subir y bajar lo que cubre las ventanas con un botón o de forma automática.', '🪟'],
  ['Riego automático', 'Dar agua a plantas o césped a la hora y en la cantidad programadas.', '💧'],
  ['Punto de carga eléctrica', 'Recargar coches, bicicletas o patinetes eléctricos.', '🔋'],
  ['Lector de código de barras', 'Identificar productos o materiales al instante para controlar el inventario.', '🏷️'],
  ['Etiquetas antirrobo', 'Hacer sonar una alarma si un objeto sale del recinto sin permiso.', '🛡️'],
  ['Impresora multifunción', 'Imprimir, escanear, fotocopiar y enviar documentos con un solo aparato.', '🖨️'],
  ['Escáner de documentos', 'Pasar papeles a formato digital para guardarlos y compartirlos.', '📠'],
  ['Copias de seguridad', 'Guardar un duplicado de la información para recuperarla si se pierde o se estropea.', '💾'],
  ['Antivirus', 'Detectar y bloquear programas maliciosos en ordenadores y móviles.', '🦠'],
  ['Verificación en dos pasos', 'Pedir un segundo código al iniciar sesión para que nadie más entre en tu cuenta.', '🔑'],
  ['Gestor de contraseñas', 'Crear y guardar claves seguras sin tener que recordarlas todas.', '🗝️'],
  ['Pantalla de avisos digital', 'Mostrar avisos, horarios o menús que se cambian desde el ordenador.', '📺'],
  ['Megafonía', 'Dar avisos por altavoz a todo un espacio a la vez.', '📢'],
  ['Marcador electrónico', 'Mostrar el resultado y el tiempo de un partido a la vista de todos.', '🔢'],
  ['Cámara deportiva', 'Grabar en vídeo la actividad física desde cualquier ángulo, incluso en movimiento.', '🏄'],
  ['Reloj inteligente', 'Medir pasos, pulso y actividad física, y mostrar avisos del móvil en la muñeca.', '⌚'],
  ['Drones', 'Tomar fotos y vídeos desde el aire y revisar zonas difíciles de alcanzar.', '🚁'],
  ['Microscopio digital', 'Ver objetos muy aumentados en una pantalla y guardar fotos de lo que se observa.', '🔬']
];
// Tablero: 10 parejas como máximo (20 cuadrados). Cuando quedan 5 o menos, se rellena hasta 10.
const NT = TEC.length, MESA = 10, UMBRAL = 5, CELDAS = MESA * 2, MAX_PISTAS = 5;

const COMUN = {
  codigo: 'UT2_E1',
  corto: 'UT2 · E1',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT2 · Tecnologías habilitadoras digitales',
  ejercicio: 'E1 · Parejas de tecnologías habilitadoras',
  ra: 'RA2',
  ce: 'a',
  modalidad: 'Individual · juego',
  sinFuentes: true,
  raTexto: 'Caracteriza las tecnologías habilitadoras digitales necesarias para la adecuación/transformación de las empresas a entornos digitales describiendo sus características y aplicaciones.',
  ceTextos: [
    ['a', 'Se han identificado las principales tecnologías habilitadoras digitales.']
  ],
  objetivo: 'Conocer 50 tecnologías habilitadoras del día a día y saber para qué sirve cada una. Las vas a necesitar en el siguiente ejercicio (UT2 · E2), en el que elegirás algunas para tu centro de trabajo.',
  pasos: [
    'Lee el objetivo y la tabla «Cómo se califica».',
    'Toca una <b>tecnología</b> (cuadrado verde) y después su <b>definición</b> (cuadrado blanco). También puedes <b>arrastrar</b> un cuadrado encima de su pareja (en tablet, mantén el dedo pulsado un momento y arrastra).',
    'Cuando quede libre la <b>mitad del tablero</b>, aparecen nuevas tecnologías y definiciones. Sigue hasta casar las <b>50</b>.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Juega tú: el resultado tiene que ser tuyo.',
    'Lee bien cada definición antes de elegir: cada fallo resta 0,1 a tu nota. Las pistas y el tiempo no restan.',
    'Tienes 5 pistas para todo el juego. Úsalas solo si te atascas.'
  ],
  criterios: [
    ['Juego · Parejas de tecnologías habilitadoras', 'Las 50 tecnologías casadas con su definición. Partes de un 10 y cada fallo resta 0,1 (la nota mínima es 1). Si entregas sin casar las 50, la nota baja en proporción (por ejemplo, con 25 de 50 parejas, la mitad). Las pistas y el tiempo no restan.', 10]
  ],
  siglas: [
    ['THD', 'Tecnologías habilitadoras digitales'],
    ['3D', 'Tres dimensiones'],
    ['QR', 'Quick Response: código de respuesta rápida'],
    ['TPV', 'Terminal punto de venta'],
    ['DEA', 'Desfibrilador externo automático'],
    ['LED', 'Light-Emitting Diode: diodo emisor de luz'],
    ['CO2', 'Dióxido de carbono']
  ]
};

const CICLOS = {
  af: { nombre: 'Acondicionamiento Físico', centro: 'un gimnasio o centro deportivo' },
  as: { nombre: 'Animación Sociodeportiva', centro: 'una empresa o servicio de animación sociodeportiva' },
  ei: { nombre: 'Educación Infantil', centro: 'una escuela infantil' },
  hb: { nombre: 'Higiene Bucodental', centro: 'una clínica dental' },
  is: { nombre: 'Integración Social', centro: 'un centro o servicio de integración social' }
};
CICLOS.ei_sp = Object.assign(structuredClone(CICLOS.ei), { nombre: 'Educación Infantil Semipresencial', semipresencial: true });
CICLOS.is_sp = Object.assign(structuredClone(CICLOS.is), { nombre: 'Integración Social Semipresencial', semipresencial: true });
CICLOS.mc_sp = { nombre: 'Mediación Comunicativa Semipresencial', semipresencial: true, centro: 'un servicio de mediación comunicativa' };
// Los semipresenciales no hacen los ejercicios normales (tienen UTn_SP); siguen en CICLOS para abrir borradores antiguos
const ORDEN = ['af','as','ei','hb','is'];

// ================= estilos del juego =================
document.head.insertAdjacentHTML('beforeend', `<style>
.jg-como{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem;margin:.6rem 0 1rem}
.jg-como div{background:var(--mint);border:1px solid var(--mint2);border-radius:14px;padding:.7rem .8rem;font-size:.9rem;line-height:1.35}
.jg-como b{display:block;color:var(--mint3);font-size:1.4rem;line-height:1.1;margin-bottom:.2rem}
.jg-centro{background:var(--sky);border:1px solid var(--sky2);border-radius:12px;padding:.6rem .8rem;font-size:.92rem}
.jg-stats{display:flex;flex-wrap:wrap;gap:.5rem;align-items:stretch;margin:.4rem 0 .9rem}
.jg-stat{flex:1 1 84px;background:var(--mint);border:1px solid var(--mint2);border-radius:12px;padding:.35rem .7rem}
.jg-stat small{display:block;font-size:.68rem;color:var(--mint3);font-weight:800;text-transform:uppercase;letter-spacing:.05em}
.jg-stat b{font-size:1.2rem;font-variant-numeric:tabular-nums}
.jg-stat.err b{color:#b8433f}
.jg-stat.nota{background:#fff6d4;border-color:#efcd5f}
.jg-stat.nota small{color:#7a5a00}
.jg-stat.nota b{color:#2f2d3a}
#jgPista{flex:0 0 auto;border-radius:12px;background:#fff6d4;border:1px solid #efcd5f;font-weight:700;padding:.35rem .9rem}
#jgPista:hover{background:#ffeeb0}
#jgPista:disabled{opacity:.45;cursor:not-allowed}
#jgPista span{display:inline-block;min-width:1.4rem;margin-left:.3rem;padding:0 .35rem;border-radius:99px;background:#efcd5f;color:#5a4300;font-size:.8rem}
.jg-tab{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.75rem;min-height:180px}
.celda{position:relative;aspect-ratio:1;min-width:0}
.celda>.vacio{position:absolute;inset:0;border:2px dashed var(--mint2);border-radius:18px;background:rgba(255,255,255,.45)}
.tl{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem;margin:0;padding:.7rem;border-radius:18px;text-align:center;overflow:hidden;box-sizing:border-box;
  touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;
  transition:transform .18s,box-shadow .18s,opacity .25s,background .2s;animation:jgEntra .45s backwards}
.celda>.tl{position:absolute;inset:0;width:100%;height:100%}
.tl.tec{background:linear-gradient(155deg,#effaf4,#bfe8d3);border:2px solid var(--mint2);color:#1d4d38;box-shadow:0 4px 0 #9fd8bd}
.tl.tec .emo{font-size:2.3rem;line-height:1;filter:drop-shadow(0 2px 2px rgba(0,0,0,.12))}
.tl.tec b{font-size:.98rem;line-height:1.2}
.tl.def{background:#fff;border:2px solid var(--sky2);color:var(--ink);box-shadow:0 4px 0 var(--sky2);font-size:.84rem;line-height:1.32;padding-top:1.7rem}
.tl.def .lbl{position:absolute;top:.5rem;left:.7rem;font-size:.6rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--sky3)}
.tl.def .tx{flex:1;display:flex;align-items:center}
.tl.tec:hover{background:linear-gradient(155deg,#f4fcf8,#ccefdd)}
.tl.def:hover{background:#f7fbff}
@media (hover:hover){.tl:hover{transform:translateY(-3px)}}
.tl.sel{transform:translateY(-5px) scale(1.04) rotate(-1.2deg)!important;box-shadow:0 0 0 4px #ffcf4d,0 12px 22px rgba(47,45,58,.18);z-index:2}
.tl.diana{transform:scale(1.06)!important;box-shadow:0 0 0 4px var(--mint3),0 12px 22px rgba(47,45,58,.18);z-index:2}
.tl.origen{opacity:.3}
.tl.mal{animation:jgMal .45s;border-color:#e06666!important;background:#fdecec!important;box-shadow:0 4px 0 #f0a8a8}
.tl.ok{animation:jgOk .65s forwards;border-color:var(--mint3)!important;background:#c9f0dc!important;pointer-events:none}
.tl.pista{animation:jgPista .9s 3}
.tl.fantasma{position:fixed;z-index:300;pointer-events:none;animation:none;transform:rotate(3deg) scale(1.06);box-shadow:0 18px 34px rgba(0,0,0,.28);opacity:.96;transition:none;width:auto;height:auto}
@keyframes jgEntra{from{opacity:0;transform:translateY(14px) scale(.88)}to{opacity:1;transform:none}}
@keyframes jgMal{0%,100%{transform:none}20%{transform:translateX(-8px) rotate(-2deg)}40%{transform:translateX(8px) rotate(2deg)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
@keyframes jgOk{0%{transform:scale(1)}35%{transform:scale(1.12) rotate(2deg)}100%{transform:scale(.15) rotate(-8deg);opacity:0}}
@keyframes jgPista{0%,100%{box-shadow:0 0 0 0 rgba(255,207,77,0)}50%{box-shadow:0 0 0 8px rgba(255,207,77,.95)}}
.jg-aviso{grid-column:1/-1;text-align:center;background:linear-gradient(135deg,var(--mint),#fff6d4);border:2px solid var(--mint2);border-radius:20px;padding:1.6rem 1rem;animation:jgEntra .5s backwards}
.jg-aviso .big{font-size:3.2rem;line-height:1;display:inline-block;animation:jgBote 1.2s ease-in-out infinite}
.jg-aviso h3{margin:.5rem 0 .3rem;font-size:1.35rem;color:#1d4d38}
.jg-aviso p{margin:.2rem 0;color:var(--muted)}
.jg-res{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:.5rem;max-width:760px;margin:1rem auto .4rem}
.jg-res div{background:#fff;border:1px solid var(--mint2);border-radius:12px;padding:.5rem}
.jg-res small{display:block;font-size:.68rem;color:var(--mint3);font-weight:800;text-transform:uppercase;letter-spacing:.05em}
.jg-res b{font-size:1.25rem}
.jg-res .nota{background:#fff6d4;border-color:#efcd5f}
.jg-res .nota small{color:#7a5a00}
.jg-res .nota b{font-size:1.6rem}
@keyframes jgBote{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.jg-pill{position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;background:#2f2d3a;color:#fff;border-radius:99px;padding:.45rem .5rem .45rem 1rem;display:flex;gap:.6rem;align-items:center;box-shadow:0 10px 24px rgba(0,0,0,.25);max-width:calc(100vw - 24px);font-size:.9rem;animation:jgPillIn .25s backwards}
.jg-pill[hidden]{display:none}
@keyframes jgPillIn{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}
.jg-pill span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jg-pill button{flex:none;background:rgba(255,255,255,.15);border:0;color:#fff;border-radius:99px;width:2rem;height:2rem;padding:0}
.jg-col{margin-top:1.2rem;border:1px solid var(--line);border-radius:14px;background:#fff}
.jg-col summary{cursor:pointer;padding:.7rem 1rem;font-weight:700;list-style:none;display:flex;justify-content:space-between;align-items:center}
.jg-col summary::-webkit-details-marker{display:none}
.jg-col summary::after{content:'▾';color:var(--muted);transition:transform .2s}
.jg-col[open] summary::after{transform:rotate(180deg)}
.jg-col .vacia{padding:0 1rem 1rem;color:var(--muted);margin:0}
.par{display:grid;grid-template-columns:2rem minmax(0,13rem) minmax(0,1fr);gap:.6rem;padding:.5rem 1rem;border-top:1px dashed var(--line);align-items:start;font-size:.92rem}
.par .emo{font-size:1.3rem;line-height:1.2}
.par b{color:#1d4d38}
.par.nuevo{animation:jgNuevo 1.4s}
@keyframes jgNuevo{0%{background:#c9f0dc}100%{background:transparent}}
.jg-confeti{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:400}
@media (max-width:640px){
  .jg-como{grid-template-columns:1fr}
  .jg-tab{grid-template-columns:repeat(2,minmax(0,1fr));gap:.55rem}
  .jg-stat{padding:.3rem .55rem}
  .jg-stat b{font-size:1.05rem}
  .tl{padding:.55rem;border-radius:15px}
  .tl.tec .emo{font-size:1.9rem}
  .tl.tec b{font-size:.9rem}
  .tl.def{font-size:.78rem;line-height:1.28;padding-top:1.5rem}
  .par{grid-template-columns:1.8rem minmax(0,1fr)}
  .par span:last-child{grid-column:2}
}
@media (prefers-reduced-motion:reduce){.tl,.tl.ok,.tl.mal,.jg-aviso .big{animation:none!important;transition:none}}
</style>`);

// ================= textos de la página =================
function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>
    <h2 style="font-size:1.1rem">Cómo se juega</h2>
    <div class="jg-como"><div><b>1</b>Toca una <b style="display:inline;font-size:inherit">tecnología</b> (verde) y después su <b style="display:inline;font-size:inherit">definición</b> (blanca).</div><div><b>2</b>¡Pareja casada! Si no coinciden, es un fallo y resta 0,1 a tu nota. También puedes arrastrar un cuadrado encima del otro.</div><div><b>3</b>Cuando quede libre la mitad del tablero, aparecen más. Casa las 50.</div></div>
    <div class="jg-centro">💭 Mientras juegas, piensa cuáles de estas tecnologías verías en ${esc(C.centro)}: te servirá para el E2.</div>`;
}
function construirTarea(C){
  return `<section class="fase f1"><header><h2>Juego · Casa cada tecnología con su definición</h2></header><div class="cuerpo">
    <input type="hidden" id="juegoDato" data-campo="juego">
    <div class="jg-stats">
      <div class="jg-stat"><small>Parejas</small><b id="jgP">0/50</b></div>
      <div class="jg-stat"><small>En tablero</small><b id="jgM">0</b></div>
      <div class="jg-stat err"><small>Fallos</small><b id="jgE">0</b></div>
      <div class="jg-stat nota" title="La nota que llevas ahora: cada fallo resta 0,1 y, mientras no cases las 50, cuenta la parte casada"><small>Nota</small><b id="jgN">1</b></div>
      <div class="jg-stat"><small>Tiempo</small><b id="jgT">0:00</b></div>
      <button type="button" id="jgPista" title="Ilumina una tecnología y su definición">💡 Pista<span id="jgPN">5</span></button>
    </div>
    <div class="jg-tab" id="tablero" role="group" aria-label="Tablero del juego"></div>
    <details class="jg-col" id="jgCol" open><summary>📚 Tus parejas <span id="jgColN">0/50</span></summary><div id="coleccion"></div></details>
    <div class="jg-pill" id="jgPill" hidden role="status"><span id="jgPillTx"></span><button type="button" id="jgPillX" aria-label="Quitar la selección">✕</button></div>
  </div></section>`;
}

// ================= estado del juego (se guarda en el campo oculto «juego») =================
// J = { v:2, pool: parejas aún sin salir, celdas: 20 valores (-1 vacío; n*2 = tecnología, n*2+1 = definición),
//       hechas: parejas casadas en orden, er: fallos, pi: pistas, seg: segundos, fin: fecha de fin }
let J = null, ULT = null, SEL = null, NUEVO = -1, SUPR = 0, ULTACC = 0, ARR = null;
const ANIM = new Map();      // celdas con la pareja que se está casando (animación)
let SIG = [];                // firma de lo pintado en cada celda, para repintar solo lo que cambia
const barajar = a => { for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const celdaEl = i => { const t = document.getElementById('tablero'); return t ? t.children[i] : null; };
const botonEn = i => { const c = celdaEl(i); return c ? c.querySelector('.tl') : null; };
const enMesa = (s = est()) => s.celdas.filter(v => v !== -1).length / 2;
const terminado = (s = est()) => s.hechas.length >= NT;
const precision = (s = est()) => { const t = s.hechas.length + s.er; return t ? Math.round(s.hechas.length / t * 100) : 0; };
const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const est = () => J || { hechas: [], er: 0, pi: 0, seg: 0, celdas: [], pool: [] };
// Nota sobre 10, en décimas: se parte de 10 y cada fallo resta 0,1 (una décima), con un mínimo de 1.
// Si aún no se han casado las 50 parejas, esa nota se multiplica por la parte casada (mínimo 1). Las pistas y el tiempo no cuentan.
const decimasFallos = (s = est()) => Math.max(10, 100 - s.er);
const notaD = (s = est()) => terminado(s) ? decimasFallos(s) : Math.max(10, Math.round(decimasFallos(s) * s.hechas.length / NT));
const fmtNota = d => (d / 10).toLocaleString('es-ES', { minimumFractionDigits: d % 10 ? 1 : 0, maximumFractionDigits: 1 });
// La nota se guarda con la entrega al descargar el PDF (el profesor la ve en el panel DJK y la descarga en Excel)
function notaEntrega(){ return notaD() / 10; }

// Coloca hasta «max» parejas nuevas en celdas vacías (sin tocar las que se están casando)
function colocar(s, max){
  const libres = barajar(s.celdas.map((v, i) => (v === -1 && !ANIM.has(i)) ? i : -1).filter(i => i >= 0));
  const n = Math.min(max, s.pool.length, Math.floor(libres.length / 2));
  for (let p = 0; p < n; p++){
    const par = s.pool.shift();
    s.celdas[libres[2 * p]] = par * 2;
    s.celdas[libres[2 * p + 1]] = par * 2 + 1;
  }
  return n;
}
function nuevoJuego(){
  const s = { v: 2, pool: barajar([...Array(NT).keys()]), celdas: Array(CELDAS).fill(-1), hechas: [], er: 0, pi: 0, seg: 0, fin: 0 };
  colocar(s, MESA);
  return s;
}
// Comprueba que el estado guardado es coherente: cada pareja aparece exactamente una vez (sin salir, en tablero o casada)
function valido(o){
  if (!o || o.v !== 2 || !Array.isArray(o.pool) || !Array.isArray(o.celdas) || !Array.isArray(o.hechas) || o.celdas.length !== CELDAS) return false;
  const ok = n => Number.isInteger(n) && n >= 0 && n < NT;
  const veces = new Map(), suma = n => veces.set(n, (veces.get(n) || 0) + 1);
  for (const n of o.hechas){ if (!ok(n)) return false; suma(n); }
  for (const n of o.pool){ if (!ok(n)) return false; suma(n); }
  const enCelda = new Map();
  for (const v of o.celdas){
    if (v === -1) continue;
    if (!Number.isInteger(v) || v < 0 || v >= NT * 2) return false;
    enCelda.set(v >> 1, (enCelda.get(v >> 1) || 0) + 1);
  }
  for (const [n, c] of enCelda){ if (c !== 2) return false; suma(n); }
  return veces.size === NT && [...veces.values()].every(c => c === 1);
}
function jgCargar(v){
  try {
    const o = JSON.parse(v);
    if (valido(o)) return { v: 2, pool: o.pool, celdas: o.celdas, hechas: o.hechas, er: Math.max(0, +o.er || 0), pi: Math.min(MAX_PISTAS, Math.max(0, +o.pi || 0)), seg: Math.max(0, +o.seg || 0), fin: +o.fin || 0 };
  } catch(e){}
  return nuevoJuego();
}
function jgEscribir(){ const i = document.getElementById('juegoDato'); if (!i || !J) return; ULT = JSON.stringify(J); i.value = ULT; }

// El motor llama a esto en cada cambio: si el valor del campo es otro (al abrir un borrador), se recarga
function alActualizar(){
  const i = document.getElementById('juegoDato'), t = document.getElementById('tablero'); if (!i || !t) return;
  if (!t.dataset.listo || i.value !== ULT){
    J = jgCargar(i.value); jgEscribir(); t.dataset.listo = '1';
    SEL = null; ANIM.clear(); t.dataset.modo = ''; jgPintar();
  }
}
function progresoPropio(){ const n = est().hechas.length; return { hechas: n, total: NT, texto: `${n} de ${NT} parejas casadas` }; }
function listaChecks(){
  const n = est().hechas.length;
  return [{ ok: n === NT, t: `Las ${NT} parejas casadas`, cuenta: `${n}/${NT}`, falta: `Sigue jugando hasta casar las ${NT} tecnologías.` }];
}

// ================= pintar =================
function jgPintar(){ jgMarcador(); jgTablero(); jgColeccion(); }
function jgMarcador(){
  const s = est(), q = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  q('jgP', `${s.hechas.length}/${NT}`); q('jgM', String(enMesa(s))); q('jgE', s.er); q('jgN', fmtNota(notaD(s))); q('jgT', mmss(s.seg));
  q('jgPN', MAX_PISTAS - s.pi); q('jgColN', `${s.hechas.length}/${NT}`);
  const p = document.getElementById('jgPista'); if (p) p.disabled = !J || s.pi >= MAX_PISTAS || terminado();
}
function jgTablero(){
  const t = document.getElementById('tablero'); if (!t || !J) return;
  if (terminado()){
    if (t.dataset.modo !== 'fin'){ SEL = null; t.dataset.modo = 'fin'; t.innerHTML = jgFinal(); }
    return;
  }
  if (t.dataset.modo !== 'juego'){
    t.innerHTML = Array.from({ length: CELDAS }, () => '<div class="celda"></div>').join('');
    SIG = Array(CELDAS).fill(null); t.dataset.modo = 'juego';
  }
  for (let i = 0; i < CELDAS; i++) pintaCelda(i);
}
function pintaCelda(i){
  const cel = celdaEl(i); if (!cel) return;
  const anim = ANIM.has(i), v = anim ? ANIM.get(i) : J.celdas[i];
  const sig = v === -1 ? 'x' : (anim ? 'o' : 'v') + v;
  if (SIG[i] === sig) return;
  SIG[i] = sig;
  if (v === -1){ cel.innerHTML = '<div class="vacio" aria-hidden="true"></div>'; return; }
  const n = v >> 1, esDef = (v & 1) === 1, [nom, dsc, emo] = TEC[n];
  const cls = `tl ${esDef ? 'def' : 'tec'}${anim ? ' ok' : ''}${SEL === i ? ' sel' : ''}`;
  const dis = anim ? ' disabled' : '';
  cel.innerHTML = esDef
    ? `<button type="button" class="${cls}" data-i="${i}" aria-label="${esc('Definición: ' + dsc)}"${dis}><span class="lbl" aria-hidden="true">Definición</span><span class="tx">${esc(dsc)}</span></button>`
    : `<button type="button" class="${cls}" data-i="${i}" aria-label="${esc('Tecnología: ' + nom)}"${dis}><span class="emo" aria-hidden="true">${emo}</span><b>${esc(nom)}</b></button>`;
}
function jgFinal(){
  const s = est();
  return `<div class="jg-aviso" role="status"><span class="big" aria-hidden="true">🏆</span><h3>¡Has casado las ${NT} tecnologías!</h3>
    <p>Ya conoces para qué sirve cada una. Repásalas en «Tus parejas» y descarga el PDF para entregarlo.</p>
    <div class="jg-res"><div class="nota"><small>Nota</small><b>${fmtNota(notaD(s))}</b></div><div><small>Parejas</small><b>${s.hechas.length}/${NT}</b></div><div><small>Fallos</small><b>${s.er}</b></div><div><small>Precisión</small><b>${precision(s)} %</b></div><div><small>Pistas</small><b>${s.pi}/${MAX_PISTAS}</b></div><div><small>Tiempo</small><b>${mmss(s.seg)}</b></div></div></div>`;
}
function jgColeccion(){
  const c = document.getElementById('coleccion'); if (!c) return;
  const s = est();
  if (!s.hechas.length){ c.innerHTML = '<p class="vacia">Aquí irán apareciendo las parejas que cases.</p>'; return; }
  c.innerHTML = s.hechas.slice().reverse().map(n => `<div class="par${n === NUEVO ? ' nuevo' : ''}"><span class="emo" aria-hidden="true">${TEC[n][2]}</span><b>${esc(TEC[n][0])}</b><span>${esc(TEC[n][1])}</span></div>`).join('');
  NUEVO = -1;
}

// ================= jugar =================
function jgSel(i){
  if (SEL !== null) { const b = botonEn(SEL); if (b) b.classList.remove('sel'); }
  SEL = i;
  const p = document.getElementById('jgPill');
  if (i !== null){ const b = botonEn(i); if (b) b.classList.add('sel'); }
  if (!p) return;
  if (i === null || !J){ p.hidden = true; return; }
  const v = J.celdas[i];
  document.getElementById('jgPillTx').textContent = (v & 1) ? '📖 Definición elegida → ahora toca su tecnología' : `${TEC[v >> 1][2]} ${TEC[v >> 1][0]} → ahora toca su definición`;
  p.hidden = false;
}
function jgTocar(i){
  if (!J || terminado() || J.celdas[i] === -1) return;
  if (SEL === null) return jgSel(i);
  if (SEL === i) return jgSel(null);
  if ((J.celdas[SEL] & 1) === (J.celdas[i] & 1)) return jgSel(i);
  jgProbar(SEL, i);
}
function jgProbar(a, b){
  jgSel(null);
  if (!J) return;
  const va = J.celdas[a], vb = J.celdas[b];
  if (va === -1 || vb === -1 || (va & 1) === (vb & 1)) return;
  if ((va >> 1) === (vb >> 1)){
    const n = va >> 1, J0 = J;
    J.hechas.push(n); NUEVO = n;
    J.celdas[a] = -1; J.celdas[b] = -1;
    ANIM.set(a, va); ANIM.set(b, vb);
    pintaCelda(a); pintaCelda(b);
    setTimeout(() => {
      if (J !== J0) return;   // se ha cargado otro borrador mientras tanto
      ANIM.delete(a); ANIM.delete(b);
      if (!terminado() && enMesa() <= UMBRAL) colocar(J, MESA - enMesa());
      if (terminado()){ J.fin = Date.now(); confeti(240); }
      jgEscribir(); jgTablero(); jgMarcador(); jgColeccion();
      programarGuardado();
    }, 650);
  } else {
    J.er++;
    [a, b].forEach(i => { const el = botonEn(i); if (!el) return; el.classList.remove('mal'); void el.offsetWidth; el.classList.add('mal'); setTimeout(() => el.classList.remove('mal'), 460); });
    if (navigator.vibrate) try { navigator.vibrate(60); } catch(e){}
  }
  jgEscribir(); jgMarcador(); programarGuardado();
}
function jgPista(){
  if (!J || terminado() || J.pi >= MAX_PISTAS) return;
  const vivos = J.celdas.map((v, i) => v === -1 ? -1 : i).filter(i => i >= 0);
  if (!vivos.length) return;
  const n = J.celdas[vivos[Math.floor(Math.random() * vivos.length)]] >> 1;
  J.celdas.forEach((v, i) => {
    if (v === -1 || (v >> 1) !== n) return;
    const el = botonEn(i); if (!el) return;
    el.classList.remove('pista'); void el.offsetWidth; el.classList.add('pista');
    setTimeout(() => el.classList.remove('pista'), 2800);
  });
  J.pi++; jgEscribir(); jgMarcador(); programarGuardado();
}

// Clics, Intro y espacio (los cuadrados son botones)
document.addEventListener('click', e => {
  const el = e.target.closest('#tablero .tl[data-i]');
  if (el){ if (Date.now() < SUPR) return; ULTACC = Date.now(); jgTocar(+el.dataset.i); return; }
  if (e.target.closest('#jgPista')){ ULTACC = Date.now(); jgPista(); }
  else if (e.target.closest('#jgPillX')) jgSel(null);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && SEL !== null) jgSel(null); });

// Arrastrar: con ratón, en cuanto se mueve; con el dedo, tras mantener pulsado un momento (si no, se hace scroll)
document.addEventListener('pointerdown', e => {
  const el = e.target.closest('#tablero .tl[data-i]');
  if (!el || e.button > 0 || !J || terminado()) return;
  ARR = { el, i: +el.dataset.i, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, pid: e.pointerId, toque: e.pointerType !== 'mouse', activo: false };
  if (ARR.toque) ARR.lp = setTimeout(() => { if (ARR && !ARR.activo) arrEmpezar(); }, 380);
});
document.addEventListener('pointermove', e => {
  if (!ARR || e.pointerId !== ARR.pid) return;
  ARR.x = e.clientX; ARR.y = e.clientY;
  if (!ARR.activo){
    const d = Math.hypot(ARR.x - ARR.x0, ARR.y - ARR.y0);
    if (ARR.toque){ if (d > 10){ clearTimeout(ARR.lp); ARR = null; } return; }
    if (d < 8) return;
    arrEmpezar();
  }
  arrMover();
});
document.addEventListener('pointerup', e => { if (!ARR || e.pointerId !== ARR.pid) return; clearTimeout(ARR.lp); if (ARR.activo) arrSoltar(); ARR = null; });
document.addEventListener('pointercancel', () => { if (!ARR) return; clearTimeout(ARR.lp); if (ARR.activo) arrLimpiar(); ARR = null; });
document.addEventListener('touchmove', e => { if (ARR && ARR.activo) e.preventDefault(); }, { passive: false });
document.addEventListener('contextmenu', e => { if (e.target.closest('#tablero .tl')) e.preventDefault(); });
function arrEmpezar(){
  const el = ARR.el, r = el.getBoundingClientRect();
  ARR.activo = true; ARR.dx = ARR.x0 - r.left; ARR.dy = ARR.y0 - r.top; ULTACC = Date.now();
  const g = el.cloneNode(true); g.classList.remove('sel', 'origen', 'pista'); g.classList.add('fantasma'); g.removeAttribute('data-i'); g.setAttribute('aria-hidden', 'true');
  g.style.width = r.width + 'px'; g.style.height = r.height + 'px'; g.style.left = '0'; g.style.top = '0';
  document.body.appendChild(g); ARR.g = g;
  jgSel(ARR.i); el.classList.add('origen');
  if (ARR.toque && navigator.vibrate) try { navigator.vibrate(15); } catch(e){}
  arrMover();
}
function arrMover(){
  ARR.g.style.transform = `translate(${ARR.x - ARR.dx}px,${ARR.y - ARR.dy}px) rotate(3deg) scale(1.06)`;
  const d = arrDiana();
  if (ARR.sobre && ARR.sobre !== d) ARR.sobre.classList.remove('diana');
  ARR.sobre = d; if (d) d.classList.add('diana');
}
function arrDiana(){
  const t = document.elementFromPoint(ARR.x, ARR.y), d = t && t.closest('#tablero .tl[data-i]');
  if (!d || d === ARR.el || !J) return null;
  const j = +d.dataset.i;
  if (J.celdas[j] === -1 || (J.celdas[j] & 1) === (J.celdas[ARR.i] & 1)) return null;
  return d;
}
function arrLimpiar(){
  if (ARR.g) ARR.g.remove(); ARR.el.classList.remove('origen'); if (ARR.sobre) ARR.sobre.classList.remove('diana');
  SUPR = Date.now() + 400;
}
function arrSoltar(){ const i = ARR.i, d = arrDiana(); arrLimpiar(); if (d) jgProbar(i, +d.dataset.i); }

// Cronómetro: solo cuenta mientras se juega (página visible, tarea desbloqueada y actividad en los últimos 90 s)
document.addEventListener('pointermove', () => { ULTACC = Date.now(); }, { passive: true });
document.addEventListener('scroll', () => { ULTACC = Date.now(); }, { passive: true });
setInterval(() => {
  if (!J || EJEMPLO || terminado() || document.hidden || Date.now() - ULTACC > 90000) return;
  const t = document.getElementById('tarea'), ed = document.getElementById('editor');
  if (!t || t.inert || !ed || ed.classList.contains('hidden')) return;
  J.seg++; jgEscribir(); const e = document.getElementById('jgT'); if (e) e.textContent = mmss(J.seg);
}, 1000);

function confeti(n){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas'); c.className = 'jg-confeti'; document.body.appendChild(c);
  const dpr = window.devicePixelRatio || 1, W = innerWidth, H = innerHeight; c.width = W * dpr; c.height = H * dpr;
  const x = c.getContext('2d'); x.scale(dpr, dpr);
  const cols = ['#2f7d5c','#4fb38a','#9fd8bd','#f6bf9e','#a9c8ef','#c9b8f0','#ffcf4d'];
  const ps = Array.from({ length: n }, () => ({ x: W / 2 + (Math.random() - .5) * W * .4, y: H * .42, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 5, r: Math.random() * 7 + 5, a: Math.random() * 6, va: (Math.random() - .5) * .35, c: cols[Math.random() * cols.length | 0] }));
  const t0 = performance.now(); let u = t0;
  (function paso(t){
    const dt = Math.min(2, (t - u) / 16.7); u = t; x.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .32 * dt; p.vx *= .99; p.x += p.vx * dt; p.y += p.vy * dt; p.a += p.va * dt; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); });
    if (t - t0 < 3600) requestAnimationFrame(paso); else c.remove();
  })(t0);
}

// ================= PDF =================
async function pdfTarea(api, C){
  const { banda, P, texto, sitio, separador, COL } = api, s = est();
  banda('Juego · Tecnologías habilitadoras y sus definiciones', [223,243,234], COL.mint);
  // Nota destacada
  const d = notaD(s), dF = decimasFallos(s), { doc, M } = api, fin = terminado(s);
  sitio(28);
  const y0 = api.y;
  doc.setFillColor(255, 246, 212); doc.setDrawColor(239, 205, 95); doc.setLineWidth(0.4);
  doc.roundedRect(M, y0, api.CW, 19, 2.5, 2.5, 'FD');
  doc.setFont('helvetica', 'bold'); doc.setFontSize(8.5); doc.setTextColor(122, 90, 0);
  doc.text('NOTA', M + 6, y0 + 5.5, { baseline: 'middle' });
  doc.setFontSize(21); doc.setTextColor(47, 45, 58);
  doc.text(fmtNota(d) + ' / 10', M + 6, y0 + 12.8, { baseline: 'middle' });
  doc.setFont('helvetica', 'normal'); doc.setFontSize(9.2); doc.setTextColor(108, 104, 120);
  const xr = M + 58, ancho = api.CW - 62;
  const linea1 = fin ? `Las ${NT} parejas casadas con ${s.er} fallo${s.er === 1 ? '' : 's'}.` : `Juego sin terminar: ${s.hechas.length} de ${NT} parejas casadas y ${s.er} fallo${s.er === 1 ? '' : 's'}.`;
  const linea2 = (dF === 10 && 100 - s.er < 10 ? `Por fallos: 1 (nota mínima; 10 - ${s.er} × 0,1 queda por debajo).` : `Por fallos: 10 - ${s.er} × 0,1 = ${fmtNota(dF)}.`)
    + (fin ? '' : ` Por la parte casada: ${fmtNota(dF)} × ${s.hechas.length}/${NT} = ${fmtNota(d)}${d === 10 && Math.round(dF * s.hechas.length / NT) < 10 ? ' (nota mínima: 1)' : ''}.`);
  doc.text(doc.splitTextToSize(pdfTxt(linea1 + ' ' + linea2 + ' Las pistas y el tiempo no cuentan.'), ancho), xr, y0 + 5.2, { baseline: 'top', lineHeightFactor: 1.25 });
  api.y = y0 + 24;
  texto([{ t: 'Parejas casadas: ', b: true }, { t: `${s.hechas.length} de ${NT}` }, { t: '     Precisión: ', b: true }, { t: precision(s) + ' %' }], { size: 10.5, tras: 1 });
  texto([{ t: 'Fallos: ', b: true }, { t: String(s.er) }, { t: '     Pistas usadas: ', b: true }, { t: `${s.pi} de ${MAX_PISTAS}` }, { t: '     Tiempo de juego: ', b: true }, { t: mmss(s.seg) }], { size: 10.5, tras: 2 });
  separador();
  sitio(20); P('Tecnologías casadas, en el orden en que las encontraste', { size: 11.5, b: true, color: COL.mint, tras: 2 });
  let k = 1;
  for (const n of s.hechas) texto([{ t: TEC[n][0] + ': ', b: true }, { t: TEC[n][1] }], { size: 9.6, marca: (k++) + '.', tras: 0.6 });
  const faltan = TEC.map((_, n) => n).filter(n => !s.hechas.includes(n));
  if (faltan.length){
    separador(); sitio(20); P('Sin casar', { size: 11.5, b: true, color: COL.muted, tras: 2 });
    for (const n of faltan) texto([{ t: TEC[n][0] + ': ', b: true }, { t: '(pareja sin encontrar)', i: true }], { size: 9.6, marca: (k++) + '.', color: COL.muted, tras: 0.6 });
  }
}

// ================= ejemplo relleno: juego terminado =================
function ejemploCampos(){
  return { juego: JSON.stringify({ v: 2, pool: [], celdas: Array(CELDAS).fill(-1), hechas: [...Array(NT).keys()], er: 6, pi: 2, seg: 912, fin: 1 }) };
}
function ejemploRespuesta(){ return ''; }

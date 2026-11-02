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
const NT = TEC.length, RONDAS = 5, POR_RONDA = 10, MAX_PISTAS = 5;

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
    'El juego tiene <b>5 rondas</b>. En cada ronda aparecen <b>10 tecnologías y 10 definiciones</b> mezcladas en cuadrados.',
    'Toca (o haz clic en) una <b>tecnología</b> y después en <b>su definición</b>. También puedes <b>arrastrar</b> un cuadrado encima de su pareja (en tablet, mantén el dedo pulsado un momento y arrastra).',
    'Si aciertas, la pareja queda casada y pasa a «Tus parejas». Si fallas, se suma un error. Para terminar tienes que casar <b>las 50 tecnologías</b>.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Juega tú: el resultado tiene que ser tuyo.',
    'Lee bien cada definición antes de elegir: los errores, las pistas y el tiempo aparecen en el PDF.',
    'Tienes 5 pistas para todo el juego. Úsalas solo si te atascas.'
  ],
  entregaEj: [
    'Un único archivo PDF con el nombre UT2_E1_Apellido1_Apellido2_Nombre.pdf. Esta página lo genera con ese nombre al pulsar «Descargar PDF».',
    'Entrega por el aula virtual, en la tarea correspondiente. Ni por correo ni en papel.',
    'El PDF recoge las 50 parejas, los errores, las pistas usadas y el tiempo de juego.'
  ],
  entrega: [
    'El profesor indica en clase y en el Campus el momento recomendado para entregar cada tarea; es él quien decide cuándo se muestra u oculta cada ejercicio en el aula virtual.',
    'El alumnado con causa justificada documentalmente conserva la escala completa de 0 a 10 en la nueva fecha acordada.'
  ],
  criterios: [
    ['Juego · Parejas de tecnologías habilitadoras', 'Las 50 tecnologías casadas con su definición en las 5 rondas (2 puntos por ronda completa). Los errores, las pistas y el tiempo son informativos.', 10]
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
const ORDEN = ['af','as','ei','hb','is','ei_sp','is_sp','mc_sp'];

// ================= estilos del juego =================
document.head.insertAdjacentHTML('beforeend', `<style>
.jg-como{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem;margin:.6rem 0 1rem}
.jg-como div{background:var(--mint);border:1px solid var(--mint2);border-radius:14px;padding:.7rem .8rem;font-size:.9rem;line-height:1.35}
.jg-como b{display:block;color:var(--mint3);font-size:1.4rem;line-height:1.1;margin-bottom:.2rem}
.jg-centro{background:var(--sky);border:1px solid var(--sky2);border-radius:12px;padding:.6rem .8rem;font-size:.92rem}
.jg-stats{display:flex;flex-wrap:wrap;gap:.5rem;align-items:stretch;margin:.4rem 0 .6rem}
.jg-stat{flex:1 1 84px;background:var(--mint);border:1px solid var(--mint2);border-radius:12px;padding:.35rem .7rem}
.jg-stat small{display:block;font-size:.68rem;color:var(--mint3);font-weight:800;text-transform:uppercase;letter-spacing:.05em}
.jg-stat b{font-size:1.2rem;font-variant-numeric:tabular-nums}
.jg-stat.err b{color:#b8433f}
#jgPista{flex:0 0 auto;border-radius:12px;background:#fff6d4;border:1px solid #efcd5f;font-weight:700;padding:.35rem .9rem}
#jgPista:hover{background:#ffeeb0}
#jgPista:disabled{opacity:.45;cursor:not-allowed}
#jgPista span{display:inline-block;min-width:1.4rem;margin-left:.3rem;padding:0 .35rem;border-radius:99px;background:#efcd5f;color:#5a4300;font-size:.8rem}
.jg-dots{display:flex;gap:.4rem;list-style:none;padding:0;margin:.2rem 0 1rem}
.jg-dots li{flex:1;height:9px;border-radius:99px;background:var(--line);position:relative;overflow:hidden}
.jg-dots li i{position:absolute;left:0;top:0;bottom:0;width:var(--p);background:linear-gradient(90deg,var(--mint3),#4fb38a);border-radius:inherit;transition:width .45s}
.jg-dots li.act{box-shadow:0 0 0 2px var(--mint2)}
.jg-tab{position:relative;display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.75rem;min-height:180px}
.tl{position:relative;aspect-ratio:1;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem;margin:0;padding:.7rem;border-radius:18px;text-align:center;overflow:hidden;
  touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;-webkit-tap-highlight-color:transparent;
  transition:transform .18s,box-shadow .18s,opacity .25s,background .2s;animation:jgEntra .45s backwards;animation-delay:var(--d,0ms)}
.tl.tec{background:linear-gradient(155deg,#effaf4,#bfe8d3);border:2px solid var(--mint2);color:#1d4d38;box-shadow:0 4px 0 #9fd8bd}
.tl.tec .emo{font-size:2.3rem;line-height:1;filter:drop-shadow(0 2px 2px rgba(0,0,0,.12))}
.tl.tec b{font-size:.98rem;line-height:1.2}
.tl.def{background:#fff;border:2px solid var(--sky2);color:var(--ink);box-shadow:0 4px 0 var(--sky2);font-size:.84rem;line-height:1.32;padding-top:1.7rem}
.tl.def .lbl{position:absolute;top:.5rem;left:.7rem;font-size:.6rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--sky3)}
.tl.def .tx{flex:1;display:flex;align-items:center}
.tl:hover{background-color:inherit}
.tl.tec:hover{background:linear-gradient(155deg,#f4fcf8,#ccefdd)}
.tl.def:hover{background:#f7fbff}
@media (hover:hover){.tl:hover{transform:translateY(-3px)}}
.tl.sel{transform:translateY(-5px) scale(1.04) rotate(-1.2deg)!important;box-shadow:0 0 0 4px #ffcf4d,0 12px 22px rgba(47,45,58,.18);z-index:2}
.tl.diana{transform:scale(1.06)!important;box-shadow:0 0 0 4px var(--mint3),0 12px 22px rgba(47,45,58,.18);z-index:2}
.tl.origen{opacity:.3}
.tl.mal{animation:jgMal .45s;border-color:#e06666!important;background:#fdecec!important;box-shadow:0 4px 0 #f0a8a8}
.tl.ok{animation:jgOk .65s forwards;border-color:var(--mint3)!important;background:#c9f0dc!important;pointer-events:none}
.tl.pista{animation:jgPista .9s 3}
.tl.hueco{background:repeating-linear-gradient(45deg,transparent 0 8px,rgba(159,216,189,.18) 8px 16px);border:2px dashed var(--mint2);box-shadow:none;color:var(--mint3);font-size:1.5rem;font-weight:800;animation:jgHueco .35s backwards;pointer-events:none}
.tl.fantasma{position:fixed;z-index:300;pointer-events:none;animation:none;transform:rotate(3deg) scale(1.06);box-shadow:0 18px 34px rgba(0,0,0,.28);opacity:.96;transition:none}
@keyframes jgEntra{from{opacity:0;transform:translateY(14px) scale(.88)}to{opacity:1;transform:none}}
@keyframes jgHueco{from{opacity:0}to{opacity:1}}
@keyframes jgMal{0%,100%{transform:none}20%{transform:translateX(-8px) rotate(-2deg)}40%{transform:translateX(8px) rotate(2deg)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
@keyframes jgOk{0%{transform:scale(1)}35%{transform:scale(1.12) rotate(2deg)}100%{transform:scale(.15) rotate(-8deg);opacity:0}}
@keyframes jgPista{0%,100%{box-shadow:0 0 0 0 rgba(255,207,77,0)}50%{box-shadow:0 0 0 8px rgba(255,207,77,.95)}}
.jg-aviso{grid-column:1/-1;text-align:center;background:linear-gradient(135deg,var(--mint),#fff6d4);border:2px solid var(--mint2);border-radius:20px;padding:1.6rem 1rem;animation:jgEntra .5s backwards}
.jg-aviso .big{font-size:3.2rem;line-height:1;display:inline-block;animation:jgBote 1.2s ease-in-out infinite}
.jg-aviso h3{margin:.5rem 0 .3rem;font-size:1.35rem;color:#1d4d38}
.jg-aviso p{margin:.2rem 0;color:var(--muted)}
.jg-aviso .estrellas{font-size:1.7rem;letter-spacing:.15rem;margin:.3rem 0}
.jg-aviso button{margin-top:.8rem;background:var(--mint3);border-color:var(--mint3);color:#fff;font-weight:700;padding:.65rem 1.3rem;border-radius:12px;font-size:1rem}
.jg-aviso button:hover{background:var(--mint3);filter:brightness(.92)}
.jg-res{display:grid;grid-template-columns:repeat(auto-fit,minmax(110px,1fr));gap:.5rem;max-width:620px;margin:1rem auto .4rem}
.jg-res div{background:#fff;border:1px solid var(--mint2);border-radius:12px;padding:.5rem}
.jg-res small{display:block;font-size:.68rem;color:var(--mint3);font-weight:800;text-transform:uppercase;letter-spacing:.05em}
.jg-res b{font-size:1.25rem}
.jg-rondas{display:flex;flex-wrap:wrap;justify-content:center;gap:.4rem .9rem;margin:.6rem 0;font-size:.9rem;color:var(--muted)}
@keyframes jgBote{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
.jg-pill{position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;background:#2f2d3a;color:#fff;border-radius:99px;padding:.45rem .5rem .45rem 1rem;display:flex;gap:.6rem;align-items:center;box-shadow:0 10px 24px rgba(0,0,0,.25);max-width:calc(100vw - 24px);font-size:.9rem;animation:jgPillIn .25s backwards}
@keyframes jgPillIn{from{opacity:0;transform:translate(-50%,12px)}to{opacity:1;transform:translate(-50%,0)}}
.jg-pill[hidden]{display:none}
.jg-pill span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.jg-pill button{flex:none;background:rgba(255,255,255,.15);border:0;color:#fff;border-radius:99px;width:2rem;height:2rem;padding:0}
.jg-col{margin-top:1.2rem;border:1px solid var(--line);border-radius:14px;background:#fff}
.jg-col summary{cursor:pointer;padding:.7rem 1rem;font-weight:700;list-style:none;display:flex;justify-content:space-between;align-items:center}
.jg-col summary::-webkit-details-marker{display:none}
.jg-col summary::after{content:'▾';color:var(--muted);transition:transform .2s}
.jg-col[open] summary::after{transform:rotate(180deg)}
.jg-col .vacia{padding:0 1rem 1rem;color:var(--muted);margin:0}
.jg-col h4{margin:.4rem 1rem .2rem;font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;color:var(--mint3)}
.par{display:grid;grid-template-columns:2rem minmax(0,13rem) minmax(0,1fr);gap:.6rem;padding:.5rem 1rem;border-top:1px dashed var(--line);align-items:start;font-size:.92rem}
.par .emo{font-size:1.3rem;line-height:1.2}
.par b{color:#1d4d38}
.par.nuevo{animation:jgNuevo 1.4s}
@keyframes jgNuevo{0%{background:#c9f0dc}100%{background:transparent}}
.jg-confeti{position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:400}
@media (max-width:640px){
  .jg-como{grid-template-columns:1fr}
  .jg-stat{padding:.3rem .55rem}
  .jg-stat b{font-size:1.05rem}
  .jg-tab{grid-template-columns:repeat(2,minmax(0,1fr));gap:.55rem}
  .tl{padding:.55rem;border-radius:15px}
  .tl.tec .emo{font-size:1.9rem}
  .tl.tec b{font-size:.9rem}
  .tl.def{font-size:.78rem;line-height:1.28;padding-top:1.5rem}
  .par{grid-template-columns:1.8rem minmax(0,1fr)}
  .par span:last-child{grid-column:2}
}
@media (prefers-reduced-motion:reduce){.tl,.tl.ok,.tl.mal,.jg-aviso .big,.par.nuevo{animation:none!important;transition:none}}
</style>`);

// ================= textos de la página =================
function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>
    <h2 style="font-size:1.1rem">Cómo se juega</h2>
    <div class="jg-como"><div><b>1</b>Toca o haz clic en una <b style="display:inline;font-size:inherit">tecnología</b> (cuadrado verde).</div><div><b>2</b>Toca su <b style="display:inline;font-size:inherit">definición</b> (cuadrado blanco). O arrastra un cuadrado encima del otro.</div><div><b>3</b>¡Pareja casada! Completa las 5 rondas hasta casar las 50.</div></div>
    <div class="jg-centro">💭 Mientras juegas, piensa cuáles de estas tecnologías verías en ${esc(C.centro)}: te servirá para el E2.</div>`;
}

function construirTarea(C){
  return `<section class="fase f1"><header><h2>Juego · Casa cada tecnología con su definición</h2></header><div class="cuerpo">
    <input type="hidden" id="juegoDato" data-campo="juego">
    <div class="jg-stats">
      <div class="jg-stat"><small>Ronda</small><b id="jgR">1/5</b></div>
      <div class="jg-stat"><small>Parejas</small><b id="jgP">0/50</b></div>
      <div class="jg-stat err"><small>Errores</small><b id="jgE">0</b></div>
      <div class="jg-stat"><small>Tiempo</small><b id="jgT">0:00</b></div>
      <button type="button" id="jgPista" title="Ilumina una tecnología y su definición">💡 Pista<span id="jgPN">5</span></button>
    </div>
    <ol class="jg-dots" id="jgDots" aria-hidden="true"></ol>
    <div class="jg-tab" id="tablero" role="group" aria-label="Cuadrados del juego"></div>
    <details class="jg-col" id="jgCol" open><summary>📚 Tus parejas <span id="jgColN">0/50</span></summary><div id="coleccion"></div></details>
    <div class="jg-pill" id="jgPill" hidden role="status"><span id="jgPillTx"></span><button type="button" id="jgPillX" aria-label="Quitar la selección">✕</button></div>
  </div></section>`;
}

// ================= estado del juego (se guarda en el campo oculto «juego») =================
let J = null, ULT = null, SEL = null, ENTRE = false, MAPA = new Map(), SUPR = 0, ULTACC = 0, ARR = null, NUEVO = -1;
const barajar = a => { for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const jgNuevo = () => ({ v: 1, orden: barajar([...Array(NT).keys()]), hechas: [], er: [0,0,0,0,0], pi: 0, seg: 0, fin: 0 });
const entero = (n, max) => Number.isInteger(n) && n >= 0 && n < max;
function jgCargar(v){
  try {
    const o = JSON.parse(v);
    if (o && Array.isArray(o.orden) && o.orden.length === NT && new Set(o.orden).size === NT && o.orden.every(n => entero(n, NT))){
      const r = { v: 1, orden: o.orden, hechas: [], er: [0,0,0,0,0], pi: Math.min(MAX_PISTAS, +o.pi || 0), seg: +o.seg || 0, fin: +o.fin || 0 };
      if (Array.isArray(o.hechas)) r.hechas = [...new Set(o.hechas.filter(n => entero(n, NT)))];
      if (Array.isArray(o.er)) r.er = [0,1,2,3,4].map(i => Math.max(0, +o.er[i] || 0));
      return r;
    }
  } catch(e){}
  return jgNuevo();
}
const jgVacio = () => ({ orden: [...Array(NT).keys()], hechas: [], er: [0,0,0,0,0], pi: 0, seg: 0, fin: 0 });
const est = () => J || jgVacio();
function jgEscribir(){ const i = document.getElementById('juegoDato'); if (!i) return; ULT = JSON.stringify(J); i.value = ULT; }
const deRonda = (r, s = est()) => s.orden.slice(r * POR_RONDA, r * POR_RONDA + POR_RONDA);
const hechasRonda = (r, s = est()) => deRonda(r, s).filter(n => s.hechas.includes(n)).length;
const rondaAct = () => { for (let r = 0; r < RONDAS; r++) if (hechasRonda(r) < POR_RONDA) return r; return RONDAS - 1; };
const terminado = (s = est()) => s.hechas.length >= NT;
const totalErr = (s = est()) => s.er.reduce((a, b) => a + b, 0);
const mmss = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const estrellas = e => e <= 1 ? '⭐⭐⭐' : e <= 4 ? '⭐⭐' : '⭐';
const precision = (s = est()) => { const t = s.hechas.length + totalErr(s); return t ? Math.round(s.hechas.length / t * 100) : 0; };

// El motor llama a esto cada vez que algo cambia: si el estado guardado es otro (al abrir un borrador), se repinta
function alActualizar(){
  const i = document.getElementById('juegoDato'), t = document.getElementById('tablero'); if (!i || !t) return;
  if (!t.dataset.listo || i.value !== ULT){ J = jgCargar(i.value); jgEscribir(); t.dataset.listo = '1'; SEL = null; ENTRE = false; jgPintar(); }
}
function progresoPropio(){ const n = est().hechas.length; return { hechas: n, total: NT, texto: `${n} de ${NT} parejas casadas` }; }
function listaChecks(){
  return [0,1,2,3,4].map(r => { const h = hechasRonda(r); return { ok: h === POR_RONDA, t: `Ronda ${r + 1} · ${POR_RONDA} parejas casadas`, cuenta: `${h}/${POR_RONDA}`, falta: 'Termina esta ronda del juego.' }; });
}

// ================= pintar =================
function jgPintar(){ jgMarcador(); jgTablero(); jgColeccion(); }
function jgMarcador(){
  const s = est(), q = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  q('jgR', `${terminado() ? RONDAS : rondaAct() + 1}/${RONDAS}`); q('jgP', `${s.hechas.length}/${NT}`); q('jgE', totalErr()); q('jgT', mmss(s.seg));
  q('jgPN', MAX_PISTAS - s.pi); q('jgColN', `${s.hechas.length}/${NT}`);
  const p = document.getElementById('jgPista'); if (p) p.disabled = s.pi >= MAX_PISTAS || terminado() || ENTRE;
  const d = document.getElementById('jgDots');
  if (d) d.innerHTML = [0,1,2,3,4].map(r => `<li class="${!terminado() && !ENTRE && r === rondaAct() ? 'act' : ''}"><i style="--p:${hechasRonda(r) / POR_RONDA * 100}%"></i></li>`).join('');
}
function ficha(k, n, idx){
  const id = Math.random().toString(36).slice(2, 10); MAPA.set(id, { k, n });
  const [nom, def, emo] = TEC[n];
  return k === 't'
    ? `<button type="button" class="tl tec" data-k="t" data-id="${id}" style="--d:${idx * 30}ms" aria-label="Tecnología: ${esc(nom)}"><span class="emo" aria-hidden="true">${emo}</span><b>${esc(nom)}</b></button>`
    : `<button type="button" class="tl def" data-k="d" data-id="${id}" style="--d:${idx * 30}ms" aria-label="Definición: ${esc(def)}"><span class="lbl" aria-hidden="true">Definición</span><span class="tx">${esc(def)}</span></button>`;
}
function jgTablero(){
  const t = document.getElementById('tablero'); if (!t) return;
  MAPA = new Map(); jgSel(null);
  if (terminado()){ t.innerHTML = jgFinal(); return; }
  if (ENTRE){ t.innerHTML = jgEntreRondas(); return; }
  const quedan = deRonda(rondaAct()).filter(n => !est().hechas.includes(n));
  t.innerHTML = barajar([...quedan.map(n => ['t', n]), ...quedan.map(n => ['d', n])]).map(([k, n], i) => ficha(k, n, i)).join('');
}
function jgEntreRondas(){
  const r = rondaAct() - 1, e = est().er[r];
  return `<div class="jg-aviso" role="status"><span class="big" aria-hidden="true">🎉</span><h3>¡Ronda ${r + 1} superada!</h3>
    <div class="estrellas" aria-label="${estrellas(e).length / 2} estrellas">${estrellas(e)}</div>
    <p>${POR_RONDA} parejas casadas · ${e} ${e === 1 ? 'error' : 'errores'} en esta ronda</p>
    <p>Llevas ${est().hechas.length} de ${NT}. ¡A por la siguiente!</p>
    <button type="button" id="jgSig">Ronda ${r + 2} de ${RONDAS} →</button></div>`;
}
function jgFinal(){
  const s = est();
  return `<div class="jg-aviso" role="status"><span class="big" aria-hidden="true">🏆</span><h3>¡Has casado las ${NT} tecnologías!</h3>
    <p>Ya conoces para qué sirve cada una. Repásalas en «Tus parejas» y descarga el PDF para entregarlo.</p>
    <div class="jg-res"><div><small>Parejas</small><b>${s.hechas.length}/${NT}</b></div><div><small>Errores</small><b>${totalErr(s)}</b></div><div><small>Precisión</small><b>${precision(s)} %</b></div><div><small>Pistas</small><b>${s.pi}/${MAX_PISTAS}</b></div><div><small>Tiempo</small><b>${mmss(s.seg)}</b></div></div>
    <div class="jg-rondas">${[0,1,2,3,4].map(r => `<span>Ronda ${r + 1} ${estrellas(s.er[r])}</span>`).join('')}</div></div>`;
}
function jgColeccion(){
  const c = document.getElementById('coleccion'); if (!c) return;
  const s = est();
  if (!s.hechas.length){ c.innerHTML = '<p class="vacia">Aquí irán apareciendo las parejas que cases.</p>'; return; }
  let h = '';
  for (let r = RONDAS - 1; r >= 0; r--){
    const ns = s.hechas.filter(n => deRonda(r).includes(n)); if (!ns.length) continue;
    h += `<h4>Ronda ${r + 1}</h4>` + ns.slice().reverse().map(n => `<div class="par${n === NUEVO ? ' nuevo' : ''}"><span class="emo" aria-hidden="true">${TEC[n][2]}</span><b>${esc(TEC[n][0])}</b><span>${esc(TEC[n][1])}</span></div>`).join('');
  }
  c.innerHTML = h; NUEVO = -1;
}

// ================= jugar =================
function jgSel(el){
  if (SEL) SEL.classList.remove('sel');
  SEL = el; if (el) el.classList.add('sel');
  const p = document.getElementById('jgPill'); if (!p) return;
  if (!el){ p.hidden = true; return; }
  const d = MAPA.get(el.dataset.id);
  document.getElementById('jgPillTx').textContent = d.k === 't' ? `${TEC[d.n][2]} ${TEC[d.n][0]} → ahora toca su definición` : '📖 Definición elegida → ahora toca su tecnología';
  p.hidden = false;
}
function jgTocar(el){
  if (ENTRE || terminado()) return;
  if (!SEL) return jgSel(el);
  if (SEL === el) return jgSel(null);
  if (SEL.dataset.k === el.dataset.k) return jgSel(el);
  jgProbar(SEL, el);
}
function jgProbar(a, b){
  const A = MAPA.get(a.dataset.id), B = MAPA.get(b.dataset.id); jgSel(null);
  if (!A || !B || A.k === B.k || J.hechas.includes(A.n) || J.hechas.includes(B.n)) return;
  const r = rondaAct();
  if (A.n === B.n){
    J.hechas.push(A.n); NUEVO = A.n;
    // Fuera del juego al momento (aunque la animación siga): ya no se pueden volver a pulsar
    [a, b].forEach(x => { x.classList.add('ok'); x.removeAttribute('data-id'); x.disabled = true; x.setAttribute('aria-label', 'Pareja casada'); });
    setTimeout(() => [a, b].forEach(x => { x.className = 'tl hueco'; x.innerHTML = '✓'; }), 650);
    if (hechasRonda(r) === POR_RONDA){
      if (terminado()) J.fin = Date.now(); else ENTRE = true;
      setTimeout(() => { jgTablero(); jgMarcador(); confeti(terminado() ? 240 : 90); }, 720);
    }
  } else {
    J.er[r]++;
    [a, b].forEach(x => { x.classList.remove('mal'); void x.offsetWidth; x.classList.add('mal'); setTimeout(() => x.classList.remove('mal'), 460); });
    if (navigator.vibrate) try { navigator.vibrate(60); } catch(e){}
  }
  jgEscribir(); jgMarcador(); jgColeccion(); programarGuardado();
}
function jgPista(){
  if (!J || J.pi >= MAX_PISTAS || ENTRE || terminado()) return;
  const quedan = deRonda(rondaAct()).filter(n => !J.hechas.includes(n)); if (!quedan.length) return;
  const n = quedan[Math.floor(Math.random() * quedan.length)];
  document.querySelectorAll('#tablero .tl[data-id]').forEach(el => { const d = MAPA.get(el.dataset.id); if (d && d.n === n){ el.classList.remove('pista'); void el.offsetWidth; el.classList.add('pista'); setTimeout(() => el.classList.remove('pista'), 2800); } });
  J.pi++; jgEscribir(); jgMarcador(); programarGuardado();
}
function jgSiguiente(){ ENTRE = false; jgTablero(); jgMarcador(); document.getElementById('tablero').scrollIntoView({ behavior: 'smooth', block: 'start' }); }

// Clics y teclado (los cuadrados son botones: Intro o espacio también sirven)
document.addEventListener('click', e => {
  const el = e.target.closest('#tablero .tl[data-id]');
  if (el){ if (Date.now() < SUPR) return; ULTACC = Date.now(); jgTocar(el); return; }
  if (e.target.closest('#jgPista')){ ULTACC = Date.now(); jgPista(); }
  else if (e.target.closest('#jgSig')){ ULTACC = Date.now(); jgSiguiente(); }
  else if (e.target.closest('#jgPillX')) jgSel(null);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && SEL) jgSel(null); });

// Arrastrar: con ratón, en cuanto se mueve; con el dedo, tras mantener pulsado un momento (si no, se hace scroll)
document.addEventListener('pointerdown', e => {
  const el = e.target.closest('#tablero .tl[data-id]');
  if (!el || e.button > 0 || ENTRE || terminado()) return;
  ARR = { el, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, pid: e.pointerId, toque: e.pointerType !== 'mouse', activo: false };
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
  const g = el.cloneNode(true); g.classList.remove('sel'); g.classList.add('fantasma'); g.removeAttribute('data-id'); g.setAttribute('aria-hidden', 'true');
  g.style.width = r.width + 'px'; g.style.height = r.height + 'px'; g.style.left = '0'; g.style.top = '0';
  document.body.appendChild(g); ARR.g = g;
  jgSel(el); el.classList.add('origen');
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
  const t = document.elementFromPoint(ARR.x, ARR.y); const d = t && t.closest('#tablero .tl[data-id]');
  return d && d !== ARR.el && d.dataset.k !== ARR.el.dataset.k ? d : null;
}
function arrLimpiar(){
  if (ARR.g) ARR.g.remove(); ARR.el.classList.remove('origen'); if (ARR.sobre) ARR.sobre.classList.remove('diana');
  SUPR = Date.now() + 400;
}
function arrSoltar(){ const d = arrDiana(), el = ARR.el; arrLimpiar(); if (d) jgProbar(el, d); }

// Cronómetro: solo cuenta mientras se está jugando (página visible, tarea desbloqueada y con actividad en los últimos 90 s)
document.addEventListener('pointermove', () => { ULTACC = Date.now(); }, { passive: true });
document.addEventListener('scroll', () => { ULTACC = Date.now(); }, { passive: true });
setInterval(() => {
  if (!J || EJEMPLO || terminado() || ENTRE || document.hidden || Date.now() - ULTACC > 90000) return;
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
  texto([{ t: 'Parejas casadas: ', b: true }, { t: `${s.hechas.length} de ${NT}` }, { t: '     Rondas completas: ', b: true }, { t: `${[0,1,2,3,4].filter(r => hechasRonda(r, s) === POR_RONDA).length} de ${RONDAS}` }], { size: 10.5, tras: 1 });
  texto([{ t: 'Errores: ', b: true }, { t: String(totalErr(s)) }, { t: '     Precisión: ', b: true }, { t: precision(s) + ' %' }, { t: '     Pistas usadas: ', b: true }, { t: `${s.pi} de ${MAX_PISTAS}` }, { t: '     Tiempo de juego: ', b: true }, { t: mmss(s.seg) }], { size: 10.5, tras: 1 });
  P('Errores por ronda: ' + [0,1,2,3,4].map(r => `R${r + 1}: ${s.er[r]}`).join('  ·  '), { size: 9.5, color: COL.muted, tras: 2 });
  separador();
  for (let r = 0; r < RONDAS; r++){
    sitio(24); P(`Ronda ${r + 1}  ·  ${hechasRonda(r, s)}/${POR_RONDA} parejas`, { size: 11.5, b: true, color: COL.mint, tras: 2 });
    const ns = deRonda(r, s), hechas = s.hechas.filter(n => ns.includes(n)), faltan = ns.filter(n => !s.hechas.includes(n));
    let k = 1;
    for (const n of hechas) texto([{ t: TEC[n][0] + ': ', b: true }, { t: TEC[n][1] }], { size: 9.6, marca: (k++) + '.', tras: 0.6 });
    for (const n of faltan) texto([{ t: TEC[n][0] + ': ', b: true }, { t: '(pareja sin encontrar)', i: true }], { size: 9.6, marca: (k++) + '.', color: COL.muted, tras: 0.6 });
    separador();
  }
}

// ================= ejemplo relleno: juego terminado =================
function ejemploCampos(){
  return { juego: JSON.stringify({ v: 1, orden: [...Array(NT).keys()], hechas: [...Array(NT).keys()], er: [1,0,2,0,1], pi: 1, seg: 912, fin: 1 }) };
}
function ejemploRespuesta(){ return ''; }

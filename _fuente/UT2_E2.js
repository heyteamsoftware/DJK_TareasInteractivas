// ===== UT2_E2 · Diseñad vuestro robot (trabajo en grupo) =====
// Constructor de robots por piezas, como un puzle:
//   cabeza (antena + orejas + ojos), torso (3 módulos), brazos (de 2 a 4, una tecnología en cada uno) y movimiento.
//   23 piezas comunes + 10 propias de cada especialidad. Cada pieza cambia el aspecto del robot.
// Después: justificación del montaje, imagen del robot en su entorno hecha con IA y presentación en Canva.
// Lo que no es caja de texto se guarda en el campo oculto data-campo="robot" (JSON).

// Zonas del robot: color claro (relleno), oscuro (borde y texto)
const TIPOS = {
  antena:  { n: 'Antena',     zona: 'cabeza',  col: '#d9cff8', osc: '#6a54b8' },
  orejas:  { n: 'Orejas',     zona: 'cabeza',  col: '#f8d3e1', osc: '#a33c58' },
  ojos:    { n: 'Ojos',       zona: 'cabeza',  col: '#cfe0f7', osc: '#2f5f98' },
  torso:   { n: 'Torso',      zona: 'torso',   col: '#c9ecda', osc: '#2f7d5c' },
  brazo:   { n: 'Brazo',      zona: 'brazos',  col: '#fbd9c4', osc: '#a3532a' },
  piernas: { n: 'Movimiento', zona: 'piernas', col: '#f7e3a1', osc: '#7a5a00' }
};
const ZONAS = { cabeza: '🤖 Cabeza', torso: '🫁 Torso', brazos: '🦾 Brazos', piernas: '🦿 Movimiento' };

// Piezas comunes. v = cómo se dibuja en el robot
const COMUNES = [
  { id: 'c_5g',       t: 'antena',  v: 'parabolica', e: '📡', n: 'Antena 5G',                         d: 'Conectarse a internet a gran velocidad para enviar y recibir datos al instante.' },
  { id: 'c_gps',      t: 'antena',  v: 'varilla',    e: '🛰️', n: 'Localizador GPS',                   d: 'Saber dónde está el robot y guiarlo por una ruta.' },
  { id: 'c_baliza',   t: 'antena',  v: 'baliza',     e: '🚨', n: 'Baliza luminosa de avisos',         d: 'Avisar con luces de colores de su estado o de una alarma.' },
  { id: 'c_voz',      t: 'orejas',  v: 'micro',      e: '🎤', n: 'Micrófonos con reconocimiento de voz', d: 'Entender las órdenes que se le dan hablando.' },
  { id: 'c_altavoz',  t: 'orejas',  v: 'altavoz',    e: '🔊', n: 'Altavoces',                         d: 'Hablar, poner música o dar avisos en voz alta.' },
  { id: 'c_ultra',    t: 'orejas',  v: 'cono',       e: '🦇', n: 'Sensores de ultrasonidos',          d: 'Detectar obstáculos y medir distancias, como un murciélago.' },
  { id: 'c_vision',   t: 'ojos',    v: 'ciclope',    e: '📷', n: 'Cámara con visión artificial',      d: 'Reconocer objetos, personas y situaciones a partir de lo que ve.' },
  { id: 'c_facial',   t: 'ojos',    v: 'ojos',       e: '🙂', n: 'Reconocimiento facial',             d: 'Identificar a cada persona por su cara.' },
  { id: 'c_termica',  t: 'ojos',    v: 'visor',      e: '🌡️', n: 'Cámara térmica',                    d: 'Ver la temperatura de personas y objetos.' },
  { id: 'c_pantalla', t: 'torso',   v: 'panel',      e: '📱', n: 'Pantalla táctil',                   d: 'Mostrar información y que las personas interactúen tocándola.' },
  { id: 'c_ia',       t: 'torso',   v: 'panel',      e: '🧠', n: 'Inteligencia artificial',           d: 'Aprender de los datos y tomar decisiones por sí mismo.' },
  { id: 'c_nube',     t: 'torso',   v: 'panel',      e: '☁️', n: 'Conexión IoT con la nube',          d: 'Compartir datos con otros aparatos y guardarlos en la nube.' },
  { id: 'c_bateria',  t: 'torso',   v: 'panel',      e: '🔋', n: 'Batería con placas solares',        d: 'Funcionar muchas horas recargándose con la luz del sol.' },
  { id: 'c_nfc',      t: 'torso',   v: 'panel',      e: '💳', n: 'Lector de tarjetas NFC',            d: 'Identificar a personas u objetos al acercar una tarjeta o pulsera.' },
  { id: 'c_proyector',t: 'torso',   v: 'panel',      e: '📽️', n: 'Proyector',                         d: 'Proyectar imágenes y vídeos en una pared o en el suelo.' },
  { id: 'c_pinza',    t: 'brazo',   v: 'pinza',      e: '🦾', n: 'Pinza robótica',                    d: 'Coger y mover objetos con precisión.' },
  { id: 'c_mano',     t: 'brazo',   v: 'mano',       e: '🖐️', n: 'Mano con sensores táctiles',        d: 'Tocar con delicadeza y notar cuánta fuerza hace.' },
  { id: 'c_bandeja',  t: 'brazo',   v: 'bandeja',    e: '🍽️', n: 'Bandeja motorizada',                d: 'Llevar objetos de un sitio a otro sin que se caigan.' },
  { id: 'c_escaner',  t: 'brazo',   v: 'herramienta',e: '🔍', n: 'Escáner 3D',                        d: 'Escanear objetos o espacios y crear su modelo en 3D.' },
  { id: 'c_ruedas',   t: 'piernas', v: 'ruedas',     e: '🛞', n: 'Ruedas omnidireccionales',          d: 'Moverse en cualquier dirección por suelos lisos.' },
  { id: 'c_orugas',   t: 'piernas', v: 'orugas',     e: '🚜', n: 'Orugas todoterreno',                d: 'Subir rampas y moverse por terreno irregular.' },
  { id: 'c_piernas',  t: 'piernas', v: 'piernas',    e: '🦿', n: 'Piernas con sensores de equilibrio', d: 'Caminar y subir escaleras sin caerse.' },
  { id: 'c_dron',     t: 'piernas', v: 'dron',       e: '🚁', n: 'Hélices de dron',                   d: 'Volar para llegar a sitios altos o lejanos.' }
];

const COMUN = {
  codigo: 'UT2_E2',
  codigoAntes: 'UT2_E4',   // antes era el UT2 · E4: se recuperan los borradores guardados con ese código
  corto: 'UT2 · E2',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT2 · Tecnologías habilitadoras digitales',
  ejercicio: 'E2 · Diseñad vuestro robot',
  ra: 'RA2',
  ce: 'b, g',
  modalidad: 'En grupo · presencial',
  sinFuentes: true,
  raTexto: 'Caracteriza las tecnologías habilitadoras digitales necesarias para la adecuación/transformación de las empresas a entornos digitales describiendo sus características y aplicaciones.',
  ceTextos: [
    ['b', 'Se han relacionado las THD con el desarrollo de productos y servicios.'],
    ['g', 'Se ha elaborado un informe que relacione las tecnologías con sus características y áreas de aplicación.']
  ],
  objetivo: 'En grupo, vais a diseñar un robot para vuestro centro de trabajo. Lo montaréis pieza a pieza, como un puzle: cada pieza es una tecnología, y tenéis que elegir las que mejor resuelven el reto de vuestra especialidad. Después justificaréis el montaje, crearéis con IA una imagen del robot trabajando en vuestro centro y lo presentaréis en Canva.',
  pasos: [
    '<b>En grupo:</b> montad vuestro robot (3 tecnologías en la cabeza, 3 en el torso, una en cada brazo y una para moverse), justificad el montaje y cread con IA una imagen del robot en vuestro centro de trabajo.',
    'Descargad el robot como imagen y preparad la presentación en <b>Canva</b> con esa imagen y la de IA. La presentación es lo que se entrega en el aula virtual y lo que expondréis en clase.'
  ],
  normas: [
    'Cada pieza tiene que tener sentido en vuestra especialidad: no vale poner tecnologías porque sí.',
    'Escribid con vuestras palabras (pegar texto está desactivado) y decid qué herramienta de IA habéis usado para la imagen.'
  ],
  criterios: [
    ['Montaje del robot', 'Robot completo (cabeza, torso, brazos y movimiento) con tecnologías que encajan con el reto de vuestra especialidad.', 3],
    ['Justificación del montaje', 'Explicación clara de para qué sirve el robot, por qué lleva esas piezas, quién lo usaría y qué ventajas y riesgos tiene.', 3],
    ['Imagen con IA', 'Imagen del robot trabajando en el entorno de vuestra especialidad, coherente con las piezas que habéis montado.', 2],
    ['Presentación en Canva y exposición', 'Presentación clara y visual que incluye la imagen del robot de esta tarea; exposición en grupo.', 2]
  ],
  siglas: [
    ['THD', 'Tecnologías habilitadoras digitales'],
    ['IA', 'Inteligencia artificial'],
    ['IoT', 'Internet of Things: internet de las cosas'],
    ['GPS', 'Global Positioning System: sistema de posicionamiento global'],
    ['NFC', 'Near Field Communication: comunicación de campo cercano (acercar una tarjeta o el móvil)'],
    ['5G', 'Quinta generación de telefonía móvil'],
    ['DEA', 'Desfibrilador externo automático'],
    ['CO2', 'Dióxido de carbono'],
    ['PNG', 'Formato de imagen']
  ]
};

// Cada especialidad: su reto, su entorno (para la imagen con IA) y 10 piezas propias
const CICLOS = {
  af: { nombre: 'Acondicionamiento Físico',
    reto: 'Vuestro centro de acondicionamiento físico quiere un robot que ayude a los entrenadores y a los usuarios: que acompañe los entrenamientos, mida el progreso y cuide la seguridad en la sala.',
    entorno: 'la sala de entrenamiento de un gimnasio, con máquinas, pesas y personas entrenando con su entrenador',
    piezas: [
      { id: 'af_relojes',  t: 'antena',  v: 'varilla',    e: '⌚', n: 'Conexión con relojes deportivos',   d: 'Recibir el pulso y la actividad de los relojes de los usuarios.' },
      { id: 'af_coach',    t: 'orejas',  v: 'altavoz',    e: '📣', n: 'Voz de entrenador',                 d: 'Dar ánimos, contar repeticiones y marcar el ritmo.' },
      { id: 'af_postura',  t: 'ojos',    v: 'visor',      e: '🎥', n: 'Cámara de análisis del movimiento', d: 'Analizar la técnica de cada ejercicio y corregir la postura.' },
      { id: 'af_bascula',  t: 'torso',   v: 'panel',      e: '⚖️', n: 'Báscula de bioimpedancia',          d: 'Medir el peso, la grasa y el músculo del usuario.' },
      { id: 'af_bebida',   t: 'torso',   v: 'panel',      e: '🥤', n: 'Dispensador de bebidas',            d: 'Dar agua o bebida isotónica durante el entrenamiento.' },
      { id: 'af_plan',     t: 'torso',   v: 'panel',      e: '📊', n: 'Planificador de entrenamientos',    d: 'Crear y ajustar el plan de cada usuario según su progreso.' },
      { id: 'af_dea',      t: 'brazo',   v: 'herramienta',e: '🫀', n: 'Desfibrilador (DEA)',               d: 'Atender una parada cardíaca dando la descarga y guiando con la voz.' },
      { id: 'af_masaje',   t: 'brazo',   v: 'mano',       e: '💆', n: 'Brazo de masaje',                   d: 'Dar masajes de recuperación después del esfuerzo.' },
      { id: 'af_pelotas',  t: 'brazo',   v: 'herramienta',e: '🎾', n: 'Lanzador de pelotas',               d: 'Lanzar pelotas para entrenar reflejos y coordinación.' },
      { id: 'af_correr',   t: 'piernas', v: 'piernas',    e: '🏃', n: 'Piernas de carrera',                d: 'Acompañar a correr marcando el ritmo.' }
    ] },
  as: { nombre: 'Animación Sociodeportiva',
    reto: 'Vuestra empresa de animación sociodeportiva necesita un robot que ayude a organizar y dinamizar actividades: juegos, competiciones, rutas y campamentos, para todas las edades.',
    entorno: 'una actividad deportiva al aire libre en un parque o una playa de Canarias, con un grupo de participantes y sus monitores',
    piezas: [
      { id: 'as_walkie',   t: 'antena',  v: 'varilla',    e: '📻', n: 'Emisora con los monitores',         d: 'Comunicarse con los monitores durante las rutas y excursiones.' },
      { id: 'as_megafono', t: 'orejas',  v: 'altavoz',    e: '📢', n: 'Megáfono',                          d: 'Dar instrucciones a grupos grandes al aire libre.' },
      { id: 'as_camara',   t: 'ojos',    v: 'ciclope',    e: '🎬', n: 'Cámara de grabación deportiva',     d: 'Grabar las actividades para repasarlas o compartirlas.' },
      { id: 'as_marcador', t: 'torso',   v: 'panel',      e: '🔢', n: 'Marcador electrónico',              d: 'Mostrar resultados y tiempos de los juegos.' },
      { id: 'as_botiquin', t: 'torso',   v: 'panel',      e: '⛑️', n: 'Botiquín inteligente',              d: 'Dar primeros auxilios con instrucciones paso a paso.' },
      { id: 'as_pulseras', t: 'torso',   v: 'panel',      e: '🎟️', n: 'Lector de pulseras',  d: 'Pasar lista y controlar quién entra en cada actividad.' },
      { id: 'as_balones',  t: 'brazo',   v: 'herramienta',e: '⚽', n: 'Lanzador de balones',               d: 'Lanzar balones para juegos y entrenamientos.' },
      { id: 'as_silbato',  t: 'brazo',   v: 'herramienta',e: '⏱️', n: 'Silbato y cronómetro',              d: 'Arbitrar los juegos y medir los tiempos.' },
      { id: 'as_foco',     t: 'brazo',   v: 'herramienta',e: '🔦', n: 'Foco de luz',                       d: 'Iluminar actividades nocturnas y acampadas.' },
      { id: 'as_arena',    t: 'piernas', v: 'orugas',     e: '🏖️', n: 'Orugas para arena y montaña',      d: 'Moverse por la playa, el césped o un sendero.' }
    ] },
  ei: { nombre: 'Educación Infantil',
    reto: 'Vuestra escuela infantil quiere un robot que ayude a las educadoras en el día a día del aula de 0 a 6 años: juego, rutinas, cuidado y comunicación con las familias, siempre con un adulto presente.',
    entorno: 'un aula de educación infantil luminosa, con alfombra de juegos, juguetes y niños pequeños con su educadora',
    piezas: [
      { id: 'ei_familias', t: 'antena',  v: 'parabolica', e: '📲', n: 'Avisos a las familias',             d: 'Enviar fotos y avisos del día a las familias.' },
      { id: 'ei_cuentos',  t: 'orejas',  v: 'altavoz',    e: '📖', n: 'Narrador de cuentos y canciones',   d: 'Contar cuentos y cantar canciones con distintas voces.' },
      { id: 'ei_emociones',t: 'ojos',    v: 'ojos',       e: '😊', n: 'Ojos que muestran emociones',       d: 'Poner caras para enseñar a reconocer las emociones.' },
      { id: 'ei_co2',      t: 'torso',   v: 'panel',      e: '🌬️', n: 'Medidor de CO2',                    d: 'Avisar cuando hay que ventilar el aula.' },
      { id: 'ei_picto',    t: 'torso',   v: 'panel',      e: '🖼️', n: 'Pantalla de pictogramas',           d: 'Explicar las rutinas del día con imágenes.' },
      { id: 'ei_siesta',   t: 'torso',   v: 'panel',      e: '😴', n: 'Vigilante de la siesta',            d: 'Vigilar la respiración durante la siesta y avisar a la educadora.' },
      { id: 'ei_pinturas', t: 'brazo',   v: 'herramienta',e: '🖍️', n: 'Brazo de dibujo y pintura',         d: 'Dibujar y pintar junto a los niños.' },
      { id: 'ei_burbujas', t: 'brazo',   v: 'herramienta',e: '🫧', n: 'Máquina de burbujas',               d: 'Hacer burbujas para juegos de psicomotricidad.' },
      { id: 'ei_termo',    t: 'brazo',   v: 'herramienta',e: '🌡️', n: 'Termómetro sin contacto',           d: 'Tomar la temperatura sin molestar.' },
      { id: 'ei_base',     t: 'piernas', v: 'ruedas',     e: '🧸', n: 'Base blanda antichoques',           d: 'Moverse despacio con parachoques blandos para no hacer daño.' }
    ] },
  hb: { nombre: 'Higiene Bucodental',
    reto: 'Vuestra clínica dental quiere un robot que ayude al equipo de higiene bucodental: recibir y tranquilizar a los pacientes, apoyar en el gabinete y mejorar la educación en salud oral.',
    entorno: 'el gabinete de una clínica dental moderna, con el sillón dental, una higienista y un paciente',
    piezas: [
      { id: 'hb_citas',    t: 'antena',  v: 'varilla',    e: '📅', n: 'Recordatorio de citas',             d: 'Enviar recordatorios de las citas a los pacientes.' },
      { id: 'hb_calma',    t: 'orejas',  v: 'altavoz',    e: '🎶', n: 'Música y guía de respiración',      d: 'Calmar a los pacientes con ansiedad dental.' },
      { id: 'hb_intraoral',t: 'ojos',    v: 'ciclope',    e: '🦷', n: 'Cámara intraoral',                  d: 'Ver el interior de la boca y mostrarlo en la pantalla.' },
      { id: 'hb_esteril',  t: 'torso',   v: 'panel',      e: '♨️', n: 'Esterilizador con registro',        d: 'Esterilizar el instrumental y registrar cada ciclo.' },
      { id: 'hb_historia', t: 'torso',   v: 'panel',      e: '📋', n: 'Historia clínica digital',          d: 'Consultar la historia del paciente al instante.' },
      { id: 'hb_cepillado',t: 'torso',   v: 'panel',      e: '🪥', n: 'Vídeos de cepillado',  d: 'Enseñar a cepillarse con vídeos y juegos.' },
      { id: 'hb_aspirador',t: 'brazo',   v: 'herramienta',e: '💨', n: 'Aspirador de saliva',               d: 'Aspirar la saliva durante el tratamiento.' },
      { id: 'hb_luz',      t: 'brazo',   v: 'herramienta',e: '💡', n: 'Lámpara de polimerización',         d: 'Endurecer con luz los selladores y empastes.' },
      { id: 'hb_escaner',  t: 'brazo',   v: 'herramienta',e: '🔬', n: 'Escáner intraoral 3D',              d: 'Tomar la forma de los dientes en 3D sin pasta de impresión.' },
      { id: 'hb_silencio', t: 'piernas', v: 'ruedas',     e: '🪑', n: 'Ruedas silenciosas',                d: 'Moverse sin ruido alrededor del sillón dental.' }
    ] },
  is: { nombre: 'Integración Social',
    reto: 'Vuestro centro de día quiere un robot que apoye a los profesionales en la atención a personas mayores o con diversidad funcional: autonomía, comunicación, seguridad y actividades.',
    entorno: 'la sala de actividades de un centro de día, con personas mayores haciendo actividades y un integrador social',
    piezas: [
      { id: 'is_sos',      t: 'antena',  v: 'baliza',     e: '🆘', n: 'Botón SOS de teleasistencia',       d: 'Pedir ayuda al instante si hay una emergencia.' },
      { id: 'is_audifono', t: 'orejas',  v: 'micro',      e: '🦻', n: 'Amplificador de voz',               d: 'Amplificar la voz para personas con pérdida auditiva.' },
      { id: 'is_caidas',   t: 'ojos',    v: 'visor',      e: '🧓', n: 'Detector de caídas',                d: 'Detectar si una persona se cae y avisar.' },
      { id: 'is_comunica', t: 'torso',   v: 'panel',      e: '💬', n: 'Comunicador con pictogramas',       d: 'Ayudar a comunicarse a quien no puede hablar.' },
      { id: 'is_pastillas',t: 'torso',   v: 'panel',      e: '💊', n: 'Pastillero inteligente',            d: 'Recordar y dar la medicación a su hora.' },
      { id: 'is_memoria',  t: 'torso',   v: 'panel',      e: '🧩', n: 'Juegos de memoria',  d: 'Ejercitar la memoria y la atención con juegos.' },
      { id: 'is_apoyo',    t: 'brazo',   v: 'mano',       e: '🤝', n: 'Brazo de apoyo',                    d: 'Ayudar a levantarse o sentarse con seguridad.' },
      { id: 'is_tension',  t: 'brazo',   v: 'herramienta',e: '🩺', n: 'Tensiómetro',                       d: 'Medir la tensión y el pulso.' },
      { id: 'is_acerca',   t: 'brazo',   v: 'pinza',      e: '🧺', n: 'Brazo que acerca objetos',          d: 'Alcanzar y acercar objetos a quien no llega.' },
      { id: 'is_paseo',    t: 'piernas', v: 'piernas',    e: '🚶', n: 'Piernas de paseo',                  d: 'Acompañar los paseos al ritmo de la persona.' }
    ] }
};
// Solo presencial: los ciclos semipresenciales tienen su propio ejercicio de la unidad (UTn_SP)
const ORDEN = ['af','as','ei','hb','is'];

// ================= estilos =================
document.head.insertAdjacentHTML('beforeend', `<style>
.rb-reto{background:var(--mint);border:1px solid var(--mint2);border-radius:14px;padding:.8rem 1rem;margin:.6rem 0}
.rb-reto b{display:block;color:var(--mint3);font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.2rem}
.rb-taller{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(0,1fr);gap:1rem;align-items:start;margin-top:.8rem}
.rb-escena{position:sticky;top:96px;background:radial-gradient(circle at 50% 30%,#ffffff,#e4f5ec 70%);border:2px solid var(--mint2);border-radius:18px;padding:.6rem}
#rbSvg{width:100%;height:auto;display:block;max-height:68vh;touch-action:manipulation;user-select:none;-webkit-user-select:none}
.rb-estado{display:flex;flex-wrap:wrap;gap:.35rem;justify-content:center;margin:.3rem 0 .2rem}
.rb-estado span{font-size:.78rem;font-weight:700;border-radius:99px;padding:.15rem .6rem;background:#fff;border:1px solid var(--line);color:var(--muted)}
.rb-estado span.ok{background:#dff3ea;border-color:var(--mint2);color:var(--mint3)}
.rb-ctrl{display:flex;flex-wrap:wrap;gap:.5rem;align-items:center;justify-content:center;margin-top:.4rem}
.rb-ctrl .brz{display:flex;align-items:center;gap:.4rem;font-weight:700;font-size:.92rem}
.rb-ctrl .brz button{width:40px;height:40px;border-radius:50%;padding:0;font-size:1.2rem;font-weight:800}
.rb-ctrl .brz b{min-width:1.2rem;text-align:center}
#rbPNG{background:var(--mint3);border-color:var(--mint3);color:#fff;font-weight:700;border-radius:12px;padding:.55rem 1rem;min-height:44px}
#rbPNG:hover{filter:brightness(.92);background:var(--mint3)}
.rb-almacen h3{margin:.2rem 0 .4rem;font-size:1rem}
.rb-tabs{display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:.6rem}
.rb-tabs button{border-radius:99px;padding:.35rem .8rem;font-size:.85rem;font-weight:700;min-height:40px}
.rb-tabs button.on{background:var(--mint3);border-color:var(--mint3);color:#fff}
.rb-piezas{display:grid;grid-template-columns:repeat(auto-fill,minmax(132px,1fr));gap:.6rem .8rem;max-height:62vh;overflow:auto;padding:.3rem .5rem .5rem .8rem}
.pz{position:relative;display:flex;flex-direction:column;align-items:flex-start;gap:.15rem;text-align:left;padding:.55rem .6rem .5rem .75rem;border-radius:12px;background:var(--c);border:2px solid var(--o);color:#2f2d3a;min-height:44px;
  touch-action:manipulation;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;transition:transform .15s,box-shadow .15s,opacity .2s}
.pz::before{content:'';position:absolute;left:-10px;top:50%;width:16px;height:16px;margin-top:-8px;border-radius:50%;background:var(--c);border:2px solid var(--o);clip-path:inset(0 45% 0 0)}
.pz::after{content:'';position:absolute;right:-2px;top:50%;width:12px;height:12px;margin-top:-6px;border-radius:50%;background:#fff;border:2px solid var(--o);clip-path:inset(0 0 0 45%)}
.pz:hover{background:var(--c);transform:translateY(-2px)}
.pz .e{font-size:1.5rem;line-height:1}
.pz b{font-size:.84rem;line-height:1.2}
.pz small{font-size:.68rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;color:var(--o)}
.pz.sel{box-shadow:0 0 0 4px #ffcf4d,0 8px 16px rgba(0,0,0,.15);transform:translateY(-3px)}
.pz.usada{opacity:.42}
.pz.usada::after{content:'✓';clip-path:none;width:auto;height:auto;border:0;background:none;right:.5rem;top:.9rem;margin:0;font-weight:900;color:var(--o)}
.pz.fantasma{position:fixed;z-index:300;pointer-events:none;box-shadow:0 16px 30px rgba(0,0,0,.25);transform:rotate(3deg) scale(1.05);transition:none}
.pz.origen{opacity:.3}
.rb-pill{position:fixed;left:50%;bottom:max(14px,env(safe-area-inset-bottom));transform:translateX(-50%);z-index:60;background:#2f2d3a;color:#fff;border-radius:99px;padding:.4rem .45rem .4rem 1rem;display:flex;gap:.5rem;align-items:center;box-shadow:0 10px 24px rgba(0,0,0,.25);max-width:calc(100vw - 24px);font-size:.9rem}
.rb-pill[hidden]{display:none}
.rb-pill span{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.rb-pill button{flex:none;background:rgba(255,255,255,.16);border:0;color:#fff;border-radius:99px;min-height:36px;padding:0 .8rem;font-weight:700}
.rb-lista{margin-top:1rem;border:1px solid var(--line);border-radius:14px;background:#fff;overflow:hidden}
.rb-lista h4{margin:0;padding:.55rem 1rem;background:var(--mint);color:var(--mint3);font-size:.85rem;text-transform:uppercase;letter-spacing:.05em}
.rb-lista div{display:grid;grid-template-columns:2rem minmax(0,11rem) minmax(0,1fr);gap:.6rem;padding:.45rem 1rem;border-top:1px dashed var(--line);font-size:.9rem;align-items:start}
.rb-lista div:first-of-type{border-top:0}
.rb-lista em{font-style:normal;color:var(--muted)}
.rb-lista .falta{color:#b8433f;font-weight:600}
.rb-ia{width:100%;border-collapse:collapse;margin:.6rem 0;font-size:.9rem}
.rb-ia th,.rb-ia td{border:1px solid var(--line);padding:.45rem .6rem;text-align:left;vertical-align:top}
.rb-ia th{background:var(--mint);color:var(--mint3)}
.rb-prompt{background:#fbfaff;border:1px dashed var(--lav2);border-radius:12px;padding:.7rem .9rem;margin:.6rem 0;font-size:.92rem}
.rb-prompt p{margin:.3rem 0 .5rem}
.rb-canva{counter-reset:d;list-style:none;padding:0;display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:.5rem}
.rb-canva li{background:#fff;border:2px solid var(--mint2);border-radius:12px;padding:.55rem .7rem;font-size:.88rem;aspect-ratio:16/10;display:flex;flex-direction:column;gap:.2rem}
.rb-canva li::before{counter-increment:d;content:'Diapositiva ' counter(d);font-size:.68rem;font-weight:800;text-transform:uppercase;color:var(--mint3)}
#rbSvg .slot{cursor:pointer}
#rbSvg .slot .ghost{transition:opacity .2s}
#rbSvg .slot.apto .ghost{animation:rbLatido 1s ease-in-out infinite}
#rbSvg .slot.diana .parte,#rbSvg .slot.diana .ghost{filter:drop-shadow(0 0 6px #2f7d5c)}
#rbSvg .slot.sel .parte,#rbSvg .slot.sel .ghost{filter:drop-shadow(0 0 5px #f0b400)}
#rbSvg .slot.mal{animation:rbTiembla .4s}
#rbSvg .slot.nuevo .parte{animation:rbEncaja .5s ease-out}
#rbSvg .slot .parte,#rbSvg .slot{transform-box:fill-box;transform-origin:center}
@keyframes rbLatido{0%,100%{opacity:1}50%{opacity:.45}}
@keyframes rbTiembla{0%,100%{transform:none}25%{transform:translateX(-6px)}75%{transform:translateX(6px)}}
@keyframes rbEncaja{0%{transform:scale(.55);opacity:.2}70%{transform:scale(1.08);opacity:1}100%{transform:scale(1)}}
@media (max-width:820px){
  .rb-taller{grid-template-columns:1fr}
  .rb-escena{position:relative;top:auto}
  #rbSvg{max-height:none}
  .rb-piezas{max-height:none;overflow:visible}
}
@media (max-width:560px){
  .rb-piezas{grid-template-columns:repeat(2,minmax(0,1fr))}
  .rb-lista div{grid-template-columns:1.8rem minmax(0,1fr)}
  .rb-lista div em{grid-column:2}
}
@media (prefers-reduced-motion:reduce){#rbSvg .slot,#rbSvg .slot .parte,#rbSvg .slot .ghost{animation:none!important}}
</style>`);

// ================= textos de la página =================
let CC = null;   // ciclo actual (se fija al construir la tarea)
// Semipresencial: trabajo individual (CICLOS[x].individual): textos en singular, sin integrantes ni presentación en Canva
const IND = () => !!(CC && CC.individual);
const T = (pl, sg) => IND() ? sg : pl;
// Comunes y propias de la especialidad, mezcladas por orden alfabético y sin marca: el alumno no sabe cuáles son las propias
const piezasDe = C => [...COMUNES, ...C.piezas].sort((a, b) => a.n.localeCompare(b.n, 'es'));
const pieza = id => CC && piezasDe(CC).find(p => p.id === id);
const textoDe = id => { const ed = edDeId(id); return ed ? ed.textContent.replace(/\s+/g, ' ').trim() : ''; };

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>
    <div class="rb-reto"><b>Vuestro reto · ${esc(C.nombre)}</b>${esc(C.reto)}</div>`;
}

function construirTarea(C){
  CC = C;
  const servicios = [
    ['Canva · «Magic Media» (texto a imagen)', T('Dentro de la misma Canva donde haréis la presentación. Con la cuenta de Canva para Educación es gratis.', 'Con la cuenta de Canva para Educación es gratis.'), 'https://www.canva.com/'],
    ['Microsoft Designer / Copilot', 'Gratis con una cuenta de Microsoft.', 'https://designer.microsoft.com/'],
    ['Adobe Firefly', 'Gratis con una cuenta de Adobe, con un número limitado de imágenes al mes.', 'https://firefly.adobe.com/'],
    ['Google Gemini', 'Gratis con una cuenta de Google: se le pide la imagen en el chat.', 'https://gemini.google.com/'],
    ['Ideogram', 'Plan gratuito con imágenes cada día; escribe bien los textos dentro de la imagen.', 'https://ideogram.ai/']
  ];
  return `
  <section class="fase f1"><header><h2>${T('Parte 1 · Vuestro equipo y vuestro reto', 'Parte 1 · Tu reto')}</h2></header><div class="cuerpo">
    <div class="rb-reto"><b>El reto</b>${esc(C.reto)}</div>
    ${IND() ? '' : caja('grupo', '1.1', 'Integrantes del grupo', '<div class="pista">Nombre y apellidos de cada persona del grupo.</div>', { corta: true, ph: 'Nombre y apellidos de cada integrante…' })}
  </div></section>

  <section class="fase f2"><header><h2>${T('Parte 2 · Montad vuestro robot', 'Parte 2 · Monta tu robot')}</h2></header><div class="cuerpo">
    ${caja('nombre', '2.1', 'Nombre del robot', '', { corta: true, ph: T('Inventad un nombre…', 'Inventa un nombre…') })}
    <p><b>2.2 · Montaje.</b> ${T('Elegid una pieza del almacén y tocad su sitio en el robot (o arrastradla encima, como en un puzle; en tablet, mantened el dedo pulsado un momento).', 'Elige una pieza del almacén y toca su sitio en el robot (o arrástrala encima, como en un puzle; en tablet, mantén el dedo pulsado un momento).')} Cada pieza solo encaja en su zona: <b>3 en la cabeza</b> (antena, orejas y ojos), <b>3 en el torso</b>, <b>una en cada brazo</b> (${T('podéis', 'puedes')} poner de 2 a 4 brazos) y <b>una para moverse</b>.</p>
    <input type="hidden" id="rbDato" data-campo="robot">
    <div class="rb-taller">
      <div class="rb-escena">
        <svg id="rbSvg" viewBox="0 0 400 520" role="img" aria-label="${T('Vuestro robot', 'Tu robot')}"></svg>
        <div class="rb-estado" id="rbEstado"></div>
        <div class="rb-ctrl">
          <div class="brz">Brazos: <button type="button" id="rbMenos" aria-label="Quitar un brazo">−</button><b id="rbNB">2</b><button type="button" id="rbMas" aria-label="Añadir un brazo">+</button></div>
          <button type="button" id="rbPNG">⬇ Descargar robot (imagen)</button>
        </div>
      </div>
      <div class="rb-almacen" id="rbAlmacen">
        <h3>Almacén de piezas</h3>
        <div class="rb-tabs" role="tablist">${[['todas', 'Todas'], ['cabeza', ZONAS.cabeza], ['torso', ZONAS.torso], ['brazos', ZONAS.brazos], ['piernas', ZONAS.piernas]].map(([k, t]) => `<button type="button" data-filtro="${k}" class="${k === 'todas' ? 'on' : ''}">${t}</button>`).join('')}</div>
        <div class="rb-piezas" id="rbPiezas"></div>
      </div>
    </div>
    <div class="rb-lista" id="rbLista"></div>
  </div></section>

  <section class="fase f3"><header><h2>${T('Parte 3 · Justificad el montaje', 'Parte 3 · Justifica el montaje')}</h2></header><div class="cuerpo">
    ${caja('justificacion', '3.1', 'Justificación del robot', '<div class="pista">' + T('Explicad para qué sirve vuestro robot en el centro, por qué habéis elegido esas piezas y no otras, quién lo usaría y en qué momentos, y qué ventajas y qué riesgos tiene.', 'Explica para qué sirve tu robot en el centro, por qué has elegido esas piezas y no otras, quién lo usaría y en qué momentos, y qué ventajas y qué riesgos tiene.') + '</div>', { ph: T('Escribid aquí vuestra justificación…', 'Escribe aquí tu justificación…') })}
  </div></section>

  <section class="fase f4"><header><h2>${T('Parte 4 · Vuestro robot en su entorno, con IA', 'Parte 4 · Tu robot en su entorno, con IA')}</h2></header><div class="cuerpo">
    <p>${T('Cread con inteligencia artificial una imagen de vuestro robot', 'Crea con inteligencia artificial una imagen de tu robot')} <b>trabajando en ${esc(C.entorno)}</b>. ${T('Tiene que parecerse al que habéis montado', 'Tiene que parecerse al que has montado')} (mismas piezas). Algunas herramientas gratuitas:</p>
    <table class="rb-ia"><thead><tr><th>Herramienta</th><th>Cómo es gratis</th></tr></thead><tbody>${servicios.map(s => `<tr><td><a href="${s[2]}" target="_blank" rel="noopener">${esc(s[0])} ↗</a></td><td>${esc(s[1])}</td></tr>`).join('')}</tbody></table>
    <p class="pista">Las condiciones gratuitas de estos servicios cambian a menudo: ${T('si una no os deja, probad con otra.', 'si una no te deja, prueba con otra.')}</p>
    <div class="rb-prompt"><b>✨ Descripción para la IA (hecha con ${T('vuestras', 'tus')} piezas)</b><p id="rbPrompt"></p><button type="button" id="rbCopiar">📋 Copiar descripción</button></div>
    ${caja('imagen_ia', '4.1', 'Imagen creada con IA', '<div class="pista">' + T('Pegad aquí la imagen (Ctrl+V) o arrastradla.', 'Pega aquí la imagen (Ctrl+V) o arrástrala.') + '</div>', { ph: T('Pegad o arrastrad aquí la imagen…', 'Pega o arrastra aquí la imagen…') })}
    ${caja('herramienta', '4.2', T('Herramienta usada y descripción que le escribisteis', 'Herramienta usada y descripción que le escribiste'), '', { ph: T('Herramienta y texto (prompt) que usasteis…', 'Herramienta y texto (prompt) que usaste…') })}
  </div></section>

  ${IND() ? '' : `<section class="fase f1"><header><h2>Parte 5 · La presentación en Canva</h2></header><div class="cuerpo">
    <p>Haced la presentación <b>en grupo en Canva</b>. Tiene que llevar la imagen del robot que habéis montado aquí (botón <b>⬇ Descargar robot</b>) y la imagen hecha con IA. <b>La presentación es lo que se entrega en el aula virtual</b> y lo que expondréis en clase. Una estructura que funciona:</p>
    <ol class="rb-canva">
      <li><b>Portada</b>Nombre del robot, especialidad e integrantes.</li>
      <li><b>El reto</b>Qué problema de vuestro centro resuelve.</li>
      <li><b>Nuestro robot</b>La imagen descargada del montaje.</li>
      <li><b>Sus piezas</b>Cada tecnología y para qué la usa.</li>
      <li><b>El robot en acción</b>La imagen hecha con IA.</li>
      <li><b>Ventajas, riesgos y conclusión</b>Lo que aporta y lo que hay que vigilar.</li>
    </ol>
  </div></section>`}
  <div class="rb-pill" id="rbPill" hidden role="status"><span id="rbPillTx"></span><button type="button" id="rbPillQuitar" hidden>Quitar</button><button type="button" id="rbPillX" aria-label="Cancelar">✕</button></div>`;
}

// ================= estado (campo oculto «robot») =================
// R = { v:1, brazos: 2–4, s: { antena, orejas, ojos, t0, t1, t2, b0…b3, piernas: idDePieza }, png: true si ya se descargó }
const TIPO_SLOT = { antena: 'antena', orejas: 'orejas', ojos: 'ojos', t0: 'torso', t1: 'torso', t2: 'torso', b0: 'brazo', b1: 'brazo', b2: 'brazo', b3: 'brazo', piernas: 'piernas' };
const NOMBRE_SLOT = { antena: 'Antena', orejas: 'Orejas', ojos: 'Ojos', t0: 'Torso 1', t1: 'Torso 2', t2: 'Torso 3', b0: 'Brazo 1', b1: 'Brazo 2', b2: 'Brazo 3', b3: 'Brazo 4', piernas: 'Movimiento' };
let R = null, R_ULT = null, SELP = null, SELS = null, NUEVO = null, FILTRO = 'todas', FIRMA = '', SUPR = 0, ARR = null;
const slotsActivos = (r = R) => ['antena', 'orejas', 'ojos', 't0', 't1', 't2', ...['b0', 'b1', 'b2', 'b3'].slice(0, r ? r.brazos : 2), 'piernas'];
const zonaDeTipo = t => TIPOS[t].zona;

function rbCargar(v){
  const r = { v: 1, brazos: 2, s: {}, png: false };
  try {
    const o = JSON.parse(v);
    if (o && typeof o === 'object'){
      r.brazos = Math.min(4, Math.max(2, parseInt(o.brazos, 10) || 2));
      r.png = o.png === true;
      const usadas = new Set();
      if (o.s && typeof o.s === 'object') for (const sl of slotsActivos(r)){
        const p = pieza(o.s[sl]);
        if (p && p.t === TIPO_SLOT[sl] && !usadas.has(p.id)){ r.s[sl] = p.id; usadas.add(p.id); }
      }
    }
  } catch(e){}
  return r;
}
function rbGuardar(){ const i = document.getElementById('rbDato'); if (!i || !R) return; R_ULT = JSON.stringify(R); i.value = R_ULT; programarGuardado(); }

// El motor llama a esto en cada cambio: recarga el estado si viene de un borrador y repinta si algo cambió
function alActualizar(){
  const i = document.getElementById('rbDato'), svg = document.getElementById('rbSvg'); if (!i || !svg) return;
  if (!svg.dataset.listo || i.value !== R_ULT){
    R = rbCargar(i.value); R_ULT = JSON.stringify(R); i.value = R_ULT; svg.dataset.listo = '1';
    SELP = SELS = null; FIRMA = ''; rbAlmacen();
  }
  rbPintar();
}
const nombreRobot = () => textoDe('nombre');
function piezasPuestas(){ return slotsActivos().filter(s => R && R.s[s]).length; }
function progresoPropio(){
  const cajas = [...(IND() ? [] : ['grupo']), 'nombre', 'justificacion', 'imagen_ia', 'herramienta'], ll = cuentaLlenas(cajas);
  const p = R ? piezasPuestas() : 0, t = slotsActivos().length;
  return { hechas: p + ll, total: t + cajas.length, texto: `Robot ${p}/${t} piezas · ${ll}/${cajas.length} respuestas` };
}
function listaChecks(){
  const p = R ? piezasPuestas() : 0, t = slotsActivos().length;
  if (IND()) return [
    { ok: llena('nombre'), t: 'Nombre del robot', falta: 'Escribe cómo se llama tu robot.' },
    { ok: p === t, t: 'Robot montado', cuenta: `${p}/${t} piezas`, falta: 'Pon una pieza en cada sitio del robot (cabeza, torso, brazos y movimiento).' },
    { ok: llena('justificacion'), t: 'Justificación del montaje', falta: 'Explica para qué sirve el robot y por qué lleva esas piezas.' },
    { ok: llena('imagen_ia') && llena('herramienta'), t: 'Imagen con IA y herramienta usada', falta: 'Pega la imagen hecha con IA y di qué herramienta y descripción usaste.' }
  ];
  return [
    { ok: llena('grupo') && llena('nombre'), t: 'Integrantes del grupo y nombre del robot', falta: 'Escribid quiénes sois y cómo se llama vuestro robot.' },
    { ok: p === t, t: 'Robot montado', cuenta: `${p}/${t} piezas`, falta: 'Poned una pieza en cada sitio del robot (cabeza, torso, brazos y movimiento).' },
    { ok: !!(R && R.png), t: 'Robot descargado como imagen para Canva', falta: 'Pulsad «⬇ Descargar robot (imagen)».' },
    { ok: llena('justificacion'), t: 'Justificación del montaje', falta: 'Explicad para qué sirve el robot y por qué lleva esas piezas.' },
    { ok: llena('imagen_ia') && llena('herramienta'), t: 'Imagen con IA y herramienta usada', falta: 'Pegad la imagen hecha con IA y decid qué herramienta y descripción usasteis.' }
  ];
}

// ================= dibujo del robot (SVG) =================
const INK = '#2f2d3a', METAL = '#eceaf3', METAL2 = '#d4d0e0';
const FUENTE = "system-ui,'Segoe UI',Roboto,Arial,sans-serif", EMOJI = "'Segoe UI Emoji','Apple Color Emoji','Noto Color Emoji',sans-serif";
const emo = (e, x, y, s = 18) => `<text x="${x}" y="${y}" font-size="${s}" text-anchor="middle" dominant-baseline="central" font-family="${EMOJI}">${e}</text>`;
const xesc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
// Brazos: hombro, codo y mano de cada uno
const BRAZOS = {
  b0: { h: [118, 218], c: [70, 250], m: [48, 296] },
  b1: { h: [282, 218], c: [330, 250], m: [352, 296] },
  b2: { h: [118, 300], c: [72, 338], m: [52, 380] },
  b3: { h: [282, 300], c: [328, 338], m: [348, 380] }
};
const ZONA_SLOT = {   // zona que se puede tocar (rectángulos)
  antena: [[160, 8, 80, 70]], orejas: [[92, 92, 46, 76], [262, 92, 46, 76]], ojos: [[148, 92, 104, 60]],
  t0: [[132, 200, 136, 44]], t1: [[132, 248, 136, 44]], t2: [[132, 296, 136, 44]],
  b0: [[8, 206, 108, 96]], b1: [[284, 206, 108, 96]], b2: [[8, 304, 108, 100]], b3: [[284, 304, 108, 100]],
  piernas: [[104, 352, 192, 128]]
};

function ghost(sl){
  const T = TIPOS[TIPO_SLOT[sl]], st = `fill="${T.col}" fill-opacity=".55" stroke="${T.osc}" stroke-width="2" stroke-dasharray="5 4"`;
  const et = (x, y, txt) => `<text x="${x}" y="${y}" font-size="10" font-weight="700" fill="${T.osc}" text-anchor="middle" font-family="${FUENTE}">${txt}</text>`;
  const mas = (x, y) => `<text x="${x}" y="${y}" font-size="18" font-weight="800" fill="${T.osc}" text-anchor="middle" dominant-baseline="central" font-family="${FUENTE}">+</text>`;
  if (sl === 'antena') return `<g class="ghost"><rect x="172" y="24" width="56" height="46" rx="12" ${st}/>${mas(200, 42)}${et(200, 62, 'Antena')}</g>`;
  if (sl === 'orejas') return `<g class="ghost"><rect x="98" y="100" width="34" height="58" rx="12" ${st}/><rect x="268" y="100" width="34" height="58" rx="12" ${st}/>${mas(115, 125)}${mas(285, 125)}${et(115, 150, 'Oreja')}${et(285, 150, 'Oreja')}</g>`;
  if (sl === 'ojos') return `<g class="ghost"><rect x="156" y="98" width="88" height="44" rx="14" ${st}/>${mas(200, 114)}${et(200, 134, 'Ojos')}</g>`;
  if (sl[0] === 't') { const y = { t0: 202, t1: 250, t2: 298 }[sl]; return `<g class="ghost"><rect x="136" y="${y}" width="128" height="40" rx="10" ${st}/>${mas(166, y + 20)}${et(212, y + 24, NOMBRE_SLOT[sl])}</g>`; }
  if (sl[0] === 'b') { const B = BRAZOS[sl]; return `<g class="ghost"><path d="M${B.h} L${B.c} L${B.m}" fill="none" stroke="${T.osc}" stroke-width="3" stroke-dasharray="6 5"/><circle cx="${B.m[0]}" cy="${B.m[1]}" r="22" ${st}/>${mas(B.m[0], B.m[1] - 3)}${et(B.m[0], B.m[1] + 13, 'Brazo')}</g>`; }
  return `<g class="ghost"><rect x="126" y="372" width="148" height="92" rx="20" ${st}/>${mas(200, 405)}${et(200, 432, 'Movimiento')}</g>`;
}

function parteAntena(p){
  const c = TIPOS.antena.osc;
  if (p.v === 'parabolica') return `<line x1="200" y1="80" x2="200" y2="56" stroke="${INK}" stroke-width="4"/><path d="M166 30 Q200 78 234 30 Z" fill="${TIPOS.antena.col}" stroke="${INK}" stroke-width="2.5"/><circle cx="200" cy="40" r="4" fill="${c}"/>${emo(p.e, 228, 66, 15)}`;
  if (p.v === 'baliza') return `<rect x="180" y="62" width="40" height="18" rx="4" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/><path d="M182 62 A18 22 0 0 1 218 62 Z" fill="#ffb3b3" stroke="${INK}" stroke-width="2.5"/>${emo(p.e, 200, 50, 16)}`;
  return `<line x1="200" y1="80" x2="200" y2="40" stroke="${INK}" stroke-width="4"/><circle cx="200" cy="30" r="15" fill="${TIPOS.antena.col}" stroke="${INK}" stroke-width="2.5"/>${emo(p.e, 200, 30, 15)}`;
}
function parteOrejas(p){
  const col = TIPOS.orejas.col;
  if (p.v === 'altavoz') return [116, 284].map(x => `<circle cx="${x}" cy="128" r="22" fill="${col}" stroke="${INK}" stroke-width="2.5"/><circle cx="${x}" cy="128" r="13" fill="#fff" stroke="${INK}" stroke-width="2"/><circle cx="${x}" cy="128" r="5" fill="${INK}"/>`).join('') + emo(p.e, 116, 162, 14);
  if (p.v === 'cono') return `<path d="M140 108 L98 92 L98 164 L140 148 Z" fill="${col}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/><path d="M260 108 L302 92 L302 164 L260 148 Z" fill="${col}" stroke="${INK}" stroke-width="2.5" stroke-linejoin="round"/>` + emo(p.e, 112, 128, 14);
  return [100, 266].map(x => `<rect x="${x}" y="100" width="34" height="58" rx="14" fill="${col}" stroke="${INK}" stroke-width="2.5"/>${[118, 128, 138].map(y => `<line x1="${x + 8}" y1="${y}" x2="${x + 26}" y2="${y}" stroke="${INK}" stroke-width="2" stroke-linecap="round"/>`).join('')}`).join('') + emo(p.e, 117, 168, 14);
}
function parteOjos(p){
  if (p.v === 'ciclope') return `<circle cx="200" cy="120" r="24" fill="#fff" stroke="${INK}" stroke-width="2.5"/><circle cx="200" cy="120" r="15" fill="${TIPOS.ojos.col}" stroke="${INK}" stroke-width="2"/><circle cx="200" cy="120" r="7" fill="${INK}"/><circle cx="195" cy="115" r="3" fill="#fff"/>${emo(p.e, 200, 160, 13)}`;
  if (p.v === 'visor') return `<rect x="154" y="106" width="92" height="28" rx="14" fill="${p.id === 'c_termica' ? '#ffb199' : TIPOS.ojos.col}" stroke="${INK}" stroke-width="2.5"/><rect x="164" y="111" width="30" height="6" rx="3" fill="#fff" opacity=".8"/>${emo(p.e, 200, 160, 13)}`;
  return [178, 222].map(x => `<circle cx="${x}" cy="120" r="15" fill="#fff" stroke="${INK}" stroke-width="2.5"/><circle cx="${x + 2}" cy="122" r="6" fill="${INK}"/>`).join('') + `<path d="M186 152 Q200 162 214 152" fill="none" stroke="${INK}" stroke-width="2.5" stroke-linecap="round"/>` + emo(p.e, 200, 98, 12);
}
function parteTorso(p, sl){
  const y = { t0: 202, t1: 250, t2: 298 }[sl], T = TIPOS.torso;
  // Nombre en una línea o, si es largo, en dos (cortando por un espacio)
  const MAX = 17, corta = s => s.length > MAX ? s.slice(0, MAX - 1) + '…' : s;
  let lineas = [p.n];
  if (p.n.length > MAX){ const pal = p.n.split(' '); let a = ''; while (pal.length && (a + ' ' + pal[0]).trim().length <= MAX) a = (a + ' ' + pal.shift()).trim(); lineas = [a || corta(p.n), corta(pal.join(' '))].filter(Boolean); }
  const txt = lineas.map((l, i) => `<text x="177" y="${y + (lineas.length === 1 ? 24 : 17 + i * 12)}" font-size="9.5" font-weight="700" fill="${INK}" font-family="${FUENTE}">${xesc(l)}</text>`).join('');
  return `<rect x="136" y="${y}" width="128" height="40" rx="10" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/><circle cx="158" cy="${y + 20}" r="14" fill="#fff" stroke="${T.osc}" stroke-width="1.5"/>${emo(p.e, 158, y + 20, 16)}${txt}`;
}
function parteBrazo(p, sl){
  const B = BRAZOS[sl], T = TIPOS.brazo, [mx, my] = B.m;
  let h = `<path d="M${B.h} L${B.c} L${B.m}" fill="none" stroke="${INK}" stroke-width="18" stroke-linecap="round" stroke-linejoin="round"/><path d="M${B.h} L${B.c} L${B.m}" fill="none" stroke="${METAL2}" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/><circle cx="${B.c[0]}" cy="${B.c[1]}" r="8" fill="${METAL}" stroke="${INK}" stroke-width="2.5"/>`;
  const izq = mx < 200, dx = izq ? -1 : 1;
  if (p.v === 'pinza') h += `<path d="M${mx + dx * 10} ${my + 12} l${dx * 6} 18 l${-dx * 8} 4" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/><path d="M${mx - dx * 10} ${my + 12} l${-dx * 2} 20 l${dx * 9} 2" fill="none" stroke="${INK}" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>`;
  if (p.v === 'mano') h += [-12, -4, 4, 12].map(o => `<rect x="${mx + o - 3}" y="${my + 12}" width="6" height="16" rx="3" fill="${T.col}" stroke="${INK}" stroke-width="2"/>`).join('');
  if (p.v === 'bandeja') h += `<rect x="${mx - 28}" y="${my + 16}" width="56" height="8" rx="4" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/>`;
  h += `<circle cx="${mx}" cy="${my}" r="19" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/>${emo(p.e, mx, my, 18)}`;
  return h;
}
function partePiernas(p){
  const T = TIPOS.piernas, cadera = `<rect x="166" y="348" width="68" height="24" rx="8" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/>`;
  if (p.v === 'orugas') return cadera + `<rect x="190" y="370" width="20" height="22" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/><rect x="118" y="392" width="164" height="70" rx="35" fill="#4b4858" stroke="${INK}" stroke-width="2.5"/>${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(i => `<line x1="${132 + i * 13.5}" y1="394" x2="${132 + i * 13.5}" y2="402" stroke="#9a96a8" stroke-width="3"/>`).join('')}${[152, 248].map(x => `<circle cx="${x}" cy="427" r="20" fill="${METAL}" stroke="${INK}" stroke-width="2.5"/>`).join('')}<circle cx="200" cy="427" r="17" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/>${emo(p.e, 200, 427, 18)}`;
  if (p.v === 'piernas') return cadera + [172, 206].map(x => `<rect x="${x}" y="370" width="22" height="74" rx="9" fill="${METAL}" stroke="${INK}" stroke-width="2.5"/><circle cx="${x + 11}" cy="406" r="7" fill="${METAL2}" stroke="${INK}" stroke-width="2"/><rect x="${x - 12}" y="440" width="46" height="18" rx="9" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/>`).join('') + emo(p.e, 200, 360, 15);
  if (p.v === 'dron') return cadera + `<rect x="176" y="370" width="48" height="26" rx="10" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/>${emo(p.e, 200, 383, 15)}<line x1="96" y1="384" x2="304" y2="384" stroke="${INK}" stroke-width="5"/>${[96, 304].map(x => `<line x1="${x}" y1="384" x2="${x}" y2="372" stroke="${INK}" stroke-width="4"/><ellipse cx="${x}" cy="368" rx="40" ry="7" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/>`).join('')}${[150, 200, 250].map(x => `<path d="M${x} 418 q6 10 0 20" fill="none" stroke="#9fd8bd" stroke-width="3" stroke-linecap="round"/>`).join('')}`;
  return cadera + `<rect x="150" y="372" width="100" height="16" rx="6" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/>${[146, 254].map(x => `<circle cx="${x}" cy="425" r="32" fill="#4b4858" stroke="${INK}" stroke-width="2.5"/><circle cx="${x}" cy="425" r="14" fill="${METAL}" stroke="${INK}" stroke-width="2"/>`).join('')}<rect x="190" y="386" width="20" height="26" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/><circle cx="200" cy="425" r="17" fill="${T.col}" stroke="${INK}" stroke-width="2.5"/>${emo(p.e, 200, 425, 18)}`;
}
function partePieza(p, sl){
  const t = TIPO_SLOT[sl];
  return t === 'antena' ? parteAntena(p) : t === 'orejas' ? parteOrejas(p) : t === 'ojos' ? parteOjos(p) : t === 'torso' ? parteTorso(p, sl) : t === 'brazo' ? parteBrazo(p, sl) : partePiernas(p);
}

// Robot completo. interactivo: con huecos y zonas que se pueden tocar; si no, solo las piezas (para la imagen)
function svgRobot(interactivo){
  const act = slotsActivos(), s = R ? R.s : {};
  const ojos = pieza(s.ojos), rx = ojos ? (ojos.v === 'ciclope' ? 44 : ojos.v === 'visor' ? 30 : 16) : 22;
  const capa = sl => {
    const p = pieza(s[sl]);
    if (!p && !interactivo) return '';
    const cls = ['slot', SELS === sl ? 'sel' : '', NUEVO === sl ? 'nuevo' : ''].join(' ');
    const zona = interactivo ? ZONA_SLOT[sl].map(([x, y, w, h]) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="transparent"/>`).join('') : '';
    return `<g class="${cls}" data-slot="${sl}" role="button" aria-label="${xesc(NOMBRE_SLOT[sl] + (p ? ': ' + p.n : ': vacío'))}">${zona}${p ? `<g class="parte">${partePieza(p, sl)}</g>` : ghost(sl)}</g>`;
  };
  const brazos = act.filter(x => x[0] === 'b');
  const nombre = nombreRobot() || (interactivo ? 'Sin nombre' : '');
  return `${brazos.map(capa).join('')}
    <rect x="186" y="172" width="28" height="18" rx="4" fill="${METAL2}" stroke="${INK}" stroke-width="2.5"/>
    <rect x="114" y="188" width="172" height="164" rx="26" fill="${METAL}" stroke="${INK}" stroke-width="3"/>
    <rect x="140" y="76" width="120" height="98" rx="${rx}" fill="${METAL}" stroke="${INK}" stroke-width="3"/>
    ${capa('piernas')}${capa('antena')}${capa('orejas')}${capa('ojos')}${capa('t0')}${capa('t1')}${capa('t2')}
    ${nombre ? `<rect x="110" y="482" width="180" height="28" rx="14" fill="#fff" stroke="${INK}" stroke-width="2"/><text x="200" y="501" font-size="14" font-weight="800" fill="${INK}" text-anchor="middle" font-family="${FUENTE}">${xesc(nombre.length > 24 ? nombre.slice(0, 23) + '…' : nombre)}</text>` : ''}`;
}

// ================= pintar =================
function rbPintar(){
  const svg = document.getElementById('rbSvg'); if (!svg || !R) return;
  const firma = JSON.stringify(R) + '|' + nombreRobot() + '|' + SELS + '|' + SELP + '|' + NUEVO;
  if (firma === FIRMA) return;
  FIRMA = firma;
  svg.innerHTML = svgRobot(true);
  NUEVO = null;
  if (SELP){ const p = pieza(SELP); document.querySelectorAll('#rbSvg .slot').forEach(g => { if (TIPO_SLOT[g.dataset.slot] === p.t) g.classList.add('apto'); }); }
  document.getElementById('rbNB').textContent = R.brazos;
  document.getElementById('rbMenos').disabled = R.brazos <= 2;
  document.getElementById('rbMas').disabled = R.brazos >= 4;
  // Estado por zonas
  const z = { cabeza: [0, 3], torso: [0, 3], brazos: [0, R.brazos], piernas: [0, 1] };
  slotsActivos().forEach(sl => { if (R.s[sl]) z[zonaDeTipo(TIPO_SLOT[sl])][0]++; });
  document.getElementById('rbEstado').innerHTML = Object.keys(z).map(k => `<span class="${z[k][0] === z[k][1] ? 'ok' : ''}">${ZONAS[k]} ${z[k][0]}/${z[k][1]}</span>`).join('');
  // Lista de piezas del robot
  document.getElementById('rbLista').innerHTML = `<h4>Las piezas de ${T('vuestro', 'tu')} robot</h4>` + slotsActivos().map(sl => {
    const p = pieza(R.s[sl]);
    return p ? `<div><span>${p.e}</span><b>${esc(NOMBRE_SLOT[sl])} · ${esc(p.n)}</b><em>${esc(p.d)}</em></div>` : `<div><span>➕</span><b>${esc(NOMBRE_SLOT[sl])}</b><em class="falta">Falta una pieza</em></div>`;
  }).join('');
  rbAlmacen();
  rbPromptPintar();
}
function rbAlmacen(){
  const c = document.getElementById('rbPiezas'); if (!c || !CC || !R) return;
  const usadas = new Set(Object.values(R.s));
  document.querySelectorAll('.rb-tabs [data-filtro]').forEach(b => b.classList.toggle('on', b.dataset.filtro === FILTRO));
  c.innerHTML = piezasDe(CC).filter(p => FILTRO === 'todas' || zonaDeTipo(p.t) === FILTRO).map(p => {
    const T = TIPOS[p.t];
    return `<button type="button" class="pz${usadas.has(p.id) ? ' usada' : ''}${SELP === p.id ? ' sel' : ''}" data-id="${p.id}" style="--c:${T.col};--o:${T.osc}" title="${esc(p.d)}"><span class="e" aria-hidden="true">${p.e}</span><b>${esc(p.n)}</b><small>Va en: ${esc(T.n)}</small></button>`;
  }).join('');
}
function rbPromptTexto(){
  if (!R || !CC) return '';
  const n = sl => { const p = pieza(R.s[sl]); return p ? p.n.toLowerCase() : null; };
  const lista = a => a.filter(Boolean).join(', ').replace(/, ([^,]*)$/, ' y $1');
  const cab = lista([n('antena') && 'una antena con ' + n('antena'), n('orejas') && 'orejas con ' + n('orejas'), n('ojos') && 'ojos con ' + n('ojos')]);
  const torso = lista(['t0', 't1', 't2'].map(n));
  const brazos = lista(slotsActivos().filter(s => s[0] === 'b').map(n));
  const mov = n('piernas');
  const nombre = nombreRobot();
  return `Ilustración en 3D, colorida y realista, de un robot${nombre ? ' llamado «' + nombre + '»' : ''} trabajando en ${CC.entorno}. ` +
    (cab ? `En la cabeza tiene ${cab}. ` : '') + (torso ? `En el torso lleva ${torso}. ` : '') +
    (brazos ? `Tiene ${R.brazos} brazos con ${brazos}. ` : '') + (mov ? `Se mueve con ${mov}. ` : '') +
    'El robot está ayudando a las personas en una situación real de trabajo. Luz natural, plano general.';
}
function rbPromptPintar(){ const e = document.getElementById('rbPrompt'); if (e) e.textContent = rbPromptTexto(); }

function rbPill(){
  const p = document.getElementById('rbPill'); if (!p) return;
  const tx = document.getElementById('rbPillTx'), q = document.getElementById('rbPillQuitar');
  if (SELP){ const pz = pieza(SELP); tx.textContent = `${pz.e} ${pz.n} → ${T('tocad', 'toca')} su sitio: ${TIPOS[pz.t].n}`; q.hidden = true; p.hidden = false; return; }
  if (SELS){ const pz = pieza(R.s[SELS]); tx.textContent = pz ? `${pz.e} ${pz.n} · ${NOMBRE_SLOT[SELS]}` : `${T('Elegid', 'Elige')} una pieza para: ${NOMBRE_SLOT[SELS]}`; q.hidden = !pz; p.hidden = false; return; }
  p.hidden = true;
}

// ================= montar =================
function rbPoner(sl, id){
  const p = pieza(id); if (!p || !R) return;
  for (const k of Object.keys(R.s)) if (R.s[k] === id) delete R.s[k];   // una pieza solo puede estar en un sitio
  R.s[sl] = id; NUEVO = sl; SELP = SELS = null;
  rbGuardar(); rbPintar(); rbPill();
}
function rbMal(sl, p){
  const g = document.querySelector(`#rbSvg [data-slot="${sl}"]`);
  if (g){ g.classList.remove('mal'); void g.getBoundingClientRect(); g.classList.add('mal'); }
  aviso(`«${p.n}» va en: ${TIPOS[p.t].n}`);
}
function rbTocarPieza(id){
  const p = pieza(id); if (!p) return;
  if (SELS && TIPO_SLOT[SELS] === p.t) return rbPoner(SELS, id);
  SELS = null; SELP = SELP === id ? null : id;
  rbAlmacen(); rbPintar(); rbPill();
  if (SELP && window.innerWidth <= 820) document.getElementById('rbSvg').scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function rbTocarSlot(sl){
  if (SELP){ const p = pieza(SELP); return TIPO_SLOT[sl] === p.t ? rbPoner(sl, SELP) : rbMal(sl, p); }
  SELS = SELS === sl ? null : sl;
  if (SELS && !R.s[SELS]){
    FILTRO = zonaDeTipo(TIPO_SLOT[SELS]);
    rbAlmacen();
    if (window.innerWidth <= 820) document.getElementById('rbAlmacen').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  rbPintar(); rbPill();
}
function rbQuitar(sl){ if (!R || !R.s[sl]) return; delete R.s[sl]; SELS = null; rbGuardar(); rbPintar(); rbPill(); }
function rbBrazos(d){
  if (!R) return;
  const n = Math.min(4, Math.max(2, R.brazos + d)); if (n === R.brazos) return;
  if (n < R.brazos){ const sl = 'b' + (R.brazos - 1), p = pieza(R.s[sl]); if (p && !confirm(`El brazo ${R.brazos} lleva «${p.n}». ¿Quitarlo?`)) return; delete R.s[sl]; }
  R.brazos = n; if (n > 2) NUEVO = 'b' + (n - 1);
  SELS = null; rbGuardar(); rbPintar(); rbPill();
}

// Imagen PNG del robot (para Canva y para el PDF)
function rbImagen(){
  return new Promise((ok, mal) => {
    const nombre = nombreRobot(), W = 400, H = 560;
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W * 3}" height="${H * 3}">
      <defs><radialGradient id="f" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="#ffffff"/><stop offset="1" stop-color="#dff3ea"/></radialGradient></defs>
      <rect width="${W}" height="${H}" fill="url(#f)"/>
      <ellipse cx="200" cy="${R && R.s.piernas && pieza(R.s.piernas).v === 'dron' ? 520 : 508}" rx="120" ry="12" fill="#2f2d3a" opacity=".08"/>
      <g transform="translate(0,14)">${svgRobot(false)}</g>
      <text x="200" y="22" font-size="11" font-weight="700" fill="#2f7d5c" text-anchor="middle" font-family="${FUENTE}">${xesc(CC ? CC.nombre : '')}${nombre ? '' : ''}</text>
    </svg>`;
    const img = new Image();
    img.onload = () => { const c = document.createElement('canvas'); c.width = W * 3; c.height = H * 3; const x = c.getContext('2d'); x.drawImage(img, 0, 0, c.width, c.height); try { ok(c.toDataURL('image/png')); } catch(e){ mal(e); } };
    img.onerror = mal;
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}
async function rbDescargar(){
  if (!R) return;
  try {
    const url = await rbImagen();
    const limpio = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^A-Za-z0-9]+/g, '_').replace(/^_|_$/g, '');
    const a = document.createElement('a'); a.href = url; a.download = `UT2_E2_Robot_${limpio(nombreRobot()) || 'grupo'}.png`;
    document.body.appendChild(a); a.click(); a.remove();
    if (!EJEMPLO && !R.png){ R.png = true; rbGuardar(); }
    aviso(piezasPuestas() === slotsActivos().length ? T('Imagen del robot descargada. Ya podéis ponerla en Canva.', 'Imagen del robot descargada.') : 'Imagen descargada, pero al robot aún le faltan piezas.');
  } catch(e){ aviso('No se ha podido crear la imagen en este navegador.'); }
}

// ================= eventos =================
document.addEventListener('click', e => {
  if (Date.now() < SUPR) return;
  const pz = e.target.closest('#rbPiezas .pz'); if (pz){ rbTocarPieza(pz.dataset.id); return; }
  const sl = e.target.closest('#rbSvg [data-slot]'); if (sl){ rbTocarSlot(sl.dataset.slot); return; }
  const f = e.target.closest('.rb-tabs [data-filtro]'); if (f){ FILTRO = f.dataset.filtro; rbAlmacen(); return; }
  if (e.target.closest('#rbMenos')) return rbBrazos(-1);
  if (e.target.closest('#rbMas')) return rbBrazos(1);
  if (e.target.closest('#rbPNG')) return rbDescargar();
  if (e.target.closest('#rbPillQuitar')) return rbQuitar(SELS);
  if (e.target.closest('#rbPillX')){ SELP = SELS = null; rbAlmacen(); rbPintar(); rbPill(); return; }
  if (e.target.closest('#rbCopiar')){
    const t = rbPromptTexto();
    (navigator.clipboard ? navigator.clipboard.writeText(t) : Promise.reject()).then(() => aviso(T('Descripción copiada. Pegadla en la herramienta de IA.', 'Descripción copiada. Pégala en la herramienta de IA.'))).catch(() => prompt('Copiad la descripción:', t));
  }
});
document.addEventListener('keydown', e => { if (e.key === 'Escape' && (SELP || SELS)){ SELP = SELS = null; rbAlmacen(); rbPintar(); rbPill(); } });
document.addEventListener('input', e => { if (e.target.closest && e.target.closest('.ed[data-id="nombre"]')){ rbPintar(); } });

// Arrastrar una pieza hasta el robot: con ratón, en cuanto se mueve; con el dedo, tras mantener pulsado (si no, se hace scroll)
document.addEventListener('pointerdown', e => {
  const el = e.target.closest('#rbPiezas .pz'); if (!el || e.button > 0) return;
  ARR = { el, id: el.dataset.id, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, pid: e.pointerId, toque: e.pointerType !== 'mouse', activo: false };
  if (ARR.toque) ARR.lp = setTimeout(() => { if (ARR && !ARR.activo) rbArrEmpezar(); }, 380);
});
document.addEventListener('pointermove', e => {
  if (!ARR || e.pointerId !== ARR.pid) return;
  ARR.x = e.clientX; ARR.y = e.clientY;
  if (!ARR.activo){
    const d = Math.hypot(ARR.x - ARR.x0, ARR.y - ARR.y0);
    if (ARR.toque){ if (d > 10){ clearTimeout(ARR.lp); ARR = null; } return; }
    if (d < 8) return;
    rbArrEmpezar();
  }
  rbArrMover();
});
document.addEventListener('pointerup', e => { if (!ARR || e.pointerId !== ARR.pid) return; clearTimeout(ARR.lp); if (ARR.activo) rbArrSoltar(); ARR = null; });
document.addEventListener('pointercancel', () => { if (!ARR) return; clearTimeout(ARR.lp); if (ARR.activo) rbArrLimpiar(); ARR = null; });
document.addEventListener('touchmove', e => { if (ARR && ARR.activo) e.preventDefault(); }, { passive: false });
document.addEventListener('contextmenu', e => { if (e.target.closest('#rbPiezas .pz')) e.preventDefault(); });
function rbArrEmpezar(){
  const r = ARR.el.getBoundingClientRect();
  ARR.activo = true; ARR.dx = ARR.x0 - r.left; ARR.dy = ARR.y0 - r.top;
  const g = ARR.el.cloneNode(true); g.classList.remove('sel'); g.classList.add('fantasma'); g.removeAttribute('data-id');
  g.style.width = r.width + 'px'; g.style.left = '0'; g.style.top = '0'; document.body.appendChild(g); ARR.g = g;
  SELP = ARR.id; SELS = null; rbPintar(); rbPill();
  ARR.el = document.querySelector(`#rbPiezas .pz[data-id="${ARR.id}"]`) || ARR.el; ARR.el.classList.add('origen');
  if (ARR.toque && navigator.vibrate) try { navigator.vibrate(15); } catch(e){}
  rbArrMover();
}
function rbArrMover(){
  ARR.g.style.transform = `translate(${ARR.x - ARR.dx}px,${ARR.y - ARR.dy}px) rotate(3deg) scale(1.05)`;
  const t = document.elementFromPoint(ARR.x, ARR.y), d = t && t.closest('#rbSvg [data-slot]');
  if (ARR.sobre && ARR.sobre !== d) ARR.sobre.classList.remove('diana');
  ARR.sobre = d; if (d) d.classList.add('diana');
}
function rbArrLimpiar(){ if (ARR.g) ARR.g.remove(); ARR.el.classList.remove('origen'); if (ARR.sobre) ARR.sobre.classList.remove('diana'); SUPR = Date.now() + 400; }
function rbArrSoltar(){
  const id = ARR.id, d = ARR.sobre; rbArrLimpiar();
  if (d){ const p = pieza(id); if (TIPO_SLOT[d.dataset.slot] === p.t) rbPoner(d.dataset.slot, id); else { SELP = null; rbPintar(); rbPill(); rbMal(d.dataset.slot, p); } }
  else { SELP = null; rbAlmacen(); rbPintar(); rbPill(); }
}

// ================= PDF =================
async function pdfTarea(api, C){
  const { banda, P, texto, caja, sitio, separador, COL, doc } = api;
  CC = C;
  banda(T('Parte 1 · Vuestro equipo y vuestro reto', 'Parte 1 · Tu reto'), [223,243,234], COL.mint);
  P(C.reto, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  if (!IND()) await caja('grupo', '1.1', 'Integrantes del grupo', { compacta: true });
  banda(T('Parte 2 · Vuestro robot', 'Parte 2 · Tu robot'), [223,243,234], COL.mint);
  P('Robot: ' + (nombreRobot() || '(sin nombre)'), { size: 12, b: true, color: COL.mint, tras: 2 });
  try {
    const url = await rbImagen(), w = 95, h = w * 560 / 400;
    sitio(h + 4); doc.addImage(url, 'PNG', 18 + (api.CW - w) / 2, api.y, w, h); api.y = api.y + h + 4;
  } catch(e){ P('[No se ha podido dibujar el robot en este navegador]', { i: true, color: COL.muted }); }
  sitio(20); P(T('Las piezas de vuestro robot', 'Las piezas de tu robot'), { size: 11.5, b: true, color: COL.mint, tras: 2 });
  for (const sl of slotsActivos()){
    const p = pieza(R && R.s[sl]);
    texto([{ t: NOMBRE_SLOT[sl] + ': ', b: true }, p ? { t: p.n + '. ' } : { t: '(sin pieza)', i: true }, ...(p ? [{ t: p.d, i: true }] : [])], { size: 9.6, tras: 0.8 });
  }
  separador();
  banda('Parte 3 · Justificación del montaje', [255,233,220], COL.peach);
  await caja('justificacion', '3.1', 'Justificación del robot');
  banda('Parte 4 · El robot en su entorno, con IA', [226,238,252], COL.sky);
  await caja('imagen_ia', '4.1', 'Imagen creada con IA');
  await caja('herramienta', '4.2', T('Herramienta usada y descripción que le escribisteis', 'Herramienta usada y descripción que le escribiste'));
}

// ================= ejemplo relleno =================
function ejemploCampos(){
  return { robot: JSON.stringify({ v: 1, brazos: 3, png: true, s: { antena: 'ei_familias', orejas: 'ei_cuentos', ojos: 'ei_emociones', t0: 'c_pantalla', t1: 'ei_co2', t2: 'c_ia', b0: 'c_mano', b1: 'ei_burbujas', b2: 'ei_termo', piernas: 'ei_base' } }) };
}
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (id === 'grupo') return t('[Nombre y apellidos de cada integrante del grupo]');
  if (id === 'nombre') return t('[Nombre del robot]');
  if (id === 'justificacion') return t('[Texto de muestra] Para qué sirve el robot en vuestro centro, por qué lleva estas piezas, quién lo usaría y en qué momentos.') + t('[Texto de muestra] Ventajas que aporta y riesgos que hay que vigilar.');
  if (id === 'imagen_ia') return t('[Aquí va la imagen del robot creada con IA]');
  if (id === 'herramienta') return t('[Herramienta de IA usada] · [Descripción (prompt) que le escribisteis]');
  return '';
}

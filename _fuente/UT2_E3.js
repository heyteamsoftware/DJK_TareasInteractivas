// ===== UT2_E3 · Diseña tu app de realidad virtual o mixta =====
// Ejercicio interactivo (se hace después de probar las gafas de realidad virtual en clase):
//   Parte 1 · juego: clasificar 12 situaciones del sector en realidad virtual, mixta o aumentada
//   Parte 2 · valorar la experiencia con las gafas (caras, fichas y una frase)
//   Parte 3 · constructor de la app: reto, cuánto mundo real se ve, fichas, boceto del visor y 3 escenas
//   Parte 4 · ficha de la app en la tienda (se genera en directo)
//   Parte 5 · ventajas, riesgos y mercado (3 cajas)
// Todo lo que no es una caja de texto se guarda en el campo oculto data-campo="e3" (JSON).

const TIPOS = {
  rv: { n: 'Realidad virtual', e: '🥽', def: 'Las gafas tapan tu vista: solo ves un mundo creado por ordenador. La sala real desaparece.' },
  rm: { n: 'Realidad mixta', e: '🪄', def: 'Con las gafas sigues viendo la sala real, y los objetos virtuales se quedan colocados en ella: los puedes tocar y mover con las manos.' },
  ra: { n: 'Realidad aumentada', e: '📱', def: 'Miras el mundo real a través de una pantalla (normalmente el móvil o la tablet) y aparece información encima, pero no la tocas con las manos.' }
};
const NSIT = 12;

const COMUN = {
  codigo: 'UT2_E3',
  corto: 'UT2 · E3',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT2 · Tecnologías habilitadoras digitales',
  ejercicio: 'E3 · Diseña tu app de realidad virtual o mixta',
  ra: 'RA2',
  ce: 'b, d, g',
  peso: '20 % de la unidad',
  modalidad: 'Individual · con las gafas de realidad virtual de clase',
  raTexto: 'Caracteriza las tecnologías habilitadoras digitales necesarias para la adecuación/transformación de las empresas a entornos digitales describiendo sus características y aplicaciones.',
  ceTextos: [
    ['b', 'Se han relacionado las THD con el desarrollo de productos y servicios.'],
    ['d', 'Se han identificado nuevos mercados generados por las THD.'],
    ['g', 'Se ha elaborado un informe que relacione las tecnologías con sus características y áreas de aplicación.']
  ],
  objetivo: 'En clase has probado unas gafas de realidad virtual. Ahora te toca a ti: vas a inventar una aplicación de realidad virtual o de realidad mixta que resuelva un problema real de tu sector. Primero aprenderás a distinguir los tipos de realidad, después valorarás tu experiencia con las gafas y, por último, diseñarás tu app: para quién es, cómo se usa, qué se ve dentro de las gafas y cómo se vendería.',
  pasos: [
    'Lee el objetivo, «Las tres realidades» y la tabla «Cómo se califica».',
    '<b>Parte 1:</b> clasifica las <b>12 situaciones</b> en realidad virtual, mixta o aumentada (toca la caja correcta o arrastra la tarjeta encima).',
    '<b>Parte 2:</b> después de probar las gafas en clase, valora tu experiencia.',
    '<b>Parte 3:</b> elige un reto de tu sector, decide cuánto mundo real se ve, monta tu app con las fichas, <b>dibuja lo que se ve dentro de las gafas</b> y cuenta la experiencia en <b>3 escenas</b>.',
    '<b>Parte 4:</b> crea la ficha de tu app para la tienda de aplicaciones.',
    '<b>Parte 5:</b> responde a las 3 preguntas sobre ventajas, riesgos y mercado.',
    'Cita tus fuentes y declara si has usado inteligencia artificial.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Tu app tiene que ser de <b>realidad virtual</b> o de <b>realidad mixta</b> y servir para tu sector profesional.',
    'La idea tiene que ser tuya: puedes inspirarte en apps que ya existen, pero no copiarlas. Si te inspiras en una, dilo en las fuentes.',
    'Escribe con tus palabras: pegar texto está desactivado. Sí puedes pegar, arrastrar o subir imágenes.',
    'Cuida las gafas y cuídate: úsalas en la zona que diga el profesor, sigue sus indicaciones y quítatelas en cuanto notes mareo.'
  ],
  numFuentes: '6',
  fuentes: 'Cita las apps, vídeos o webs que te hayan inspirado (nombre y enlace) y declara si has usado inteligencia artificial: cuál, para qué y qué parte de la idea es tuya. Si no has consultado nada, escríbelo.',
  criterios: [
    ['Parte 1 · ¿Virtual, mixta o aumentada?', 'Las 12 situaciones clasificadas correctamente. Los errores son informativos.', 1.5],
    ['Parte 2 · Mi experiencia con las gafas', 'Valoración completa de la experiencia con las gafas y una frase propia sobre cómo te sentiste.', 1],
    ['Parte 3 · Constructor de la app', 'Reto del sector bien elegido; app de realidad virtual o mixta coherente (para quién, dónde, cómo se maneja y cuánto dura); idea explicada; boceto del visor; 3 escenas claras y concretas.', 3.5],
    ['Parte 4 · Tu app en la tienda', 'Ficha completa y coherente con la app: nombre, icono, eslogan, edad recomendada y precio.', 1.5],
    ['Parte 5 · Ventajas, riesgos y mercado', 'Ventajas reales para el sector, riesgos con su solución y un mercado creíble (las tres preguntas cuentan lo mismo).', 2.5]
  ],
  p2: {
    prob: ['Un juego', 'Un vídeo 360°', 'Una visita virtual', 'Una experiencia educativa', 'Realidad mixta (objetos en la sala)', 'Otra'],
    escalas: [
      ['inm', 'Sensación de estar dentro', ['😶','🙂','😊','😃','🤩'], ['Nada','Poca','Algo','Mucha','Total']],
      ['com', 'Comodidad de las gafas', ['😣','😕','😐','🙂','😌'], ['Nada','Poca','Normal','Bastante','Mucha']],
      ['fac', 'Facilidad para manejarlas', ['😵','😕','😐','🙂','😎'], ['Muy difícil','Difícil','Normal','Fácil','Muy fácil']],
      ['mar', 'Mareo', ['😌','🙂','😐','😵‍💫','🤢'], ['Nada','Un poco','Algo','Bastante','Mucho']]
    ],
    sor: ['La sensación de estar dentro', 'El sonido que viene de todas partes', 'Poder usar las manos', 'Ver la sala real con objetos virtuales', 'Lo real que parecían las cosas', 'Lo rápido que se aprende a usarlas', 'Perder la noción del tiempo'],
    cam: ['El peso de las gafas', 'El mareo', 'La calidad de la imagen', 'Los mandos', 'La batería o el cable', 'Sentirme aislada de la gente', 'Compartirlas (higiene)', 'No ver dónde piso']
  },
  p3: {
    quien: ['Niños y niñas', 'Adolescentes', 'Personas adultas', 'Personas mayores', 'Personas con discapacidad', 'Familias', 'Profesionales (para formarse)', 'Pacientes o personas usuarias'],
    donde: ['En el aula o la sala', 'En el centro de trabajo', 'En casa', 'Al aire libre', 'En cualquier sitio'],
    ctrl: ['Con las manos (sin mandos)', 'Con mandos', 'Con la mirada', 'Con la voz', 'Caminando por la sala', 'Sentada o sentado'],
    dura: ['Menos de 5 min', '5–15 min', '15–30 min', 'Más de 30 min'],
    idea: 'Tu idea en 2 o 3 líneas: qué problema resuelve tu app y cómo lo hace',
    escenas: [
      ['Escena 1 · Empieza', 'Qué ve y qué oye la persona nada más ponerse las gafas. ¿Dónde está? ¿Quién le habla?'],
      ['Escena 2 · Lo importante', 'Qué tiene que hacer y cómo lo hace (con las manos, la voz, caminando…). ¿Qué pasa si se equivoca?'],
      ['Escena 3 · Termina', 'Cómo acaba la experiencia y qué ha aprendido o conseguido la persona. ¿Qué datos o resultado se guardan?']
    ]
  },
  p4: {
    emojis: ['🥽','🪄','🦷','🪥','🧸','🦖','🐠','🌍','🚀','🏋️','🚴','🧘','🏔️','🏀','🧭','♿','❤️','🧠','💼','🚌','🍳','🎨','⭐','🌈'],
    colores: [['Lavanda','#7c5cd6'], ['Menta','#2f9e75'], ['Naranja','#e07a3f'], ['Azul','#2f74c0'], ['Rosa','#d4477a'], ['Noche','#3b3950']],
    edades: ['+3', '+7', '+12', '+16', '+18'],
    precios: ['Gratis', 'Pago único', 'Suscripción mensual', 'La paga el centro']
  },
  p5: [
    '¿Qué mejora tu app frente a hacerlo sin gafas? Di al menos dos ventajas para tu sector (tiempo, seguridad, motivación, coste, inclusión…).',
    '¿Qué riesgos o problemas tiene y cómo los reducirías? (mareo, edad mínima, higiene de las gafas, datos personales, aislamiento, coste…)',
    '¿Qué nuevo mercado abre tu app? ¿Quién pagaría por ella y cómo ganaría dinero? (centros, familias, ayuntamientos, empresas, suscripción, venta…)'
  ],
  siglas: [
    ['RV', 'Realidad virtual'],
    ['RM', 'Realidad mixta'],
    ['RA', 'Realidad aumentada'],
    ['THD', 'Tecnologías habilitadoras digitales'],
    ['3D', 'Tres dimensiones'],
    ['360°', 'Vídeo o imagen que se ve en todas las direcciones'],
    ['IA', 'Inteligencia artificial']
  ]
};

// Situaciones del juego (4 de cada tipo) y retos de cada sector
const CICLOS = {
  af: { nombre: 'Acondicionamiento Físico', sector: 'Fitness y salud', centro: 'un gimnasio o centro deportivo',
    sit: [
      ['Una clase de spinning con las gafas puestas: pedaleas por una carretera de montaña que no existe y no ves la sala.', 'rv'],
      ['Un combate de boxeo contra un rival virtual, dentro de un ring virtual.', 'rv'],
      ['Un monitor en formación practica qué hacer si un socio se desmaya, en un gimnasio simulado.', 'rv'],
      ['Vuelta a la calma: meditación guiada en una playa virtual al terminar el entrenamiento.', 'rv'],
      ['Con las gafas ves tu sala real y, a tu lado, un entrenador virtual de tamaño real hace la sentadilla contigo.', 'rm'],
      ['Aparecen dianas virtuales en la pared real del gimnasio y hay que golpearlas con las manos.', 'rm'],
      ['Al levantar una barra real, una línea virtual que flota junto a ella te marca si el recorrido es correcto.', 'rm'],
      ['Un circuito de conos virtuales colocado sobre el suelo real de la pista, que se esquivan corriendo.', 'rm'],
      ['Apuntas con el móvil a una máquina y en la pantalla aparece un vídeo de cómo usarla.', 'ra'],
      ['Una app muestra, sobre la imagen de la cámara del móvil, los músculos que trabaja cada ejercicio.', 'ra'],
      ['Escaneas con el móvil el código de la cinta de correr y en la pantalla aparecen tus datos encima.', 'ra'],
      ['En la tablet, la foto de tu postura aparece con líneas dibujadas encima para corregirla.', 'ra']
    ],
    retos: [
      ['🏋️', 'Corregir la técnica', 'Un entrenador virtual que corrige la postura en cada repetición.'],
      ['🚴', 'Motivar el cardio', 'Rutas y paisajes para pedalear, remar o correr sin aburrirse.'],
      ['🧓', 'Ejercicio para personas mayores', 'Equilibrio y prevención de caídas jugando.'],
      ['🩹', 'Volver después de una lesión', 'Ejercicios de readaptación guiados y medidos.'],
      ['❤️', 'Primeros auxilios', 'Practicar qué hacer si alguien se desmaya en la sala.'],
      ['🧘', 'Relajación', 'Vuelta a la calma y control de la respiración.'],
      ['🎯', 'Reflejos y reacción', 'Estímulos y dianas para entrenar la velocidad de reacción.'],
      ['🏠', 'Entrenar en casa', 'Clases con el entrenador sin ir al gimnasio.']
    ] },
  as: { nombre: 'Animación Sociodeportiva', sector: 'Deporte y ocio', centro: 'una empresa o servicio de animación sociodeportiva',
    sit: [
      ['Personas mayores de una residencia «pasean» por el Roque Nublo sin salir del centro.', 'rv'],
      ['Un monitor en formación practica cómo guiar a un grupo perdido en una montaña simulada.', 'rv'],
      ['Un juego de remo en el que solo ves un río virtual y a tus compañeros convertidos en avatares.', 'rv'],
      ['Una visita a un estadio olímpico virtual antes de organizar una competición.', 'rv'],
      ['En el pabellón, unas porterías virtuales aparecen sobre la pista real y el balón virtual rebota en las paredes de verdad.', 'rm'],
      ['Una gymkana en la que las pistas virtuales se esconden en rincones reales del pabellón.', 'rm'],
      ['Un mapa 3D del sendero aparece sobre la mesa real y el grupo lo mueve con las manos para planificar la ruta.', 'rm'],
      ['Bolos virtuales colocados en el suelo real de la sala para jugar con personas en silla de ruedas.', 'rm'],
      ['Apuntas con el móvil a una montaña y la pantalla muestra su nombre y su altura.', 'ra'],
      ['Los participantes escanean el código de un cartel y ven en el móvil el horario de las actividades.', 'ra'],
      ['En la tablet, sobre el vídeo de un partido, aparecen flechas dibujadas con la jugada.', 'ra'],
      ['Una ruta en el móvil con flechas dibujadas sobre la imagen de la calle.', 'ra']
    ],
    retos: [
      ['🏔️', 'Naturaleza para todos', 'Rutas para quien no puede subir al monte.'],
      ['🏀', 'Juegos deportivos nuevos', 'Deportes inventados que mezclan la pista real y lo virtual.'],
      ['🧭', 'Orientación', 'Gymkanas y búsquedas del tesoro.'],
      ['♿', 'Deporte adaptado', 'Actividades para personas con discapacidad.'],
      ['👵', 'Animación en residencias', 'Actividad física y social para personas mayores.'],
      ['🏖️', 'Animación turística', 'Actividades para los clientes de un hotel.'],
      ['🛟', 'Seguridad en las actividades', 'Practicar rescates y emergencias.'],
      ['📣', 'Formación de monitores', 'Aprender a dirigir un grupo difícil.']
    ] },
  ei: { nombre: 'Educación Infantil', sector: 'Educación infantil', centro: 'una escuela infantil',
    aviso: 'Los fabricantes no recomiendan las gafas de realidad virtual a menores de 10–13 años. Si tu app es para los peques, piensa cómo la usarías: quizá las gafas las lleva la persona adulta, o la experiencia se proyecta en la pared mientras los niños y niñas participan.',
    sit: [
      ['Una educadora en prácticas entra en una clase simulada con 15 niños virtuales y tiene que calmar una rabieta.', 'rv'],
      ['Con las gafas puestas, una visita a una granja virtual: caminas entre vacas y gallinas que no existen.', 'rv'],
      ['Un simulacro de evacuación por incendio en una escuela virtual para formar al personal nuevo.', 'rv'],
      ['Las familias recorren con las gafas una escuela infantil virtual antes del primer día.', 'rv'],
      ['Con las gafas, un dinosaurio virtual aparece encima de la alfombra de la clase y la educadora lo hace girar con la mano.', 'rm'],
      ['Las piezas de un puzle virtual flotan sobre la mesa real y la educadora las encaja con los dedos.', 'rm'],
      ['Mientras cambia el pañal a un muñeco real, la alumna en prácticas ve flechas y avisos virtuales encima del cambiador.', 'rm'],
      ['Un planeta virtual se queda «pegado» al techo de la clase real y, al acercarse, se ve más grande.', 'rm'],
      ['Al apuntar con la tablet a un cuento de papel, los personajes aparecen moviéndose en la pantalla.', 'ra'],
      ['Las familias escanean con el móvil un cartel del pasillo y ven en la pantalla el menú de la semana con fotos.', 'ra'],
      ['Una app de móvil muestra, encima de la foto del patio, el nombre de cada juego.', 'ra'],
      ['Con la tablet se apunta a una lámina de animales y en la pantalla se ve y se escucha cada animal.', 'ra']
    ],
    retos: [
      ['🩺', 'Perder el miedo al médico', 'Un cuento inmersivo que prepara la visita al médico o al dentista.'],
      ['🔥', 'Simulacro de emergencia', 'Practicar con el personal cómo evacuar a los peques.'],
      ['🌍', 'Viajes imposibles', 'Animales y lugares lejanos sin salir del aula.'],
      ['🧩', 'Formas y colores', 'Juegos que se tocan con las manos.'],
      ['👩‍🏫', 'Formación del personal', 'Gestionar una rabieta o un conflicto entre niños.'],
      ['🏫', 'Periodo de adaptación', 'Conocer la escuela antes del primer día.'],
      ['🤝', 'Inclusión', 'Actividades para niños y niñas con necesidades especiales.'],
      ['👪', 'Familias', 'Enseñar a las familias cómo es un día en la escuela.']
    ] },
  hb: { nombre: 'Higiene Bucodental', sector: 'Salud bucodental', centro: 'una clínica dental',
    sit: [
      ['Un niño con miedo al dentista ve una película submarina con las gafas mientras le hacen una limpieza.', 'rv'],
      ['Una alumna practica, en una clínica totalmente virtual, cómo recibir y preparar a un paciente.', 'rv'],
      ['Un simulacro de emergencia: un paciente virtual se desmaya en el sillón de una clínica virtual.', 'rv'],
      ['Un viaje dentro de una boca gigante virtual para ver cómo se forma la caries.', 'rv'],
      ['Con las gafas, una dentadura virtual gigante flota encima de la mesa real y el paciente la gira con la mano.', 'rm'],
      ['Mientras se practica sobre una maqueta real, aparece encima una guía virtual de dónde apoyar el cepillo.', 'rm'],
      ['La radiografía del paciente flota junto al sillón real y se amplía separando dos dedos en el aire.', 'rm'],
      ['En el gabinete real, unas marcas virtuales señalan dónde va cada instrumento al prepararlo.', 'rm'],
      ['Una app del móvil muestra, encima de tu sonrisa en la pantalla, cómo quedarían los dientes tras un blanqueamiento.', 'ra'],
      ['Al apuntar con la tablet a una lámina, aparece en la pantalla la anatomía del diente en 3D.', 'ra'],
      ['Un filtro de la cámara del móvil pone un temporizador en la pantalla mientras te cepillas.', 'ra'],
      ['Escaneas el envase de un producto y el móvil muestra cómo usarlo.', 'ra']
    ],
    retos: [
      ['😨', 'Miedo al dentista', 'Calmar al paciente antes o durante el tratamiento.'],
      ['🪥', 'Técnica de cepillado', 'Aprender a cepillarse bien, diente a diente.'],
      ['🦷', 'Anatomía dental', 'Ver el diente por dentro y cómo aparece la caries.'],
      ['🧒', 'Salud bucodental en los colegios', 'Enseñar higiene a niños y niñas.'],
      ['🧪', 'Esterilización', 'Aprender el circuito de limpieza del instrumental.'],
      ['🩻', 'Radiografías', 'Practicar cómo colocar al paciente.'],
      ['🚨', 'Emergencias en la clínica', 'Qué hacer si un paciente se desmaya.'],
      ['🧑‍⚕️', 'Atención al paciente', 'Recepción y explicaciones claras al paciente.']
    ] },
  is: { nombre: 'Integración Social', sector: 'Servicios sociales', centro: 'un centro o servicio de integración social',
    sit: [
      ['Un joven ensaya una entrevista de trabajo con un entrevistador virtual, en una oficina virtual.', 'rv'],
      ['Una persona con miedo a salir de casa practica, poco a poco, coger la guagua en una ciudad virtual.', 'rv'],
      ['Un educador en formación vive una discusión familiar simulada para aprender a mediar.', 'rv'],
      ['Ponerse en la piel de una persona con baja visión en un mundo virtual, para entender sus dificultades.', 'rv'],
      ['En la cocina real del centro aparecen pasos virtuales encima de cada utensilio para preparar una receta.', 'rm'],
      ['Flechas virtuales en el suelo real guían a una persona con discapacidad intelectual hasta el taller.', 'rm'],
      ['Sobre la mesa real aparece una maqueta virtual del barrio para planificar un recorrido.', 'rm'],
      ['Un avatar virtual, sentado en una silla real del despacho, ayuda a ensayar una conversación difícil.', 'rm'],
      ['Apuntas con el móvil a un impreso en papel y en la pantalla se ve qué hay que poner en cada casilla.', 'ra'],
      ['Una app traduce los carteles de la calle en la pantalla del móvil.', 'ra'],
      ['Al escanear un código en la puerta del centro, el móvil muestra el horario y los servicios.', 'ra'],
      ['En la tablet, la imagen de la parada de guagua muestra encima cuándo llega la próxima.', 'ra']
    ],
    retos: [
      ['💼', 'Buscar trabajo', 'Ensayar entrevistas y el primer día de trabajo.'],
      ['🚌', 'Autonomía en la calle', 'Aprender a moverse por la ciudad.'],
      ['🍳', 'Vida diaria', 'Cocinar, comprar y organizar la casa.'],
      ['🗣️', 'Habilidades sociales', 'Conversaciones y conflictos del día a día.'],
      ['🧠', 'Empatía', 'Ponerse en la piel de otra persona.'],
      ['😰', 'Miedos y ansiedad', 'Enfrentarse poco a poco a lo que da miedo.'],
      ['👴', 'Personas mayores', 'Estimular la memoria con recuerdos y lugares.'],
      ['🏠', 'Formación del personal', 'Situaciones difíciles en el centro.']
    ] }
};
const ORDEN = ['af','as','ei','hb','is'];

// ================= estilos =================
document.head.insertAdjacentHTML('beforeend', `<style>
.e3-tres{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem;margin:.6rem 0 1rem}
.e3-tres div{background:var(--mint);border:1px solid var(--mint2);border-radius:14px;padding:.7rem .8rem;font-size:.9rem;line-height:1.35}
.e3-tres b{display:block;color:var(--mint3);font-size:1rem;margin-bottom:.2rem}
.e3-tres .em{font-size:1.6rem;line-height:1;display:block;margin-bottom:.25rem}
.e3-aviso{background:#fff6d4;border:1px solid #efcd5f;border-radius:12px;padding:.6rem .8rem;font-size:.92rem;margin:.6rem 0}
.e3-sub{margin:1.3rem 0 .4rem;font-size:1.05rem;color:var(--mint3)}
.e3-sub small{display:block;color:var(--muted);font-weight:400;font-size:.86rem;margin-top:.1rem}
.e3-stats{display:flex;flex-wrap:wrap;gap:.5rem;margin:.4rem 0 .9rem}
.e3-stat{flex:1 1 90px;background:var(--mint);border:1px solid var(--mint2);border-radius:12px;padding:.35rem .7rem}
.e3-stat small{display:block;font-size:.68rem;color:var(--mint3);font-weight:800;text-transform:uppercase;letter-spacing:.05em}
.e3-stat b{font-size:1.2rem;font-variant-numeric:tabular-nums}
.e3-stat.err b{color:#b8433f}
.e3-mesa{display:flex;justify-content:center;min-height:150px;margin:.4rem 0 1rem}
.e3-carta{position:relative;max-width:520px;width:100%;background:#fff;border:2px solid var(--sky2);border-radius:20px;box-shadow:0 6px 0 var(--sky2);padding:1.1rem 1.2rem 1.2rem;font-size:1.05rem;line-height:1.4;user-select:none;-webkit-user-select:none;-webkit-touch-callout:none;cursor:grab;animation:e3Entra .4s backwards;touch-action:manipulation}
.e3-carta small{display:block;font-size:.7rem;font-weight:800;letter-spacing:.07em;text-transform:uppercase;color:var(--sky3);margin-bottom:.35rem}
.e3-carta.mal{animation:e3Mal .45s;border-color:#e06666;box-shadow:0 6px 0 #f0a8a8}
.e3-carta.fantasma{position:fixed;z-index:300;pointer-events:none;animation:none;box-shadow:0 18px 34px rgba(0,0,0,.25);opacity:.95;left:0;top:0;margin:0}
.e3-carta.origen{opacity:.3}
.e3-cubos{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:.6rem}
.e3-cubo{display:flex;flex-direction:column;align-items:center;gap:.2rem;min-height:110px;border-radius:18px;border:2px dashed var(--mint2);background:linear-gradient(170deg,#fff,var(--mint));padding:.7rem .4rem;font-weight:700;color:#1d4d38;transition:transform .15s,box-shadow .15s}
.e3-cubo .em{font-size:2.1rem;line-height:1}
.e3-cubo small{font-weight:600;color:var(--muted)}
.e3-cubo:hover,.e3-cubo.diana{transform:translateY(-3px);box-shadow:0 0 0 4px var(--mint2)}
.e3-cubo.diana{border-style:solid;border-color:var(--mint3)}
.e3-cubo.ok{animation:e3Ok .5s}
.e3-fb{margin:.8rem 0 0;border-radius:12px;padding:.6rem .85rem;font-size:.93rem;line-height:1.4}
.e3-fb:empty{display:none}
.e3-fb.bien{background:#e3f6ec;border:1px solid var(--mint2)}
.e3-fb.mal{background:#fdecec;border:1px solid #f0a8a8}
.e3-fin{text-align:center;background:linear-gradient(135deg,var(--mint),#fff6d4);border:2px solid var(--mint2);border-radius:20px;padding:1.3rem 1rem;width:100%}
.e3-fin .big{font-size:3rem;line-height:1}
.e3-fin h3{margin:.4rem 0 .2rem;color:#1d4d38}
.e3-lista{margin-top:1rem;border:1px solid var(--line);border-radius:14px;background:#fff}
.e3-lista summary{cursor:pointer;padding:.7rem 1rem;font-weight:700}
.e3-lista ol{margin:0;padding:0 1rem .8rem 2.2rem;font-size:.9rem}
.e3-lista li{padding:.25rem 0;border-top:1px dashed var(--line)}
.e3-lista .tp{font-weight:700;color:var(--mint3)}
.e3-lista .fl{color:#b8433f;font-size:.8rem}
.e3-escala{display:grid;grid-template-columns:minmax(0,13rem) minmax(0,1fr);gap:.6rem;align-items:center;padding:.5rem 0;border-top:1px dashed var(--line)}
.e3-escala:first-of-type{border-top:0}
.e3-escala .lbl{font-weight:700}
.e3-caras{display:flex;gap:.35rem;flex-wrap:wrap}
.e3-cara{flex:1 1 0;min-width:52px;min-height:58px;display:flex;flex-direction:column;align-items:center;justify-content:center;border-radius:12px;border:1.5px solid var(--line);background:#fff;padding:.25rem}
.e3-cara span{font-size:1.5rem;line-height:1.1;filter:grayscale(.7);opacity:.75}
.e3-cara small{font-size:.66rem;color:var(--muted);line-height:1.1;text-align:center}
.e3-cara[aria-pressed=true]{border-color:var(--mint3);background:var(--mint);box-shadow:0 0 0 2px var(--mint2)}
.e3-cara[aria-pressed=true] span{filter:none;opacity:1;transform:scale(1.15)}
.e3-chips{display:flex;flex-wrap:wrap;gap:.45rem;margin:.3rem 0 .6rem}
.e3-chip{min-height:44px;border-radius:999px;border:1.5px solid var(--line);background:#fff;padding:.35rem .9rem;font-size:.92rem}
.e3-chip:hover{border-color:var(--mint2)}
.e3-chip[aria-pressed=true]{background:var(--mint3);border-color:var(--mint3);color:#fff;font-weight:700}
.e3-chip[aria-pressed=true]::before{content:'✓ '}
.e3-retos{display:grid;grid-template-columns:repeat(auto-fill,minmax(170px,1fr));gap:.6rem;margin:.4rem 0 .6rem}
.e3-reto{display:flex;flex-direction:column;align-items:flex-start;gap:.2rem;text-align:left;border-radius:16px;border:2px solid var(--line);background:#fff;padding:.7rem .8rem;min-height:120px;transition:transform .15s}
.e3-reto .em{font-size:1.8rem;line-height:1}
.e3-reto b{font-size:.95rem}
.e3-reto small{color:var(--muted);font-size:.8rem;line-height:1.3}
.e3-reto:hover{transform:translateY(-2px);border-color:var(--mint2)}
.e3-reto[aria-pressed=true]{border-color:var(--mint3);background:var(--mint);box-shadow:0 0 0 3px var(--mint2)}
.e3-reto.propio{border-style:dashed}
.e3-in{width:100%;min-height:44px;border:1.5px solid var(--line);border-radius:12px;padding:.5rem .75rem;font:inherit;background:#fff}
.e3-in:focus{border-color:var(--mint3);outline:none}
.e3-mezcla{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:1rem;align-items:center}
.e3-ventana{position:relative;aspect-ratio:2/1;border-radius:18px;overflow:hidden;border:2px solid var(--line);background:#f4efe6}
.e3-capa{position:absolute;inset:0;transition:opacity .15s}
.e3-real{background:linear-gradient(#f6f1e8 62%,#d9cbb3 62%)}
.e3-real span{position:absolute;font-size:2.4rem}
.e3-virt{background:radial-gradient(circle at 30% 30%,#7fd3f5,#2f5f98 70%,#1d2f5c)}
.e3-virt span{position:absolute;font-size:2.4rem}
.e3-movil{position:absolute;inset:12% 30%;border:6px solid #2f2d3a;border-radius:16px;display:none}
.e3-ventana.ra .e3-movil{display:block}
.e3-ventana.rm .e3-virt{background:transparent}
.e3-ventana.ra .e3-virt{-webkit-mask:linear-gradient(#000,#000) 50%/40% 76% no-repeat;mask:linear-gradient(#000,#000) 50%/40% 76% no-repeat}
.e3-rango{width:100%;height:44px;accent-color:var(--mint3)}
.e3-extremos{display:flex;justify-content:space-between;font-size:.8rem;color:var(--muted);margin-top:-.2rem}
.e3-tipo{margin-top:.5rem;border-radius:12px;padding:.55rem .8rem;font-size:.93rem;background:var(--mint);border:1px solid var(--mint2)}
.e3-tipo.no{background:#fdecec;border-color:#f0a8a8}
.e3-tipo b{font-size:1.05rem}
.e3-boceto{border:1px solid var(--line);border-radius:16px;background:#fff;padding:.6rem}
.e3-herr{display:flex;flex-wrap:wrap;gap:.35rem;align-items:center;margin-bottom:.5rem}
.e3-herr .grp{display:flex;gap:.3rem;align-items:center;padding-right:.4rem;margin-right:.1rem;border-right:1px solid var(--line)}
.e3-herr .grp:last-child{border-right:0}
.e3-herr button{min-width:44px;min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:#fff;padding:0 .5rem;font-size:1rem}
.e3-herr button[aria-pressed=true]{border-color:var(--mint3);box-shadow:0 0 0 2px var(--mint2);background:var(--mint)}
.e3-herr .col{width:44px;padding:0}
.e3-herr .col i{display:block;width:22px;height:22px;border-radius:50%;margin:auto;border:2px solid #fff;box-shadow:0 0 0 1px #0002}
.e3-lienzo{position:relative}
.e3-lienzo canvas{display:block;width:100%;height:auto;border-radius:12px;touch-action:none;cursor:crosshair;background:#2f2d3a}
.e3-sellos{display:none;flex-wrap:wrap;gap:.3rem;margin:.1rem 0 .5rem}
.e3-sellos.ver{display:flex}
.e3-sellos button{font-size:1.4rem;min-width:44px;min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:#fff}
.e3-sellos button[aria-pressed=true]{border-color:var(--mint3);background:var(--mint)}
.e3-tienda{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:1.2rem;align-items:start}
.e3-form label{display:block;font-weight:700;margin:.7rem 0 .25rem}
.e3-form label:first-child{margin-top:0}
.e3-emojis{display:grid;grid-template-columns:repeat(auto-fill,minmax(44px,1fr));gap:.3rem}
.e3-emojis button{font-size:1.4rem;min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:#fff}
.e3-emojis button[aria-pressed=true]{border-color:var(--mint3);background:var(--mint);box-shadow:0 0 0 2px var(--mint2)}
.e3-cols{display:flex;gap:.4rem;flex-wrap:wrap}
.e3-cols button{width:44px;height:44px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1px var(--line)}
.e3-cols button[aria-pressed=true]{box-shadow:0 0 0 3px var(--ink)}
.tn{position:sticky;top:5.5rem;border-radius:22px;background:#fff;border:1px solid var(--line);box-shadow:0 10px 26px rgba(47,45,58,.12);overflow:hidden}
.tn-band{height:70px;background:var(--c);background:linear-gradient(120deg,var(--c),color-mix(in srgb,var(--c) 45%,#fff))}
.tn-cab{display:flex;gap:.9rem;padding:0 1rem;margin-top:-38px;align-items:flex-end}
.tn-ico{flex:none;width:86px;height:86px;border-radius:22px;background:var(--c);display:flex;align-items:center;justify-content:center;font-size:3rem;border:4px solid #fff;box-shadow:0 4px 12px rgba(0,0,0,.15)}
.tn-cab h4{margin:0 0 .1rem;font-size:1.25rem;line-height:1.15;overflow-wrap:anywhere}
.tn-cab small{color:var(--muted)}
.tn-badges{display:flex;flex-wrap:wrap;gap:.3rem;padding:.7rem 1rem 0}
.tn-badges span{border-radius:999px;background:#f1eef6;padding:.15rem .6rem;font-size:.78rem;font-weight:700}
.tn-badges span.t{background:var(--c);color:#fff}
.tn-esl{margin:.6rem 1rem 0;font-style:italic;color:var(--ink);overflow-wrap:anywhere}
.tn-shot{margin:.7rem 1rem 0;border-radius:12px;overflow:hidden;background:#2f2d3a}
.tn-shot canvas{display:block;width:100%;height:auto}
.tn-info{margin:.6rem 1rem 1rem;font-size:.86rem;color:var(--muted);line-height:1.45}
.tn-info b{color:var(--ink)}
.tn-inst{display:block;margin:0 1rem 1rem auto;border:0;border-radius:999px;background:var(--c);color:#fff;font-weight:700;padding:.5rem 1.4rem;min-height:44px}
.e3-vacio{color:#a7a2b3;font-style:italic}
@keyframes e3Entra{from{opacity:0;transform:translateY(12px) scale(.94)}to{opacity:1;transform:none}}
@keyframes e3Mal{0%,100%{transform:none}20%{transform:translateX(-8px) rotate(-1.5deg)}40%{transform:translateX(8px) rotate(1.5deg)}60%{transform:translateX(-5px)}80%{transform:translateX(5px)}}
@keyframes e3Ok{0%{transform:none}40%{transform:scale(1.08)}100%{transform:none}}
@media (max-width:760px){
  .e3-tienda,.e3-mezcla{grid-template-columns:1fr}
  .tn{position:static}
}
@media (max-width:640px){
  .e3-tres{grid-template-columns:1fr}
  .e3-cubos{gap:.4rem}
  .e3-cubo{min-height:96px;font-size:.85rem}
  .e3-cubo .em{font-size:1.7rem}
  .e3-escala{grid-template-columns:1fr;gap:.3rem}
  .e3-cara{min-width:44px}
  .e3-retos{grid-template-columns:repeat(2,minmax(0,1fr))}
  .e3-herr .grp{border-right:0;padding-right:0}
}
@media (prefers-reduced-motion:reduce){.e3-carta,.e3-cubo,.e3-reto{animation:none!important;transition:none}}
</style>`);

// ================= textos de la página =================
function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>
    <h2 style="font-size:1.1rem">Las tres realidades</h2>
    <div class="e3-tres">${Object.values(TIPOS).map(t => `<div><span class="em" aria-hidden="true">${t.e}</span><b>${esc(t.n)}</b>${esc(t.def)}</div>`).join('')}</div>
    <p style="margin:.2rem 0">Tu app tiene que ser de <b>realidad virtual</b> o de <b>realidad mixta</b>, y servir para ${esc(C.centro)}.</p>
    ${C.aviso ? `<div class="e3-aviso">⚠️ ${esc(C.aviso)}</div>` : ''}`;
}
const chipsHTML = (g, ops) => `<div class="e3-chips" role="group">${ops.map(o => `<button type="button" class="e3-chip" data-g="${g}" data-v="${esc(o)}" aria-pressed="false">${esc(o)}</button>`).join('')}</div>`;
function construirTarea(C){
  const P2 = COMUN.p2, P3 = COMUN.p3, P4 = COMUN.p4;
  let h = `<input type="hidden" id="e3Dato" data-campo="e3">`;
  // Parte 1
  h += `<section class="fase f1"><header><h2>Parte 1 · ¿Virtual, mixta o aumentada?</h2></header><div class="cuerpo">
    <p>Lee cada situación y toca el tipo de realidad que es (o arrastra la tarjeta encima). Si fallas, la tarjeta se queda hasta que aciertes.</p>
    <div class="e3-stats"><div class="e3-stat"><small>Clasificadas</small><b id="e3N">0/${NSIT}</b></div><div class="e3-stat err"><small>Errores</small><b id="e3E">0</b></div><div class="e3-stat"><small>A la primera</small><b id="e3P">0</b></div></div>
    <div class="e3-mesa" id="e3Mesa"></div>
    <div class="e3-cubos" id="e3Cubos">${Object.entries(TIPOS).map(([k, t]) => `<button type="button" class="e3-cubo" data-cubo="${k}"><span class="em" aria-hidden="true">${t.e}</span>${esc(t.n)}<small id="e3C_${k}">0</small></button>`).join('')}</div>
    <div class="e3-fb" id="e3Fb" role="status" aria-live="polite"></div>
    <details class="e3-lista"><summary>📋 Tus situaciones clasificadas</summary><ol id="e3Hechas"></ol></details>
  </div></section>`;
  // Parte 2 (no sale en semipresencial: allí no se prueban las gafas en clase)
  if (!C.sinGafas) h += `<section class="fase f2"><header><h2>Parte 2 · Mi experiencia con las gafas</h2></header><div class="cuerpo">
    <p>Hazla <b>después de probar las gafas en clase</b>. No hay respuestas buenas ni malas: cuenta lo que sentiste.</p>
    <h3 class="e3-sub">2.1 · ¿Qué probaste? <small>Puedes marcar varias.</small></h3>${chipsHTML('x.prob', P2.prob)}
    <h3 class="e3-sub">2.2 · Valora la experiencia</h3>
    ${P2.escalas.map(([k, t, caras, txt]) => `<div class="e3-escala"><span class="lbl">${esc(t)}</span><div class="e3-caras" role="group" aria-label="${esc(t)}">${caras.map((c, i) => `<button type="button" class="e3-cara" data-rate="${k}" data-v="${i + 1}" aria-pressed="false" aria-label="${esc(t + ': ' + txt[i])}"><span aria-hidden="true">${c}</span><small>${esc(txt[i])}</small></button>`).join('')}</div></div>`).join('')}
    <h3 class="e3-sub">2.3 · ¿Qué te sorprendió? <small>Al menos una.</small></h3>${chipsHTML('x.sor', P2.sor)}
    <h3 class="e3-sub">2.4 · ¿Qué cambiarías? <small>Al menos una.</small></h3>${chipsHTML('x.cam', P2.cam)}
    ${caja('p2_frase', '2.5', 'En una o dos frases: ¿cómo te sentiste dentro de las gafas?', '', { corta: true, ph: 'Escribe aquí cómo te sentiste…' })}
  </div></section>`;
  // Parte 3
  h += `<section class="fase f3"><header><h2>Parte 3 · Constructor de la app</h2></header><div class="cuerpo">
    <h3 class="e3-sub" style="margin-top:.4rem">3.1 · Elige un reto de tu sector <small>O inventa el tuyo con la última tarjeta.</small></h3>
    <div class="e3-retos" id="e3Retos">${C.retos.map((r, i) => `<button type="button" class="e3-reto" data-reto="${i}" aria-pressed="false"><span class="em" aria-hidden="true">${r[0]}</span><b>${esc(r[1])}</b><small>${esc(r[2])}</small></button>`).join('')}
      <button type="button" class="e3-reto propio" data-reto="propio" aria-pressed="false"><span class="em" aria-hidden="true">💡</span><b>Reto propio</b><small>Un problema de tu sector que se te ocurra a ti.</small></button></div>
    <div id="e3PropioW" hidden><label for="e3Propio" style="font-weight:700">Nombre de tu reto</label><input class="e3-in" id="e3Propio" data-in="a.propio" maxlength="60" placeholder="Por ejemplo: aprender a…"></div>
    ${caja('p3_idea', '3.2', esc(P3.idea), '', { corta: true, ph: 'Qué problema resuelve y cómo…' })}
    <h3 class="e3-sub">3.3 · ¿Cuánto mundo real se ve? <small>Mueve el deslizador: así decides si tu app es de realidad virtual o mixta.</small></h3>
    <div class="e3-mezcla"><div class="e3-ventana" id="e3Ventana" aria-hidden="true">
        <div class="e3-capa e3-real" id="e3Real"><span style="left:8%;top:30%">🪴</span><span style="left:40%;top:42%">🪑</span><span style="left:72%;top:14%">🖼️</span><span style="left:76%;top:52%">🧑</span></div>
        <div class="e3-capa e3-virt" id="e3Virt"><span style="left:14%;top:18%">🐠</span><span style="left:46%;top:40%">✨</span><span style="left:66%;top:20%">🐙</span><span style="left:30%;top:60%">🫧</span></div>
        <div class="e3-movil"></div></div>
      <div><input type="range" class="e3-rango" id="e3Rango" min="0" max="100" step="1" value="50" aria-label="Cuánto mundo virtual se ve"><div class="e3-extremos"><span>Todo real</span><span>Todo virtual</span></div><div class="e3-tipo" id="e3Tipo"></div></div></div>
    <h3 class="e3-sub">3.4 · Monta tu app con las fichas</h3>
    <p style="margin:.2rem 0 0"><b>¿Para quién es?</b> <small style="color:var(--muted)">(puedes marcar varias)</small></p>${chipsHTML('a.quien', P3.quien)}
    <p style="margin:.2rem 0 0"><b>¿Dónde se usa?</b></p>${chipsHTML('a.donde', P3.donde)}
    <p style="margin:.2rem 0 0"><b>¿Cómo se maneja?</b> <small style="color:var(--muted)">(puedes marcar varias)</small></p>${chipsHTML('a.ctrl', P3.ctrl)}
    <p style="margin:.2rem 0 0"><b>¿Cuánto dura una sesión?</b></p>${chipsHTML('a.dura', P3.dura)}
    <h3 class="e3-sub">3.5 · Boceto en el visor <small>Dibuja con el dedo o el ratón lo que ve la persona dentro de las gafas. Puedes poner pegatinas o subir la foto de un dibujo en papel.</small></h3>
    <div class="e3-boceto">
      <div class="e3-herr" role="toolbar" aria-label="Herramientas de dibujo">
        <div class="grp"><button type="button" data-bh="lapiz" aria-pressed="true" title="Lápiz" aria-label="Lápiz">✏️</button><button type="button" data-bh="goma" aria-pressed="false" title="Goma" aria-label="Goma">🧽</button><button type="button" data-bh="sello" aria-pressed="false" title="Pegatinas" aria-label="Pegatinas">⭐</button></div>
        <div class="grp">${['#2f2d3a','#ffffff','#e04848','#f2a33a','#2f9e75','#2f74c0','#7c5cd6'].map((c, i) => `<button type="button" class="col" data-bc="${c}" aria-pressed="${i ? 'false' : 'true'}" aria-label="Color ${c}"><i style="background:${c}"></i></button>`).join('')}</div>
        <div class="grp"><button type="button" data-bg="4" aria-pressed="false" aria-label="Trazo fino">·</button><button type="button" data-bg="10" aria-pressed="true" aria-label="Trazo medio">●</button><button type="button" data-bg="24" aria-pressed="false" aria-label="Trazo grueso">⬤</button></div>
        <div class="grp"><button type="button" data-bf="blanco" aria-pressed="true" title="Fondo blanco" aria-label="Fondo blanco">⬜</button><button type="button" data-bf="sala" aria-pressed="false" title="Fondo: la sala real (realidad mixta)" aria-label="Fondo sala real">🏠</button><button type="button" data-bf="foto" aria-pressed="false" title="Subir foto de tu dibujo" aria-label="Subir foto">📷</button></div>
        <div class="grp"><button type="button" data-ba="deshacer" title="Deshacer" aria-label="Deshacer">↩️</button><button type="button" data-ba="borrar" title="Borrar todo" aria-label="Borrar todo">🗑️</button></div>
      </div>
      <div class="e3-sellos" id="e3Sellos">${['⭐','❤️','➡️','❓','✅','❌','🙂','🎯','🔊','💬','🏆','👋'].map((s, i) => `<button type="button" data-bs="${s}" aria-pressed="${i ? 'false' : 'true'}">${s}</button>`).join('')}</div>
      <div class="e3-lienzo"><canvas id="e3Canvas" width="1000" height="500" aria-label="Lienzo del boceto"></canvas></div>
      <input type="file" id="e3Foto" accept="image/*" hidden>
    </div>
    <h3 class="e3-sub">3.6 · La experiencia en 3 escenas <small>Puedes añadir una imagen o un dibujo en cada escena.</small></h3>
    ${P3.escenas.map((e, i) => caja('p3_e' + i, '', esc(e[0]), `<div class="pista">${esc(e[1])}</div>`, { ph: 'Cuenta la escena…' })).join('')}
  </div></section>`;
  // Parte 4
  h += `<section class="fase f4"><header><h2>Parte 4 · Tu app en la tienda</h2></header><div class="cuerpo">
    <p>Rellena los datos y mira cómo queda la ficha de tu app. La captura de pantalla es tu boceto.</p>
    <div class="e3-tienda"><div class="e3-form">
      <label for="e3Nom">Nombre de la app</label><input class="e3-in" id="e3Nom" data-in="t.nombre" maxlength="30" placeholder="Un nombre corto y fácil de recordar">
      <label>Icono</label><div class="e3-emojis" role="group" aria-label="Icono">${P4.emojis.map(e => `<button type="button" data-g="t.emoji" data-v="${e}" aria-pressed="false">${e}</button>`).join('')}</div>
      <label>Color</label><div class="e3-cols" role="group" aria-label="Color">${P4.colores.map(([n, c], i) => `<button type="button" data-g="t.color" data-v="${i}" aria-pressed="false" aria-label="${n}" title="${n}" style="background:${c}"></button>`).join('')}</div>
      <label for="e3Esl">Eslogan</label><input class="e3-in" id="e3Esl" data-in="t.eslogan" maxlength="70" placeholder="Una frase que haga que la quieran probar">
      <label>Edad recomendada</label>${chipsHTML('t.edad', P4.edades)}
      <label>Precio</label>${chipsHTML('t.precio', P4.precios)}
      <div id="e3ImpW" hidden><label for="e3Imp">Importe en euros</label><input class="e3-in" id="e3Imp" data-in="t.importe" inputmode="decimal" maxlength="8" placeholder="Por ejemplo: 4,99"></div>
    </div><div class="tn" id="e3Tn"></div></div>
  </div></section>`;
  // Parte 5
  h += `<section class="fase f1"><header><h2>Parte 5 · Ventajas, riesgos y mercado</h2></header><div class="cuerpo">
    ${COMUN.p5.map((q, i) => caja('p5_' + i, '5.' + (i + 1), esc(q))).join('')}
  </div></section>`;
  return h;
}

// ================= estado (campo oculto «e3») =================
let S = null, S_ULT = null, S_ESP = null;
const barajarE3 = a => { for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
function nuevoE3(){
  return { v: 1, j: { orden: barajarE3([...Array(NSIT).keys()]), n: 0, er: 0, fallos: [] },
    x: { val: {}, prob: [], sor: [], cam: [] },
    a: { reto: null, propio: '', mez: 50, mezOk: false, quien: [], donde: '', ctrl: [], dura: '' },
    b: { fondo: 'blanco', trazos: '', foto: '' },
    t: { nombre: '', emoji: '', color: '0', eslogan: '', edad: '', precio: '', importe: '' } };
}
// Lo que llega de un borrador (o del servidor) se revisa campo a campo
function cargarE3(v){
  const s = nuevoE3();
  let o = null; try { o = JSON.parse(v); } catch(e){}
  if (!o || o.v !== 1) return s;
  const txt = (x, n) => typeof x === 'string' ? x.slice(0, n) : '';
  const lista = (x, ops) => Array.isArray(x) ? x.filter(e => ops.includes(e)) : [];
  const una = (x, ops) => ops.includes(x) ? x : '';
  const img = x => typeof x === 'string' && /^data:image\/(png|jpeg);base64,[A-Za-z0-9+/=]+$/.test(x) ? x : '';
  const P2 = COMUN.p2, P3 = COMUN.p3, P4 = COMUN.p4;
  if (o.j && Array.isArray(o.j.orden) && o.j.orden.length === NSIT && [...o.j.orden].sort((a, b) => a - b).every((n, i) => n === i)){
    s.j.orden = o.j.orden; s.j.n = Math.max(0, Math.min(NSIT, +o.j.n || 0)); s.j.er = Math.max(0, +o.j.er || 0);
    s.j.fallos = Array.isArray(o.j.fallos) ? o.j.fallos.filter(n => Number.isInteger(n) && n >= 0 && n < NSIT) : [];
  }
  if (o.x){
    if (o.x.val) P2.escalas.forEach(([k]) => { const n = +o.x.val[k]; if (n >= 1 && n <= 5) s.x.val[k] = Math.round(n); });
    s.x.prob = lista(o.x.prob, P2.prob); s.x.sor = lista(o.x.sor, P2.sor); s.x.cam = lista(o.x.cam, P2.cam);
  }
  if (o.a){
    s.a.reto = (o.a.reto === 'propio' || (Number.isInteger(o.a.reto) && o.a.reto >= 0 && o.a.reto < 8)) ? o.a.reto : null;
    s.a.propio = txt(o.a.propio, 60); s.a.mez = Math.max(0, Math.min(100, Math.round(+o.a.mez || 0))); s.a.mezOk = !!o.a.mezOk;
    s.a.quien = lista(o.a.quien, P3.quien); s.a.donde = una(o.a.donde, P3.donde); s.a.ctrl = lista(o.a.ctrl, P3.ctrl); s.a.dura = una(o.a.dura, P3.dura);
  }
  if (o.b){ s.b.fondo = una(o.b.fondo, ['blanco','sala','foto']) || 'blanco'; s.b.trazos = img(o.b.trazos); s.b.foto = img(o.b.foto); }
  if (o.t){
    s.t.nombre = txt(o.t.nombre, 30); s.t.emoji = una(o.t.emoji, P4.emojis); s.t.color = una(String(o.t.color), P4.colores.map((_, i) => String(i))) || '0';
    s.t.eslogan = txt(o.t.eslogan, 70); s.t.edad = una(o.t.edad, P4.edades); s.t.precio = una(o.t.precio, P4.precios); s.t.importe = txt(o.t.importe, 8);
  }
  return s;
}
function e3Escribir(){ const i = document.getElementById('e3Dato'); if (!i || !S) return; S_ULT = JSON.stringify(S); i.value = S_ULT; }
function e3Cambio(){ e3Escribir(); programarGuardado(); }
const ruta = g => { const [a, b] = g.split('.'); return [S[a], b]; };

// El motor llama a esto en cada cambio; si el campo trae otro valor (borrador cargado), se recarga todo
function alActualizar(){
  const i = document.getElementById('e3Dato'); if (!i) return;
  if (S && i.value === S_ULT && S_ESP === ESP) return;
  S = cargarE3(i.value); S_ESP = ESP; E3FB = null; e3Escribir();
  e3PintarTodo();
  e3CargarBoceto();
}
function e3PintarTodo(){
  e3Juego(); e3Botones(); e3Inputs(); e3Mezcla(); e3HerrBoceto(); e3Tienda();
}

// ================= Parte 1 · juego =================
const SIT = () => CICLOS[ESP].sit;
let E3FB = null;
function e3Juego(){
  if (!S) return;
  const j = S.j, C = CICLOS[ESP], q = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  q('e3N', `${j.n}/${NSIT}`); q('e3E', j.er); q('e3P', j.n - j.orden.slice(0, j.n).filter(n => j.fallos.includes(n)).length);
  Object.keys(TIPOS).forEach(k => q('e3C_' + k, j.orden.slice(0, j.n).filter(n => C.sit[n][1] === k).length + ' de 4'));
  const mesa = document.getElementById('e3Mesa'); if (!mesa) return;
  if (j.n >= NSIT){
    mesa.innerHTML = `<div class="e3-fin" role="status"><div class="big" aria-hidden="true">🏆</div><h3>¡Has clasificado las ${NSIT} situaciones!</h3><p style="margin:.2rem 0;color:var(--muted)">Errores: <b>${j.er}</b> · Acertadas a la primera: <b>${NSIT - j.fallos.length}</b> de ${NSIT}. Ya distingues las tres realidades: ahora diseña tu app.</p></div>`;
    document.getElementById('e3Cubos').style.display = 'none';
  } else {
    const n = j.orden[j.n];
    mesa.innerHTML = `<div class="e3-carta" id="e3Carta" tabindex="-1"><small>Situación ${j.n + 1} de ${NSIT}</small>${esc(C.sit[n][0])}</div>`;
    document.getElementById('e3Cubos').style.display = '';
  }
  const fb = document.getElementById('e3Fb');
  if (fb){ fb.className = 'e3-fb' + (E3FB ? ' ' + E3FB[0] : ''); fb.innerHTML = E3FB ? E3FB[1] : ''; }
  const l = document.getElementById('e3Hechas');
  if (l) l.innerHTML = j.n ? j.orden.slice(0, j.n).map(n => `<li>${esc(C.sit[n][0])} → <span class="tp">${esc(TIPOS[C.sit[n][1]].n)}</span>${j.fallos.includes(n) ? ' <span class="fl">(con algún fallo)</span>' : ''}</li>`).join('') : '<li style="border:0;list-style:none;margin-left:-1.2rem;color:var(--muted)">Aquí irán las situaciones que clasifiques.</li>';
}
function e3Clasificar(tipo){
  if (!S || S.j.n >= NSIT) return;
  const j = S.j, n = j.orden[j.n], bien = SIT()[n][1];
  if (tipo === bien){
    j.n++;
    E3FB = ['bien', `✅ <b>¡Bien! Es ${esc(TIPOS[bien].n.toLowerCase())}.</b> ${esc(TIPOS[bien].def)}`];
    const c = document.querySelector(`[data-cubo="${tipo}"]`); if (c){ c.classList.remove('ok'); void c.offsetWidth; c.classList.add('ok'); }
    e3Juego();
    if (j.n >= NSIT && typeof confetiE3 === 'function') confetiE3();
  } else {
    j.er++; if (!j.fallos.includes(n)) j.fallos.push(n);
    E3FB = ['mal', `❌ <b>No es ${esc(TIPOS[tipo].n.toLowerCase())}.</b> Recuerda: ${esc(TIPOS[tipo].def.charAt(0).toLowerCase() + TIPOS[tipo].def.slice(1))} Vuelve a leer la situación.`];
    e3Juego();
    const c = document.getElementById('e3Carta'); if (c){ c.classList.remove('mal'); void c.offsetWidth; c.classList.add('mal'); }
    if (navigator.vibrate) try { navigator.vibrate(60); } catch(e){}
  }
  e3Cambio();
}
// Arrastrar la tarjeta: con ratón en cuanto se mueve; con el dedo, tras mantenerla pulsada un momento
let E3A = null, E3SUPR = 0;
document.addEventListener('pointerdown', e => {
  const c = e.target.closest('#e3Carta'); if (!c || e.button > 0) return;
  E3A = { c, x0: e.clientX, y0: e.clientY, x: e.clientX, y: e.clientY, pid: e.pointerId, toque: e.pointerType !== 'mouse', activo: false };
  if (E3A.toque) E3A.lp = setTimeout(() => { if (E3A && !E3A.activo) e3ArrEmpezar(); }, 350);
});
document.addEventListener('pointermove', e => {
  if (!E3A || e.pointerId !== E3A.pid) return;
  E3A.x = e.clientX; E3A.y = e.clientY;
  if (!E3A.activo){ const d = Math.hypot(E3A.x - E3A.x0, E3A.y - E3A.y0); if (E3A.toque){ if (d > 10){ clearTimeout(E3A.lp); E3A = null; } return; } if (d < 8) return; e3ArrEmpezar(); }
  e3ArrMover();
});
document.addEventListener('pointerup', e => { if (!E3A || e.pointerId !== E3A.pid) return; clearTimeout(E3A.lp); if (E3A.activo){ const d = e3Diana(); e3ArrFin(); if (d) e3Clasificar(d.dataset.cubo); } E3A = null; });
document.addEventListener('pointercancel', () => { if (!E3A) return; clearTimeout(E3A.lp); if (E3A.activo) e3ArrFin(); E3A = null; });
document.addEventListener('touchmove', e => { if (E3A && E3A.activo) e.preventDefault(); }, { passive: false });
function e3ArrEmpezar(){
  const r = E3A.c.getBoundingClientRect(); E3A.activo = true; E3A.dx = E3A.x0 - r.left; E3A.dy = E3A.y0 - r.top;
  const g = E3A.c.cloneNode(true); g.removeAttribute('id'); g.classList.add('fantasma'); g.style.width = r.width + 'px'; g.setAttribute('aria-hidden', 'true');
  document.body.appendChild(g); E3A.g = g; E3A.c.classList.add('origen');
  if (E3A.toque && navigator.vibrate) try { navigator.vibrate(15); } catch(e){}
  e3ArrMover();
}
function e3Diana(){ const t = document.elementFromPoint(E3A.x, E3A.y); return t && t.closest('[data-cubo]'); }
function e3ArrMover(){
  E3A.g.style.transform = `translate(${E3A.x - E3A.dx}px,${E3A.y - E3A.dy}px) rotate(2deg)`;
  const d = e3Diana(); document.querySelectorAll('.e3-cubo.diana').forEach(x => x !== d && x.classList.remove('diana')); if (d) d.classList.add('diana');
}
function e3ArrFin(){ if (E3A.g) E3A.g.remove(); E3A.c.classList.remove('origen'); document.querySelectorAll('.e3-cubo.diana').forEach(x => x.classList.remove('diana')); E3SUPR = Date.now() + 400; }

function confetiE3(){
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const c = document.createElement('canvas'); c.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:400'; document.body.appendChild(c);
  const dpr = window.devicePixelRatio || 1, W = innerWidth, H = innerHeight; c.width = W * dpr; c.height = H * dpr;
  const x = c.getContext('2d'); x.scale(dpr, dpr);
  const cols = ['#2f7d5c','#4fb38a','#9fd8bd','#f6bf9e','#a9c8ef','#c9b8f0','#ffcf4d'];
  const ps = Array.from({ length: 180 }, () => ({ x: W / 2 + (Math.random() - .5) * W * .4, y: H * .42, vx: (Math.random() - .5) * 14, vy: -Math.random() * 14 - 5, r: Math.random() * 7 + 5, a: Math.random() * 6, va: (Math.random() - .5) * .35, c: cols[Math.random() * cols.length | 0] }));
  const t0 = performance.now(); let u = t0;
  (function paso(t){
    const dt = Math.min(2, (t - u) / 16.7); u = t; x.clearRect(0, 0, W, H);
    ps.forEach(p => { p.vy += .32 * dt; p.vx *= .99; p.x += p.vx * dt; p.y += p.vy * dt; p.a += p.va * dt; x.save(); x.translate(p.x, p.y); x.rotate(p.a); x.fillStyle = p.c; x.fillRect(-p.r / 2, -p.r / 4, p.r, p.r / 2); x.restore(); });
    if (t - t0 < 3200) requestAnimationFrame(paso); else c.remove();
  })(t0);
}

// ================= Partes 2, 3 y 4 · fichas, caras, retos e inputs =================
const MULTI = ['x.prob','x.sor','x.cam','a.quien','a.ctrl'];
function e3Botones(){
  if (!S) return;
  document.querySelectorAll('#tarea [data-g]').forEach(b => { const [o, k] = ruta(b.dataset.g); const v = o[k]; b.setAttribute('aria-pressed', String(Array.isArray(v) ? v.includes(b.dataset.v) : v === b.dataset.v)); });
  document.querySelectorAll('[data-rate]').forEach(b => b.setAttribute('aria-pressed', String(S.x.val[b.dataset.rate] === +b.dataset.v)));
  document.querySelectorAll('[data-reto]').forEach(b => b.setAttribute('aria-pressed', String(String(S.a.reto) === b.dataset.reto)));
  const pw = document.getElementById('e3PropioW'); if (pw) pw.hidden = S.a.reto !== 'propio';
  const iw = document.getElementById('e3ImpW'); if (iw) iw.hidden = !['Pago único', 'Suscripción mensual'].includes(S.t.precio);
}
function e3Inputs(){ document.querySelectorAll('[data-in]').forEach(el => { const [o, k] = ruta(el.dataset.in); if (el.value !== o[k]) el.value = o[k]; }); }
document.addEventListener('click', e => {
  if (!S) return;
  const t = e.target;
  const cubo = t.closest('[data-cubo]'); if (cubo){ if (Date.now() < E3SUPR) return; return e3Clasificar(cubo.dataset.cubo); }
  const g = t.closest('#tarea [data-g]');
  if (g){
    const [o, k] = ruta(g.dataset.g), v = g.dataset.v;
    if (MULTI.includes(g.dataset.g)){ const a = o[k]; const i = a.indexOf(v); if (i >= 0) a.splice(i, 1); else a.push(v); }
    else o[k] = (o[k] === v && g.dataset.g !== 't.color') ? '' : v;
    e3Botones(); e3Tienda(); e3Cambio(); return;
  }
  const r = t.closest('[data-rate]'); if (r){ S.x.val[r.dataset.rate] = +r.dataset.v; e3Botones(); e3Cambio(); return; }
  const re = t.closest('[data-reto]');
  if (re){ S.a.reto = re.dataset.reto === 'propio' ? 'propio' : +re.dataset.reto; e3Botones(); e3Tienda(); e3Cambio(); if (S.a.reto === 'propio') setTimeout(() => { const p = document.getElementById('e3Propio'); if (p) p.focus(); }, 50); return; }
});
document.addEventListener('input', e => {
  if (!S) return;
  const el = e.target.closest('[data-in]');
  if (el){ const [o, k] = ruta(el.dataset.in); o[k] = el.value.slice(0, +el.maxLength > 0 ? +el.maxLength : 80); e3Tienda(); e3Cambio(); return; }
  if (e.target.id === 'e3Rango'){ S.a.mez = +e.target.value; S.a.mezOk = true; e3Mezcla(); e3Tienda(); e3Cambio(); }
});

// 3.3 · Cuánto mundo real se ve
function tipoMezcla(v){ return v < 15 ? null : v < 45 ? 'ra' : v < 85 ? 'rm' : 'rv'; }
function e3Mezcla(){
  if (!S) return;
  const v = S.a.mez, r = document.getElementById('e3Rango'); if (!r) return;
  if (+r.value !== v) r.value = v;
  const tp = tipoMezcla(v), ven = document.getElementById('e3Ventana');
  // Real: se ve la sala; mixta: sala + objetos virtuales; aumentada: objetos solo dentro del móvil; virtual: solo lo virtual
  document.getElementById('e3Real').style.opacity = tp === 'rv' ? 0 : 1;
  document.getElementById('e3Virt').style.opacity = tp === null ? 0 : 1;
  ven.classList.toggle('ra', tp === 'ra'); ven.classList.toggle('rm', tp === 'rm');
  const d = document.getElementById('e3Tipo');
  if (!S.a.mezOk){ d.className = 'e3-tipo no'; d.innerHTML = 'Mueve el deslizador para decidir cuánto mundo real ve la persona.'; return; }
  d.className = 'e3-tipo' + (tp === 'rv' || tp === 'rm' ? '' : ' no');
  d.innerHTML = tp === null ? '<b>Todo real:</b> sin gafas no hay app. Mueve el deslizador hacia la derecha.'
    : tp === 'ra' ? `<b>${TIPOS.ra.e} Realidad aumentada.</b> Lo digital se ve en una pantalla. Tu app tiene que ser de realidad virtual o mixta: mueve el deslizador a la derecha.`
    : `<b>${TIPOS[tp].e} Tu app es de ${TIPOS[tp].n.toLowerCase()}.</b> ${esc(TIPOS[tp].def)}`;
}

// ================= 3.5 · Boceto en el visor =================
const BW = 1000, BH = 500;
let LZ = null, LZX = null, FOTO = null, HIST = [], BH_ = { modo: 'lapiz', color: '#2f2d3a', grosor: 10, sello: '⭐' }, BD = null, BRAF = 0;
function lienzo(){ if (!LZ){ LZ = document.createElement('canvas'); LZ.width = BW; LZ.height = BH; LZX = LZ.getContext('2d'); } return LZ; }
// Forma del visor: unas gafas con hueco para la nariz; lo de fuera queda oscuro
function formaVisor(ctx, nueva = true){
  if (nueva) ctx.beginPath();
  const x0 = 34, y0 = 34, x1 = BW - 34, y1 = BH - 34, r = 150, nx = BW / 2;
  ctx.moveTo(x0 + r, y0); ctx.lineTo(x1 - r, y0); ctx.quadraticCurveTo(x1, y0, x1, y0 + r); ctx.lineTo(x1, y1 - r); ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
  ctx.lineTo(nx + 110, y1); ctx.quadraticCurveTo(nx + 70, y1, nx + 55, y1 - 70); ctx.quadraticCurveTo(nx, y1 - 170, nx - 55, y1 - 70); ctx.quadraticCurveTo(nx - 70, y1, nx - 110, y1);
  ctx.lineTo(x0 + r, y1); ctx.quadraticCurveTo(x0, y1, x0, y1 - r); ctx.lineTo(x0, y0 + r); ctx.quadraticCurveTo(x0, y0, x0 + r, y0); ctx.closePath();
}
function fondoSala(ctx){
  ctx.fillStyle = '#f6f1e8'; ctx.fillRect(0, 0, BW, BH);
  ctx.fillStyle = '#e4d8c4'; ctx.beginPath(); ctx.moveTo(0, BH); ctx.lineTo(260, 330); ctx.lineTo(740, 330); ctx.lineTo(BW, BH); ctx.fill();
  ctx.strokeStyle = '#cdbfa8'; ctx.lineWidth = 3; ctx.beginPath();
  ctx.moveTo(260, 330); ctx.lineTo(260, 40); ctx.moveTo(740, 330); ctx.lineTo(740, 40); ctx.moveTo(260, 330); ctx.lineTo(740, 330);
  ctx.moveTo(0, BH); ctx.lineTo(260, 330); ctx.moveTo(BW, BH); ctx.lineTo(740, 330); ctx.stroke();
  ctx.strokeStyle = '#b9c9dd'; ctx.lineWidth = 6; ctx.strokeRect(400, 110, 200, 130);
  ctx.font = '14px sans-serif'; ctx.fillStyle = '#a99c86'; ctx.textAlign = 'center'; ctx.fillText('la sala real', 500, 300);
}
function dibujarBoceto(ctx){
  ctx.save(); ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, BW, BH);
  if (S && S.b.fondo === 'sala') fondoSala(ctx);
  else if (S && S.b.fondo === 'foto' && FOTO && FOTO.complete && FOTO.naturalWidth){
    const k = Math.max(BW / FOTO.naturalWidth, BH / FOTO.naturalHeight), w = FOTO.naturalWidth * k, h = FOTO.naturalHeight * k;
    ctx.drawImage(FOTO, (BW - w) / 2, (BH - h) / 2, w, h);
  }
  ctx.drawImage(lienzo(), 0, 0);
  // Marco oscuro de las gafas
  ctx.beginPath(); ctx.rect(0, 0, BW, BH); formaVisor(ctx, false); ctx.fillStyle = '#2f2d3a'; ctx.fill('evenodd');
  formaVisor(ctx); ctx.strokeStyle = '#55526a'; ctx.lineWidth = 6; ctx.stroke();
  ctx.restore();
}
function e3Render(){ BRAF = 0; const c = document.getElementById('e3Canvas'); if (c) dibujarBoceto(c.getContext('2d')); const s = document.getElementById('e3Shot'); if (s && c){ s.getContext('2d').drawImage(c, 0, 0, s.width, s.height); } }
const e3Pedir = () => { if (!BRAF) BRAF = requestAnimationFrame(e3Render); };
function e3CargarBoceto(){
  lienzo(); LZX.clearRect(0, 0, BW, BH); HIST = [];
  FOTO = null;
  if (S.b.foto){ FOTO = new Image(); FOTO.onload = e3Pedir; FOTO.src = S.b.foto; }
  if (S.b.trazos){ const im = new Image(); const S0 = S; im.onload = () => { if (S !== S0) return; LZX.clearRect(0, 0, BW, BH); LZX.drawImage(im, 0, 0); e3Pedir(); }; im.src = S.b.trazos; }
  else if (EJEMPLO) e3EjemploBoceto();
  e3Pedir();
}
function e3EjemploBoceto(){
  LZX.save(); LZX.font = 'bold 40px sans-serif'; LZX.fillStyle = '#7c5cd6'; LZX.textAlign = 'center'; LZX.fillText('[Aquí va tu boceto]', BW / 2, 200);
  LZX.font = '80px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif'; LZX.fillText('⭐   💬   🎯', BW / 2, 320); LZX.restore();
  S.b.trazos = LZ.toDataURL('image/png'); e3Escribir();
}
function e3HerrBoceto(){
  document.querySelectorAll('[data-bh]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.bh === BH_.modo)));
  document.querySelectorAll('[data-bc]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.bc === BH_.color)));
  document.querySelectorAll('[data-bg]').forEach(b => b.setAttribute('aria-pressed', String(+b.dataset.bg === BH_.grosor)));
  document.querySelectorAll('[data-bs]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.bs === BH_.sello)));
  document.querySelectorAll('[data-bf]').forEach(b => b.setAttribute('aria-pressed', String(!!S && b.dataset.bf === S.b.fondo)));
  const s = document.getElementById('e3Sellos'); if (s) s.classList.toggle('ver', BH_.modo === 'sello');
}
function lienzoVacio(){
  const d = LZX.getImageData(0, 0, BW, BH).data;
  for (let i = 3; i < d.length; i += 16) if (d[i]) return false;
  return true;
}
function e3GuardarTrazos(){ S.b.trazos = lienzoVacio() ? '' : LZ.toDataURL('image/png'); e3Cambio(); e3Tienda(); }
function e3Historia(){ HIST.push(LZX.getImageData(0, 0, BW, BH)); if (HIST.length > 15) HIST.shift(); }
const e3Punto = (c, e) => { const r = c.getBoundingClientRect(); return [(e.clientX - r.left) / r.width * BW, (e.clientY - r.top) / r.height * BH]; };
document.addEventListener('pointerdown', e => {
  const c = e.target.closest('#e3Canvas'); if (!c || !S || e.button > 0) return;
  e.preventDefault(); try { c.setPointerCapture(e.pointerId); } catch(_){} lienzo(); e3Historia();
  const [x, y] = e3Punto(c, e);
  if (BH_.modo === 'sello'){
    LZX.save(); LZX.font = '72px "Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif'; LZX.textAlign = 'center'; LZX.textBaseline = 'middle'; LZX.fillText(BH_.sello, x, y); LZX.restore();
    e3Pedir(); e3GuardarTrazos(); return;
  }
  BD = { pid: e.pointerId, x, y };
  LZX.save(); LZX.lineCap = 'round'; LZX.lineJoin = 'round'; LZX.lineWidth = BH_.modo === 'goma' ? BH_.grosor * 2.5 : BH_.grosor;
  LZX.globalCompositeOperation = BH_.modo === 'goma' ? 'destination-out' : 'source-over'; LZX.strokeStyle = BH_.color; LZX.fillStyle = BH_.color;
  LZX.beginPath(); LZX.arc(x, y, LZX.lineWidth / 2, 0, Math.PI * 2); LZX.fill(); LZX.restore();
  e3Pedir();
});
document.addEventListener('pointermove', e => {
  if (!BD || e.pointerId !== BD.pid) return;
  const c = document.getElementById('e3Canvas'); if (!c) return;
  const [x, y] = e3Punto(c, e);
  LZX.save(); LZX.lineCap = 'round'; LZX.lineJoin = 'round'; LZX.lineWidth = BH_.modo === 'goma' ? BH_.grosor * 2.5 : BH_.grosor;
  LZX.globalCompositeOperation = BH_.modo === 'goma' ? 'destination-out' : 'source-over'; LZX.strokeStyle = BH_.color;
  LZX.beginPath(); LZX.moveTo(BD.x, BD.y); LZX.lineTo(x, y); LZX.stroke(); LZX.restore();
  BD.x = x; BD.y = y; e3Pedir();
});
const e3FinTrazo = e => { if (!BD || e.pointerId !== BD.pid) return; BD = null; e3GuardarTrazos(); };
document.addEventListener('pointerup', e3FinTrazo);
document.addEventListener('pointercancel', e3FinTrazo);
document.addEventListener('click', async e => {
  if (!S) return;
  const t = e.target;
  const h = t.closest('[data-bh]'); if (h){ BH_.modo = h.dataset.bh; return e3HerrBoceto(); }
  const c = t.closest('[data-bc]'); if (c){ BH_.color = c.dataset.bc; if (BH_.modo !== 'lapiz') BH_.modo = 'lapiz'; return e3HerrBoceto(); }
  const g = t.closest('[data-bg]'); if (g){ BH_.grosor = +g.dataset.bg; if (BH_.modo === 'sello') BH_.modo = 'lapiz'; return e3HerrBoceto(); }
  const s = t.closest('[data-bs]'); if (s){ BH_.sello = s.dataset.bs; return e3HerrBoceto(); }
  const f = t.closest('[data-bf]');
  if (f){
    if (f.dataset.bf === 'foto') return document.getElementById('e3Foto').click();
    S.b.fondo = f.dataset.bf; e3HerrBoceto(); e3Pedir(); e3Cambio(); return;
  }
  const a = t.closest('[data-ba]');
  if (a){
    lienzo();
    if (a.dataset.ba === 'deshacer'){ if (!HIST.length) return aviso('No hay nada que deshacer.'); LZX.putImageData(HIST.pop(), 0, 0); }
    else {
      const v = await pregunta('¿Seguro que quieres borrar todo el boceto?', [['Cancelar', false], ['Sí, borrar', true, 'btn-danger']]);
      if (!v) return;
      e3Historia(); LZX.clearRect(0, 0, BW, BH);
      if (S.b.foto){ S.b.foto = ''; FOTO = null; if (S.b.fondo === 'foto') S.b.fondo = 'blanco'; e3HerrBoceto(); }
    }
    e3Pedir(); e3GuardarTrazos();
  }
});
document.addEventListener('change', async e => {
  if (e.target.id !== 'e3Foto' || !S) return;
  const f = e.target.files[0]; e.target.value = '';
  if (!f || !f.type.startsWith('image/')) return aviso('Ese archivo no es una imagen.');
  let src; try { src = await prepararImagen(f); } catch(_){ return aviso('No se ha podido leer la imagen.'); }
  S.b.foto = src; S.b.fondo = 'foto'; FOTO = new Image(); FOTO.onload = () => { e3Pedir(); e3Tienda(); }; FOTO.src = src;
  e3HerrBoceto(); e3Cambio(); aviso('Foto puesta de fondo. Puedes dibujar encima.');
});
const hayBoceto = () => !!S && (!!S.b.trazos || !!S.b.foto);

// ================= Parte 4 · ficha de la tienda =================
const colorTn = () => COMUN.p4.colores[+S.t.color || 0][1];
const nombreReto = () => S.a.reto === 'propio' ? (S.a.propio.trim() || 'Reto propio') : (S.a.reto != null ? CICLOS[ESP].retos[S.a.reto][1] : '');
const textoPrecio = () => !S.t.precio ? '' : ['Pago único', 'Suscripción mensual'].includes(S.t.precio) && S.t.importe.trim() ? `${S.t.precio}: ${S.t.importe.trim()} €` : S.t.precio;
function infoTn(){
  const tp = S.a.mezOk ? tipoMezcla(S.a.mez) : null;
  return [
    ['Reto', nombreReto()],
    ['Tipo', tp ? TIPOS[tp].n : ''],
    ['Para', S.a.quien.join(', ')],
    ['Dónde', S.a.donde],
    ['Se maneja', S.a.ctrl.join(', ')],
    ['Duración', S.a.dura]
  ];
}
function e3Tienda(){
  const el = document.getElementById('e3Tn'); if (!el || !S) return;
  const t = S.t, tp = S.a.mezOk ? tipoMezcla(S.a.mez) : null;
  el.style.setProperty('--c', colorTn());
  const ph = s => `<span class="e3-vacio">${s}</span>`;
  el.innerHTML = `<div class="tn-band"></div><div class="tn-cab"><div class="tn-ico" aria-hidden="true">${t.emoji || '❔'}</div><div><h4>${t.nombre.trim() ? esc(t.nombre) : ph('Nombre de la app')}</h4><small>${esc(completo())} · ${esc(CICLOS[ESP].sector)}</small></div></div>
    <div class="tn-badges">${tp === 'rv' || tp === 'rm' ? `<span class="t">${TIPOS[tp].e} ${esc(TIPOS[tp].n)}</span>` : ''}${t.edad ? `<span>Edad ${esc(t.edad)}</span>` : ''}${t.precio ? `<span>${esc(textoPrecio())}</span>` : ''}</div>
    <p class="tn-esl">${t.eslogan.trim() ? '«' + esc(t.eslogan) + '»' : ph('Tu eslogan')}</p>
    <div class="tn-shot"><canvas id="e3Shot" width="500" height="250" aria-label="Captura: tu boceto"></canvas></div>
    <div class="tn-info">${infoTn().filter(([k]) => k !== 'Tipo').map(([k, v]) => `<b>${esc(k)}:</b> ${v ? esc(v) : ph('sin elegir')}`).join('<br>')}</div>
    <button type="button" class="tn-inst" tabindex="-1" aria-hidden="true">Instalar</button>`;
  e3Pedir();
}
// La ficha dibujada en un lienzo (para el PDF: así salen los emojis y los colores)
function tarjetaCanvas(){
  const W = 1200, H = 720, c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'), col = colorTn(), t = S.t, EMO = '"Segoe UI Emoji","Apple Color Emoji","Noto Color Emoji",sans-serif';
  const rr = (X, Y, w, h, r) => { x.beginPath(); x.moveTo(X + r, Y); x.lineTo(X + w - r, Y); x.quadraticCurveTo(X + w, Y, X + w, Y + r); x.lineTo(X + w, Y + h - r); x.quadraticCurveTo(X + w, Y + h, X + w - r, Y + h); x.lineTo(X + r, Y + h); x.quadraticCurveTo(X, Y + h, X, Y + h - r); x.lineTo(X, Y + r); x.quadraticCurveTo(X, Y, X + r, Y); x.closePath(); };
  const wrap = (s, X, Y, maxW, lh, maxL) => { const ps = String(s).split(/\s+/); let l = '', n = 0; for (let i = 0; i < ps.length; i++){ const p = l ? l + ' ' + ps[i] : ps[i]; if (x.measureText(p).width > maxW && l){ x.fillText(l, X, Y + n * lh); n++; l = ps[i]; if (n >= maxL - 1 && i < ps.length - 1){ let r = ps.slice(i).join(' '); while (x.measureText(r + '…').width > maxW && r.length > 1) r = r.slice(0, -1); x.fillText(r + '…', X, Y + n * lh); return n + 1; } } else l = p; } if (l){ x.fillText(l, X, Y + n * lh); n++; } return n; };
  x.fillStyle = '#ffffff'; x.fillRect(0, 0, W, H);
  const gr = x.createLinearGradient(0, 0, W, 0); gr.addColorStop(0, col); gr.addColorStop(1, col + '66');
  x.save(); rr(0, 0, W, H, 40); x.clip(); x.fillStyle = gr; x.fillRect(0, 0, W, 130); x.restore();
  x.strokeStyle = '#e7e1ef'; x.lineWidth = 3; rr(1.5, 1.5, W - 3, H - 3, 40); x.stroke();
  // Icono
  x.fillStyle = '#ffffff'; rr(52, 62, 196, 196, 48); x.fill(); x.fillStyle = col; rr(60, 70, 180, 180, 42); x.fill();
  x.font = '110px ' + EMO; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillStyle = '#fff'; x.fillText(t.emoji || '?', 150, 166);
  x.textAlign = 'left'; x.textBaseline = 'alphabetic';
  // Nombre, autora y sector
  x.fillStyle = '#2f2d3a'; x.font = 'bold 54px sans-serif'; wrap(t.nombre.trim() || '[Nombre de la app]', 280, 205, 640, 58, 1);
  x.fillStyle = '#6c6878'; x.font = '26px sans-serif'; wrap(completo() + ' · ' + CICLOS[ESP].sector, 282, 246, 640, 30, 1);
  // Botón instalar
  x.fillStyle = col; rr(950, 160, 200, 70, 35); x.fill(); x.fillStyle = '#fff'; x.font = 'bold 30px sans-serif'; x.textAlign = 'center'; x.fillText('Instalar', 1050, 206); x.textAlign = 'left';
  // Etiquetas
  const tp = S.a.mezOk ? tipoMezcla(S.a.mez) : null;
  let bx = 60; x.font = 'bold 24px sans-serif';
  [[tp === 'rv' || tp === 'rm' ? TIPOS[tp].n : '', true], [t.edad ? 'Edad ' + t.edad : '', false], [textoPrecio(), false]].forEach(([s, fuerte]) => {
    if (!s) return; const w = x.measureText(s).width + 36; x.fillStyle = fuerte ? col : '#f1eef6'; rr(bx, 290, w, 44, 22); x.fill(); x.fillStyle = fuerte ? '#fff' : '#2f2d3a'; x.fillText(s, bx + 18, 320); bx += w + 12;
  });
  // Eslogan
  x.fillStyle = '#2f2d3a'; x.font = 'italic 32px sans-serif'; wrap(t.eslogan.trim() ? '«' + t.eslogan.trim() + '»' : '[Eslogan]', 60, 390, 1080, 38, 2);
  // Captura (boceto) e información
  const b = document.createElement('canvas'); b.width = BW; b.height = BH; dibujarBoceto(b.getContext('2d'));
  x.save(); rr(60, 450, 520, 260, 18); x.clip(); x.drawImage(b, 60, 450, 520, 260); x.restore();
  let iy = 470; x.font = '24px sans-serif';
  for (const [k, v] of infoTn().filter(([k]) => k !== 'Tipo')){
    x.fillStyle = '#2f2d3a'; x.font = 'bold 24px sans-serif'; x.fillText(k + ':', 620, iy);
    const kw = x.measureText(k + ': ').width; x.font = '24px sans-serif'; x.fillStyle = '#6c6878';
    iy += wrap(v || '—', 620 + kw, iy, 1140 - 620 - kw, 30, 1) * 30 + 10;
  }
  return c.toDataURL('image/jpeg', 0.92);
}

// ================= comprobaciones y progreso =================
const SIN_GAFAS = () => !!(CICLOS[ESP] && CICLOS[ESP].sinGafas);
function piezasE3(){
  if (!S) return null;
  const P2 = COMUN.p2;
  const p2 = SIN_GAFAS() ? [] : [
    ['qué probaste', S.x.prob.length > 0],
    ['las 4 valoraciones', P2.escalas.every(([k]) => S.x.val[k])],
    ['qué te sorprendió', S.x.sor.length > 0],
    ['qué cambiarías', S.x.cam.length > 0],
    ['la frase', llena('p2_frase')]
  ];
  const tp = tipoMezcla(S.a.mez);
  const p3 = [
    ['el reto', S.a.reto !== null && (S.a.reto !== 'propio' || !!S.a.propio.trim())],
    ['tu idea', llena('p3_idea')],
    ['cuánto mundo real se ve (realidad virtual o mixta)', S.a.mezOk && (tp === 'rv' || tp === 'rm')],
    ['para quién', S.a.quien.length > 0],
    ['dónde', !!S.a.donde],
    ['cómo se maneja', S.a.ctrl.length > 0],
    ['duración', !!S.a.dura],
    ['el boceto', hayBoceto()],
    ...COMUN.p3.escenas.map((e, i) => [e[0].split(' · ')[0].toLowerCase(), llena('p3_e' + i)])
  ];
  const p4 = [
    ['nombre', !!S.t.nombre.trim()],
    ['icono', !!S.t.emoji],
    ['eslogan', !!S.t.eslogan.trim()],
    ['edad', !!S.t.edad],
    ['precio', !!S.t.precio && (!['Pago único', 'Suscripción mensual'].includes(S.t.precio) || !!S.t.importe.trim())]
  ];
  const p5 = COMUN.p5.map((_, i) => ['pregunta 5.' + (i + 1), llena('p5_' + i)]);
  return { p1: S.j.n, p2, p3, p4, p5 };
}
function progresoPropio(){
  const p = piezasE3(); if (!p) return null;
  const ok = l => l.filter(x => x[1]).length;
  const hechas = Math.min(p.p1, NSIT) / NSIT * 3 + ok(p.p2) + ok(p.p3) + ok(p.p4) + ok(p.p5);
  const total = 3 + p.p2.length + p.p3.length + p.p4.length + p.p5.length;
  return { hechas, total, texto: `${Math.round(hechas / total * 100)} % del ejercicio hecho` };
}
function listaChecks(){
  const p = piezasE3(); if (!p) return [];
  const fila = (t, l, falta) => { const n = l.filter(x => x[1]).length; return { ok: n === l.length, t, cuenta: `${n}/${l.length}`, falta: falta + l.filter(x => !x[1]).map(x => x[0]).join(', ') + '.' }; };
  return [
    { ok: p.p1 >= NSIT, t: `Parte 1 · Las ${NSIT} situaciones clasificadas`, cuenta: `${p.p1}/${NSIT}`, falta: 'Sigue clasificando hasta terminar el juego.' },
    ...(SIN_GAFAS() ? [] : [fila('Parte 2 · Tu experiencia con las gafas', p.p2, 'Falta: ')]),
    fila('Parte 3 · Tu app montada', p.p3, 'Falta: '),
    fila('Parte 4 · La ficha de la tienda', p.p4, 'Falta: '),
    fila('Parte 5 · Ventajas, riesgos y mercado', p.p5, 'Falta: ')
  ];
}

// ================= PDF =================
async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL, doc } = api;
  const j = S.j;
  const img = (src, w, h) => { sitio(h + 3); try { doc.addImage(src, 'JPEG', api.M, api.y, w, h); } catch(e){ P('[Imagen no compatible]', { i: true, color: COL.muted }); return; } api.y = api.y + h + 4; };
  const linea = (k, v) => texto([{ t: k + ': ', b: true }, { t: v || '(sin responder)', i: !v }], { size: 10.2, tras: 0.8, color: v ? COL.ink : COL.muted });
  // Parte 1
  banda('Parte 1 · ¿Virtual, mixta o aumentada?', [223,243,234], COL.mint);
  texto([{ t: 'Clasificadas: ', b: true }, { t: `${j.n} de ${NSIT}` }, { t: '     Errores: ', b: true }, { t: String(j.er) }, { t: '     A la primera: ', b: true }, { t: `${j.orden.slice(0, j.n).filter(n => !j.fallos.includes(n)).length} de ${NSIT}` }], { size: 10.5, tras: 2 });
  let k = 1;
  for (const n of j.orden.slice(0, j.n)) texto([{ t: C.sit[n][0] + ' ' }, { t: '= ' + TIPOS[C.sit[n][1]].n, b: true }, { t: j.fallos.includes(n) ? ' (con algún fallo)' : '', i: true }], { size: 9.4, marca: (k++) + '.', tras: 0.6 });
  if (j.n < NSIT) P(`Quedan ${NSIT - j.n} situaciones sin clasificar.`, { size: 9.4, i: true, color: COL.muted });
  // Parte 2 (no en semipresencial)
  if (!C.sinGafas){
    banda('Parte 2 · Mi experiencia con las gafas', [226,238,252], COL.sky);
    linea('Qué probé', S.x.prob.join(', '));
    for (const [kk, t, , txt] of COMUN.p2.escalas) linea(t, S.x.val[kk] ? `${S.x.val[kk]} de 5 (${txt[S.x.val[kk] - 1]})` : '');
    linea('Lo que me sorprendió', S.x.sor.join(', '));
    linea('Lo que cambiaría', S.x.cam.join(', '));
    api.y = api.y + 2;
    await caja('p2_frase', '2.5', 'Cómo me sentí dentro de las gafas', { compacta: true });
  }
  // Parte 3
  banda('Parte 3 · Constructor de la app', [255,233,220], COL.peach);
  const tp = S.a.mezOk ? tipoMezcla(S.a.mez) : null;
  linea('Reto', nombreReto() + (S.a.reto !== null && S.a.reto !== 'propio' ? ' (' + C.retos[S.a.reto][2] + ')' : ''));
  await caja('p3_idea', '3.2', COMUN.p3.idea, { compacta: true });
  linea('Cuánto se ve de mundo virtual', S.a.mezOk ? `${S.a.mez} %  (${tp ? TIPOS[tp].n : 'todo real'})` : '');
  { // barra de mezcla
    sitio(10); const x0 = api.M, w = api.CW, y0 = api.y;
    doc.setFillColor(236, 228, 214); doc.roundedRect(x0, y0, w, 4, 2, 2, 'F');
    if (S.a.mezOk){ doc.setFillColor(47, 95, 152); doc.roundedRect(x0, y0, Math.max(4, w * S.a.mez / 100), 4, 2, 2, 'F'); }
    doc.setFontSize(7.5); doc.setTextColor(...COL.muted); doc.text('Todo real', x0, y0 + 7.5, { baseline: 'top' }); doc.text('Todo virtual', x0 + w, y0 + 7.5, { baseline: 'top', align: 'right' });
    api.y = y0 + 13;
  }
  linea('Para quién', S.a.quien.join(', '));
  linea('Dónde se usa', S.a.donde);
  linea('Cómo se maneja', S.a.ctrl.join(', '));
  linea('Duración de una sesión', S.a.dura);
  separador(); sitio(20);
  P('3.5  Boceto en el visor', { size: 10.8, b: true, color: COL.lav, tras: 1.5 });
  if (hayBoceto()){ const b = document.createElement('canvas'); b.width = BW; b.height = BH; dibujarBoceto(b.getContext('2d')); img(b.toDataURL('image/jpeg', 0.9), api.CW, api.CW / 2); }
  else P('(Sin boceto)', { i: true, color: COL.muted, sang: 3 });
  separador();
  for (let i = 0; i < COMUN.p3.escenas.length; i++) await caja('p3_e' + i, '3.6', COMUN.p3.escenas[i][0]);
  // Parte 4: ficha en página apaisada
  api.nuevaPag('l');
  banda('Parte 4 · Tu app en la tienda', [233,226,251], COL.lav);
  { const Hp = doc.internal.pageSize.getHeight(); const maxH = Hp - api.y - api.M - 14; let w = api.CW, h = w * 720 / 1200; if (h > maxH){ h = maxH; w = h * 1200 / 720; }
    try { doc.addImage(tarjetaCanvas(), 'JPEG', api.M + (api.CW - w) / 2, api.y, w, h); } catch(e){ P('[No se ha podido dibujar la ficha]', { i: true, color: COL.muted }); }
    api.y = api.y + h + 4; }
  api.nuevaPag('p');
  // Parte 5
  banda('Parte 5 · Ventajas, riesgos y mercado', [223,243,234], COL.mint);
  for (let i = 0; i < COMUN.p5.length; i++) await caja('p5_' + i, '5.' + (i + 1), COMUN.p5[i]);
}

// ================= ejemplo relleno: textos de muestra entre corchetes =================
function ejemploCampos(){
  const s = nuevoE3();
  s.j = { orden: [...Array(NSIT).keys()], n: NSIT, er: 2, fallos: [3, 7] };
  s.x = { val: { inm: 4, com: 3, fac: 4, mar: 2 }, prob: ['Una visita virtual'], sor: ['La sensación de estar dentro'], cam: ['El peso de las gafas'] };
  s.a = { reto: 0, propio: '', mez: 70, mezOk: true, quien: ['Profesionales (para formarse)'], donde: 'En el centro de trabajo', ctrl: ['Con las manos (sin mandos)'], dura: '5–15 min' };
  s.t = { nombre: '[Nombre de la app]', emoji: '🥽', color: '1', eslogan: '[Eslogan de la app]', edad: '+16', precio: 'La paga el centro', importe: '' };
  return { e3: JSON.stringify(s) };
}
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (id === 'p2_frase') return t('[Texto de muestra] Cómo te sentiste dentro de las gafas, con tus palabras.');
  if (id === 'p3_idea') return t('[Texto de muestra] Qué problema de tu sector resuelve la app y cómo lo hace, en 2 o 3 líneas.');
  if (/^p3_e\d$/.test(id)) return t(`[Texto de muestra] Qué pasa en la escena ${+id.slice(-1) + 1}: qué ve, qué oye y qué hace la persona.`);
  if (/^p5_/.test(id)) return t('[Texto de muestra] Tu respuesta razonada, pensando en tu sector profesional.');
  if (id === 'fuentes') return '<ul><li>[App, vídeo o web que te inspiró · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y qué parte de la idea es tuya] o «No he usado IA».</p>';
  return '';
}

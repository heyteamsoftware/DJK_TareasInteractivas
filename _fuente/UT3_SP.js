// ===== UT3_SP · Semipresencial y Recuperaciones: la nube en tu profesión =====
// Adaptación interactiva del ejercicio «UT3 · E1 · La nube y…» (Word de EI SEMI e IS SEMI).
// Partes interactivas (se guardan en campos ocultos, en JSON):
//   clasif   → 1.1 ¿Buena práctica o riesgo?   { i: 'b' | 'r' }
//   plan_ms_* y plan_gw_* → 1.4 Comparación de los planes de Microsoft 365 y Google Workspace (campos de texto)
//   (hasta el 23-11-2026 el 1.4 comparaba el plan barato y el caro de una app cualquiera: plan_b_*, plan_c_*; ya no se usan)
//   nube     → 2.2 Monta tu nube              { c: [{ id, n }], d: { archivo: carpeta } }
//   permisos → 2.3 ¿Quién puede ver qué?       { archivo: 'A' | 'B' | 'C' | 'D' }

const COMUN = {
  codigo: 'UT3_SP',
  corto: 'UT3 · Semipresencial',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT3 · Sistemas en la nube (cloud)',
  ejercicio: 'La nube en tu profesión',
  ra: 'RA3',
  ce: 'b, e',
  modalidad: 'Individual · semipresencial',
  raTexto: 'Identifica sistemas basados en cloud/nube y su influencia en el desarrollo de los sistemas digitales.',
  ceTextos: [
    ['b', 'Se han identificado las principales funciones de la cloud/nube (procesamiento de datos, intercambio de información, ejecución de aplicaciones, entre otros).'],
    ['e', 'Se han identificado las ventajas que proporciona la utilización de la cloud/nube en los sistemas conectados.']
  ],
  objetivo: 'Usar la nube como lo harías en tu trabajo: saber para qué sirve y qué riesgos tiene, elegir una aplicación real, comparar los planes de pago de Microsoft 365 y Google Workspace, organizar y compartir con seguridad la información de una actividad y superar una misión de seis retos, con tu propia carpeta en la nube. Es individual.',
  pasos: [
    '<b>Parte 1:</b> clasifica 8 situaciones (buena práctica o riesgo), elige una aplicación en la nube real, compara los planes de pago de Microsoft 365 y Google Workspace y explica los riesgos.',
    '<b>Parte 2:</b> resuelve el caso práctico de tu sector: monta la nube creando carpetas y metiendo cada archivo en la suya, decide quién puede ver cada archivo y responde a las preguntas.',
    '<b>Parte 3:</b> supera la misión: seis retos cortos que se corrigen solos (compartir, auditoría, incidente, guía rápida, nombres y tu carpeta real en una nube).',
    'Cita tus fuentes, revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Es individual: escribe con tus palabras (pegar texto está desactivado). Sí puedes pegar, arrastrar o subir imágenes.',
    'Los precios y los planes tienen que ser reales y de ahora: sácalos de las páginas oficiales de Microsoft 365 y Google Workspace que te enlazamos.',
    'En tu carpeta de la nube no pongas nunca datos ni fotos de personas reales: todo tiene que ser inventado.'
  ],
  criterios: [
    ['Parte 1 · Funciones de la nube y riesgos', 'Explicas para qué sirve la nube en tu sector, citas una aplicación real, comparas con datos reales y con criterio los planes de pago de Microsoft 365 y Google Workspace y explicas los riesgos de compartir mal la información.', 2],
    ['Parte 2 · Herramienta y organización de la información', 'Eliges una herramienta rápida y segura y la justificas, y organizas la información del caso en carpetas claras, con cada archivo en su sitio.', 2],
    ['Parte 2 · Ventajas y privacidad', 'Indicas ventajas frente al papel y precauciones de privacidad concretas (permisos, contraseñas, fotografías, datos personales), y explicas a una persona sin conocimientos cómo acceder.', 2],
    ['Parte 3 · Misión: pon la nube a salvo', 'Resuelves con criterio los retos (compartir, auditoría, incidente, guía, nombres), tu carpeta real tiene una estructura clara con documentos de ejemplo y el enlace funciona, y la reflexión final es propia.', 2],
    ['Presentación y corrección', 'Trabajo ordenado, bien redactado y sin errores.', 1],
    ['Citación de fuentes y uso declarado de IA', 'Citas todas las fuentes y declaras si has usado IA, para qué y cómo has comprobado lo que te dijo.', 1]
  ],
  numFuentes: '4',
  fuentes: 'Cita todas las fuentes consultadas (título, web o institución, fecha y enlace), incluidas las páginas de precios que hayas usado, y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y cómo has verificado lo que te ha dicho.',
  siglas: [
    ['RGPD', 'Reglamento General de Protección de Datos'],
    ['IA', 'Inteligencia artificial'],
    ['PDF', 'Portable Document Format: formato de documento portátil']
  ]
};

// ===== Contenido de cada especialidad =====
// arch: los 8 archivos del caso → [id, icono, nombre, respuestas válidas en «¿Quién puede ver qué?», por qué]
// A = solo el equipo · B = personas invitadas, solo ver · C = personas invitadas, pueden rellenar o editar · D = cualquiera con el enlace
const ESPECIALIDAD = {
  ei: {
    prof: 'Técnico Superior en Educación Infantil', centro: 'la escuela infantil', dest: 'las familias', entidad: 'una escuela infantil pequeña',
    contexto: 'Imagina que trabajas en una escuela infantil y quieres usar la nube para mejorar la comunicación y la participación de las familias.',
    piensa1: 'Piensa en la coordinación del equipo educativo, el acceso a los documentos desde cualquier sitio, la comunicación con las familias o el seguimiento del día a día de los niños y las niñas.',
    piensa4: 'Piensa en fotografías de menores, datos de salud y alergias, informes de evolución o datos de contacto de las familias.',
    casoT: 'Una excursión al parque',
    caso: 'La escuela infantil ha organizado una excursión al parque con los niños y las niñas de 2 a 3 años. El equipo educativo quiere compartir con las familias, sin usar el correo electrónico como medio principal, la información de la actividad.',
    quien: 'una familia',
    otras: 'la fiesta de fin de curso, el periodo de adaptación, un taller con familias, el menú del comedor, el proyecto del huerto…',
    sit: [
      ['Envías por un grupo de mensajería la lista de niños y niñas con sus alergias para que la tengan todas las familias.', 'r', 'Las alergias son datos de salud: solo las ve el equipo y la familia de cada niño o niña.'],
      ['Antes de subir las fotos compruebas qué familias han firmado la autorización de imagen.', 'b', 'Sin autorización firmada no se puede publicar la imagen de un menor.']
    ],
    arch: [
      ['informe', '📄', 'Informe de cómo fue la excursión', ['B'], 'Es para las familias, pero no tienen que cambiarlo: solo ver.'],
      ['lista', '📋', 'Lista de niños y niñas que fueron, con sus alergias', ['A'], 'Tiene datos de salud de menores: solo el equipo educativo.'],
      ['fotos', '🖼️', 'Fotos de la excursión', ['B'], 'Fotos de menores: solo las familias invitadas con su cuenta, sin poder editar.'],
      ['aprendido', '📝', 'Nota: qué han aprendido los niños y las niñas', ['B'], 'Información para las familias, de solo lectura.'],
      ['autoriza', '✅', 'Formulario de autorización para la próxima salida', ['C'], 'Las familias tienen que poder rellenarlo.'],
      ['calendario', '📅', 'Calendario de próximas actividades', ['B', 'D'], 'No tiene datos personales: pueden verlo las familias o incluso ser público.'],
      ['incidencias', '🩹', 'Parte interno de incidencias (una caída leve)', ['A'], 'Es un documento interno con datos de un menor: solo el equipo.'],
      ['traer', '🎒', 'Qué traer a la próxima salida', ['B', 'D'], 'Información general sin datos personales.']
    ]
  },
  is: {
    prof: 'Técnico Superior en Integración Social', centro: 'la entidad', dest: 'las familias y las personas usuarias', entidad: 'una pequeña entidad social',
    contexto: 'Imagina que trabajas como Técnico Superior en Integración Social en una entidad que desarrolla programas de intervención con familias, menores y otros colectivos. El equipo usa herramientas en la nube para organizar la documentación, coordinarse y compartir información con las personas usuarias y con otros profesionales.',
    piensa1: 'Piensa en la coordinación del equipo, el acceso a los documentos, la comunicación con las familias o el seguimiento de las intervenciones.',
    piensa4: 'Piensa en información personal, informes sociales, fotografías, datos familiares o información relacionada con menores.',
    casoT: 'Una jornada de convivencia con familias',
    caso: 'Tu entidad ha organizado una jornada de convivencia y participación familiar dentro de un programa de intervención socioeducativa, con talleres y dinámicas. El equipo quiere poner la información de la actividad a disposición de las familias sin usar el correo electrónico como medio principal.',
    quien: 'una persona usuaria',
    otras: 'un taller de habilidades sociales, ocio inclusivo, apoyo a familias, intervención con personas mayores, inserción sociolaboral, un proyecto de participación comunitaria…',
    sit: [
      ['Subes a la carpeta compartida con las familias el informe social completo de cada persona usuaria.', 'r', 'Los informes sociales son confidenciales: solo los ve el equipo profesional.'],
      ['En los documentos compartidos usas iniciales o códigos en lugar de nombres y apellidos.', 'b', 'Así, si el documento llega a quien no debe, no se sabe de quién habla.']
    ],
    arch: [
      ['informe', '📄', 'Informe breve de cómo fue la jornada', ['B'], 'Es para las familias, pero no tienen que cambiarlo: solo ver.'],
      ['programa', '🗓️', 'Programa y horario de las actividades', ['B', 'D'], 'No tiene datos personales: pueden verlo las familias o ser público.'],
      ['materiales', '🧩', 'Materiales usados en los talleres', ['B', 'D'], 'Material descargable sin datos personales.'],
      ['fotos', '🖼️', 'Fotos de la jornada', ['B'], 'Salen personas usuarias y menores: solo las familias invitadas, sin poder editar.'],
      ['objetivos', '🎯', 'Objetivos trabajados', ['B'], 'Información para las familias, de solo lectura.'],
      ['proximas', '📅', 'Calendario de próximas actividades del programa', ['B', 'D'], 'Información general sin datos personales.'],
      ['inscripcion', '✅', 'Formulario de inscripción al próximo taller', ['C'], 'Las familias tienen que poder rellenarlo.'],
      ['seguimiento', '🔒', 'Informes sociales de seguimiento de cada familia', ['A'], 'Datos muy sensibles: solo el equipo profesional.']
    ]
  },
  mc: {
    prof: 'Técnico Superior en Mediación Comunicativa', centro: 'el servicio de mediación', dest: 'las personas usuarias y sus familias', entidad: 'una pequeña asociación de personas sordas o sordociegas',
    contexto: 'Imagina que trabajas como Técnico Superior en Mediación Comunicativa en un servicio que atiende a personas sordas, sordociegas o con dificultades de comunicación. El equipo usa herramientas en la nube para organizar la documentación, coordinarse y compartir información accesible con las personas usuarias, sus familias y otros profesionales.',
    piensa1: 'Piensa en la coordinación con intérpretes y otros profesionales, en compartir vídeos en lengua de signos, materiales en lectura fácil o pictogramas, y en el acceso desde el móvil.',
    piensa4: 'Piensa en vídeos donde se ve a la persona signando, informes de comunicación, datos de salud, fotografías o datos de las familias.',
    casoT: 'Un taller de comunicación accesible',
    caso: 'Tu servicio ha organizado un taller de comunicación accesible para personas sordas y sordociegas y sus familias: sistemas de comunicación, aplicaciones útiles y recursos del entorno. El equipo quiere poner la información del taller a disposición de las personas participantes sin usar el correo electrónico como medio principal, y de forma accesible.',
    quien: 'una persona usuaria sorda',
    otras: 'un curso de lengua de signos para familias, el acompañamiento a una cita médica, una salida de ocio, un grupo de apoyo, una charla en un centro educativo…',
    sit: [
      ['Subes a una carpeta abierta los vídeos de una sesión en lengua de signos en la que se ve a la persona usuaria.', 'r', 'En un vídeo signado se reconoce a la persona: es un dato personal y no puede estar abierto.'],
      ['Compartes la información también en vídeo signado y en lectura fácil, en una carpeta a la que solo entran las personas invitadas.', 'b', 'Accesible para todas las personas y con el acceso controlado.']
    ],
    arch: [
      ['informe', '📄', 'Informe breve de cómo fue el taller', ['B'], 'Es para las personas participantes, pero no tienen que cambiarlo: solo ver.'],
      ['programa', '🗓️', 'Programa y horario del taller', ['B', 'D'], 'No tiene datos personales: pueden verlo las personas invitadas o ser público.'],
      ['materiales', '🧩', 'Materiales en lectura fácil y con pictogramas', ['B', 'D'], 'Material descargable sin datos personales.'],
      ['videos', '🤟', 'Vídeos resumen en lengua de signos (sale el equipo)', ['B', 'D'], 'Solo sale el equipo y es información general.'],
      ['fotos', '🖼️', 'Fotos del taller', ['B'], 'Salen personas usuarias: solo las personas invitadas, sin poder editar.'],
      ['proximas', '📅', 'Calendario de próximas actividades', ['B', 'D'], 'Información general sin datos personales.'],
      ['interprete', '✅', 'Formulario para pedir intérprete o mediador', ['C'], 'Las personas usuarias tienen que poder rellenarlo.'],
      ['seguimiento', '🔒', 'Fichas de seguimiento comunicativo de cada persona', ['A'], 'Datos personales y de salud: solo el equipo profesional.']
    ]
  },
  ce: {
    prof: 'Técnico Superior en Coordinación de Emergencias y Protección Civil', centro: 'el servicio de emergencias', dest: 'el voluntariado y el centro participante', entidad: 'una agrupación municipal de voluntariado de protección civil',
    contexto: 'Imagina que trabajas como Técnico Superior en Coordinación de Emergencias y Protección Civil en un servicio que coordina recursos, prepara planes de emergencia y organiza simulacros y formación. El equipo usa herramientas en la nube para organizar la documentación, coordinarse entre turnos y compartir información con el voluntariado, con otros servicios y con la población.',
    piensa1: 'Piensa en la coordinación entre turnos y servicios (112, bomberos, sanitarios, policía), en tener los planes y los mapas siempre actualizados, en consultarlos desde el móvil en el lugar de la emergencia o en avisar a la población.',
    piensa4: 'Piensa en datos de personas afectadas, grabaciones de llamadas, fotografías de una intervención, teléfonos del voluntariado o planos de seguridad de un edificio.',
    casoT: 'Un simulacro de evacuación en un colegio',
    caso: 'Tu servicio ha organizado, junto con la agrupación de voluntariado de Protección Civil, un simulacro de evacuación en un colegio. El equipo quiere poner la información del simulacro a disposición del voluntariado y del colegio sin usar el correo electrónico como medio principal.',
    quien: 'una persona voluntaria',
    otras: 'el dispositivo de una romería o un concierto, una campaña de prevención de incendios forestales, un curso de primeros auxilios, la revisión de un plan de autoprotección, un aviso por fenómeno meteorológico adverso…',
    sit: [
      ['Compartes en un grupo abierto la grabación de una llamada al 112 para comentarla con el voluntariado.', 'r', 'La llamada tiene datos personales y de salud de quien pide ayuda: es confidencial.'],
      ['Guardas el plan de emergencia en la nube y también una copia sin conexión, por si falla internet durante la emergencia.', 'b', 'En una emergencia puede caerse la red: hay que poder consultar el plan igualmente.']
    ],
    arch: [
      ['informe', '📄', 'Informe de cómo fue el simulacro', ['B'], 'Es para el voluntariado y el colegio, pero no tienen que cambiarlo: solo ver.'],
      ['cronograma', '🗓️', 'Cronograma del simulacro (horas y tiempos de evacuación)', ['B'], 'Información de trabajo para quienes participaron, de solo lectura.'],
      ['plano', '🗺️', 'Plano de evacuación y puntos de encuentro del colegio', ['B'], 'Es información de seguridad de un edificio: solo personas invitadas.'],
      ['fotos', '🖼️', 'Fotos y vídeos del simulacro (aparecen menores)', ['B'], 'Salen menores: solo personas invitadas con su cuenta, sin poder editar.'],
      ['consejos', '📢', 'Consejos de autoprotección para las familias', ['D', 'B'], 'Cuanta más gente los lea, mejor: pueden ser públicos.'],
      ['proximos', '📅', 'Calendario de próximos simulacros y formaciones', ['B', 'D'], 'Información general sin datos personales.'],
      ['inscripcion', '✅', 'Formulario de inscripción al curso de primeros auxilios', ['C'], 'El voluntariado tiene que poder rellenarlo.'],
      ['voluntariado', '🔒', 'Listado del voluntariado con teléfonos y turnos', ['A'], 'Datos personales: solo el equipo que coordina.']
    ]
  }
};
// Situaciones comunes a todas las especialidades ({dest} y {centro} se cambian por los de cada una)
const SIT_COMUN = [
  ['Compartes el álbum de fotos de la actividad con «cualquier persona que tenga el enlace» para que nadie tenga que iniciar sesión.', 'r', 'Ese enlace se puede reenviar y acabar en manos de cualquiera. Comparte solo con las cuentas de las personas invitadas.'],
  ['Activas la verificación en dos pasos en la cuenta de {centro}.', 'b', 'Aunque alguien consiga la contraseña, no podrá entrar sin el segundo paso.'],
  ['Guardas documentos con datos personales en tu cuenta personal gratuita porque la de {centro} está llena.', 'r', 'Los datos salen del control de {centro} y se quedan en tu cuenta aunque cambies de trabajo.'],
  ['Cuando una persona deja el equipo, le quitas ese mismo día el acceso a las carpetas compartidas.', 'b', 'Solo debe tener acceso quien lo necesita para su trabajo, y solo mientras lo necesita.'],
  ['Dejas la sesión abierta en el ordenador compartido de la sala para no perder tiempo.', 'r', 'Cualquiera que use ese ordenador puede ver, cambiar o borrar la información.'],
  ['Das a {dest} permiso de «solo ver» en los documentos y de «editar» solo en lo que tienen que rellenar.', 'b', 'Cada persona, con el permiso mínimo que necesita.']
];
const PERMISOS = {
  A: 'Solo el equipo profesional',
  B: 'Personas invitadas con su cuenta · solo ver',
  C: 'Personas invitadas con su cuenta · pueden rellenar o editar',
  D: 'Cualquiera que tenga el enlace'
};
// 1.4 · Comparación de planes: las dos suites en la nube más usadas, con el enlace a su página oficial de precios
const PLAN_SERV = [
  ['ms', 'Microsoft 365', 'Outlook, Word, Excel, Teams, OneDrive…', 'https://www.microsoft.com/es-es/microsoft-365/business/microsoft-365-plans-and-pricing'],
  ['gw', 'Google Workspace', 'Gmail, Documentos, Hojas de cálculo, Meet, Drive…', 'https://workspace.google.com/intl/es/pricing']
];
const PLAN_GRUPOS = { b: 'El plan para empresas más barato', c: 'El plan más caro que tenga el precio publicado' };
const PLAN = [   // filas de la tabla: [campo, qué se pide, ejemplo, grupo]
  ['bnombre', 'Nombre del plan', 'Nombre del plan', 'b'],
  ['bprecio', 'Precio por persona y mes', 'Por ejemplo: 0,00 € sin impuestos, pagando un año', 'b'],
  ['bespacio', 'Almacenamiento en la nube por persona', 'Por ejemplo: 0 GB o 0 TB', 'b'],
  ['bvideo', 'Personas que caben en una videollamada', 'Por ejemplo: hasta 000', 'b'],
  ['cnombre', 'Nombre del plan', 'Nombre del plan', 'c'],
  ['cprecio', 'Precio por persona y mes', 'Por ejemplo: 0,00 € sin impuestos, pagando un año', 'c'],
  ['cextra', 'Qué tiene que no tenga el barato', 'Una o dos cosas que te parezcan importantes', 'c']
];
const MAX_CARPETAS = 8, MIN_CARPETAS = 3;

// ===== Ciclos: semipresenciales y Recuperaciones (individual) =====
const ORDEN = ['ei_sp', 'is_sp', 'mc_sp', 'rec_ce', 'rec_is'];
const CICLOS = {
  ei_sp: Object.assign({ nombre: 'Educación Infantil Semipresencial' }, ESPECIALIDAD.ei),
  is_sp: Object.assign({ nombre: 'Integración Social Semipresencial' }, ESPECIALIDAD.is),
  mc_sp: Object.assign({ nombre: 'Mediación Comunicativa Semipresencial' }, ESPECIALIDAD.mc),
  rec_ce: Object.assign({ nombre: 'Recuperación Coordinación de Emergencias y Protección Civil' }, ESPECIALIDAD.ce),
  rec_is: Object.assign({ nombre: 'Recuperación Integración Social' }, ESPECIALIDAD.is)
};
for (const k of ORDEN){
  const C = CICLOS[k]; C.semipresencial = true;
  // las 8 situaciones: 6 comunes + 2 de la especialidad, siempre en el mismo orden (mezcladas buenas y malas)
  // «de el servicio» → «del servicio», «a el voluntariado» → «al voluntariado»
  const frase = t => t.replace('{dest}', C.dest).replace(/\{centro\}/g, C.centro).replace(/\bde el\b/g, 'del').replace(/\ba el\b/g, 'al');
  const com = SIT_COMUN.map(s => [frase(s[0]), s[1], frase(s[2])]);
  C.situaciones = [com[0], C.sit[1], com[2], com[1], C.sit[0], com[3], com[4], com[5]];
}

// ===== estado de las partes interactivas =====
const leeJSON = (n, def) => { try { const o = JSON.parse(campo(n) || 'null'); return o && typeof o === 'object' ? o : def; } catch(e){ return def; } };
function pon(n, o){
  const el = document.querySelector(`input[data-campo="${n}"]`); if (!el) return;
  el.value = JSON.stringify(o); programarGuardado();
}
const C_ACT = () => CICLOS[ESP] || CICLOS[ORDEN[0]];
const clasif = () => leeJSON('clasif', {});
const nube = () => { const o = leeJSON('nube', {}); return { c: Array.isArray(o.c) ? o.c.filter(x => x && x.id).slice(0, MAX_CARPETAS) : [], d: o.d && typeof o.d === 'object' ? o.d : {} }; };
const permisos = () => leeJSON('permisos', {});
// partes que puntúan ya entregadas (no se pueden cambiar): { clasif, permisos, r1, aud, r3, pasos, r5 }
const entregado = () => leeJSON('entregado', {});
const fin = k => entregado()[k] === true;
const AVISO_PUNTUA = '<p class="nb-punt">⚠️ <b>Esta parte puntúa y solo tienes un intento.</b> Elige con calma: puedes cambiar lo que quieras hasta que pulses «Entregar respuestas». Entonces se corrige y ya no se puede cambiar.</p>';
const aciertosClasif = C => { const r = clasif(); return C.situaciones.filter((s, i) => r[i] === s[1]).length; };
const hechasClasif = C => { const r = clasif(); return C.situaciones.filter((s, i) => r[i] === 'b' || r[i] === 'r').length; };
const colocados = C => { const n = nube(), ids = new Set(n.c.map(x => x.id)); return C.arch.filter(a => ids.has(n.d[a[0]])).length; };
const carpetasConNombre = () => nube().c.filter(x => String(x.n || '').trim()).length;
const permHechos = C => { const p = permisos(); return C.arch.filter(a => PERMISOS[p[a[0]]]).length; };
const permBien = C => { const p = permisos(); return C.arch.filter(a => a[3].includes(p[a[0]])).length; };
const planLlenos = () => PLAN_SERV.reduce((n, p) => n + PLAN.filter(f => campo(`plan_${p[0]}_${f[0]}`).trim()).length, 0);

document.head.insertAdjacentHTML('beforeend', `<style>
.nb-juego{background:#fff;border:1px solid var(--line);border-radius:16px;padding:.9rem 1rem;margin:.8rem 0 1.1rem}
.nb-juego>h3{margin:.1rem 0 .3rem;font-size:1.05rem;display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
.nb-juego>h3 .n{background:var(--lav3);color:#fff;border-radius:999px;padding:.05rem .6rem;font-size:.85rem}
.nb-marc{margin-left:auto;font-size:.85rem;font-weight:700;background:var(--lav);border:1px solid var(--lav2);color:var(--lav3);border-radius:999px;padding:.15rem .7rem}
.nb-sits{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.7rem;margin-top:.7rem}
.nb-sit{border:2px solid var(--line);border-radius:14px;padding:.7rem .8rem;display:flex;flex-direction:column;gap:.55rem;background:#fffdfa}
.nb-sit p{margin:0;font-size:.95rem}
.nb-sit .ops{display:flex;gap:.5rem;margin-top:auto}
.nb-sit button{flex:1;min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:#fff;font-weight:700;font-size:.9rem;cursor:pointer}
.nb-sit button[aria-pressed="true"].b{background:#dff3ea;border-color:#2f7d5c;color:#1d5a40}
.nb-sit button[aria-pressed="true"].r{background:#fde4ea;border-color:#a33c58;color:#7d2640}
.nb-sit.ok{border-color:#9fd8bd;background:#f3fbf7}
.nb-sit.mal{border-color:#f1b3c3;background:#fff6f8}
.nb-sit .fb{font-size:.86rem;margin:0;border-radius:8px;padding:.35rem .5rem;background:rgba(0,0,0,.035)}
.nb-plan{width:100%;border-collapse:separate;border-spacing:0;margin:.6rem 0;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}
.nb-plan th,.nb-plan td{padding:.45rem .5rem;border-bottom:1px solid var(--line);text-align:left;vertical-align:middle;font-size:.92rem}
.nb-plan tr:last-child th,.nb-plan tr:last-child td{border-bottom:0}
.nb-plan thead th{background:var(--lav);color:var(--lav3)}
.nb-plan tbody th{width:28%;font-weight:600;background:#fffaf5}
.nb-plan input{width:100%;min-height:44px;border:1.5px solid var(--line);border-radius:9px;padding:.35rem .55rem;font:inherit;background:#fff}
.nb-plan tr.gr th{background:var(--lav);color:var(--lav3);font-weight:800;font-size:.85rem;text-transform:uppercase;letter-spacing:.03em}
.nb-plan thead th small{display:block;font-weight:500;font-size:.78rem;color:var(--muted)}
.nb-enl{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:.6rem;margin:.7rem 0}
.nb-enl a{display:flex;gap:.6rem;align-items:center;min-height:52px;padding:.55rem .8rem;border:2px solid var(--lav2);border-radius:12px;background:#fff;color:inherit;text-decoration:none;font-weight:700}
.nb-enl a:hover,.nb-enl a:focus-visible{border-color:var(--lav3);background:var(--lav)}
.nb-enl a small{display:block;font-weight:500;color:var(--muted);font-size:.82rem}
.nb-enl a .ic{font-size:1.4rem;flex:none}
.nb-que{margin:.5rem 0 .2rem;padding-left:1.2rem}
.nb-que li{margin:.2rem 0}
.nb-plan input:focus{outline:2px solid var(--lav2);border-color:var(--lav3)}
.nb-caso{background:var(--lav);border:1px solid var(--lav2);border-radius:14px;padding:.8rem 1rem;margin:.6rem 0}
.nb-caso b.t{display:block;color:var(--lav3);font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.2rem}
.nb-caso ul{margin:.4rem 0 0;padding-left:1.2rem}
.nb-nube{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.6fr);gap:.9rem;margin-top:.7rem;align-items:start}
.nb-col h4{margin:0 0 .4rem;font-size:.9rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}
.nb-suelta,.nb-carp .dentro{display:flex;flex-direction:column;gap:.4rem;min-height:54px;border:2px dashed var(--line);border-radius:12px;padding:.45rem}
.nb-suelta.sobre,.nb-carp.sobre .dentro{border-color:var(--lav3);background:var(--lav)}
.nb-arch{display:flex;gap:.5rem;align-items:center;min-height:44px;padding:.35rem .6rem;border:1.5px solid var(--line);border-radius:10px;background:#fff;font-size:.9rem;cursor:grab;text-align:left;width:100%;font-family:inherit}
.nb-arch .ic{font-size:1.15rem;flex:none}
.nb-arch.sel{border-color:var(--lav3);background:var(--lav);box-shadow:0 0 0 2px var(--lav2)}
.nb-vacio{color:var(--muted);font-size:.86rem;margin:.2rem .3rem}
.nb-carps{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.7rem}
.nb-carp{border:1.5px solid var(--lav2);border-radius:14px;background:#fffaf5;padding:.5rem}
.nb-carp .nb-cab{display:flex;gap:.35rem;align-items:center;margin-bottom:.4rem}
.nb-carp .nb-cab span{font-size:1.2rem}
.nb-carp .nb-cab input{flex:1;min-width:0;min-height:44px;border:1.5px solid var(--line);border-radius:9px;padding:.3rem .5rem;font:inherit;font-weight:700;background:#fff}
.nb-carp .nb-cab button{flex:none;width:44px;height:44px;border-radius:9px;border:1.5px solid var(--line);background:#fff;cursor:pointer;font-size:1rem}
.nb-mas{min-height:44px;border-radius:10px;border:1.5px dashed var(--lav3);background:#fff;color:var(--lav3);font-weight:700;padding:.4rem .9rem;cursor:pointer;margin-top:.6rem}
.nb-mas:disabled{opacity:.5;cursor:default}
.nb-perm{display:grid;gap:.5rem;margin-top:.7rem}
.nb-fila{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1fr);gap:.6rem;align-items:center;border:2px solid var(--line);border-radius:12px;padding:.45rem .6rem;background:#fffdfa}
.nb-fila .nom{display:flex;gap:.5rem;align-items:center;font-size:.93rem}
.nb-fila select{width:100%;min-height:44px;border:1.5px solid var(--line);border-radius:9px;padding:.3rem .5rem;font:inherit;background:#fff}
.nb-fila.ok{border-color:#9fd8bd;background:#f3fbf7}
.nb-fila.mal{border-color:#f1b3c3;background:#fff6f8}
.nb-fila .fb{grid-column:1/-1;font-size:.86rem;margin:0}
.nb-comp{min-height:44px;border-radius:10px;border:0;background:var(--lav3);color:#fff;font-weight:700;padding:.4rem 1.1rem;cursor:pointer;margin-top:.7rem}
.nb-punt{background:#fff6dc;border:1.5px solid #e2b93b;border-radius:10px;padding:.5rem .7rem;margin:.5rem 0;font-size:.92rem;color:#5c4300}
.nb-juego button:disabled,.nb-juego select:disabled{cursor:default;opacity:1;color:inherit}
.nb-nota{background:var(--lav);border:1.5px solid var(--lav2);border-radius:14px;padding:.7rem 1rem;margin:1rem 0;font-weight:600}
.nb-pasos{margin:.4rem 0 .2rem;padding-left:1.2rem}
@media (max-width:760px){.nb-nube{grid-template-columns:1fr}.nb-fila{grid-template-columns:1fr}.nb-plan tbody th{width:auto}.nb-plan thead{display:none}.nb-plan tr{display:block;border-bottom:1px solid var(--line)}.nb-plan th,.nb-plan td{display:block;border:0;padding:.3rem .5rem}.nb-plan td::before{content:attr(data-t);display:block;font-size:.78rem;color:var(--muted);font-weight:600}}
</style>`);

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Contexto</h2><p>${esc(C.contexto)}</p>
    <h2 style="font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>`;
}

function construirTarea(C){
  const oculto = n => `<input type="hidden" data-campo="${n}">`;
  let h = '';
  // ===== Parte 1
  h += `<section class="fase f1"><header><h2>Parte 1 · La nube en tu profesión</h2></header><div class="cuerpo">
    <div class="nb-juego" id="nbClasif">${oculto('clasif')}${oculto('entregado')}
      <h3><span class="n">1.1</span>¿Buena práctica o riesgo? <span class="nb-marc" id="nbClasifM"></span></h3>
      <p class="pista">Lee cada situación y decide si es una buena práctica o un riesgo.</p>${AVISO_PUNTUA}
      <div class="nb-sits" id="nbSits"></div><div id="nbClasifA"></div>
    </div>
    ${caja('p1_porque', '1.2', esc(`¿Por qué el uso de herramientas en la nube puede facilitar el trabajo de un ${C.prof}?`), `<div class="pista">${esc(C.piensa1)}</div>`)}
    ${caja('p1_app', '1.3', 'Escribe el nombre de una aplicación o servicio en la nube que pueda ser útil en tu sector y explica para qué la usarías.', '<div class="pista">Puede ser cualquier aplicación real: para guardar archivos, comunicarse, organizar el trabajo, atender a las personas…</div>')}
    <div class="nb-juego" id="nbPlan">
      <h3><span class="n">1.4</span>Compara los planes de pago de Microsoft 365 y Google Workspace</h3>
      <p>Casi todas las empresas y entidades trabajan en la nube con una de estas dos «suites»: <b>Microsoft 365</b> o <b>Google Workspace</b>. Las dos se pagan <b>por persona y por mes</b> y tienen varios planes: cuanto más caro, más espacio y más funciones. Antes de contratar una, hay que saber comparar.</p>
      <p><b>Qué tienes que hacer:</b></p>
      <ol class="nb-que">
        <li>Abre las <b>dos páginas oficiales de precios</b> con estos botones (se abren en otra pestaña).</li>
        <li>En cada una, busca el <b>plan para empresas más barato</b> y el <b>más caro que tenga el precio publicado</b> (si en vez de precio pone «contactar con ventas», no vale: coge el anterior).</li>
        <li>Rellena la tabla con lo que encuentres <b>hoy</b>: los precios cambian a menudo.</li>
        <li>Fíjate en la letra pequeña: si el precio es <b>sin impuestos</b> y si obliga a <b>pagar un año entero</b>.</li>
      </ol>
      <div class="nb-enl">${PLAN_SERV.map(p => `<a href="${p[3]}" target="_blank" rel="noopener"><span class="ic">🔗</span><span>Planes y precios de ${esc(p[1])}<small>${esc(p[2])}</small></span></a>`).join('')}</div>
      <table class="nb-plan"><thead><tr><th></th>${PLAN_SERV.map(p => `<th>${esc(p[1])}<small>${esc(p[2])}</small></th>`).join('')}</tr></thead><tbody>
      ${PLAN.map((f, i) => (i === 0 || PLAN[i - 1][3] !== f[3] ? `<tr class="gr"><th colspan="3" scope="colgroup">${esc(PLAN_GRUPOS[f[3]])}</th></tr>` : '')
        + `<tr><th scope="row">${esc(f[1])}</th>${PLAN_SERV.map(p => `<td data-t="${esc(p[1])}"><input type="text" maxlength="140" data-campo="plan_${p[0]}_${f[0]}" placeholder="${esc(f[2])}" aria-label="${esc(p[1] + ' · ' + PLAN_GRUPOS[f[3]] + ' · ' + f[1])}"></td>`).join('')}</tr>`).join('')}
      </tbody></table>
    </div>
    ${caja('p1_plan', '1.5', esc(`Con lo que has comparado: ¿qué servicio y qué plan elegirías para ${C.entidad}? Justifica tu respuesta.`), '<div class="pista">Calcula cuánto costaría <b>al mes y al año</b> para un equipo de <b>8 personas</b> con el plan que eliges, y explica qué ha pesado más en tu decisión: el precio, el espacio, las videollamadas, las aplicaciones que el equipo ya conoce, la seguridad…</div>')}
    ${caja('p1_riesgos', '1.6', '¿Qué riesgos puede tener guardar o compartir información en la nube de forma incorrecta?', `<div class="pista">${esc(C.piensa4)}</div>`)}
  </div></section>`;

  // ===== Parte 2
  h += `<section class="fase f2"><header><h2>Parte 2 · Caso práctico: ${esc(C.casoT.toLowerCase())}</h2></header><div class="cuerpo">
    <div class="nb-caso"><b class="t">El caso</b>${esc(C.caso)} Quieren compartir:
      <ul>${C.arch.map(a => `<li>${a[1]} ${esc(a[2])}</li>`).join('')}</ul></div>
    ${caja('p2_herr', '2.1', '¿Qué herramienta o servicio en la nube usarías para compartir esta información de forma rápida y segura? Justifica tu elección.')}
    <div class="nb-juego" id="nbNube">${oculto('nube')}
      <h3><span class="n">2.2</span>Monta tu nube <span class="nb-marc" id="nbNubeM"></span></h3>
      <p class="pista">Organiza la información como lo harías de verdad: crea <b>al menos ${MIN_CARPETAS} carpetas</b>, ponles nombre y mete cada archivo en la suya. Arrastra el archivo a la carpeta o, en el móvil, toca el archivo y después toca la carpeta.</p>
      <div class="nb-nube">
        <div class="nb-col"><h4>Archivos sin ordenar</h4><div class="nb-suelta" id="nbSuelta" data-carpeta=""></div></div>
        <div class="nb-col"><h4>Tus carpetas</h4><div class="nb-carps" id="nbCarps"></div>
          <button type="button" class="nb-mas" id="nbMas">＋ Nueva carpeta</button></div>
      </div>
    </div>
    ${caja('p2_organiza', '', 'Explica tu organización: por qué has hecho esas carpetas y qué más añadirías (formularios, álbumes, calendarios, materiales descargables…).')}
    <div class="nb-juego" id="nbPerm">${oculto('permisos')}
      <h3><span class="n">2.3</span>¿Quién puede ver qué? <span class="nb-marc" id="nbPermM"></span></h3>
      <p class="pista">Decide el permiso de cada archivo. Las «personas invitadas» son ${esc(C.dest)}. </p>${AVISO_PUNTUA}
      <div class="nb-perm" id="nbPermL"></div>
      <div id="nbPermA"></div>
    </div>
    ${caja('p2_ventajas', '2.4', '¿Qué ventajas tiene usar la nube frente a entregar toda la información en papel? Indica al menos tres.')}
    ${caja('p2_precauciones', '2.5', '¿Qué precauciones tomarías para garantizar la privacidad y la confidencialidad?', '<div class="pista">Ten en cuenta contraseñas, permisos de acceso, fotografías, datos personales, información sensible, protección de datos y uso de dispositivos compartidos.</div>')}
    ${caja('p2_explica', '2.6', esc(`Imagina que ${C.quien} no sabe usar Google Drive ni otra plataforma parecida. Explícale de forma sencilla, paso a paso, cómo llegar a la información que le has compartido.`))}
    ${caja('p2_otra', '2.7', '¿Qué información útil podrías compartir mediante la nube en otra actividad de tu sector?', `<div class="pista">Por ejemplo: ${esc(C.otras)}</div>`)}
  </div></section>`;

  // ===== Parte 3 · la misión (ver _fuente/UT3_SP_mision.js)
  h += misionHTML(C);
  return h;
}

// ===== pintado de las partes interactivas (cada vez que cambia algo) =====
let PINT = { clasif: null, nube: null, permisos: null, mision: null }, ARCH_SEL = null, FOCO = null;
// Partes que puntúan: se elige con calma y, al pulsar «Entregar respuestas», se corrigen y quedan fijadas (un solo intento).
// accionEntrega: el botón de entregar o, si ya se entregó, el candado con el resultado.
const accionEntrega = (k, resultado) => fin(k)
  ? `<p class="nb-fbg">🔒 <b>Respuestas entregadas:</b> ${esc(resultado)}. Ya no se pueden cambiar.</p>`
  : `<div class="nb-acc"><button type="button" class="nb-comp" style="margin-top:0" data-entrega="${k}">Entregar respuestas</button></div>`;
const bloq = k => fin(k) ? ' disabled' : '';
function pintarClasif(C){
  const v = campo('clasif') + campo('entregado'); if (PINT.clasif === v && document.getElementById('nbSits').children.length) return;
  PINT.clasif = v; const r = clasif(), f = fin('clasif');
  document.getElementById('nbSits').innerHTML = C.situaciones.map((s, i) => {
    const e = r[i], ok = e === s[1];
    return `<div class="nb-sit${f ? (ok ? ' ok' : ' mal') : ''}"><p>${esc(s[0])}</p>
      ${f ? `<p class="fb">${ok ? '✅ ' : `❌ Era ${s[1] === 'b' ? 'una buena práctica' : 'un riesgo'}. `}${esc(s[2])}</p>` : ''}
      <div class="ops"><button type="button" class="b" data-sit="${i}" data-v="b" aria-pressed="${e === 'b'}"${bloq('clasif')}>👍 Buena práctica</button>
      <button type="button" class="r" data-sit="${i}" data-v="r" aria-pressed="${e === 'r'}"${bloq('clasif')}>⚠️ Riesgo</button></div></div>`;
  }).join('');
  document.getElementById('nbClasifA').innerHTML = accionEntrega('clasif', `${aciertosClasif(C)} de ${C.situaciones.length} bien`);
  document.getElementById('nbClasifM').textContent = f ? `${aciertosClasif(C)} de ${C.situaciones.length} puntos` : `${hechasClasif(C)} de ${C.situaciones.length} elegidas`;
}
const archHTML = a => `<button type="button" class="nb-arch${ARCH_SEL === a[0] ? ' sel' : ''}" draggable="true" data-arch="${a[0]}" aria-pressed="${ARCH_SEL === a[0]}"><span class="ic">${a[1]}</span><span>${esc(a[2])}</span></button>`;
function pintarNube(C){
  const v = campo('nube') + '|' + ARCH_SEL; if (PINT.nube === v && document.getElementById('nbSuelta').children.length) return;
  PINT.nube = v; const n = nube(), ids = new Set(n.c.map(x => x.id));
  const sueltos = C.arch.filter(a => !ids.has(n.d[a[0]]));
  document.getElementById('nbSuelta').innerHTML = sueltos.length ? sueltos.map(archHTML).join('') : '<p class="nb-vacio">✅ Todos los archivos están en una carpeta.</p>';
  document.getElementById('nbCarps').innerHTML = n.c.length ? n.c.map(c => {
    const dentro = C.arch.filter(a => n.d[a[0]] === c.id);
    return `<div class="nb-carp" data-carpeta="${c.id}"><div class="nb-cab"><span>📁</span><input type="text" maxlength="40" value="${esc(c.n || '')}" placeholder="Nombre de la carpeta" data-nom="${c.id}" aria-label="Nombre de la carpeta">
      <button type="button" data-borra="${c.id}" title="Quitar esta carpeta" aria-label="Quitar esta carpeta">🗑️</button></div>
      <div class="dentro">${dentro.length ? dentro.map(archHTML).join('') : '<p class="nb-vacio">Suelta aquí los archivos</p>'}</div></div>`;
  }).join('') : '<p class="nb-vacio">Todavía no tienes carpetas. Pulsa «Nueva carpeta».</p>';
  document.getElementById('nbMas').disabled = n.c.length >= MAX_CARPETAS;
  document.getElementById('nbNubeM').textContent = `${n.c.length} carpeta${n.c.length === 1 ? '' : 's'} · ${colocados(C)} de ${C.arch.length} archivos`;
  if (FOCO){ const i = document.querySelector(`#nbCarps input[data-nom="${FOCO}"]`); FOCO = null; if (i) i.focus(); }
}
function pintarPermisos(C){
  const v = campo('permisos') + campo('entregado'); if (PINT.permisos === v && document.getElementById('nbPermL').children.length) return;
  PINT.permisos = v; const p = permisos(), f = fin('permisos');
  document.getElementById('nbPermL').innerHTML = C.arch.map(a => {
    const e = p[a[0]], ok = a[3].includes(e), cls = f ? (ok ? ' ok' : ' mal') : '';
    return `<div class="nb-fila${cls}"><div class="nom"><span>${a[1]}</span><span>${esc(a[2])}</span></div>
      <select data-perm="${a[0]}" aria-label="Quién puede ver: ${esc(a[2])}"${bloq('permisos')}><option value="">Elige quién puede verlo…</option>${Object.entries(PERMISOS).map(([k, t]) => `<option value="${k}"${e === k ? ' selected' : ''}>${esc(t)}</option>`).join('')}</select>
      ${f ? `<p class="fb">${ok ? '✅ ' : `❌ Lo correcto: ${esc(a[3].map(k => PERMISOS[k]).join(', o bien: '))}. `}${esc(a[4])}</p>` : ''}</div>`;
  }).join('');
  document.getElementById('nbPermA').innerHTML = accionEntrega('permisos', `${permBien(C)} de ${C.arch.length} bien`);
  document.getElementById('nbPermM').textContent = f ? `${permBien(C)} de ${C.arch.length} puntos` : `${permHechos(C)} de ${C.arch.length} decididos`;
}
function alActualizar(){
  if (!document.getElementById('nbSits')) return;
  const C = C_ACT(); pintarClasif(C); pintarNube(C); pintarPermisos(C); pintarMision(C);
}

// ===== interacciones (una sola vez, delegadas en el documento) =====
function mover(arch, carpeta){
  const n = nube(); if (carpeta && !n.c.some(c => c.id === carpeta)) return;
  if (carpeta) n.d[arch] = carpeta; else delete n.d[arch];
  ARCH_SEL = null; pon('nube', n); alActualizar();
}
document.addEventListener('click', e => {
  const t = e.target.closest ? e.target : null; if (!t) return;
  const s = t.closest('#nbSits [data-sit]');
  if (s){ if (fin('clasif')) return; const r = clasif(); r[s.dataset.sit] = s.dataset.v; pon('clasif', r); alActualizar(); return; }
  const en = t.closest('[data-entrega]');
  if (en){ entregar(en.dataset.entrega); return; }
  if (t.closest('#nbMas')){
    const n = nube(); if (n.c.length >= MAX_CARPETAS) return;
    const id = 'c' + Date.now().toString(36) + Math.floor(Math.random() * 1e3); n.c.push({ id, n: '' }); FOCO = id; pon('nube', n); alActualizar(); return;
  }
  const b = t.closest('#nbCarps [data-borra]');
  if (b){ const n = nube(); n.c = n.c.filter(c => c.id !== b.dataset.borra); for (const k of Object.keys(n.d)) if (n.d[k] === b.dataset.borra) delete n.d[k]; pon('nube', n); alActualizar(); return; }
  const a = t.closest('#nbNube [data-arch]');
  if (a){ ARCH_SEL = ARCH_SEL === a.dataset.arch ? null : a.dataset.arch; alActualizar(); if (ARCH_SEL) aviso('Ahora toca la carpeta donde quieres guardarlo.', 2200); return; }
  const z = t.closest('#nbNube [data-carpeta]');
  if (z && ARCH_SEL && !t.closest('input,button')){ mover(ARCH_SEL, z.dataset.carpeta); return; }
});
// Entregar una parte que puntúa: tiene que estar completa, se avisa de que es definitivo y queda fijada
async function entregar(k){
  if (fin(k) || EJEMPLO) return;
  const C = C_ACT(), falta = faltaPara(k, C);
  if (falta){ aviso(falta); return; }
  const si = await pregunta('Vas a entregar estas respuestas. Se corrigen ahora, cuentan para la nota y ya no podrás cambiarlas. ¿Las entregas?', [['Seguir pensando', false], ['Entregar respuestas', true, 'btn-main']]);
  if (!si) return;
  const e = entregado(); e[k] = true; pon('entregado', e); alActualizar(); guardarYa();
}
document.addEventListener('change', e => {
  const t = e.target;
  if (t.matches && t.matches('#nbPermL select[data-perm]')){ if (fin('permisos')) return; const p = permisos(); if (t.value) p[t.dataset.perm] = t.value; else delete p[t.dataset.perm]; pon('permisos', p); alActualizar(); const n = document.querySelector(`#nbPermL select[data-perm="${t.dataset.perm}"]`); if (n) n.focus(); }
});
document.addEventListener('input', e => {
  const t = e.target;
  if (t.matches && t.matches('#nbCarps input[data-nom]')){
    const n = nube(), c = n.c.find(x => x.id === t.dataset.nom); if (!c) return;
    c.n = t.value.slice(0, 40); const el = document.querySelector('input[data-campo="nube"]'); el.value = JSON.stringify(n); PINT.nube = el.value + '|' + ARCH_SEL; programarGuardado();
  }
});
// arrastrar y soltar (ordenador)
document.addEventListener('dragstart', e => { const a = e.target.closest && e.target.closest('#nbNube [data-arch]'); if (a){ e.dataTransfer.setData('text/plain', 'nb:' + a.dataset.arch); e.dataTransfer.effectAllowed = 'move'; } });
// Sobre una carpeta se permite soltar y el motor común no llega a decir «aquí no» (su dragover solo admite imágenes en las cajas)
document.addEventListener('dragover', e => { const z = e.target.closest && e.target.closest('#nbNube [data-carpeta]'); if (z){ e.preventDefault(); e.stopImmediatePropagation(); if (e.dataTransfer) e.dataTransfer.dropEffect = 'move'; document.querySelectorAll('#nbNube .sobre').forEach(x => x.classList.remove('sobre')); z.classList.add('sobre'); } });
document.addEventListener('dragend', () => document.querySelectorAll('#nbNube .sobre').forEach(x => x.classList.remove('sobre')));
document.addEventListener('drop', e => {
  const z = e.target.closest && e.target.closest('#nbNube [data-carpeta]'); if (!z) return;
  const d = e.dataTransfer.getData('text/plain'); if (!/^nb:/.test(d)) return;
  e.preventDefault(); e.stopPropagation(); document.querySelectorAll('#nbNube .sobre').forEach(x => x.classList.remove('sobre'));
  mover(d.slice(3), z.dataset.carpeta);
}, true);

/*__INCLUYE:UT3_SP_mision__*/

// ===== PDF =====
async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL } = api;
  { const n = puntosAuto(C);
    P(`Preguntas autocorregidas (un solo intento): ${n.p} de ${n.t} puntos · nota ${String(notaEntrega()).replace('.', ',')} sobre 10`, { size: 11, b: true, color: COL.lav, tras: 3 }); }
  banda('Parte 1 · La nube en tu profesión', [255,233,220], COL.peach);
  { const r = clasif();
    sitio(20); P(`1.1 · ¿Buena práctica o riesgo? · ${fin('clasif') ? `${aciertosClasif(C)} de ${C.situaciones.length} puntos` : 'SIN ENTREGAR (0 puntos)'}`, { size: 11, b: true, color: COL.peach, tras: 2 });
    C.situaciones.forEach((s, i) => {
      const e = r[i], resp = e === 'b' ? 'Buena práctica' : e === 'r' ? 'Riesgo' : 'Sin responder';
      texto([{ t: resp + (e ? (e === s[1] ? ' (bien)' : ' (mal)') : '') + ': ', b: true }, { t: s[0] }], { size: 9.5, sang: 3, marca: '·' });
    });
    separador(); }
  await caja('p1_porque', '1.2', `¿Por qué la nube puede facilitar el trabajo de un ${C.prof}?`);
  await caja('p1_app', '1.3', 'Aplicación o servicio en la nube y para qué la usarías');
  sitio(34); P('1.4 · Planes de pago de Microsoft 365 y Google Workspace', { size: 11, b: true, color: COL.peach, tras: 2 });
  for (const p of PLAN_SERV){
    sitio(40); P(p[1], { size: 10.5, b: true, sang: 3, tras: .6 });
    PLAN.forEach((f, i) => {
      if (i === 0 || PLAN[i - 1][3] !== f[3]) P(PLAN_GRUPOS[f[3]], { size: 9.5, i: true, color: COL.muted, sang: 5, tras: .4 });
      texto([{ t: f[1] + ': ', b: true }, { t: campo(`plan_${p[0]}_${f[0]}`).trim() || '(sin rellenar)' }], { size: 9.5, sang: 8, tras: .4 });
    });
    api.y += 1.5;
  }
  separador();
  await caja('p1_plan', '1.5', `Qué servicio y qué plan elegirías para ${C.entidad}, con su coste y la justificación`);
  await caja('p1_riesgos', '1.6', 'Riesgos de guardar o compartir mal la información en la nube');

  banda('Parte 2 · Caso práctico: ' + C.casoT.toLowerCase(), [226,238,252], COL.sky);
  P(C.caso, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  await caja('p2_herr', '2.1', 'Herramienta o servicio en la nube elegido y por qué');
  { const n = nube(), ids = new Set(n.c.map(x => x.id));
    sitio(30); P(`2.2 · Mi nube · ${n.c.length} carpetas · ${colocados(C)} de ${C.arch.length} archivos colocados`, { size: 11, b: true, color: COL.sky, tras: 2 });
    for (const c of n.c){
      sitio(12); P('Carpeta: ' + (String(c.n || '').trim() || '(sin nombre)'), { size: 10, b: true, sang: 3, tras: .6 });
      const dentro = C.arch.filter(a => n.d[a[0]] === c.id);
      if (!dentro.length) P('(vacía)', { size: 9.5, sang: 9, i: true, color: COL.muted, tras: .4 });
      dentro.forEach(a => P(a[2], { size: 9.5, sang: 9, marca: '-', tras: .4 }));
      api.y += 1;
    }
    const sueltos = C.arch.filter(a => !ids.has(n.d[a[0]]));
    if (sueltos.length){ P('Sin ordenar:', { size: 10, b: true, sang: 3, tras: .6 }); sueltos.forEach(a => P(a[2], { size: 9.5, sang: 9, marca: '-', tras: .4 })); }
    if (!n.c.length) P('(no se ha creado ninguna carpeta)', { size: 9.5, sang: 3, i: true, color: COL.muted });
  }
  await caja('p2_organiza', '', 'Explicación de la organización');
  { const p = permisos();
    sitio(30); P(`2.3 · ¿Quién puede ver qué? · ${fin('permisos') ? `${permBien(C)} de ${C.arch.length} puntos` : 'SIN ENTREGAR (0 puntos)'}`, { size: 11, b: true, color: COL.sky, tras: 2 });
    C.arch.forEach(a => {
      const e = p[a[0]];
      texto([{ t: a[2] + ': ', b: true }, { t: (PERMISOS[e] || 'Sin decidir') + (PERMISOS[e] ? (a[3].includes(e) ? ' (bien)' : ' (mal)') : '') }], { size: 9.5, sang: 3, marca: '·' });
    });
    separador(); }
  await caja('p2_ventajas', '2.4', 'Ventajas de la nube frente al papel');
  await caja('p2_precauciones', '2.5', 'Precauciones de privacidad y confidencialidad');
  await caja('p2_explica', '2.6', `Explicación sencilla para ${C.quien} que no sabe usar la nube`);
  await caja('p2_otra', '2.7', 'Otra actividad del sector: qué información compartirías');

  await misionPDF(api, C);
}

// ===== Antes de entregar =====
function listaChecks(C){
  const hc = hechasClasif(C), ns = C.situaciones.length, pl = planLlenos(), np = PLAN.length * 2;
  const p1 = cuentaLlenas(['p1_porque', 'p1_app', 'p1_plan', 'p1_riesgos']);
  const cn = carpetasConNombre(), col = colocados(C), na = C.arch.length, ph = permHechos(C);
  const p2 = cuentaLlenas(['p2_herr', 'p2_organiza', 'p2_ventajas', 'p2_precauciones', 'p2_explica', 'p2_otra']);
  return [
    { ok: fin('clasif'), t: 'Parte 1 · Buena práctica o riesgo (puntúa)', cuenta: fin('clasif') ? 'entregado' : `${hc}/${ns}`, falta: 'Clasifica las 8 situaciones y pulsa «Entregar respuestas».' },
    { ok: pl === np, t: 'Parte 1 · Comparación de planes', cuenta: `${pl}/${np}`, falta: 'Rellena todas las casillas de la tabla de Microsoft 365 y Google Workspace.' },
    { ok: p1 === 4, t: 'Parte 1 · Preguntas', cuenta: `${p1}/4`, falta: 'Responde a las preguntas 1.2, 1.3, 1.5 y 1.6.' },
    { ok: cn >= MIN_CARPETAS && col === na && cn === nube().c.length, t: 'Parte 2 · Tu nube montada', cuenta: `${cn} carpetas · ${col}/${na} archivos`, falta: `Crea al menos ${MIN_CARPETAS} carpetas, ponles nombre a todas y mete cada archivo en la suya.` },
    { ok: fin('permisos'), t: 'Parte 2 · Quién puede ver qué (puntúa)', cuenta: fin('permisos') ? 'entregado' : `${ph}/${na}`, falta: 'Decide el permiso de todos los archivos y pulsa «Entregar respuestas».' },
    { ok: p2 === 6, t: 'Parte 2 · Preguntas del caso', cuenta: `${p2}/6`, falta: 'Responde a todas las preguntas del caso práctico.' },
    ...misionChecks(C)
  ];
}
// Progreso: las cajas y, además, las partes interactivas
function progresoPropio(){
  const C = C_ACT(), eds = [...document.querySelectorAll('.ed')], ll = eds.filter(tieneContenido).length;
  const jt = C.situaciones.length + PLAN.length * 2 + C.arch.length * 2 + misionTotal(C);
  const jh = hechasClasif(C) + planLlenos() + colocados(C) + permHechos(C) + misionHechas(C);
  const total = eds.length + 4, hechas = ll + (jt ? jh / jt * 4 : 0);
  return { hechas, total, texto: `${Math.round(hechas / total * 100)} % del ejercicio hecho` };
}

// ===== Ejemplo relleno (solo texto de muestra) =====
function ejemploCampos(){
  const C = CICLOS.ei_sp, o = {};
  o.clasif = JSON.stringify(Object.fromEntries(C.situaciones.map((s, i) => [i, s[1]])));
  const c = [{ id: 'c1', n: '[Carpeta 1]' }, { id: 'c2', n: '[Carpeta 2]' }, { id: 'c3', n: '[Carpeta 3]' }];
  o.nube = JSON.stringify({ c, d: Object.fromEntries(C.arch.map((a, i) => [a[0], c[i % 3].id])) });
  o.permisos = JSON.stringify(Object.fromEntries(C.arch.map(a => [a[0], a[3][0]])));
  o.mision = misionEjemplo(C);
  o.entregado = JSON.stringify({ clasif: true, permisos: true, r1: true, aud: true, r3: true, pasos: true, r5: true });
  for (const p of PLAN_SERV) for (const f of PLAN) o[`plan_${p[0]}_${f[0]}`] = `[${f[1]}]`;
  return o;
}
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (id === 'p1_app') return '<p><b>[Nombre de la aplicación]</b></p><p>[Texto de muestra] Para qué la usarías en tu trabajo.</p>';
  if (id === 'p1_plan') return '<p><b>[Servicio y plan que eliges]</b></p><p>[Cuánto costaría al mes y al año para 8 personas]</p><p>[Texto de muestra] Por qué lo eliges.</p>';
  if (id === 'p2_ventajas') return '<ul><li>[Ventaja 1]</li><li>[Ventaja 2]</li><li>[Ventaja 3]</li></ul>';
  if (id === 'p2_precauciones') return '<ul><li>[Precaución 1]</li><li>[Precaución 2]</li><li>[Precaución 3]</li></ul>';
  if (id === 'p2_explica') return '<ol><li>[Paso 1]</li><li>[Paso 2]</li><li>[Paso 3]</li></ol>';
  if (id === 'p3_enlace') return t('[Enlace a tu carpeta compartida]');
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · web o institución · fecha · enlace]</li><li>[Páginas de precios de Microsoft 365 y Google Workspace · fecha en que las consultaste]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  if (/^p\d_/.test(id)) return t('[Texto de muestra] Tu respuesta, con tus palabras y aplicada a tu sector.');
  return '';
}

// ===== No se puede copiar el texto del ejercicio =====
// El enunciado, las preguntas y las opciones no se pueden seleccionar, copiar, cortar ni arrastrar, y no sale el menú del botón derecho.
// Sí se puede dentro de las respuestas del alumno (cajas de texto y casillas), que son suyas.
document.head.insertAdjacentHTML('beforeend', `<style>
body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.ed,.ed *,input,textarea,select{-webkit-user-select:text;user-select:text;-webkit-touch-callout:default}
@media print{body{display:none}}
</style>`);
{ const propio = e => !!(e.target && e.target.closest && e.target.closest('.ed, input, textarea'));
  for (const ev of ['copy', 'cut', 'contextmenu', 'selectstart'])
    document.addEventListener(ev, e => { if (!propio(e)) { e.preventDefault(); if (ev === 'copy' || ev === 'cut') aviso('El texto de este ejercicio no se puede copiar.'); } }, true);
  document.addEventListener('dragstart', e => { if (!propio(e) && !(e.target.closest && e.target.closest('#nbNube [data-arch]'))) e.preventDefault(); }, true);
  // Ctrl/Cmd + A, C, X, P, S, U fuera de las respuestas
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && !e.altKey && ['a', 'c', 'x', 'p', 's', 'u'].includes(String(e.key).toLowerCase()) && !propio(e)) e.preventDefault(); }, true); }

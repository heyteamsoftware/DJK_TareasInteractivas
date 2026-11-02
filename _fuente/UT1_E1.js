// ===== UT1_E1 · Revoluciones industriales canarias y quinta revolución industrial =====
const COMUN = {
  codigo: 'UT1_E1',
  corto: 'UT1 · E1',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT1 · Digitalización de los sectores productivos',
  ejercicio: 'E1 · Revoluciones industriales canarias y quinta revolución industrial',
  ra: 'RA1',
  ce: 'a, b',
  peso: '15 % de la unidad',
  modalidad: 'Individual · sesiones 1 y 2',
  raTexto: 'Analiza el concepto de digitalización y su repercusión en los sectores productivos teniendo en cuenta la actividad de la empresa e identificando entornos IT (Information Technology: tecnología de la información) y OT (Operation Technology: tecnología de operación) característicos.',
  ceTextos: [
    ['a', 'Se ha descrito en qué consiste el concepto de digitalización.'],
    ['b', 'Se ha relacionado la implantación de la tecnología digital con la organización de las empresas.']
  ],
  objetivo: 'El objetivo es comprender cómo han evolucionado las revoluciones industriales y cómo se reflejan hoy, con ejemplos de Canarias, y discutir hacia dónde apunta la siguiente. La tarea consta de tres partes y es individual.',
  pasos: [
    'Lee el objetivo y la tabla «Cómo se califica».',
    '<b>Parte 1:</b> busca un ejemplo real en Canarias para cada una de las 4 revoluciones industriales y rellena el ejemplo, la fecha, la fuente y qué cambió en la vida de la gente.',
    '<b>Parte 2:</b> mira el debate sobre la quinta revolución industrial y responde a las <b>2 preguntas</b>.',
    '<b>Parte 3:</b> responde a las 3 preguntas pensando en tu futuro trabajo en Canarias (unas 15 líneas en total).',
    'Cita tus fuentes y declara si has usado inteligencia artificial.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Escribe con tus palabras: pegar texto está desactivado. Sí puedes pegar, arrastrar o subir imágenes.',
    'El ejemplo del barco de vapor no se puede usar: búscate otro.',
    'Un titular sin fuente no vale: cada ejemplo necesita su fuente.',
    'El trabajo se guarda solo en este navegador. Si cambias de ordenador, no estará: descarga el PDF.'
  ],
  p1: {
    intro: 'Busca un ejemplo real en Canarias relacionado con cada una de las cuatro revoluciones industriales. Para cada revolución tienes que indicar el ejemplo, la fecha aproximada, la fuente donde lo has encontrado y, sobre todo, qué cambió en la vida de la gente de las Islas.',
    prohibido: 'Para la segunda revolución industrial serviría la llegada del barco de vapor a Canarias: ese ejemplo no se puede usar, búscate otro.',
    nota: 'Se valorará que los ejemplos sean canarios y verificables, no genéricos. Un titular sin fuente no vale. Si un ejemplo te parece dudoso o a caballo entre dos revoluciones, dilo y argumenta por qué: eso suma, no resta.',
    revs: ['1ª revolución · Industria 1.0', '2ª revolución · Industria 2.0', '3ª revolución · Industria 3.0', '4ª revolución · Industria 4.0'],
    campos: [
      { k: 'ej', t: 'Ejemplo canario', ph: 'Qué ejemplo has encontrado y dónde ocurrió…', corta: true },
      { k: 'fecha', t: 'Fecha aproximada', ph: 'Año o época…', corta: true },
      { k: 'fuente', t: 'Fuente consultada', ph: 'Título, medio o institución, fecha y enlace…', corta: true, ancha: true },
      { k: 'cambio', t: 'Qué cambió en la vida de la gente de las Islas', ph: 'Explica cómo era antes y qué cambió después…', ancha: true }
    ]
  },
  p2: {
    intro: 'Visualiza este debate y responde a las preguntas, con la información del vídeo o con tus propias conclusiones:',
    video: 'https://www.youtube.com/watch?v=qL8YNmVBl6g',
    preguntas: [
      '¿Qué elementos definen a la quinta revolución industrial? ¿Ha comenzado?',
      '¿En qué se diferencia de la cuarta, sobre todo en la relación entre las personas y la tecnología?'
    ]
  },
  p3: {
    intro: 'Esta parte es la que conecta todo lo anterior con el trabajo que vas a hacer. Responde en unas 15 líneas en total.',
    preguntas: [
      'Señala una tarea de tu futuro puesto de trabajo que ya se vio afectada por alguna de las cuatro revoluciones anteriores, y explica cómo se hacía antes y cómo se hace ahora.',
      'Describe una tarea concreta en la que una herramienta digital podría asistirte, pero en la que la decisión final tendría que seguir siendo tuya. Explica por qué.',
      'Indica algo de tu profesión que, en tu opinión, no debería automatizarse nunca, y razona la respuesta.'
    ],
    canarias: 'Ten en cuenta una circunstancia propia del archipiélago: el territorio fragmentado hace que la conectividad y los servicios digitales no sean una comodidad, sino una cuestión de acceso al servicio. Si tu respuesta lo tiene en cuenta, mejor.'
  },
  numFuentes: '4',
  fuentes: 'Cita todas las fuentes consultadas (título, medio o institución, fecha y enlace) y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y cómo has verificado lo que te ha dicho (en historia local se inventa con soltura).',
  criterios: [
    ['Parte 1 · Las revoluciones industriales en Canarias', 'Un ejemplo canario, real y verificable para cada revolución, con fecha, fuente y qué cambió en la vida de la gente (1 punto por revolución).', 4],
    ['Parte 2 · La quinta revolución industrial', 'Respuestas razonadas a las dos preguntas, con información del vídeo o con conclusiones propias (1,5 puntos por pregunta).', 3],
    ['Parte 3 · Mi profesión', 'Respuestas concretas y razonadas sobre tu futuro trabajo; suma tener en cuenta la realidad de Canarias (1 punto por pregunta).', 3]
  ],
  siglas: [
    ['IT/OT', 'Information Technology / Operation Technology: tecnología de la información y tecnología de operación'],
    ['IT', 'Information Technology: tecnología de la información'],
    ['OT', 'Operation Technology: tecnología de operación'],
    ['IA', 'Inteligencia artificial'],
    ['CO2', 'Dióxido de carbono']
  ]
};

// Lo único que cambia por ciclo: el centro de trabajo de la Parte 3 y las pistas
const CICLOS = {
  af: { nombre: 'Acondicionamiento Físico',
    centro: 'Céntrate en un centro de acondicionamiento físico de Canarias (gimnasio, centro deportivo o centro de entrenamiento personal).',
    pistas: 'altas y control de acceso de los socios, valoración de la condición física, planificación y registro de los entrenamientos, comunicación con los usuarios.' },
  as: { nombre: 'Animación Sociodeportiva',
    centro: 'Céntrate en una empresa o servicio de animación sociodeportiva de Canarias (escuelas deportivas municipales, actividades en la naturaleza o animación turística).',
    pistas: 'inscripciones y listas de participantes, organización de eventos y competiciones, difusión de las actividades, comunicación con participantes y familias.' },
  ei: { nombre: 'Educación Infantil',
    centro: 'Céntrate en una escuela infantil de Canarias.',
    pistas: 'guarderías y escuelas infantiles, material didáctico, registro de la evolución de cada criatura, comunicación con las familias.' },
  hb: { nombre: 'Higiene Bucodental',
    centro: 'Céntrate en una clínica dental o en un programa de salud bucodental de Canarias.',
    pistas: 'historia clínica y odontograma, radiografías, esterilización del instrumental, citas y recordatorios a los pacientes, educación para la salud.' },
  is: { nombre: 'Integración Social',
    centro: 'Céntrate en un centro o servicio de integración social de Canarias (centro de día, vivienda tutelada o servicio de atención a personas en situación de dependencia).',
    pistas: 'expedientes y registros de seguimiento de los usuarios, coordinación con otros servicios, gestión de ayudas y citas, comunicación con las familias.' }
};
// Ciclos semipresenciales: IS y EI reutilizan el contenido del presencial; MC tiene contenido propio
CICLOS.ei_sp = Object.assign(structuredClone(CICLOS.ei), { nombre: 'Educación Infantil Semipresencial', semipresencial: true });
CICLOS.is_sp = Object.assign(structuredClone(CICLOS.is), { nombre: 'Integración Social Semipresencial', semipresencial: true });
CICLOS.mc_sp = { nombre: 'Mediación Comunicativa Semipresencial', semipresencial: true,
  centro: 'Céntrate en un servicio de mediación comunicativa de Canarias (servicio de intérpretes y mediadores de lengua de signos, asociación de personas sordas o sordociegas, o centro educativo con alumnado con dificultades de comunicación).',
  pistas: 'citas y avisos a las personas usuarias, interpretación y videointerpretación en lengua de signos, subtitulado, sistemas aumentativos y alternativos de comunicación, coordinación con familias y servicios.' };
const ORDEN = ['af','as','ei','hb','is','ei_sp','is_sp','mc_sp'];

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>`;
}

function construirTarea(C){
  const P1 = COMUN.p1, P2 = COMUN.p2, P3 = COMUN.p3;
  let h = `<section class="fase f1"><header><h2>Parte 1 · Las revoluciones industriales en Canarias</h2></header><div class="cuerpo"><p>${esc(P1.intro)}</p><div class="prohibido">🚫 ${esc(P1.prohibido)}</div><div class="nota">${esc(P1.nota)}</div>`;
  P1.revs.forEach((r, i) => {
    h += `<div class="rev"><h3>1.${i+1} · ${esc(r)}</h3><div class="campos">`;
    P1.campos.forEach(c => { h += caja(`p1_${i}_${c.k}`, '', esc(c.t), '', { corta: c.corta, ancha: c.ancha, ph: c.ph }); });
    h += `</div></div>`;
  });
  h += `</div></section>`;
  h += `<section class="fase f2"><header><h2>Parte 2 · La quinta revolución industrial</h2></header><div class="cuerpo"><p>${esc(P2.intro)}</p>
    <div class="video"><a href="${P2.video}" target="_blank" rel="noopener">▶ Ver el debate</a><small>${esc(P2.video)}</small></div>`;
  P2.preguntas.forEach((q, i) => { h += caja(`p2_${i}`, `2.${i+1}`, esc(q)); });
  h += `</div></section>`;
  h += `<section class="fase f3"><header><h2>Parte 3 · Y esto, ¿qué tiene que ver con mi profesión?</h2></header><div class="cuerpo"><p>${esc(P3.intro)}</p>
    <div class="centro"><b>${esc(C.centro)}</b></div>`;
  P3.preguntas.forEach((q, i) => { h += caja(`p3_${i}`, `3.${i+1}`, esc(q), i === 0 ? `<div class="pista"><b>Pistas:</b> ${esc(C.pistas)}</div>` : ''); });
  h += `<div class="nota">🏝️ ${esc(P3.canarias)}</div></div></section>`;
  return h;
}

async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL } = api;
  banda('Parte 1 · Las revoluciones industriales en Canarias', [223,243,234], COL.mint);
  for (let i = 0; i < COMUN.p1.revs.length; i++){
    sitio(30); P(`1.${i+1} · ${COMUN.p1.revs[i]}`, { size: 11.5, b: true, color: COL.mint, tras: 2 });
    for (const c of COMUN.p1.campos) await caja(`p1_${i}_${c.k}`, '', c.t, { compacta: true });
    separador();
  }
  banda('Parte 2 · La quinta revolución industrial', [226,238,252], COL.sky);
  texto([{ t: 'Debate: ', b: true }, { t: COMUN.p2.video, href: COMUN.p2.video, u: true }], { size: 9.5, tras: 3 });
  for (let i = 0; i < COMUN.p2.preguntas.length; i++) await caja(`p2_${i}`, `2.${i+1}`, COMUN.p2.preguntas[i]);
  banda('Parte 3 · Y esto, ¿qué tiene que ver con mi profesión?', [255,233,220], COL.peach);
  P(C.centro, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  for (let i = 0; i < COMUN.p3.preguntas.length; i++) await caja(`p3_${i}`, `3.${i+1}`, COMUN.p3.preguntas[i]);
}

function listaChecks(C){
  const revs = COMUN.p1.revs.map((r, i) => COMUN.p1.campos.every(c => llena(`p1_${i}_${c.k}`)));
  const nr = revs.filter(Boolean).length;
  const faltanRev = COMUN.p1.revs.filter((r, i) => !revs[i]).map(r => r.split(' · ')[0]).join(', ');
  const p2 = COMUN.p2.preguntas.map((_, i) => `p2_${i}`), p3 = COMUN.p3.preguntas.map((_, i) => `p3_${i}`);
  const n2 = cuentaLlenas(p2), n3 = cuentaLlenas(p3);
  return [
    { ok: nr === revs.length, t: 'Parte 1 · Las 4 revoluciones completas', cuenta: `${nr}/${revs.length}`, falta: `Rellena ejemplo, fecha, fuente y qué cambió en: ${faltanRev}.` },
    { ok: n2 === p2.length, t: 'Parte 2 · Las 2 preguntas respondidas', cuenta: `${n2}/${p2.length}`, falta: 'Responde a las preguntas sobre el debate.' },
    { ok: n3 === p3.length, t: 'Parte 3 · Las 3 preguntas respondidas', cuenta: `${n3}/${p3.length}`, falta: 'Responde a las preguntas sobre tu profesión.' }
  ];
}

function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (/^p1_\d_ej$/.test(id)) return t(`[Texto de muestra] Aquí va el hecho canario que has elegido para la ${+id[3] + 1}ª revolución y la isla donde ocurrió.`);
  if (/_fecha$/.test(id)) return t('[Año o época]');
  if (/_fuente$/.test(id)) return t('[Título del artículo] · [Medio o institución] · [Fecha] · <a href="https://www.ejemplo.es" target="_blank">https://www.ejemplo.es</a>');
  if (/_cambio$/.test(id)) return t('[Texto de muestra] Cómo vivía la gente antes de este cambio, qué cambió después y a quién afectó más. Si el ejemplo está a caballo entre dos revoluciones, explícalo aquí.');
  if (/^p2_/.test(id)) return t('[Texto de muestra] Tu respuesta razonada, con ideas del debate o con tus propias conclusiones. Puedes usar <b>negrita</b>, listas o imágenes.');
  if (/^p3_/.test(id)) return t('[Texto de muestra] Tu respuesta centrada en tu futuro puesto de trabajo en Canarias.');
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · medio · fecha · enlace]</li><li>[Fuente 2: título · medio · fecha · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste lo que te dijo] o «No he usado IA».</p>';
  return '';
}

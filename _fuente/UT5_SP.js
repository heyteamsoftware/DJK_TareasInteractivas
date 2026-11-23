// ===== UT5_SP · Semipresencial y Recuperaciones: 24H DE DATOS (big data) =====
// Versión interactiva del Word «UT5 · E1 · 24 horas de datos». Se pide lo mismo, pero se hace jugando:
//   Parte A · Tus 24 horas: un reloj de 24 h con 8 franjas de 3 horas. En cada franja el alumno deja sus «migas digitales»:
//             qué lleva encima y qué apps usa. La primera vez que añade una app dice qué datos le deja y qué empresa cree que
//             los guarda (no puntúa ni se corrige en pantalla: lo valora el profesor; lo puede cambiar cuando quiera).
//             El mapa visual se dibuja solo. Después, de detective: qué deducen de él sus empresas y quién más podría usar esos datos.
//   Parte B · Tu perfil de big data: ficha «así te ven» con datos explícitos, implícitos (salen del mapa) y etiquetas.
//   Parte C · La noticia: opinión (termómetro) y reflexión de 100 palabras o más.
// Estado (campos ocultos, JSON):  dia = { s: semilla, f: { franja: { a: [apps], d: [dispositivos], z: durmiendo } },
//                                          apps: { id: { dt: [datos], e: empresa elegida, n: nombre, en: empresa (app propia) } } }
//                                  quien = [quién más podría usar los datos]   ·   tags = [etiquetas del perfil]
// La pantalla (reloj, panel, resúmenes) está en _fuente/UT5_SP_reloj.js y los iconos de las apps en _fuente/UT5_SP_iconos.js.

const COMUN = {
  codigo: 'UT5_SP',
  corto: 'UT5 · Semipresencial',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT5 · Big data',
  ejercicio: '24 horas de datos',
  ra: 'RA5',
  ce: 'a, c, i',
  modalidad: 'Individual · semipresencial',
  raTexto: 'Evalúa la importancia de los datos, así como su protección en una economía digital globalizada, definiendo sistemas de seguridad y ciberseguridad tanto a nivel de equipo/sistema, como globales.',
  ceTextos: [
    ['a', 'Se ha establecido la diferencia entre dato e información.'],
    ['c', 'Se ha identificado la relación entre Big Data, análisis de datos, machine/deep learning e inteligencia artificial.'],
    ['i', 'Se ha valorado la importancia de la seguridad y su regulación en relación con los datos.']
  ],
  objetivo: 'Tomar conciencia de la huella de datos que dejas cada día, de lo que se puede deducir de ella y de cómo afecta a la sociedad. Es individual.',
  pasos: [
    '<b>Parte A · Tus 24 horas:</b> recorre el reloj franja a franja (8 franjas de 3 horas) y deja tus «migas digitales»: qué llevas encima y qué apps usas, de día y de noche.',
    'La primera vez que añades una app, di <b>qué datos le dejas</b> y <b>qué empresa crees que los guarda</b>. Puedes cambiarlo cuando quieras.',
    'Con tu mapa hecho, haz de detective: qué pueden deducir de ti las empresas y quién más podría usar tus datos.',
    '<b>Parte B · Tu perfil:</b> completa tu ficha de big data, tal como te ven las empresas.',
    '<b>Parte C · La noticia:</b> lee la noticia y escribe tu reflexión (100 palabras o más).',
    'Cita tus fuentes, revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Es individual y es sobre ti: usa tus hábitos de un día normal, de verdad. No hace falta que pongas nada íntimo.',
    'En el perfil pon datos generales (rango de edad, isla o municipio): nunca tu dirección, tu teléfono ni contraseñas.',
    'Escribe con tus palabras: pegar texto está desactivado.'
  ],
  criterios: [
    ['Parte A · Mapa de las 24 horas', 'Las 8 franjas con tus hábitos reales, de día y de noche: qué llevas encima, qué apps usas, qué datos dejas y qué empresas los guardan; qué deducen de ti y quién más podría usar esos datos.', 2.5],
    ['Parte B · Perfil de big data', 'Perfil coherente con los hábitos de la Parte A: datos explícitos, datos implícitos, etiquetas deducidas, lo que te enseñarían y en qué se equivocaría.', 2.5],
    ['Parte C · Reflexión sobre la noticia', 'Reflexión de 100 palabras o más que relaciona la noticia con el big data, la regulación y la protección de los datos, con ejemplos propios.', 3],
    ['Presentación y corrección', 'Trabajo ordenado, bien redactado y sin errores.', 1],
    ['Citación de fuentes y uso declarado de IA', 'Citas las fuentes y declaras si has usado IA, para qué y cómo comprobaste lo que te dijo.', 1]
  ],
  numFuentes: '4',
  fuentes: 'Cita las fuentes que hayas consultado (título, medio o institución, fecha y enlace), empezando por la noticia de la Parte C, y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y cómo has comprobado lo que te ha dicho.',
  siglas: [
    ['IA', 'Inteligencia artificial'],
    ['RTVE', 'Radiotelevisión Española'],
    ['GPS', 'Sistema de posicionamiento global (Global Positioning System)']
  ]
};

const NOTICIA = { titulo: 'El Gobierno prohibirá el acceso a redes a menores de 16 años', medio: 'RTVE · 3 de febrero de 2026', url: 'https://www.rtve.es/noticias/20260203/espana-prohibira-plataformas-menores-16-anos/16921236.shtml' };

// ===== Franjas del día (8 de 3 horas). t: n = noche · a = amanecer · d = día · t = atardecer =====
const FRANJAS = [
  ['00:00', '03:00', 'n'], ['03:00', '06:00', 'n'], ['06:00', '09:00', 'a'], ['09:00', '12:00', 'd'],
  ['12:00', '15:00', 'd'], ['15:00', '18:00', 'd'], ['18:00', '21:00', 't'], ['21:00', '24:00', 'n']
];
const ES_NOCHE = i => FRANJAS[i][2] === 'n';

// ===== Empresas (la que guarda los datos de cada app) =====
const EMPRESAS = {
  meta: ['Meta', '#0866ff'], google: ['Google (Alphabet)', '#ea4335'], bytedance: ['ByteDance', '#111111'], amazon: ['Amazon', '#f08804'],
  apple: ['Apple', '#6e6e73'], microsoft: ['Microsoft', '#0078d4'], spotify: ['Spotify', '#1db954'], netflix: ['Netflix', '#e50914'],
  xcorp: ['X Corp.', '#14171a'], telegram: ['Telegram', '#229ed9'], snap: ['Snap', '#c9a400'], openai: ['OpenAI', '#10a37f'],
  banco: ['Tu banco', '#7c3aed'], educa: ['Tu centro (Consejería de Educación)', '#0e7f96'], ns: ['No lo sé', '#94a3b8']
};
// ===== Apps del catálogo: [id, icono, nombre, empresa] =====
const APPS = [
  ['whatsapp', '💬', 'WhatsApp', 'meta'], ['instagram', '📸', 'Instagram', 'meta'], ['facebook', '👥', 'Facebook', 'meta'],
  ['tiktok', '🎵', 'TikTok', 'bytedance'], ['youtube', '▶️', 'YouTube', 'google'], ['buscador', '🔎', 'Buscador de Google', 'google'],
  ['maps', '🗺️', 'Google Maps', 'google'], ['gmail', '✉️', 'Gmail', 'google'], ['spotify', '🎧', 'Spotify', 'spotify'],
  ['netflix', '🎬', 'Netflix', 'netflix'], ['prime', '📺', 'Prime Video', 'amazon'], ['amazon', '📦', 'Amazon (compras)', 'amazon'],
  ['alexa', '🔊', 'Alexa', 'amazon'], ['twitch', '🎮', 'Twitch', 'amazon'], ['x', '✖️', 'X (antes Twitter)', 'xcorp'],
  ['telegram', '✈️', 'Telegram', 'telegram'], ['snapchat', '👻', 'Snapchat', 'snap'], ['chatgpt', '🤖', 'ChatGPT', 'openai'],
  ['teams', '👔', 'Teams u Outlook', 'microsoft'], ['linkedin', '💼', 'LinkedIn', 'microsoft'], ['icloud', '☁️', 'iCloud (fotos del iPhone)', 'apple'],
  ['pago', '💳', 'Pago con tarjeta o Bizum', 'banco'], ['campus', '🎓', 'Campus virtual del centro', 'educa']
];
// ===== Datos que se dejan: [id, icono, nombre] =====
const DATOS = [
  ['ubi', '📍', 'Ubicación'], ['likes', '❤️', 'Likes y reacciones'], ['busq', '🔎', 'Búsquedas'], ['ver', '🎬', 'Lo que ves o escuchas'],
  ['fotos', '📷', 'Fotos y vídeos tuyos'], ['msg', '💬', 'Mensajes y contactos'], ['compras', '🛒', 'Compras y pagos'],
  ['salud', '🩺', 'Salud y actividad física'], ['voz', '🎙️', 'Tu voz'], ['horas', '⏰', 'A qué horas te conectas']
];
// ===== Lo que llevas encima o tienes cerca =====
const DISPOSITIVOS = [
  ['movil', '📱', 'Móvil'], ['reloj', '⌚', 'Reloj inteligente'], ['pulsera', '📿', 'Pulsera de actividad'], ['auris', '🎧', 'Auriculares inteligentes'],
  ['gafas', '👓', 'Gafas inteligentes'], ['ropa', '👟', 'Ropa o zapatillas con sensores'], ['anillo', '💍', 'Anillo inteligente'], ['tarjeta', '💳', 'Tarjeta contactless'],
  ['pc', '💻', 'Ordenador o tablet'], ['tele', '📺', 'Tele inteligente'], ['altavoz', '🔊', 'Altavoz inteligente'], ['coche', '🚗', 'Coche conectado']
];
// ===== ¿Quién más podría usar esos datos? =====
const QUIEN = [
  ['anun', 'Anunciantes'], ['grupo', 'Otras empresas a las que se ceden o se venden'], ['estado', 'La policía o un juzgado, con una orden'],
  ['ciber', 'Ciberdelincuentes, si hay una filtración'], ['seguro', 'Aseguradoras y bancos'], ['empleo', 'Quien te vaya a contratar'], ['politica', 'Partidos políticos en campaña']
];
const EDADES = ['Menos de 18', '18 a 24', '25 a 34', '35 a 44', '45 a 54', '55 o más'];
const OPINION = ['Muy en contra', 'En contra', 'No lo tengo claro', 'A favor', 'Muy a favor'];
const MIN_APPS = 6, MIN_TAGS = 6, MAX_TAGS = 12, MIN_PALABRAS = 100;

// ===== Ciclos: semipresenciales y Recuperaciones (individual). Solo cambia la pista de la reflexión =====
const ORDEN = ['ei_sp', 'is_sp', 'mc_sp', 'rec_ce', 'rec_is'];
const PISTAS_C = {
  ei: 'Piensa también en los niños y las niñas con los que trabajarás: ¿qué huella de datos tienen ya antes de saber leer, con lo que sus familias publican de ellos?',
  is: 'Piensa también en los menores y en las personas vulnerables con las que trabajarás: ¿quién protege sus datos y quién les enseña a protegerlos?',
  mc: 'Piensa también en las personas sordas y sordociegas con las que trabajarás: para muchas, las redes y las videollamadas son su principal vía de comunicación. ¿Cómo se protege a un menor sin dejarlo aislado?',
  ce: 'Piensa también en tu profesión: en una emergencia, la ubicación de un móvil o un aviso en redes salvan vidas. ¿Dónde pondrías el límite entre proteger y vigilar?'
};
const CICLOS = {
  ei_sp: { nombre: 'Educación Infantil Semipresencial', pistaC: PISTAS_C.ei },
  is_sp: { nombre: 'Integración Social Semipresencial', pistaC: PISTAS_C.is },
  mc_sp: { nombre: 'Mediación Comunicativa Semipresencial', pistaC: PISTAS_C.mc },
  rec_ce: { nombre: 'Recuperación Coordinación de Emergencias y Protección Civil', pistaC: PISTAS_C.ce },
  rec_is: { nombre: 'Recuperación Integración Social', pistaC: PISTAS_C.is }
};
for (const k of ORDEN) CICLOS[k].semipresencial = true;

// ===== estado =====
const leeJSON = (n, def) => { try { const o = JSON.parse(campo(n) || 'null'); return o && typeof o === 'object' ? o : def; } catch(e){ return def; } };
function pon(n, o){ const el = document.querySelector(`input[data-campo="${n}"]`); if (!el) return; el.value = JSON.stringify(o); programarGuardado(); }
function dia(){
  const o = leeJSON('dia', {}), f = {};
  for (let i = 0; i < FRANJAS.length; i++){ const x = (o.f || {})[i] || {}; f[i] = { a: Array.isArray(x.a) ? x.a : [], d: Array.isArray(x.d) ? x.d : [], z: !!x.z }; }
  return { s: Number.isInteger(o.s) ? o.s : 0, f, apps: o.apps && typeof o.apps === 'object' ? o.apps : {} };
}
const appDe = id => APPS.find(a => a[0] === id);
// nombre, icono y empresa correcta de una app del mapa (del catálogo o propia del alumno)
function infoApp(D, id){
  const c = appDe(id), x = D.apps[id] || {};
  return c ? { id, ic: c[1], n: c[2], emp: c[3], propia: false } : { id, ic: '📲', n: x.n || 'Otra app', emp: null, propia: true, en: x.en || '' };
}
const appsUsadas = D => [...new Set(Object.values(D.f).flatMap(x => x.a))].filter(id => D.apps[id]);
const migasDe = (D, i) => D.f[i].a.filter(id => D.apps[id]).length;
const franjaHecha = (D, i) => migasDe(D, i) > 0 || D.f[i].z;
const franjasHechas = D => FRANJAS.filter((_, i) => franjaHecha(D, i)).length;
// Empresas acertadas (solo para el profesor: no se enseña al alumno ni cuenta en la nota): apps del catálogo que están en el mapa
function aciertosEmp(D){
  const l = appsUsadas(D).map(id => infoApp(D, id)).filter(a => !a.propia);
  return { ok: l.filter(a => D.apps[a.id].e === a.emp).length, total: l.length };
}
const notaEmp = D => { const a = aciertosEmp(D); return a.total ? Math.round(a.ok / a.total * 100) / 100 : 0; };
// Dato informativo para el profesor (sobre 10): cuántas empresas ha acertado. Va con la entrega y solo se ve en el Excel del panel
function notaEntrega(){ return Math.round(notaEmp(dia()) * 100) / 10; }
// Empresa que el alumno ha puesto a una app (no se le corrige: el mapa refleja lo que él cree)
const empElegida = (D, a) => a.propia ? null : (EMPRESAS[(D.apps[a.id] || {}).e] ? D.apps[a.id].e : 'ns');
const empresaVista = (D, a) => a.propia ? (a.en || 'Otra empresa') : EMPRESAS[empElegida(D, a)][0];
// Ranking de empresas por número de migas (una miga = una app en una franja)
function ranking(D){
  const m = {};
  FRANJAS.forEach((_, i) => D.f[i].a.forEach(id => {
    if (!D.apps[id]) return; const a = infoApp(D, id), k = a.propia ? 'p:' + empresaVista(D, a) : empElegida(D, a);
    const r = m[k] || (m[k] = { k, n: empresaVista(D, a), col: a.propia ? '#64748b' : EMPRESAS[k][1], migas: 0, apps: new Set(), ids: new Set(), dt: new Set(), fr: new Set() });
    r.migas++; r.apps.add(a.n); r.ids.add(id); (D.apps[id].dt || []).forEach(x => r.dt.add(x)); r.fr.add(i);
  }));
  return Object.values(m).sort((x, y) => y.migas - x.migas || x.n.localeCompare(y.n));
}
const nombreDato = id => (DATOS.find(d => d[0] === id) || [])[2] || id;
const horasDe = fr => { const l = [...fr].sort((a, b) => a - b); return l.map(i => FRANJAS[i][0].slice(0, 2) + '–' + FRANJAS[i][1].slice(0, 2)).join(', '); };
const quien = () => { const o = leeJSON('quien', []); return Array.isArray(o) ? o.filter(k => QUIEN.some(q => q[0] === k)) : []; };
const tags = () => { const o = leeJSON('tags', []); return Array.isArray(o) ? o.map(t => String(t).slice(0, 40)).filter(Boolean).slice(0, MAX_TAGS) : []; };
const palabras = id => { const ed = edDeId(id); const t = ed ? ed.textContent.trim() : ''; return t ? t.split(/\s+/).length : 0; };
const numUsuario = D => String(10000 + (D.s % 89999)).replace(/(\d{2})(\d{3})/, '$1 $2');

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Contexto</h2>
    <p>Desde que suena la alarma del móvil hasta que te duermes con una serie puesta, vas dejando un <b>camino de migas digitales</b>: dónde estás, qué miras, con quién hablas, qué compras. Y de noche, tu reloj y tu móvil siguen contando. Cada miga es un <b>dato</b>; juntas, se convierten en <b>información</b> sobre ti.</p>
    <h2 style="font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>`;
}

function construirTarea(C){
  const oculto = n => `<input type="hidden" data-campo="${n}">`;
  return `<section class="fase f1"><header><h2>Parte A · Tus 24 horas de datos</h2></header><div class="cuerpo">
      ${oculto('dia')}${oculto('quien')}
      <p>Recrea <b>un día normal de tu vida digital</b>. Toca una franja del reloj y deja tus migas: qué llevas encima y qué apps usas. No te olvides de la noche.</p>
      <p class="pista">La primera vez que añadas una app te preguntaremos qué datos le dejas y qué empresa crees que los guarda. Si no lo sabes, búscalo o marca «No lo sé»: lo puedes cambiar cuando quieras.</p>
      <div class="d24" id="d24"><div class="d24-reloj" id="d24Reloj"></div><div class="d24-panel" id="d24Panel"></div></div>
      <div id="d24Res"></div>
      <h3 class="d24-h">🕵️ Ahora, de detective</h3>
      <p>Mira tu mapa como lo miraría una empresa. Un dato suelto dice poco; muchos datos juntos, durante 24 horas, dicen mucho.</p>
      <div id="d24Det"></div>
      ${caja('ded1', 'A.1', '¿Qué puede deducir de ti la empresa que más migas tiene en tu mapa?', '<div class="pista">Tus horarios, tus gustos, dónde vives y estudias, con quién te relacionas, cómo estás de ánimo…</div>')}
      ${caja('ded2', 'A.2', '¿Y la segunda y la tercera? ¿Qué saben ellas que no sabe la primera?')}
      ${caja('ded3', 'A.3', '¿Qué cambia entre tus datos de día y tus datos de noche? ¿Qué cuenta de ti lo que llevas encima (reloj, pulsera, auriculares, tarjeta…)?')}
      <div class="d24-caja"><div class="et"><span class="n">A.4</span>¿Quién más podría acceder a esos datos o usarlos en otro momento? Marca todos los que creas.</div><div class="d24-chips" id="d24Quien"></div></div>
      ${caja('acceso', 'A.5', 'Elige uno de los que has marcado y explica cómo podría usar tus datos de hoy.', '', { ph: 'Por ejemplo: quién es, qué datos tuyos le interesan y qué haría con ellos…' })}
    </div></section>
    <section class="fase f2"><header><h2>Parte B · Tu perfil de big data</h2></header><div class="cuerpo">
      ${oculto('tags')}
      <p>Con tus 24 horas, una empresa ya puede hacerte una ficha. En los apuntes vimos sus tres partes: <b>datos explícitos</b> (los que escribes tú), <b>datos implícitos</b> (los que deja tu comportamiento) y <b>análisis de patrones</b> (lo que se deduce: las etiquetas).</p>
      <div class="d24-ficha" id="d24Ficha"></div>
      <div class="d24-caja"><div class="et"><span class="n">B.1</span>Datos explícitos: lo que tú has escrito en tus perfiles</div>
        <div class="pista">Datos generales: nada de direcciones, teléfonos ni contraseñas.</div>
        <div class="d24-form">
          <label>Edad<select data-campo="pf_edad"><option value="">Elige…</option>${EDADES.map(e => `<option>${esc(e)}</option>`).join('')}</select></label>
          <label>Dónde vives<input type="text" maxlength="40" data-campo="pf_zona" placeholder="Solo la isla o el municipio"></label>
          <label>A qué te dedicas<input type="text" maxlength="60" data-campo="pf_ocupa" placeholder="Por ejemplo: estudio y trabajo en…"></label>
        </div></div>
      <div class="d24-caja"><div class="et"><span class="n">B.2</span>Análisis de patrones: las etiquetas que te pondrían</div>
        <div class="pista">Al menos ${MIN_TAGS}, sacadas de tu mapa. Por ejemplo: «Ave nocturna», «Fan del fútbol», «Compra por impulso»…</div>
        <div class="d24-tags" id="d24Tags"></div></div>
      ${caja('pf_anuncios', 'B.3', '¿Qué anuncios, vídeos o recomendaciones te enseñarían con ese perfil? Pon al menos tres y di de qué dato salen.')}
      ${caja('pf_error', 'B.4', 'Una etiqueta es una deducción, no un hecho. ¿En qué se equivocaría tu perfil? ¿Qué etiqueta te pondrían que no es verdad, y por qué?')}
    </div></section>
    <section class="fase f3"><header><h2>Parte C · El big data y la sociedad</h2></header><div class="cuerpo">
      <p>Lee esta noticia. Si el enlace no se abre, busca exactamente la misma noticia en la web de RTVE.</p>
      <a class="d24-noticia" href="${NOTICIA.url}" target="_blank" rel="noopener"><span class="ic">📰</span><span><b>${esc(NOTICIA.titulo)}</b><small>${esc(NOTICIA.medio)} · se abre en otra pestaña</small></span></a>
      <div class="d24-caja"><div class="et"><span class="n">C.1</span>Después de leerla: ¿qué te parece la medida?</div>
        <div class="d24-opinion" role="radiogroup" aria-label="Tu opinión sobre la medida">${OPINION.map((o, i) => `<label><input type="radio" name="opinion" data-campo="opinion" value="${i + 1}"><span>${['😠', '🙁', '🤔', '🙂', '😀'][i]}<small>${esc(o)}</small></span></label>`).join('')}</div></div>
      ${caja('c_reflexion', 'C.2', `Escribe tu reflexión personal (${MIN_PALABRAS} palabras o más) y relaciónala con lo que has visto en tu propio mapa de 24 horas.`, `<div class="pista">No resumas la noticia: opina y argumenta. ¿Por qué interesan tanto los datos de los menores? ¿Sirve prohibir? ¿Qué harías tú? ${esc(C.pistaC)}</div><div class="d24-cuenta" id="d24Cuenta" aria-live="polite"></div>`)}
    </div></section>`;
}

/*__INCLUYE:UT5_SP_iconos__*/
/*__INCLUYE:UT5_SP_reloj__*/

// ===== PDF =====
async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL, doc, M } = api, D = dia(), R = ranking(D), ac = aciertosEmp(D);
  banda('Parte A · Tus 24 horas de datos', [253,228,234], COL.lav);
  // el mapa: una tira con las 8 franjas (noche en oscuro) y sus migas
  { sitio(34); const w = api.CW / FRANJAS.length, y0 = api.y;
    FRANJAS.forEach((f, i) => {
      const noche = ES_NOCHE(i), x = M + i * w;
      doc.setFillColor(...(noche ? [27, 38, 84] : f[2] === 'd' ? [222, 240, 255] : [255, 226, 196])); doc.setDrawColor(255, 255, 255); doc.rect(x, y0, w, 22, 'FD');
      doc.setTextColor(...(noche ? [255, 255, 255] : [40, 40, 60])); doc.setFont('helvetica', 'bold'); doc.setFontSize(8.5);
      doc.text(f[0] + '–' + f[1], x + w / 2, y0 + 6, { align: 'center' });
      doc.setFontSize(13); doc.text(String(migasDe(D, i)), x + w / 2, y0 + 14, { align: 'center' });
      doc.setFont('helvetica', 'normal'); doc.setFontSize(7); doc.text(D.f[i].z ? 'durmiendo' : migasDe(D, i) === 1 ? 'miga' : 'migas', x + w / 2, y0 + 19, { align: 'center' });
    });
    api.y = y0 + 26; }
  const noche = FRANJAS.reduce((n, _, i) => n + (ES_NOCHE(i) ? migasDe(D, i) : 0), 0), total = FRANJAS.reduce((n, _, i) => n + migasDe(D, i), 0);
  P(`${total} migas en 24 horas: ${total - noche} de día y ${noche} de noche · ${appsUsadas(D).length} apps distintas · ${R.length} empresas`, { size: 10, b: true, color: COL.lav, tras: 2 });
  FRANJAS.forEach((f, i) => {
    const x = D.f[i], apps = x.a.filter(id => D.apps[id]).map(id => infoApp(D, id).n), dis = x.d.map(id => (DISPOSITIVOS.find(d => d[0] === id) || [])[2]).filter(Boolean);
    texto([{ t: `${f[0]}–${f[1]}${x.z ? ' (durmiendo)' : ''}: `, b: true }, { t: (apps.length ? apps.join(', ') : 'sin apps') + (dis.length ? ' · Encima: ' + dis.join(', ') : '') }], { size: 9.5, sang: 3, marca: '·', tras: .5 });
  });
  separador();
  sitio(24); P('Sus apps: qué datos les deja y qué empresa cree que los guarda', { size: 11, b: true, color: COL.lav, tras: 2 });
  appsUsadas(D).map(id => infoApp(D, id)).forEach(a => {
    const x = D.apps[a.id], dt = (x.dt || []).map(nombreDato).join(', ') || 'sin datos marcados';
    const emp = a.propia ? (a.en || 'sin indicar') + ' (app añadida por el alumno)' : empresaVista(D, a);
    texto([{ t: a.n + ': ', b: true }, { t: 'datos: ' + dt + ' · empresa: ' + emp }], { size: 9.5, sang: 3, marca: '·', tras: .5 });
  });
  separador();
  sitio(20); P('Quién se queda con sus migas', { size: 11, b: true, color: COL.lav, tras: 2 });
  R.forEach((r, k) => texto([{ t: `${k + 1}. ${r.n}: `, b: true }, { t: `${r.migas} ${r.migas === 1 ? 'miga' : 'migas'} (${[...r.apps].join(', ')}) · ${[...r.dt].map(nombreDato).join(', ')} · franjas ${horasDe(r.fr)}` }], { size: 9.5, sang: 3, tras: .5 }));
  if (!R.length) P('(sin migas)', { size: 9.5, sang: 3, i: true, color: COL.muted });
  separador();
  await caja('ded1', 'A.1', 'Qué puede deducir la empresa con más migas' + (R[0] ? ' (' + R[0].n + ')' : ''));
  await caja('ded2', 'A.2', 'Qué saben la segunda y la tercera' + (R[1] ? ' (' + R.slice(1, 3).map(r => r.n).join(' y ') + ')' : ''));
  await caja('ded3', 'A.3', 'Datos de día y de noche, y lo que lleva encima');
  texto([{ t: 'A.4 · Quién más podría usar esos datos: ', b: true }, { t: quien().map(k => QUIEN.find(q => q[0] === k)[1]).join(' · ') || '(sin marcar)' }], { size: 10, tras: 2 });
  await caja('acceso', 'A.5', 'Cómo podría usar sus datos uno de ellos');

  banda('Parte B · Tu perfil de big data', [226,238,252], COL.sky);
  P('Usuario nº ' + numUsuario(D), { size: 10.5, b: true, color: COL.sky, tras: 1.5 });
  texto([{ t: 'B.1 · Datos explícitos: ', b: true }, { t: `edad: ${campo('pf_edad') || '(sin indicar)'} · vive en: ${campo('pf_zona').trim() || '(sin indicar)'} · se dedica a: ${campo('pf_ocupa').trim() || '(sin indicar)'}` }], { size: 10, tras: 1.5 });
  { const act = FRANJAS.map((f, i) => [migasDe(D, i), f]).sort((a, b) => b[0] - a[0])[0];
    const dis = [...new Set(Object.values(D.f).flatMap(x => x.d))].map(id => (DISPOSITIVOS.find(d => d[0] === id) || [])[2]).filter(Boolean);
    texto([{ t: 'Datos implícitos (de su mapa): ', b: true }, { t: `franja más activa: ${act && act[0] ? act[1][0] + '–' + act[1][1] : '—'} · apps: ${appsUsadas(D).map(id => infoApp(D, id).n).join(', ') || '—'} · lleva encima: ${dis.join(', ') || '—'}` }], { size: 10, tras: 1.5 }); }
  texto([{ t: 'B.2 · Etiquetas: ', b: true }, { t: tags().map(t => '«' + t + '»').join(' ') || '(sin etiquetas)' }], { size: 10, tras: 2 });
  await caja('pf_anuncios', 'B.3', 'Anuncios y recomendaciones que le enseñarían');
  await caja('pf_error', 'B.4', 'En qué se equivocaría su perfil');

  banda('Parte C · El big data y la sociedad', [223,243,234], COL.mint);
  texto([{ t: 'Noticia: ', b: true }, { t: NOTICIA.titulo + ' (' + NOTICIA.medio + ')', href: NOTICIA.url, u: true }], { size: 9.5, tras: 2 });
  texto([{ t: 'C.1 · Su opinión sobre la medida: ', b: true }, { t: OPINION[+campo('opinion') - 1] || '(sin marcar)' }], { size: 10, tras: 2 });
  await caja('c_reflexion', 'C.2', `Reflexión personal · ${palabras('c_reflexion')} palabras (mínimo ${MIN_PALABRAS})`);
}

// ===== Antes de entregar =====
function listaChecks(C){
  const D = dia(), fh = franjasHechas(D), na = appsUsadas(D).length, dis = Object.values(D.f).some(x => x.d.length);
  const det = cuentaLlenas(['ded1', 'ded2', 'ded3', 'acceso']) + (quien().length >= 2 ? 1 : 0);
  const pf = ['pf_edad', 'pf_zona', 'pf_ocupa'].filter(k => campo(k).trim()).length + (tags().length >= MIN_TAGS ? 1 : 0) + cuentaLlenas(['pf_anuncios', 'pf_error']);
  const pal = palabras('c_reflexion'), op = !!campo('opinion');
  return [
    { ok: fh === FRANJAS.length && dis, t: 'Parte A · Las 8 franjas del reloj', cuenta: `${fh}/${FRANJAS.length}`, falta: 'Deja al menos una miga en cada franja (o marca que estás durmiendo) y di qué llevas encima en alguna.' },
    { ok: na >= MIN_APPS, t: 'Parte A · Tus apps y sus empresas', cuenta: `${na}/${MIN_APPS} apps`, falta: `Tu mapa tiene que tener al menos ${MIN_APPS} apps distintas.` },
    { ok: det === 5, t: 'Parte A · De detective', cuenta: `${det}/5`, falta: 'Responde de A.1 a A.5 (en A.4 marca al menos dos).' },
    { ok: pf === 6, t: 'Parte B · Tu perfil de big data', cuenta: `${pf}/6`, falta: `Rellena tus datos, pon al menos ${MIN_TAGS} etiquetas y responde B.3 y B.4.` },
    { ok: op && pal >= MIN_PALABRAS, t: 'Parte C · La noticia', cuenta: `${pal}/${MIN_PALABRAS} palabras`, falta: `Marca tu opinión y escribe una reflexión de ${MIN_PALABRAS} palabras o más.` }
  ];
}
function progresoPropio(){
  const D = dia(), eds = [...document.querySelectorAll('.ed')], ll = eds.filter(tieneContenido).length;
  const extra = franjasHechas(D) / FRANJAS.length * 4 + Math.min(1, appsUsadas(D).length / MIN_APPS) * 2 + Math.min(1, tags().length / MIN_TAGS) + (campo('opinion') ? 1 : 0);
  const total = eds.length + 8, hechas = ll + extra;
  return { hechas, total, texto: `${Math.round(hechas / total * 100)} % del ejercicio hecho` };
}

// ===== Ejemplo relleno (solo texto de muestra) =====
function ejemploCampos(){
  const ids = ['whatsapp', 'instagram', 'youtube', 'maps', 'spotify', 'pago', 'netflix'], apps = {};
  ids.forEach((id, k) => { apps[id] = { dt: [DATOS[k % DATOS.length][0], 'horas'], e: appDe(id)[3] }; });
  const f = {}; FRANJAS.forEach((_, i) => { f[i] = i < 2 ? { a: [], d: ['movil', 'reloj'], z: true } : { a: [ids[i % ids.length], ids[(i + 2) % ids.length], 'whatsapp'].filter((v, k, l) => l.indexOf(v) === k), d: ['movil'], z: false }; });
  return { dia: JSON.stringify({ s: 48291, f, apps }), quien: JSON.stringify(['anun', 'grupo']), tags: JSON.stringify(Array.from({ length: MIN_TAGS }, (_, k) => `[Etiqueta ${k + 1}]`)),
    pf_edad: EDADES[1], pf_zona: '[Isla o municipio]', pf_ocupa: '[A qué te dedicas]', opinion: '3' };
}
function ejemploRespuesta(id){
  if (id === 'c_reflexion') return '<p>' + Array.from({ length: 20 }, () => '[Texto de muestra de tu reflexión personal]').join(' ') + '</p>';
  if (id === 'pf_anuncios') return '<ul><li>[Anuncio o recomendación 1 · de qué dato sale]</li><li>[Anuncio o recomendación 2 · de qué dato sale]</li><li>[Anuncio o recomendación 3 · de qué dato sale]</li></ul>';
  if (id === 'fuentes') return '<ul><li>[La noticia de RTVE · fecha · enlace]</li><li>[Otra fuente: título · web o institución · fecha · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  if (/^(ded\d|acceso|pf_error)$/.test(id)) return '<p>[Texto de muestra] Tu respuesta, con tus palabras y sacada de tu propio mapa.</p>';
  return '';
}

// ===== No se puede copiar el texto del ejercicio (sí dentro de las respuestas del alumno) =====
document.head.insertAdjacentHTML('beforeend', `<style>
body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.ed,.ed *,input,textarea,select{-webkit-user-select:text;user-select:text;-webkit-touch-callout:default}
@media print{body{display:none}}
</style>`);
{ const propio = e => !!(e.target && e.target.closest && e.target.closest('.ed, input, textarea'));
  for (const ev of ['copy', 'cut', 'contextmenu', 'selectstart'])
    document.addEventListener(ev, e => { if (!propio(e)) { e.preventDefault(); if (ev === 'copy' || ev === 'cut') aviso('El texto de este ejercicio no se puede copiar.'); } }, true);
  document.addEventListener('dragstart', e => { if (!propio(e)) e.preventDefault(); }, true);
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && !e.altKey && ['a', 'c', 'x', 'p', 's', 'u'].includes(String(e.key).toLowerCase()) && !propio(e)) e.preventDefault(); }, true); }

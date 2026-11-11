// ===== UT1_SP · Semipresencial: remix de la UT1 (UT1_E1 + UT1_E2 + UT1_E3, versión corta) =====
// En semipresencial hay un solo ejercicio por unidad. Este junta los tres de la UT1 con la mitad de elementos.
// D = contenido copiado de UT1_E1, UT1_E2 y UT1_E3 para los ciclos semipresenciales (lo genera _fuente/remix_UT1_SP.js).
const D = __DATOS__;

const COMUN = {
  codigo: 'UT1_SP',
  corto: 'UT1 · Semipresencial',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT1 · Digitalización de los sectores productivos',
  ejercicio: 'Digitalización de los sectores productivos',
  ra: 'RA1',
  ce: 'a, b, c, d, e, f, g',
  modalidad: 'Individual · semipresencial',
  raTexto: 'Analiza el concepto de digitalización y su repercusión en los sectores productivos teniendo en cuenta la actividad de la empresa e identificando entornos IT (Information Technology: tecnología de la información) y OT (Operation Technology: tecnología de operación) característicos.',
  ceTextos: [
    ['a', 'Se ha descrito en qué consiste el concepto de digitalización.'],
    ['b', 'Se ha relacionado la implantación de la tecnología digital con la organización de las empresas.'],
    ['c', 'Se han establecido las diferencias y similitudes entre los entornos IT y OT.'],
    ['d', 'Se han identificado los departamentos típicos de las empresas que pueden constituir entornos IT.'],
    ['e', 'Se han seleccionado las tecnologías típicas de la digitalización en planta y en negocio.'],
    ['f', 'Se ha analizado la importancia de la conexión entre entornos IT y OT.'],
    ['g', 'Se han analizado las ventajas de digitalizar una empresa industrial de extremo a extremo.']
  ],
  objetivo: 'Entender cómo la digitalización ha cambiado y está cambiando los sectores productivos: las revoluciones industriales y su huella en Canarias (bloque 1), un dispositivo que combina sistemas ciberfísicos (bloque 2) y los sistemas ciberfísicos que se pueden usar en tu centro de trabajo (bloque 3). Es individual.',
  pasos: [
    'Haz los tres bloques: <b>1</b> las cuatro revoluciones industriales en Canarias y tu profesión; <b>2</b> tu dispositivo con 2 sistemas ciberfísicos y 1 actividad con usuarios; <b>3</b> un producto real para tu centro (el tipo de sistema te toca al azar).',
    'Cita tus fuentes, declara si has usado IA, revisa «Antes de entregar, comprueba» y pulsa <b>Descargar PDF</b> para entregarlo en el aula virtual.'
  ],
  normas: [
    'Escribe con tus palabras: pegar texto está desactivado. Sí puedes pegar, arrastrar o subir imágenes.',
    'Todo tiene que ser real y comprobable: ejemplos canarios con fuente, tecnologías que se puedan instalar de verdad y productos con marca y enlace.'
  ],
  numFuentes: '4',
  fuentes: 'Cita todas las fuentes consultadas (título, medio o institución, fecha y enlace) y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y cómo has verificado lo que te ha dicho.',
  criterios: [
    ['1.1 · Revoluciones industriales en Canarias', 'Un ejemplo canario, real y verificable para cada una de las 4 revoluciones, con fecha, fuente y qué cambió en la vida de la gente (0,75 puntos por revolución).', 3],
    ['1.2 · Mi profesión', 'Respuestas concretas y razonadas sobre tu futuro trabajo (0,75 puntos por pregunta).', 1.5],
    ['2.1 · Sistemas ciberfísicos y funciones combinadas', 'Dos sistemas ciberfísicos que se puedan instalar en el dispositivo, qué hace cada uno y por qué es útil (0,75 cada uno), y cómo se combinan sus datos (0,5).', 2],
    ['2.2 · Actividad, ventajas e inconvenientes', 'Una actividad concreta con usuarios, bien explicada: con quién, qué hacéis paso a paso y qué aporta el dispositivo (1,5 puntos), y una tabla equilibrada de ventajas e inconvenientes (0,5).', 2],
    ['3.1 · Producto real', 'Un producto real del tipo de sistema que te ha tocado al azar, con marca, enlace o captura, justificación y uso en el centro.', 1.5]
  ],
  siglas: [
    ['IT/OT', 'Information Technology / Operation Technology: tecnología de la información y tecnología de operación'],
    ['IoT', 'Internet of Things: internet de las cosas'],
    ['IA', 'Inteligencia artificial'],
    ['RGPD', 'Reglamento General de Protección de Datos']
  ]
};

// Solo ciclos semipresenciales (individual)
const CICLOS = {};
const ORDEN = ['ei_sp', 'is_sp', 'mc_sp'];
for (const k of ORDEN) CICLOS[k] = Object.assign({ semipresencial: true }, D.ciclos[k]);

const dispositivoElegido = () => D.dispositivos.find(d => d.k === campo('dispositivo'));
const textoDe = id => { const ed = edDeId(id); return ed ? ed.textContent.replace(/\s+/g, ' ').trim() : ''; };
// Bocadillos de la imagen: arriba los 2 sistemas ciberfísicos, abajo la actividad y con quién se hace
const BOCAS = [
  { id: 't0_nom', ph: 'Sistema ciberfísico 1' }, { id: 't1_nom', ph: 'Sistema ciberfísico 2' },
  { id: 'a0_nom', ph: 'Actividad' }, { id: 'a0_quien', ph: 'Con quién' }
];
const ACT = ['a0_nom', 'a0_quien', 'a0_txt'];
const faqDe = C => C.f2.grupos.flatMap(g => g.q);

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>`;
}

function construirTarea(C){
  const B = D.bocadillos, P1 = D.p1;
  let h = `<style>
    .disps{display:grid;grid-template-columns:repeat(auto-fill,minmax(150px,1fr));gap:.6rem;margin:.6rem 0 1rem}
    .disp-op{border:2px solid var(--line);border-radius:12px;padding:.4rem;background:#fff;cursor:pointer;display:flex;flex-direction:column;gap:.35rem;font-weight:600;font-size:.92rem}
    .disp-op img{width:100%;border-radius:8px;display:block}
    .disp-op span{display:flex;gap:.45rem;align-items:center;padding:0 .2rem .2rem}
    .disp-op input{accent-color:var(--lav3);width:1.1rem;height:1.1rem;flex:none}
    .disp-op:has(input:checked){border-color:var(--lav3);background:var(--lav)}
    .lienzo{position:relative;border-radius:12px;overflow:hidden;margin:.8rem 0;border:1px solid var(--line)}
    .lienzo img{width:100%;display:block}
    .lienzo .bb{position:absolute;display:flex;align-items:center;justify-content:center;text-align:center;font-weight:800;color:#2f2d3a;font-size:clamp(.7rem,2.3vw,1.2rem);line-height:1.15;padding:1.5%;overflow:hidden;overflow-wrap:anywhere}
    .lienzo .bb.vacio{color:#8b8698;font-weight:600}
    .lienzo .sin{position:absolute;inset:0;display:grid;place-items:center;background:rgba(251,248,243,.85);font-weight:700;color:var(--muted);padding:1rem;text-align:center}
    .disp-asig{display:flex;gap:.9rem;align-items:center;border:2px solid var(--lav3);background:var(--lav);border-radius:12px;padding:.5rem;margin:.6rem 0 1rem;max-width:520px}
    .disp-asig img{width:150px;max-width:40%;border-radius:8px;display:block;flex:none}
    .disp-asig b{display:block;font-size:1.05rem}
    .disp-asig small{color:var(--muted)}
    .tecno{border-radius:12px;padding:.2rem .9rem .1rem;margin:.9rem 0;border:2px solid}
    .tecno h3{margin:.6rem 0 0;font-size:1.02rem}
    .tecno .instr ul{margin:.4rem 0 0;padding-left:1.2rem}
  </style>`;

  // ===== Bloque 1 · Revoluciones industriales (de UT1_E1)
  h += `<section class="fase f1"><header><h2>Bloque 1 · Las revoluciones industriales</h2></header><div class="cuerpo">
    <h3>1.1 · Las cuatro revoluciones industriales en Canarias</h3><p>${esc(P1.intro)}</p><div class="nota">${esc(P1.nota)}</div>`;
  P1.revs.forEach((r, i) => {
    h += `<div class="rev"><h3>1.1.${i + 1} · ${esc(r)}</h3><div class="campos">`;
    P1.campos.forEach(c => { h += caja(`r${i}_${c.k}`, '', esc(c.t), '', { corta: c.corta, ancha: c.ancha, ph: c.ph }); });
    h += `</div></div>`;
  });
  h += `<h3>1.2 · Y esto, ¿qué tiene que ver con mi profesión?</h3><div class="centro"><b>${esc(C.centro)}</b></div>`;
  D.p3.preguntas.forEach((q, i) => { h += caja(`prof${i}`, `1.2.${i + 1}`, esc(q), i === 0 ? `<div class="pista"><b>Pistas:</b> ${esc(C.pistas)}</div>` : ''); });
  h += `<div class="nota">🏝️ ${esc(D.p3.canarias)}</div></div></section>`;

  // ===== Bloque 2 · Dispositivo con sistemas ciberfísicos (de UT1_E2)
  h += `<section class="fase f2"><header><h2>Bloque 2 · Combina sistemas ciberfísicos</h2></header><div class="cuerpo">
    <p>${esc(D.contexto2)} Diseña un producto con el dispositivo que te ha tocado al azar, pensando en ${esc(C.usuario)}.</p>
    <div class="caja"><div class="et"><span class="n">2.1</span>Dispositivo asignado al azar</div><div class="pista">El dispositivo se asigna al azar al empezar la tarea. Este es el tuyo:</div>
    <input type="hidden" id="dispDato" data-campo="dispositivo"><div class="disp-asig" id="dispAsig" aria-live="polite"></div></div>
    <div class="lienzo" id="lienzo"><img id="lienzoImg" alt="Dispositivo con cuatro bocadillos: dos sistemas ciberfísicos arriba y la actividad abajo">${B.map((b, i) => `<div class="bb" id="bb${i}" style="left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%"></div>`).join('')}<div class="sin" id="lienzoSin">Asignando el dispositivo…</div></div>
    <div class="pista">Los bocadillos de arriba muestran tus 2 sistemas ciberfísicos; los de abajo, el título de tu actividad y con quién la haces.</div>`;
  [0, 1].forEach(i => {
    const b = B[i];
    h += `<div class="tecno" style="background:${b.color}33;border-color:${b.borde}"><h3 style="color:${b.borde}">2.2.${i + 1} · Sistema ciberfísico ${i + 1}</h3>
      ${caja(`t${i}_nom`, '', 'Sistema ciberfísico', '', { corta: true, ph: 'Nombre del sistema (por ejemplo, un sensor de pulso)…' })}
      ${caja(`t${i}_just`, '', 'Qué hace por separado y por qué es útil', '', { ph: 'Explica su función y para qué le sirve al usuario…' })}</div>`;
  });
  h += caja('combinadas', '2.3', 'Funciones combinadas', '<div class="pista">¿Qué se puede saber o hacer al juntar los datos de los dos sistemas ciberfísicos que no se puede con uno solo?</div>');
  const b3 = B[2];
  h += `<div class="tecno" style="background:${b3.color}33;border-color:${b3.borde}"><h3 style="color:${b3.borde}">2.4 · Tu actividad con usuarios que llevan puesto el dispositivo</h3>
    <div class="instr"><b>Qué tienes que hacer:</b> inventa <b>una</b> actividad con el dispositivo puesto que harías en tu trabajo, pensando en ${esc(C.usuario)}. Ponle un título corto, di con quién la haces y explica:
      <ul><li><b>Qué hacéis</b>, paso a paso, del principio al final.</li>
      <li><b>Dónde</b> la hacéis y <b>cuánto dura</b>.</li>
      <li><b>Qué datos recogen tus dos sistemas ciberfísicos</b> durante la actividad.</li>
      <li><b>Para qué usas tú esos datos</b> como profesional y qué aporta el dispositivo que no tendrías sin él.</li></ul></div>
    ${caja('a0_nom', '', 'Título corto de la actividad', '', { corta: true, ph: 'Por ejemplo: «Paseo saludable»…' })}
    ${caja('a0_quien', '', 'Con quién la haces', '', { corta: true, ph: 'Por ejemplo: un grupo de 8 personas, su edad y sus necesidades…' })}
    ${caja('a0_txt', '', 'Qué hacéis paso a paso, dónde, cuánto dura y qué aporta el dispositivo', '', { ph: 'Describe la actividad siguiendo los puntos de arriba…' })}</div>`;
  h += `<div class="caja"><div class="et"><span class="n">2.5</span>Ventajas e inconvenientes del dispositivo</div><div class="campos">
    ${caja('ventajas', '', '👍 Ventajas', '', { ph: 'Haz una lista de ventajas…' })}${caja('inconvenientes', '', '👎 Inconvenientes', '', { ph: 'Haz una lista de inconvenientes…' })}</div></div>`;
  h += `</div></section>`;

  // ===== Bloque 3 · Sistemas ciberfísicos en tu centro (de UT1_E3)
  h += `<section class="fase f3"><header><h2>Bloque 3 · Sistemas ciberfísicos en tu centro</h2></header><div class="cuerpo">
    <p>${esc(C.contexto)}</p><p><b>Objetivo:</b> ${esc(C.objetivo)}</p>
    <h3>3.1 · Producto real</h3><p><b>${esc(C.f1.intro)}</b></p><div class="instr"><b>Instrucciones:</b> ${esc(C.f1.instr)}</div>
    <input type="hidden" id="prodDato" data-campo="producto">`;
  C.f1.items.forEach((t, i) => { h += `<div class="f1alt" data-i="${i}" hidden>` + caja(`f1_${i}`, '3.1', '🎲 Te ha tocado: ' + esc(t), `<div class="pista">Producto (nombre y marca), enlace o captura, justificación y aplicación en el día a día.</div>`) + '</div>'; });
  h += `</div></section>`;
  return h;
}

// 3.1: el tipo de sistema se sortea la primera vez y queda guardado con el trabajo.
// Si el alumno ya había escrito en alguno (antes eran 3), le toca ese, para no esconder su trabajo.
function productoElegido(){ const v = campo('producto'); return /^\d+$/.test(v) && +v < CICLOS[ESP].f1.items.length ? +v : null; }
function asegurarProducto(){
  const inp = document.getElementById('prodDato'); if (!inp || productoElegido() !== null) return;
  const n = CICLOS[ESP].f1.items.length, hecho = [...Array(n).keys()].find(i => llena('f1_' + i));
  inp.value = String(hecho !== undefined ? hecho : Math.floor(Math.random() * n));
  programarGuardado();
}
function pintarProducto(){
  const k = productoElegido();
  document.querySelectorAll('.f1alt').forEach(d => { d.hidden = +d.dataset.i !== k; });
}
// Progreso: solo cuentan las cajas que se ven (las de los otros tipos de sistema están ocultas)
function progresoPropio(){
  const eds = [...document.querySelectorAll('.ed')].filter(ed => !ed.closest('[hidden]')), ll = eds.filter(tieneContenido).length;
  return { hechas: ll, total: eds.length, texto: `${ll} de ${eds.length} cajas con respuesta` };
}

// El dispositivo se asigna al azar la primera vez y queda guardado con el trabajo
function asegurarDispositivo(){
  const inp = document.getElementById('dispDato'); if (!inp || inp.value) return;
  inp.value = D.dispositivos[Math.floor(Math.random() * D.dispositivos.length)].k;
  programarGuardado();
}
function pintarDispositivo(d){
  const box = document.getElementById('dispAsig'); if (!box || !d || box.dataset.k === d.k) return;
  box.dataset.k = d.k;
  box.innerHTML = `<img src="${IMAGENES[d.k]}" alt=""><div><b>${esc(d.n)}</b><small>🎲 Asignado al azar</small></div>`;
}

// Imagen del dispositivo y textos de los bocadillos
function alActualizar(){
  const img = document.getElementById('lienzoImg'); if (!img) return;
  asegurarDispositivo(); asegurarProducto(); pintarProducto();
  const d = dispositivoElegido(); pintarDispositivo(d);
  document.getElementById('lienzoSin').style.display = d ? 'none' : '';
  img.src = IMAGENES[(d || D.dispositivos[0]).k];
  BOCAS.forEach((b, i) => { const t = textoDe(b.id), el = document.getElementById('bb' + i); el.textContent = t || b.ph; el.classList.toggle('vacio', !t); });
}

async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL, doc } = api;
  // Bloque 1
  banda('Bloque 1 · Las revoluciones industriales', [223,243,234], COL.mint);
  for (let i = 0; i < D.p1.revs.length; i++){
    sitio(30); P(`1.1.${i + 1} · ${D.p1.revs[i]}`, { size: 11.5, b: true, color: COL.mint, tras: 2 });
    for (const c of D.p1.campos) await caja(`r${i}_${c.k}`, '', c.t, { compacta: true });
    separador();
  }
  P(C.centro, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  for (let i = 0; i < D.p3.preguntas.length; i++) await caja(`prof${i}`, `1.2.${i + 1}`, D.p3.preguntas[i]);

  // Bloque 2
  banda('Bloque 2 · Combina sistemas ciberfísicos', [226,238,252], COL.sky);
  const d = dispositivoElegido();
  P('Dispositivo asignado al azar: ' + (d ? d.n : '(sin asignar)'), { size: 11, b: true, color: COL.lav, tras: 2 });
  if (d){
    const pr = doc.getImageProperties(IMAGENES[d.k]); const w = api.CW, hh = w * pr.height / pr.width;
    sitio(hh + 4); const x0 = 18, y0 = api.y;
    doc.addImage(IMAGENES[d.k], 'JPEG', x0, y0, w, hh);
    D.bocadillos.forEach((b, i) => {
      const t = textoDe(BOCAS[i].id); if (!t) return;
      const bx = x0 + w * b.x / 100, by = y0 + hh * b.y / 100, bw = w * b.w / 100, bh = hh * b.h / 100;
      doc.setFont('helvetica', 'bold'); doc.setTextColor(47,45,58);
      let fs = 12, lin; do { doc.setFontSize(fs); lin = doc.splitTextToSize(pdfTxt(t), bw - 4); fs -= 0.5; } while (lin.length * fs * 0.3528 * 1.2 > bh - 2 && fs > 6);
      doc.text(lin, bx + bw / 2, by + bh / 2, { align: 'center', baseline: 'middle', lineHeightFactor: 1.2 });
    });
    api.y = y0 + hh + 4;
  }
  for (let i = 0; i < 2; i++) await caja(`t${i}_just`, `2.2.${i + 1}`, 'Sistema ciberfísico: ' + (textoDe(`t${i}_nom`) || '(sin nombre)'));
  await caja('combinadas', '2.3', 'Funciones combinadas');
  await caja('a0_txt', '2.4', 'Actividad: ' + (textoDe('a0_nom') || '(sin título)') + ' · Con quién: ' + (textoDe('a0_quien') || '(sin indicar)'));
  await caja('ventajas', '2.5', 'Ventajas', { compacta: true });
  await caja('inconvenientes', '', 'Inconvenientes');

  // Bloque 3
  banda('Bloque 3 · Sistemas ciberfísicos en tu centro', [255,233,220], COL.peach);
  P(C.f1.instr, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  const kp = productoElegido();
  await caja(`f1_${kp === null ? 0 : kp}`, '3.1', 'Tipo de sistema (asignado al azar): ' + C.f1.items[kp === null ? 0 : kp]);
}

// Antes de entregar: 2 comprobaciones por bloque
function listaChecks(C){
  const nrev = D.p1.revs.length;
  const rev = D.p1.revs.filter((_, i) => D.p1.campos.every(c => llena(`r${i}_${c.k}`))).length;
  const b1b = cuentaLlenas(['prof0', 'prof1']);
  const tec = [0, 1].filter(i => llena(`t${i}_nom`) && llena(`t${i}_just`)).length;
  const kp = productoElegido(), f1 = kp !== null && llena('f1_' + kp) ? 1 : 0;
  const b2a = tec + (llena('combinadas') ? 1 : 0);
  const b2b = (ACT.every(llena) ? 1 : 0) + (llena('ventajas') && llena('inconvenientes') ? 1 : 0);
  return [
    { ok: rev === nrev, t: `Bloque 1 · Las ${nrev} revoluciones en Canarias`, cuenta: `${rev}/${nrev}`, falta: 'Rellena ejemplo, fecha, fuente y qué cambió en cada revolución.' },
    { ok: b1b === 2, t: 'Bloque 1 · Tu profesión', cuenta: `${b1b}/2`, falta: 'Responde a las 2 preguntas sobre tu profesión.' },
    { ok: b2a === 3, t: 'Bloque 2 · Los 2 sistemas ciberfísicos y funciones combinadas', cuenta: `${b2a}/3`, falta: 'Completa los 2 sistemas ciberfísicos y explica cómo se combinan.' },
    { ok: b2b === 2, t: 'Bloque 2 · La actividad, ventajas e inconvenientes', cuenta: `${b2b}/2`, falta: 'Completa la actividad (título, con quién y explicación) y las ventajas e inconvenientes.' },
    { ok: f1 === 1, t: 'Bloque 3 · Producto real', cuenta: `${f1}/1`, falta: 'Busca un producto real del tipo de sistema que te ha tocado.' }
  ];
}

function ejemploCampos(){ return { dispositivo: 'pulsera', producto: '0' }; }
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (/^r\d_ej$/.test(id)) return t('[Texto de muestra] El hecho canario que has elegido para esta revolución y la isla donde ocurrió.');
  if (/^r\d_fecha$/.test(id)) return t('[Año o época]');
  if (/^r\d_fuente$/.test(id)) return t('[Título del artículo] · [Medio o institución] · [Fecha] · <a href="https://www.ejemplo.es" target="_blank">https://www.ejemplo.es</a>');
  if (/^r\d_cambio$/.test(id)) return t('[Texto de muestra] Cómo vivía la gente antes de este cambio y qué cambió después.');
  if (/^prof\d$/.test(id)) return t('[Texto de muestra] Tu respuesta centrada en tu futuro puesto de trabajo en Canarias.');
  if (/^t\d_nom$/.test(id)) return t(`[Sistema ciberfísico ${+id[1] + 1}]`);
  if (/^t\d_just$/.test(id)) return t('[Texto de muestra] Qué hace este sistema ciberfísico por separado y por qué es útil para el usuario.');
  if (id === 'combinadas') return t('[Texto de muestra] Qué se puede saber o hacer al juntar los datos de los dos sistemas ciberfísicos.');
  if (id === 'a0_nom') return t('[Título de la actividad]');
  if (id === 'a0_quien') return t('[Con quién: grupo, edad y número de personas]');
  if (id === 'a0_txt') return '<ul><li>[Qué hacéis, paso a paso]</li><li>[Dónde y cuánto dura]</li><li>[Qué datos recogen los dos sistemas ciberfísicos]</li><li>[Para qué usas esos datos y qué aporta el dispositivo]</li></ul>';
  if (id === 'ventajas') return '<ul><li>[Ventaja 1]</li><li>[Ventaja 2]</li></ul>';
  if (id === 'inconvenientes') return '<ul><li>[Inconveniente 1]</li><li>[Inconveniente 2]</li></ul>';
  if (/^f1_/.test(id)) return '<p><b>[Nombre del producto · Marca]</b></p><p>[Enlace a la web del producto o captura]</p><p>[Texto de muestra] Por qué lo elegirías para el centro y cómo se usaría en el día a día.</p>';
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · web o institución · fecha · enlace]</li><li>[Fuente 2: título · web o institución · fecha · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  return '';
}

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
    'Haz los tres bloques: <b>1</b> dos revoluciones industriales en Canarias, el debate y tu profesión; <b>2</b> tu dispositivo con 2 tecnologías, 2 actividades y una presentación de 3 diapositivas; <b>3</b> tres productos reales para tu centro y tres preguntas frecuentes.',
    'Cita tus fuentes, declara si has usado IA, revisa «Antes de entregar, comprueba» y pulsa <b>Descargar PDF</b> para entregarlo en el aula virtual.'
  ],
  normas: [
    'Escribe con tus palabras: pegar texto está desactivado. Sí puedes pegar, arrastrar o subir imágenes.',
    'Todo tiene que ser real y comprobable: ejemplos canarios con fuente, tecnologías que se puedan instalar de verdad y productos con marca y enlace.'
  ],
  numFuentes: '4',
  fuentes: 'Cita todas las fuentes consultadas (título, medio o institución, fecha y enlace) y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y cómo has verificado lo que te ha dicho.',
  criterios: [
    ['1.1 · Revoluciones industriales en Canarias', 'Un ejemplo canario, real y verificable para cada una de las 2 revoluciones, con fecha, fuente y qué cambió en la vida de la gente (0,5 puntos por revolución).', 1],
    ['1.2 · La quinta revolución industrial', 'Respuesta razonada, con información del vídeo o con conclusiones propias.', 1],
    ['1.3 · Mi profesión', 'Respuestas concretas y razonadas sobre tu futuro trabajo (0,5 puntos por pregunta).', 1],
    ['2.1 · Tecnologías y funciones combinadas', 'Dos tecnologías que se puedan instalar en el dispositivo, qué hace cada una y por qué es útil (0,5 cada una), y cómo se combinan sus datos (0,5).', 1.5],
    ['2.2 · Actividades, ventajas e inconvenientes', 'Dos actividades concretas con usuarios (0,5 cada una) y una tabla equilibrada de ventajas e inconvenientes (0,5).', 1.5],
    ['2.3 · Presentación', 'Tres diapositivas claras, con imágenes y ejemplos.', 1],
    ['3.1 · Productos reales', 'Un producto real para cada tipo de sistema, con marca, enlace o captura, justificación y uso en el centro (0,5 puntos por producto).', 1.5],
    ['3.2 · Preguntas frecuentes (FAQ)', 'Respuestas claras, correctas y tranquilizadoras, sin tecnicismos innecesarios (0,5 puntos por pregunta).', 1.5]
  ],
  siglas: [
    ['IT/OT', 'Information Technology / Operation Technology: tecnología de la información y tecnología de operación'],
    ['THD', 'Tecnologías habilitadoras digitales'],
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
const DIAPOS = ['Portada: nombre del producto y dispositivo', 'Las tecnologías y cómo se combinan', 'Actividades, ventajas y conclusión'];
// Bocadillos de la imagen: arriba las 2 tecnologías, abajo las 2 actividades
const BOCAS = [
  { id: 't0_nom', ph: 'Tecnología 1' }, { id: 't1_nom', ph: 'Tecnología 2' },
  { id: 'a0_nom', ph: 'Actividad 1' }, { id: 'a1_nom', ph: 'Actividad 2' }
];
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
    .diapo{border:2px solid var(--lav2);border-radius:14px;padding:.2rem .9rem .3rem;margin:1rem 0;background:#fcfbff}
    .diapo h3{margin:.6rem 0 0;font-size:.95rem;color:var(--lav3)}
  </style>`;

  // ===== Bloque 1 · Revoluciones industriales (de UT1_E1)
  h += `<section class="fase f1"><header><h2>Bloque 1 · Las revoluciones industriales</h2></header><div class="cuerpo">
    <h3>1.1 · Dos revoluciones industriales en Canarias</h3><p>${esc(P1.intro)}</p><div class="nota">${esc(P1.nota)}</div>`;
  P1.revs.forEach((r, i) => {
    h += `<div class="rev"><h3>1.1.${i + 1} · ${esc(r)}</h3><div class="campos">`;
    P1.campos.forEach(c => { h += caja(`r${i}_${c.k}`, '', esc(c.t), '', { corta: c.corta, ancha: c.ancha, ph: c.ph }); });
    h += `</div></div>`;
  });
  h += `<h3>1.2 · La quinta revolución industrial</h3><p>${esc(D.p2.intro)}</p>
    <div class="video"><a href="${D.p2.video}" target="_blank" rel="noopener">▶ Ver el debate</a><small>${esc(D.p2.video)}</small></div>
    ${caja('q5', '1.2', esc(D.p2.pregunta))}
    <h3>1.3 · Y esto, ¿qué tiene que ver con mi profesión?</h3><div class="centro"><b>${esc(C.centro)}</b></div>`;
  D.p3.preguntas.forEach((q, i) => { h += caja(`prof${i}`, `1.3.${i + 1}`, esc(q), i === 0 ? `<div class="pista"><b>Pistas:</b> ${esc(C.pistas)}</div>` : ''); });
  h += `<div class="nota">🏝️ ${esc(D.p3.canarias)}</div></div></section>`;

  // ===== Bloque 2 · Dispositivo con sistemas ciberfísicos (de UT1_E2)
  h += `<section class="fase f2"><header><h2>Bloque 2 · Combina sistemas ciberfísicos</h2></header><div class="cuerpo">
    <p>${esc(D.contexto2)} Diseña un producto con el dispositivo que te ha tocado al azar, pensando en ${esc(C.usuario)}.</p>
    <div class="caja"><div class="et"><span class="n">2.1</span>Dispositivo asignado al azar</div><div class="pista">El dispositivo se asigna al azar al empezar la tarea. Este es el tuyo:</div>
    <input type="hidden" id="dispDato" data-campo="dispositivo"><div class="disp-asig" id="dispAsig" aria-live="polite"></div></div>
    <div class="lienzo" id="lienzo"><img id="lienzoImg" alt="Dispositivo con cuatro bocadillos: dos tecnologías arriba y dos actividades abajo">${B.map((b, i) => `<div class="bb" id="bb${i}" style="left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%"></div>`).join('')}<div class="sin" id="lienzoSin">Asignando el dispositivo…</div></div>
    <div class="pista">Los bocadillos de arriba muestran tus 2 tecnologías y los de abajo tus 2 actividades.</div>`;
  [0, 1].forEach(i => {
    const b = B[i];
    h += `<div class="tecno" style="background:${b.color}33;border-color:${b.borde}"><h3 style="color:${b.borde}">2.2.${i + 1} · Tecnología ${i + 1}</h3>
      ${caja(`t${i}_nom`, '', 'Tecnología habilitadora', '', { corta: true, ph: 'Nombre de la tecnología (por ejemplo, un sensor)…' })}
      ${caja(`t${i}_just`, '', 'Qué hace por separado y por qué es útil', '', { ph: 'Explica su función y para qué le sirve al usuario…' })}</div>`;
  });
  h += caja('combinadas', '2.3', 'Funciones combinadas', '<div class="pista">¿Qué se puede saber o hacer al juntar los datos de las dos tecnologías que no se puede con una sola?</div>');
  [0, 1].forEach(i => {
    const b = B[i + 2];
    h += `<div class="tecno" style="background:${b.color}33;border-color:${b.borde}"><h3 style="color:${b.borde}">2.4.${i + 1} · Actividad ${i + 1} con usuarios que llevan puesto el dispositivo</h3>
      ${caja(`a${i}_nom`, '', 'Título corto de la actividad', '', { corta: true, ph: 'Por ejemplo: «Paseo saludable»…' })}
      ${caja(`a${i}_txt`, '', 'Qué hacéis, con quién y qué aporta el dispositivo', '', { ph: 'Describe la actividad…' })}</div>`;
  });
  h += `<div class="caja"><div class="et"><span class="n">2.5</span>Ventajas e inconvenientes del dispositivo</div><div class="campos">
    ${caja('ventajas', '', '👍 Ventajas', '', { ph: 'Haz una lista de ventajas…' })}${caja('inconvenientes', '', '👎 Inconvenientes', '', { ph: 'Haz una lista de inconvenientes…' })}</div></div>
    <h3>2.6 · Tu presentación (3 diapositivas)</h3>
    <div class="instr">Cada bloque es una diapositiva: escribe el título y el contenido y añade imágenes. En el PDF, cada diapositiva sale en una página apaisada, lista para presentar.</div>`;
  DIAPOS.forEach((t, i) => { h += `<div class="diapo"><h3>Diapositiva ${i + 1}</h3>${caja(`d${i}_tit`, '', 'Título', '', { corta: true, ph: t })}${caja(`d${i}_txt`, '', 'Contenido', '', { ph: 'Texto, ejemplos e imágenes de esta diapositiva…' })}</div>`; });
  h += `</div></section>`;

  // ===== Bloque 3 · Sistemas ciberfísicos en tu centro (de UT1_E3)
  h += `<section class="fase f3"><header><h2>Bloque 3 · Sistemas ciberfísicos en tu centro</h2></header><div class="cuerpo">
    <p>${esc(C.contexto)}</p><p><b>Objetivo:</b> ${esc(C.objetivo)}</p>
    <h3>3.1 · Productos reales</h3><p><b>${esc(C.f1.intro)}</b></p><div class="instr"><b>Instrucciones:</b> ${esc(C.f1.instr)}</div>`;
  C.f1.items.forEach((t, i) => { h += caja(`f1_${i}`, `3.1.${i + 1}`, esc(t), `<div class="pista">Producto (nombre y marca), enlace o captura, justificación y aplicación en el día a día.</div>`); });
  h += `<h3>3.2 · Preguntas frecuentes (FAQ)</h3><div class="instr">${esc(C.f2.intro)}</div>`;
  let n = 0;
  C.f2.grupos.forEach(g => {
    h += `<h3 class="grupo">${esc(g.t)}</h3>`;
    g.q.forEach(q => { n++; h += caja(`f2_${n - 1}`, `3.2.${n}`, esc(q.p), q.ej ? `<div class="ejemplo"><b>Ejemplo de respuesta:</b> ${esc(q.ej)}</div>` : ''); });
  });
  h += `</div></section>`;
  return h;
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
  asegurarDispositivo();
  const d = dispositivoElegido(); pintarDispositivo(d);
  document.getElementById('lienzoSin').style.display = d ? 'none' : '';
  img.src = IMAGENES[(d || D.dispositivos[0]).k];
  BOCAS.forEach((b, i) => { const t = textoDe(b.id), el = document.getElementById('bb' + i); el.textContent = t || b.ph; el.classList.toggle('vacio', !t); });
}

async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL, doc, diapositiva, nuevaPag } = api;
  // Bloque 1
  banda('Bloque 1 · Las revoluciones industriales', [223,243,234], COL.mint);
  for (let i = 0; i < D.p1.revs.length; i++){
    sitio(30); P(`1.1.${i + 1} · ${D.p1.revs[i]}`, { size: 11.5, b: true, color: COL.mint, tras: 2 });
    for (const c of D.p1.campos) await caja(`r${i}_${c.k}`, '', c.t, { compacta: true });
    separador();
  }
  texto([{ t: 'Debate: ', b: true }, { t: D.p2.video, href: D.p2.video, u: true }], { size: 9.5, tras: 3 });
  await caja('q5', '1.2', D.p2.pregunta);
  P(C.centro, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  for (let i = 0; i < D.p3.preguntas.length; i++) await caja(`prof${i}`, `1.3.${i + 1}`, D.p3.preguntas[i]);

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
  for (let i = 0; i < 2; i++) await caja(`t${i}_just`, `2.2.${i + 1}`, 'Tecnología: ' + (textoDe(`t${i}_nom`) || '(sin nombre)'));
  await caja('combinadas', '2.3', 'Funciones combinadas');
  for (let i = 0; i < 2; i++) await caja(`a${i}_txt`, `2.4.${i + 1}`, 'Actividad: ' + (textoDe(`a${i}_nom`) || '(sin título)'));
  await caja('ventajas', '2.5', 'Ventajas', { compacta: true });
  await caja('inconvenientes', '', 'Inconvenientes');
  for (let i = 0; i < DIAPOS.length; i++) await diapositiva(i + 1, textoDe(`d${i}_tit`) || DIAPOS[i].split(':')[0], `d${i}_txt`);
  nuevaPag('p');

  // Bloque 3
  banda('Bloque 3 · Sistemas ciberfísicos en tu centro', [255,233,220], COL.peach);
  P(C.f1.instr, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  for (let i = 0; i < C.f1.items.length; i++) await caja(`f1_${i}`, `3.1.${i + 1}`, C.f1.items[i]);
  P(C.f2.intro, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  let n = 0;
  for (const g of C.f2.grupos){
    sitio(24); P(g.t, { size: 11.5, b: true, color: COL.peach, tras: 2 });
    for (const q of g.q){ n++; await caja(`f2_${n - 1}`, `3.2.${n}`, q.p, { ejemplo: q.ej }); }
  }
}

// Antes de entregar: 2 comprobaciones por bloque
function listaChecks(C){
  const rev = [0, 1].filter(i => D.p1.campos.every(c => llena(`r${i}_${c.k}`))).length;
  const b1b = cuentaLlenas(['q5', 'prof0', 'prof1']);
  const tec = [0, 1].filter(i => llena(`t${i}_nom`) && llena(`t${i}_just`)).length;
  const act = [0, 1].filter(i => llena(`a${i}_nom`) && llena(`a${i}_txt`)).length;
  const dia = DIAPOS.filter((_, i) => llena(`d${i}_txt`)).length;
  const f1 = cuentaLlenas(C.f1.items.map((_, i) => `f1_${i}`)), nf2 = faqDe(C).length, f2 = cuentaLlenas(faqDe(C).map((_, i) => `f2_${i}`));
  const b2a = tec + (llena('combinadas') ? 1 : 0);
  const b2b = act + (llena('ventajas') && llena('inconvenientes') ? 1 : 0) + dia;
  return [
    { ok: rev === 2, t: 'Bloque 1 · Las 2 revoluciones en Canarias', cuenta: `${rev}/2`, falta: 'Rellena ejemplo, fecha, fuente y qué cambió en cada revolución.' },
    { ok: b1b === 3, t: 'Bloque 1 · Quinta revolución y tu profesión', cuenta: `${b1b}/3`, falta: 'Responde a la pregunta del debate y a las 2 de tu profesión.' },
    { ok: b2a === 3, t: 'Bloque 2 · Las 2 tecnologías y funciones combinadas', cuenta: `${b2a}/3`, falta: 'Completa las 2 tecnologías y explica cómo se combinan.' },
    { ok: b2b === 6, t: 'Bloque 2 · Actividades, ventajas e inconvenientes y 3 diapositivas', cuenta: `${b2b}/6`, falta: 'Completa las 2 actividades, las ventajas e inconvenientes y las 3 diapositivas.' },
    { ok: f1 === C.f1.items.length, t: `Bloque 3 · ${C.f1.items.length} productos reales`, cuenta: `${f1}/${C.f1.items.length}`, falta: 'Busca un producto real para cada tipo de sistema.' },
    { ok: f2 === nf2, t: `Bloque 3 · ${nf2} preguntas frecuentes`, cuenta: `${f2}/${nf2}`, falta: 'Responde a todas las preguntas frecuentes.' }
  ];
}

function ejemploCampos(){ return { dispositivo: 'pulsera' }; }
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (/^r\d_ej$/.test(id)) return t('[Texto de muestra] El hecho canario que has elegido para esta revolución y la isla donde ocurrió.');
  if (/^r\d_fecha$/.test(id)) return t('[Año o época]');
  if (/^r\d_fuente$/.test(id)) return t('[Título del artículo] · [Medio o institución] · [Fecha] · <a href="https://www.ejemplo.es" target="_blank">https://www.ejemplo.es</a>');
  if (/^r\d_cambio$/.test(id)) return t('[Texto de muestra] Cómo vivía la gente antes de este cambio y qué cambió después.');
  if (id === 'q5') return t('[Texto de muestra] Tu respuesta razonada, con ideas del debate o con tus propias conclusiones.');
  if (/^prof\d$/.test(id)) return t('[Texto de muestra] Tu respuesta centrada en tu futuro puesto de trabajo en Canarias.');
  if (/^t\d_nom$/.test(id)) return t(`[Tecnología ${+id[1] + 1}]`);
  if (/^t\d_just$/.test(id)) return t('[Texto de muestra] Qué hace esta tecnología por separado y por qué es útil para el usuario.');
  if (id === 'combinadas') return t('[Texto de muestra] Qué se puede saber o hacer al juntar los datos de las dos tecnologías.');
  if (/^a\d_nom$/.test(id)) return t(`[Actividad ${+id[1] + 1}]`);
  if (/^a\d_txt$/.test(id)) return t('[Texto de muestra] Qué hacéis, con qué usuario o grupo y qué aporta el dispositivo.');
  if (id === 'ventajas') return '<ul><li>[Ventaja 1]</li><li>[Ventaja 2]</li></ul>';
  if (id === 'inconvenientes') return '<ul><li>[Inconveniente 1]</li><li>[Inconveniente 2]</li></ul>';
  if (/^d\d_tit$/.test(id)) return t('[' + DIAPOS[+id[1]].split(':')[0] + ']');
  if (/^d\d_txt$/.test(id)) return '<ul><li>[Idea principal de la diapositiva]</li><li>[Ejemplo]</li></ul><p>[Aquí puedes añadir imágenes]</p>';
  if (/^f1_/.test(id)) return '<p><b>[Nombre del producto · Marca]</b></p><p>[Enlace a la web del producto o captura]</p><p>[Texto de muestra] Por qué lo elegirías para el centro y cómo se usaría en el día a día.</p>';
  if (/^f2_/.test(id)) return t('[Texto de muestra] Respuesta clara y tranquilizadora, sin tecnicismos.');
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · web o institución · fecha · enlace]</li><li>[Fuente 2: título · web o institución · fecha · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  return '';
}

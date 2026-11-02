// ===== UT1_E2 · Combinación de sistemas ciberfísicos =====
const COMUN = {
  codigo: 'UT1_E2',
  corto: 'UT1 · E2',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT1 · Digitalización de los sectores productivos',
  ejercicio: 'E2 · Combinación de sistemas ciberfísicos',
  ra: 'RA1',
  ce: 'e, f, g',
  modalidad: 'En pareja (presencial) · individual (semipresencial)',
  raTexto: 'Analiza el concepto de digitalización y su repercusión en los sectores productivos teniendo en cuenta la actividad de la empresa e identificando entornos IT (Information Technology: tecnología de la información) y OT (Operation Technology: tecnología de operación) característicos.',
  ceTextos: [
    ['e', 'Se han seleccionado las tecnologías típicas de la digitalización en planta y en negocio.'],
    ['f', 'Se ha analizado la importancia de la conexión entre entornos IT y OT.'],
    ['g', 'Se han analizado las ventajas de digitalizar una empresa industrial de extremo a extremo.']
  ],
  contexto: 'Cada vez se utilizan más sistemas ciberfísicos dentro de los dispositivos, y vamos a ver cómo se combinan.',
  objetivo: 'Crear un producto basado en tecnologías que se puedan instalar y sean útiles.',
  pasos: [
    'Lee el resultado de aprendizaje, el contexto, el objetivo y la tabla «Cómo se califica».',
    'Escribe el nombre de tu compañero/a de grupo (si haces el trabajo individual en semipresencial, escribe «Individual») y elige el <b>dispositivo</b> que os han asignado.',
    '<b>Fase 1:</b> escribe en cada bocadillo una tecnología habilitadora del dispositivo y explica qué hace y por qué es útil; después explica cómo se combinan sus datos, propón 4 actividades con usuarios y completa las ventajas e inconvenientes.',
    '<b>Fase 2:</b> prepara tu presentación en las 6 diapositivas, con texto, imágenes y ejemplos. Cada diapositiva saldrá en el PDF en una página apaisada, lista para presentar.',
    'Cita tus fuentes y declara si has usado inteligencia artificial.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Escribe con tus palabras: pegar texto está desactivado. Sí puedes pegar, arrastrar o subir imágenes.',
    'Las 4 tecnologías tienen que ser distintas y poder instalarse de verdad en el dispositivo.',
    'En los ciclos presenciales se trabaja en pareja, pero cada miembro entrega su propio PDF.',
    'El trabajo se guarda solo en este navegador. Si cambias de ordenador, no estará: descarga el PDF.'
  ],
  dispositivos: [
    { k: 'pulsera', n: 'Pulsera inteligente' },
    { k: 'rinonera', n: 'Riñonera inteligente' },
    { k: 'gafas', n: 'Gafas inteligentes' },
    { k: 'ropa', n: 'Ropa deportiva inteligente' }
  ],
  // Bocadillos de la imagen (en % del ancho y alto): azul, verde, naranja, amarillo
  bocadillos: [
    { x: 4.5, y: 17.5, w: 30, h: 26, color: '#dbe5fb', borde: '#7f97c9' },
    { x: 65.6, y: 17.5, w: 30, h: 26, color: '#d6f0d0', borde: '#6f9c64' },
    { x: 4.5, y: 55.5, w: 30, h: 26, color: '#fbd5bd', borde: '#c4774a' },
    { x: 65.6, y: 55.5, w: 30, h: 26, color: '#fbeaa6', borde: '#c3a43c' }
  ],
  diapositivas: [
    'Portada: nombre del producto, dispositivo y grupo',
    'Las 4 tecnologías habilitadoras',
    'Cómo se combinan los datos',
    'Actividades con usuarios',
    'Ventajas e inconvenientes',
    'Conclusión'
  ],
  numFuentes: '3',
  fuentes: 'Cita todas las fuentes consultadas (webs de productos, artículos, imágenes…) y declara si has usado herramientas de IA: cuál, para qué y cómo has verificado su contenido.',
  entregaEj: [
    'Un único archivo PDF con el nombre UT1_E2_Apellido1_Apellido2_Nombre.pdf. Esta página lo genera con ese nombre al pulsar «Descargar PDF».',
    'El PDF incluye la Fase 1 y, en páginas apaisadas, las diapositivas de tu presentación (Fase 2).',
    'Entrega por el aula virtual, en la tarea correspondiente. Ni por correo ni en papel.'
  ],
  entrega: [
    'El profesor indica en clase y en el Campus el momento recomendado para entregar cada tarea; es él quien decide cuándo se muestra u oculta cada ejercicio en el aula virtual.',
    'El alumnado con causa justificada documentalmente conserva la escala completa de 0 a 10 en la nueva fecha acordada.',
    'Todas las fuentes consultadas deben citarse. El uso de herramientas de IA debe declararse y su contenido verificarse.',
    'Se valorará la corrección lingüística, la presentación, el rigor técnico y la aplicación real al sector profesional del ciclo.'
  ],
  criterios: [
    ['Fase 1 · Las 4 tecnologías', 'Cuatro tecnologías habilitadoras que se puedan instalar en el dispositivo, con qué hace cada una y por qué es útil para un usuario de tu ciclo (1 punto por tecnología).', 4],
    ['Fase 1 · Funciones combinadas', 'Cómo se combinan los datos de las cuatro tecnologías y qué aporta esa combinación al usuario.', 2],
    ['Fase 1 · Actividades con usuarios', 'Cuatro actividades concretas y realistas con usuarios que llevan puesto el dispositivo (0,5 puntos por actividad).', 2],
    ['Fase 1 · Ventajas e inconvenientes', 'Tabla equilibrada y razonada de ventajas e inconvenientes del dispositivo.', 1],
    ['Fase 2 · Presentación', 'Seis diapositivas claras, con imágenes, ejemplos y las explicaciones pertinentes.', 1]
  ],
  siglas: [
    ['THD', 'Tecnologías Digitales Habilitadoras'],
    ['IA', 'Inteligencia Artificial'],
    ['IoT', 'Internet of Things: internet de las cosas'],
    ['RA/RV', 'Realidad Aumentada / Realidad Virtual'],
    ['3D', 'Impresión en tres dimensiones']
  ]
};

// Lo que cambia por ciclo: a quién va dirigido el dispositivo
const CICLOS = {
  af: { nombre: 'Acondicionamiento Físico', usuario: 'un usuario del centro de acondicionamiento físico' },
  as: { nombre: 'Animación Sociodeportiva', usuario: 'un participante en actividades sociodeportivas' },
  ei: { nombre: 'Educación Infantil', usuario: 'un niño o una niña de la escuela infantil' },
  hb: { nombre: 'Higiene Bucodental', usuario: 'un paciente de la clínica dental' },
  is: { nombre: 'Integración Social', usuario: 'un usuario del centro o servicio de integración social' }
};
const ORDEN = ['af','as','ei','hb','is'];

const dispositivoElegido = () => COMUN.dispositivos.find(d => d.k === campo('dispositivo'));
const textoDe = id => { const ed = edDeId(id); return ed ? ed.textContent.replace(/\s+/g, ' ').trim() : ''; };

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Contexto</h2><p>${esc(COMUN.contexto)}</p><h2 style="font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>`;
}

function construirTarea(C){
  const B = COMUN.bocadillos;
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
    .tecno{border-radius:12px;padding:.2rem .9rem .1rem;margin:.9rem 0;border:2px solid}
    .tecno h3{margin:.6rem 0 0;font-size:1.02rem}
    .diapo{border:2px solid var(--lav2);border-radius:14px;padding:.2rem .9rem .3rem;margin:1rem 0;background:#fcfbff}
    .diapo h3{margin:.6rem 0 0;font-size:.95rem;color:var(--lav3)}
  </style>`;
  // Fase 1
  h += `<section class="fase f1"><header><h2>Fase 1 · El dispositivo y sus tecnologías</h2></header><div class="cuerpo">`;
  h += caja('pareja', '1.1', 'Compañero/a de grupo', '<div class="pista">Nombre y apellidos de tu compañero/a. Si eres de un ciclo semipresencial y lo haces individual, escribe «Individual».</div>', { corta: true, ph: 'Nombre y apellidos…' });
  h += `<div class="caja"><div class="et"><span class="n">1.2</span>Dispositivo asignado</div><div class="pista">Elige el dispositivo que os ha asignado el profesor.</div>
    <div class="disps" role="radiogroup" aria-label="Dispositivo asignado">${COMUN.dispositivos.map(d => `<label class="disp-op"><img src="${IMAGENES[d.k]}" alt=""><span><input type="radio" name="dispositivo" data-campo="dispositivo" value="${d.k}">${esc(d.n)}</span></label>`).join('')}</div></div>`;
  h += `<div class="caja"><div class="et"><span class="n">1.3</span>Las 4 tecnologías habilitadoras</div>
    <div class="pista">Escribe en cada tarjeta de color una tecnología que tendría el dispositivo (aparecerá en su bocadillo) y explica qué hace por separado y por qué sería útil para ${esc(C.usuario)}.</div>
    <div class="lienzo" id="lienzo"><img id="lienzoImg" alt="Dispositivo con cuatro bocadillos">${B.map((b, i) => `<div class="bb" id="bb${i}" style="left:${b.x}%;top:${b.y}%;width:${b.w}%;height:${b.h}%"></div>`).join('')}<div class="sin" id="lienzoSin">Elige primero el dispositivo (1.2)</div></div>`;
  B.forEach((b, i) => {
    h += `<div class="tecno" style="background:${b.color}33;border-color:${b.borde}"><h3 style="color:${b.borde}">Bocadillo ${i + 1}</h3>
      ${caja(`t${i}_nom`, '', 'Tecnología habilitadora', '', { corta: true, ph: 'Nombre de la tecnología (por ejemplo, un sensor)…' })}
      ${caja(`t${i}_just`, '', 'Qué hace por separado y por qué es útil', '', { ph: 'Explica su función y para qué le sirve al usuario…' })}</div>`;
  });
  h += `</div>`;
  h += caja('combinadas', '1.4', 'Funciones combinadas', '<div class="pista">Explica cómo podrían ser útiles las cuatro tecnologías combinando sus datos: ¿qué se puede saber o hacer al juntarlas que no se puede con una sola?</div>');
  for (let i = 0; i < 4; i++) h += caja(`act${i}`, `1.5.${i + 1}`, `Actividad ${i + 1} con un usuario o grupo que lleva puesto el dispositivo`, i === 0 ? '<div class="pista">Qué hacéis, con quién, y qué aporta el dispositivo a la actividad.</div>' : '');
  h += `<div class="caja"><div class="et"><span class="n">1.6</span>Ventajas e inconvenientes del dispositivo</div><div class="campos">
    ${caja('ventajas', '', '👍 Ventajas', '', { ph: 'Haz una lista de ventajas…' })}${caja('inconvenientes', '', '👎 Inconvenientes', '', { ph: 'Haz una lista de inconvenientes…' })}</div></div>`;
  h += `</div></section>`;
  // Fase 2
  h += `<section class="fase f2"><header><h2>Fase 2 · Producto final: tu presentación</h2></header><div class="cuerpo">
    <div class="instr">Prepara aquí tu presentación con imágenes, ejemplos y las explicaciones pertinentes. Cada bloque es una diapositiva: escribe el título y el contenido, y añade imágenes (pegar, arrastrar o botón Imagen). Al descargar el PDF, cada diapositiva saldrá en una página apaisada, lista para presentar.</div>`;
  COMUN.diapositivas.forEach((t, i) => {
    h += `<div class="diapo"><h3>Diapositiva ${i + 1}</h3>${caja(`d${i}_tit`, '', 'Título', '', { corta: true, ph: t })}${caja(`d${i}_txt`, '', 'Contenido', '', { ph: 'Texto, ejemplos e imágenes de esta diapositiva…' })}</div>`;
  });
  h += `</div></section>`;
  return h;
}

// Refresca la imagen del dispositivo y los nombres de los bocadillos
function alActualizar(){
  const img = document.getElementById('lienzoImg'); if (!img) return;
  const d = dispositivoElegido();
  document.getElementById('lienzoSin').style.display = d ? 'none' : '';
  img.src = IMAGENES[(d || COMUN.dispositivos[0]).k];
  COMUN.bocadillos.forEach((b, i) => { const t = textoDe(`t${i}_nom`), el = document.getElementById('bb' + i); el.textContent = t || `Tecnología ${i + 1}`; el.classList.toggle('vacio', !t); });
}

async function pdfTarea(api, C){
  const { banda, P, caja, separador, sitio, COL, doc, diapositiva } = api;
  const d = dispositivoElegido();
  banda('Fase 1 · El dispositivo y sus tecnologías', [223,243,234], COL.mint);
  await caja('pareja', '1.1', 'Compañero/a de grupo', { compacta: true });
  P('Dispositivo asignado: ' + (d ? d.n : '(sin elegir)'), { size: 11, b: true, color: COL.lav, tras: 2 });
  if (d){
    const pr = doc.getImageProperties(IMAGENES[d.k]); const w = api.CW, h = w * pr.height / pr.width;
    sitio(h + 4); const x0 = 18, y0 = api.y;
    doc.addImage(IMAGENES[d.k], 'JPEG', x0, y0, w, h);
    COMUN.bocadillos.forEach((b, i) => {
      const t = textoDe(`t${i}_nom`); if (!t) return;
      const bx = x0 + w * b.x / 100, by = y0 + h * b.y / 100, bw = w * b.w / 100, bh = h * b.h / 100;
      doc.setFont('helvetica', 'bold'); doc.setTextColor(47,45,58);
      let fs = 12, lin; do { doc.setFontSize(fs); lin = doc.splitTextToSize(pdfTxt(t), bw - 4); fs -= 0.5; } while (lin.length * fs * 0.3528 * 1.2 > bh - 2 && fs > 6);
      doc.text(lin, bx + bw / 2, by + bh / 2, { align: 'center', baseline: 'middle', lineHeightFactor: 1.2 });
    });
    api.y = y0 + h + 4;
  }
  for (let i = 0; i < 4; i++){
    const n = textoDe(`t${i}_nom`) || '(sin nombre)';
    await caja(`t${i}_just`, `1.3.${i + 1}`, 'Tecnología: ' + n);
  }
  await caja('combinadas', '1.4', 'Funciones combinadas');
  for (let i = 0; i < 4; i++) await caja(`act${i}`, `1.5.${i + 1}`, `Actividad ${i + 1}`);
  await caja('ventajas', '1.6', 'Ventajas', { compacta: true });
  await caja('inconvenientes', '', 'Inconvenientes');
  // Fase 2: diapositivas apaisadas
  for (let i = 0; i < COMUN.diapositivas.length; i++) await diapositiva(i + 1, textoDe(`d${i}_tit`) || COMUN.diapositivas[i].split(':')[0], `d${i}_txt`);
}

function listaChecks(C){
  const tec = [0,1,2,3].filter(i => llena(`t${i}_nom`) && llena(`t${i}_just`)).length;
  const act = cuentaLlenas([0,1,2,3].map(i => `act${i}`));
  const dia = COMUN.diapositivas.filter((_, i) => llena(`d${i}_txt`)).length;
  return [
    { ok: llena('pareja'), t: 'Compañero/a de grupo', falta: 'Escribe el nombre de tu compañero/a (o «Individual»).' },
    { ok: !!dispositivoElegido(), t: 'Dispositivo elegido', falta: 'Elige el dispositivo asignado en 1.2.' },
    { ok: tec === 4, t: 'Las 4 tecnologías', cuenta: `${tec}/4`, falta: 'Escribe el nombre y la explicación de cada tecnología.' },
    { ok: llena('combinadas'), t: 'Funciones combinadas', falta: 'Explica cómo se combinan los datos (1.4).' },
    { ok: act === 4, t: 'Las 4 actividades', cuenta: `${act}/4`, falta: 'Propón las cuatro actividades con usuarios.' },
    { ok: llena('ventajas') && llena('inconvenientes'), t: 'Ventajas e inconvenientes', falta: 'Completa las dos columnas (1.6).' },
    { ok: dia === COMUN.diapositivas.length, t: 'Presentación', cuenta: `${dia}/${COMUN.diapositivas.length} diapositivas`, falta: 'Escribe el contenido de todas las diapositivas.' }
  ];
}

function ejemploCampos(){ return { dispositivo: 'pulsera' }; }
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (id === 'pareja') return t('[Nombre y apellidos del compañero/a]');
  if (/^t\d_nom$/.test(id)) return t(`[Tecnología ${+id[1] + 1}]`);
  if (/^t\d_just$/.test(id)) return t('[Texto de muestra] Qué hace esta tecnología por separado y por qué es útil para el usuario.');
  if (id === 'combinadas') return t('[Texto de muestra] Qué se puede saber o hacer al juntar los datos de las cuatro tecnologías.');
  if (/^act\d$/.test(id)) return t('[Texto de muestra] Qué hacéis, con qué usuario o grupo y qué aporta el dispositivo.');
  if (id === 'ventajas') return '<ul><li>[Ventaja 1]</li><li>[Ventaja 2]</li></ul>';
  if (id === 'inconvenientes') return '<ul><li>[Inconveniente 1]</li><li>[Inconveniente 2]</li></ul>';
  if (/^d\d_tit$/.test(id)) return t('[' + COMUN.diapositivas[+id[1]].split(':')[0] + ']');
  if (/^d\d_txt$/.test(id)) return '<ul><li>[Idea principal de la diapositiva]</li><li>[Ejemplo]</li></ul><p>[Aquí puedes añadir imágenes]</p>';
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · web o institución · fecha · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  return '';
}

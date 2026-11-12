// ===== Bancos propios de cada especialidad semipresencial (EI SP, IS SP y MC SP) =====
// Cada banco tiene 20 tecnologías pensadas para su sector y para los 4 espacios de su plano: algunas de las 50 generales
// (por su nombre) y otras propias de la especialidad, que se añaden aquí a la lista (solo en el ejercicio semipresencial).
const BANCOS_SP = {
  ei: [ // escuela infantil: aula grande, despacho, patio y cancha
    'Pizarra digital interactiva', 'Tablets', 'Medidor de CO2', 'Videoportero', 'Detector de humo', 'Riego automático', 'Microscopio digital', 'Marcador electrónico',
    ['Agenda digital con las familias', 'Contar a las familias en una app cómo ha ido el día: comidas, siesta, actividades y fotos.'],
    ['Vigilabebés con sensor de respiración', 'Vigilar el sueño y la respiración de los bebés durante la siesta y avisar si algo va mal.'],
    ['Mesa de luz digital', 'Explorar colores, formas y transparencias con luz para aprender jugando.'],
    ['Robot programable para infantil', 'Aprender a programar y a orientarse dándole órdenes sencillas a un robot de juguete.'],
    ['Suelo interactivo', 'Proyectar en el suelo juegos que reaccionan cuando los niños y niñas se mueven encima.'],
    ['Termómetro sin contacto', 'Tomar la temperatura en un segundo sin tocar al niño o a la niña.'],
    ['Cuentos con realidad aumentada', 'Ver en 3D los personajes de un cuento al apuntar con la tablet a sus páginas.'],
    ['Altavoz inteligente', 'Poner canciones, cuentos y sonidos de la naturaleza pidiéndolos con la voz.'],
    ['Pulsera de localización', 'Saber dónde está cada niño o niña durante una salida o en el patio.'],
    ['Fuente de agua con sensor', 'Dar agua sin tocar el grifo, solo acercando las manos o el vaso.'],
    ['Toldo automático con sensor de sol', 'Dar sombra en el patio cuando aprieta el sol y recogerse si hace viento.'],
    ['Purificador de aire con sensor', 'Limpiar el aire del aula de virus y polen y avisar cuando empeora.']
  ],
  is: [ // centro de día: sala de actividades, despacho, jardín y huerto y comedor
    'Videoconferencia', 'Tablets', 'Firma electrónica', 'Desfibrilador (DEA)', 'Detector de humo', 'Pantalla de avisos digital', 'Sensor de presencia',
    ['Pulsera de teleasistencia', 'Pedir ayuda con un botón desde cualquier sitio y avisar si la persona se cae.'],
    ['Sensor de caídas en el suelo', 'Detectar que alguien se ha caído y avisar al personal al momento.'],
    ['Pastillero inteligente', 'Recordar y dar la medicación de cada persona a su hora, y avisar si no se toma.'],
    ['Mesa interactiva de estimulación cognitiva', 'Hacer juegos de memoria, atención y cálculo en una pantalla táctil grande.'],
    ['Historia social digital', 'Registrar en una app la evolución, el plan de atención y las actividades de cada persona.'],
    ['Comunicador con pictogramas', 'Ayudar a comunicarse a las personas que no pueden hablar, tocando imágenes.'],
    ['Bicicleta estática con pantalla', 'Pedalear mientras se ve en vídeo una ruta por lugares conocidos.'],
    ['Sensores de humedad del huerto', 'Saber desde el móvil cuándo hay que regar y cómo está la tierra del huerto.'],
    ['Menú digital adaptado', 'Mostrar el menú con pictogramas y avisar de alergias y dietas especiales.'],
    ['Báscula y tensiómetro conectados', 'Medir el peso y la tensión y guardarlos solos en el historial de la persona.'],
    ['Robot de compañía', 'Conversar, recordar citas y proponer actividades a las personas que están solas.'],
    ['Gafas de realidad virtual para recordar', 'Volver a lugares conocidos de la vida de la persona para estimular la memoria.'],
    ['Grúa eléctrica para movilizar', 'Levantar y mover con seguridad a personas con movilidad reducida.']
  ],
  mc: [ // servicio de mediación: aula de formación, despacho, sala de espera y salón de actos
    'Videoconferencia', 'Pantalla de avisos digital', 'Tablets', 'Pizarra digital interactiva', 'Iluminación LED',
    ['Bucle magnético', 'Enviar el sonido directamente a los audífonos y a los implantes cocleares, sin ruido de fondo.'],
    ['Subtitulado en directo', 'Convertir en texto en una pantalla lo que se dice en una charla o una reunión.'],
    ['Videointerpretación en lengua de signos', 'Conectar por vídeo con un intérprete de lengua de signos a distancia.'],
    ['Turnos con aviso luminoso y vibración', 'Avisar a cada persona de su turno sin depender del sonido.'],
    ['Timbre luminoso', 'Avisar con una luz cuando alguien llama a la puerta del despacho.'],
    ['Línea braille', 'Leer en braille, con los dedos, lo que aparece en la pantalla del ordenador.'],
    ['Lupa electrónica', 'Ampliar textos e imágenes para las personas con baja visión.'],
    ['Lector de pantalla', 'Leer en voz alta lo que aparece en el ordenador o en el móvil.'],
    ['Comunicador con pictogramas', 'Comunicarse tocando imágenes y pictogramas en una tablet.'],
    ['Pulsera vibradora de avisos', 'Recibir los avisos, el turno o una alarma como una vibración en la muñeca.'],
    ['Alarma de incendio con destellos', 'Avisar de un incendio con luces que destellan, además del sonido.'],
    ['Emisora FM para audífonos', 'Llevar la voz de quien habla hasta el audífono aunque haya mucha gente.'],
    ['Transcripción automática en el móvil', 'Leer en el móvil, en directo, lo que dice la persona que tienes delante.'],
    ['Vídeos signados con código QR', 'Ver en lengua de signos la información de un cartel al escanear su código.'],
    ['Visualizador de documentos', 'Proyectar un documento en grande para leerlo o explicarlo a todo el grupo.']
  ]
};
for (const [tema, lista] of Object.entries(BANCOS_SP)){
  BANCO[tema] = lista.map(x => {
    const [n, p] = Array.isArray(x) ? x : [x, null];
    let i = TECHS.indexOf(n);
    if (i < 0){ if (!p) throw new Error('Tecnología sin descripción: ' + n); TECH_DATA.push([n, p]); TECHS.push(n); PARA.push(p); i = TECHS.length - 1; }
    return i;
  });
}

const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--){ const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const toast = msg => aviso(msg);
// Estado del plano en el campo oculto «plano»: { v:1, orden:[ids del banco barajados], sel:[{ id, placed, x, y }] }.
// Los textos son cajas del motor: «pl_<id>_porque», «pl_<id>_uso» (una ficha por tecnología del banco) y «pl_conclusion».
const TEXTOS = new Proxy({}, { get: (_, k) => { const ed = edDeId('pl_' + String(k)); return ed ? ed.innerHTML : ''; } });
let state = { orden: [], sel: [], textos: TEXTOS };
let ULT = null, LISTO = false;
const bancoActual = () => BANCO[TEMA] || BANCO.ei;
function aplicarTemaCiclo(CI){
  TEMA = temaDe(CI && CI.nombre);
  const n = TEMAS_PLANO[TEMA].nombres;
  for (const k of ZONE_ORDER) ZONES[k].name = n[k];
}
function plCargar(v){
  let o = null; try { o = JSON.parse(v || 'null'); } catch(e){}
  const banco = bancoActual();
  state.orden = o && Array.isArray(o.orden) ? o.orden.filter(id => banco.includes(id)) : [];
  if (!state.orden.length) state.orden = shuffle(banco);
  const sel = o && Array.isArray(o.sel) ? o.sel : [];
  state.sel = sel.filter(s => s && Number.isInteger(s.id) && banco.includes(s.id)).slice(0, MAX)
    .map(s => ({ id: s.id, placed: !!s.placed, x: Math.max(-2, Math.min(48, +s.x || 0)), y: Math.max(-2, Math.min(32, +s.y || 0)) }));
}
function dirty(){
  const i = document.getElementById('plDato'); if (!i) return;
  ULT = JSON.stringify({ v: 1, orden: state.orden, sel: state.sel.map(({ id, placed, x, y }) => ({ id, placed, x, y })) });
  if (i.value !== ULT){ i.value = ULT; programarGuardado(); }
}

// ---- página del bloque
function ficha(id){
  return `<article class="ficha z-none" data-id="${id}" hidden><header><span class="num"></span><h3>${esc(TECHS[id])}</h3><span class="zt none">Sin colocar en el plano</span><button type="button" class="pl-ver" data-locate="${id}">📍 Ver en el plano</button></header>
    <div class="body"><div class="purpose"><b>Para qué sirve:</b> ${esc(PARA[id])}</div>${PREGUNTAS.map(p => caja('pl_' + id + '_' + p.k, '', p.t + ' · ' + p.s, '', { ph: p.ph })).join('')}</div></article>`;
}
function construir(CI){
  aplicarTemaCiclo(CI);
  const n = TEMAS_PLANO[TEMA].nombres, banco = bancoActual();
  const espacios = ['patio', 'aula', 'despacho', 'cancha'].map(k => '<b>' + esc(n[k]) + '</b>').join(', ').replace(/, (?=[^,]*$)/, ' y ');
  return `<input type="hidden" id="plDato" data-campo="plano">
  <div id="plSec">
    <p>Tienes 4 espacios: ${espacios}. Entre las <b>20 tecnologías de tu banco</b>, elige <b>10</b> y colócalas en el plano donde las usarías: es obligatorio poner <b>al menos 2 en cada espacio</b>. Después justifica cada una en su ficha.</p>
    <p class="pista">Arrastra la tecnología al plano. En el móvil o la tableta: toca una de «Mis 10» y después toca el sitio del plano. Puedes mover las chinchetas cuando quieras.</p>
    <div class="work">
      <div class="panel">
        <h3>Banco de tecnologías <span class="count" id="plBankCount">20</span></h3>
        <input class="search" id="plSearch" type="search" placeholder="Buscar en la lista…" aria-label="Buscar tecnología">
        <div class="bank" id="plBank"></div>
        <p class="hint">Pasa el ratón por encima (o elige una) para ver para qué sirve.</p>
        <h3 style="margin-top:18px">Mis 10 <span class="count" id="plSelCount">0/10</span></h3>
        <ul class="tray" id="plTray"></ul>
      </div>
      <div class="mapcol">
        <div class="mapbox" id="plMapbox">
          <div class="banner" id="plBanner" hidden><span id="plBannerTxt"></span><button type="button" id="plBannerCancel">Cancelar</button></div>
          <div id="plMapHolder"></div>
        </div>
        <div class="legend" id="plLegend"></div>
        <div class="bloques-chk" id="plChecks"></div>
      </div>
    </div>
    <h3 class="pl-tit">¿Por qué la has instalado ahí?</h3>
    <p>En cada ficha tienes para qué sirve la tecnología. Explica por qué la has instalado en ese espacio y quién la usaría.</p>
    <div class="fichas" id="plFichas"><div class="nofichas">Cuando elijas tecnologías, aquí aparecerá una ficha para cada una.</div>${banco.map(ficha).join('')}</div>
    ${caja('pl_conclusion', '', 'Reflexión final: ¿qué espacio queda más transformado con tus tecnologías? ¿Cuál de ellas tendrá más impacto en tu sector profesional y por qué?', '', { ph: 'Relaciónalo con tu ciclo formativo: piensa en tu futuro puesto de trabajo…' })}
  </div>`;
}
function renderFichas(){
  const box = document.getElementById('plFichas'); if (!box) return;
  box.querySelector('.nofichas').hidden = state.sel.length > 0;
  const fs = {}; box.querySelectorAll('.ficha').forEach(f => { fs[f.dataset.id] = f; });
  const elegidas = new Set(state.sel.map(s => String(s.id)));
  Object.values(fs).forEach(f => { f.hidden = !elegidas.has(f.dataset.id); });
  state.sel.forEach((s, i) => { const f = fs[s.id]; if (!f) return; f.querySelector('.num').textContent = i + 1; if (box.lastElementChild !== f) box.appendChild(f); });
  updateFichaZones();
}
function updateFichaZones(){
  document.querySelectorAll('#plFichas .ficha').forEach(f => {
    const s = state.sel.find(x => String(x.id) === f.dataset.id); if (!s) return;
    const z = s.placed ? zoneAt(s.x, s.y) : null;
    f.className = 'ficha z-' + (z || 'none');
    const t = f.querySelector('.zt'); t.className = 'zt ' + (z || 'none'); t.textContent = z ? ZONES[z].name : 'Sin colocar en el plano';
  });
}
// Montaje (una vez, cuando el bloque ya está en la página)
function init(){
  if (LISTO || !document.getElementById('plMapHolder')) return;
  LISTO = true;
  $('#plMapHolder').innerHTML = buildMap();
  const svg = $('#plMap');
  svg.addEventListener('pointermove', e => { if (drag || pinDrag) return; const w = worldFromClient(e.clientX, e.clientY); highlightZone(armed !== null || e.pointerType === 'mouse' ? zoneAt(w.x, w.y) : null); });
  svg.addEventListener('pointerleave', () => { if (!drag && !pinDrag) highlightZone(null); });
  svg.addEventListener('click', e => { if (armed === null || e.target.closest('.pin')) return; const w = worldFromClient(e.clientX, e.clientY); if (place(armed, w.x, w.y)) disarm(); });
  svg.addEventListener('pointerdown', onPinDown);
  $('#plBank').addEventListener('pointerdown', e => { const c = e.target.closest('.chip'); if (!c) return; startDrag({ button: e.button, clientX: e.clientX, clientY: e.clientY, pointerId: e.pointerId, currentTarget: c }, +c.dataset.id, false); });
  $('#plBank').addEventListener('keydown', e => { const c = e.target.closest('.chip'); if (c && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); toggleTech(+c.dataset.id); } });
  $('#plTray').addEventListener('pointerdown', e => { if (e.target.closest('.x')) return; const li = e.target.closest('li[data-id]'); if (!li) return; startDrag({ button: e.button, clientX: e.clientX, clientY: e.clientY, pointerId: e.pointerId, currentTarget: li }, +li.dataset.id, true); });
  $('#plTray').addEventListener('click', e => { const x = e.target.closest('[data-rm]'); if (x) toggleTech(+x.dataset.rm); });
  $('#plSearch').addEventListener('input', renderBank);
  $('#plBannerCancel').addEventListener('click', disarm);
  $('#plFichas').addEventListener('click', e => {
    const b = e.target.closest('[data-locate]'); if (!b) return;
    const id = +b.dataset.locate, s = state.sel[selIndex(id)]; if (!s) return;
    $('#plSec').scrollIntoView({ behavior: 'smooth' });
    if (!s.placed){ arm(id); return; }
    setTimeout(() => { const g = document.querySelector(`#plPins .pin[data-id="${id}"]`); if (g){ g.classList.add('act'); setTimeout(() => g.classList.remove('act'), 2200); } }, 400);
  });
  document.addEventListener('input', e => { if (e.target.closest && e.target.closest('#plSec .ed')) renderLegend(); });
}
function alActualizar(){
  const i = document.getElementById('plDato'); if (!i) return;
  init();
  if (i.value !== ULT || !state.orden.length){
    plCargar(i.value);
    if (EJEMPLO) ULT = i.value; else dirty();   // primera vez: se guarda el orden barajado del banco
    refreshAll(); renderFichas();
  } else renderLegend();
}
// ---- comprobaciones, progreso y PDF
const llenaPl = k => llena('pl_' + k);
function checks(){
  const { cnt, placed } = zoneCounts();
  const fichasOk = state.sel.filter(s => PREGUNTAS.every(p => llenaPl(s.id + '_' + p.k))).length;
  const cortas = zonasCortas();
  return [
    { ok: state.sel.length === MAX && placed === MAX, t: 'Plano · 10 tecnologías colocadas', cuenta: `${placed}/${MAX}`, falta: 'Elige 10 tecnologías del banco y colócalas en el plano.' },
    { ok: !cortas.length, t: 'Plano · al menos 2 en cada espacio', falta: 'Faltan tecnologías en: ' + cortas.map(z => ZONES[z.k].name).join(', ') + '.' },
    { ok: fichasOk === MAX, t: 'Plano · fichas justificadas', cuenta: `${fichasOk}/${MAX}`, falta: 'Explica en cada ficha por qué la has instalado ahí y quién la usaría.' },
    { ok: llenaPl('conclusion'), t: 'Plano · reflexión final', falta: 'Escribe la reflexión final.' }
  ];
}
function progreso(){
  const { placed } = zoneCounts();
  const fichas = state.sel.reduce((n, s) => n + PREGUNTAS.filter(p => llenaPl(s.id + '_' + p.k)).length, 0);
  return { hechas: placed + fichas + (llenaPl('conclusion') ? 1 : 0), total: MAX + MAX * PREGUNTAS.length + 1 };
}
async function pdf(api, CI){
  const { banda, texto, caja, sitio, COL, doc } = api, PP = api.P;
  banda('Tu plano del centro · ' + TEMAS_PLANO[TEMA].titulo.toLowerCase().replace(/^plano de(l)? /, ''), [226,238,252], COL.sky);
  try {
    if (!document.getElementById('plMap')) throw new Error('sin plano');
    const img = await svgToPNG(exportMapSVG(), 2000);
    let w = api.CW, h = w * img.h / img.w; if (h > 125){ h = 125; w = h * img.w / img.h; }
    sitio(h + 4); doc.addImage(img.data, 'PNG', api.M + (api.CW - w) / 2, api.y, w, h, undefined, 'FAST'); api.y = api.y + h + 4;
  } catch(e){ PP('(No se ha podido incluir el plano en este navegador)', { i: true, color: COL.muted }); }
  if (!state.sel.length) PP('(No has elegido tecnologías)', { i: true, color: COL.muted });
  for (const [i, s] of state.sel.entries()){
    const z = s.placed ? zoneAt(s.x, s.y) : null;
    sitio(26);
    texto([{ t: (i + 1) + '. ' + TECHS[s.id], b: true }, { t: '   ' + (z ? ZONES[z].name : 'Sin colocar'), i: true }], { size: 11, tras: 0.6 });
    texto([{ t: 'Para qué sirve: ', b: true }, { t: PARA[s.id], i: true }], { size: 9.4, tras: 1.5, color: COL.muted });
    for (const p of PREGUNTAS) await caja('pl_' + s.id + '_' + p.k, '', p.t, { compacta: true });
  }
  await caja('pl_conclusion', '', 'Reflexión final');
}
// ---- ejemplo relleno: 10 tecnologías ya colocadas (2 o 3 por espacio)
const SITIOS_EJ = [[6, 5], [12, 8], [21, 4], [24, 9], [8, 20], [18, 24], [36, 8], [40, 20], [4, 9], [14, 27]];
function ejemploCampos(){
  const banco = bancoActual();
  return { plano: JSON.stringify({ v: 1, orden: banco.slice(), sel: banco.slice(0, MAX).map((id, i) => ({ id, placed: true, x: SITIOS_EJ[i][0], y: SITIOS_EJ[i][1] })) }) };
}
function ejemploRespuesta(id){
  if (id === 'pl_conclusion') return '<p>[Texto de muestra] Qué espacio queda más transformado y qué tecnología tendrá más impacto en tu sector, y por qué.</p>';
  if (/^pl_\d+_porque$/.test(id)) return '<p>[Texto de muestra] Qué necesidad tiene este espacio y por qué esta tecnología la resuelve.</p>';
  if (/^pl_\d+_uso$/.test(id)) return '<p>[Texto de muestra] Quién la usaría, en qué momento y qué cambia respecto a cómo se hace ahora.</p>';
  return '';
}
document.head.insertAdjacentHTML('beforeend', '<style id="planoCSS">' + PLANO_CSS + '</style>');

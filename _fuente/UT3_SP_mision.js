// ===== UT3_SP · Parte 3 · Misión: pon la nube a salvo (6 retos cortos que se corrigen solos) =====
// Se incluye dentro de UT3_SP.js (marca INCLUYE). Estado en el campo oculto «mision», en JSON:
//   { q: { pregunta: opción }, aud: [fallos marcados], pasos: [pasos en el orden elegido], chk: [comprobaciones marcadas] }
// Retos: 1 compartir · 2 auditoría · 3 incidente · 4 ordenar los pasos · 5 nombres y versiones · 6 tu carpeta real

function MISION(C){
  const sensible = (C.arch.find(a => a[3].length === 1 && a[3][0] === 'A') || C.arch[0])[2];
  const al = t => t.replace(/\bde el\b/g, 'del').replace(/\ba el\b/g, 'al');
  return {
    // preguntas de una sola respuesta: [id, pregunta, opciones, cuál es la buena, por qué]
    quiz: [
      { k: 'r1', n: '3.1', t: 'Reto 1 · Comparte la carpeta', intro: al(`Vas a compartir la carpeta de la actividad con ${C.dest}. Elige bien en cada paso.`), qs: [
        ['m1a', '¿Con quién la compartes?', ['Con cualquier persona que tenga el enlace', 'Solo con las personas invitadas, con su correo', 'Con toda la organización, por si acaso'], 1, 'Así sabes exactamente quién entra y puedes quitarle el acceso cuando quieras.'],
        ['m1b', '¿Qué permiso les das?', ['Lector: solo pueden ver', 'Editor: pueden cambiar y borrar', 'Editor, pero les pides que no toquen nada'], 0, 'Para informarse basta con ver. Editar, solo donde haya algo que rellenar.'],
        ['m1c', 'La actividad terminó hace tres meses. ¿Qué haces con el acceso?', ['Lo dejo como está: no molesta', 'Borro la carpeta entera sin avisar a nadie', 'Reviso quién tiene acceso y se lo quito a quien ya no lo necesita'], 2, 'El acceso se da mientras hace falta, no para siempre.']
      ] },
      { k: 'r3', n: '3.3', t: 'Reto 3 · ¡Incidente!', intro: 'Te avisan de que las fotos de la actividad están circulando por un grupo de mensajería en el que hay gente que no participó. Decide rápido, pero piensa.', qs: [
        ['m3a', '¿Qué haces primero?', ['Borro todas las fotos de la nube', 'Quito el acceso por enlace a la carpeta de fotos', 'Espero unos días a ver si se pasa'], 1, 'Lo primero es cortar la fuga. Borrarlo todo destruye el trabajo y no recupera lo que ya salió.'],
        ['m3b', '¿A quién se lo cuentas?', [al(`A la persona responsable de ${C.centro}, para que valore avisar a las personas afectadas`), 'A nadie: ya lo he arreglado', 'Lo explico en las redes sociales para dar la cara'], 0, 'Una fuga de datos personales no se arregla en silencio: hay que comunicarla a quien es responsable.'],
        ['m3c', '¿Qué cambias para que no vuelva a pasar?', ['Dejo de usar la nube y vuelvo al papel', 'Pongo una contraseña más larga en mi cuenta', 'Comparto solo con cuentas invitadas, con permiso de solo ver y sin descarga'], 2, 'El fallo estaba en cómo se compartió, no en la nube ni en tu contraseña.']
      ] },
      { k: 'r5', n: '3.5', t: 'Reto 5 · Nombres y versiones', intro: 'Una nube ordenada se entiende sin abrir los archivos. Elige en cada caso.', qs: [
        ['m5a', '¿Qué nombre le pones al informe de la actividad?', ['informe final BUENO (2).pdf', '2026-11-14_informe_actividad_v1.pdf', 'doc.pdf'], 1, 'Fecha, qué es y versión: se ordena solo y cualquiera sabe qué contiene.'],
        ['m5b', 'Tienes tres borradores antiguos del informe. ¿Qué haces con ellos?', ['Los dejo junto al bueno, por si acaso', 'Los comparto también, para que vean el proceso', 'Los paso a una carpeta «Archivo» que solo ve el equipo, o los borro'], 2, 'Quien entra debe encontrar una sola versión: la buena.'],
        ['m5c', '¿Cómo llamas a la carpeta de la actividad?', [al(`2026-11 · ${C.casoT}`), 'Nueva carpeta (3)', 'Cosas varias'], 0, 'Fecha y nombre de la actividad: se encuentra sola entre las demás.']
      ] }
    ],
    // auditoría: [id, lo que ves, ¿es un fallo?, por qué]
    aud: [
      ['a1', 'Una carpeta «Varios» con 40 archivos sin ordenar', true, 'Nadie encuentra nada y es fácil compartir algo por error.'],
      ['a2', al(`Una carpeta «2026-11 · ${C.casoT}» con subcarpetas por tipo de documento`), false, 'Está bien organizada.'],
      ['a3', 'La carpeta «Fotos» compartida con «cualquiera que tenga el enlace»', true, 'Las fotos de personas no pueden estar abiertas.'],
      ['a4', al(`Un formulario que ${C.dest} pueden rellenar`), false, 'Es lo correcto: editar solo donde hay que rellenar.'],
      ['a5', 'Una persona que dejó el equipo hace un año sigue como editora', true, 'Hay que quitar el acceso el mismo día que alguien se va.'],
      ['a6', al(`«${sensible}» dentro de la carpeta que ven ${C.dest}`), true, 'Ese archivo es solo para el equipo profesional.'],
      ['a7', al(`La verificación en dos pasos activada en la cuenta de ${C.centro}`), false, 'Es una buena medida de seguridad.'],
      ['a8', 'Un archivo llamado «documento1 (2) final BUENO.docx»', true, 'Con ese nombre no se sabe qué es ni cuál es la versión buena.']
    ],
    // pasos, en el orden desordenado en que se muestran: [id, texto, posición correcta (0 = trampa, no va)]
    pasos: [
      ['p3', 'Inicia sesión con tu cuenta: la del correo al que llegó la invitación', 3],
      ['t1', 'Reenvía el enlace a tus contactos para no perderlo', 0],
      ['p5', 'Abre el archivo que quieres ver', 5],
      ['p1', 'Abre el mensaje con la invitación', 1],
      ['t2', 'Envía tu contraseña a quien te invitó para que entre por ti', 0],
      ['p4', 'Entra en la carpeta de la actividad', 4],
      ['p2', 'Pulsa el botón «Abrir»', 2]
    ],
    chk: [
      ['c1', 'He creado la carpeta de la actividad con las carpetas que diseñé en el punto 2.2.'],
      ['c2', 'He subido al menos un documento de ejemplo en cada carpeta.'],
      ['c3', 'Todo es inventado: no hay datos ni fotos de personas reales.'],
      ['c4', 'He compartido la carpeta como «solo ver» y he probado el enlace en una ventana privada.']
    ]
  };
}
const mision = () => {
  const o = leeJSON('mision', {});
  return { q: o.q && typeof o.q === 'object' ? o.q : {}, aud: Array.isArray(o.aud) ? o.aud : [], pasos: Array.isArray(o.pasos) ? o.pasos : [], chk: Array.isArray(o.chk) ? o.chk : [] };
};
let M_COMP = { aud: false, pasos: false };
const mPregs = C => MISION(C).quiz.flatMap(r => r.qs);
const mQuizHechas = C => { const m = mision(); return mPregs(C).filter(q => Number.isInteger(m.q[q[0]])).length; };
const mQuizBien = C => { const m = mision(); return mPregs(C).filter(q => m.q[q[0]] === q[3]).length; };
const mAud = C => { const m = mision(), A = MISION(C).aud; return { bien: A.filter(a => a[2] && m.aud.includes(a[0])).length, total: A.filter(a => a[2]).length, falsas: A.filter(a => !a[2] && m.aud.includes(a[0])).length }; };
const mPasosBien = C => { const buenos = MISION(C).pasos.filter(p => p[2]).sort((a, b) => a[2] - b[2]).map(p => p[0]); return JSON.stringify(mision().pasos) === JSON.stringify(buenos); };
const mChk = C => { const m = mision(); return MISION(C).chk.filter(c => m.chk.includes(c[0])).length; };
// para el progreso: cosas hechas y total
const misionTotal = C => mPregs(C).length + 1 + 1 + MISION(C).chk.length;
const misionHechas = C => { const m = mision(); return mQuizHechas(C) + (m.aud.length ? 1 : 0) + (m.pasos.length >= 3 ? 1 : 0) + mChk(C); };

document.head.insertAdjacentHTML('beforeend', `<style>
.nb-mapa{display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0 0;padding:0;list-style:none}
.nb-mapa li{display:flex;gap:.35rem;align-items:center;border:1.5px solid var(--line);background:#fff;border-radius:999px;padding:.25rem .7rem;font-size:.85rem;font-weight:700;color:var(--muted)}
.nb-mapa li.ok{border-color:#9fd8bd;background:#f3fbf7;color:#1d5a40}
.nb-q{border:2px solid var(--line);border-radius:14px;padding:.7rem .8rem;margin-top:.7rem;background:#fffdfa}
.nb-q>p{margin:0 0 .5rem;font-weight:600}
.nb-q.ok{border-color:#9fd8bd;background:#f3fbf7}
.nb-q.mal{border-color:#f1b3c3;background:#fff6f8}
.nb-ops{display:grid;gap:.4rem}
.nb-op{display:flex;gap:.55rem;align-items:center;min-height:44px;text-align:left;border:1.5px solid var(--line);border-radius:10px;background:#fff;padding:.4rem .7rem;font:inherit;font-size:.93rem;cursor:pointer;width:100%}
.nb-op i{flex:none;width:1.5rem;height:1.5rem;border-radius:50%;border:1.5px solid var(--line);display:grid;place-items:center;font-style:normal;font-size:.8rem;font-weight:800;color:#fff}
.nb-op[aria-pressed="true"]{border-color:var(--lav3);background:var(--lav)}
.nb-op[aria-pressed="true"] i{background:var(--lav3);border-color:var(--lav3)}
.nb-op.ok{border-color:#2f7d5c;background:#dff3ea}.nb-op.ok i{background:#2f7d5c;border-color:#2f7d5c}
.nb-op.mal{border-color:#a33c58;background:#fde4ea}.nb-op.mal i{background:#a33c58;border-color:#a33c58}
.nb-q .fb,.nb-fbg{font-size:.86rem;margin:.5rem 0 0;border-radius:8px;padding:.35rem .5rem;background:rgba(0,0,0,.035)}
.nb-op small{display:block;color:var(--muted);font-size:.82rem;margin-top:.1rem}
.nb-acc{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.7rem}
.nb-sec{min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:#fff;font-weight:700;padding:.4rem 1rem;cursor:pointer}
</style>`);

function misionHTML(C){
  const hueco = (id, n, t, intro) => `<div class="nb-juego"><h3><span class="n">${n}</span>${esc(t)} <span class="nb-marc" id="${id}M"></span></h3><p class="pista">${intro}</p><div id="${id}"></div></div>`;
  const D = MISION(C), q = k => D.quiz.find(r => r.k === k);
  return `<section class="fase f3"><header><h2>Parte 3 · Misión: pon la nube a salvo</h2></header><div class="cuerpo">
    <input type="hidden" data-campo="mision">
    <p>Seis retos cortos para comprobar que sabes usar la nube como profesional. No hay que escribir casi nada, pero sí pensar: cada reto se corrige solo y puedes cambiar tus respuestas.</p>
    <ol class="nb-mapa" id="nbMapa" aria-label="Retos de la misión"></ol>
    ${hueco('nbR1', q('r1').n, q('r1').t, esc(q('r1').intro))}
    ${hueco('nbR2', '3.2', 'Reto 2 · Auditoría: caza los fallos', 'Te han pedido revisar la nube de otro equipo. <b>Marca solo lo que esté mal</b> y pulsa <b>Comprobar</b>. Ojo: no todo es un fallo.')}
    ${hueco('nbR3', q('r3').n, q('r3').t, esc(q('r3').intro))}
    ${hueco('nbR4', '3.4', 'Reto 4 · Guía rápida', esc(`${C.quien.charAt(0).toUpperCase() + C.quien.slice(1)} no sabe abrir lo que le has compartido. Toca los pasos <b>en el orden correcto</b> para hacerle una guía. Cuidado: hay pasos que sobran y no se deben dar nunca.`).replace(/&lt;(\/?b)&gt;/g, '<$1>'))}
    ${hueco('nbR5', q('r5').n, q('r5').t, esc(q('r5').intro))}
    ${hueco('nbR6', '3.6', 'Reto 6 · Tu carpeta, de verdad', 'Monta de verdad en una nube (Google Drive, OneDrive u otra) la carpeta que diseñaste en el punto 2.2 y marca cada comprobación cuando la hayas hecho.')}
    ${caja('p3_enlace', '', 'Enlace a tu carpeta', '', { corta: true, ph: 'Escribe aquí el enlace de tu carpeta compartida…' })}
    ${caja('p3_reflexion', '3.7', 'Después de la misión: ¿qué reto te ha hecho pensar más y qué harás distinto cuando uses la nube en tu trabajo?')}
  </div></section>`;
}

function pintarMision(C){
  const v = campo('mision') + '|' + M_COMP.aud + M_COMP.pasos + llena('p3_enlace'); if (PINT.mision === v && document.getElementById('nbR1').children.length) return;
  PINT.mision = v; const m = mision(), D = MISION(C);
  // retos de preguntas
  const hechos = {};
  for (const r of D.quiz){
    const id = 'nbR' + r.k[1];
    document.getElementById(id).innerHTML = r.qs.map(q => {
      const e = m.q[q[0]], hecho = Number.isInteger(e), ok = e === q[3];
      return `<div class="nb-q${hecho ? (ok ? ' ok' : ' mal') : ''}"><p>${esc(q[1])}</p><div class="nb-ops">${q[2].map((o, i) =>
        `<button type="button" class="nb-op${e === i ? (ok ? ' ok' : ' mal') : ''}" data-mq="${q[0]}" data-o="${i}" aria-pressed="${e === i}"><i>${e === i ? (ok ? '✓' : '✗') : ''}</i><span>${esc(o)}</span></button>`).join('')}</div>
        ${hecho ? `<p class="fb">${ok ? '✅ ' + esc(q[4]) : '❌ Piénsalo otra vez.'}</p>` : ''}</div>`;
    }).join('');
    const b = r.qs.filter(q => m.q[q[0]] === q[3]).length;
    document.getElementById(id + 'M').textContent = `${b} de ${r.qs.length} bien`;
    hechos[r.k] = b === r.qs.length;
  }
  // reto 2 · auditoría
  { const a = mAud(C);
    document.getElementById('nbR2').innerHTML = `<div class="nb-ops" style="margin-top:.7rem">${D.aud.map(x => {
      // al comprobar solo se corrige lo que el alumno ha marcado: los fallos que le faltan no se desvelan
      const sel = m.aud.includes(x[0]), cor = M_COMP.aud && sel, cls = cor ? (x[2] ? ' ok' : ' mal') : '';
      return `<button type="button" class="nb-op${cls}" data-ma="${x[0]}" aria-pressed="${sel}"><i>${sel ? '!' : ''}</i><span>${esc(x[1])}${cor ? `<small>${x[2] ? 'Sí, es un fallo: ' : 'Esto estaba bien: '}${esc(x[3])}</small>` : ''}</span></button>`;
    }).join('')}</div>
      ${M_COMP.aud ? `<p class="nb-fbg">${a.bien === a.total && !a.falsas ? '✅ Has cazado todos los fallos sin equivocarte.' : `Has encontrado ${a.bien} de ${a.total} fallos${a.falsas ? ` y has marcado ${a.falsas} cosa${a.falsas === 1 ? '' : 's'} que estaba${a.falsas === 1 ? '' : 'n'} bien` : ''}. Sigue buscando y vuelve a comprobar.`}</p>` : ''}
      <div class="nb-acc"><button type="button" class="nb-comp" style="margin-top:0" data-mcomp="aud">Comprobar</button></div>`;
    document.getElementById('nbR2M').textContent = M_COMP.aud ? `${a.bien} de ${a.total} fallos` : `${m.aud.length} marcados`;
    hechos.r2 = a.bien === a.total && !a.falsas; }
  // reto 4 · ordenar los pasos
  { const ok = mPasosBien(C);
    document.getElementById('nbR4').innerHTML = `<div class="nb-ops" style="margin-top:.7rem">${D.pasos.map(p => {
      const pos = m.pasos.indexOf(p[0]);
      return `<button type="button" class="nb-op" data-mp="${p[0]}" aria-pressed="${pos >= 0}"><i>${pos >= 0 ? pos + 1 : ''}</i><span>${esc(p[1])}</span></button>`;
    }).join('')}</div>
      ${M_COMP.pasos ? `<p class="nb-fbg">${ok ? '✅ Guía perfecta: los pasos justos y en su orden. Reenviar el enlace o dar la contraseña no se hace nunca.' : '❌ Todavía no: o el orden no es el bueno o has metido un paso que no se debe dar nunca. Toca un paso para quitarlo.'}</p>` : ''}
      <div class="nb-acc"><button type="button" class="nb-comp" style="margin-top:0" data-mcomp="pasos">Comprobar</button><button type="button" class="nb-sec" data-mreset="1">Empezar de nuevo</button></div>`;
    document.getElementById('nbR4M').textContent = `${m.pasos.length} paso${m.pasos.length === 1 ? '' : 's'} elegido${m.pasos.length === 1 ? '' : 's'}`;
    hechos.r4 = ok; }
  // reto 6 · comprobaciones de la carpeta real
  { document.getElementById('nbR6').innerHTML = `<div class="nb-ops" style="margin-top:.7rem">${D.chk.map(c => {
      const sel = m.chk.includes(c[0]);
      return `<button type="button" class="nb-op${sel ? ' ok' : ''}" data-mc="${c[0]}" aria-pressed="${sel}"><i>${sel ? '✓' : ''}</i><span>${esc(c[1])}</span></button>`;
    }).join('')}</div>`;
    document.getElementById('nbR6M').textContent = `${mChk(C)} de ${D.chk.length}`;
    hechos.r6 = mChk(C) === D.chk.length && llena('p3_enlace'); }
  document.getElementById('nbMapa').innerHTML = [1, 2, 3, 4, 5, 6].map(i => `<li class="${hechos['r' + i] ? 'ok' : ''}">${hechos['r' + i] ? '⭐' : '☆'} Reto ${i}</li>`).join('');
}

document.addEventListener('click', e => {
  const t = e.target.closest ? e.target.closest('[data-mq],[data-ma],[data-mp],[data-mc],[data-mcomp],[data-mreset]') : null;
  if (!t || !t.closest('.fase.f3')) return;
  const m = mision(), d = t.dataset, cambia = (a, x) => a.includes(x) ? a.filter(y => y !== x) : [...a, x];
  if (d.mq){ m.q[d.mq] = +d.o; }
  else if (d.ma){ m.aud = cambia(m.aud, d.ma); M_COMP.aud = false; }
  else if (d.mp){ m.pasos = cambia(m.pasos, d.mp); M_COMP.pasos = false; }
  else if (d.mc){ m.chk = cambia(m.chk, d.mc); }
  else if (d.mreset){ m.pasos = []; M_COMP.pasos = false; }
  else if (d.mcomp){
    if (d.mcomp === 'aud' && !m.aud.length){ aviso('Marca primero lo que creas que está mal.'); return; }
    if (d.mcomp === 'pasos' && m.pasos.length < 3){ aviso('Elige primero los pasos, en orden.'); return; }
    M_COMP[d.mcomp] = true; alActualizar(); return;
  }
  pon('mision', m); alActualizar();
});

async function misionPDF(api, C){
  const { banda, P, texto, caja, separador, sitio, COL } = api, m = mision(), D = MISION(C);
  banda('Parte 3 · Misión: pon la nube a salvo', [223,243,234], COL.mint);
  const tit = t => { sitio(22); P(t, { size: 11, b: true, color: COL.mint, tras: 2 }); };
  const quiz = r => {
    tit(`${r.n} · ${r.t} · ${r.qs.filter(q => m.q[q[0]] === q[3]).length} de ${r.qs.length} bien`);
    r.qs.forEach(q => { const e = m.q[q[0]], hecho = Number.isInteger(e);
      texto([{ t: q[1] + ' ', b: true }, { t: hecho ? q[2][e] + (e === q[3] ? ' (bien)' : ' (mal)') : 'Sin responder' }], { size: 9.5, sang: 3, marca: '·' }); });
    separador();
  };
  quiz(D.quiz[0]);
  { const a = mAud(C); tit(`3.2 · Reto 2 · Auditoría · ${a.bien} de ${a.total} fallos encontrados${a.falsas ? ` · marcados por error: ${a.falsas}` : ''}`);
    D.aud.forEach(x => { const sel = m.aud.includes(x[0]);
      texto([{ t: (sel ? 'Marcado como fallo' : 'Sin marcar') + (x[2] === sel ? ' (bien): ' : ' (mal): '), b: true }, { t: x[1] }], { size: 9.5, sang: 3, marca: '·' }); });
    separador(); }
  quiz(D.quiz[1]);
  { tit(`3.4 · Reto 4 · Guía rápida · ${mPasosBien(C) ? 'orden correcto' : 'orden por revisar'}`);
    if (!m.pasos.length) P('(sin pasos elegidos)', { size: 9.5, sang: 3, i: true, color: COL.muted });
    m.pasos.forEach((id, i) => { const p = D.pasos.find(x => x[0] === id); if (p) P(p[1], { size: 9.5, sang: 3, marca: (i + 1) + '.', tras: .4 }); });
    separador(); }
  quiz(D.quiz[2]);
  { tit(`3.6 · Reto 6 · Tu carpeta, de verdad · ${mChk(C)} de ${D.chk.length} comprobaciones`);
    D.chk.forEach(c => texto([{ t: (m.chk.includes(c[0]) ? 'Hecho: ' : 'Sin marcar: '), b: true }, { t: c[1] }], { size: 9.5, sang: 3, marca: '·' })); }
  await caja('p3_enlace', '', 'Enlace a la carpeta', { compacta: true });
  await caja('p3_reflexion', '3.7', 'Después de la misión: qué reto te ha hecho pensar más y qué harás distinto');
}

function misionChecks(C){
  const m = mision(), np = mPregs(C).length, qh = mQuizHechas(C), nc = MISION(C).chk.length;
  const juegos = (m.aud.length ? 1 : 0) + (m.pasos.length >= 3 ? 1 : 0);
  const real = mChk(C) + (llena('p3_enlace') ? 1 : 0) + (llena('p3_reflexion') ? 1 : 0);
  return [
    { ok: qh === np && juegos === 2, t: 'Parte 3 · Retos 1 a 5 de la misión', cuenta: `${qh + juegos}/${np + 2}`, falta: 'Responde a todas las preguntas de los retos, marca los fallos de la auditoría y ordena los pasos de la guía.' },
    { ok: real === nc + 2, t: 'Parte 3 · Tu carpeta real y reflexión', cuenta: `${real}/${nc + 2}`, falta: 'Marca las comprobaciones de tu carpeta, escribe su enlace y responde a la reflexión final.' }
  ];
}
function misionEjemplo(C){
  const D = MISION(C);
  return JSON.stringify({ q: Object.fromEntries(D.quiz.flatMap(r => r.qs).map(q => [q[0], q[3]])), aud: D.aud.filter(a => a[2]).map(a => a[0]),
    pasos: D.pasos.filter(p => p[2]).sort((a, b) => a[2] - b[2]).map(p => p[0]), chk: D.chk.map(c => c[0]) });
}

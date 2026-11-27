// ===== UT6_SP · PDF =====
// Se incluye en UT6_SP.js. Los dibujos (logo, planos, organigrama y hoja de ruta) se pasan de SVG a PNG y se pegan en el PDF.
function u6Png(svg, w, h, escala = 2.5){
  return new Promise(res => {
    const im = new Image();
    im.onload = () => { const cv = document.createElement('canvas'); cv.width = Math.round(w * escala); cv.height = Math.round(h * escala);
      const x = cv.getContext('2d'); x.fillStyle = '#fff'; x.fillRect(0, 0, cv.width, cv.height); x.drawImage(im, 0, 0, cv.width, cv.height);
      try { res(cv.toDataURL('image/png')); } catch(e){ res(null); } };
    im.onerror = () => res(null);
    im.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
}
async function u6Imagen(api, o, anchoMax){
  const url = await u6Png(o.svg, o.w, o.h);
  if (!url){ api.P('[No se ha podido dibujar esta parte]', { i: true, color: api.COL.muted, sang: 3 }); return; }
  let w = Math.min(api.CW, anchoMax || api.CW), h = w * o.h / o.w;
  if (h > 185){ h = 185; w = h * o.w / o.h; }
  api.sitio(h + 4); api.doc.addImage(url, 'PNG', api.M + (api.CW - w) / 2, api.y, w, h, undefined, 'FAST'); api.y = api.y + h + 4;
}
const SVG_FUENTE = 'Segoe UI, Arial, sans-serif';
function svgLogo(){
  const L = u6Logo(), n = campo('emp_nombre').trim() || 'Tu empresa', l = campo('emp_lema').trim();
  const W = 560, H = 110;
  return { w: W, h: H, svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="${SVG_FUENTE}">
    <rect x="1" y="1" width="${W - 2}" height="${H - 2}" rx="18" fill="#fffaf2" stroke="#f0c878" stroke-width="2" stroke-dasharray="6 4"/>
    <rect x="16" y="15" width="80" height="80" rx="22" fill="${L.col || '#c9c2d6'}"/>
    <text x="56" y="68" font-size="40" text-anchor="middle">${L.ic || '?'}</text>
    <text x="114" y="${l ? 50 : 62}" font-size="24" font-weight="800" fill="#2f2d3a">${esc(n.slice(0, 38))}</text>
    ${l ? `<text x="114" y="78" font-size="15" font-style="italic" fill="#6c6878">${esc(l.slice(0, 60))}</text>` : ''}</svg>` };
}
function svgPlano(C, modo){
  const L = u6Local(C).it, D = u6Digi(C), RW = 314, RH = 200, G = 8, B = 8, W = B * 2 + RW * 2 + G, H = B * 2 + RH * 2 + G;
  let s = `<rect width="${W}" height="${H}" rx="10" fill="#3d3a48"/>`;
  C.salas.forEach((sa, i) => {
    const x = B + (i % 2) * (RW + G), y = B + Math.floor(i / 2) * (RH + G);
    s += `<rect x="${x}" y="${y}" width="${RW}" height="${RH}" fill="${TONOS_SALA[i % 4]}"/><text x="${x + 10}" y="${y + 18}" font-size="12" font-weight="700" fill="#4a4458">${esc(sa[1].toUpperCase())}</text>`;
    L.filter(it => it.sala === sa[0]).forEach((it, k) => {
      const tx = x + 9 + (k % 3) * 101, ty = y + 28 + Math.floor(k / 3) * 85, a = analogDe(C, it.id);
      let ic = a[1], nm = a[2], est = 'a';
      if (modo === 'despues'){ const t = (D[it.id] || {}).t, d = t && t !== 'no' ? digitalDe(C, t) : null; if (d){ ic = d[1]; nm = d[2]; est = 'd'; } else est = t === 'no' ? 'no' : 'p'; }
      s += `<rect x="${tx}" y="${ty}" width="95" height="79" rx="10" fill="${est === 'd' ? '#fff1d6' : '#ffffff'}" stroke="${est === 'd' ? '#b45309' : '#cfc8d8'}" stroke-width="${est === 'd' ? 2 : 1}"${est === 'p' ? ' stroke-dasharray="4 3"' : ''}/>
        <text x="${tx + 47.5}" y="${ty + 33}" font-size="26" text-anchor="middle">${ic}</text>
        ${partir(nm, 17).map((l, j) => `<text x="${tx + 47.5}" y="${ty + 52 + j * 11}" font-size="9.5" text-anchor="middle" fill="#2f2d3a">${esc(l)}</text>`).join('')}
        ${est === 'no' ? `<text x="${tx + 90}" y="${ty + 12}" font-size="8.5" text-anchor="end" font-weight="700" fill="#8a6100">se queda</text>` : ''}`;
    });
  });
  return { w: W, h: H, svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="${SVG_FUENTE}">${s}</svg>` };
}

async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL } = api;
  const T = [255, 241, 214];
  const titulo = t => { sitio(26); P(t, { size: 11, b: true, color: COL.lav, tras: 2 }); };
  const fila = (et, v, o = {}) => texto([{ t: et + ': ', b: true }, { t: String(v || '').trim() || '(sin rellenar)' }], Object.assign({ size: 9.8, sang: 3, tras: .6 }, o));
  const L = u6Local(C).it, D = u6Digi(C);

  // Fase 1
  banda('Fase 1 · Tu empresa', T, COL.lav);
  P(`${C.tipo}: ${C.empresa}. Atiende a ${C.clientes}.`, { size: 9.5, i: true, color: COL.muted, tras: 2.5 });
  titulo('1.1 · Ficha y logo');
  await u6Imagen(api, svgLogo(), 120);
  fila('Nombre', campo('emp_nombre')); fila('Lema', campo('emp_lema')); fila('Municipio o isla', campo('emp_lugar'));
  separador();
  await caja('f1_mision', '1.2', 'Misión de la empresa');
  await caja('f1_objetivos', '1.3', 'Objetivos estratégicos para los próximos dos años');
  await caja('f1_dia', '1.4', 'Un día en la empresa analógica');

  // Fase 2
  banda('Fase 2 · El local analógico', T, COL.lav);
  titulo(`2.1 · El local antes de digitalizar · ${L.length} objetos`);
  if (L.length){ await u6Imagen(api, svgPlano(C, 'antes'));
    L.forEach(x => texto([{ t: analogDe(C, x.id)[2] + ' (' + salaDe(C, x.sala)[1] + '): ', b: true }, { t: x.prob.trim() || '(sin explicar el problema)' }], { size: 9.5, sang: 3, marca: '·', tras: .5 }));
  } else P('(No se ha colocado ningún objeto)', { size: 9.5, i: true, color: COL.muted, sang: 3 });
  separador();
  await caja('f2_areas', '2.2', 'Áreas más fáciles y más difíciles de digitalizar');

  // Fase 3
  banda('Fase 3 · Organigrama', T, COL.lav);
  { const p = u6Org(C).p;
    titulo(`3.1 · Organigrama · ${p.length} personas`);
    if (p.length){ await u6Imagen(api, svgOrg(C));
      p.forEach(x => { const j = jefeValido(p, x);
        texto([{ t: (x.nom.trim() || '(sin nombre)') + ' · ', b: true }, { t: `${puestoDe(C, x)} · nivel ${x.niv} (${NIVELES[x.niv - 1][1].toLowerCase()})` + (x.niv > 1 ? ` · depende de ${j ? (j.nom.trim() || puestoDe(C, j)) : '(sin decidir)'}` : '') }], { size: 9.3, sang: 3, marca: '·', tras: .4 }); });
    } else P('(Sin organigrama)', { size: 9.5, i: true, color: COL.muted, sang: 3 });
    separador(); }
  await caja('f3_lider', '3.2', 'Quién liderará el cambio digital y si hace falta algún puesto nuevo');

  // Fase 4
  banda('Fase 4 · ¡Digitalízalo!', T, COL.lav);
  { const e = estadoF4(C);
    titulo(`4.1 · El local después de digitalizar · ${e.cuenta}`);
    if (L.length){ await u6Imagen(api, svgPlano(C, 'despues'));
      for (const x of L){
        const a = analogDe(C, x.id), v = D[x.id] || {}, d = v.t && v.t !== 'no' ? digitalDe(C, v.t) : null;
        sitio(18);
        if (d){
          texto([{ t: a[2] + '  >  ' + d[2], b: true }], { size: 9.8, sang: 3, marca: '·', tras: .4 });
          fila('Ámbito', (AMBITOS.find(m => m[0] === v.amb) || [, ''])[1], { size: 9.3, sang: 8, tras: .3 });
          fila('Qué resuelve', v.res, { size: 9.3, sang: 8, tras: .3 });
          fila('Riesgo o brecha', v.ries, { size: 9.3, sang: 8, tras: 1 });
        } else if (v.t === 'no'){
          texto([{ t: a[2] + '  >  se queda sin digitalizar', b: true }], { size: 9.8, sang: 3, marca: '·', tras: .4 });
          fila('Por qué', v.res, { size: 9.3, sang: 8, tras: 1 });
        } else texto([{ t: a[2] + '  >  ', b: true }, { t: '(sin decidir)', i: true }], { size: 9.8, sang: 3, marca: '·', tras: 1 });
      }
      const amb = new Set(L.map(x => D[x.id] && D[x.id].t && D[x.id].t !== 'no' ? D[x.id].amb : '').filter(Boolean));
      fila(`Ámbitos que mejora (${amb.size} de ${AMBITOS.length})`, AMBITOS.filter(m => amb.has(m[0])).map(m => m[1]).join(', ') || 'ninguno', { size: 9.5, sang: 0, tras: 1 });
    } else P('(No hay local que digitalizar)', { size: 9.5, i: true, color: COL.muted, sang: 3 });
    separador(); }
  await caja('f4_dia', '4.2', 'Un día en la empresa digital');
  await caja('f4_integracion', '4.3', 'Cómo encaja todo: datos compartidos e integración con lo que no se digitaliza');

  // Fase 5
  banda('Fase 5 · Tu robot asistente', T, COL.lav);
  { const R = u6Robot(C), rb = robotDe(R.tipo);
    titulo('5.1 · El robot');
    fila('Tipo', rb ? rb[2] : ''); fila('Nombre', nombreRobot()); fila('Sala donde trabaja', R.sala ? salaDe(C, R.sala)[1] : '');
    fila('Capacidades', R.piezas.map(id => PIEZAS.find(p => p[0] === id)[2]).join(', ')); fila('Alquiler', rb ? eur(rb[4]) + ' al mes' : '');
    separador(); }
  await caja('f5_tareas', '5.2', 'Tres tareas concretas del robot');
  await caja('f5_humano', '5.3', 'Lo que tiene que seguir haciendo siempre una persona');

  // Fase 6
  banda('Fase 6 · Datos y seguridad', T, COL.lav);
  { const S = u6Datos(C);
    titulo('6.1 · Dónde se guarda cada dato y quién lo ve');
    const k = C.datos.filter(d => S.sel[d[0]]);
    if (!k.length) P('(Sin datos marcados)', { size: 9.5, i: true, color: COL.muted, sang: 3 });
    k.forEach(d => { const v = S.sel[d[0]], av = avisoDato(d[0], v);
      texto([{ t: d[1] + ': ', b: true }, { t: ((DONDE.find(o => o[0] === v.donde) || [, '(sin decidir dónde)'])[1]) + ' · ' + ((QUIEN.find(o => o[0] === v.quien) || [, '(sin decidir quién)'])[1]) }], { size: 9.5, sang: 3, marca: '·', tras: av ? .2 : .5 });
      if (av) P('Aviso que vio el alumno/a: ' + av.replace(/^⚠️\s*/, ''), { size: 8.8, i: true, color: COL.muted, sang: 8, tras: .5 }); });
    api.y += 1.5;
    titulo(`6.2 · Plan B · ${S.planb.length} medidas`);
    if (!S.planb.length) P('(Sin medidas elegidas)', { size: 9.5, i: true, color: COL.muted, sang: 3 });
    PLAN_B.filter(p => S.planb.includes(p[0])).forEach(p => P(p[1], { size: 9.5, sang: 3, marca: '·', tras: .4 }));
    separador(); }
  await caja('f6_brechas', '6.3', 'Brechas de seguridad en tres tecnologías y cómo evitarlas');
  await caja('f6_rgpd', '6.4', 'Cómo cumple la empresa el RGPD');
  await caja('f6_analisis', '6.5', 'Qué datos analizaría y qué decisión tomaría');

  // Fase 7
  banda('Fase 7 · Presupuesto y hoja de ruta', T, COL.lav);
  { const Pr = presupuesto(C);
    titulo('7.1 · Presupuesto (precios orientativos)');
    Pr.filas.forEach(r => texto([{ t: r[1] + ': ', b: true }, { t: `${eur(r[2])} de inversión · ${eur(r[3])} al mes` }], { size: 9.3, sang: 3, marca: '·', tras: .4 }));
    api.y += 1;
    texto([{ t: 'Total: ', b: true }, { t: `${eur(Pr.ini)} de inversión inicial · ${eur(Pr.mes)} al mes · ${eur(Pr.anio)} el primer año` }], { size: 10, sang: 0, tras: .8 });
    fila('Ahorro estimado al mes', isFinite(Pr.ahorro) ? eur(Pr.ahorro) : '', { sang: 0 });
    if (isFinite(Pr.ahorro)) P(Pr.recupera ? `Con ese ahorro, la inversión se recupera en unos ${Pr.recupera} meses.` : 'Con ese ahorro, el gasto mensual es mayor que lo que se ahorra: la inversión no se recupera solo con dinero.', { size: 9.5, i: true, color: COL.mint, tras: 1 });
    api.y += 1.5;
    const f = filasRuta(C), R = u6Ruta();
    titulo('7.2 · Hoja de ruta de 12 meses');
    await u6Imagen(api, svgRuta(C));
    f.forEach(r => fila(r[2], R[r[0]] ? 'mes ' + R[r[0]] : '(sin mes)', { size: 9.3, tras: .3 }));
    separador(); }
  await caja('f7_formacion', '7.3', 'Plan de formación del personal');
  await caja('f7_merece', '7.4', '¿Merece la pena? Conclusión económica');

  // Fase 8
  banda('Fase 8 · El futuro', T, COL.lav);
  await caja('f8_t1', '8.1', 'Una tecnología emergente real para dentro de cinco años');
  await caja('f8_t2', '8.2', 'Una tecnología inventada');
  await caja('f8_reflexion', '8.3', 'Antes y después: qué ha ganado y perdido la empresa, y qué he aprendido');
  { const A = u6Auto();
    titulo('8.4 · Autoevaluación');
    FASES.forEach((f, i) => fila(`Fase ${i + 1} · ${f[2]}`, A[f[0]] ? `${A[f[0]]} de 4 (${ESTRELLAS[A[f[0]] - 1]})` : '(sin valorar)', { size: 9.3, tras: .3 }));
    separador(); }
  await caja('f8_auto', '8.5', 'Explicación de la autoevaluación');
}

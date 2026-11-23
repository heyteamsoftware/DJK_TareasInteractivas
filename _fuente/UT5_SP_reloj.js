// ===== UT5_SP · La pantalla de «24H de Datos»: reloj de 24 h, panel de la franja, resúmenes y ficha de perfil =====
// Se incluye en UT5_SP.js (marca INCLUYE). Los datos y lo que se guarda están allí (campos «dia», «quien» y «tags»).

document.head.insertAdjacentHTML('beforeend', `<style>
.d24-punt{background:#fff6dc;border:1.5px solid #e2b93b;border-radius:12px;padding:.55rem .8rem;margin:.6rem 0 .9rem;font-size:.93rem;color:#5c4300}
.d24{display:grid;grid-template-columns:minmax(260px,400px) minmax(0,1fr);gap:1rem;align-items:start;background:linear-gradient(160deg,#0f172a,#1e1b4b);border-radius:22px;padding:1rem;color:#fff;box-shadow:0 10px 30px rgba(15,23,42,.25)}
.d24-reloj svg{width:100%;height:auto;display:block;filter:drop-shadow(0 6px 18px rgba(0,0,0,.35))}
.d24-reloj .sec{cursor:pointer;outline:none}
.d24-reloj .sec path{stroke:#0f172a;stroke-width:3;transition:filter .15s}
.d24-reloj .sec:hover path,.d24-reloj .sec:focus-visible path{filter:brightness(1.18)}
.d24-reloj .sec.sel path{stroke:#fde047;stroke-width:5}
.d24-reloj .sec.vacia path{opacity:.82}
.d24-reloj text{font-family:inherit;pointer-events:none}
.d24-camino{list-style:none;margin:.6rem 0 0;padding:0;display:grid;gap:.25rem}
.d24-camino button{display:grid;grid-template-columns:5.2rem minmax(0,1fr) auto;gap:.5rem;align-items:center;width:100%;min-height:40px;border:1.5px solid rgba(255,255,255,.14);border-radius:10px;background:rgba(255,255,255,.06);color:#fff;font:inherit;font-size:.86rem;padding:.2rem .6rem;cursor:pointer;text-align:left}
.d24-camino .h{font-weight:800;white-space:nowrap}
.d24-camino .m{letter-spacing:.1em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}
.d24-camino .e{opacity:.85;font-size:.8rem;white-space:nowrap}
.d24-camino li.sel button{border-color:#fde047;background:rgba(253,224,71,.14)}
.d24-camino li.vacia button{opacity:.6}
.d24-ico{display:inline-grid;place-items:center;width:1.7em;height:1.7em;border-radius:24%;flex:none;font-size:1em;line-height:1;box-shadow:inset 0 0 0 1px rgba(0,0,0,.12);vertical-align:middle;overflow:hidden}
.d24-ico svg{width:64%;height:64%;display:block}
.d24-ico.ig{background:linear-gradient(45deg,#f9ce34,#ee2a7b 55%,#6228d7)}
.d24-ico.emo{background:#eef2ff;font-size:.95em}
.d24-ico.g{width:2.4rem;height:2.4rem;font-size:1.3rem}
.d24-ico.p{width:1.35em;height:1.35em}
.d24-edit{margin-top:.7rem}
.d24-edit summary{cursor:pointer;font-weight:700;font-size:.88rem;color:#475467;min-height:36px;display:flex;align-items:center}
.d24-pista{font-size:.82rem;text-align:center;opacity:.85;margin:.4rem 0 0}
.d24-panel{background:#fff;color:#1f2433;border-radius:16px;padding:.8rem .9rem;min-width:0;scroll-margin-top:96px}
.d24-ph{display:flex;gap:.7rem;align-items:center;margin-bottom:.5rem}
.d24-ph .d24-ic{font-size:2rem;line-height:1}
.d24-ph b{display:block;font-size:1.15rem}
.d24-ph small{color:#667085;font-weight:600}
.d24-panel h4{margin:.8rem 0 .4rem;font-size:.82rem;text-transform:uppercase;letter-spacing:.04em;color:#475467;display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
.d24-panel h4 .pt{background:#fff6dc;border:1px solid #e2b93b;color:#5c4300;border-radius:999px;padding:.05rem .55rem;font-size:.72rem;text-transform:none;letter-spacing:0}
.d24-chips{display:flex;flex-wrap:wrap;gap:.4rem}
.d24-chip{display:inline-flex;gap:.35rem;align-items:center;min-height:44px;padding:.3rem .7rem;border:1.5px solid #d0d5dd;border-radius:999px;background:#fff;color:inherit;font:inherit;font-size:.9rem;font-weight:600;cursor:pointer}
.d24-chip:hover{border-color:#7c3aed}
.d24-chip[aria-pressed="true"]{background:#ede9fe;border-color:#7c3aed;color:#4c1d95;box-shadow:inset 0 0 0 1px #7c3aed}
.d24-chip .pto{width:.6rem;height:.6rem;border-radius:50%;flex:none}
.d24-chip.mas{border-style:dashed;color:#7c3aed}
.d24-dorm{display:flex;gap:.5rem;align-items:center;min-height:44px;padding:.3rem .8rem;border:1.5px solid #d0d5dd;border-radius:12px;background:#f8fafc;font:inherit;font-weight:700;cursor:pointer;color:inherit;width:100%}
.d24-dorm[aria-pressed="true"]{background:#1e1b4b;border-color:#1e1b4b;color:#fff}
.d24-aviso{font-size:.85rem;background:#eef2ff;border-radius:10px;padding:.4rem .6rem;margin:.5rem 0 0;color:#3730a3}
.d24-nav{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:space-between;margin-top:.9rem}
.d24-btn{min-height:44px;border-radius:12px;border:1.5px solid #d0d5dd;background:#fff;color:inherit;font:inherit;font-weight:700;padding:.4rem .9rem;cursor:pointer}
.d24-btn.pri{background:#7c3aed;border-color:#7c3aed;color:#fff}
.d24-btn:disabled{opacity:.45;cursor:not-allowed}
.d24-emp{display:grid;gap:.4rem}
.d24-emp button{min-height:46px;text-align:left;border:2px solid #d0d5dd;border-radius:12px;background:#fff;color:inherit;font:inherit;font-weight:700;padding:.4rem .8rem;cursor:pointer}
.d24-emp button[aria-pressed="true"]{border-color:#7c3aed;background:#ede9fe}
.d24-in{width:100%;min-height:44px;border:1.5px solid #d0d5dd;border-radius:10px;padding:.35rem .6rem;font:inherit;margin-bottom:.4rem}
.d24-marc{display:flex;flex-wrap:wrap;gap:.4rem .9rem;align-items:center;background:var(--lav);border:1.5px solid var(--lav2);border-radius:14px;padding:.6rem .9rem;margin:.9rem 0;font-weight:600}
.d24-cols{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:.8rem}
.d24-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:.8rem .9rem}
.d24-card h4{margin:.1rem 0 .6rem;font-size:.95rem}
.d24-card h4+.d24-vacio{margin-top:0}
.d24-rk{display:grid;gap:.55rem}
.d24-rk .fila b{display:flex;justify-content:space-between;gap:.5rem;font-size:.92rem}
.d24-rk .barra{height:12px;border-radius:999px;background:#eef0f4;overflow:hidden;margin:.2rem 0}
.d24-rk .barra i{display:block;height:100%;border-radius:999px;transition:width .5s}
.d24-rk small{color:var(--muted);font-size:.82rem}
.d24-dn{display:grid;grid-template-columns:1fr 1fr;gap:.5rem;margin-bottom:.7rem}
.d24-dn div{border-radius:12px;padding:.5rem;text-align:center;font-weight:700}
.d24-dn .dia{background:#fff7d6;color:#7a5200}.d24-dn .noche{background:#1e1b4b;color:#fff}
.d24-dn strong{display:block;font-size:1.7rem;line-height:1.1}
.d24-mini{display:flex;flex-wrap:wrap;gap:.35rem;margin:.2rem 0 .7rem}
.d24-mini span{background:#f3f4f8;border-radius:999px;padding:.15rem .55rem;font-size:.85rem;font-weight:600}
.d24-vacio{color:var(--muted);font-size:.9rem;margin:.2rem 0}
.d24-h{margin:1.4rem 0 .3rem;font-size:1.1rem}
.d24-det{display:grid;gap:.5rem;margin:.6rem 0 1rem}
.d24-det div{background:#fff;border:1px solid var(--line);border-left:6px solid var(--c,#7c3aed);border-radius:12px;padding:.5rem .8rem;font-size:.93rem}
.d24-caja{background:#fff;border:1px solid var(--line);border-radius:16px;padding:.8rem .9rem;margin:.9rem 0}
.d24-caja .et{font-weight:700;margin-bottom:.5rem}
.d24-caja .et .n{background:var(--lav3);color:#fff;border-radius:999px;padding:.05rem .6rem;font-size:.85rem;margin-right:.4rem}
.d24-ficha{background:linear-gradient(160deg,#0f172a,#312e81);color:#fff;border-radius:20px;padding:1rem;margin:.8rem 0;display:grid;grid-template-columns:auto minmax(0,1fr);gap:1rem;align-items:center}
.d24-ficha .foto{width:92px;height:92px;border-radius:50%;background:#fde047;display:grid;place-items:center;font-size:3rem;box-shadow:0 0 0 4px rgba(255,255,255,.25)}
.d24-ficha .id{font-weight:800;letter-spacing:.12em;font-size:.8rem;opacity:.8}
.d24-ficha .nom{font-size:1.25rem;font-weight:800;margin:.1rem 0 .5rem}
.d24-ficha dl{display:grid;grid-template-columns:auto minmax(0,1fr);gap:.2rem .7rem;margin:0;font-size:.9rem}
.d24-ficha dt{opacity:.75}.d24-ficha dd{margin:0;font-weight:600}
.d24-barras{grid-column:1/-1;display:grid;grid-template-columns:repeat(8,1fr);gap:.3rem;align-items:end;height:74px;margin-top:.3rem}
.d24-barras div{display:flex;flex-direction:column;justify-content:flex-end;align-items:center;height:100%;font-size:.68rem;opacity:.9}
.d24-barras i{display:block;width:100%;min-height:3px;border-radius:5px 5px 0 0;background:#fde047}
.d24-barras .n i{background:#818cf8}
.d24-form{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:.6rem}
.d24-form label{display:flex;flex-direction:column;gap:.25rem;font-weight:600;font-size:.9rem}
.d24-form select,.d24-form input,.d24-tags input{min-height:44px;border:1.5px solid var(--line);border-radius:10px;padding:.35rem .6rem;font:inherit;background:#fff;min-width:0}
.d24-tags{display:flex;flex-wrap:wrap;gap:.4rem;align-items:center}
.d24-tag{display:inline-flex;align-items:center;gap:.2rem;background:var(--lav);border:1.5px solid var(--lav2);border-radius:999px;padding:.1rem .2rem .1rem .7rem;font-weight:700}
.d24-tag button{width:36px;height:36px;border:0;background:none;cursor:pointer;font-size:1rem;color:inherit;border-radius:50%}
.d24-tags .nuevo{display:flex;gap:.4rem;flex:1 1 240px}
.d24-tags .nuevo input{flex:1}
.d24-noticia{display:flex;gap:.8rem;align-items:center;border:2px solid var(--lav2);background:#fff;border-radius:16px;padding:.8rem 1rem;margin:.6rem 0 1rem;color:inherit;text-decoration:none}
.d24-noticia:hover,.d24-noticia:focus-visible{border-color:var(--lav3);background:var(--lav)}
.d24-noticia .ic{font-size:2rem}
.d24-noticia small{display:block;color:var(--muted)}
.d24-opinion{display:grid;grid-template-columns:repeat(5,1fr);gap:.4rem}
.d24-opinion label{cursor:pointer}
.d24-opinion input{position:absolute;opacity:0;pointer-events:none}
.d24-opinion span{display:flex;flex-direction:column;align-items:center;gap:.2rem;min-height:64px;justify-content:center;border:2px solid var(--line);border-radius:14px;background:#fff;font-size:1.6rem;padding:.3rem .2rem;text-align:center}
.d24-opinion small{font-size:.72rem;font-weight:700;line-height:1.1}
.d24-opinion input:checked+span{border-color:var(--lav3);background:var(--lav);box-shadow:inset 0 0 0 1px var(--lav3)}
.d24-opinion input:focus-visible+span{outline:2px solid var(--lav3)}
.d24-cuenta{display:inline-block;margin:.2rem 0 .5rem;font-weight:700;font-size:.88rem;border-radius:999px;padding:.15rem .7rem;background:#fde4ea;color:#8a2444}
.d24-cuenta.ok{background:#dff3ea;color:#1d5a40}
@media (max-width:820px){.d24{grid-template-columns:1fr;padding:.7rem}.d24-reloj{max-width:380px;margin:0 auto;width:100%}.d24-ficha{grid-template-columns:1fr;justify-items:center;text-align:center}.d24-ficha dl{text-align:left}.d24-opinion span{font-size:1.3rem;min-height:60px}.d24-opinion small{font-size:.62rem}}
@media (prefers-reduced-motion:reduce){.d24 *{transition:none!important}}
</style>`);

// ---------- estado de la pantalla (no se guarda) ----------
const V = { sel: 2, nueva: null, pint: {}, para: '' };
const ICONO_FR = t => ({ n: '🌙', a: '🌅', d: '☀️', t: '🌇' }[t]);
const TXT_FR = t => ({ n: 'de noche', a: 'al amanecer', d: 'de día', t: 'al atardecer' }[t]);
const COL_FR = { n: '#1e2a6b', a: '#fb923c', d: '#38bdf8', t: '#a78bfa' };

// ---------- iconos de las apps (tecla de color con el dibujo de la app; si no hay, un emoji) ----------
function icoHTML(a, cls){
  const I = ICONOS[a.id];
  if (!I) return `<span class="d24-ico emo ${cls || ''}" aria-hidden="true">${a.ic}</span>`;
  return `<span class="d24-ico ${I[1] === 'ig' ? 'ig' : ''} ${cls || ''}" style="${I[1] === 'ig' ? '' : 'background:' + I[1]}" aria-hidden="true"><svg viewBox="0 0 24 24"><path d="${I[0]}" fill="${I[2]}"${I[3] ? ` stroke="${I[3]}" stroke-width="1.2"` : ''}/></svg></span>`;
}
function icoSVG(a, x, y, t){
  const I = ICONOS[a.id], f1 = n => Math.round(n * 10) / 10;
  if (!I) return `<text x="${f1(x)}" y="${f1(y + t * .34)}" font-size="${f1(t * .9)}" text-anchor="middle">${a.ic}</text>`;
  const k = t * .62 / 24;
  return `<g transform="translate(${f1(x - t / 2)} ${f1(y - t / 2)})"><rect width="${t}" height="${t}" rx="${f1(t * .24)}" fill="${I[1] === 'ig' ? 'url(#d24ig)' : I[1]}" stroke="rgba(0,0,0,.18)" stroke-width=".6"/><path transform="translate(${f1(t * .19)} ${f1(t * .19)}) scale(${f1(k * 100) / 100})" d="${I[0]}" fill="${I[2]}"${I[3] ? ` stroke="${I[3]}" stroke-width="1.2"` : ''}/></g>`;
}

// ---------- el reloj ----------
function relojSVG(D){
  const P = (r, g) => { const a = g * Math.PI / 180; return [200 + r * Math.cos(a), 200 + r * Math.sin(a)]; };
  const f1 = n => Math.round(n * 10) / 10, pt = (r, g) => P(r, g).map(f1).join(' ');
  let s = '';
  FRANJAS.forEach((f, i) => {
    const a0 = -90 + i * 45, a1 = a0 + 45, am = a0 + 22.5, n = migasDe(D, i), noche = f[2] === 'n';
    const apps = D.f[i].a.filter(id => D.apps[id]).map(id => infoApp(D, id));
    const d = `M${pt(190, a0)} A190 190 0 0 1 ${pt(190, a1)} L${pt(76, a1)} A76 76 0 0 0 ${pt(76, a0)} Z`;
    const [hx, hy] = P(170, am), [cx, cy] = P(100, am);
    let dentro = '';
    apps.slice(0, 4).forEach((a, k) => { const [x, y] = P(138, a0 + 8 + k * 9.6); dentro += icoSVG(a, x, y, 20); });
    if (noche) for (let k = 0; k < 5; k++){ const [x, y] = P(88 + (k * 37 % 90), a0 + 4 + (k * 53 % 37)); dentro = `<circle cx="${f1(x)}" cy="${f1(y)}" r="${k % 2 ? 1.1 : 1.6}" fill="#fff" opacity=".7"/>` + dentro; }
    s += `<g class="sec${i === V.sel ? ' sel' : ''}${franjaHecha(D, i) ? '' : ' vacia'}" data-fr="${i}" role="button" tabindex="0" aria-label="Franja de ${f[0]} a ${f[1]}: ${D.f[i].z && !n ? 'durmiendo' : n + (n === 1 ? ' miga' : ' migas')}">
      <path d="${d}" fill="${COL_FR[f[2]]}"/>${dentro}
      <text x="${f1(hx)}" y="${f1(hy + 4)}" font-size="12.5" font-weight="800" text-anchor="middle" fill="${noche ? '#fff' : '#0f172a'}">${f[0].slice(0, 2)}–${f[1].slice(0, 2)}</text>
      <text x="${f1(cx)}" y="${f1(cy + 5)}" font-size="${n || !D.f[i].z ? 14 : 16}" font-weight="800" text-anchor="middle" fill="${noche ? '#fde047' : '#0f172a'}">${n ? n : D.f[i].z ? '😴' : '+'}</text></g>`;
  });
  const F = FRANJAS[V.sel], total = FRANJAS.reduce((n, _, i) => n + migasDe(D, i), 0);
  return `<svg viewBox="0 0 400 400" role="group" aria-label="Reloj de 24 horas con 8 franjas de 3 horas"><defs><linearGradient id="d24ig" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#f9ce34"/><stop offset=".55" stop-color="#ee2a7b"/><stop offset="1" stop-color="#6228d7"/></linearGradient></defs>${s}
    <circle cx="200" cy="200" r="66" fill="#fff"/>
    <text x="200" y="186" font-size="30" text-anchor="middle">${ICONO_FR(F[2])}</text>
    <text x="200" y="212" font-size="17" font-weight="800" text-anchor="middle" fill="#0f172a">${F[0]}–${F[1]}</text>
    <text x="200" y="232" font-size="11.5" font-weight="700" text-anchor="middle" fill="#667085">${total} ${total === 1 ? 'miga' : 'migas'} hoy</text></svg>
    <p class="d24-pista">Toca una franja para dejar tus migas. Llevas ${franjasHechas(D)} de ${FRANJAS.length}.</p>
    <ol class="d24-camino" aria-label="Tu camino de migas digitales">${FRANJAS.map((f, i) => { const x = D.f[i], apps = x.a.filter(id => D.apps[id]).map(id => icoHTML(infoApp(D, id), 'p')), dis = x.d.map(id => (DISPOSITIVOS.find(d => d[0] === id) || [])[1]).filter(Boolean);
      return `<li class="${i === V.sel ? 'sel' : ''}${franjaHecha(D, i) ? '' : ' vacia'}"><button type="button" data-fr="${i}"><span class="h">${ICONO_FR(f[2])} ${f[0].slice(0, 2)}–${f[1].slice(0, 2)}</span><span class="m">${x.z ? '😴 ' : ''}${apps.join(' ') || (x.z ? '' : '· · ·')}</span><span class="e">${dis.join('')}</span></button></li>`; }).join('')}</ol>`;
}

// ---------- el panel de la franja ----------
// Empresas entre las que elige el alumno (todas, por orden alfabético, y «No lo sé» al final)
const opcionesEmpresa = () => [...Object.keys(EMPRESAS).filter(k => k !== 'ns').sort((a, b) => EMPRESAS[a][0].localeCompare(EMPRESAS[b][0])), 'ns'];
function panelHTML(D){
  if (V.nueva){
    const N = V.nueva, a = N.propia ? { id: N.id || '', ic: '📲', n: N.n || 'Otra app', propia: true } : infoApp(D, N.id);
    const listo = N.dt.length > 0 && (N.propia ? N.n.trim() && N.en.trim() : !!N.e);
    return `<div class="d24-ph">${icoHTML(a, 'g')}<div><b>${N.editar ? 'Cambiar la miga' : 'Nueva miga'}: ${esc(N.propia && !N.editar ? 'otra app' : a.n)}</b><small>${N.editar ? 'Puedes cambiarlo las veces que quieras' : 'Solo te lo preguntamos la primera vez'}</small></div></div>
      ${N.propia ? `<input class="d24-in" type="text" maxlength="30" data-nn placeholder="Nombre de la app" value="${esc(N.n)}" aria-label="Nombre de la app">` : ''}
      <h4>1 · ¿Qué datos le dejas?</h4>
      <div class="d24-chips">${DATOS.map(d => `<button type="button" class="d24-chip" data-ndt="${d[0]}" aria-pressed="${N.dt.includes(d[0])}">${d[1]} ${esc(d[2])}</button>`).join('')}</div>
      <h4>2 · ¿Qué empresa crees que guarda esos datos?</h4>
      ${N.propia ? `<input class="d24-in" type="text" maxlength="40" data-ne placeholder="Empresa dueña de la app (búscala si no lo sabes)" value="${esc(N.en)}" aria-label="Empresa dueña de la app">`
        : `<div class="d24-chips" role="radiogroup" aria-label="Empresa">${opcionesEmpresa().map(k => `<button type="button" class="d24-chip" role="radio" data-nemp="${k}" aria-pressed="${N.e === k}" aria-checked="${N.e === k}"><span class="pto" style="background:${EMPRESAS[k][1]}"></span>${esc(EMPRESAS[k][0])}</button>`).join('')}</div>`}
      <div class="d24-nav"><button type="button" class="d24-btn" data-ncancel="1">Cancelar</button><button type="button" class="d24-btn pri" data-nguardar="1"${listo ? '' : ' disabled'}>${N.editar ? 'Guardar los cambios' : 'Guardar la miga'}</button></div>`;
  }
  const i = V.sel, F = FRANJAS[i], x = D.f[i], cuenta = ['movil', 'reloj', 'pulsera', 'anillo'].filter(k => x.d.includes(k));
  return `<div class="d24-ph"><span class="d24-ic">${ICONO_FR(F[2])}</span><div><b>${F[0]} – ${F[1]}</b><small>Franja ${i + 1} de ${FRANJAS.length} · ${TXT_FR(F[2])}</small></div></div>
    <button type="button" class="d24-dorm" data-dorm="1" aria-pressed="${x.z}">😴 En esta franja estoy durmiendo</button>
    ${x.z ? `<p class="d24-aviso">${cuenta.length ? 'Tú duermes, pero lo que tienes cerca sigue contando: tu sueño, tu pulso, dónde estás…' : 'Aunque duermas, lo que tengas encima o en la mesilla sigue enviando datos. ¿Llevas reloj? ¿Dónde dejas el móvil?'}</p>` : ''}
    <h4>¿Qué llevas encima o tienes cerca?</h4>
    <div class="d24-chips">${DISPOSITIVOS.map(d => `<button type="button" class="d24-chip" data-dis="${d[0]}" aria-pressed="${x.d.includes(d[0])}">${d[1]} ${esc(d[2])}</button>`).join('')}</div>
    <h4>¿Qué apps usas en esta franja?</h4>
    <div class="d24-chips">${APPS.map(a => `<button type="button" class="d24-chip" data-app="${a[0]}" aria-pressed="${x.a.includes(a[0])}">${icoHTML({ id: a[0], ic: a[1] })} ${esc(a[2])}</button>`).join('')}
      ${Object.keys(D.apps).filter(id => !appDe(id)).map(id => `<button type="button" class="d24-chip" data-app="${esc(id)}" aria-pressed="${x.a.includes(id)}">${icoHTML({ id, ic: '📲' })} ${esc(D.apps[id].n || 'Otra app')}</button>`).join('')}
      <button type="button" class="d24-chip mas" data-otra="1">➕ Otra app</button></div>
    ${Object.keys(D.apps).length ? `<details class="d24-edit"><summary>✏️ Cambiar los datos o la empresa de una app</summary><div class="d24-chips">${Object.keys(D.apps).map(id => { const a = infoApp(D, id); return `<button type="button" class="d24-chip" data-edit="${esc(id)}">${icoHTML(a)} ${esc(a.n)} · ${esc(empresaVista(D, a))}</button>`; }).join('')}</div></details>` : ''}
    <div class="d24-nav"><button type="button" class="d24-btn" data-copia="1" title="Copia las apps y lo que llevas encima de la franja anterior">⧉ Igual que la franja anterior</button><button type="button" class="d24-btn pri" data-sig="1">Siguiente franja ▶</button></div>`;
}

// ---------- resúmenes ----------
function resumenHTML(D){
  const R = ranking(D), ac = aciertosEmp(D), total = FRANJAS.reduce((n, _, i) => n + migasDe(D, i), 0), noche = FRANJAS.reduce((n, _, i) => n + (ES_NOCHE(i) ? migasDe(D, i) : 0), 0);
  const max = Math.max(1, ...R.map(r => r.migas)), dt = {}, dis = {};
  FRANJAS.forEach((_, i) => { D.f[i].a.forEach(id => (D.apps[id] ? D.apps[id].dt || [] : []).forEach(k => { dt[k] = (dt[k] || 0) + 1; })); D.f[i].d.forEach(k => { dis[k] = (dis[k] || 0) + 1; }); });
  const na = appsUsadas(D).length;
  return `<div class="d24-marc"><span>🍪 ${total} ${total === 1 ? 'miga' : 'migas'} · ${na} ${na === 1 ? 'app' : 'apps'}${na < MIN_APPS ? ` (mínimo ${MIN_APPS})` : ''}</span><span>🕒 ${franjasHechas(D)} de ${FRANJAS.length} franjas</span></div>
  <div class="d24-cols">
    <div class="d24-card"><h4>🏢 ¿Quién se queda con tus migas?</h4>${R.length ? `<div class="d24-rk">${R.map(r => `<div class="fila"><b><span>${esc(r.n)}</span><span>${r.migas}</span></b><div class="barra"><i style="width:${Math.round(r.migas / max * 100)}%;background:${r.col}"></i></div><small>${[...r.ids].map(id => icoHTML(infoApp(D, id), 'p')).join(' ')} ${esc([...r.apps].join(', '))}</small></div>`).join('')}</div>` : '<p class="d24-vacio">Aún no has dejado ninguna miga.</p>'}</div>
    <div class="d24-card"><h4>🌗 De día y de noche</h4><div class="d24-dn"><div class="dia"><strong>${total - noche}</strong>migas de día</div><div class="noche"><strong>${noche}</strong>migas de noche</div></div>
      <h4>🧾 Qué datos dejas</h4><div class="d24-mini">${DATOS.filter(d => dt[d[0]]).map(d => `<span>${d[1]} ${esc(d[2])} ×${dt[d[0]]}</span>`).join('') || '<span>Todavía ninguno</span>'}</div>
      <h4>🎒 Lo que llevas encima</h4><div class="d24-mini">${DISPOSITIVOS.filter(d => dis[d[0]]).map(d => `<span>${d[1]} ${esc(d[2])} · ${dis[d[0]]} ${dis[d[0]] === 1 ? 'franja' : 'franjas'}</span>`).join('') || '<span>Todavía nada</span>'}</div></div>
  </div>`;
}
function detectiveHTML(D){
  const R = ranking(D).slice(0, 3);
  if (!R.length) return '<p class="d24-vacio">Cuando tengas migas en el reloj, aquí verás qué sabe de ti cada empresa.</p>';
  return `<div class="d24-det">${R.map((r, k) => `<div style="--c:${r.col}"><b>${k + 1} · ${esc(r.n)}</b> tiene ${r.migas} ${r.migas === 1 ? 'miga tuya' : 'migas tuyas'}: ${esc([...r.dt].map(nombreDato).join(', ').toLowerCase() || 'sin datos marcados')}. Te ve en las franjas ${esc(horasDe(r.fr))}.</div>`).join('')}</div>`;
}
function fichaHTML(D){
  const cuentas = FRANJAS.map((_, i) => migasDe(D, i)), max = Math.max(1, ...cuentas), top = cuentas.indexOf(Math.max(...cuentas));
  const usos = {}; FRANJAS.forEach((_, i) => D.f[i].a.forEach(id => { if (D.apps[id]) usos[id] = (usos[id] || 0) + 1; }));
  const apps = Object.keys(usos).sort((a, b) => usos[b] - usos[a]).slice(0, 3).map(id => infoApp(D, id).n);
  const dis = [...new Set(Object.values(D.f).flatMap(x => x.d))].map(id => (DISPOSITIVOS.find(d => d[0] === id) || [])[1]).filter(Boolean);
  const dt = {}; Object.keys(usos).forEach(id => (D.apps[id].dt || []).forEach(k => { dt[k] = (dt[k] || 0) + usos[id]; }));
  const datos = Object.keys(dt).sort((a, b) => dt[b] - dt[a]).slice(0, 3).map(nombreDato);
  return `<div class="foto">${cuentas[top] ? (ES_NOCHE(top) ? '🦉' : '🙂') : '👤'}</div>
    <div><div class="id">PERFIL DE BIG DATA · DATOS IMPLÍCITOS</div><div class="nom">Usuario nº ${numUsuario(D)}</div>
      <dl><dt>Franja más activa</dt><dd>${cuentas[top] ? FRANJAS[top][0] + '–' + FRANJAS[top][1] : '—'}</dd>
      <dt>Apps que más usa</dt><dd>${esc(apps.join(', ') || '—')}</dd><dt>Datos que más deja</dt><dd>${esc(datos.join(', ') || '—')}</dd><dt>Lleva encima</dt><dd>${dis.join(' ') || '—'}</dd></dl></div>
    <div class="d24-barras" aria-hidden="true">${FRANJAS.map((f, i) => `<div class="${f[2] === 'n' ? 'n' : ''}"><i style="height:${Math.round(cuentas[i] / max * 100)}%"></i>${f[0].slice(0, 2)}h</div>`).join('')}</div>`;
}

// ---------- pintar (lo llama alActualizar en cada cambio; solo repinta lo que ha cambiado) ----------
function rSync(){
  const box = document.getElementById('d24'); if (!box) return;
  const para = ESP + '|' + (NOMBRE || '');
  if (V.para !== para || !box.dataset.ok){
    V.para = para; V.pint = {}; V.nueva = null; box.dataset.ok = '1';
    const D0 = dia();
    if (!D0.s && !EJEMPLO){ D0.s = 1 + Math.floor(Math.random() * 2147483646); pon('dia', D0); }
    const vacia = FRANJAS.findIndex((_, i) => !franjaHecha(D0, i)); V.sel = vacia < 0 ? 2 : vacia === 0 && !Object.keys(D0.apps).length ? 2 : vacia;
  }
  const D = dia(), kd = campo('dia') + '|' + V.sel + '|' + JSON.stringify(V.nueva);
  if (V.pint.dia !== kd){
    V.pint.dia = kd;
    const foco = document.activeElement && box.contains(document.activeElement) ? Object.entries(document.activeElement.dataset)[0] : null;
    const cur = foco && document.activeElement.matches('input') ? [document.activeElement.selectionStart, document.activeElement.selectionEnd] : null;
    document.getElementById('d24Reloj').innerHTML = relojSVG(D);
    document.getElementById('d24Panel').innerHTML = panelHTML(D);
    document.getElementById('d24Res').innerHTML = resumenHTML(D);
    document.getElementById('d24Det').innerHTML = detectiveHTML(D);
    document.getElementById('d24Ficha').innerHTML = fichaHTML(D);
    if (foco){ const el = box.querySelector(`[data-${foco[0].replace(/[A-Z]/g, m => '-' + m.toLowerCase())}="${String(foco[1]).replace(/"/g, '\\"')}"]`); if (el){ el.focus({ preventScroll: true }); if (cur && el.setSelectionRange) try { el.setSelectionRange(cur[0], cur[1]); } catch(e){} } }
  }
  const kq = campo('quien');
  if (V.pint.quien !== kq){ V.pint.quien = kq; const q = quien(); document.getElementById('d24Quien').innerHTML = QUIEN.map(x => `<button type="button" class="d24-chip" data-quien="${x[0]}" aria-pressed="${q.includes(x[0])}">${esc(x[1])}</button>`).join(''); }
  const kt = campo('tags');
  if (V.pint.tags !== kt){ V.pint.tags = kt; const t = tags();
    document.getElementById('d24Tags').innerHTML = t.map((x, k) => `<span class="d24-tag">${esc(x)}<button type="button" data-tagx="${k}" aria-label="Quitar la etiqueta ${esc(x)}">✕</button></span>`).join('') +
      (t.length < MAX_TAGS ? `<span class="nuevo"><input type="text" maxlength="40" id="d24TagIn" placeholder="Escribe una etiqueta…" aria-label="Nueva etiqueta"><button type="button" class="d24-btn pri" data-tagadd="1">Añadir</button></span>` : '') +
      `<small style="flex-basis:100%;color:var(--muted)">${t.length} de ${MIN_TAGS} como mínimo</small>`; }
  const c = document.getElementById('d24Cuenta');
  if (c){ const n = palabras('c_reflexion'); c.className = 'd24-cuenta' + (n >= MIN_PALABRAS ? ' ok' : ''); c.textContent = n >= MIN_PALABRAS ? `✅ ${n} palabras` : `${n} ${n === 1 ? 'palabra' : 'palabras'} · te faltan ${MIN_PALABRAS - n}`; }
}
function alActualizar(){ rSync(); }

// ---------- interacciones ----------
const cambia = (l, x) => l.includes(x) ? l.filter(y => y !== x) : [...l, x];
function ponDia(D){ pon('dia', { s: D.s, f: D.f, apps: D.apps }); actualizarProgreso(); }
function elegirFranja(i){
  V.sel = (i + FRANJAS.length) % FRANJAS.length; V.nueva = null; rSync();
  // en móvil el panel queda debajo del reloj: se baja hasta él
  if (matchMedia('(max-width:820px)').matches){ const p = document.getElementById('d24Panel'); if (p) p.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' }); }
}
function guardarMiga(){
  const D = dia(), N = V.nueva; if (!N || !N.dt.length) return;
  let id = N.id;
  if (N.propia){ if (!N.n.trim() || !N.en.trim()) return; if (!N.editar) id = 'p' + Date.now().toString(36); D.apps[id] = { dt: N.dt, n: N.n.trim().slice(0, 30), en: N.en.trim().slice(0, 40) }; }
  else { if (!N.e) return; D.apps[id] = { dt: N.dt, e: N.e }; }
  if (!N.editar && !D.f[V.sel].a.includes(id)) D.f[V.sel].a.push(id);
  V.nueva = null; ponDia(D); if (!EJEMPLO) guardarYa();
  aviso(N.editar ? '🍪 Miga cambiada' : '🍪 Miga guardada', 1800);
}
document.addEventListener('click', e => {
  const t = e.target.closest ? e.target.closest('#d24 [data-fr], #d24 [data-app], #d24 [data-dis], #d24 [data-dorm], #d24 [data-otra], #d24 [data-copia], #d24 [data-sig], #d24 [data-ndt], #d24 [data-nemp], #d24 [data-ncancel], #d24 [data-nguardar], #d24 [data-edit], #d24Quien [data-quien], #d24Tags [data-tagx], #d24Tags [data-tagadd]') : null;
  if (!t) return;
  const d = t.dataset, D = dia(), x = D.f[V.sel];
  if (d.fr !== undefined) return elegirFranja(+d.fr);
  if (d.quien){ pon('quien', cambia(quien(), d.quien)); return rSync(); }
  if (d.tagx !== undefined){ const l = tags(); l.splice(+d.tagx, 1); pon('tags', l); actualizarProgreso(); return; }
  if (d.tagadd){ const i = document.getElementById('d24TagIn'), v = i ? i.value.trim().replace(/\s+/g, ' ') : ''; if (!v) return; const l = tags(); if (!l.some(y => y.toLowerCase() === v.toLowerCase())) l.push(v); pon('tags', l); actualizarProgreso(); const n = document.getElementById('d24TagIn'); if (n) n.focus(); return; }
  if (d.ndt){ V.nueva.dt = cambia(V.nueva.dt, d.ndt); return rSync(); }
  if (d.nemp){ V.nueva.e = d.nemp; return rSync(); }
  if (d.ncancel){ V.nueva = null; return rSync(); }
  if (d.nguardar) return guardarMiga();
  if (d.otra){ V.nueva = { propia: true, dt: [], n: '', en: '' }; return rSync(); }
  if (d.edit){ const o = D.apps[d.edit]; if (!o) return; V.nueva = appDe(d.edit) ? { id: d.edit, dt: [...(o.dt || [])], e: EMPRESAS[o.e] ? o.e : null, editar: true } : { id: d.edit, propia: true, dt: [...(o.dt || [])], n: o.n || '', en: o.en || '', editar: true }; return rSync(); }
  if (d.app){
    if (!D.apps[d.app]){ V.nueva = { id: d.app, dt: [], e: null }; return rSync(); }   // primera vez: qué datos y de quién es
    x.a = cambia(x.a, d.app); return ponDia(D);
  }
  if (d.dis){ x.d = cambia(x.d, d.dis); return ponDia(D); }
  if (d.dorm){ x.z = !x.z; return ponDia(D); }
  if (d.copia){ const p = D.f[(V.sel + FRANJAS.length - 1) % FRANJAS.length]; if (!p.a.length && !p.d.length){ aviso('La franja anterior está vacía.'); return; } x.a = [...new Set([...x.a, ...p.a])]; x.d = [...new Set([...x.d, ...p.d])]; return ponDia(D); }
  if (d.sig) return elegirFranja(V.sel + 1);
});
document.addEventListener('input', e => {
  const t = e.target; if (!t.matches || !V.nueva) return;
  if (t.matches('#d24 [data-nn]')) V.nueva.n = t.value; else if (t.matches('#d24 [data-ne]')) V.nueva.en = t.value; else return;
  const b = document.querySelector('#d24 [data-nguardar]'); if (b) b.disabled = !(V.nueva.dt.length && V.nueva.n.trim() && V.nueva.en.trim());
  V.pint.dia = campo('dia') + '|' + V.sel + '|' + JSON.stringify(V.nueva);
});
document.addEventListener('keydown', e => {
  const t = e.target; if (!t.closest) return;
  if (t.closest('#d24 .sec') && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); elegirFranja(+t.closest('.sec').dataset.fr); }
  if (t.id === 'd24TagIn' && e.key === 'Enter'){ e.preventDefault(); const b = document.querySelector('#d24Tags [data-tagadd]'); if (b) b.click(); }
});

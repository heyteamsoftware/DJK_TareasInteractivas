// ===== UT6_SP · parte interactiva: las 8 fases =====
// Se incluye en UT6_SP.js. Las partes interactivas se guardan como JSON en campos ocultos (como en UT3_SP).
// Cada zona que se repinta guarda su «firma» en data-f: solo se vuelve a pintar si cambia lo que muestra
// (así no se pierde el foco mientras el alumno escribe).
const MAX_SALA = 6, MAX_LOCAL = 14, MIN_LOCAL = 8, MIN_ORG = 6, MAX_ORG = 14, MIN_DIGI = 5;
const MIN_PIEZAS = 3, MAX_PIEZAS = 6, MIN_DATOS = 4, MIN_PLANB = 4;
const FORMACION_PERSONA = 60;   // € por persona: curso inicial de formación (orientativo)
const LOGO_ICONOS = ['🌱', '⭐', '🏠', '🤝', '💛', '🌈', '🧭', '🔆', '🌊', '🏔️', '🌻', '🛡️', '💡', '🦋', '🐢', '🌍'];
const LOGO_COLORES = ['#B45309', '#2F7D5C', '#2F5F98', '#A33C58', '#6A54B8', '#0E7F96', '#C2410C', '#3D3A48'];
const NIVELES = [[1, 'Dirección'], [2, 'Mando intermedio'], [3, 'Equipo']];
const ROL_OTRO = ['otro', '👤', 'Otro puesto', 3];
const ESTRELLAS = ['Me ha costado mucho', 'Mejorable', 'Bien', 'Muy bien'];
const FASES = [['f1', '🏢', 'Tu empresa'], ['f2', '🗄️', 'El local analógico'], ['f3', '👥', 'Organigrama'], ['f4', '⚡', '¡Digitalízalo!'],
  ['f5', '🤖', 'Tu robot asistente'], ['f6', '🔒', 'Datos y seguridad'], ['f7', '💶', 'Presupuesto y hoja de ruta'], ['f8', '🚀', 'El futuro']];
const SENSIBLES = ['salud', 'banco', 'dni', 'social', 'discapacidad', 'afectados', 'video', 'desarrollo', 'imagen'];
const TONOS_SALA = ['#fdf1dc', '#e6f3ec', '#e7eefb', '#fbeaf0'];

// ===== estado =====
const leeJSON = (n, def) => { try { const o = JSON.parse(campo(n) || 'null'); return o && typeof o === 'object' ? o : def; } catch(e){ return def; } };
const ocultoEl = n => document.querySelector(`input[data-campo="${n}"]`);
function pon(n, o){ const el = ocultoEl(n); if (!el) return; el.value = JSON.stringify(o); programarGuardado(); }
// Guarda lo escrito sin repintar la zona donde se escribe (se le pone ya la firma nueva)
function ponEscribiendo(n, o, zona, firma){
  const el = ocultoEl(n); if (!el) return; el.value = JSON.stringify(o);
  const z = document.getElementById(zona); if (z) z.dataset.f = firma();
  programarGuardado();
}
const C_ACT = () => CICLOS[ESP] || CICLOS[ORDEN[0]];
const txt = (s, n) => String(s == null ? '' : s).slice(0, n);
const nuevoId = p => p + Date.now().toString(36) + Math.floor(Math.random() * 1e3);
const eur = n => Math.round(n).toLocaleString('es-ES') + ' €';
const num = s => { const t = String(s || '').replace(/[^\d,.]/g, '').replace(/\.(?=\d{3}(\D|$))/g, '').replace(',', '.'); const n = parseFloat(t); return isFinite(n) ? n : NaN; };
const analogDe = (C, id) => C.analogBank.find(a => a[0] === id);
const digitalDe = (C, id) => C.digitalBank.find(d => d[0] === id);
const salaDe = (C, id) => C.salas.find(s => s[0] === id);
const rolesDe = C => [...C.roles, ROL_OTRO];
const rolDe = (C, id) => rolesDe(C).find(r => r[0] === id);
const robotDe = id => ROBOTS.find(r => r[0] === id);

function u6Logo(){ const o = leeJSON('logo', {}); return { ic: LOGO_ICONOS.includes(o.ic) ? o.ic : '', col: LOGO_COLORES.includes(o.col) ? o.col : '' }; }
function u6Local(C){
  const o = leeJSON('local', {}), vistos = new Set(), it = [];
  for (const x of (Array.isArray(o.it) ? o.it : [])){
    if (!x || !analogDe(C, x.id) || !salaDe(C, x.sala) || vistos.has(x.id)) continue;
    vistos.add(x.id); it.push({ id: x.id, sala: x.sala, prob: txt(x.prob, 200) });
  }
  return { it: it.slice(0, MAX_LOCAL) };
}
function u6Org(C){
  const o = leeJSON('org', {}), p = [];
  for (const x of (Array.isArray(o.p) ? o.p : [])){
    if (!x || !x.id || !rolDe(C, x.rol)) continue;
    const niv = [1, 2, 3].includes(+x.niv) ? +x.niv : 3;
    p.push({ id: String(x.id), rol: x.rol, pu: txt(x.pu, 40), nom: txt(x.nom, 40), niv, jefe: String(x.jefe || '') });
  }
  return { p: p.slice(0, MAX_ORG) };
}
function u6Digi(C){
  const o = leeJSON('digi', {}), r = {};
  for (const [k, v] of Object.entries(o)){
    if (!v || typeof v !== 'object' || !analogDe(C, k)) continue;
    r[k] = { t: v.t === 'no' || digitalDe(C, v.t) ? v.t : '', amb: AMBITOS.some(a => a[0] === v.amb) ? v.amb : '', res: txt(v.res, 220), ries: txt(v.ries, 220) };
  }
  return r;
}
function u6Robot(C){
  const o = leeJSON('robot', {});
  return { tipo: robotDe(o.tipo) ? o.tipo : '', piezas: (Array.isArray(o.piezas) ? o.piezas : []).filter(p => PIEZAS.some(x => x[0] === p)).slice(0, MAX_PIEZAS), sala: salaDe(C, o.sala) ? o.sala : '' };
}
function u6Datos(C){
  const o = leeJSON('datos', {}), sel = {};
  for (const [k, v] of Object.entries(o.sel && typeof o.sel === 'object' ? o.sel : {})){
    if (!C.datos.some(d => d[0] === k) || !v) continue;
    sel[k] = { donde: DONDE.some(d => d[0] === v.donde) ? v.donde : '', quien: QUIEN.some(q => q[0] === v.quien) ? v.quien : '' };
  }
  return { sel, planb: (Array.isArray(o.planb) ? o.planb : []).filter(p => PLAN_B.some(x => x[0] === p)) };
}
function u6Ruta(){ const o = leeJSON('ruta', {}), r = {}; for (const [k, v] of Object.entries(o)) if (+v >= 1 && +v <= 12) r[k] = +v; return r; }
function u6Auto(){ const o = leeJSON('auto', {}), r = {}; for (const f of FASES) if (+o[f[0]] >= 1 && +o[f[0]] <= 4) r[f[0]] = +o[f[0]]; return r; }

// ===== cosas que se calculan =====
const jefeValido = (p, x) => { const j = p.find(y => y.id === x.jefe); return j && j.id !== x.id && j.niv < x.niv ? j : null; };
const puestoDe = (C, x) => x.rol === 'otro' ? (x.pu.trim() || 'Otro puesto') : rolDe(C, x.rol)[2];
function jefeAuto(p, x){
  const cand = p.filter(y => y.id !== x.id && y.niv < x.niv);
  const mejor = cand.filter(y => y.niv === x.niv - 1);
  return ((mejor.length ? mejor : cand)[0] || {}).id || '';
}
// Tecnologías elegidas en la fase 4 (cada una una sola vez), en el orden del local
function techsUsadas(C){
  const L = u6Local(C).it, D = u6Digi(C), vistas = new Set(), r = [];
  for (const x of L){ const t = D[x.id] && D[x.id].t; if (t && t !== 'no' && !vistas.has(t)){ vistas.add(t); r.push(digitalDe(C, t)); } }
  return r;
}
function nombreRobot(){ return campo('robot_nom').trim(); }
// Filas de la hoja de ruta: formación + tecnologías + robot
function filasRuta(C){
  const R = u6Robot(C), rb = robotDe(R.tipo);
  return [['formacion', '🎓', 'Formación del personal'], ...techsUsadas(C).map(d => [d[0], d[1], d[2]]),
    ...(rb ? [['robot', rb[1], 'Robot: ' + (nombreRobot() || rb[2])]] : [])];
}
function presupuesto(C){
  const personas = u6Org(C).p.length, R = u6Robot(C), rb = robotDe(R.tipo);
  const filas = techsUsadas(C).map(d => [d[1], d[2], d[4], d[5]]);
  if (rb) filas.push([rb[1], 'Robot: ' + rb[2] + ' (alquiler)', 0, rb[4]]);
  filas.push(['🎓', `Formación inicial (${personas} persona${personas === 1 ? '' : 's'} × ${FORMACION_PERSONA} €)`, personas * FORMACION_PERSONA, 0]);
  const ini = filas.reduce((s, f) => s + f[2], 0), mes = filas.reduce((s, f) => s + f[3], 0);
  const ahorro = num(campo('ahorro_mes'));
  const recupera = isFinite(ahorro) && ahorro > mes ? Math.ceil(ini / (ahorro - mes)) : null;
  return { filas, ini, mes, anio: ini + 12 * mes, ahorro, recupera };
}

// ===== estado de cada parte (para las comprobaciones, los marcadores y el progreso) =====
function estadoF1(){
  const c = ['emp_nombre', 'emp_lema', 'emp_lugar'].filter(n => campo(n).trim()).length, L = u6Logo(), lg = L.ic && L.col ? 1 : 0;
  const falta = c < 3 ? 'Rellena el nombre, el lema y el municipio o isla de tu empresa.' : !lg ? 'Elige el símbolo y el color del logo.' : '';
  return { ok: !falta, falta, cuenta: `${c + lg}/4`, frac: (c + lg) / 4 };
}
function estadoF2(C){
  const L = u6Local(C).it, s = new Set(L.map(x => x.sala)).size, p = L.filter(x => x.prob.trim()).length;
  const falta = L.length < MIN_LOCAL ? `Coloca al menos ${MIN_LOCAL} objetos analógicos en el plano (llevas ${L.length}).`
    : s < C.salas.length ? 'Pon al menos un objeto en cada sala.'
    : p < L.length ? `Explica qué problema da cada objeto (te faltan ${L.length - p}).` : '';
  return { ok: !falta, falta, cuenta: `${L.length} objetos · ${s}/${C.salas.length} salas · ${p}/${L.length} problemas`, frac: Math.min(1, (Math.min(L.length, MIN_LOCAL) / MIN_LOCAL + s / C.salas.length + (L.length ? p / L.length : 0)) / 3) };
}
function estadoF3(C){
  const p = u6Org(C).p, n1 = p.filter(x => x.niv === 1).length;
  const sinJefe = p.filter(x => x.niv > 1 && !jefeValido(p, x)).length, sinNom = p.filter(x => !x.nom.trim()).length, sinPu = p.filter(x => x.rol === 'otro' && !x.pu.trim()).length;
  const falta = p.length < MIN_ORG ? `Añade al menos ${MIN_ORG} personas al organigrama (llevas ${p.length}).`
    : n1 !== 1 ? (n1 ? 'Solo puede haber una persona en la dirección (nivel 1).' : 'Falta la dirección (nivel 1) en lo alto del organigrama.')
    : sinJefe ? `Di de quién depende cada persona (te faltan ${sinJefe}).`
    : sinNom ? `Ponle un nombre inventado a cada persona (te faltan ${sinNom}).`
    : sinPu ? 'Escribe el nombre de cada «Otro puesto».' : '';
  return { ok: !falta, falta, cuenta: `${p.length} personas`, frac: falta ? Math.min(.9, p.length / MIN_ORG * .8) : 1 };
}
function estadoF4(C){
  const L = u6Local(C).it, D = u6Digi(C), d = x => D[x.id] || {};
  const dec = L.filter(x => d(x).t).length, dig = L.filter(x => d(x).t && d(x).t !== 'no'), no = L.filter(x => d(x).t === 'no');
  const inc = dig.filter(x => !d(x).amb || !d(x).res.trim() || !d(x).ries.trim()).length + no.filter(x => !d(x).res.trim()).length;
  const falta = !L.length ? 'Primero monta tu local en la fase 2.'
    : dec < L.length ? `Decide qué haces con cada objeto del local (te faltan ${L.length - dec}).`
    : dig.length < MIN_DIGI ? `Digitaliza al menos ${MIN_DIGI} objetos.`
    : !no.length ? 'Deja al menos un objeto sin digitalizar y explica por qué.'
    : inc ? `Completa el ámbito, qué resuelve y el riesgo de cada objeto (te faltan ${inc}).` : '';
  return { ok: !falta, falta, cuenta: `${dec}/${L.length} decididos · ${dig.length} digitalizados · ${no.length} sin digitalizar`, frac: falta ? (L.length ? (dec + (L.length - inc > 0 ? L.length - inc : 0)) / (2 * L.length) * .9 : 0) : 1 };
}
function estadoF5(C){
  const R = u6Robot(C), n = nombreRobot();
  const falta = !R.tipo ? 'Elige el tipo de robot.' : !n ? 'Ponle un nombre a tu robot.' : R.piezas.length < MIN_PIEZAS ? `Elige al menos ${MIN_PIEZAS} capacidades.` : !R.sala ? 'Elige la sala donde trabaja.' : '';
  const h = (R.tipo ? 1 : 0) + (n ? 1 : 0) + Math.min(1, R.piezas.length / MIN_PIEZAS) + (R.sala ? 1 : 0);
  return { ok: !falta, falta, cuenta: `${R.piezas.length} capacidades`, frac: h / 4 };
}
function estadoF6(C){
  const S = u6Datos(C).sel, k = Object.keys(S), comp = k.filter(x => S[x].donde && S[x].quien).length;
  const falta = k.length < MIN_DATOS ? `Marca al menos ${MIN_DATOS} datos personales que maneje tu empresa.` : comp < k.length ? `Di dónde se guarda y quién ve cada dato (te faltan ${k.length - comp}).` : '';
  return { ok: !falta, falta, cuenta: `${comp}/${Math.max(k.length, MIN_DATOS)} datos`, frac: Math.min(1, comp / MIN_DATOS) * (falta ? .9 : 1) };
}
function estadoPlanB(C){
  const n = u6Datos(C).planb.length;
  return { ok: n >= MIN_PLANB, falta: n >= MIN_PLANB ? '' : `Elige al menos ${MIN_PLANB} medidas del plan B.`, cuenta: `${n} medidas`, frac: Math.min(1, n / MIN_PLANB) };
}
function estadoF7(C){
  const f = filasRuta(C), R = u6Ruta(), con = f.filter(x => R[x[0]]).length, a = num(campo('ahorro_mes'));
  const falta = f.length < 2 ? 'Primero elige las tecnologías en la fase 4.' : con < f.length ? `Elige el mes de cada fila de la hoja de ruta (te faltan ${f.length - con}).` : !isFinite(a) ? 'Escribe cuánto crees que ahorrará tu empresa al mes.' : '';
  return { ok: !falta, falta, cuenta: `${con}/${f.length} meses`, frac: ((f.length ? con / f.length : 0) + (isFinite(a) ? 1 : 0)) / 2 };
}
function estadoAuto(){
  const n = Object.keys(u6Auto()).length;
  return { ok: n === FASES.length, falta: n === FASES.length ? '' : 'Ponte estrellas en las 8 fases.', cuenta: `${n}/${FASES.length}`, frac: n / FASES.length };
}

// ===== estilos =====
document.head.insertAdjacentHTML('beforeend', `<style>
.u6-mapa{display:flex;flex-wrap:wrap;gap:.4rem;margin:.6rem 0 .2rem;padding:0;list-style:none}
.u6-mapa a{display:inline-flex;gap:.35rem;align-items:center;min-height:40px;padding:.3rem .75rem;border-radius:999px;border:1.5px solid var(--lav2);background:#fff;color:inherit;text-decoration:none;font-size:.88rem;font-weight:600}
.u6-mapa a:hover,.u6-mapa a:focus-visible{background:var(--lav);border-color:var(--lav3)}
.u6-mapa b{color:var(--lav3)}
.u6-caso{background:var(--lav);border:1px solid var(--lav2);border-radius:14px;padding:.8rem 1rem;margin:.6rem 0}
.u6-caso b.t{display:block;color:var(--lav3);font-size:.8rem;text-transform:uppercase;letter-spacing:.05em;margin-bottom:.2rem}
.u6-juego{background:#fff;border:1px solid var(--line);border-radius:16px;padding:.9rem 1rem;margin:.8rem 0 1.1rem}
.u6-juego>h3{margin:.1rem 0 .3rem;font-size:1.05rem;display:flex;gap:.5rem;align-items:center;flex-wrap:wrap}
.u6-juego>h3 .n{background:var(--lav3);color:#fff;border-radius:999px;padding:.05rem .6rem;font-size:.85rem}
.u6-juego h4{margin:.8rem 0 .4rem;font-size:.88rem;color:var(--muted);text-transform:uppercase;letter-spacing:.04em}
.u6-marc{margin-left:auto;font-size:.82rem;font-weight:700;background:var(--lav);border:1px solid var(--lav2);color:var(--lav3);border-radius:999px;padding:.15rem .7rem}
.u6-marc.ok{background:#dff3ea;border-color:#9fd8bd;color:#1d5a40}
.u6-btn{min-height:44px;border-radius:10px;border:1.5px solid var(--line);background:#fff;font-weight:600;cursor:pointer;padding:.35rem .7rem;font-family:inherit}
.u6-btn[aria-pressed="true"]{border-color:var(--lav3);background:var(--lav);box-shadow:0 0 0 2px var(--lav2)}
.u6-btn:disabled{opacity:.45;cursor:default}
.u6-in,.u6-sel{width:100%;min-height:44px;border:1.5px solid var(--line);border-radius:9px;padding:.35rem .55rem;font:inherit;background:#fff;color:var(--ink)}
.u6-in:focus,.u6-sel:focus{outline:2px solid var(--lav2);border-color:var(--lav3)}
.u6-lab{display:block;font-size:.86rem;font-weight:700;margin:.5rem 0 .2rem}
.u6-lab small{font-weight:500;color:var(--muted)}
.u6-vacio{color:var(--muted);font-size:.86rem;margin:.3rem}
/* Fase 1 · ficha y logo */
.u6-ficha{display:grid;grid-template-columns:minmax(0,1.2fr) minmax(0,1fr);gap:1rem;align-items:start}
.u6-logo{display:flex;gap:.8rem;align-items:center;padding:.8rem;border-radius:16px;border:1.5px dashed var(--lav2);background:#fffaf2;min-height:96px}
.u6-logo .sim{flex:none;width:76px;height:76px;border-radius:22px;display:grid;place-items:center;font-size:2.4rem;color:#fff;box-shadow:0 6px 16px rgba(0,0,0,.15)}
.u6-logo b{display:block;font-size:1.15rem;line-height:1.2}
.u6-logo i{display:block;color:var(--muted);font-size:.9rem;margin-top:.15rem}
.u6-ics,.u6-cols{display:flex;flex-wrap:wrap;gap:.35rem;margin:.3rem 0}
.u6-ics button{width:44px;height:44px;font-size:1.35rem;padding:0;border-radius:10px;border:1.5px solid var(--line);background:#fff;cursor:pointer}
.u6-cols button{width:40px;height:40px;border-radius:50%;border:3px solid #fff;box-shadow:0 0 0 1.5px var(--line);cursor:pointer;padding:0}
.u6-ics button[aria-pressed="true"]{border-color:var(--lav3);background:var(--lav)}
.u6-cols button[aria-pressed="true"]{box-shadow:0 0 0 3px var(--lav3)}
/* Fase 2 y 4 · el plano */
.u6-local{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,2fr);gap:.9rem;align-items:start}
.u6-banco{display:flex;flex-direction:column;gap:.35rem;max-height:520px;overflow:auto;padding:.3rem;border:2px dashed var(--line);border-radius:12px}
.u6-banco.sobre{border-color:var(--lav3);background:var(--lav)}
.u6-ban{display:flex;gap:.5rem;align-items:center;min-height:44px;padding:.3rem .55rem;border:1.5px solid var(--line);border-radius:10px;background:#fff;font-size:.88rem;cursor:grab;text-align:left;width:100%;font-family:inherit}
.u6-ban i{font-style:normal;font-size:1.2rem;flex:none}
.u6-ban.sel,.u6-tk.sel{border-color:var(--lav3);background:var(--lav);box-shadow:0 0 0 2px var(--lav2)}
.u6-plano-cab{display:flex;gap:.5rem;align-items:center;font-weight:800;font-size:.9rem;margin-bottom:.35rem;color:var(--lav3)}
.u6-plano-cab span{display:inline-grid;place-items:center;width:28px;height:28px;border-radius:8px;color:#fff;font-size:1rem}
.u6-plano{display:grid;grid-template-columns:1fr 1fr;gap:7px;background:#3d3a48;border:7px solid #3d3a48;border-radius:8px;box-shadow:0 10px 24px rgba(40,30,60,.18)}
.u6-sala{position:relative;min-height:170px;padding:1.7rem .45rem .45rem;background-color:var(--tono);background-image:linear-gradient(rgba(0,0,0,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.045) 1px,transparent 1px);background-size:22px 22px;cursor:pointer;transition:box-shadow .15s}
.u6-sala::after{content:"";position:absolute;bottom:-7px;left:42%;width:46px;height:7px;background:var(--tono)}
.u6-sala .sn{position:absolute;top:.35rem;left:.55rem;font-size:.78rem;text-transform:uppercase;letter-spacing:.05em;color:#4a4458}
.u6-sala .cnt{position:absolute;top:.35rem;right:.55rem;font-size:.72rem;color:#7a7488}
.u6-sala.sobre,.u6-plano.elige .u6-sala:hover{box-shadow:inset 0 0 0 3px var(--lav3)}
.u6-toks{display:flex;flex-wrap:wrap;gap:.35rem}
.u6-tk{position:relative;display:flex;flex-direction:column;align-items:center;gap:.15rem;width:84px;min-height:72px;padding:.3rem .2rem;border:1.5px solid rgba(0,0,0,.12);border-radius:12px;background:#fff;font-family:inherit;cursor:grab;box-shadow:0 2px 5px rgba(0,0,0,.08)}
.u6-tk i{font-style:normal;font-size:1.6rem;line-height:1.1}
.u6-tk small{font-size:.66rem;line-height:1.15;text-align:center;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.u6-tk em{position:absolute;top:-8px;right:-6px;font-style:normal;font-size:.62rem;font-weight:800;padding:.05rem .35rem;border-radius:999px;background:#fff6dc;border:1px solid #e2b93b;color:#5c4300}
.u6-plano.desp .u6-tk{cursor:default;animation:u6gira .55s ease both}
.u6-plano.desp .u6-tk.dig{border-color:var(--lav3);background:linear-gradient(160deg,#fff,var(--lav));box-shadow:0 0 0 2px var(--lav2),0 4px 12px rgba(180,83,9,.18)}
.u6-plano.desp .u6-tk.no{filter:grayscale(.6);opacity:.85}
.u6-plano.desp .u6-tk.pend{opacity:.55;border-style:dashed}
@keyframes u6gira{from{transform:rotateY(90deg);opacity:.2}to{transform:none;opacity:1}}
@media (prefers-reduced-motion:reduce){.u6-plano.desp .u6-tk{animation:none}}
.u6-lista{display:grid;gap:.45rem}
.u6-fila{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,.9fr) minmax(0,2fr) 44px;gap:.45rem;align-items:center;border:1.5px solid var(--line);border-radius:12px;padding:.4rem .5rem;background:#fffdfa}
.u6-fila .nom{display:flex;gap:.45rem;align-items:center;font-size:.9rem;font-weight:600}
.u6-fila .nom i{font-style:normal;font-size:1.25rem}
.u6-x{width:44px;height:44px;border-radius:9px;border:1.5px solid var(--line);background:#fff;cursor:pointer;font-size:1rem;padding:0}
/* Fase 3 · organigrama */
.u6-roles{display:flex;flex-wrap:wrap;gap:.35rem}
.u6-roles .u6-btn{font-size:.86rem}
.u6-arbol{overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:#fffaf2;padding:.5rem;margin:.7rem 0}
.u6-arbol svg{display:block;margin:0 auto;height:auto;max-width:none}
.u6-pers{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:.55rem}
.u6-per{border:1.5px solid var(--line);border-radius:14px;padding:.5rem .6rem;background:#fff;display:grid;gap:.35rem}
.u6-per .cab{display:flex;gap:.45rem;align-items:center;font-weight:700;font-size:.9rem}
.u6-per .cab i{font-style:normal;font-size:1.3rem}
.u6-per .cab span{flex:1;min-width:0}
.u6-per .dos{display:grid;grid-template-columns:1fr 1.3fr;gap:.35rem}
.u6-per.n1{border-color:var(--lav3);background:var(--lav)}
.u6-per.mal{border-color:#f1b3c3}
/* Fase 4 · digitalizar */
.u6-modo{display:inline-flex;border:1.5px solid var(--lav2);border-radius:12px;overflow:hidden;margin:.3rem 0 .6rem}
.u6-modo button{min-height:44px;border:0;border-radius:0;background:#fff;font-weight:700;padding:.3rem 1rem;cursor:pointer;font-family:inherit}
.u6-modo button[aria-pressed="true"]{background:var(--lav3);color:#fff}
.u6-amb{display:flex;flex-wrap:wrap;gap:.3rem;margin:.6rem 0}
.u6-amb span{font-size:.78rem;padding:.15rem .55rem;border-radius:999px;border:1px solid var(--line);color:var(--muted);background:#fff}
.u6-amb span.si{border-color:#9fd8bd;background:#dff3ea;color:#1d5a40;font-weight:700}
.u6-dg{display:grid;grid-template-columns:minmax(0,1fr) 34px minmax(0,1.9fr);gap:.5rem;align-items:start;border:1.5px solid var(--line);border-radius:14px;padding:.55rem .6rem;background:#fffdfa;margin:.5rem 0}
.u6-dg .antes{display:flex;gap:.5rem;align-items:flex-start;font-size:.88rem}
.u6-dg .antes i{font-style:normal;font-size:1.6rem;flex:none}
.u6-dg .antes small{display:block;color:var(--muted);font-size:.8rem;margin-top:.15rem}
.u6-dg .fl{font-size:1.4rem;color:var(--lav3);text-align:center;padding-top:.5rem}
.u6-dg .desp{display:grid;gap:.35rem}
.u6-dg .para{font-size:.82rem;color:var(--lav3);background:var(--lav);border-radius:8px;padding:.3rem .5rem}
.u6-dg.ok{border-color:#9fd8bd;background:#f6fbf8}
.u6-dg.no{border-color:#e2b93b;background:#fffbef}
/* Fase 5 · robot */
.u6-robots{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:.55rem}
.u6-rob{display:flex;flex-direction:column;align-items:flex-start;gap:.2rem;text-align:left;min-height:44px;padding:.6rem .7rem;border-radius:14px;border:2px solid var(--line);background:#fff;cursor:pointer;font-family:inherit}
.u6-rob .big{font-size:2rem}
.u6-rob small{color:var(--muted);font-size:.8rem}
.u6-rob .pr{font-size:.78rem;font-weight:700;color:var(--lav3)}
.u6-rob[aria-pressed="true"]{border-color:var(--lav3);background:var(--lav)}
.u6-rb2{display:grid;grid-template-columns:minmax(0,1.4fr) minmax(0,1fr);gap:1rem;align-items:start;margin-top:.7rem}
.u6-chips{display:flex;flex-wrap:wrap;gap:.35rem}
.u6-chip{min-height:44px;border-radius:999px;border:1.5px solid var(--line);background:#fff;padding:.25rem .8rem;cursor:pointer;font-size:.86rem;font-family:inherit}
.u6-chip[aria-pressed="true"]{border-color:var(--lav3);background:var(--lav);font-weight:700}
.u6-chip:disabled{opacity:.45;cursor:default}
.u6-carnet{border-radius:18px;padding:1rem;background:linear-gradient(150deg,#3d3a48,#5b5470);color:#fff;text-align:center;box-shadow:0 10px 24px rgba(40,30,60,.25)}
.u6-carnet .big{font-size:3.6rem;line-height:1.1}
.u6-carnet b{display:block;font-size:1.2rem;margin-top:.2rem}
.u6-carnet small{display:block;opacity:.8;font-size:.82rem}
.u6-carnet .pz{display:flex;flex-wrap:wrap;justify-content:center;gap:.3rem;margin-top:.6rem}
.u6-carnet .pz span{background:rgba(255,255,255,.14);border-radius:999px;padding:.1rem .5rem;font-size:.78rem}
/* Fase 6 · datos */
.u6-datos{display:grid;gap:.45rem}
.u6-dato{display:grid;grid-template-columns:minmax(0,1.3fr) minmax(0,1fr) minmax(0,1fr);gap:.45rem;align-items:center;border:1.5px solid var(--line);border-radius:12px;padding:.4rem .5rem;background:#fff}
.u6-dato>button{min-height:44px;text-align:left;border:0;background:none;font:inherit;font-weight:600;cursor:pointer;display:flex;gap:.45rem;align-items:center;padding:0 .2rem}
.u6-dato.on{border-color:var(--lav2);background:#fffaf2}
.u6-dato .av{grid-column:1/-1;font-size:.84rem;margin:0;background:#fff6dc;border:1px solid #e2b93b;border-radius:8px;padding:.3rem .5rem;color:#5c4300}
/* Fase 7 · presupuesto y hoja de ruta */
.u6-pres{width:100%;border-collapse:separate;border-spacing:0;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff;margin:.4rem 0}
.u6-pres th,.u6-pres td{padding:.4rem .55rem;border-bottom:1px solid var(--line);font-size:.9rem;text-align:left}
.u6-pres td.e,.u6-pres th.e{text-align:right;white-space:nowrap}
.u6-pres thead th{background:var(--lav);color:var(--lav3)}
.u6-pres tfoot td{font-weight:800;background:#fffaf2;border-bottom:0}
.u6-kpis{display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:.5rem;margin:.6rem 0}
.u6-kpi{border:1.5px solid var(--lav2);border-radius:14px;padding:.55rem .7rem;background:#fff}
.u6-kpi small{display:block;color:var(--muted);font-size:.78rem}
.u6-kpi b{font-size:1.3rem;color:var(--lav3)}
.u6-ruta{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:.4rem}
.u6-ruta label{display:grid;grid-template-columns:minmax(0,1fr) 110px;gap:.4rem;align-items:center;font-size:.88rem;border:1.5px solid var(--line);border-radius:12px;padding:.3rem .45rem;background:#fff}
.u6-gantt{overflow-x:auto;border:1px solid var(--line);border-radius:14px;background:#fff;padding:.5rem;margin-top:.7rem}
.u6-gantt svg{display:block;width:100%;min-width:560px;height:auto}
.u6-pista{background:#fff6dc;border:1.5px solid #e2b93b;border-radius:10px;padding:.45rem .7rem;margin:.5rem 0;font-size:.9rem;color:#5c4300}
/* Fase 8 · autoevaluación */
.u6-est{display:grid;grid-template-columns:minmax(0,1fr) auto 150px;gap:.5rem;align-items:center;border-bottom:1px solid var(--line);padding:.3rem 0}
.u6-est .st{display:flex;gap:.15rem}
.u6-est .st button{width:44px;height:44px;border:0;background:none;font-size:1.6rem;color:#d8d2e2;cursor:pointer;padding:0}
.u6-est .st button[aria-pressed="true"]{color:#e2a21b}
.u6-est small{color:var(--muted);font-size:.82rem}
@media (max-width:760px){
  .u6-ficha,.u6-local,.u6-rb2{grid-template-columns:1fr}
  .u6-fila{grid-template-columns:minmax(0,1fr) 44px}.u6-fila .nom{grid-column:1/-1}.u6-fila .u6-sel{grid-column:1/2}
  .u6-fila .u6-in{grid-column:1/-1}
  .u6-dg{grid-template-columns:1fr}.u6-dg .fl{transform:rotate(90deg);padding:0}
  .u6-dato{grid-template-columns:1fr}
  .u6-est{grid-template-columns:1fr auto}.u6-est small{grid-column:1/-1}
  .u6-tk{width:72px}
}
</style>`);

// ===== enunciado =====
function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Contexto</h2>
    <p>Eres ${esc(C.prof)} y acabas de ponerte al frente de <b>${esc(C.empresa)}</b>. Atiende a ${esc(C.clientes)}. La empresa quiere dar el salto a lo digital y te encarga el plan: decidir qué se cambia, con qué tecnología, cuánto cuesta y en qué orden.</p>
    <h2 style="font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>
    <h2 style="font-size:1.1rem">Las 8 fases</h2>
    <ul class="u6-mapa">${FASES.map((f, i) => `<li><a href="#u6${f[0]}"><b>${i + 1}</b> ${f[1]} ${esc(f[2])}</a></li>`).join('')}</ul>`;
}

// ===== la tarea =====
function construirTarea(C){
  const oculto = n => `<input type="hidden" data-campo="${n}">`;
  const fase = (i, cuerpo) => `<section class="fase f${(i % 4) + 1}" id="u6${FASES[i][0]}"><header><h2>Fase ${i + 1} · ${FASES[i][1]} ${esc(FASES[i][2])}</h2></header><div class="cuerpo">${cuerpo}</div></section>`;
  const entrada = (n, et, ph, extra = '') => `<label class="u6-lab">${et}<input type="text" class="u6-in" data-campo="${n}" maxlength="60" placeholder="${esc(ph)}"${extra}></label>`;
  let h = '';

  h += fase(0, `<div class="u6-caso"><b class="t">La empresa que vas a transformar</b>${esc(C.tipo)}: ${esc(C.empresa)}. Atiende a ${esc(C.clientes)}.</div>
    <div class="u6-juego">${oculto('logo')}
      <h3><span class="n">1.1</span>Ficha y logo de tu empresa <span class="u6-marc" id="u6M1"></span></h3>
      <p class="pista">Inventa el nombre de tu empresa, su lema y dónde está. Después diseña su logo.</p>
      <div class="u6-ficha"><div>
          ${entrada('emp_nombre', 'Nombre de la empresa', 'Por ejemplo: ' + C.ejemploNombre)}
          ${entrada('emp_lema', 'Lema <small>(una frase corta que diga qué os hace especiales)</small>', 'Escribe el lema')}
          ${entrada('emp_lugar', 'Municipio o isla', 'Dónde está tu empresa')}
        </div><div>
          <div id="u6Logo"></div>
          <span class="u6-lab">Elige un símbolo</span><div class="u6-ics" id="u6LogoIc"></div>
          <span class="u6-lab">y un color</span><div class="u6-cols" id="u6LogoCol"></div>
        </div></div>
    </div>
    ${caja('f1_mision', '1.2', '¿A qué se dedica tu empresa y a quién atiende? Escribe su misión.', '<div class="pista">Dos o tres frases: qué servicio da, a quién y qué la hace diferente.</div>')}
    ${caja('f1_objetivos', '1.3', 'Objetivos estratégicos: escribe tres objetivos de tu empresa para los próximos dos años.', '<div class="pista">Que se puedan comprobar: qué quieres conseguir, cuánto y para cuándo. La digitalización tendrá que ayudar a cumplirlos.</div>')}
    ${caja('f1_dia', '1.4', 'Un día en tu empresa analógica: cuenta cómo se trabaja hoy, casi todo en papel, y qué problemas hay.')}`);

  h += fase(1, `<div class="u6-juego" id="u6J2">${oculto('local')}
      <h3><span class="n">2.1</span>Monta tu local analógico <span class="u6-marc" id="u6M2"></span></h3>
      <p class="pista">Tu empresa todavía funciona «como siempre». Coloca en el plano <b>al menos ${MIN_LOCAL} objetos analógicos</b>, con <b>al menos uno en cada sala</b> (como mucho ${MAX_SALA} por sala). Toca un objeto y después la sala, o arrástralo. Para quitarlo, arrástralo de vuelta a la lista o pulsa 🗑️.</p>
      <div class="u6-local">
        <div><h4>Objetos analógicos</h4><div class="u6-banco" id="u6Banco"></div></div>
        <div><h4>El plano de tu local</h4><div id="u6Plano2"></div></div>
      </div>
      <h4>Qué hay en tu local y qué problema da en tu empresa</h4><div class="u6-lista" id="u6Lista2"></div>
    </div>
    ${caja('f2_areas', '2.2', '¿Qué áreas de tu empresa crees que serán más fáciles de digitalizar y cuáles más difíciles? ¿Por qué?')}`);

  h += fase(2, `<div class="u6-juego" id="u6J3">${oculto('org')}
      <h3><span class="n">3.1</span>Dibuja el organigrama <span class="u6-marc" id="u6M3"></span></h3>
      <p class="pista">Añade a las personas que trabajan en tu empresa (<b>al menos ${MIN_ORG}</b>), ponles un nombre inventado y di de quién depende cada una. Arriba del todo, <b>una sola persona</b> en la dirección. El organigrama se dibuja solo.</p>
      <h4>Añade un puesto</h4><div class="u6-roles" id="u6Roles">${rolesDe(C).map(r => `<button type="button" class="u6-btn" data-addrol="${r[0]}">＋ ${r[1]} ${esc(r[2])}</button>`).join('')}</div>
      <div class="u6-arbol" id="u6Arbol"></div>
      <div class="u6-pers" id="u6Pers"></div>
    </div>
    ${caja('f3_lider', '3.2', '¿Quién de tu organigrama liderará el cambio digital y por qué esa persona? ¿Hará falta algún puesto nuevo?')}`);

  h += fase(3, `<div class="u6-juego" id="u6J4">${oculto('digi')}
      <h3><span class="n">4.1</span>¡Digitalízalo! <span class="u6-marc" id="u6M4"></span></h3>
      <p class="pista">Para cada objeto de tu local, elige la <b>tecnología habilitadora</b> que lo sustituye, el <b>ámbito</b> de la empresa que mejora, <b>qué problema resuelve</b> y <b>qué riesgo</b> trae. Al menos ${MIN_DIGI} se digitalizan y <b>al menos uno se queda como está</b>: no todo tiene que ser digital, explica por qué. Las tecnologías con ⭐ encajan especialmente bien con ese objeto.</p>
      <div class="u6-modo" role="group" aria-label="Ver el local"><button type="button" data-modo4="antes">📄 Antes</button><button type="button" data-modo4="despues">⚡ Después</button></div>
      <div id="u6Plano4"></div>
      <div class="u6-amb" id="u6Amb"></div>
      <div id="u6Digi"></div>
    </div>
    ${caja('f4_dia', '4.2', 'Un día en tu empresa digital: cuenta cómo se trabaja ahora.', '<div class="pista">Compáralo con lo que contaste en la 1.4: ¿qué ha cambiado para el equipo y para las personas a las que atendéis?</div>')}
    ${caja('f4_integracion', '4.3', '¿Cómo encaja todo? Explica qué tecnologías comparten datos entre sí y cómo se conectan con lo que se queda sin digitalizar.')}`);

  h += fase(4, `<div class="u6-juego" id="u6J5">${oculto('robot')}
      <h3><span class="n">5.1</span>Elige tu robot asistente <span class="u6-marc" id="u6M5"></span></h3>
      <p class="pista">Elige el tipo de robot que ayudará al equipo, ponle nombre, elige de ${MIN_PIEZAS} a ${MAX_PIEZAS} capacidades y la sala donde trabajará. El precio es de alquiler al mes y entra en el presupuesto.</p>
      <div class="u6-robots" id="u6Robots"></div>
      <div class="u6-rb2"><div>
          ${entrada('robot_nom', 'Nombre del robot', 'Ponle un nombre')}
          <label class="u6-lab">Sala donde trabaja<select class="u6-sel" id="u6RobSala" data-rbs="1"></select></label>
          <span class="u6-lab">Capacidades <small>(de ${MIN_PIEZAS} a ${MAX_PIEZAS})</small></span><div class="u6-chips" id="u6Piezas"></div>
        </div><div id="u6Carnet"></div></div>
    </div>
    ${caja('f5_tareas', '5.2', 'Escribe tres tareas concretas que hará tu robot en tu empresa.')}
    ${caja('f5_humano', '5.3', '¿Qué tiene que seguir haciendo siempre una persona y no el robot? ¿Por qué?')}`);

  h += fase(5, `<div class="u6-juego" id="u6J6">${oculto('datos')}
      <h3><span class="n">6.1</span>¿Dónde se guarda cada dato y quién lo ve? <span class="u6-marc" id="u6M6"></span></h3>
      <p class="pista">Marca los datos personales que maneja tu empresa (<b>al menos ${MIN_DATOS}</b>) y decide dónde se guardan y quién puede verlos. Si algo no te cuadra, verás un aviso: tú decides.</p>
      <div class="u6-datos" id="u6Datos"></div>
    </div>
    <div class="u6-juego">
      <h3><span class="n">6.2</span>Plan B: si se cae el sistema o hay un ciberataque <span class="u6-marc" id="u6M6b"></span></h3>
      <p class="pista">Elige <b>al menos ${MIN_PLANB} medidas</b> para que tu empresa pueda seguir funcionando.</p>
      <div class="u6-chips" id="u6PlanB"></div>
    </div>
    ${caja('f6_brechas', '6.3', 'Brechas de seguridad: elige tres tecnologías de tu plan y explica qué podría fallar en cada una y cómo lo evitarías.')}
    ${caja('f6_rgpd', '6.4', '¿Cómo cumple tu empresa el RGPD?', '<div class="pista">Piensa en el consentimiento, para qué se usan los datos, cuánto tiempo se guardan y cómo puede una persona pedir verlos o que se borren.</div>')}
    ${caja('f6_analisis', '6.5', '¿Qué datos analizarías para mejorar el servicio y qué decisión podrías tomar con ellos?')}`);

  h += fase(6, `<div class="u6-juego">
      <h3><span class="n">7.1</span>Presupuesto <span class="u6-marc" id="u6M7a"></span></h3>
      <p class="pista">Se calcula solo con lo que has elegido: cada tecnología cuenta una vez aunque sustituya a varios objetos. Los precios son orientativos.</p>
      <div id="u6Pres"></div>
      <label class="u6-lab">¿Cuánto crees que ahorrará tu empresa al mes, en euros? <small>(papel, impresión, sellos, desplazamientos, horas de trabajo…)</small>
        <input type="text" class="u6-in" data-campo="ahorro_mes" maxlength="9" inputmode="numeric" placeholder="Por ejemplo: 0" style="max-width:220px"></label>
      <div id="u6Recupera"></div>
    </div>
    <div class="u6-juego">${oculto('ruta')}
      <h3><span class="n">7.2</span>Hoja de ruta de 12 meses <span class="u6-marc" id="u6M7"></span></h3>
      <p class="pista">Decide en qué mes se pone en marcha cada cosa. No se puede cambiar todo a la vez: piensa qué va primero.</p>
      <div class="u6-ruta" id="u6RutaSel"></div>
      <div id="u6RutaAv"></div>
      <div class="u6-gantt" id="u6Gantt"></div>
    </div>
    ${caja('f7_formacion', '7.3', 'Plan de formación: ¿quién tiene que aprender qué? ¿Hay alguien en tu equipo que encaje especialmente bien en las nuevas tareas?')}
    ${caja('f7_merece', '7.4', '¿Merece la pena? Escribe tu conclusión económica y qué quitarías o retrasarías si el presupuesto fuera la mitad.')}`);

  h += fase(7, `${caja('f8_t1', '8.1', 'Una tecnología emergente real que tu empresa podría usar dentro de cinco años: qué es y para qué la usaríais.')}
    ${caja('f8_t2', '8.2', 'Inventa una tecnología que todavía no exista: ponle nombre, explica qué haría y qué problema de tu sector resolvería.', '<div class="pista">Puedes añadir un dibujo o una imagen.</div>')}
    ${caja('f8_reflexion', '8.3', 'Antes y después: ¿qué ha ganado tu empresa y qué ha perdido? ¿Qué has aprendido tú con este proyecto?')}
    <div class="u6-juego">${oculto('auto')}
      <h3><span class="n">8.4</span>Autoevaluación <span class="u6-marc" id="u6M8"></span></h3>
      <p class="pista">¿Cómo te ha salido cada fase? Sé sincero o sincera: esto no cambia la nota, te ayuda a ver en qué mejorar.</p>
      <div id="u6Auto"></div>
    </div>
    ${caja('f8_auto', '8.5', 'Explica tu autoevaluación: ¿qué fase te ha salido mejor y cuál mejorarías si tuvieras más tiempo?')}`);
  return h;
}

// ===== pintado =====
let SEL = null, MODO4 = 'despues', FOCO = null;
// Pinta una zona solo si ha cambiado su firma
function pinta(id, firma, html){
  const el = document.getElementById(id); if (!el || el.dataset.f === firma) return null;
  el.dataset.f = firma; el.innerHTML = html(); return el;
}
const firmaLocal = C => u6Local(C).it.map(x => x.id + '@' + x.sala).join(',');
const logoHTML = (tam) => { const L = u6Logo(), n = campo('emp_nombre').trim();
  return `<div class="u6-logo"><span class="sim" style="background:${L.col || '#c9c2d6'};${tam ? `width:${tam}px;height:${tam}px` : ''}">${L.ic || '?'}</span><span><b>${esc(n || 'Tu empresa')}</b><i>${esc(campo('emp_lema').trim() || 'Aquí saldrá tu lema')}</i></span></div>`; };

function pintarF1(){
  const L = u6Logo();
  pinta('u6Logo', JSON.stringify([L, campo('emp_nombre'), campo('emp_lema')]), () => logoHTML());
  pinta('u6LogoIc', L.ic, () => LOGO_ICONOS.map(i => `<button type="button" data-lic="${i}" aria-pressed="${L.ic === i}" aria-label="Símbolo ${i}">${i}</button>`).join(''));
  pinta('u6LogoCol', L.col, () => LOGO_COLORES.map(c => `<button type="button" data-lcol="${c}" aria-pressed="${L.col === c}" style="background:${c}" aria-label="Color ${c}"></button>`).join(''));
}
function tokHTML(C, x, modo, inter){
  const a = analogDe(C, x.id);
  if (modo === 'despues'){
    const t = (u6Digi(C)[x.id] || {}).t, d = t && t !== 'no' ? digitalDe(C, t) : null;
    return `<span class="u6-tk ${d ? 'dig' : t === 'no' ? 'no' : 'pend'}" title="${esc(d ? d[2] : a[2])}"><i>${d ? d[1] : a[1]}</i><small>${esc(d ? d[2] : a[2])}</small>${t === 'no' ? '<em>se queda</em>' : !t ? '<em>¿?</em>' : ''}</span>`;
  }
  if (!inter) return `<span class="u6-tk" title="${esc(a[2])}"><i>${a[1]}</i><small>${esc(a[2])}</small></span>`;
  return `<button type="button" class="u6-tk${SEL === x.id ? ' sel' : ''}" draggable="true" data-tok="${x.id}" aria-pressed="${SEL === x.id}" title="${esc(a[2])}"><i>${a[1]}</i><small>${esc(a[2])}</small></button>`;
}
function planoHTML(C, modo, inter){
  const L = u6Local(C).it, lg = u6Logo(), n = campo('emp_nombre').trim();
  return `<div class="u6-plano-cab"><span style="background:${lg.col || '#c9c2d6'}">${lg.ic || '🏢'}</span>${esc(n || 'Tu empresa')} · ${modo === 'despues' ? 'después' : 'antes'}</div>
    <div class="u6-plano${modo === 'despues' ? ' desp' : ''}${inter && SEL ? ' elige' : ''}">${C.salas.map((s, i) => {
      const dentro = L.filter(x => x.sala === s[0]);
      return `<div class="u6-sala" style="--tono:${TONOS_SALA[i % 4]}"${inter ? ` data-sala="${s[0]}"` : ''}><b class="sn">${esc(s[1])}</b><span class="cnt">${dentro.length}/${MAX_SALA}</span>
        <div class="u6-toks">${dentro.map(x => tokHTML(C, x, modo, inter)).join('') || `<span class="u6-vacio">${inter ? 'Toca un objeto y después esta sala' : 'Vacía'}</span>`}</div></div>`;
    }).join('')}</div>`;
}
function pintarF2(C){
  const L = u6Local(C).it, puestos = new Set(L.map(x => x.id)), fl = firmaLocal(C), lg = JSON.stringify([u6Logo(), campo('emp_nombre')]);
  pinta('u6Banco', fl + '|' + SEL, () => {
    const libres = C.analogBank.filter(a => !puestos.has(a[0]));
    return libres.length ? libres.map(a => `<button type="button" class="u6-ban${SEL === a[0] ? ' sel' : ''}" draggable="true" data-ban="${a[0]}" aria-pressed="${SEL === a[0]}"><i>${a[1]}</i><span>${esc(a[2])}</span></button>`).join('') : '<p class="u6-vacio">Has colocado todos los objetos.</p>';
  });
  pinta('u6Plano2', fl + '|' + SEL + '|' + lg, () => planoHTML(C, 'antes', true));
  pinta('u6Lista2', fl, () => L.length ? L.map(x => {
    const a = analogDe(C, x.id);
    return `<div class="u6-fila"><span class="nom"><i>${a[1]}</i>${esc(a[2])}</span>
      <select class="u6-sel" data-msala="${x.id}" aria-label="Sala de ${esc(a[2])}">${C.salas.map(s => `<option value="${s[0]}"${s[0] === x.sala ? ' selected' : ''}>${esc(s[1])}</option>`).join('')}</select>
      <input type="text" class="u6-in" maxlength="200" data-prob="${x.id}" value="${esc(x.prob)}" placeholder="¿Qué problema da en tu empresa?" aria-label="Problema que da: ${esc(a[2])}">
      <button type="button" class="u6-x" data-quita="${x.id}" title="Quitar del local" aria-label="Quitar ${esc(a[2])} del local">🗑️</button></div>`;
  }).join('') : '<p class="u6-vacio">Todavía no hay nada en tu local.</p>');
}
// Organigrama: árbol por jefes, una fila por nivel; cada hoja ocupa una columna
function arbolOrg(C){
  const p = u6Org(C).p, hijos = {}, raices = [];
  p.forEach(x => { const j = jefeValido(p, x); if (j) (hijos[j.id] = hijos[j.id] || []).push(x); else raices.push(x); });
  raices.sort((a, b) => a.niv - b.niv);
  let hoja = 0; const col = {};
  const colocar = x => { const hs = hijos[x.id] || []; if (!hs.length){ col[x.id] = hoja++; return col[x.id]; } const xs = hs.map(colocar); col[x.id] = (xs[0] + xs[xs.length - 1]) / 2; return col[x.id]; };
  raices.forEach(colocar);
  const niveles = [...new Set(p.map(x => x.niv))].sort(), fila = Object.fromEntries(niveles.map((n, i) => [n, i]));
  return { p, hijos, col, fila, cols: Math.max(1, hoja), filas: Math.max(1, niveles.length) };
}
const partir = (s, n) => { const pal = String(s).split(/\s+/), l = ['']; for (const w of pal){ const c = l[l.length - 1]; if ((c + ' ' + w).trim().length > n && c){ if (l.length === 2){ l[1] = (l[1] + ' ' + w).trim(); continue; } l.push(w); } else l[l.length - 1] = (c + ' ' + w).trim(); } if (l[1] && l[1].length > n) l[1] = l[1].slice(0, n - 1) + '…'; return l; };
function svgOrg(C){
  const A = arbolOrg(C), BW = 156, BH = 70, CG = 14, RH = 112, MG = 12;
  const W = MG * 2 + A.cols * (BW + CG) - CG, H = MG * 2 + (A.filas - 1) * RH + BH;
  const cx = x => MG + A.col[x.id] * (BW + CG) + BW / 2, ty = x => MG + A.fila[x.niv] * RH;
  const FON = { 1: '#96620a', 2: '#f0c878', 3: '#fff7e8' }, TIN = { 1: '#ffffff', 2: '#3d2a05', 3: '#2f2d3a' };
  let s = '';
  for (const x of A.p){
    const hs = A.hijos[x.id]; if (!hs) continue;
    const px = cx(x), py = ty(x) + BH, by = Math.min(...hs.map(ty)) - 18;
    s += `<path d="M${px} ${py}V${by}" stroke="#96620a" stroke-width="2" fill="none"/>`;
    const xs = hs.map(cx); s += `<path d="M${Math.min(px, ...xs)} ${by}H${Math.max(px, ...xs)}" stroke="#96620a" stroke-width="2" fill="none"/>`;
    for (const h of hs) s += `<path d="M${cx(h)} ${by}V${ty(h)}" stroke="#96620a" stroke-width="2" fill="none"/>`;
  }
  for (const x of A.p){
    const r = rolDe(C, x.rol), X = cx(x) - BW / 2, Y = ty(x), lin = partir(puestoDe(C, x), 22);
    s += `<g><rect x="${X}" y="${Y}" width="${BW}" height="${BH}" rx="12" fill="${FON[x.niv]}" stroke="#96620a" stroke-width="1.5"/>
      <text x="${X + 10}" y="${Y + 25}" font-size="20">${r[1]}</text>
      ${lin.map((l, i) => `<text x="${X + 38}" y="${Y + 18 + i * 13}" font-size="11" font-weight="700" fill="${TIN[x.niv]}">${esc(l)}</text>`).join('')}
      <text x="${X + BW / 2}" y="${Y + BH - 12}" font-size="12.5" text-anchor="middle" fill="${TIN[x.niv]}">${esc(x.nom.trim() || '(sin nombre)')}</text></g>`;
  }
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Segoe UI, Arial, sans-serif" role="img" aria-label="Organigrama">${s}</svg>`, w: W, h: H };
}
function pintarF3(C){
  const p = u6Org(C).p;
  document.querySelectorAll('#u6Roles [data-addrol]').forEach(b => { b.disabled = p.length >= MAX_ORG; });
  pinta('u6Arbol', JSON.stringify(p), () => {
    if (!p.length) return '<p class="u6-vacio">Añade el primer puesto: empieza por la dirección.</p>';
    const o = svgOrg(C); return o.svg.replace('<svg ', `<svg style="width:${Math.max(o.w * .78, 300)}px;max-width:100%;min-width:${Math.min(o.w, 560)}px" `);
  });
  const el = pinta('u6Pers', JSON.stringify(p.map(x => [x.id, x.rol, x.niv, x.jefe])), () => p.map(x => {
    const r = rolDe(C, x.rol), cand = p.filter(y => y.id !== x.id && y.niv < x.niv), j = jefeValido(p, x);
    return `<div class="u6-per n${x.niv}${x.niv > 1 && !j ? ' mal' : ''}"><div class="cab"><i>${r[1]}</i><span>${x.rol === 'otro' ? `<input type="text" class="u6-in" maxlength="40" data-ppu="${x.id}" value="${esc(x.pu)}" placeholder="Nombre del puesto" aria-label="Nombre del puesto">` : esc(r[2])}</span>
        <button type="button" class="u6-x" data-quitap="${x.id}" title="Quitar a esta persona" aria-label="Quitar a esta persona">🗑️</button></div>
      <input type="text" class="u6-in" maxlength="40" data-pnom="${x.id}" value="${esc(x.nom)}" placeholder="Nombre inventado" aria-label="Nombre de la persona (${esc(r[2])})">
      <div class="dos"><select class="u6-sel" data-pniv="${x.id}" aria-label="Nivel">${NIVELES.map(n => `<option value="${n[0]}"${n[0] === x.niv ? ' selected' : ''}>${n[0]} · ${esc(n[1])}</option>`).join('')}</select>
        <select class="u6-sel" data-pjefe="${x.id}" aria-label="De quién depende"${x.niv === 1 ? ' disabled' : ''}>${x.niv === 1 ? '<option>No depende de nadie</option>' : `<option value="">¿De quién depende?</option>${cand.map(y => `<option value="${y.id}"${j && j.id === y.id ? ' selected' : ''}>${esc((y.nom.trim() || '(sin nombre)') + ' · ' + puestoDe(C, y))}</option>`).join('')}`}</select></div></div>`;
  }).join('') || '<p class="u6-vacio">Aquí saldrán las fichas de cada persona.</p>');
  if (el && FOCO){ const i = el.querySelector(`[data-pnom="${FOCO}"]`); FOCO = null; if (i) i.focus(); }
}
function opcionesTech(C, aid, t){
  const enc = C.digitalBank.filter(d => d[6].includes(aid)), otras = C.digitalBank.filter(d => !d[6].includes(aid));
  const op = d => `<option value="${d[0]}"${t === d[0] ? ' selected' : ''}>${d[1]} ${esc(d[2])}${enc.includes(d) ? ' ⭐' : ''}</option>`;
  return `<option value="">Elige la tecnología que lo sustituye…</option>${enc.length ? `<optgroup label="⭐ Encajan bien">${enc.map(op).join('')}</optgroup>` : ''}<optgroup label="Otras tecnologías habilitadoras">${otras.map(op).join('')}</optgroup><option value="no"${t === 'no' ? ' selected' : ''}>✋ No lo digitalizo: se queda como está</option>`;
}
function pintarF4(C){
  const L = u6Local(C).it, D = u6Digi(C);
  document.querySelectorAll('[data-modo4]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.modo4 === MODO4)));
  pinta('u6Plano4', firmaLocal(C) + '|' + MODO4 + '|' + JSON.stringify(Object.fromEntries(Object.entries(D).map(([k, v]) => [k, v.t]))) + JSON.stringify([u6Logo(), campo('emp_nombre')]),
    () => L.length ? planoHTML(C, MODO4, false) : '<p class="u6-vacio">Primero monta tu local en la fase 2.</p>');
  const usados = new Set(L.map(x => D[x.id] && D[x.id].t && D[x.id].t !== 'no' ? D[x.id].amb : '').filter(Boolean));
  pinta('u6Amb', [...usados].join(','), () => `<span style="border:0;background:none;padding-left:0">Ámbitos que mejoras (${usados.size} de ${AMBITOS.length}):</span>` + AMBITOS.map(a => `<span class="${usados.has(a[0]) ? 'si' : ''}">${usados.has(a[0]) ? '✓ ' : ''}${esc(a[1])}</span>`).join(''));
  pinta('u6Digi', JSON.stringify(L) + '|' + JSON.stringify(Object.fromEntries(Object.entries(D).map(([k, v]) => [k, [v.t, v.amb]]))), () => L.length ? L.map(x => {
    const a = analogDe(C, x.id), v = D[x.id] || { t: '', amb: '', res: '', ries: '' }, d = v.t && v.t !== 'no' ? digitalDe(C, v.t) : null;
    return `<div class="u6-dg${d ? ' ok' : v.t === 'no' ? ' no' : ''}">
      <div class="antes"><i>${a[1]}</i><span><b>${esc(a[2])}</b><small>${esc(salaDe(C, x.sala)[1])}${x.prob.trim() ? ' · ' + esc(x.prob.trim()) : ''}</small></span></div>
      <div class="fl" aria-hidden="true">➜</div>
      <div class="desp"><select class="u6-sel" data-dgt="${x.id}" aria-label="Tecnología que sustituye a ${esc(a[2])}">${opcionesTech(C, x.id, v.t)}</select>
        ${d ? `<div class="para">${d[1]} ${esc(d[3])}</div>
          <select class="u6-sel" data-dga="${x.id}" aria-label="Ámbito que mejora"><option value="">¿Qué ámbito de la empresa mejora?</option>${AMBITOS.map(m => `<option value="${m[0]}"${v.amb === m[0] ? ' selected' : ''}>${esc(m[1])}</option>`).join('')}</select>
          <input type="text" class="u6-in" maxlength="220" data-dgr="${x.id}" value="${esc(v.res)}" placeholder="¿Qué problema resuelve y cómo mejora el trabajo?" aria-label="Qué problema resuelve">
          <input type="text" class="u6-in" maxlength="220" data-dgq="${x.id}" value="${esc(v.ries)}" placeholder="¿Qué riesgo o brecha de seguridad trae?" aria-label="Qué riesgo trae">`
        : v.t === 'no' ? `<input type="text" class="u6-in" maxlength="220" data-dgr="${x.id}" value="${esc(v.res)}" placeholder="¿Por qué es mejor no digitalizarlo?" aria-label="Por qué no se digitaliza">` : ''}</div></div>`;
  }).join('') : '');
}
function pintarF5(C){
  const R = u6Robot(C), rb = robotDe(R.tipo);
  pinta('u6Robots', R.tipo, () => ROBOTS.map(r => `<button type="button" class="u6-rob" data-rob="${r[0]}" aria-pressed="${R.tipo === r[0]}"><span class="big">${r[1]}</span><b>${esc(r[2])}</b><small>${esc(r[3])}</small><span class="pr">${eur(r[4])} al mes</span></button>`).join(''));
  pinta('u6RobSala', R.sala, () => `<option value="">Elige la sala…</option>${C.salas.map(s => `<option value="${s[0]}"${R.sala === s[0] ? ' selected' : ''}>${esc(s[1])}</option>`).join('')}`);
  pinta('u6Piezas', R.piezas.join(','), () => PIEZAS.map(p => { const on = R.piezas.includes(p[0]); return `<button type="button" class="u6-chip" data-pieza="${p[0]}" aria-pressed="${on}"${!on && R.piezas.length >= MAX_PIEZAS ? ' disabled' : ''}>${p[1]} ${esc(p[2])}</button>`; }).join(''));
  pinta('u6Carnet', JSON.stringify(R) + nombreRobot(), () => `<div class="u6-carnet"><div class="big">${rb ? rb[1] : '❔'}</div><b>${esc(nombreRobot() || 'Tu robot')}</b>
    <small>${rb ? esc(rb[2]) : 'Elige el tipo de robot'}${R.sala ? ' · ' + esc(salaDe(C, R.sala)[1]) : ''}</small>
    <div class="pz">${R.piezas.map(id => { const p = PIEZAS.find(x => x[0] === id); return `<span>${p[1]} ${esc(p[2])}</span>`; }).join('') || '<span>Sin capacidades todavía</span>'}</div></div>`);
}
function avisoDato(id, v){
  if (!v.donde || !v.quien) return '';
  const s = SENSIBLES.includes(id);
  if (s && v.quien === 'todos') return '⚠️ Es un dato especialmente delicado: ¿de verdad tiene que verlo toda la plantilla?';
  if (v.donde === 'local') return '⚠️ Si solo está en un ordenador del local, ¿qué pasa si se rompe o lo roban? Piensa en las copias de seguridad.';
  if (v.donde === 'papel' && s) return '⚠️ En papel no hay copia: si se pierde o se moja, se pierde para siempre.';
  return '';
}
function pintarF6(C){
  const D = u6Datos(C);
  pinta('u6Datos', JSON.stringify(D.sel), () => C.datos.map(d => {
    const v = D.sel[d[0]], av = v ? avisoDato(d[0], v) : '';
    return `<div class="u6-dato${v ? ' on' : ''}"><button type="button" data-dsel="${d[0]}" aria-pressed="${!!v}">${v ? '✅' : '⬜'} ${esc(d[1])}</button>
      ${v ? `<select class="u6-sel" data-ddonde="${d[0]}" aria-label="Dónde se guarda: ${esc(d[1])}"><option value="">¿Dónde se guarda?</option>${DONDE.map(o => `<option value="${o[0]}"${v.donde === o[0] ? ' selected' : ''}>${esc(o[1])}</option>`).join('')}</select>
        <select class="u6-sel" data-dquien="${d[0]}" aria-label="Quién lo ve: ${esc(d[1])}"><option value="">¿Quién lo ve?</option>${QUIEN.map(o => `<option value="${o[0]}"${v.quien === o[0] ? ' selected' : ''}>${esc(o[1])}</option>`).join('')}</select>` : '<span></span><span></span>'}
      ${av ? `<p class="av">${esc(av)}</p>` : ''}</div>`;
  }).join(''));
  pinta('u6PlanB', D.planb.join(','), () => PLAN_B.map(p => `<button type="button" class="u6-chip" data-pb="${p[0]}" aria-pressed="${D.planb.includes(p[0])}">${D.planb.includes(p[0]) ? '✅ ' : ''}${esc(p[1])}</button>`).join(''));
}
function svgRuta(C){
  const f = filasRuta(C), R = u6Ruta(), LW = 250, MW = 34, RH = 28, TOP = 26, MG = 6;
  const W = LW + 12 * MW + MG * 2, H = TOP + f.length * RH + MG;
  let s = `<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`;
  for (let m = 0; m < 12; m++) s += `<text x="${LW + m * MW + MW / 2}" y="17" font-size="11" font-weight="700" text-anchor="middle" fill="#96620a">M${m + 1}</text>`;
  f.forEach((r, i) => {
    const y = TOP + i * RH, mes = R[r[0]];
    if (i % 2 === 0) s += `<rect x="0" y="${y}" width="${W}" height="${RH}" fill="#fffaf2"/>`;
    s += `<text x="6" y="${y + 18}" font-size="12" fill="#2f2d3a">${r[1]} ${esc(partir(r[2], 34)[0] + (partir(r[2], 34)[1] ? '…' : ''))}</text>`;
    if (mes){
      s += `<rect x="${LW + (mes - 1) * MW + 2}" y="${y + 5}" width="${(13 - mes) * MW - 4}" height="${RH - 10}" rx="6" fill="#f0c878" opacity=".55"/>`;
      s += `<rect x="${LW + (mes - 1) * MW + 2}" y="${y + 5}" width="${MW - 4}" height="${RH - 10}" rx="6" fill="#b45309"/>`;
    }
  });
  for (let m = 0; m <= 12; m++) s += `<line x1="${LW + m * MW}" y1="${TOP - 4}" x2="${LW + m * MW}" y2="${H - MG}" stroke="#e7e1ef" stroke-width="1"/>`;
  return { svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" font-family="Segoe UI, Arial, sans-serif" role="img" aria-label="Hoja de ruta">${s}</svg>`, w: W, h: H };
}
function pintarF7(C){
  const P = presupuesto(C), f = filasRuta(C), R = u6Ruta();
  pinta('u6Pres', JSON.stringify([P.filas, P.ahorro]), () => `<table class="u6-pres"><thead><tr><th>Qué</th><th class="e">Inversión inicial</th><th class="e">Al mes</th></tr></thead><tbody>
      ${P.filas.map(r => `<tr><td>${r[0]} ${esc(r[1])}</td><td class="e">${eur(r[2])}</td><td class="e">${eur(r[3])}</td></tr>`).join('')}</tbody>
      <tfoot><tr><td>Total</td><td class="e">${eur(P.ini)}</td><td class="e">${eur(P.mes)}</td></tr></tfoot></table>
    <div class="u6-kpis"><div class="u6-kpi"><small>Inversión inicial</small><b>${eur(P.ini)}</b></div><div class="u6-kpi"><small>Gasto al mes</small><b>${eur(P.mes)}</b></div><div class="u6-kpi"><small>Coste del primer año</small><b>${eur(P.anio)}</b></div></div>`);
  pinta('u6Recupera', JSON.stringify([P.ini, P.mes, P.ahorro]), () => !isFinite(P.ahorro) ? '' : P.recupera
    ? `<p class="u6-pista" style="background:#dff3ea;border-color:#9fd8bd;color:#1d5a40">💶 Con ese ahorro, la inversión se recupera en unos <b>${P.recupera} meses</b>.</p>`
    : `<p class="u6-pista">💶 Con ese ahorro, el gasto de cada mes (${eur(P.mes)}) es mayor que lo que ahorras: la inversión no se recupera solo con dinero. ¿Compensa por otros motivos? Explícalo en la 7.4.</p>`);
  pinta('u6RutaSel', JSON.stringify([f, R]), () => f.map(r => `<label><span>${r[1]} ${esc(r[2])}</span><select class="u6-sel" data-ruta="${r[0]}" aria-label="Mes de: ${esc(r[2])}"><option value="">Mes…</option>${Array.from({ length: 12 }, (_, m) => `<option value="${m + 1}"${R[r[0]] === m + 1 ? ' selected' : ''}>Mes ${m + 1}</option>`).join('')}</select></label>`).join(''));
  const tec = f.filter(r => r[0] !== 'formacion' && R[r[0]]).map(r => R[r[0]]);
  pinta('u6RutaAv', String(R.formacion) + '|' + tec.join(','), () => R.formacion && tec.length && R.formacion > Math.min(...tec) ? '<p class="u6-pista">💡 Hay tecnologías que empiezan antes de formar al personal. ¿Sabrá el equipo usarlas? Tú decides, pero explícalo en la 7.3.</p>' : '');
  pinta('u6Gantt', JSON.stringify([f, R]), () => svgRuta(C).svg);
}
function pintarF8(){
  const A = u6Auto();
  pinta('u6Auto', JSON.stringify(A), () => FASES.map((f, i) => `<div class="u6-est"><span>${f[1]} Fase ${i + 1} · ${esc(f[2])}</span>
    <div class="st" role="group" aria-label="Estrellas de la fase ${i + 1}">${[1, 2, 3, 4].map(v => `<button type="button" data-est="${f[0]}" data-v="${v}" aria-pressed="${(A[f[0]] || 0) >= v}" title="${esc(ESTRELLAS[v - 1])}" aria-label="${v} de 4: ${esc(ESTRELLAS[v - 1])}">★</button>`).join('')}</div>
    <small>${A[f[0]] ? esc(ESTRELLAS[A[f[0]] - 1]) : 'Sin valorar'}</small></div>`).join(''));
}
function marcador(id, e){ const m = document.getElementById(id); if (!m) return; m.textContent = e.ok ? '✓ Completo' : e.cuenta; m.classList.toggle('ok', e.ok); }
function alActualizar(){
  if (!document.getElementById('u6Banco')) return;
  const C = C_ACT();
  if (SEL && !analogDe(C, SEL)) SEL = null;
  pintarF1(); pintarF2(C); pintarF3(C); pintarF4(C); pintarF5(C); pintarF6(C); pintarF7(C); pintarF8();
  marcador('u6M1', estadoF1()); marcador('u6M2', estadoF2(C)); marcador('u6M3', estadoF3(C)); marcador('u6M4', estadoF4(C));
  marcador('u6M5', estadoF5(C)); marcador('u6M6', estadoF6(C)); marcador('u6M6b', estadoPlanB(C)); marcador('u6M7', estadoF7(C)); marcador('u6M8', estadoAuto());
  const p = presupuesto(C), m7 = document.getElementById('u6M7a'); if (m7){ m7.textContent = eur(p.anio) + ' el primer año'; }
}

// ===== interacciones (delegadas en el documento) =====
function colocar(id, sala){
  const C = C_ACT(), L = u6Local(C), ya = L.it.find(x => x.id === id);
  if (!analogDe(C, id) || !salaDe(C, sala)) return;
  if (ya && ya.sala === sala){ SEL = null; alActualizar(); return; }
  if (L.it.filter(x => x.sala === sala).length >= MAX_SALA){ aviso(`En esa sala ya hay ${MAX_SALA} objetos. Ponlo en otra.`); return; }
  if (!ya && L.it.length >= MAX_LOCAL){ aviso(`Tu local ya tiene ${MAX_LOCAL} objetos, que es el máximo.`); return; }
  if (ya) ya.sala = sala; else L.it.push({ id, sala, prob: '' });
  SEL = null; pon('local', L);
}
function quitar(id){ const C = C_ACT(), L = u6Local(C); L.it = L.it.filter(x => x.id !== id); if (SEL === id) SEL = null; pon('local', L); }
const refoco = sel => { const n = document.querySelector(sel); if (n) n.focus(); };
document.addEventListener('click', e => {
  const t = e.target && e.target.closest ? e.target : null; if (!t || !t.closest('#tarea')) return;
  const C = C_ACT(); let b;
  // Fase 1
  if ((b = t.closest('[data-lic]'))){ const L = u6Logo(); L.ic = b.dataset.lic; pon('logo', L); refoco(`[data-lic="${L.ic}"]`); return; }
  if ((b = t.closest('[data-lcol]'))){ const L = u6Logo(); L.col = b.dataset.lcol; pon('logo', L); refoco(`[data-lcol="${L.col}"]`); return; }
  // Fase 2
  if ((b = t.closest('#u6Banco [data-ban], #u6Plano2 [data-tok]'))){
    const id = b.dataset.ban || b.dataset.tok; SEL = SEL === id ? null : id; alActualizar();
    if (SEL) aviso(b.dataset.tok ? 'Toca otra sala para moverlo.' : 'Ahora toca la sala donde lo quieres poner.', 2200); return;
  }
  if ((b = t.closest('#u6Plano2 [data-sala]'))){ if (SEL) colocar(SEL, b.dataset.sala); else aviso('Primero toca un objeto de la lista.'); return; }
  if ((b = t.closest('[data-quita]'))){ quitar(b.dataset.quita); return; }
  // Fase 3
  if ((b = t.closest('[data-addrol]'))){
    const O = u6Org(C); if (O.p.length >= MAX_ORG){ aviso(`Como mucho ${MAX_ORG} personas.`); return; }
    const r = rolDe(C, b.dataset.addrol), x = { id: nuevoId('p'), rol: r[0], pu: '', nom: '', niv: r[3], jefe: '' };
    x.jefe = jefeAuto(O.p, x); O.p.push(x); FOCO = x.id; pon('org', O); return;
  }
  if ((b = t.closest('[data-quitap]'))){
    const O = u6Org(C), x = O.p.find(y => y.id === b.dataset.quitap); if (!x) return;
    O.p = O.p.filter(y => y.id !== x.id); O.p.forEach(y => { if (y.jefe === x.id) y.jefe = x.jefe; });
    O.p.forEach(y => { if (y.niv > 1 && !jefeValido(O.p, y)) y.jefe = jefeAuto(O.p, y); }); pon('org', O); return;
  }
  // Fase 4
  if ((b = t.closest('[data-modo4]'))){ MODO4 = b.dataset.modo4; alActualizar(); return; }
  // Fase 5
  if ((b = t.closest('[data-rob]'))){ const R = u6Robot(C); R.tipo = b.dataset.rob; pon('robot', R); refoco(`[data-rob="${R.tipo}"]`); return; }
  if ((b = t.closest('[data-pieza]'))){
    const R = u6Robot(C), id = b.dataset.pieza;
    if (R.piezas.includes(id)) R.piezas = R.piezas.filter(x => x !== id); else if (R.piezas.length < MAX_PIEZAS) R.piezas.push(id); else { aviso(`Como mucho ${MAX_PIEZAS} capacidades.`); return; }
    pon('robot', R); refoco(`[data-pieza="${id}"]`); return;
  }
  // Fase 6
  if ((b = t.closest('[data-dsel]'))){ const D = u6Datos(C), id = b.dataset.dsel; if (D.sel[id]) delete D.sel[id]; else D.sel[id] = { donde: '', quien: '' }; pon('datos', D); refoco(`[data-dsel="${id}"]`); return; }
  if ((b = t.closest('[data-pb]'))){ const D = u6Datos(C), id = b.dataset.pb; D.planb = D.planb.includes(id) ? D.planb.filter(x => x !== id) : [...D.planb, id]; pon('datos', D); refoco(`[data-pb="${id}"]`); return; }
  // Fase 8
  if ((b = t.closest('[data-est]'))){ const A = u6Auto(); A[b.dataset.est] = +b.dataset.v; pon('auto', A); refoco(`[data-est="${b.dataset.est}"][data-v="${b.dataset.v}"]`); return; }
});
document.addEventListener('change', e => {
  const t = e.target; if (!t || !t.matches || !t.closest('#tarea')) return;
  const C = C_ACT(), d = t.dataset;
  if (d.msala){ colocar(d.msala, t.value); refoco(`[data-msala="${d.msala}"]`); return; }
  if (d.pniv){ const O = u6Org(C), x = O.p.find(y => y.id === d.pniv); if (!x) return; x.niv = +t.value; if (x.niv === 1) x.jefe = ''; else if (!jefeValido(O.p, x)) x.jefe = jefeAuto(O.p, x);
    O.p.forEach(y => { if (y.niv > 1 && !jefeValido(O.p, y)) y.jefe = jefeAuto(O.p, y); }); pon('org', O); refoco(`[data-pniv="${d.pniv}"]`); return; }
  if (d.pjefe){ const O = u6Org(C), x = O.p.find(y => y.id === d.pjefe); if (!x) return; x.jefe = t.value; pon('org', O); refoco(`[data-pjefe="${d.pjefe}"]`); return; }
  if (d.dgt || d.dga){ const D = u6Digi(C), k = d.dgt || d.dga; D[k] = D[k] || { t: '', amb: '', res: '', ries: '' };
    if (d.dgt) D[k].t = t.value; else D[k].amb = t.value; pon('digi', D); refoco(d.dgt ? `[data-dgt="${k}"]` : `[data-dga="${k}"]`); return; }
  if (d.rbs){ const R = u6Robot(C); R.sala = t.value; pon('robot', R); return; }
  if (d.ddonde || d.dquien){ const D = u6Datos(C), k = d.ddonde || d.dquien; if (!D.sel[k]) return; D.sel[k][d.ddonde ? 'donde' : 'quien'] = t.value; pon('datos', D); refoco(d.ddonde ? `[data-ddonde="${k}"]` : `[data-dquien="${k}"]`); return; }
  if (d.ruta){ const R = u6Ruta(); if (t.value) R[d.ruta] = +t.value; else delete R[d.ruta]; pon('ruta', R); refoco(`[data-ruta="${d.ruta}"]`); return; }
});
document.addEventListener('input', e => {
  const t = e.target; if (!t || !t.matches || !t.closest('#tarea')) return;
  const C = C_ACT(), d = t.dataset;
  if (d.prob){ const L = u6Local(C), x = L.it.find(y => y.id === d.prob); if (!x) return; x.prob = t.value.slice(0, 200); ponEscribiendo('local', L, 'u6Lista2', () => firmaLocal(C_ACT())); return; }
  if (d.pnom || d.ppu){ const O = u6Org(C), x = O.p.find(y => y.id === (d.pnom || d.ppu)); if (!x) return; x[d.pnom ? 'nom' : 'pu'] = t.value.slice(0, 40);
    ponEscribiendo('org', O, 'u6Pers', () => JSON.stringify(u6Org(C_ACT()).p.map(y => [y.id, y.rol, y.niv, y.jefe]))); return; }
  if (d.dgr || d.dgq){ const D = u6Digi(C), k = d.dgr || d.dgq; if (!D[k]) return; D[k][d.dgr ? 'res' : 'ries'] = t.value.slice(0, 220);
    ponEscribiendo('digi', D, 'u6Digi', () => { const C2 = C_ACT(), D2 = u6Digi(C2); return JSON.stringify(u6Local(C2).it) + '|' + JSON.stringify(Object.fromEntries(Object.entries(D2).map(([a, v]) => [a, [v.t, v.amb]]))); }); return; }
  // Campos sueltos (nombre de la empresa, lema, robot, ahorro): se guardan y se repinta lo que los muestra
  if (d.campo && t.type === 'text') programarGuardado();
});
// Pegar texto en las casillas del ejercicio: no (las respuestas se escriben)
document.addEventListener('paste', e => { const t = e.target; if (t && t.matches && t.matches('#tarea input[type=text]')){ e.preventDefault(); aviso('✋ El texto tienes que escribirlo tú.'); } }, true);
// Arrastrar y soltar (ordenador): objetos de la lista y del plano a una sala, o de vuelta a la lista para quitarlos
document.addEventListener('dragstart', e => { const a = e.target.closest && e.target.closest('#u6Banco [data-ban], #u6Plano2 [data-tok]'); if (a){ e.dataTransfer.setData('text/plain', 'u6:' + (a.dataset.ban || a.dataset.tok)); e.dataTransfer.effectAllowed = 'move'; } });
const limpiaSobre = () => document.querySelectorAll('#u6J2 .sobre').forEach(x => x.classList.remove('sobre'));
// Sobre una sala o la lista se permite soltar y el motor común no llega a decir «aquí no» (su dragover solo admite imágenes en las cajas)
document.addEventListener('dragover', e => { const z = e.target.closest && e.target.closest('#u6Plano2 [data-sala], #u6Banco'); if (z){ e.preventDefault(); e.stopImmediatePropagation(); if (e.dataTransfer) e.dataTransfer.dropEffect = 'move'; limpiaSobre(); z.classList.add('sobre'); } });
document.addEventListener('dragend', limpiaSobre);
document.addEventListener('drop', e => {
  const z = e.target.closest && e.target.closest('#u6Plano2 [data-sala], #u6Banco'); if (!z) return;
  const v = e.dataTransfer.getData('text/plain'); if (!/^u6:/.test(v)) return;
  e.preventDefault(); e.stopPropagation(); limpiaSobre();
  if (z.id === 'u6Banco') quitar(v.slice(3)); else colocar(v.slice(3), z.dataset.sala);
}, true);

// ===== Antes de entregar =====
function listaChecks(C){
  const c = (e, t) => ({ ok: e.ok, t, cuenta: e.cuenta, falta: e.falta });
  const k = (ids, t) => { const n = cuentaLlenas(ids); return { ok: n === ids.length, t, cuenta: `${n}/${ids.length}`, falta: 'Responde a todas las preguntas de esta fase.' }; };
  return [
    c(estadoF1(), 'Fase 1 · Ficha y logo'), k(['f1_mision', 'f1_objetivos', 'f1_dia'], 'Fase 1 · Preguntas'),
    c(estadoF2(C), 'Fase 2 · El local analógico'), k(['f2_areas'], 'Fase 2 · Pregunta'),
    c(estadoF3(C), 'Fase 3 · Organigrama'), k(['f3_lider'], 'Fase 3 · Pregunta'),
    c(estadoF4(C), 'Fase 4 · ¡Digitalízalo!'), k(['f4_dia', 'f4_integracion'], 'Fase 4 · Preguntas'),
    c(estadoF5(C), 'Fase 5 · Tu robot'), k(['f5_tareas', 'f5_humano'], 'Fase 5 · Preguntas'),
    c(estadoF6(C), 'Fase 6 · Dónde se guarda cada dato'), c(estadoPlanB(C), 'Fase 6 · Plan B'), k(['f6_brechas', 'f6_rgpd', 'f6_analisis'], 'Fase 6 · Preguntas'),
    c(estadoF7(C), 'Fase 7 · Ahorro y hoja de ruta'), k(['f7_formacion', 'f7_merece'], 'Fase 7 · Preguntas'),
    k(['f8_t1', 'f8_t2', 'f8_reflexion', 'f8_auto'], 'Fase 8 · Preguntas'), c(estadoAuto(), 'Fase 8 · Autoevaluación')
  ];
}
// Progreso: las cajas y, además, las 9 partes interactivas
function progresoPropio(){
  const C = C_ACT(), eds = [...document.querySelectorAll('.ed')], ll = eds.filter(tieneContenido).length;
  const partes = [estadoF1(), estadoF2(C), estadoF3(C), estadoF4(C), estadoF5(C), estadoF6(C), estadoPlanB(C), estadoF7(C), estadoAuto()];
  const total = eds.length + partes.length, hechas = ll + partes.reduce((s, e) => s + (e.ok ? 1 : Math.max(0, Math.min(.95, e.frac || 0))), 0);
  return { hechas, total, texto: `${Math.round(hechas / total * 100)} % del ejercicio hecho` };
}

// ===== Ejemplo relleno (solo texto de muestra) =====
function ejemploCampos(){
  const C = C_ACT(), o = {};
  o.emp_nombre = C.ejemploNombre; o.emp_lema = '[Lema de la empresa]'; o.emp_lugar = '[Municipio o isla]';
  o.logo = JSON.stringify({ ic: LOGO_ICONOS[0], col: LOGO_COLORES[0] });
  const it = C.analogBank.slice(0, 9).map((a, i) => ({ id: a[0], sala: C.salas[i % C.salas.length][0], prob: '[Problema que da en tu empresa]' }));
  o.local = JSON.stringify({ it });
  const dir = C.roles.find(r => r[3] === 1), mandos = C.roles.filter(r => r[3] === 2), equipo = C.roles.filter(r => r[3] === 3);
  const p = [{ id: 'p0', rol: dir[0], pu: '', nom: '[Nombre]', niv: 1, jefe: '' }];
  mandos.forEach((r, i) => p.push({ id: 'm' + i, rol: r[0], pu: '', nom: '[Nombre]', niv: 2, jefe: 'p0' }));
  equipo.slice(0, 5).forEach((r, i) => p.push({ id: 'e' + i, rol: r[0], pu: '', nom: '[Nombre]', niv: 3, jefe: mandos.length ? 'm' + (i % mandos.length) : 'p0' }));
  o.org = JSON.stringify({ p });
  const dg = {};
  it.forEach((x, i) => {
    if (i === it.length - 1){ dg[x.id] = { t: 'no', amb: '', res: '[Por qué es mejor no digitalizarlo]', ries: '' }; return; }
    const d = C.digitalBank.find(t => t[6].includes(x.id)) || C.digitalBank[i % C.digitalBank.length];
    dg[x.id] = { t: d[0], amb: AMBITOS[i % AMBITOS.length][0], res: '[Qué problema resuelve]', ries: '[Qué riesgo trae]' };
  });
  o.digi = JSON.stringify(dg);
  o.robot = JSON.stringify({ tipo: 'autonomo', piezas: ['p_obstaculos', 'p_bandeja', 'p_pantalla'], sala: C.salas[0][0] }); o.robot_nom = '[Nombre del robot]';
  o.datos = JSON.stringify({ sel: Object.fromEntries(C.datos.slice(0, 5).map(d => [d[0], { donde: 'gestion', quien: 'equipo' }])), planb: PLAN_B.slice(0, 4).map(x => x[0]) });
  o.ahorro_mes = '400';
  const ruta = { formacion: 1, robot: 10 }; let m = 2;
  for (const t of new Set(Object.values(dg).map(v => v.t).filter(t => t !== 'no'))) ruta[t] = Math.min(12, m++);
  o.ruta = JSON.stringify(ruta);
  o.auto = JSON.stringify(Object.fromEntries(FASES.map(f => [f[0], 3])));
  return o;
}
function ejemploRespuesta(id){
  const t = s => `<p>${s}</p>`;
  if (id === 'f1_objetivos') return '<ol><li>[Objetivo 1: qué, cuánto y para cuándo]</li><li>[Objetivo 2]</li><li>[Objetivo 3]</li></ol>';
  if (id === 'f5_tareas') return '<ol><li>[Tarea 1]</li><li>[Tarea 2]</li><li>[Tarea 3]</li></ol>';
  if (id === 'f6_brechas') return '<ul><li><b>[Tecnología 1]:</b> [qué podría fallar y cómo lo evitas]</li><li><b>[Tecnología 2]:</b> [...]</li><li><b>[Tecnología 3]:</b> [...]</li></ul>';
  if (id === 'f8_t2') return '<p><b>[Nombre de tu invento]</b></p><p>[Texto de muestra] Qué hace y qué problema de tu sector resuelve.</p>';
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · web o institución · fecha · enlace]</li><li>[Fuente 2]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  if (/^f\d_/.test(id)) return t('[Texto de muestra] Tu respuesta, con tus palabras y aplicada a tu empresa.');
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
  document.addEventListener('dragstart', e => { if (!propio(e) && !(e.target.closest && e.target.closest('#u6Banco [data-ban], #u6Plano2 [data-tok]'))) e.preventDefault(); }, true);
  // Ctrl/Cmd + A, C, X, P, S, U fuera de las respuestas
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && !e.altKey && ['a', 'c', 'x', 'p', 's', 'u'].includes(String(e.key).toLowerCase()) && !propio(e)) e.preventDefault(); }, true); }

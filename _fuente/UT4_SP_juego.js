// ===== UT4_SP · La pelea con aspecto de videojuego de combate por turnos =====
// Se incluye en UT4_SP.js (marca INCLUYE). Solo es la pantalla: los datos, la nota y lo que se guarda están en UT4_SP.js
// (campo «pelea»: { s: semilla, r: { turno: opción } }). Fases: inicio → turno → ataque → resultado del turno → (asalto nuevo) → final.

// ---------- colores de cada especialidad y escenarios de cada asalto ----------
const G_ESPEC = { ei: { c: '#ff7eb3', e: '🧸' }, is: { c: '#a98bff', e: '🤝' }, mc: { c: '#4fc3f7', e: '🤟' }, ce: { c: '#ff9a3c', e: '🚒' } };
const G_ESCENA = [
  { a: '#0a1838', b: '#1d4a8c', luz: '#00e5ff' },
  { a: '#22072f', b: '#7b1d6e', luz: '#ff7ad9' },
  { a: '#04201a', b: '#0f5c45', luz: '#b6ff3b' },
  { a: '#260a05', b: '#7c2b10', luz: '#ffb03b' },
  { a: '#07030f', b: '#3d1a72', luz: '#d6b8ff' }
];
const G_FORMAS = [
  { c1: '#8fdcff', c2: '#00e5ff' }, { c1: '#ff86de', c2: '#ffe066' }, { c1: '#5fe3a6', c2: '#c4ff3b' },
  { c1: '#ff8f52', c2: '#ffd23f' }, { c1: '#b893ff', c2: '#ffffff' }
];

// ---------- dibujos (SVG propios) ----------
function gHumano(col, emb){
  return `<svg viewBox="0 0 120 170" class="g-svg" aria-hidden="true">
  <defs><radialGradient id="gHalo"><stop offset="0" stop-color="#fff" stop-opacity=".95"/><stop offset="1" stop-color="${col}" stop-opacity="0"/></radialGradient></defs>
  <path d="M38 64 Q16 118 26 152 L94 152 Q104 118 82 64 Z" fill="${col}" opacity=".9"/>
  <path d="M38 64 Q22 118 30 152 L40 152 Q34 116 46 70Z" fill="#000" opacity=".15"/>
  <rect x="46" y="118" width="11" height="34" rx="5" fill="#2b2f45"/><rect x="63" y="118" width="11" height="34" rx="5" fill="#2b2f45"/>
  <ellipse cx="51" cy="153" rx="9" ry="5" fill="#161a2b"/><ellipse cx="69" cy="153" rx="9" ry="5" fill="#161a2b"/>
  <rect x="29" y="72" width="10" height="36" rx="5" fill="#f1c9a5" transform="rotate(14 34 74)"/>
  <path d="M40 70 Q60 60 80 70 L84 122 Q60 131 36 122 Z" fill="#f6f3ec"/>
  <path d="M40 70 Q60 61 80 70 L81 81 Q60 73 39 81Z" fill="${col}"/>
  <circle cx="60" cy="99" r="15" fill="url(#gHalo)" class="g-corazon-halo"/>
  <path d="M60 106 l-7.5-7.5 a4.6 4.6 0 0 1 7.5-5.6 a4.6 4.6 0 0 1 7.5 5.6z" fill="#ff4d6d"/>
  <rect x="80" y="72" width="10" height="34" rx="5" fill="#f1c9a5" transform="rotate(-28 85 74)"/>
  <circle cx="99" cy="96" r="16" fill="#fff" stroke="${col}" stroke-width="4"/><text x="99" y="102" font-size="17" text-anchor="middle">${emb}</text>
  <circle cx="60" cy="44" r="20" fill="#f1c9a5"/>
  <path d="M39 44 Q40 19 62 21 Q82 22 81 44 Q74 30 58 31 Q47 33 39 44Z" fill="#3b2a20"/>
  <g class="g-ojos-h"><circle cx="53" cy="46" r="2.7" fill="#222"/><circle cx="67" cy="46" r="2.7" fill="#222"/></g>
  <path d="M54 54 Q60 58.5 66 54" stroke="#a0522d" stroke-width="2.2" fill="none" stroke-linecap="round"/>
</svg>`;
}
function gNexa(k){
  const { c1, c2 } = G_FORMAS[k];
  const ojos = [
    `<path d="M60 56 q6 -9 12 0 M88 56 q6 -9 12 0" stroke="${c2}" stroke-width="4" fill="none" stroke-linecap="round"/>`,
    `<circle cx="66" cy="53" r="5" fill="${c2}"/><path d="M88 53 h12" stroke="${c2}" stroke-width="5" stroke-linecap="round"/>`,
    `<circle cx="80" cy="53" r="12" fill="${c2}"/><circle cx="80" cy="53" r="6" fill="#0b1020" class="g-iris"/><circle cx="83" cy="50" r="2" fill="#fff"/>`,
    `<path d="M58 48 l16 7 v4 l-16 -4z M102 48 l-16 7 v4 l16 -4z" fill="${c2}"/>`,
    `<rect x="58" y="51" width="18" height="4" rx="2" fill="${c2}"/><rect x="84" y="51" width="18" height="4" rx="2" fill="${c2}"/>`
  ][k];
  const extra = [
    `<line x1="80" y1="26" x2="80" y2="12" stroke="${c1}" stroke-width="3"/><circle cx="80" cy="10" r="5" fill="${c2}" class="g-parpadeo"/>`,
    `<ellipse cx="70" cy="26" rx="26" ry="9" fill="#e84393" transform="rotate(-12 70 26)"/><circle cx="56" cy="20" r="4" fill="#e84393"/>
     <g transform="translate(124 86) rotate(30)"><rect x="-3" y="-26" width="6" height="30" rx="3" fill="#8d5524"/><path d="M-5 -26 q5 -14 10 0z" fill="${c2}"/></g>
     <circle cx="30" cy="40" r="4" fill="#ffe066" class="g-flota"/><circle cx="134" cy="34" r="3" fill="#7af" class="g-flota"/><circle cx="24" cy="70" r="3" fill="#7f7" class="g-flota"/>`,
    `<g class="g-orbita"><circle cx="20" cy="56" r="7" fill="#1b2b26" stroke="${c2}" stroke-width="2"/><circle cx="20" cy="56" r="3" fill="${c2}"/>
     <circle cx="140" cy="56" r="7" fill="#1b2b26" stroke="${c2}" stroke-width="2"/><circle cx="140" cy="56" r="3" fill="${c2}"/></g>
     <path d="M80 66 L40 150 L120 150Z" fill="${c2}" opacity=".12" class="g-escaner"/>`,
    `<path d="M36 90 q-8 -6 -2 -16 l22 6 v16z M124 90 q8 -6 2 -16 l-22 6 v16z" fill="${c1}" stroke="${c2}" stroke-width="2"/>
     <rect x="18" y="104" width="22" height="10" rx="3" fill="#3a3a48"/><rect x="120" y="104" width="22" height="10" rx="3" fill="#3a3a48"/>
     <circle cx="18" cy="109" r="4" fill="${c2}" class="g-parpadeo"/><circle cx="142" cy="109" r="4" fill="${c2}" class="g-parpadeo"/>`,
    `<g class="g-anillos"><ellipse cx="80" cy="54" rx="64" ry="16" fill="none" stroke="${c2}" stroke-width="2" opacity=".7"/>
     <ellipse cx="80" cy="54" rx="56" ry="22" fill="none" stroke="${c1}" stroke-width="2" opacity=".6" transform="rotate(30 80 54)"/></g>
     <path d="M54 26 l6 -14 l8 12 l12 -16 l12 16 l8 -12 l6 14z" fill="${c2}" opacity=".9"/>`
  ][k];
  return `<svg viewBox="0 0 160 170" class="g-svg" aria-hidden="true">
  <defs><radialGradient id="gAura${k}"><stop offset="0" stop-color="${c2}" stop-opacity=".45"/><stop offset="1" stop-color="${c2}" stop-opacity="0"/></radialGradient></defs>
  <circle cx="80" cy="84" r="76" fill="url(#gAura${k})" class="g-aura"/>
  <path d="M68 140 q12 26 24 0z" fill="${c2}" opacity=".8" class="g-fuego"/>
  <rect x="34" y="94" width="12" height="32" rx="6" fill="${c1}" transform="rotate(16 40 96)"/><rect x="114" y="94" width="12" height="32" rx="6" fill="${c1}" transform="rotate(-16 120 96)"/>
  <path d="M48 92 Q80 80 112 92 L106 136 Q80 146 54 136 Z" fill="${c1}"/>
  <path d="M48 92 Q80 80 112 92 L110 104 Q80 94 50 104Z" fill="#fff" opacity=".18"/>
  <circle cx="80" cy="116" r="10" fill="${c2}" class="g-nucleo"/><circle cx="80" cy="116" r="4" fill="#fff"/>
  ${k === 4 ? '' : ''}<rect x="42" y="26" width="76" height="58" rx="20" fill="${c1}" stroke="${c2}" stroke-width="3"/>
  <rect x="50" y="38" width="60" height="30" rx="13" fill="#0b1020"/>
  <g class="g-ojos">${ojos}</g>
  ${extra}
</svg>`;
}
const G_CIUDAD = `<svg viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true"><path d="M0 60 V38 h18 V22 h14 V34 h12 V12 h20 V30 h10 V18 h16 V40 h14 V26 h22 V8 h12 V30 h18 V20 h16 V36 h10 V14 h24 V32 h14 V24 h18 V42 h12 V16 h20 V34 h16 V26 h14 V44 h20 V20 h14 V60 Z" fill="currentColor"/></svg>`;

// ---------- sonidos (sintetizados, sin archivos) ----------
const SFX = (() => {
  let ctx = null;
  const on = () => { try { return localStorage.getItem('hx_sonido') !== '0'; } catch(e){ return true; } };
  const ac = () => { if (!ctx){ const A = window.AudioContext || window.webkitAudioContext; if (!A) return null; ctx = new A(); } if (ctx.state === 'suspended') ctx.resume(); return ctx; };
  function tono(f, d, tipo = 'square', v = 0.05, f2 = null, delay = 0){
    if (!on()) return; const c = ac(); if (!c) return; const t = c.currentTime + delay;
    const o = c.createOscillator(), g = c.createGain(); o.type = tipo; o.frequency.setValueAtTime(f, t);
    if (f2) o.frequency.exponentialRampToValueAtTime(f2, t + d);
    g.gain.setValueAtTime(v, t); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
    o.connect(g); g.connect(c.destination); o.start(t); o.stop(t + d + 0.02);
  }
  function ruido(d, v = 0.12){
    if (!on()) return; const c = ac(); if (!c) return;
    const b = c.createBuffer(1, c.sampleRate * d, c.sampleRate), x = b.getChannelData(0);
    for (let i = 0; i < x.length; i++) x[i] = (Math.random() * 2 - 1) * (1 - i / x.length);
    const s = c.createBufferSource(), g = c.createGain(); s.buffer = b; g.gain.value = v; s.connect(g); g.connect(c.destination); s.start();
  }
  return {
    on, poner(v){ try { localStorage.setItem('hx_sonido', v ? '1' : '0'); } catch(e){} },
    elegir(){ tono(880, 0.05, 'square', 0.035); },
    disparo(){ tono(320, 0.25, 'triangle', 0.07, 1200); },
    golpe(){ ruido(0.18, 0.18); tono(140, 0.2, 'square', 0.06, 60); },
    laser(){ tono(1400, 0.4, 'sawtooth', 0.045, 90); },
    dano(){ ruido(0.25, 0.14); tono(200, 0.3, 'sawtooth', 0.05, 70); },
    ronda(){ [392, 523, 659, 784].forEach((f, i) => tono(f, 0.14, 'square', 0.045, null, i * 0.11)); },
    gana(){ [523, 659, 784, 1046, 784, 1046].forEach((f, i) => tono(f, 0.18, 'square', 0.05, null, i * 0.13)); },
    pierde(){ [392, 330, 262, 196].forEach((f, i) => tono(f, 0.28, 'triangle', 0.06, null, i * 0.22)); },
    letra(){ tono(1200 + Math.random() * 200, 0.02, 'square', 0.012); }
  };
})();

// ---------- estilos del juego ----------
document.head.insertAdjacentHTML('beforeend', `<style>
.hx-punt{background:#fff6dc;border:1.5px solid #e2b93b;border-radius:12px;padding:.55rem .8rem;margin:0 0 .8rem;font-size:.93rem;color:#5c4300}
.g{--luz:#00e5ff;font-family:system-ui,"Segoe UI",Roboto,sans-serif;user-select:none}
.g-pantalla{position:relative;aspect-ratio:16/9;border-radius:18px;overflow:hidden;background:linear-gradient(180deg,var(--ga),var(--gb));border:3px solid #0b0f1f;box-shadow:0 0 0 3px var(--luz),0 10px 30px rgba(0,0,0,.35);transition:background 1s}
.g-pantalla:after{content:'';position:absolute;inset:0;pointer-events:none;background:repeating-linear-gradient(0deg,rgba(255,255,255,.035) 0 1px,transparent 1px 3px);z-index:30}
.g-estrellas{position:absolute;inset:0 0 40% 0;background-image:radial-gradient(1.5px 1.5px at 10% 20%,#fff,transparent),radial-gradient(1px 1px at 30% 60%,#fff,transparent),radial-gradient(1.5px 1.5px at 55% 15%,#fff,transparent),radial-gradient(1px 1px at 75% 40%,#fff,transparent),radial-gradient(1.5px 1.5px at 90% 25%,#fff,transparent),radial-gradient(1px 1px at 45% 45%,#fff,transparent),radial-gradient(1px 1px at 20% 80%,#fff,transparent),radial-gradient(1.5px 1.5px at 65% 70%,#fff,transparent);opacity:.7;animation:gTitila 4s infinite alternate}
@keyframes gTitila{to{opacity:.35}}
.g-luna{position:absolute;right:9%;top:9%;width:9%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 35%,#fff,var(--luz));box-shadow:0 0 40px var(--luz);opacity:.85}
.g-ciudad{position:absolute;left:0;right:0;bottom:40%;height:16%;color:rgba(0,0,0,.45)}
.g-ciudad svg{width:100%;height:100%;display:block}
.g-suelo{position:absolute;left:-30%;right:-30%;bottom:-6%;height:52%;transform:perspective(220px) rotateX(58deg);transform-origin:bottom;background:linear-gradient(transparent 0,rgba(0,0,0,.45) 100%),repeating-linear-gradient(90deg,var(--luz) 0 2px,transparent 2px 60px),repeating-linear-gradient(0deg,var(--luz) 0 2px,transparent 2px 40px);opacity:.75;animation:gSuelo 3s linear infinite}
@keyframes gSuelo{to{background-position:0 0,0 0,0 40px}}
.g-hud{position:absolute;top:4%;width:36%;background:rgba(8,12,30,.82);border:2px solid rgba(255,255,255,.75);border-radius:10px;padding:.35rem .55rem;color:#fff;z-index:10;box-shadow:0 3px 0 rgba(0,0,0,.4)}
.g-hud-tu{left:2.5%}.g-hud-ia{right:2.5%}
.g-hud .nm{display:flex;justify-content:space-between;gap:.4rem;font-weight:900;font-size:clamp(.62rem,1.6vw,.95rem);letter-spacing:.04em;text-transform:uppercase;white-space:nowrap;overflow:hidden}
.g-hud .nm span:first-child{overflow:hidden;text-overflow:ellipsis}
.g-hud .nv{color:#ffd166}
.g-hud .lb{display:flex;align-items:center;gap:.35rem;font-size:clamp(.5rem,1.2vw,.72rem);font-weight:800;color:#ffd166;margin-top:.2rem}
.g-barra{flex:1;height:clamp(7px,1.4vw,11px);background:#2a2f45;border:1.5px solid #000;border-radius:6px;overflow:hidden}
.g-barra i{display:block;height:100%;width:100%;background:linear-gradient(#7dffa8,#22c55e);transition:width .8s cubic-bezier(.2,.9,.3,1),background .4s}
.g-barra i.med{background:linear-gradient(#ffe48a,#f5b70b)}.g-barra i.baja{background:linear-gradient(#ff9a9a,#ef4444)}
.g-hud .hp{font-size:clamp(.5rem,1.2vw,.75rem);font-weight:800;text-align:right;font-variant-numeric:tabular-nums}
.g-hud.peligro{animation:gPeligro .8s infinite}
@keyframes gPeligro{50%{border-color:#ff4d4d;box-shadow:0 0 14px #ff4d4d}}
.g-luch{position:absolute;z-index:5}
.g-luch .g-svg{width:100%;height:auto;display:block;overflow:visible}
.g-tu .g-svg{filter:drop-shadow(0 0 10px rgba(255,255,255,.28))}
.g-tu{left:9%;bottom:6%;width:21%}
.g-ia{right:12%;bottom:30%;width:23%}
.g-sombra{position:absolute;left:15%;right:15%;bottom:-4%;height:9%;border-radius:50%;background:rgba(0,0,0,.45);filter:blur(2px)}
.g-ia .g-sombra{bottom:-16%;opacity:.6}
.g-tu .g-cuerpo{animation:gRespira 2.4s ease-in-out infinite;transform-origin:bottom}
.g-ia .g-cuerpo{animation:gFlota 3s ease-in-out infinite}
@keyframes gRespira{50%{transform:scaleY(1.025) translateY(-1px)}}
@keyframes gFlota{50%{transform:translateY(-6%)}}
.g-fuego{animation:gFuego .25s infinite alternate;transform-origin:80px 140px}
@keyframes gFuego{to{transform:scaleY(.7);opacity:.5}}
.g-parpadeo{animation:gParp 1.2s infinite}
@keyframes gParp{50%{opacity:.25}}
.g-anillos{animation:gGira 6s linear infinite;transform-origin:80px 54px}
.g-orbita{animation:gGira 5s linear infinite;transform-origin:80px 56px}
@keyframes gGira{to{transform:rotate(360deg)}}
.g-escaner{animation:gEsc 2s ease-in-out infinite alternate;transform-origin:80px 66px}
@keyframes gEsc{from{transform:rotate(-18deg)}to{transform:rotate(18deg)}}
.g-flota{animation:gFlota 2s ease-in-out infinite}
.g-aura{animation:gAura 2s ease-in-out infinite alternate}
@keyframes gAura{to{opacity:.55}}
.g-ojos-h{animation:gParpH 4s infinite}
@keyframes gParpH{0%,94%,100%{transform:scaleY(1)}97%{transform:scaleY(.1)}}
.g-ojos-h{transform-origin:60px 46px}
.g-herido .g-svg{animation:gHerido 1.4s infinite}
@keyframes gHerido{50%{filter:saturate(.3) brightness(.85)}}
.g-chip{position:absolute;left:50%;bottom:3%;transform:translateX(-50%);background:rgba(8,12,30,.85);color:#fff;border:2px solid var(--luz);border-radius:999px;padding:.15rem .8rem;font-weight:900;font-size:clamp(.55rem,1.3vw,.8rem);letter-spacing:.08em;z-index:10;white-space:nowrap}
.g-racha{position:absolute;left:50%;top:22%;transform:translateX(-50%);color:#ffd166;font-weight:900;font-size:clamp(.8rem,2.4vw,1.4rem);text-shadow:0 2px 0 #b45309,0 0 12px #ff8800;z-index:12;opacity:0;pointer-events:none}
.g-son{position:absolute;right:1.5%;bottom:3%;z-index:20;width:44px;height:44px;border-radius:50%;border:2px solid rgba(255,255,255,.7);background:rgba(8,12,30,.7);color:#fff;font-size:1.1rem;cursor:pointer}
.g-fx{position:absolute;inset:0;pointer-events:none;z-index:15;overflow:hidden}
.g-bala{position:absolute;width:5%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle,#fff 0 30%,var(--bala,#ffd166) 60%,transparent 72%);box-shadow:0 0 18px 6px var(--bala,#ffd166)}
.g-chispa{position:absolute;width:8px;height:8px;border-radius:50%;background:#fff;box-shadow:0 0 8px 2px var(--luz)}
.g-num{position:absolute;font-weight:900;font-size:clamp(1rem,3.2vw,2rem);color:#fff;-webkit-text-stroke:2px #000;paint-order:stroke;text-shadow:0 3px 0 #000}
.g-num.ia{color:#ffd166}.g-num.tu{color:#ff6b6b}
.g-laser{position:absolute;height:clamp(6px,1.2vw,12px);border-radius:8px;transform-origin:0 50%;background:linear-gradient(90deg,#fff,var(--laser,#ff3b6b));box-shadow:0 0 16px 4px var(--laser,#ff3b6b)}
.g-flash{position:absolute;inset:0;z-index:25;pointer-events:none;opacity:0}
.g-ov{position:absolute;inset:0;z-index:28;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.5rem;text-align:center;color:#fff;background:radial-gradient(circle at 50% 40%,rgba(20,26,60,.78),rgba(3,5,15,.94));padding:4%}
.g-ov[hidden]{display:none}
.g-tit{font-weight:1000;font-size:clamp(1.3rem,5.2vw,3.2rem);line-height:1;letter-spacing:.03em;text-transform:uppercase;color:#fff;text-shadow:3px 0 #ff2bd6,-3px 0 #00e5ff,0 4px 0 #000;animation:gGlitch 2.2s infinite}
@keyframes gGlitch{0%,90%,100%{text-shadow:3px 0 #ff2bd6,-3px 0 #00e5ff,0 4px 0 #000;transform:none}92%{text-shadow:-5px 0 #ff2bd6,5px 0 #00e5ff,0 4px 0 #000;transform:translateX(2px) skewX(-6deg)}95%{transform:translateX(-2px)}}
.g-sub{font-size:clamp(.7rem,1.8vw,1.05rem);opacity:.9;max-width:34em}
.g-gbtn{margin-top:.4rem;min-height:48px;padding:.5rem 1.4rem;border-radius:12px;border:3px solid #000;background:linear-gradient(#ffe066,#f59e0b);color:#1a1200;font-weight:1000;font-size:clamp(.85rem,2vw,1.1rem);letter-spacing:.06em;text-transform:uppercase;cursor:pointer;box-shadow:0 5px 0 #000;animation:gLate 1.2s infinite}
.g-gbtn:active{transform:translateY(3px);box-shadow:0 2px 0 #000}
@keyframes gLate{50%{filter:brightness(1.15)}}
.g-asalto{font-weight:1000;font-size:clamp(1.6rem,7vw,4.4rem);letter-spacing:.06em;color:#ffd166;text-shadow:0 5px 0 #b45309,0 0 22px rgba(255,180,0,.6)}
.g-estrellas3{font-size:clamp(.9rem,2.4vw,1.4rem);letter-spacing:.15em;color:#ffd166}
.g-res{border-collapse:collapse;font-size:clamp(.62rem,1.6vw,.95rem);margin:.2rem auto}
.g-res td{padding:.12rem .6rem;text-align:left}.g-res td.n{text-align:right;font-weight:900}
.g-confeti{position:absolute;width:8px;height:12px;top:-4%;z-index:29}
.g-dialogo{margin-top:.7rem;background:#0d1330;color:#fff;border:3px solid #fff;outline:3px solid #0d1330;border-radius:14px;padding:.8rem .95rem;box-shadow:0 6px 0 rgba(0,0,0,.25);min-height:7rem;position:relative}
.g-quien{position:absolute;top:-.95rem;left:.9rem;background:var(--luz);color:#04101f;font-weight:1000;font-size:.8rem;letter-spacing:.06em;text-transform:uppercase;padding:.15rem .7rem;border-radius:8px;border:2px solid #0d1330}
.g-tipo{display:inline-block;font-size:.72rem;font-weight:900;letter-spacing:.08em;text-transform:uppercase;color:#0d1330;background:#ffd166;border-radius:6px;padding:.05rem .45rem;margin:.25rem 0 .35rem}
.g-texto{font-size:1rem;line-height:1.45;min-height:3em;cursor:pointer}
.g-texto .di{font-style:italic;color:#d7e3ff;display:block;margin-bottom:.35rem}
.g-texto .pr{font-weight:800;display:block}
.g-texto .ok{color:#7dffa8;font-weight:900}.g-texto .ko{color:#ff8a8a;font-weight:900}
.g-cursor{display:inline-block;width:.55em;height:1em;background:#fff;vertical-align:-.12em;margin-left:2px;animation:gParp .6s infinite}
.g-menu{display:grid;gap:.45rem;margin-top:.7rem}
.g-menu[hidden]{display:none}
.g-op{display:flex;gap:.6rem;align-items:flex-start;width:100%;min-height:48px;text-align:left;background:#18204a;color:#fff;border:2px solid #3a4580;border-radius:10px;padding:.55rem .7rem;font:inherit;font-size:.96rem;cursor:pointer;transition:transform .1s,border-color .1s,background .1s}
.g-op b{flex:none;width:1.7rem;height:1.7rem;border-radius:6px;display:grid;place-items:center;background:#2c3670;color:#ffd166;font-weight:1000}
.g-op:hover:not(:disabled),.g-op:focus-visible{border-color:var(--luz);transform:translateX(4px)}
.g-op[aria-checked="true"]{border-color:#ffd166;background:#2a2f63;transform:translateX(6px)}
.g-op[aria-checked="true"] b{background:#ffd166;color:#0d1330}
.g-op[aria-checked="true"]:before{content:'▶';color:#ffd166;margin-right:-.2rem;font-size:.9rem;align-self:center}
.g-op.ok{border-color:#22c55e;background:#123b27}.g-op.ok b{background:#22c55e;color:#04140b}
.g-op.ko{border-color:#ef4444;background:#3d1218}.g-op.ko b{background:#ef4444;color:#fff}
.g-op.era{border-color:#22c55e;border-style:dashed}
.g-op:disabled{cursor:default}
.g-op:disabled:not(.ok):not(.ko):not(.era){opacity:.45}
.g-acc{display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;margin-top:.7rem}
.g-acc[hidden]{display:none}
.g-ataca{min-height:48px;padding:.45rem 1.3rem;border-radius:12px;border:3px solid #000;background:linear-gradient(#ff8a8a,#e11d48);color:#fff;font-weight:1000;font-size:1rem;letter-spacing:.06em;text-transform:uppercase;cursor:pointer;box-shadow:0 5px 0 #000}
.g-ataca.sig{background:linear-gradient(#7dd3fc,#2563eb)}
.g-ataca:disabled{filter:grayscale(1);opacity:.5;cursor:not-allowed;box-shadow:0 3px 0 #000}
.g-ataca:active:not(:disabled){transform:translateY(3px);box-shadow:0 2px 0 #000}
.g-acc small{color:#aab4e0}
.g-mini{display:flex;justify-content:space-between;gap:.5rem;flex-wrap:wrap;margin-top:.6rem;font-size:.85rem;color:var(--muted);font-weight:700}
.hx-registro{margin-top:.6rem}
.hx-registro summary{cursor:pointer;font-weight:700;min-height:44px;display:flex;align-items:center}
.hx-registro ol{margin:.3rem 0 0;padding-left:1.4rem;font-size:.88rem}
.hx-registro li{margin:.2rem 0}
@media (max-width:640px){.g-pantalla{aspect-ratio:4/3}.g-hud{width:44%;padding:.25rem .4rem}.g-tu{width:28%;left:6%}.g-ia{width:30%;right:6%;bottom:32%}.g-luna{width:12%}.g-texto{font-size:.95rem}.g-dialogo{padding:.75rem .7rem}}
@media (prefers-reduced-motion:reduce){.g *{animation:none!important;transition:none!important}}
</style>`);

// ---------- estado de la pantalla ----------
const G = { el: null, para: '', gen: 0, i: 0, sel: null, fase: '', typer: null, racha: 0 };
const g$ = s => G.el.querySelector(s);
const gEsp = () => G_ESPEC[C_ACT().casos] || G_ESPEC.ei;
const gEspera = ms => new Promise(r => setTimeout(r, matchMedia('(prefers-reduced-motion: reduce)').matches ? Math.min(ms, 60) : ms));

function gMontar(){
  const box = document.getElementById('hx'); if (!box) return false;
  const E = gEsp();
  box.innerHTML = `<p class="hx-punt">⚠️ <b>La pelea puntúa: 6 de los 10 puntos.</b> Cada turno tiene <b>un solo intento</b>: elige tu respuesta y pulsa «Responder». Después ya no se puede cambiar.</p>
  <div class="g" tabindex="-1">
    <div class="g-pantalla">
      <div class="g-estrellas"></div><div class="g-luna"></div><div class="g-ciudad">${G_CIUDAD}</div><div class="g-suelo"></div>
      <div class="g-hud g-hud-tu"><div class="nm"><span>${esc((NOMBRE || 'Tú').slice(0, 18))}</span><span class="nv">${E.e}</span></div>
        <div class="lb">HUM <div class="g-barra"><i></i></div></div><div class="hp"></div></div>
      <div class="g-hud g-hud-ia"><div class="nm"><span class="fn"></span><span class="nv"></span></div>
        <div class="lb">POT <div class="g-barra"><i></i></div></div><div class="hp"></div></div>
      <div class="g-luch g-tu"><div class="g-sombra"></div><div class="g-cuerpo">${gHumano(E.c, E.e)}</div></div>
      <div class="g-luch g-ia"><div class="g-sombra"></div><div class="g-cuerpo"></div></div>
      <div class="g-racha"></div><div class="g-chip"></div>
      <div class="g-fx"></div><div class="g-flash"></div>
      <div class="g-ov" hidden></div>
      <button type="button" class="g-son" title="Sonido" aria-label="Activar o quitar el sonido"></button>
    </div>
    <div class="g-dialogo"><div class="g-quien"></div><div class="g-texto" aria-live="polite"></div>
      <div class="g-menu" role="radiogroup" aria-label="Respuestas" hidden></div>
      <div class="g-acc" hidden></div></div>
    <div class="g-mini"><span class="gm1"></span><span class="gm2"></span></div>
  </div><div class="hx-log"></div>`;
  G.el = box.querySelector('.g'); G.gen++;
  g$('.g-son').textContent = SFX.on() ? '🔊' : '🔇';
  return true;
}
// La llama alActualizar en cada cambio: solo monta si hace falta (otro alumno, otra especialidad o la página se ha rehecho)
function gSync(){
  const box = document.getElementById('hx'); if (!box) return;
  const para = ESP + '|' + (NOMBRE || '');
  if (G.el && box.contains(G.el) && G.para === para) return;
  G.para = para; if (gMontar()) gIr();
}
function gIr(){
  const p = pelea(), n = hechos(p);
  G.racha = 0;
  if (n >= N_TURNOS) return gFinal(false);
  if (!n) return gInicio();
  gTurno(n, false);
}
function gEscena(a){
  const S = G_ESCENA[a], pa = g$('.g-pantalla');
  pa.style.setProperty('--ga', S.a); pa.style.setProperty('--gb', S.b); G.el.style.setProperty('--luz', S.luz);
  g$('.g-ia .g-cuerpo').innerHTML = gNexa(a);
  g$('.g-hud-ia .fn').textContent = ASALTOS[a].n.replace('NEXA · ', 'NEXA ');
  g$('.g-hud-ia .nv').textContent = 'Nv.' + (a + 1);
}
function gHud(p, anim){
  const tu = vidaTu(p), ia = vidaIA(p), bar = (sel, v) => { const i = g$(sel + ' .g-barra i'); i.style.width = v + '%'; i.className = v <= 25 ? 'baja' : v <= 55 ? 'med' : ''; };
  bar('.g-hud-tu', tu); bar('.g-hud-ia', ia);
  g$('.g-hud-tu .hp').textContent = tu + '/100'; g$('.g-hud-ia .hp').textContent = ia + '/100';
  g$('.g-hud-tu').classList.toggle('peligro', tu > 0 && tu <= 25);
  g$('.g-tu').classList.toggle('g-herido', tu <= 25); g$('.g-ia').classList.toggle('g-herido', ia <= 25);
  const n = hechos(p);
  const pl = (x, a, b) => x + ' ' + (x === 1 ? a : b);
  g$('.gm1').textContent = `✓ ${pl(aciertos(p), 'acierto', 'aciertos')} · ✗ ${pl(fallos(p), 'fallo', 'fallos')}`;
  const tn = G.fase === 'final' || n >= N_TURNOS ? N_TURNOS : G.fase === 'inicio' ? 1 : G.i + 1;
  g$('.gm2').textContent = `Turno ${tn} de ${N_TURNOS} · ${String(notaPelea(p)).replace('.', ',')} de 6 puntos`;
  gLog(p);
}
function gLog(p){
  const T = turnos(C_ACT()), l = T.map((t, i) => respondido(p, i) ? `<li>${p.r[i] === 0 ? '✓' : '✗'} ${TIPOS[t.tipo].ic} ${esc((t.t || t.q).slice(0, 110))}${(t.t || t.q).length > 110 ? '…' : ''}</li>` : '').join('');
  const lg = document.querySelector('#hx .hx-log'); if (!lg) return;
  const abierto = lg.querySelector('details') && lg.querySelector('details').open;
  lg.innerHTML = hechos(p) ? `<details class="hx-registro"${abierto ? ' open' : ''}><summary>📜 El combate hasta ahora (${aciertos(p)} de ${hechos(p)} bien)</summary><ol>${l}</ol></details>` : '';
}
function gOv(html){ const o = g$('.g-ov'); if (html === null){ o.hidden = true; o.innerHTML = ''; return o; } o.innerHTML = html; o.hidden = false; return o; }
function gDialogo(quien){ g$('.g-quien').textContent = quien; g$('.g-menu').hidden = true; g$('.g-acc').hidden = true; g$('.g-menu').innerHTML = ''; g$('.g-acc').innerHTML = ''; }

// Texto que se escribe letra a letra (clic en el texto = mostrarlo entero)
function gEscribir(partes){
  const el = g$('.g-texto'), gen = G.gen; el.innerHTML = '';
  const nodos = partes.map(([cls, txt]) => { const s = document.createElement('span'); if (cls) s.className = cls; el.appendChild(s); return [s, txt]; });
  const cur = document.createElement('span'); cur.className = 'g-cursor'; el.appendChild(cur);
  return new Promise(res => {
    let k = 0, c = 0, fin = false;
    const acabar = () => { if (fin) return; fin = true; nodos.forEach(([s, t]) => { s.textContent = t; }); cur.remove(); G.typer = null; res(); };
    G.typer = acabar;
    const paso = () => {
      if (fin || gen !== G.gen) return;
      if (k >= nodos.length) return acabar();
      const [s, t] = nodos[k];
      s.textContent = t.slice(0, ++c); if (c % 3 === 0) SFX.letra();
      if (c >= t.length){ k++; c = 0; }
      setTimeout(paso, matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 16);
    };
    paso();
  });
}

// ---------- fases ----------
function gInicio(){
  G.fase = 'inicio'; G.i = 0; gEscena(0); gHud(pelea());
  g$('.g-chip').textContent = `${N_ASALTOS} ASALTOS · ${N_TURNOS} TURNOS`;
  gOv(`<div class="g-tit">Humanos<br>contra la IA</div>
    <div class="g-sub">NEXA quiere demostrar que las personas ya no hacen falta. Responde bien para golpearla; si fallas, te quita humanidad. Con ${PARA_GANAR} aciertos la derrotas.</div>
    <button type="button" class="g-gbtn" data-g="empezar">▶ Empezar la pelea</button>`);
  gDialogo('NEXA'); gEscribir([['di', '«' + ASALTOS[0].frase + '»']]);
}
async function gAsalto(a){
  G.fase = 'asalto'; const gen = G.gen;
  gOv(`<div class="g-asalto">Asalto ${a + 1}</div><div class="g-sub">${a ? 'NEXA evoluciona…' : 'NEXA sube al ring'}</div>`);
  SFX.ronda(); await gEspera(1100); if (gen !== G.gen) return;
  const f = g$('.g-flash'); f.style.background = '#fff';
  f.animate([{ opacity: 0 }, { opacity: .95 }, { opacity: 0 }], { duration: 700 });
  await gEspera(320); if (gen !== G.gen) return;
  gEscena(a); gOv(null);
  g$('.g-ia .g-cuerpo').animate([{ transform: 'scale(.4)', filter: 'brightness(4)' }, { transform: 'scale(1.15)', filter: 'brightness(1.6)' }, { transform: 'scale(1)', filter: 'none' }], { duration: 700, easing: 'ease-out' });
  gDialogo(ASALTOS[a].n); await gEscribir([['di', '«' + ASALTOS[a].frase + '»']]);
  if (gen !== G.gen) return;
  await gEspera(500); if (gen !== G.gen) return;
  gTurno(a * TURNOS_ASALTO, false);
}
async function gTurno(i, conAsalto){
  if (conAsalto) return gAsalto(Math.floor(i / TURNOS_ASALTO));
  const gen = ++G.gen, p = pelea(), T = turnos(C_ACT()), t = T[i], a = t.a;
  G.fase = 'turno'; G.i = i; G.sel = null; gOv(null);
  gEscena(a); gHud(p);
  g$('.g-chip').textContent = `ASALTO ${a + 1}/${N_ASALTOS} · TURNO ${i % TURNOS_ASALTO + 1}/${TURNOS_ASALTO}`;
  gDialogo(ASALTOS[a].n);
  const tipo = document.createElement('div'); tipo.className = 'g-tipo'; tipo.textContent = TIPOS[t.tipo].ic + ' ' + TIPOS[t.tipo].n;
  await gEscribir([...(t.t ? [['di', '«' + t.t + '»']] : []), ['pr', t.q]]);
  if (gen !== G.gen) return;
  g$('.g-texto').prepend(tipo);
  const ord = orden(p.s || 1, i, t.o.length), m = g$('.g-menu');
  m.innerHTML = ord.map((k, pos) => `<button type="button" class="g-op" role="radio" aria-checked="false" data-k="${k}"><b>${'ABC'[pos]}</b><span>${esc(t.o[k])}</span></button>`).join('');
  m.hidden = false;
  const acc = g$('.g-acc'); acc.innerHTML = `<button type="button" class="g-ataca" data-g="responder" disabled>⚔️ Responder</button><small>Un solo intento: piénsalo bien.</small>`; acc.hidden = false;
}
function gElegir(k){
  if (G.fase !== 'turno') return;
  G.sel = k; SFX.elegir();
  G.el.querySelectorAll('.g-op').forEach(b => b.setAttribute('aria-checked', String(+b.dataset.k === k)));
  g$('[data-g="responder"]').disabled = false;
}
async function gResponder(){
  if (G.fase !== 'turno' || G.sel === null) return;
  const p = pelea(), i = hechos(p); if (i !== G.i || respondido(p, i)) return;
  if (!p.s) p.s = 1 + Math.floor(Math.random() * 2147483646);
  p.r[i] = G.sel; const ok = G.sel === 0; G.fase = 'anim'; const gen = ++G.gen;
  ponPelea(p); if (!EJEMPLO) guardarYa();
  G.el.querySelectorAll('.g-op').forEach(b => { b.disabled = true; const k = +b.dataset.k; if (k === G.sel) b.classList.add(ok ? 'ok' : 'ko'); else if (k === 0) b.classList.add('era'); });
  g$('.g-acc').hidden = true;
  G.racha = ok ? G.racha + 1 : 0;
  await (ok ? gAtaqueTu() : gAtaqueIA());
  if (gen !== G.gen) return;
  gHud(p); actualizarProgreso();
  const t = turnos(C_ACT())[i];
  G.fase = 'fb';
  g$('.g-quien').textContent = ok ? 'TÚ' : ASALTOS[t.a].n; g$('.g-acc').hidden = true;
  await gEscribir([[ok ? 'ok' : 'ko', ok ? (G.racha >= 3 ? `¡Golpe crítico! Racha de ${G.racha}. ` : '¡Golpe certero! ') : 'NEXA te alcanza. '], ['', t.ex]]);
  if (gen !== G.gen) return;
  const ult = i + 1 >= N_TURNOS, nuevo = !ult && (i + 1) % TURNOS_ASALTO === 0;
  const acc = g$('.g-acc'); acc.innerHTML = `<button type="button" class="g-ataca sig" data-g="seguir">${ult ? '🏁 Ver el resultado' : nuevo ? '▶ Siguiente asalto' : '▶ Siguiente turno'}</button>`; acc.hidden = false;
  acc.querySelector('button').focus({ preventScroll: true });
}
function gSeguir(){
  if (G.fase !== 'fb') return;
  const n = hechos(pelea());
  if (n >= N_TURNOS) return gFinal(true);
  gTurno(n, n % TURNOS_ASALTO === 0);
}
function gFinal(conAnim){
  G.fase = 'final'; G.gen++;
  const p = pelea(), gana = aciertos(p) >= PARA_GANAR;
  gEscena(N_ASALTOS - 1); gHud(p);
  g$('.g-chip').textContent = 'COMBATE TERMINADO';
  const est = n => n >= 9 ? '★★★' : n >= 7 ? '★★☆' : n >= 5 ? '★☆☆' : '☆☆☆';
  gOv(`<div class="g-tit">${gana ? '¡Victoria!' : 'Derrota…'}</div>
    <div class="g-sub">${gana ? 'NEXA se apaga: «Quizá lo humano no se puede calcular».' : 'NEXA gana este combate… pero tú sigues pensando, y ella no. Revisa los turnos fallados en «El combate hasta ahora».'}</div>
    <table class="g-res"><tbody>
      <tr><td>📚 Test de la unidad</td><td class="n">${aciertos(p, 'test')}/10</td><td class="g-estrellas3">${est(aciertos(p, 'test'))}</td></tr>
      <tr><td>⚖️ Dilemas morales</td><td class="n">${aciertos(p, 'dil')}/10</td><td class="g-estrellas3">${est(aciertos(p, 'dil'))}</td></tr>
      <tr><td>💼 Casos de tu profesión</td><td class="n">${aciertos(p, 'esp')}/10</td><td class="g-estrellas3">${est(aciertos(p, 'esp'))}</td></tr>
      <tr><td><b>Puntos de la pelea</b></td><td class="n" colspan="2">${String(notaPelea(p)).replace('.', ',')} de 6</td></tr>
    </tbody></table>`);
  gDialogo(gana ? 'TÚ' : 'NEXA');
  g$('.g-texto').innerHTML = gana ? '<span class="ok">La humanidad gana.</span> Ahora, la Parte 2: piensa con calma qué te hace humano.' : '<span class="ko">NEXA gana esta vez.</span> La nota sale de tus aciertos. Ahora, la Parte 2: piensa con calma qué te hace humano.';
  if (conAnim){
    (gana ? SFX.gana : SFX.pierde)();
    const L = g$(gana ? '.g-ia .g-cuerpo' : '.g-tu .g-cuerpo');
    L.animate([{ transform: 'none', opacity: 1 }, { transform: gana ? 'translateY(30%) rotate(18deg)' : 'rotate(-80deg) translateX(-20%)', opacity: .35 }], { duration: 1200, fill: 'forwards', easing: 'ease-in' });
    if (gana) for (let k = 0; k < 40; k++){
      const c = document.createElement('div'); c.className = 'g-confeti'; c.style.left = Math.random() * 100 + '%';
      c.style.background = ['#ffd166', '#ff6b6b', '#4fc3f7', '#7dffa8', '#c084fc'][k % 5]; g$('.g-pantalla').appendChild(c);
      c.animate([{ transform: 'translateY(0) rotate(0)' }, { transform: `translateY(${110 + Math.random() * 40}vh) rotate(${720 * Math.random()}deg)` }], { duration: 1800 + Math.random() * 1600, delay: Math.random() * 600, easing: 'cubic-bezier(.2,.6,.4,1)', fill: 'forwards' }).onfinish = () => c.remove();
    }
  }
}

// ---------- efectos ----------
function gCentro(sel){ const r = g$(sel).getBoundingClientRect(), b = g$('.g-pantalla').getBoundingClientRect(); return { x: r.left - b.left + r.width / 2, y: r.top - b.top + r.height * .45, w: b.width }; }
function gNumero(txt, pos, cls){
  const d = document.createElement('div'); d.className = 'g-num ' + cls; d.textContent = txt; d.style.left = pos.x + 'px'; d.style.top = pos.y + 'px';
  g$('.g-fx').appendChild(d);
  d.animate([{ transform: 'translate(-50%,0) scale(.6)', opacity: 0 }, { transform: 'translate(-50%,-60%) scale(1.25)', opacity: 1, offset: .25 }, { transform: 'translate(-50%,-160%) scale(1)', opacity: 0 }], { duration: 1100, easing: 'ease-out' }).onfinish = () => d.remove();
}
function gChispas(pos, color){
  for (let k = 0; k < 12; k++){
    const s = document.createElement('div'); s.className = 'g-chispa'; s.style.left = pos.x + 'px'; s.style.top = pos.y + 'px'; if (color) s.style.boxShadow = `0 0 8px 2px ${color}`;
    g$('.g-fx').appendChild(s); const ang = Math.random() * Math.PI * 2, dist = pos.w * (0.05 + Math.random() * 0.09);
    s.animate([{ transform: 'translate(-50%,-50%) scale(1)', opacity: 1 }, { transform: `translate(${Math.cos(ang) * dist - 4}px,${Math.sin(ang) * dist - 4}px) scale(.2)`, opacity: 0 }], { duration: 500 + Math.random() * 300, easing: 'ease-out' }).onfinish = () => s.remove();
  }
}
function gTiembla(intensidad){ g$('.g-pantalla').animate([0, 1, 2, 3, 4, 5].map(k => ({ transform: k === 5 ? 'none' : `translate(${(Math.random() - .5) * intensidad}px,${(Math.random() - .5) * intensidad}px)` })), { duration: 380 }); }
function gDestello(color, op){ const f = g$('.g-flash'); f.style.background = color; f.animate([{ opacity: 0 }, { opacity: op }, { opacity: 0 }], { duration: 380 }); }
async function gAtaqueTu(){
  const de = gCentro('.g-tu .g-cuerpo'), a = gCentro('.g-ia .g-cuerpo'), T = turnos(C_ACT())[G.i];
  g$('.g-tu .g-cuerpo').animate([{ transform: 'none' }, { transform: 'translateX(-8%) rotate(-4deg)' }, { transform: 'translateX(22%) rotate(5deg)' }, { transform: 'none' }], { duration: 520, easing: 'ease-out' });
  await gEspera(260); SFX.disparo();
  const b = document.createElement('div'); b.className = 'g-bala'; b.style.setProperty('--bala', gEsp().c); g$('.g-fx').appendChild(b);
  const tam = de.w * 0.05;
  await b.animate([{ left: de.x - tam / 2 + 'px', top: de.y - tam / 2 + 'px', transform: 'scale(.6)' }, { left: a.x - tam / 2 + 'px', top: a.y - tam / 2 + 'px', transform: 'scale(1.3)' }], { duration: 420, easing: 'cubic-bezier(.5,0,.9,.6)' }).finished.catch(() => {});
  b.remove(); SFX.golpe(); gChispas(a, gEsp().c); gTiembla(G.racha >= 3 ? 18 : 10); gDestello('#fff', .55);
  g$('.g-ia .g-cuerpo').animate([{ filter: 'brightness(3)', transform: 'translateX(0)' }, { filter: 'brightness(1)', transform: 'translateX(9%)' }, { transform: 'translateX(-4%)' }, { filter: 'none', transform: 'none' }], { duration: 480 });
  gNumero('-' + Math.round(100 / PARA_GANAR) + (G.racha >= 3 ? ' ¡CRÍTICO!' : ''), a, 'ia');
  if (G.racha >= 2){ const r = g$('.g-racha'); r.textContent = `🔥 RACHA ×${G.racha}`; r.animate([{ opacity: 0, transform: 'translate(-50%,10px) scale(.7)' }, { opacity: 1, transform: 'translate(-50%,0) scale(1.15)', offset: .3 }, { opacity: 1, transform: 'translate(-50%,0) scale(1)', offset: .8 }, { opacity: 0 }], { duration: 1500 }); }
  gHud(pelea()); await gEspera(650);
}
async function gAtaqueIA(){
  const de = gCentro('.g-ia .g-cuerpo'), a = gCentro('.g-tu .g-cuerpo'), col = G_FORMAS[Math.floor(G.i / TURNOS_ASALTO)].c2;
  g$('.g-ia .g-cuerpo').animate([{ filter: 'none', transform: 'none' }, { filter: `drop-shadow(0 0 18px ${col}) brightness(1.6)`, transform: 'scale(1.08)' }, { filter: 'none', transform: 'none' }], { duration: 600 });
  await gEspera(420); SFX.laser();
  const l = document.createElement('div'); l.className = 'g-laser'; l.style.setProperty('--laser', col);
  const dx = a.x - de.x, dy = a.y - de.y, largo = Math.hypot(dx, dy);
  l.style.left = de.x + 'px'; l.style.top = de.y + 'px'; l.style.width = largo + 'px'; l.style.transform = `rotate(${Math.atan2(dy, dx)}rad)`;
  g$('.g-fx').appendChild(l);
  await l.animate([{ transform: `rotate(${Math.atan2(dy, dx)}rad) scaleX(0)`, opacity: 1 }, { transform: `rotate(${Math.atan2(dy, dx)}rad) scaleX(1)`, opacity: 1, offset: .5 }, { transform: `rotate(${Math.atan2(dy, dx)}rad) scaleX(1)`, opacity: 0 }], { duration: 520, easing: 'ease-out' }).finished.catch(() => {});
  l.remove(); SFX.dano(); gChispas(a, '#ff3b6b'); gTiembla(14); gDestello('#ff1744', .4);
  g$('.g-tu .g-cuerpo').animate([{ filter: 'brightness(2.5) saturate(0)', transform: 'none' }, { filter: 'none', transform: 'translateX(-10%) rotate(-6deg)' }, { transform: 'translateX(4%)' }, { transform: 'none' }], { duration: 520 });
  gNumero('-' + Math.round(100 / (N_TURNOS - PARA_GANAR + 1)), a, 'tu');
  gHud(pelea()); await gEspera(650);
}

// ---------- controles (ratón, dedo y teclado) ----------
document.addEventListener('click', e => {
  if (!G.el || !e.target.closest) return;
  const dentro = e.target.closest('#hx .g'); if (!dentro) return;
  if (e.target.closest('.g-son')){ const v = !SFX.on(); SFX.poner(v); g$('.g-son').textContent = v ? '🔊' : '🔇'; if (v) SFX.elegir(); return; }
  if (e.target.closest('.g-texto') && G.typer){ G.typer(); return; }
  const op = e.target.closest('.g-op'); if (op && !op.disabled){ gElegir(+op.dataset.k); return; }
  const b = e.target.closest('[data-g]'); if (!b) return;
  if (b.dataset.g === 'empezar'){ SFX.elegir(); gAsalto(0); }
  else if (b.dataset.g === 'responder') gResponder();
  else if (b.dataset.g === 'seguir') gSeguir();
});
document.addEventListener('keydown', e => {
  if (!G.el || !e.target.closest || !e.target.closest('#hx .g')) return;
  const k = e.key;
  if (G.fase === 'turno' && !g$('.g-menu').hidden){
    const ops = [...G.el.querySelectorAll('.g-op')];
    if (['1', '2', '3', 'a', 'b', 'c'].includes(k.toLowerCase())){ const n = '123'.includes(k) ? +k - 1 : 'abc'.indexOf(k.toLowerCase()); if (ops[n]){ e.preventDefault(); gElegir(+ops[n].dataset.k); ops[n].focus(); } }
    else if (k === 'ArrowDown' || k === 'ArrowUp'){ e.preventDefault(); const cur = ops.findIndex(b => +b.dataset.k === G.sel), n = (cur + (k === 'ArrowDown' ? 1 : -1) + ops.length) % ops.length; gElegir(+ops[n].dataset.k); ops[n].focus(); }
  }
});

// Genera _fuente/UT2_SP_plano.js: el plano de UT2_E4 (página aparte) pasado al motor común, como un bloque del ejercicio unificado.
// Saca del HTML del plano los datos, el dibujo isométrico, las interacciones y los estilos, y les pone «pegamento» para el motor.
// Uso (desde la carpeta del proyecto): node _fuente/plano/hacer_plano.js .   → luego node _fuente/construir.js
const fs = require('fs'), path = require('path');
const R = process.argv[2];
const NL = String.fromCharCode(10);
const html = fs.readFileSync(path.join(R, 'UT2/UT2_E4_Tecnologias_Habilitadoras.html'), 'utf8');
const trozo = (desde, hasta) => {   // desde: texto de inicio (incluido) · hasta: texto de fin (excluido)
  const i = html.indexOf(desde); if (i < 0) throw new Error('no encuentro: ' + desde);
  const j = html.indexOf(hasta, i); if (j < 0) throw new Error('no encuentro: ' + hasta);
  return html.slice(i, j);
};
// 1) datos: las 50 tecnologías, bancos por especialidad, espacios y preguntas de las fichas
let datos = trozo('const MAX = 10;', '// Resultado de aprendizaje');
// 2) dibujo del plano (proyección isométrica, muebles por especialidad y buildMap)
let dibujo = trozo('const S=15, C=Math.cos(Math.PI/6);', '/* Coordenadas: pantalla');
// 3) coordenadas, chinchetas, banco, bandeja, leyenda, elegir/colocar y arrastre
let inter = trozo('/* Coordenadas: pantalla', '/* =========================================================' + NL + '   FICHAS + EDITOR');
// 4) plano a PNG para el PDF y arrastre de chinchetas
let png = trozo('function svgToPNG(svgStr, width){', 'const rgbOf = hex');
let pin = trozo('let pinDrag=null;', '// Eventos fijos');

// Identificadores propios (pl…) para no chocar con el resto del ejercicio
const IDS = [['mapHolder', 'plMapHolder'], ['mapbox', 'plMapbox'], ['bankCount', 'plBankCount'], ['selCount', 'plSelCount'], ['bannerTxt', 'plBannerTxt'], ['bannerCancel', 'plBannerCancel'],
  ['banner', 'plBanner'], ['bank', 'plBank'], ['tray', 'plTray'], ['search', 'plSearch'], ['legend', 'plLegend'], ['checks', 'plChecks'], ['fichas', 'plFichas'], ['pins', 'plPins'], ['map', 'plMap'], ['plano', 'plSec']];
const renombra = s => {
  for (const [a, b] of IDS) {
    s = s.replace(new RegExp('([\'"`])#' + a + '([\'"` ])', 'g'), '$1#' + b + '$2')     // '#map' "#map" '#map .zone'
         .replace(new RegExp('id="' + a + '"', 'g'), 'id="' + b + '"');
  }
  return s.replace(/'ghost'/g, "'plghost'");
};
[datos, dibujo, inter, png, pin] = [datos, dibujo, inter, png, pin].map(renombra);

// 5) estilos del plano (variables de color, panel, mapa, leyenda, fichas), todos dentro de #plSec
const vars = trozo(':root{', '}').replace(':root{', '').trim();
const reglas = trozo('.work{display:grid', '.toolbar{') + trozo('.fichas{display:grid', '.field label{') + trozo('.nofichas{', NL);
// pone #plSec delante de cada selector (también dentro de @media); .plghost va en <body>, fuera de #plSec
function enAmbito(css){
  let out = '', i = 0;
  while (i < css.length){
    const ab = css.indexOf('{', i); if (ab < 0) break;
    const sel = css.slice(i, ab).trim();
    if (sel.startsWith('@media')){
      let prof = 1, j = ab + 1; while (j < css.length && prof){ if (css[j] === '{') prof++; else if (css[j] === '}') prof--; j++; }
      out += sel + '{' + enAmbito(css.slice(ab + 1, j - 1)) + '}' + NL; i = j; continue;
    }
    const ci = css.indexOf('}', ab);
    const decl = css.slice(ab + 1, ci);
    const sels = sel.replace(/\/\*[\s\S]*?\*\//g, '').split(',').map(x => x.trim()).filter(Boolean)
      .map(x => x === '.ghost' ? '.plghost' : '#plSec ' + x).join(',');
    if (sels) out += sels + '{' + decl + '}' + NL;
    i = ci + 1;
  }
  return out;
}
const css = '#plSec,.plghost{' + vars + '}' + NL + enAmbito(reglas) +
  '#plSec .pl-ver{border:1px solid var(--line);background:#fff;border-radius:10px;padding:6px 12px;font-weight:700;font-size:13px;min-height:36px}' + NL +
  '#plSec .pl-tit{margin:1.4rem 0 .4rem}' + NL + '#plSec .ficha[hidden],#plSec .nofichas[hidden]{display:none}' + NL +
  '@media (max-width:1023px),(pointer:coarse){#plSec .pl-ver,#plSec .chip,#plSec .tray li .x{min-height:44px;min-width:44px}}' + NL;
const PLANO_CSS = 'const PLANO_CSS = ' + JSON.stringify(css) + ';' + NL;

const pegamento = fs.readFileSync(path.join(__dirname, 'plano_pegamento.js'), 'utf8');
const salida = [
  '// ===== UT2_SP · Bloque del plano (antes la página aparte UT2_E4) =====',
  '// Generado por hacer_plano.js a partir de UT2/UT2_E4_Tecnologias_Habilitadoras.html (datos, dibujo, interacciones y estilos del plano)',
  '// más el pegamento para el motor común (estado en el campo oculto «plano», fichas como cajas «pl_<id>_<pregunta>»).',
  '// Se incluye dentro de una función en UT2_SP.js: nada de esto es global.',
  '', '// ---- datos del plano', datos, '// ---- dibujo isométrico', dibujo, '// ---- interacciones', inter,
  '// ---- plano en PNG y arrastre de chinchetas', png, pin, '// ---- estilos', PLANO_CSS, '// ---- pegamento con el motor común', pegamento, ''
].join(NL);
fs.writeFileSync(path.join(R, '_fuente/UT2_SP_plano.js'), salida);
console.log('ok', salida.length, 'caracteres');

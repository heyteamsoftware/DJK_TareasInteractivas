// Genera los HTML de los ejercicios a partir de las piezas comunes.
// Uso:  node _fuente/construir.js
// Para añadir un ejercicio: crea _fuente/UTn_Em.js con sus datos y añádelo a la lista EJERCICIOS.
// Semipresencial: un ejercicio por unidad (UTn_SP) en la carpeta SEMI/, «remix» de los ejercicios de la unidad.
// Opcionales: img (carpeta de imágenes de otro ejercicio) y remix (módulo que saca los datos de los originales).
const fs = require('fs'), path = require('path');
const F = __dirname, RAIZ = path.join(F, '..');
const leer = n => fs.readFileSync(path.join(F, n), 'utf8');

const EJERCICIOS = [
  { cod: 'UT1_E1', dir: 'UT1', archivo: 'UT1_E1_Revoluciones_Industriales_Canarias.html', titulo: 'UT1 · E1 · Revoluciones industriales canarias y quinta revolución industrial' },
  { cod: 'UT1_E2', dir: 'UT1', archivo: 'UT1_E2_Combinacion_Sistemas_Ciberfisicos.html', titulo: 'UT1 · E2 · Combinación de sistemas ciberfísicos' },
  { cod: 'UT1_E3', dir: 'UT1', archivo: 'UT1_E3_Digitalizacion_Sistemas_CiberFisicos.html', titulo: 'UT1 · E3 · Sistemas ciberfísicos y digitalización del sector' },
  { cod: 'UT1_SP', dir: 'SEMI', archivo: 'UT1_SP_Digitalizacion_Sectores_Productivos.html', titulo: 'UT1 · Digitalización de los sectores productivos', img: 'UT1_E2', remix: 'remix_UT1_SP.js' },
  { cod: 'UT2_E1', dir: 'UT2', archivo: 'UT2_E1_Parejas_Tecnologias_Habilitadoras.html', titulo: 'UT2 · E1 · Parejas de tecnologías habilitadoras' },
  { cod: 'UT2_E3', dir: 'UT2', archivo: 'UT2_E3_App_Realidad_Virtual_Mixta.html', titulo: 'UT2 · E3 · Diseña tu app de realidad virtual o mixta' },
  { cod: 'UT2_E4', dir: 'UT2', archivo: 'UT2_E4_Disenad_Vuestro_Robot.html', titulo: 'UT2 · E4 · Diseñad vuestro robot' }
];

// Imágenes del ejercicio: _fuente/img/UTn_Em/*.jpg|png → const IMAGENES = { nombre: dataURL }
function imagenes(cod){
  const dir = path.join(F, 'img', cod); const out = {};
  if (fs.existsSync(dir)) for (const a of fs.readdirSync(dir).sort()){
    const ext = path.extname(a).toLowerCase(); if (!['.jpg','.jpeg','.png'].includes(ext)) continue;
    out[path.basename(a, ext)] = `data:image/${ext === '.png' ? 'png' : 'jpeg'};base64,` + fs.readFileSync(path.join(dir, a)).toString('base64');
  }
  return 'const IMAGENES = ' + JSON.stringify(out) + ';\n';
}

// Icono de la pestaña: siglas UXEX (U1E1, U1SP…) sobre el color de la unidad, igual que en las pruebas de DJK_Unidades
const COLOR_ICONO = { UT1: '%23D97706', UT2: '%230E7F96', UT3: '%237C3AED', UT4: '%23BE185D', UT5: '%2315803D' };
const siglasIcono = cod => cod.replace(/^UT(\d)_E?/, 'U$1E').replace('ESP', 'SP');

const cabecera = leer('comun_head.html'), libPDF = leer('jspdf.html'), motor = leer('motor.js');
for (const e of EJERCICIOS){
  const unidad = e.cod.split('_')[0].toLowerCase();   // ut1, ut2… → color de la unidad
  // Remix semipresencial: su contenido se saca de los ejercicios originales (ver _fuente/remix_*.js)
  const datos = e.remix ? leer(e.cod + '.js').replace('__DATOS__', () => JSON.stringify(require(path.join(F, e.remix))())) : leer(e.cod + '.js');
  const cab = cabecera.split('{{TITULO}}').join(e.titulo).replace('{{ICONO_COLOR}}', COLOR_ICONO[e.cod.split('_')[0]]).replace('{{ICONO}}', siglasIcono(e.cod));
  const html = cab.replace('<body>', `<body class="${unidad}">`) + libPDF + '\n<script>\n' + imagenes(e.img || e.cod) + datos + '\n' + motor + '\n</script>\n</body>\n</html>\n';
  const dir = path.join(RAIZ, e.dir); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, e.archivo), html);
  fs.writeFileSync(path.join(dir, e.cod + '_EJEMPLO_relleno.html'), html.replace('</head>', '<script>window.EJEMPLO_FORZADO = true;</script>\n</head>'));
  console.log('OK', e.dir + '/' + e.archivo, '+ ejemplo');
}

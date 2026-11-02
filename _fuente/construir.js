// Genera los HTML de los ejercicios a partir de las piezas comunes.
// Uso:  node _fuente/construir.js
// Para añadir un ejercicio: crea _fuente/UTn_Em.js con sus datos y añádelo a la lista EJERCICIOS.
const fs = require('fs'), path = require('path');
const F = __dirname, RAIZ = path.join(F, '..');
const leer = n => fs.readFileSync(path.join(F, n), 'utf8');

const EJERCICIOS = [
  { cod: 'UT1_E1', dir: 'UT1', archivo: 'UT1_E1_Revoluciones_Industriales_Canarias.html', titulo: 'UT1 · E1 · Revoluciones industriales canarias y quinta revolución industrial' },
  { cod: 'UT1_E3', dir: 'UT1', archivo: 'UT1_E3_Digitalizacion_Sistemas_CiberFisicos.html', titulo: 'UT1 · E3 · Sistemas ciberfísicos y digitalización del sector' }
];

const cabecera = leer('comun_head.html'), libPDF = leer('jspdf.html'), motor = leer('motor.js');
for (const e of EJERCICIOS){
  const html = cabecera.split('{{TITULO}}').join(e.titulo) + libPDF + '\n<script>\n' + leer(e.cod + '.js') + '\n' + motor + '\n</script>\n</body>\n</html>\n';
  const dir = path.join(RAIZ, e.dir); fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, e.archivo), html);
  fs.writeFileSync(path.join(dir, e.cod + '_EJEMPLO_relleno.html'), html.replace('</head>', '<script>window.EJEMPLO_FORZADO = true;</script>\n</head>'));
  console.log('OK', e.dir + '/' + e.archivo, '+ ejemplo');
}

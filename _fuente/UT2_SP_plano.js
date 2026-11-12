// ===== UT2_SP · Bloque del plano (antes la página aparte UT2_E4) =====
// Generado por hacer_plano.js a partir de UT2/UT2_E4_Tecnologias_Habilitadoras.html (datos, dibujo, interacciones y estilos del plano)
// más el pegamento para el motor común (estado en el campo oculto «plano», fichas como cajas «pl_<id>_<pregunta>»).
// Se incluye dentro de una función en UT2_SP.js: nada de esto es global.

// ---- datos del plano
const MAX = 10;
const MIN_ZONA = 2; // mínimo de tecnologías en cada espacio

// 50 tecnologías habilitadoras del día a día, distintas de las 8 de los apuntes.
// Se da el nombre y para qué sirve; el alumno explica por qué la instala en cada espacio.
const TECH_DATA = [
  ['Impresión 3D','Fabricar objetos físicos capa a capa a partir de un diseño hecho en el ordenador.'],
  ['Códigos QR','Llevar al instante a una web, un documento o un vídeo al escanearlos con la cámara del móvil.'],
  ['Pago con el móvil','Pagar acercando el teléfono o el reloj al datáfono, sin efectivo ni tarjeta física.'],
  ['Datáfono (TPV)','Cobrar con tarjeta o móvil y dejar registrada cada venta.'],
  ['Wi-Fi','Conectar ordenadores, tablets y móviles a internet sin cables dentro de un edificio.'],
  ['Fibra óptica','Llevar internet de alta velocidad y muy estable hasta el edificio.'],
  ['Bluetooth','Conectar sin cables dispositivos cercanos: altavoces, auriculares, teclados o ratones.'],
  ['Pizarra digital interactiva','Proyectar contenidos y escribir o tocar sobre ellos como en una pizarra.'],
  ['Tablets','Consultar, crear y presentar contenidos con una pantalla táctil que se lleva a cualquier sitio.'],
  ['Ordenadores portátiles','Trabajar con programas completos desde cualquier lugar, sin estar en un puesto fijo.'],
  ['Videoconferencia','Hacer reuniones, tutorías o clases a distancia con imagen y sonido.'],
  ['Aula virtual','Compartir materiales, entregar tareas y comunicarse por internet.'],
  ['Documentos compartidos en línea','Que varias personas escriban y editen a la vez el mismo documento.'],
  ['Calendario compartido','Organizar citas, reservas y eventos que todo el equipo puede ver.'],
  ['Mensajería instantánea de grupo','Enviar avisos rápidos a muchas personas a la vez.'],
  ['Firma electrónica','Firmar documentos desde el ordenador o el móvil con validez legal.'],
  ['Certificado digital','Identificarse de forma segura para hacer trámites por internet.'],
  ['Lector de huella dactilar','Reconocer a una persona por su huella para darle acceso o registrarla.'],
  ['Tarjeta de acceso','Abrir puertas o fichar acercando una tarjeta a un lector.'],
  ['Control horario digital','Registrar la hora de entrada y salida de cada trabajador.'],
  ['Cerradura electrónica','Abrir y cerrar puertas con un código, una tarjeta o el móvil, sin llaves.'],
  ['Videoportero','Ver y hablar con quien llama antes de abrirle la puerta.'],
  ['Cámaras de videovigilancia','Grabar y vigilar un espacio para mejorar la seguridad.'],
  ['Alarma antirrobo','Avisar con una sirena si alguien entra cuando el espacio está cerrado.'],
  ['Detector de humo','Avisar con un pitido en cuanto detecta humo de un posible incendio.'],
  ['Desfibrilador (DEA)','Analizar el corazón en una parada cardíaca y dar una descarga, guiando paso a paso con la voz.'],
  ['Sensor de presencia','Encender luces o aparatos solo cuando detecta que hay alguien.'],
  ['Iluminación LED','Iluminar gastando mucha menos electricidad que las bombillas tradicionales.'],
  ['Termostato programable','Encender y apagar la calefacción o el aire acondicionado a las horas elegidas.'],
  ['Medidor de CO2','Medir la calidad del aire y avisar cuando hay que ventilar.'],
  ['Placas solares','Producir electricidad a partir de la luz del sol.'],
  ['Enchufe programable','Encender o apagar un aparato a una hora fija o desde el móvil.'],
  ['Persianas motorizadas','Subir y bajar las persianas con un botón o de forma automática.'],
  ['Riego automático','Regar plantas o césped a la hora y con la cantidad de agua programadas.'],
  ['Punto de carga eléctrica','Recargar coches, bicicletas o patinetes eléctricos.'],
  ['Lector de código de barras','Identificar productos o materiales al instante para controlar el inventario.'],
  ['Etiquetas antirrobo','Hacer sonar una alarma si un objeto sale del recinto sin permiso.'],
  ['Impresora multifunción','Imprimir, escanear, fotocopiar y enviar documentos con un solo aparato.'],
  ['Escáner de documentos','Pasar papeles a formato digital para guardarlos y compartirlos.'],
  ['Copias de seguridad','Guardar un duplicado de la información para recuperarla si se pierde o se estropea.'],
  ['Antivirus','Detectar y bloquear programas maliciosos en ordenadores y móviles.'],
  ['Verificación en dos pasos','Pedir un segundo código al iniciar sesión para que nadie más entre en tu cuenta.'],
  ['Gestor de contraseñas','Crear y guardar contraseñas seguras sin tener que recordarlas todas.'],
  ['Pantalla de avisos digital','Mostrar avisos, horarios o menús que se cambian desde el ordenador.'],
  ['Megafonía','Dar avisos por altavoz a todo un espacio a la vez.'],
  ['Marcador electrónico','Mostrar el resultado y el tiempo de un partido a la vista de todos.'],
  ['Cámara deportiva','Grabar en vídeo la actividad física desde cualquier ángulo, incluso en movimiento.'],
  ['Reloj inteligente','Medir pasos, pulso y actividad física, y mostrar avisos del móvil en la muñeca.'],
  ['Drones','Tomar fotos y vídeos desde el aire y revisar zonas difíciles de alcanzar.'],
  ['Microscopio digital','Ver objetos muy aumentados en una pantalla y guardar fotos de lo que se observa.']
];
const TECHS = TECH_DATA.map(t=>t[0]);
const PARA = TECH_DATA.map(t=>t[1]);
// Banco de cada especialidad: 20 tecnologías de las 50, elegidas por su relación con el sector (índices de TECH_DATA)
const BANCO = {
  ei:[7,8,29,15,16,39,30,33,45,47,22,21,24,27,32,28,10,11,13,1],
  af:[46,47,45,2,3,35,5,4,6,1,13,14,10,17,18,19,22,25,26,30],
  as:[45,46,48,44,43,13,14,11,10,9,8,2,3,1,5,4,6,47,25,33],
  hb:[49,0,39,40,41,42,16,15,38,35,3,2,25,29,19,17,10,4,11,28],
  is:[10,11,12,13,14,15,16,38,37,39,40,42,21,22,20,17,18,24,25,28],
  mc:[8,9,10,11,12,14,13,7,43,47,1,4,6,5,44,15,16,38,40,41]
};
const bancoDe = ciclo => BANCO[temaDe(ciclo)] || BANCO.ei;

const ZONES = {
  aula:     {name:'Aula Grande',      x0:0.4,  x1:17.8, y0:0.4, y1:12.6, rgb:[235,230,253], ink:[90,74,181]},
  despacho: {name:'Despacho',         x0:18.2, x1:26.6, y0:0.4, y1:12.6, rgb:[253,231,218], ink:[163,84,42]},
  patio:    {name:'Patio',  x0:0,    x1:27,   y0:16,  y1:30,   rgb:[220,242,230], ink:[46,119,82]},
  cancha:   {name:'Cancha de Fútbol', x0:30,   x1:46,   y0:0,   y1:30,   rgb:[220,236,251], ink:[43,104,158]}
};
const ZONE_ORDER = ['aula','despacho','patio','cancha'];

const PREGUNTAS = [
  {k:'porque', t:'¿Por qué la has instalado en este espacio?', s:'Justifica tu elección', ph:'Explica qué necesidad o problema tiene este espacio y por qué esta tecnología es una buena solución…'},
  {k:'uso', t:'¿Quién la usaría y en qué momento?', s:'Pon un ejemplo concreto', ph:'Describe una situación real: quién la usa, cuándo y qué cambia respecto a cómo se hace ahora…'}
];


// ---- dibujo isométrico
const S=15, C=Math.cos(Math.PI/6);
let BB={x0:1e9,y0:1e9,x1:-1e9,y1:-1e9};
function P(x,y,z=0){ const sx=(x-y)*C*S, sy=(x+y)*0.5*S - z*S; if(sx<BB.x0)BB.x0=sx; if(sx>BB.x1)BB.x1=sx; if(sy<BB.y0)BB.y0=sy; if(sy>BB.y1)BB.y1=sy; return [sx,sy]; }
const f1 = n => Math.round(n*10)/10;
const ptsStr = arr => arr.map(p=>{const q=P(...p); return f1(q[0])+','+f1(q[1]);}).join(' ');
const INK='#111';
function poly(arr, fill='#fff', sw=1.2, stroke=INK, extra=''){ return `<polygon points="${ptsStr(arr)}" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round" ${extra}/>`; }
function line(a,b,sw=1.2,stroke=INK,extra=''){ const p=P(...a), q=P(...b); return `<line x1="${f1(p[0])}" y1="${f1(p[1])}" x2="${f1(q[0])}" y2="${f1(q[1])}" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" ${extra}/>`; }
function pline(arr,sw=1.2,stroke=INK,extra=''){ return `<polyline points="${ptsStr(arr)}" fill="none" stroke="${stroke}" stroke-width="${sw}" stroke-linecap="round" stroke-linejoin="round" ${extra}/>`; }
function box(x0,y0,z0,x1,y1,z1,o={}){
  const top=o.top||'#fff', fx=o.fx||'#ececec', fy=o.fy||'#f7f7f7', sw=o.sw||1.2;
  return poly([[x1,y0,z0],[x1,y1,z0],[x1,y1,z1],[x1,y0,z1]],fx,sw)
       + poly([[x0,y1,z0],[x1,y1,z0],[x1,y1,z1],[x0,y1,z1]],fy,sw)
       + poly([[x0,y0,z1],[x1,y0,z1],[x1,y1,z1],[x0,y1,z1]],top,sw);
}
function ring(cx,cy,r,z=0,n=40){ const a=[]; for(let i=0;i<n;i++){const t=i/n*Math.PI*2; a.push([cx+r*Math.cos(t), cy+r*Math.sin(t), z]);} return a; }
function ringY(cx,y,cz,r,n=28){ const a=[]; for(let i=0;i<n;i++){const t=i/n*Math.PI*2; a.push([cx+r*Math.cos(t), y, cz+r*Math.sin(t)]);} return a; }
function floorText(txt,x,y,size=15,alongY=false){
  const p=P(x,y,0.02);
  const m = alongY ? `matrix(${-C},0.5,${-C},-0.5,${f1(p[0])},${f1(p[1])})` : `matrix(${C},0.5,${-C},0.5,${f1(p[0])},${f1(p[1])})`;
  return `<text transform="${m}" font-size="${size}" font-weight="700" letter-spacing="3" fill="${INK}">${esc(txt)}</text>`;
}
function tree(x,y,h=1){
  const sh=poly(ring(x,y,1.4*h,0.01,24),'#000',0,'none','fill-opacity="0.07"');
  const trunk=box(x-.14,y-.14,0,x+.14,y+.14,1.9*h,{sw:1});
  const c=[[x,y,3.0*h,1.25*h],[x-.55,y+.35,2.55*h,0.95*h],[x+.5,y-.45,3.45*h,0.85*h]].map(([a,b,z,r])=>{const p=P(a,b,z); return [p[0],p[1],r*S];});
  const strokes=c.map(([a,b,r])=>`<circle cx="${f1(a)}" cy="${f1(b)}" r="${f1(r)}" fill="#fff" stroke="${INK}" stroke-width="2.4"/>`).join('');
  const fills=c.map(([a,b,r])=>`<circle cx="${f1(a)}" cy="${f1(b)}" r="${f1(r-1.2)}" fill="#fff"/>`).join('');
  return sh+trunk+strokes+fills;
}
function chairFacingMinusY(x,y){ return box(x,y,0,x+.8,y+.65,.55,{sw:1})+box(x,y+.65,0,x+.8,y+.82,1.35,{sw:1}); }

// ===== Planos por especialidad =====
// Las 4 zonas tienen siempre la misma posición (los pines guardados siguen valiendo);
// cambian el uso, el nombre y el mobiliario según el ciclo del alumno.
const TEMAS_PLANO = {
  ei: { titulo:'PLANO DE LA ESCUELA INFANTIL',     nombres:{aula:'Aula Grande',         despacho:'Despacho',  patio:'Patio',              cancha:'Cancha de Fútbol'} },
  af: { titulo:'PLANO DEL CENTRO DEPORTIVO',       nombres:{aula:'Sala de Musculación', despacho:'Despacho',  patio:'Zona Exterior',      cancha:'Piscina'} },
  as: { titulo:'PLANO DEL POLIDEPORTIVO',          nombres:{aula:'Sala Polivalente',    despacho:'Oficina',   patio:'Zona de Aire Libre', cancha:'Pista Polideportiva'} },
  hb: { titulo:'PLANO DE LA CLÍNICA DENTAL',       nombres:{aula:'Gabinete Dental',     despacho:'Recepción', patio:'Sala de Espera',     cancha:'Esterilización y Rayos X'} },
  is: { titulo:'PLANO DEL CENTRO DE DÍA',          nombres:{aula:'Sala de Actividades', despacho:'Despacho',  patio:'Jardín y Huerto',    cancha:'Comedor'} },
  mc: { titulo:'PLANO DEL SERVICIO DE MEDIACIÓN',  nombres:{aula:'Aula de Formación',   despacho:'Despacho',  patio:'Sala de Espera',     cancha:'Salón de Actos'} }
};
function temaDe(ciclo){
  const c = String(ciclo || '');
  if (/Acondicionamiento/i.test(c)) return 'af';
  if (/Sociodeportiva/i.test(c)) return 'as';
  if (/Bucodental/i.test(c)) return 'hb';
  if (/Integraci/i.test(c)) return 'is';
  if (/Mediaci/i.test(c)) return 'mc';
  return 'ei';
}
let TEMA = 'ei';
function aplicarTema(){
  TEMA = temaDe(state && state.alumno && state.alumno.ciclo);
  const n = TEMAS_PLANO[TEMA].nombres;
  for (const k of ZONE_ORDER) ZONES[k].name = n[k];
  const t = document.getElementById('espaciosTxt');
  if (t) t.innerHTML = ['patio','aula','despacho','cancha'].map(k => '<b>' + esc(n[k]) + '</b>').join(', ').replace(/, (?=[^,]*$)/, ' y ');
}
const listaEspacios = () => { const n = TEMAS_PLANO[TEMA].nombres; return [n.patio, n.aula, n.despacho, n.cancha].map(s => s.toLowerCase()).join(', ').replace(/, (?=[^,]*$)/, ' o '); };

// --- piezas de mobiliario reutilizables ---
function silla(x,y){ return chairFacingMinusY(x,y); }
function mesaRedonda(x,y,r=1.2){ const p=P(x,y,.95); return box(x-.15,y-.15,0,x+.15,y+.15,.9,{sw:1}) + poly(ring(x,y,r,.95,28),'#fff',1.2); }
function maceta(x,y){ const p=P(x,y,1.2); return box(x-.35,y-.35,0,x+.35,y+.35,.6,{sw:1}) + `<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(.6*S)}" fill="#fff" stroke="${INK}" stroke-width="1.2"/>`; }
function baldosas(x0,y0,x1,y1,paso=1.5){ let g=''; for(let x=x0+paso;x<x1;x+=paso) g+=line([x,y0,.02],[x,y1,.02],.6,'#dedede'); for(let y=y0+paso;y<y1;y+=paso) g+=line([x0,y,.02],[x1,y,.02],.6,'#dedede'); return g; }
function filaSillas(x0,x1,y,paso=1.1){ let s=''; for(let x=x0;x<=x1;x+=paso) s+=silla(x,y); return s; }

// --- Sala grande (zona «aula»: x 0.4–17.8, y 0.4–12.6) ---
const MUEBLES_AULA = {
  ei(add){
    [2.5,6.6,10.7].forEach(x=>[4.8,7.6,10.4].forEach(y=>{
      add(x+1.2+y+.55, box(x,y,0,x+2.4,y+1.1,.95,{sw:1.1}));
      add(x+.4+.4+y+1.9, silla(x+.4,y+1.45)); add(x+1.4+.4+y+1.9, silla(x+1.4,y+1.45));
    }));
    add(14+2.8, box(12.5,2.2,0,15.5,3.4,1.05)); add(14+2.9, box(13.2,2.35,1.05,14.2,3.0,1.12,{sw:.9}));
    add(15.4, box(13.6,1.15,0,14.4,1.8,.55,{sw:1})+box(13.6,1.0,0,14.4,1.15,1.35,{sw:1}));
    { let s=box(15.8,0.4,0,17.6,1.2,3.4); [1.1,2.2,3.0].forEach(z=>s+=line([15.8,1.2,z],[17.6,1.2,z],1)); add(17.5, s); }
    add(13.2, maceta(1.2,12));
  },
  af(add){
    // cintas de correr junto al muro
    [1.6,3.6,5.6,7.6].forEach(x=>add(x+.7+3.1, box(x,1.6,0,x+1.4,4.6,.35)+box(x,1.6,.35,x+1.4,1.9,1.6,{sw:1})+box(x+.1,1.5,1.6,x+1.3,2.1,1.75,{sw:.9})));
    // bancos con barra
    [[2.5,7],[6.5,7],[2.5,10],[6.5,10]].forEach(([x,y])=>add(x+.4+y+1.1, box(x,y,0,x+.8,y+2.2,.6)+box(x-.6,y+.3,0,x-.45,y+.45,1.6,{sw:.9})+box(x+1.25,y+.3,0,x+1.4,y+.45,1.6,{sw:.9})+line([x-1.1,y+.38,1.45],[x+1.9,y+.38,1.45],2.6)));
    // estante de mancuernas y esterillas
    { let s=box(11.5,1.8,0,16.5,2.8,.9); for(let x=12;x<16.4;x+=.8) s+=box(x,2.05,.9,x+.5,2.55,1.15,{sw:.8}); add(14+2.3, s); }
    add(14+9, box(11.2,6.2,0,16.8,11.8,.06,{top:'#f4f4f4'})+line([11.2,8,.07],[16.8,8,.07],.6,'#bbb')+line([11.2,10,.07],[16.8,10,.07],.6,'#bbb'));
    add(13.2, maceta(1.2,12));
  },
  as(add){
    // espalderas en el muro izquierdo
    { let s=''; for(let y=2;y<=9;y+=1.75){ s+=line([0.45,y,0],[0.45,y,3.8],1.4); } for(let z=.4;z<3.8;z+=.45) s+=line([0.45,2,z],[0.45,9,z],.8); add(5.6, s); }
    // colchonetas, plinto y carro de balones
    add(6+6.5, box(3,4,0,9,9,.25,{top:'#f4f4f4'}));
    add(12.5+4.4, box(11,3.4,0,14,5.4,.4)+box(11.1,3.5,.4,13.9,5.3,.8,{sw:1})+box(11.2,3.6,.8,13.8,5.2,1.2,{sw:1}));
    { let s=box(14.8,9.6,0,16.8,11.2,.9); [[15.3,10],[16.2,10.1],[15.7,10.8]].forEach(([x,y])=>{ const p=P(x,y,1.2); s+=`<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(.38*S)}" fill="#fff" stroke="${INK}" stroke-width="1.1"/>`; }); add(15.8+10.4, s); }
    [[11,9],[12.4,10.6],[10,11.5]].forEach(([x,y])=>add(x+y, poly([[x-.3,y-.3,0],[x+.3,y-.3,0],[x,y,1]],'#fff',1)+poly([[x+.3,y-.3,0],[x+.3,y+.3,0],[x,y,1]],'#ececec',1)));
  },
  hb(add){
    // encimera con lavabo junto al muro
    add(8+1.2, box(1.5,0.4,0,16,1.4,1.05)+poly(ring(4,0.9,.35,1.06,16),'#fafafa',1));
    // sillones dentales con lámpara y taburete
    [[3,4.5],[10.5,4.5]].forEach(([x,y])=>{
      let s=box(x+.3,y+1,0,x+.9,y+2.2,.5,{sw:1}) + box(x,y+.6,.5,x+1.2,y+3.4,.8) + box(x+.2,y,.8,x+1,y+.7,1.6,{sw:1});
      s+=line([x+2,y+1,0],[x+2,y+1,3.2],1.6)+line([x+2,y+1,3.2],[x+.9,y+1.6,2.8],1.4)+box(x+.6,y+1.4,2.55,x+1.2,y+2,2.85,{sw:.9});
      s+=box(x+2.3,y+2.4,0,x+2.9,y+3,.6,{sw:1});
      add(x+1+y+2.4, s);
    });
    { let s=box(15.8,4,0,17.6,8,1.4); [0.7].forEach(z=>s+=line([15.8,6,z],[15.8,6,z],1)); add(16.7+6, s); }
    add(13.2, maceta(1.2,12));
  },
  is(add){
    // mesas redondas con sillas
    [[4,5],[10,5],[4,10],[10,10]].forEach(([x,y])=>{ add(x+y-1.5, silla(x-.4,y-2.2)); add(x+y, mesaRedonda(x,y)); add(x+y+1.8, silla(x-.4,y+1.4)); });
    // televisor en el muro y sofá
    add(15+.5, poly([[13,0.4,1.7],[16.4,0.4,1.7],[16.4,0.4,3.6],[13,0.4,3.6]],'#f3f3f3',1.4));
    add(14.6+8.6, box(12.6,8,0,16.6,9.2,.6)+box(12.6,8.9,.6,16.6,9.2,1.3)+box(12.6,8,.6,12.9,8.9,.95)+box(16.3,8,.6,16.6,8.9,.95));
    add(13.2, maceta(1.2,12));
  },
  mc(add){
    // pupitres orientados a la pantalla
    [2.5,6.6].forEach(x=>[4.8,7.6,10.4].forEach(y=>{
      add(x+1.2+y+.55, box(x,y,0,x+2.4,y+1.1,.95,{sw:1.1}));
      add(x+.8+y+1.9, silla(x+.4,y+1.45)); add(x+1.8+y+1.9, silla(x+1.4,y+1.45));
    }));
    // tarima del intérprete de lengua de signos con atril
    add(13.5+3, box(11.5,2,0,15.5,4.2,.3)+box(13,2.8,.3,13.6,3.2,1.5,{sw:1}));
    add(14+8.5, box(12,7.5,0,16,9.5,.95)+box(12.6,7.9,.95,13.8,8.7,1.02,{sw:.9}));
    { let s=box(15.8,0.4,0,17.6,1.2,3.4); [1.1,2.2,3.0].forEach(z=>s+=line([15.8,1.2,z],[17.6,1.2,z],1)); add(17.5, s); }
  }
};

// --- Zona inferior («patio»: x 0–27, y 16–30) ---
const ZONA_INFERIOR = {
  ei:{ suelo(){ return poly([[1.5,18,.02],[11.5,18,.02],[11.5,25,.02],[1.5,25,.02]],'url(#dots)',1.1); },
    objetos(add){
      { let s=''; const L=(x)=>pline([[x,20,0],[x,21.5,4.3],[x,23,0]],2); s+=L(3);
        [[4.6,5.8],[7.2,8.4]].forEach(([a,c2])=>{ s+=line([a+.1,21.5,4.3],[a+.1,21.5,1.05],.9); s+=line([c2-.1,21.5,4.3],[c2-.1,21.5,1.05],.9); s+=box(a,21.2,.9,c2,21.8,1.05,{sw:1}); });
        s+=line([3,21.5,4.3],[10,21.5,4.3],2.6); s+=L(10); add(6.5+21.5, s); }
      { let s=box(14,19.4,0,15.4,20.9,2.6);
        s+=poly([[15.4,19.55,2.6],[15.4,20.75,2.6],[20,20.75,0.05],[20,19.55,0.05]],'#fff',1.2);
        s+=pline([[15.4,19.55,2.95],[20,19.55,0.4]],1.1)+pline([[15.4,20.75,2.95],[20,20.75,0.4]],1.1);
        add(16.5+20.2, s); }
      add(22+26.2, box(19,24,0,25,28.4,.45)+poly([[19.4,24.4,.46],[24.6,24.4,.46],[24.6,28,.46],[19.4,28,.46]],'url(#dots2)',1));
      add(4+28.9, box(2,28.5,0,6,29.1,.5)+box(2,28.95,.5,6,29.1,1.1));
      add(14+28.9, box(12,28.5,0,16,29.1,.5)+box(12,28.95,.5,16,29.1,1.1));
    }, arboles:true },
  af:{ suelo(){ let s=''; [17.2,18.6,20].forEach(y=>s+=line([1,y,.02],[26,y,.02],1.1)); s+=line([1,17.2,.02],[1,20,.02],1.1)+line([26,17.2,.02],[26,20,.02],1.1); return s+poly([[2,22,.02],[12,22,.02],[12,28.5,.02],[2,28.5,.02]],'url(#dots)',1.1); },
    objetos(add){
      { let s=''; [3,6,9].forEach(x=>s+=line([x,24,0],[x,24,3],1.8)); s+=line([3,24,3],[9,24,3],2.2)+line([3,24,2.2],[6,24,2.2],1.6); add(6+24, s); }
      [[15,23.5],[17.5,23.5],[20,23.5]].forEach(([x,y],i)=>add(x+y+1, box(x,y,0,x+1.6,y+1.6,.5+i*.35)));
      add(14+28.9, box(12,28.5,0,16,29.1,.5)+box(12,28.95,.5,16,29.1,1.1));
      add(22+28.9, box(20,28.5,0,24,29.1,.5)+box(20,28.95,.5,24,29.1,1.1));
    }, arboles:true },
  as:{ suelo(){ return poly([[20,18,.02],[26,18,.02],[26,27,.02],[20,27,.02]],'url(#dots)',1.1); },
    objetos(add){
      // mesas de picnic
      [[3,19],[8.5,19],[3,25]].forEach(([x,y])=>add(x+y+2, box(x,y,0,x+3.5,y+1.2,1)+box(x,y-.9,0,x+3.5,y-.4,.55,{sw:1})+box(x,y+1.6,0,x+3.5,y+2.1,.55,{sw:1})));
      // rocódromo
      { let s=box(24.6,18.5,0,25.2,26.5,3.6,{fx:'url(#dots2)'}); [[19.6,1.2],[21.4,2.4],[23.3,1.6],[25,2.9]].forEach(([y,z])=>s+=box(25.2,y,z,25.35,y+.35,z+.25,{sw:.8})); add(25+22.5, s); }
      // tienda de campaña
      { const x=14, y=23.5; add(x+y+2, poly([[x,y,0],[x+4,y,0],[x+2,y,2.2]],'#f4f4f4',1.2)+poly([[x+4,y,0],[x+4,y+3,0],[x+2,y+3,2.2],[x+2,y,2.2]],'#fff',1.2)); }
    }, arboles:true },
  hb:{ suelo(){ return baldosas(0,16,27,30); },
    objetos(add){
      [19.5,22.5].forEach(y=>add(5+y+1, filaSillas(1.5,8.2,y)));
      add(11+25, box(10,24,0,13,26,.45)+box(10.6,24.4,.45,11.6,25.1,.5,{sw:.8}));
      // rincón infantil
      add(19+20.5, box(16,18,0,22,23,.06,{top:'#f4f4f4'})+box(17,19,0,18.6,20.2,.8)+box(19.6,21,0,20.6,22,.5));
      [[1.2,16.9],[26,22.3],[17.8,29.3]].forEach(([x,y])=>add(x+y, maceta(x,y)));
    }, arboles:false },
  is:{ suelo(){ return pline([[13,30,.02],[13,16,.02]],2.2,'#ccc','stroke-dasharray="1 5"'); },
    objetos(add){
      // bancales del huerto
      [[2,18],[2,22],[2,26],[7,18],[7,22]].forEach(([x,y])=>add(x+y+2.5, box(x,y,0,x+4,y+2.6,.6)+poly([[x+.3,y+.3,.61],[x+3.7,y+.3,.61],[x+3.7,y+2.3,.61],[x+.3,y+2.3,.61]],'url(#dots2)',1)));
      // pérgola con bancos
      { let s=''; [[16,19],[23,19],[16,25],[23,25]].forEach(([x,y])=>s+=box(x,y,0,x+.3,y+.3,3.2,{sw:1})); for(let x=16;x<=23.3;x+=1.1) s+=box(x,19,3.2,x+.2,25.3,3.35,{sw:.8}); add(19.5+22, s); }
      add(19.5+22.6, box(17.5,21.8,0,21.5,22.4,.5)+box(17.5,22.25,.5,21.5,22.4,1.1));
    }, arboles:true },
  mc:{ suelo(){ return baldosas(0,16,27,30); },
    objetos(add){
      [19.5,22.5,25.5].forEach(y=>add(5+y+1, filaSillas(1.5,8.2,y)));
      // punto de información con pantalla y avisador luminoso
      add(17+19, box(14,18,0,20,19.6,1.1)+box(16.4,18.2,1.1,17.6,18.4,2.1,{sw:1}));
      { const p=P(20.6,18,3.2); add(20.6+18, line([20.6,18,0],[20.6,18,2.8],1.2)+`<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(.4*S)}" fill="#fff" stroke="${INK}" stroke-width="1.4"/>`); }
      [[1.2,16.9],[26,22.3],[17.8,29.3]].forEach(([x,y])=>add(x+y, maceta(x,y)));
    }, arboles:false }
};

// --- Zona derecha («cancha»: x 30–46, y 0–30) ---
const ZONA_DERECHA = {
  ei:{ suelo(){
      let s=''; for(let i=0;i<8;i+=2){ const y0=1+i*3.5, y1=y0+3.5; s+=poly([[31,y0,.015],[45,y0,.015],[45,y1,.015],[31,y1,.015]],'#f3f3f3',0,'none'); }
      s+=poly([[31,1,.02],[45,1,.02],[45,29,.02],[31,29,.02]],'none',1.4)+line([31,15,.02],[45,15,.02],1.4)+poly(ring(38,15,2.6,.02),'none',1.4);
      s+=poly([[34,1,.02],[42,1,.02],[42,5.2,.02],[34,5.2,.02]],'none',1.4)+poly([[34,24.8,.02],[42,24.8,.02],[42,29,.02],[34,29,.02]],'none',1.4);
      return s; },
    objetos(add){
      let c='';
      c+=poly([[36.4,0.2,0],[39.6,0.2,0],[39.6,0.2,2.2],[36.4,0.2,2.2]],'#fff',.7,'#777','fill-opacity=".85"');
      for(let x=36.8;x<39.6;x+=0.4) c+=line([x,0.2,0],[x,0.2,2.2],.5,'#999');
      c+=pline([[36.4,1,0],[36.4,1,2.2],[39.6,1,2.2],[39.6,1,0]],2.4);
      [[31,1],[45,1]].forEach(([x,y])=>{ c+=line([x,y,0],[x,y,1.7],1.2); c+=poly([[x,y,1.7],[x+.6,y,1.45],[x,y,1.2]],INK,.8); });
      c+=box(45.2,11.5,0,45.9,18.5,.55)+box(45.7,11.5,.55,45.9,18.5,1.3);
      add(38+1, c);
      { const p=P(39,16.5,.38); add(39+16.5, `<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(.38*S)}" fill="#fff" stroke="${INK}" stroke-width="1.2"/><circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(.13*S)}" fill="${INK}"/>`); }
      add(38+29.5, pline([[36.4,29,0],[36.4,29,2.2],[39.6,29,2.2],[39.6,29,0]],2.4));
    } },
  af:{ suelo(){
      let s=poly([[32.5,2.5,.02],[43.5,2.5,.02],[43.5,27.5,.02],[32.5,27.5,.02]],'#f2f7fb',1.6);
      for(let x=34.7;x<43.5;x+=2.2) s+=line([x,3,.03],[x,27,.03],.9,'#9bb','stroke-dasharray="2 3"');
      return s+poly([[31,1,.02],[45,1,.02],[45,29,.02],[31,29,.02]],'none',1.1); },
    objetos(add){
      for(let x=33;x<43.5;x+=2.2) add(x+2, box(x+.3,1.4,0,x+1.3,2.3,.7,{sw:1}));
      [[33,27.5],[43,27.5]].forEach(([x,y])=>add(x+y+1, line([x,y,0],[x,y+.8,1.6],1.4)+line([x+.6,y,0],[x+.6,y+.8,1.6],1.4)+line([x,y+.3,.5],[x+.6,y+.3,.5],1)+line([x,y+.55,1],[x+.6,y+.55,1],1)));
      add(45.5+15, box(45.2,11.5,0,45.9,18.5,.55)+box(45.7,11.5,.55,45.9,18.5,1.3));
    } },
  as:{ suelo(){
      let s=poly([[31,1,.02],[45,1,.02],[45,29,.02],[31,29,.02]],'#f6f6f6',1.4)+line([31,15,.02],[45,15,.02],1.4)+poly(ring(38,15,2.2,.02),'none',1.4);
      s+=poly([[35.5,1,.02],[40.5,1,.02],[40.5,6.5,.02],[35.5,6.5,.02]],'none',1.4)+poly([[35.5,23.5,.02],[40.5,23.5,.02],[40.5,29,.02],[35.5,29,.02]],'none',1.4);
      return s; },
    objetos(add){
      const canasta=(y,yb)=>line([38,y,0],[38,y,3.6],2)+box(37,yb,3.2,39,yb+.12,4.4,{sw:1})+poly(ring(38,yb+(yb<15?.6:-.6),.45,3.3,16),'none',1.6);
      add(38+.5, canasta(0.2,0.6)); add(38+29.5, canasta(29.8,29.2));
      add(45.5+15, box(45.2,11.5,0,45.9,18.5,.55)+box(45.7,11.5,.55,45.9,18.5,1.3));
    } },
  hb:{ suelo(){ return baldosas(30,0,46,30)+poly([[30,0,.02],[46,0,.02],[46,30,.02],[30,30,.02]],'none',1.2); },
    objetos(add){
      // tabique que separa esterilización (fondo) y rayos X (delante)
      add(38+15, box(30,14.8,0,35,15.2,1.4,{top:INK})+box(37.5,14.8,0,46,15.2,1.4,{top:INK}));
      // encimera con autoclave y lavadero
      { let s=box(43.6,1,0,45.6,13,1.05); s+=box(43.9,2,1.05,45.3,3.6,1.9,{sw:1})+box(43.9,4.4,1.05,45.3,5.6,1.6,{sw:1})+poly(ring(44.6,8.5,.45,1.06,16),'#fafafa',1); add(44.6+7, s); }
      add(36+7, box(33,5,0,39,8,1)+box(34,5.6,1,35.5,6.6,1.3,{sw:.8}));
      // equipo de rayos X y mampara
      add(38+22, box(37,20,0,38.4,21.4,3.4)+box(36,20.4,2.6,37,21,2.9,{sw:1})+box(35.2,21.5,0,36.4,24,.8)+box(35.2,23.6,.8,36.4,24,1.6));
      add(32+26, box(31.5,24.5,0,31.8,28.5,2.4,{fx:'#f4f4f4'}));
    } },
  is:{ suelo(){ return baldosas(30,0,46,30)+poly([[30,0,.02],[46,0,.02],[46,30,.02],[30,30,.02]],'none',1.2); },
    objetos(add){
      [4,10,16,22].forEach(y=>{
        add(38+y-.6, filaSillas(33,42.4,y-1.2,1.6));
        add(38+y+.8, box(32.5,y,0,43.5,y+1.6,.95));
        add(38+y+2.5, filaSillas(33,42.4,y+2,1.6));
      });
      add(38+27.7, box(31.5,27,0,44.5,28.4,1.1)+box(32,27.2,1.1,44,28.2,1.14,{sw:.7}));
    } },
  mc:{ suelo(){ return baldosas(30,0,46,30)+poly([[30,0,.02],[46,0,.02],[46,30,.02],[30,30,.02]],'none',1.2); },
    objetos(add){
      add(38+3, box(31,1,0,45,5,.6)+box(34,1.2,.6,42,1.45,3.8,{fy:'#f6f6f6'}));
      { const p=P(43,3.5,.62); add(43+3.6, `<ellipse cx="${f1(p[0])}" cy="${f1(p[1])}" rx="${f1(.9*S*C)}" ry="${f1(.45*S)}" fill="#fff" stroke="${INK}" stroke-width="1.4" stroke-dasharray="2 2"/>`+box(42.7,3.3,.6,43.3,3.8,2.2,{sw:1})); }
      for(let y=8;y<=26;y+=2.2) add(38+y+1, filaSillas(32,43.5,y));
    } }
};

function buildMap(){
  BB={x0:1e9,y0:1e9,x1:-1e9,y1:-1e9};
  const out=[];
  const objs=[]; const add=(k,s)=>objs.push({k,s});
  const H=5, h=1.3;

  // Base
  out.push(box(-2,-2,-0.9,48,32,0,{fx:'#e9e9e9',fy:'#f5f5f5',sw:1.4}));
  // Suelos de los espacios (zonas interactivas)
  const zp = z => [[z.x0,z.y0,0.01],[z.x1,z.y0,0.01],[z.x1,z.y1,0.01],[z.x0,z.y1,0.01]];
  out.push(`<polygon class="zone" data-zone="aula" points="${ptsStr(zp({x0:0,y0:0,x1:18,y1:13}))}" fill="#fff" stroke="none"/>`);
  out.push(`<polygon class="zone" data-zone="despacho" points="${ptsStr(zp({x0:18,y0:0,x1:27,y1:13}))}" fill="#fff" stroke="none"/>`);
  out.push(`<polygon class="zone" data-zone="patio" points="${ptsStr(zp(ZONES.patio))}" fill="#fff" stroke="${INK}" stroke-width="1.2" stroke-dasharray="1 5" stroke-linecap="round"/>`);
  out.push(`<polygon class="zone" data-zone="cancha" points="${ptsStr(zp(ZONES.cancha))}" fill="#fff" stroke="none"/>`);

  // Baldosas del edificio
  let g='';
  for(let x=1.5;x<27;x+=1.5) g+=line([x,0.4,0.02],[x,12.6,0.02],0.6,'#dedede');
  for(let y=1.9;y<12.6;y+=1.5) g+=line([0.4,y,0.02],[26.6,y,0.02],0.6,'#dedede');
  out.push(g);

  // Suelos de la zona derecha e inferior según la especialidad
  out.push(ZONA_DERECHA[TEMA].suelo());
  out.push(ZONA_INFERIOR[TEMA].suelo());
  // Rótulos en el suelo
  { const n = TEMAS_PLANO[TEMA].nombres, tam = s => s.length > 16 ? 11 : s.length > 12 ? 13 : 15;
    out.push(floorText(n.aula.toUpperCase(),1.2,15.3,tam(n.aula)));
    out.push(floorText(n.despacho.toUpperCase(),18.6,15.3,tam(n.despacho)));
    out.push(floorText(n.patio.toUpperCase(),1.2,31.5,tam(n.patio)));
    out.push(floorText(n.cancha.toUpperCase(),31,31.5,tam(n.cancha))); }

  // ===== Edificio =====
  let b='';
  b+=box(0,0,0,27,0.4,H,{top:INK});            // muro del fondo
  b+=box(0,0.4,0,0.4,13,H,{top:INK});          // muro izquierdo
  // ventanas muro izquierdo
  [[2,5.5],[7,10.5]].forEach(([a,c])=>{ b+=poly([[0.4,a,1.4],[0.4,c,1.4],[0.4,c,3.8],[0.4,a,3.8]],'#fff',1.1); b+=line([0.4,(a+c)/2,1.4],[0.4,(a+c)/2,3.8],1); b+=line([0.4,a,2.6],[0.4,c,2.6],1); });
  // pizarra
  b+=poly([[3,0.4,1.5],[11,0.4,1.5],[11,0.4,3.9],[3,0.4,3.9]],'#fff',1.4);
  b+=poly([[3.4,0.4,1.8],[10.6,0.4,1.8],[10.6,0.4,3.6],[3.4,0.4,3.6]],'#fafafa',.6,'#999');
  b+=box(3,0.4,1.35,11,0.65,1.5,{sw:1});
  // reloj
  b+=poly(ringY(13.8,0.4,4.25,0.42),'#fff',1.2); b+=line([13.8,0.4,4.25],[13.8,0.4,4.5],1); b+=line([13.8,0.4,4.25],[14,0.4,4.25],1);
  // ventana despacho
  b+=poly([[19.2,0.4,1.6],[22.8,0.4,1.6],[22.8,0.4,3.8],[19.2,0.4,3.8]],'#fff',1.1); b+=line([21,0.4,1.6],[21,0.4,3.8],1);
  out.push(b);

  // Mobiliario de la sala grande según la especialidad
  MUEBLES_AULA[TEMA](add);

  // Tabique aula/despacho (bajo, con puerta)
  add(18+4.95, box(17.8,0.4,0,18.2,9.4,h,{top:INK}));
  add(18+12.25, box(17.8,11.4,0,18.2,12.6,h,{top:INK}));

  // Mobiliario del despacho
  add(21.6+3.9, box(19.6,3.2,0,23.6,4.6,1.05)+box(21.0,3.4,1.05,22.6,3.55,2.0,{sw:1})+box(21.6,3.55,1.05,22.0,3.9,1.12,{sw:.8}));
  add(21.6+5.6, chairFacingMinusY(21.2,5.0));
  { let s=box(24,0.4,0,26.4,1.2,3.6); [1.2,2.4].forEach(z=>s+=line([24,1.2,z],[26.4,1.2,z],1)); add(25.2+.8, s); }
  add(25.6+3.6, box(25,3,0,26.4,4.2,1.4)+line([25,3.6,.7],[25,3.6,.7],1));
  add(21.3+9.1, box(20.2,8.6,0,22.4,9.6,.5));
  add(21.3+11.4, box(19.4,10.6,0,23.2,12.2,.6)+box(19.4,11.8,.6,23.2,12.2,1.35)+box(19.4,10.6,.6,19.8,11.8,1.0)+box(22.8,10.6,.6,23.2,11.8,1.0));
  add(25.9+11.9, box(25.5,11.5,0,26.3,12.3,.8)+(()=>{const p=P(25.9,11.9,1.7);return `<circle cx="${f1(p[0])}" cy="${f1(p[1])}" r="${f1(.8*S)}" fill="#fff" stroke="${INK}" stroke-width="1.2"/>`;})());

  objs.sort((a,b)=>a.k-b.k); out.push(objs.map(o=>o.s).join('')); objs.length=0;

  // Muros delanteros bajos (corte)
  out.push(box(0.4,12.6,0,7.4,13,h,{top:INK})+box(9.6,12.6,0,17.8,13,h,{top:INK})+box(17.8,12.6,0,20,13,h,{top:INK})+box(21.8,12.6,0,26.6,13,h,{top:INK})+box(26.6,0.4,0,27,13,h,{top:INK}));

  // Objetos de la zona derecha e inferior según la especialidad
  ZONA_DERECHA[TEMA].objetos(add);
  ZONA_INFERIOR[TEMA].objetos(add);
  // Árboles
  [[1.2,16.9,1],[26,22.3,.95],[17.8,29.3,1.05],[28.5,27.5,.9],[47,3,.95],[47,9.5,1.05],[47,24,1],[-1,22,1.05],[-1,28,.95]].filter(([x,y])=>ZONA_INFERIOR[TEMA].arboles || !(x>=0&&x<=27&&y>=16&&y<=30)).forEach(([x,y,hh])=>add(x+y, tree(x,y,hh)));
  objs.sort((a,b)=>a.k-b.k); out.push(objs.map(o=>o.s).join(''));

  // Rosa de los vientos
  { const p=P(46,-1.2,0.02); out.push(`<g transform="translate(${f1(p[0]+30)},${f1(p[1]-6)})"><circle r="13" fill="#fff" stroke="${INK}" stroke-width="1.2"/><path d="M0,-10 L4,4 L0,1 L-4,4 Z" fill="${INK}"/><text y="-17" font-size="10" font-weight="800" text-anchor="middle" fill="${INK}">N</text></g>`); }

  const pad=24, top=70;
  const vb=[Math.floor(BB.x0-pad), Math.floor(BB.y0-top), Math.ceil(BB.x1-BB.x0+pad*2), Math.ceil(BB.y1-BB.y0+top+pad)];
  const title=`<text x="${vb[0]+22}" y="${vb[1]+34}" font-size="13" font-weight="800" letter-spacing="2.5" fill="${INK}">${TEMAS_PLANO[TEMA].titulo}</text><text x="${vb[0]+22}" y="${vb[1]+52}" font-size="11" fill="#777" letter-spacing="1">UT2 · E4 · TECNOLOGÍAS HABILITADORAS</text>`;
  return `<svg id="plMap" xmlns="http://www.w3.org/2000/svg" viewBox="${vb.join(' ')}" font-family="Inter, 'Segoe UI', Arial, sans-serif" role="img" aria-label="Plano isométrico: ${esc(listaEspacios())}">
<defs>
<pattern id="dots" width="7" height="7" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="0.9" fill="#111"/></pattern>
<pattern id="dots2" width="4" height="4" patternUnits="userSpaceOnUse"><rect width="4" height="4" fill="#fff"/><circle cx="1" cy="1" r="0.6" fill="#999"/><circle cx="3" cy="3" r="0.5" fill="#bbb"/></pattern>
</defs>
<rect x="${vb[0]}" y="${vb[1]}" width="${vb[2]}" height="${vb[3]}" fill="#fff"/>
${title}
<g class="zones">${out.slice(0,1).join('')}</g>
${out.slice(1,5).join('')}
<g class="scene">${out.slice(5).join('\n')}</g>
<g id="plPins"></g>
</svg>`;
}


// ---- interacciones
/* Coordenadas: pantalla ⇄ mundo */
function svgPointFromClient(cx,cy){ const svg=$('#plMap'); const pt=svg.createSVGPoint(); pt.x=cx; pt.y=cy; return pt.matrixTransform(svg.getScreenCTM().inverse()); }
function worldFromClient(cx,cy){ const p=svgPointFromClient(cx,cy); const A=p.x/(C*S), B=p.y/(0.5*S); return {x:(A+B)/2, y:(B-A)/2}; }
function zoneAt(x,y){ for(const k of ZONE_ORDER){ const z=ZONES[k]; if(x>=z.x0&&x<=z.x1&&y>=z.y0&&y<=z.y1) return k; } return null; }
function overMap(cx,cy){ const r=$('#plMap').getBoundingClientRect(); return cx>=r.left&&cx<=r.right&&cy>=r.top&&cy<=r.bottom; }
function highlightZone(k){ document.querySelectorAll('#plMap .zone').forEach(z=>z.classList.toggle('hl', z.dataset.zone===k)); }

function pinSVG(item, n, forExport=false){
  const p=P(item.x,item.y,0); const name=TECHS[item.id];
  const w=Math.min(260, name.length*6.6+22);
  const label = forExport ? '' : `<g class="plabel"><rect x="16" y="-62" rx="8" width="${f1(w)}" height="24" fill="#111"/><text x="27" y="-45.5" font-size="12" font-weight="600" fill="#fff">${esc(name)}</text></g>`;
  return `<g class="pin" data-id="${item.id}" transform="translate(${f1(p[0])},${f1(p[1])})">
<ellipse rx="8" ry="4" fill="#000" fill-opacity=".18"/><line x1="0" y1="0" x2="0" y2="-31" stroke="#111" stroke-width="1.8"/>
<circle class="head" cy="-42" r="12" fill="#111" stroke="#fff" stroke-width="2.5"/>
<text y="-38" font-size="12" font-weight="800" text-anchor="middle" fill="#fff">${n}</text>${label}<title>${esc(n+'. '+name)}</title></g>`;
}
function renderPins(){
  const items = state.sel.map((s,i)=>({...s,n:i+1})).filter(s=>s.placed).sort((a,b)=>(a.x+a.y)-(b.x+b.y));
  $('#plPins').innerHTML = items.map(s=>pinSVG(s,s.n)).join('');
}

/* =========================================================
   BANCO, BANDEJA, LEYENDA
   ========================================================= */
function selIndex(id){ return state.sel.findIndex(s=>s.id===id); }
function renderBank(){
  const q=$('#plSearch').value.trim().toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  const full = state.sel.length>=MAX;
  const banco = BANCO[TEMA] || BANCO.ei;
  // Orden propio del alumno; si cambia de ciclo, las que falten de su banco se añaden al final
  const orden = state.orden.filter(id=>banco.includes(id)); banco.forEach(id=>{ if(!orden.includes(id)) orden.push(id); });
  $('#plBank').innerHTML = orden.map(id=>{
    const i=selIndex(id), on=i>=0;
    const nm=TECHS[id]; const hit=!q || nm.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').includes(q);
    return `<button type="button" class="chip${on?' on':''}${!on&&full?' off':''}" data-id="${id}" ${hit?'':'hidden'} aria-pressed="${on}" title="${esc(PARA[id])}">${on?`<span class="n">${i+1}</span>`:''}${esc(nm)}</button>`;
  }).join('');
  $('#plBankCount').textContent = banco.length;
}
function renderTray(){
  $('#plSelCount').textContent = state.sel.length+'/'+MAX;
  if(!state.sel.length){ $('#plTray').innerHTML='<li class="empty">Aún no has elegido ninguna. Toca una tecnología del banco.</li>'; return; }
  $('#plTray').innerHTML = state.sel.map((s,i)=>{
    const z = s.placed ? zoneAt(s.x,s.y) : null;
    return `<li data-id="${s.id}" class="${armed===s.id?'armed':''}" title="Arrastra al plano o toca y después toca el plano">
      <span class="num">${i+1}</span><span class="nm">${esc(TECHS[s.id])}<small>${esc(PARA[s.id])}</small></span>
      <span class="zt ${z||'none'}">${z?ZONES[z].name:'Sin colocar'}</span>
      <button type="button" class="x" data-rm="${s.id}" aria-label="Quitar ${esc(TECHS[s.id])}">✕</button></li>`;
  }).join('');
}
function zoneCounts(){ const cnt={aula:0,despacho:0,patio:0,cancha:0}; let placed=0;
  state.sel.forEach(s=>{ if(s.placed){ const z=zoneAt(s.x,s.y); if(z){cnt[z]++; placed++;} } }); return {cnt,placed}; }
function zonasCortas(){ const {cnt}=zoneCounts(); return ZONE_ORDER.filter(k=>cnt[k]<MIN_ZONA).map(k=>({k,n:cnt[k]})); }
function renderLegend(){
  const {cnt,placed}=zoneCounts();
  $('#plLegend').innerHTML = ZONE_ORDER.map(k=>`<span class="lg zt ${k}${cnt[k]<MIN_ZONA?' low':''}" title="Mínimo ${MIN_ZONA}">${ZONES[k].name}<b>${cnt[k]}/${MIN_ZONA}</b>${cnt[k]<MIN_ZONA?`<em>falta${MIN_ZONA-cnt[k]>1?'n':''} ${MIN_ZONA-cnt[k]}</em>`:''}</span>`).join('');
  const fichasOk = state.sel.filter(s=>PREGUNTAS.every(p=>hasContent(state.textos[s.id+'_'+p.k]))).length;
  const bloques=[
    ['1 · Elige y coloca', [
      [state.sel.length===MAX && placed===MAX, `10 tecnologías elegidas y colocadas en el plano (${placed}/${MAX})`],
      [ZONE_ORDER.every(k=>cnt[k]>=MIN_ZONA), 'Al menos 2 en cada espacio (obligatorio)']]],
    ['2 · Justifica', [
      [fichasOk===MAX, `Fichas completas (${fichasOk}/${MAX})`],
      [hasContent(state.textos.conclusion), 'Reflexión final escrita']]]
  ];
  $('#plChecks').innerHTML = bloques.map(([t,items])=>`<div class="bloque-chk"><b>${t}</b><ul class="checks">${items.map(([ok,x])=>`<li class="${ok?'ok':''}"><i>${ok?'✓':''}</i>${x}</li>`).join('')}</ul></div>`).join('');
}
function hasContent(html){ if(!html) return false; const d=document.createElement('div'); d.innerHTML=html; return d.textContent.replace(/\s+/g,' ').trim().length>=10 || !!d.querySelector('img'); }
function refreshAll(){ renderBank(); renderTray(); renderPins(); renderLegend(); }

function toggleTech(id){
  const i=selIndex(id);
  if(i>=0){
    const has = PREGUNTAS.some(p=>hasContent(state.textos[id+'_'+p.k]));
    if(has && !confirm('Ya has escrito en la ficha de «'+TECHS[id]+'». Si la quitas, la ficha desaparece del trabajo (el texto se conserva por si la vuelves a elegir). ¿Quitarla?')) return;
    state.sel.splice(i,1); if(armed===id) disarm();
  } else {
    if(state.sel.length>=MAX){ toast('Ya tienes 10. Quita una para elegir otra.'); return; }
    state.sel.push({id, placed:false, x:0, y:0});
  }
  refreshAll(); renderFichas(); dirty();
}

/* Colocar */
let armed=null;
function arm(id){ armed=id; $('#plBanner').hidden=false; $('#plBannerTxt').textContent='Toca el plano para colocar: '+TECHS[id]; $('#plMap').classList.add('placing'); renderTray(); if(innerWidth<940) $('#plMapbox').scrollIntoView({behavior:'smooth',block:'center'}); }
function disarm(){ armed=null; $('#plBanner').hidden=true; $('#plMap')?.classList.remove('placing'); highlightZone(null); renderTray(); }
function place(id,x,y){
  const z=zoneAt(x,y);
  if(!z){ toast('Colócala dentro de uno de los 4 espacios.'); return false; }
  let i=selIndex(id);
  if(i<0){ if(state.sel.length>=MAX){ toast('Ya tienes 10. Quita una para elegir otra.'); return false; } state.sel.push({id,placed:false,x:0,y:0}); i=state.sel.length-1; renderFichas(); }
  Object.assign(state.sel[i],{placed:true,x:Math.round(x*100)/100,y:Math.round(y*100)/100});
  refreshAll(); updateFichaZones(); dirty();
  return true;
}

/* Arrastre unificado (ratón y táctil) desde banco y bandeja */
let drag=null;
function startDrag(e, id, fromTray){
  if(e.button>0) return;
  drag={id, fromTray, sx:e.clientX, sy:e.clientY, moving:false, el:e.currentTarget, pid:e.pointerId};
}
document.addEventListener('pointermove', e=>{
  if(!drag || e.pointerId!==drag.pid) return;
  if(!drag.moving && Math.hypot(e.clientX-drag.sx, e.clientY-drag.sy) > 7){
    drag.moving=true; drag.ghost=document.createElement('div'); drag.ghost.className='plghost'; drag.ghost.textContent=TECHS[drag.id]; document.body.appendChild(drag.ghost);
  }
  if(drag.moving){
    e.preventDefault();
    drag.ghost.style.left=e.clientX+'px'; drag.ghost.style.top=e.clientY+'px';
    if(overMap(e.clientX,e.clientY)){ const w=worldFromClient(e.clientX,e.clientY); highlightZone(zoneAt(w.x,w.y)); } else highlightZone(null);
  }
}, {passive:false});
document.addEventListener('pointerup', e=>{
  if(!drag || e.pointerId!==drag.pid) return;
  const d=drag; drag=null;
  if(d.moving){
    d.ghost.remove(); highlightZone(null);
    if(overMap(e.clientX,e.clientY)){ const w=worldFromClient(e.clientX,e.clientY); if(place(d.id,w.x,w.y)) disarm(); }
  } else {
    if(d.fromTray){ armed===d.id ? disarm() : arm(d.id); }
    else toggleTech(d.id);
  }
});
document.addEventListener('pointercancel', ()=>{ if(drag){ drag.ghost?.remove(); drag=null; highlightZone(null);} });


// ---- plano en PNG y arrastre de chinchetas
function svgToPNG(svgStr, width){
  return new Promise((res,rej)=>{
    const im=new Image();
    im.onload=()=>{ const vb=svgStr.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number); const h=Math.round(width*vb[3]/vb[2]);
      const cv=document.createElement('canvas'); cv.width=width; cv.height=h; const cx=cv.getContext('2d'); cx.fillStyle='#fff'; cx.fillRect(0,0,width,h); cx.drawImage(im,0,0,width,h); res({data:cv.toDataURL('image/png'),w:width,h}); };
    im.onerror=rej;
    im.src='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svgStr);
  });
}
function exportMapSVG(){
  const svg=$('#plMap').cloneNode(true);
  svg.querySelectorAll('.zone').forEach(z=>z.classList.remove('hl'));
  const items=state.sel.map((s,i)=>({...s,n:i+1})).filter(s=>s.placed).sort((a,b)=>(a.x+a.y)-(b.x+b.y));
  svg.querySelector('#plPins').innerHTML=items.map(s=>pinSVG(s,s.n,true)).join('');
  svg.removeAttribute('class');
  return new XMLSerializer().serializeToString(svg);
}

let pinDrag=null;
function onPinDown(e){
  const g=e.target.closest('.pin'); if(!g) return;
  e.preventDefault(); const id=+g.dataset.id; const s=state.sel[selIndex(id)];
  const bp=P(s.x,s.y,0), sv=$("#plMap"), bpt=sv.createSVGPoint(); bpt.x=bp[0]; bpt.y=bp[1]; const bc=bpt.matrixTransform(sv.getScreenCTM());
  pinDrag={id, g, sx:e.clientX, sy:e.clientY, offX:bc.x-e.clientX, offY:bc.y-e.clientY, moved:false};
  g.setPointerCapture(e.pointerId);
  const mv=ev=>{ if(Math.hypot(ev.clientX-pinDrag.sx,ev.clientY-pinDrag.sy)>4) pinDrag.moved=true; if(!pinDrag.moved) return;
    const w=worldFromClient(ev.clientX+pinDrag.offX,ev.clientY+pinDrag.offY); const p=P(w.x,w.y,0); g.setAttribute('transform',`translate(${f1(p[0])},${f1(p[1])})`); highlightZone(zoneAt(w.x,w.y)); pinDrag.w=w; };
  const up=()=>{ g.removeEventListener('pointermove',mv); g.removeEventListener('pointerup',up); g.removeEventListener('pointercancel',up);
    const d=pinDrag; pinDrag=null; highlightZone(null);
    if(!d.moved){ const f=document.querySelector(`.ficha[data-id="${id}"]`); if(f){ f.scrollIntoView({behavior:'smooth',block:'start'}); } return; }
    if(d.w && zoneAt(d.w.x,d.w.y)) place(id,d.w.x,d.w.y); else { toast('Colócala dentro de uno de los 4 espacios.'); renderPins(); } };
  g.addEventListener('pointermove',mv); g.addEventListener('pointerup',up); g.addEventListener('pointercancel',up);
}


// ---- estilos
const PLANO_CSS = "#plSec,.plghost{--bg:#faf8f5; --card:#fff; --ink:#1d1b20; --muted:#6c6672; --line:#e8e3ea; --soft:#f4f1f6;\n  --lav:#ebe6fd; --lav-ink:#5a4ab5;\n  --peach:#fde7da; --peach-ink:#a3542a;\n  --mint:#dcf2e6; --mint-ink:#2e7752;\n  --sky:#dcecfb; --sky-ink:#2b689e;\n  --rose:#fbe3ec; --rose-ink:#a23a63;\n  --butter:#fdf3d0; --butter-ink:#8a6a10;}\n#plSec .work{display:grid;grid-template-columns:minmax(290px,370px) 1fr;gap:18px;align-items:start}\n#plSec .mapcol{position:sticky;top:72px}\n@media (max-width:940px){#plSec .work{grid-template-columns:1fr}\n#plSec .mapcol{position:static}\n}\n#plSec .panel h3{font-size:15px;font-weight:700;display:flex;align-items:center;gap:8px;margin-bottom:8px}\n#plSec .count{font-size:12px;font-weight:700;background:var(--ink);color:#fff;border-radius:999px;padding:2px 8px}\n#plSec .search{width:100%;border:1px solid var(--line);border-radius:10px;padding:8px 12px;margin-bottom:10px;background:#fff}\n#plSec .search:focus{outline:2px solid var(--lav);border-color:var(--lav-ink)}\n#plSec .bank{display:flex;flex-wrap:wrap;gap:6px;max-height:300px;overflow:auto;padding:2px 2px 6px;touch-action:pan-y}\n#plSec .chip{border:1px solid #dcd6df;background:#fff;border-radius:999px;padding:5px 11px;font-size:13px;font-weight:500;display:inline-flex;align-items:center;gap:6px;user-select:none;-webkit-user-select:none;transition:background .15s,border-color .15s,opacity .15s}\n#plSec .chip:hover{border-color:var(--ink)}\n#plSec .chip.on{background:var(--ink);color:#fff;border-color:var(--ink)}\n#plSec .chip.on .n{background:#fff;color:var(--ink)}\n#plSec .chip .n{font-size:11px;font-weight:800;border-radius:999px;min-width:18px;height:18px;display:inline-grid;place-items:center;padding:0 4px}\n#plSec .chip.off{opacity:.4;cursor:not-allowed}\n#plSec .chip[hidden]{display:none}\n#plSec .tray{list-style:none;margin:0;padding:0;display:grid;gap:6px}\n#plSec .tray li{display:flex;align-items:center;gap:8px;border:1px solid var(--line);border-radius:12px;padding:7px 8px;background:#fff;cursor:grab;user-select:none;-webkit-user-select:none;touch-action:none}\n#plSec .tray li.armed{outline:2px solid var(--lav-ink);background:var(--lav)}\n#plSec .tray li .num{width:24px;height:24px;border-radius:50%;background:var(--ink);color:#fff;font-size:12px;font-weight:800;display:grid;place-items:center;flex:none}\n#plSec .tray li .nm{flex:1;font-size:13px;font-weight:600;line-height:1.25;min-width:0}\n#plSec .tray li .nm small{display:block;font-weight:400;font-size:11.5px;color:var(--muted);margin-top:2px}\n#plSec .tray li .x{border:none;background:none;width:26px;height:26px;border-radius:8px;color:var(--muted);flex:none}\n#plSec .tray li .x:hover{background:var(--soft);color:var(--ink)}\n#plSec .tray .empty{font-size:13px;color:var(--muted);border:1px dashed var(--line);border-radius:12px;padding:14px;text-align:center;cursor:default;background:none;touch-action:auto}\n#plSec .zt{font-size:11px;font-weight:700;border-radius:999px;padding:2px 8px;white-space:nowrap}\n#plSec .zt.aula{background:var(--lav);color:var(--lav-ink)}\n#plSec .zt.despacho{background:var(--peach);color:var(--peach-ink)}\n#plSec .zt.patio{background:var(--mint);color:var(--mint-ink)}\n#plSec .zt.cancha{background:var(--sky);color:var(--sky-ink)}\n#plSec .zt.none{background:var(--butter);color:var(--butter-ink)}\n#plSec .hint{font-size:12px;color:var(--muted);margin:8px 0 0}\n#plSec .mapbox{position:relative;background:#fff;border:1px solid var(--line);border-radius:18px;overflow:hidden}\n#plSec .mapbox svg{display:block;width:100%;height:auto;user-select:none;-webkit-user-select:none}\n#plSec .mapbox svg .zone{transition:fill .18s}\n#plSec .mapbox svg .zone.hl[data-zone=aula]{fill:#efeafe}\n#plSec .mapbox svg .zone.hl[data-zone=despacho]{fill:#feeee4}\n#plSec .mapbox svg .zone.hl[data-zone=patio]{fill:#e6f6ed}\n#plSec .mapbox svg .zone.hl[data-zone=cancha]{fill:#e6f1fc}\n#plSec .mapbox svg.placing{cursor:crosshair}\n#plSec .mapbox .scene{pointer-events:none}\n#plSec .pin{cursor:grab;touch-action:none}\n#plSec .pin .plabel{display:none}\n#plSec .pin:hover .plabel,#plSec .pin.act .plabel{display:inline}\n#plSec .pin.act circle.head{fill:#5a4ab5}\n#plSec .banner{position:absolute;left:12px;right:12px;top:12px;background:var(--ink);color:#fff;border-radius:12px;padding:8px 12px;font-size:13px;display:flex;align-items:center;gap:10px}\n#plSec .banner[hidden]{display:none}\n#plSec .banner button{margin-left:auto;background:#fff;color:var(--ink);border:none;border-radius:8px;padding:4px 10px;font-weight:700;font-size:12px}\n#plSec .legend{display:flex;flex-wrap:wrap;gap:8px;margin-top:12px}\n#plSec .legend .lg{display:flex;align-items:center;gap:8px;border-radius:12px;padding:6px 10px;font-size:13px;font-weight:600}\n#plSec .legend .lg.low{outline:2px dashed currentColor;outline-offset:-2px}\n#plSec .legend .lg em{font-style:normal;font-size:11px;font-weight:800;background:#fff;border-radius:999px;padding:1px 7px}\n#plSec .legend .lg b{min-width:30px!important;background:#fff;border-radius:999px;min-width:22px;height:22px;display:grid;place-items:center;font-size:12px}\n#plSec .checks{list-style:none;padding:0;margin:14px 0 0;display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:6px}\n#plSec .checks li{font-size:13px;display:flex;gap:8px;align-items:center;color:var(--muted)}\n#plSec .checks li i{width:18px;height:18px;border-radius:50%;border:1.5px solid #c9c2cd;flex:none;display:grid;place-items:center;font-style:normal;font-size:11px;color:#fff}\n#plSec .checks li.ok{color:var(--ink)}\n#plSec .bloques-chk{display:grid;gap:10px;margin-top:14px}\n#plSec .bloque-chk b{display:block;font-size:13px;margin-bottom:4px}\n#plSec .bloque-chk .checks{margin-top:0}\n#plSec .checks li.ok i{background:var(--mint-ink);border-color:var(--mint-ink)}\n.plghost{position:fixed;z-index:100;pointer-events:none;background:var(--ink);color:#fff;border-radius:999px;padding:6px 12px;font-size:13px;font-weight:600;transform:translate(-50%,-130%);box-shadow:0 8px 24px rgba(0,0,0,.18);white-space:nowrap}\n#plSec .fichas{display:grid;gap:16px}\n#plSec .ficha{border:1px solid var(--line);border-radius:16px;overflow:hidden;background:#fff}\n#plSec .ficha header{display:flex;align-items:center;gap:10px;padding:12px 16px;flex-wrap:wrap}\n#plSec .ficha header .num{width:30px;height:30px;border-radius:50%;background:var(--ink);color:#fff;font-weight:800;display:grid;place-items:center;flex:none}\n#plSec .ficha header h3{font-size:17px;font-weight:700;flex:1;min-width:150px}\n#plSec .ficha.z-aula header{background:var(--lav)}\n#plSec .ficha.z-despacho header{background:var(--peach)}\n#plSec .ficha.z-patio header{background:var(--mint)}\n#plSec .ficha.z-cancha header{background:var(--sky)}\n#plSec .ficha.z-none header{background:var(--soft)}\n#plSec .ficha .body{padding:14px 16px 16px;display:grid;gap:12px}\n#plSec .purpose{background:var(--soft);border-left:4px solid var(--ink);border-radius:8px;padding:10px 12px;font-size:14px}\n#plSec .nofichas{border:1px dashed var(--line);border-radius:16px;padding:26px;text-align:center;color:var(--muted)}\n#plSec .pl-ver{border:1px solid var(--line);background:#fff;border-radius:10px;padding:6px 12px;font-weight:700;font-size:13px;min-height:36px}\n#plSec .pl-tit{margin:1.4rem 0 .4rem}\n#plSec .ficha[hidden],#plSec .nofichas[hidden]{display:none}\n@media (max-width:1023px),(pointer:coarse){#plSec .pl-ver,#plSec .chip,#plSec .tray li .x{min-height:44px;min-width:44px}}\n";

// ---- pegamento con el motor común
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


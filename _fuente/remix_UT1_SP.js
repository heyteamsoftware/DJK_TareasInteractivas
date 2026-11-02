// Saca de UT1_E1, UT1_E2 y UT1_E3 el contenido del remix semipresencial UT1_SP (la mitad de elementos de cada uno).
// Lo usa construir.js en cada construcción: si cambias los ejercicios originales, el remix se actualiza solo.
const fs = require('fs'), path = require('path');
const cargar = n => new Function(fs.readFileSync(path.join(__dirname, n), 'utf8') + '\n;return { COMUN, CICLOS };')();

module.exports = function(){
  const e1 = cargar('UT1_E1.js'), e2 = cargar('UT1_E2.js'), e3 = cargar('UT1_E3.js');
  const P1 = e1.COMUN.p1;
  const D = {
    // E1: 2 de las 4 revoluciones, 1 pregunta del debate (antes 2) y 2 de tu profesión (antes 3)
    p1: {
      intro: 'Busca un ejemplo real en Canarias para la tercera y la cuarta revolución industrial. Para cada una indica el ejemplo, la fecha aproximada, la fuente donde lo has encontrado y, sobre todo, qué cambió en la vida de la gente de las Islas.',
      nota: P1.nota, revs: [P1.revs[2], P1.revs[3]], campos: P1.campos
    },
    p2: {
      intro: e1.COMUN.p2.intro, video: e1.COMUN.p2.video,
      pregunta: '¿Qué elementos definen a la quinta revolución industrial y en qué se diferencia de la cuarta, sobre todo en la relación entre las personas y la tecnología?'
    },
    p3: { preguntas: [e1.COMUN.p3.preguntas[0], e1.COMUN.p3.preguntas[2]], canarias: e1.COMUN.p3.canarias },
    // E2: mismo dispositivo e imágenes; 2 tecnologías (antes 4), 2 actividades (antes 4) y 3 diapositivas (antes 6)
    contexto2: e2.COMUN.contexto, dispositivos: e2.COMUN.dispositivos, bocadillos: e2.COMUN.bocadillos,
    ciclos: {}
  };
  const base = [['IT/OT', 'Information Technology / Operation Technology: tecnología de la información y tecnología de operación'], ['THD', 'Tecnologías habilitadoras digitales'], ['IA', 'Inteligencia artificial']];
  for (const k of ['ei_sp', 'is_sp', 'mc_sp']){
    const c1 = e1.CICLOS[k], c2 = e2.CICLOS[k], c3 = e3.CICLOS[k];
    // E3: 3 productos (antes 5) y 3 preguntas frecuentes (antes 5), una de cada grupo por turnos
    const grupos = c3.f2.grupos.map(g => ({ t: g.t, q: [] })); let n = 0;
    for (let r = 0; n < 3; r++){
      let alguna = false;
      c3.f2.grupos.forEach((g, i) => { if (n < 3 && g.q[r]){ grupos[i].q.push(g.q[r]); n++; alguna = true; } });
      if (!alguna) break;
    }
    const siglas = [...base]; (c3.siglas || []).forEach(s => { if (!siglas.some(x => x[0] === s[0])) siglas.push(s); });
    D.ciclos[k] = {
      nombre: c1.nombre, centro: c1.centro, pistas: c1.pistas, usuario: c2.usuario,
      contexto: c3.contexto, objetivo: c3.objetivo,
      f1: { intro: c3.f1.intro, items: c3.f1.items.slice(0, 3), instr: c3.f1.instr },
      f2: { intro: c3.f2.intro, grupos: grupos.filter(g => g.q.length) },
      siglas
    };
  }
  return D;
};

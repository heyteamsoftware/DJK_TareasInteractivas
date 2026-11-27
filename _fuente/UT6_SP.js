// ===== UT6_SP · Semipresencial y Recuperaciones: de analógico a digital (proyecto de transformación digital) =====
// Nueva versión interactiva del «Plan de Transformación Digital» (Word del curso 2025-26, que se rellenaba a mano y en grupo).
// Es individual y vale por toda la unidad (RA6). 8 fases:
//   1 Tu empresa (ficha + logo)            → campos emp_* y cajas f1_*; logo en JSON «logo» { ic, col }
//   2 El local analógico (plano)           → JSON «local» { it: [{ id, sala, prob }] }
//   3 Organigrama gráfico                  → JSON «org» { p: [{ id, rol, nom, niv, jefe }] }
//   4 ¡Digitalízalo! (antes / después)     → JSON «digi» { idAnalogico: { t: idTecnologia | 'no', amb, res, ries } }
//   5 Tu robot asistente                   → JSON «robot» { tipo, nom, piezas: [], sala }
//   6 Datos y seguridad                    → JSON «datos» { sel: { idDato: { donde, quien } }, planb: [] }
//   7 Presupuesto y hoja de ruta           → JSON «ruta» { idTecnologia | 'robot' | 'formacion': mes }
//   8 El futuro                            → cajas f8_*
// Los contenidos (empresa propuesta por especialidad, bancos, roles, robots, datos, plan B) están en UT6_SP_datos.js.

const COMUN = {
  codigo: 'UT6_SP',
  cronometro: true,   // tiempo de trabajo interno de cada alumno (lo ve solo el profesor)
  corto: 'UT6 · Semipresencial',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT6 · Proyecto de transformación digital',
  ejercicio: 'De analógico a digital: transforma tu empresa',
  ra: 'RA6',
  ce: 'a, b, c, d, e, f, g, h, i, j, k',
  modalidad: 'Individual · semipresencial',
  raTexto: 'Desarrolla un proyecto de transformación digital de una empresa de un sector relacionado con el título, teniendo en cuenta los cambios que se deben producir en función de los objetivos de la empresa.',
  ceTextos: [
    ['a', 'Se han identificado los objetivos estratégicos de la empresa.'],
    ['b', 'Se han identificado y alineado las áreas de producción/negocio y de comunicaciones.'],
    ['c', 'Se han identificado las áreas susceptibles de ser digitalizadas.'],
    ['d', 'Se ha analizado el encaje de AD (áreas digitalizadas) entre sí y con las que no lo están.'],
    ['e', 'Se han tenido en cuenta las necesidades presentes y futuras de la empresa.'],
    ['f', 'Se han relacionado cada una de las áreas con la implantación de las tecnologías.'],
    ['g', 'Se han analizado las posibles brechas de seguridad en cada una de las áreas.'],
    ['h', 'Se ha definido el tratamiento de los datos y su análisis.'],
    ['i', 'Se ha tenido en cuenta la integración entre datos, aplicaciones, plataformas que los soportan, entre otros.'],
    ['j', 'Se han documentado los cambios realizados en función de la estrategia.'],
    ['k', 'Se han tenido en cuenta la idoneidad de los recursos humanos.']
  ],
  objetivo: 'Transformar una empresa de tu sector de analógica a digital, aplicando todo lo que has aprendido en el módulo: montarás su local con la tecnología de siempre, dibujarás su organigrama, sustituirás cada objeto analógico por una tecnología habilitadora, elegirás un robot, protegerás sus datos, harás el presupuesto y la hoja de ruta y mirarás al futuro. Es individual.',
  pasos: [
    'Este ejercicio vale por <b>toda la unidad</b> y tiene <b>8 fases</b>. Hazlas en orden: cada una usa lo que hiciste en la anterior.',
    '<b>Fases 1 a 3:</b> crea tu empresa y su logo, monta su local con tecnología analógica y dibuja su organigrama.',
    '<b>Fases 4 y 5:</b> sustituye cada objeto analógico por una tecnología habilitadora (o decide no hacerlo) y elige el robot que ayudará al equipo.',
    '<b>Fases 6 a 8:</b> protege los datos, haz el presupuesto y la hoja de ruta, y propón las tecnologías del futuro.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Es individual: escribe con tus palabras (pegar texto está desactivado). Sí puedes pegar o subir imágenes.',
    'Piensa como la persona que dirige la empresa: cada tecnología tiene que resolver un problema real, no estar «porque es moderna».',
    'Los precios que verás son orientativos, para practicar el presupuesto. No pongas datos reales de personas: todo es inventado.'
  ],
  criterios: [
    ['Fase 1 · Tu empresa', 'Ficha completa, objetivos estratégicos claros y un día a día analógico bien descrito.', 0.5],
    ['Fase 2 · El local analógico', 'Local con al menos 8 objetos analógicos repartidos por todas las salas y el problema de cada uno bien explicado.', 1],
    ['Fase 3 · Organigrama', 'Organigrama gráfico coherente (dirección, mandos y equipo) adecuado al tipo de empresa.', 1],
    ['Fase 4 · ¡Digitalízalo!', 'Cada objeto sustituido por una tecnología que de verdad resuelve su problema, con su ámbito y su riesgo; algo que no se digitaliza, bien justificado; y cómo encaja todo entre sí.', 2],
    ['Fase 5 · Tu robot asistente', 'Robot adecuado al trabajo, con capacidades que tienen sentido, tareas concretas y lo que debe seguir haciendo una persona.', 1],
    ['Fase 6 · Datos y seguridad', 'Datos personales bien tratados (dónde y quién), brechas de seguridad por zonas, plan B y cumplimiento del RGPD.', 1.5],
    ['Fase 7 · Presupuesto y hoja de ruta', 'Hoja de ruta ordenada con sentido, formación del personal y conclusión económica razonada.', 1],
    ['Fase 8 · El futuro', 'Una tecnología emergente real y otra inventada bien descritas, reflexión final y autoevaluación propias.', 1],
    ['Presentación y fuentes', 'Trabajo ordenado y sin errores; fuentes citadas y uso de IA declarado.', 1]
  ],
  numFuentes: '9',
  fuentes: 'Cita las fuentes que hayas consultado (por ejemplo, la web de una tecnología o de una empresa real del sector) y declara si has usado inteligencia artificial: cuál, para qué y cómo has comprobado lo que te dijo.',
  siglas: [
    ['ERP', 'Enterprise Resource Planning: programa de gestión de los recursos de la empresa'],
    ['CRM', 'Customer Relationship Management: programa de gestión de la relación con clientes o personas usuarias'],
    ['IoT', 'Internet of Things: internet de las cosas'],
    ['RGPD', 'Reglamento General de Protección de Datos'],
    ['IA', 'Inteligencia artificial'],
    ['GNSS', 'Global Navigation Satellite System: sistemas de navegación por satélite (GPS, Galileo…)']
  ]
};

/*__INCLUYE:UT6_SP_datos__*/

// ===== Ciclos: semipresenciales y Recuperaciones (individual) =====
const ORDEN = ['ei_sp', 'is_sp', 'mc_sp', 'rec_ce', 'rec_is'];
const CICLOS = {
  ei_sp: Object.assign({ nombre: 'Educación Infantil Semipresencial', esp: 'ei' }, ESPECIALIDAD.ei),
  is_sp: Object.assign({ nombre: 'Integración Social Semipresencial', esp: 'is' }, ESPECIALIDAD.is),
  mc_sp: Object.assign({ nombre: 'Mediación Comunicativa Semipresencial', esp: 'mc' }, ESPECIALIDAD.mc),
  rec_ce: Object.assign({ nombre: 'Recuperación Coordinación de Emergencias y Protección Civil', esp: 'ce' }, ESPECIALIDAD.ce),
  rec_is: Object.assign({ nombre: 'Recuperación Integración Social', esp: 'is' }, ESPECIALIDAD.is)
};
for (const k of ORDEN){
  const C = CICLOS[k]; C.semipresencial = true;
  C.analogBank = [...ANALOG_COMUN, ...C.analog];
  C.digitalBank = [...DIGITAL_COMUN, ...C.digital];
}

/*__INCLUYE:UT6_SP_interactivo__*/

/*__INCLUYE:UT6_SP_pdf__*/

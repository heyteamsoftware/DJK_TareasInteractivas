// ===== UT1_E3 · Sistemas ciberfísicos y digitalización del sector =====
const COMUN = {
  codigo: 'UT1_E3',
  corto: 'UT1 · E3',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT1 · Digitalización de los sectores productivos',
  ejercicio: 'E3 · Sistemas ciberfísicos y digitalización del sector',
  ra: 'RA1',
  ce: 'c, d, e, f',
  raTexto: 'Analiza el concepto de digitalización y su repercusión en los sectores productivos teniendo en cuenta la actividad de la empresa e identificando entornos IT (Information Technology: tecnología de la información) y OT (Operation Technology: tecnología de operación) característicos.',
  ceTextos: [
    ['c', 'Se han establecido las diferencias y similitudes entre los entornos IT y OT.'],
    ['d', 'Se han identificado los departamentos típicos de las empresas que pueden constituir entornos IT.'],
    ['e', 'Se han seleccionado las tecnologías típicas de la digitalización en planta y en negocio.'],
    ['f', 'Se ha analizado la importancia de la conexión entre entornos IT y OT.']
  ],
  pasos: [
    'Lee el contexto, el objetivo y la tabla «Cómo se califica».',
    '<b>Fase 1:</b> busca un producto real para cada tipo de sistema: nombre y marca, enlace o captura, por qué lo eliges y cómo se usaría en el día a día del centro.',
    '<b>Fase 2:</b> responde a las <b>5 preguntas</b> como si te las hiciera una familia o un usuario del centro: con claridad, sin tecnicismos y de forma tranquilizadora.',
    'Cita tus fuentes y declara si has usado inteligencia artificial.',
    'Revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Escribe con tus palabras: pegar texto está desactivado. Sí puedes pegar, arrastrar o subir imágenes (por ejemplo, capturas de los productos).',
    'Los productos tienen que ser reales y existir hoy: indica marca y enlace.',
    'El trabajo se guarda solo en este navegador. Si cambias de ordenador, no estará: descarga el PDF.'
  ],
  numFuentes: '3',
  fuentes: 'Cita todas las fuentes consultadas (webs de los productos, normativa, artículos…) y declara si has usado herramientas de IA: cuál, para qué y cómo has verificado su contenido.',
  criterios: [
    ['Fase 1 · Productos reales', 'Un producto real para cada tipo de sistema, con nombre y marca, enlace o captura, justificación y aplicación en el día a día del centro (1 punto por producto).', 5],
    ['Fase 2 · Preguntas frecuentes (FAQ)', 'Respuestas claras, correctas y adaptadas a las familias o usuarios, sin tecnicismos innecesarios (1 punto por pregunta).', 5]
  ]
};

const CICLOS = {
  af: {
    nombre: 'Acondicionamiento Físico',
    contexto: 'El sector del acondicionamiento físico y la salud está experimentando una transformación digital: wearables que miden la frecuencia cardiaca y la carga de entrenamiento, plataformas con sensores de fuerza y potencia, sistemas de realidad virtual para entrenamiento y rehabilitación, y aplicaciones de seguimiento de la actividad. Estas herramientas permiten personalizar el entrenamiento y medir resultados, pero plantean retos de fiabilidad de los datos, de privacidad de la información de salud y de obsesión por las métricas.',
    objetivo: 'Vamos a incorporar en nuestro «Centro de Acondicionamiento Físico y Salud» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista del rendimiento, la seguridad del usuario, la organización del centro y la ética profesional.',
    f1: {
      intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en el centro:',
      items: [
        'Wearables de monitorización de frecuencia cardiaca y zonas de entrenamiento',
        'Máquinas o plataformas con sensores de fuerza y potencia',
        'Sistemas de realidad virtual para entrenamiento y rehabilitación',
        'Aplicaciones de control de carga y planificación del entrenamiento',
        'Otros (de tu elección)'
      ],
      instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en el acondicionamiento físico (beneficios para el usuario y para el profesional) y explica cómo se aplicarían en el día a día del centro.'
    },
    f2: {
      intro: 'Redacta un documento de «Preguntas Frecuentes» dirigido a los usuarios del centro y, cuando sean menores o necesiten apoyo, a sus familiares o tutores, donde des una respuesta argumentada, profesional y tranquilizadora a estas objeciones:',
      grupos: [
        { t: 'Sobre los wearables y la monitorización', q: [
          { p: '¿Un reloj que mide mis pulsaciones puede sustituir el criterio del entrenador personal?', ej: '«Toda la información se dará de persona a persona, complementada con los datos de los wearables».' },
          { p: '¿Son fiables las mediciones de estos dispositivos? ¿Qué margen de error tienen?' },
          { p: 'Si una persona tiene hipertensión o una cardiopatía, ¿es seguro entrenar guiada por un dispositivo sin supervisión?' }
        ]},
        { t: 'Sobre las métricas y el bienestar', q: [
          { p: '¿Ver constantemente datos de rendimiento no puede generar obsesión por el resultado o problemas de imagen corporal?' },
          { p: 'Una persona que empieza desde cero o una persona mayor, ¿no se va a frustrar al compararse con las cifras de otros usuarios?' }
        ]},
        { t: 'Sobre los datos y la privacidad', q: [
          { p: '¿Quién puede acceder a mis datos de salud (pulsaciones, peso, lesiones)? ¿Se venden a empresas o aseguradoras?' },
          { p: 'Si cambio de centro o dejo de entrenar, ¿qué pasa con todo el historial de datos?' },
          { p: '¿Por qué el centro necesita saber mi peso o mi estado de salud para ofrecerme un entrenamiento?' }
        ]}
      ]
    },
    f3: {
      intro: 'Un uso mal planteado de la tecnología puede generar dependencia de las métricas, lesiones por sobrecarga o abandono del entrenamiento. Para el centro se han seleccionado tres tecnologías. Cada una se asocia a un usuario concreto:',
      tecs: [
        ['Wearable de frecuencia cardiaca con zonas de entrenamiento', 'Ramón, 71 años. Hipertenso y medicado; quiere mantenerse activo sin riesgo.'],
        ['Máquina de fuerza con sensores de potencia', 'Carlos, 17 años. Deportista de competición que quiere mejorar su rendimiento y tiene tendencia a sobreentrenar.'],
        ['Sistema de realidad virtual para rehabilitación', 'Laura, 34 años. En recuperación de una lesión de ligamento cruzado anterior (LCA) y con miedo a volver a entrenar.']
      ],
      instr: 'Redacta un protocolo de presentación para cada una. Cada protocolo debe incluir:',
      nota: 'En todos los casos debes respetar la dignidad y la autonomía del usuario. Los datos de salud son una categoría especial (RGPD, art. 9), por lo que el protocolo debe incluir la base legal del tratamiento y la minimización de datos. Cuando haya una patología, el protocolo debe contemplar la derivación a un profesional sanitario: la tecnología no sustituye su criterio.'
    },
    siglas: [['FC','Frecuencia cardiaca'],['IoT','Internet de las cosas (Internet of Things)'],['LCA','Ligamento cruzado anterior'],['RGPD','Reglamento General de Protección de Datos'],['LOPDGDD','Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales']]
  },

  as: {
    nombre: 'Animación Sociodeportiva',
    contexto: 'El sector de la animación sociodeportiva (actividades deportivas y recreativas en el tiempo libre, campamentos, rutas, programas para personas mayores y colectivos vulnerables) está experimentando una transformación digital: geolocalización de actividades en el medio natural, sistemas de control de acceso y asistencia, plataformas de inscripciones y comunicación con las familias, y juegos interactivos con sensores de movimiento. Estas herramientas mejoran la seguridad y la organización, pero plantean retos de privacidad de los participantes, de pérdida del juego espontáneo y del contacto humano, y de exclusión por rendimiento.',
    objetivo: 'Vamos a incorporar en nuestro «Programa de Animación Sociodeportiva Digitalizado» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista deportivo y recreativo, organizativo, de seguridad y de protección de los participantes.',
    f1: {
      intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en el programa:',
      items: [
        'Sistemas de geolocalización para actividades en el medio natural',
        'Pulseras o tarjetas RFID de control de asistencia y acceso',
        'Plataformas de gestión de inscripciones y comunicación con las familias',
        'Juegos interactivos con sensores de movimiento para la dinamización de grupos',
        'Otros (de tu elección)'
      ],
      instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en la animación sociodeportiva (beneficios para los participantes y para el equipo de animación) y explica cómo se aplicarían en el día a día del programa.'
    },
    f2: {
      intro: 'Redacta un documento de «Preguntas Frecuentes» dirigido a las familias de los participantes y a los participantes adultos, donde des una respuesta argumentada, profesional y tranquilizadora a estas objeciones:',
      grupos: [
        { t: 'Sobre la geolocalización y los controles', q: [
          { p: '¿Quién más, aparte del personal del programa, puede ver la ubicación de mi hijo durante una excursión y cuánto tiempo se guarda?', ej: '«La ubicación solo podrán verla los tutores legales y la persona encargada de la actividad».' },
          { p: '¿Llevar una pulsera de control no supone una vigilancia excesiva que limita la libertad del menor?' },
          { p: 'Una persona mayor que sale a pasear con el grupo, ¿no se siente controlada si se la localiza?' }
        ]},
        { t: 'Sobre el juego y las relaciones', q: [
          { p: '¿Los juegos con sensores y pantallas van a sustituir el juego libre y el contacto entre los participantes?' },
          { p: '¿Los rankings y los datos de rendimiento no generan exclusión en los participantes con menos destreza?' }
        ]},
        { t: 'Sobre las imágenes y los datos', q: [
          { p: '¿Las cámaras o los sensores graban a los participantes? ¿Qué pasa con esas imágenes?' },
          { p: '¿Por qué el programa necesita tantos datos personales para inscribir a un participante? (RGPD, minimización de datos)' },
          { p: 'Si recibo mensajes automáticos de la plataforma, ¿se pierde la comunicación directa con el monitor?' }
        ]}
      ]
    },
    f3: {
      intro: 'Un uso mal planteado de la tecnología puede generar pasividad, exclusión o una vigilancia excesiva de los participantes. Para el programa se han seleccionado tres tecnologías. Cada una se asocia a un participante concreto:',
      tecs: [
        ['Sistema de geolocalización para rutas en el medio natural', 'Iker, 16 años. Participa en una ruta de montaña de dos días; su familia quiere saber dónde está en todo momento.'],
        ['Juego interactivo con sensores de movimiento', 'Ana, 80 años. Usuaria de un centro de día con movilidad reducida; participa en sesiones de dinamización grupal.'],
        ['Pulsera RFID de control de asistencia y acceso', 'Pablo, 9 años. Participa en un campamento urbano; el equipo necesita registrar su asistencia diaria y quién lo recoge.']
      ],
      instr: 'Redacta un protocolo de presentación para cada una. Cada protocolo debe incluir:',
      nota: 'En todos los casos debes respetar la dignidad y la intimidad del participante. En el caso de los menores, el consentimiento corresponde a los tutores legales, pero debes contar también con la opinión del niño.'
    },
    siglas: [['GPS','Sistema de posicionamiento global (Global Positioning System)'],['IoT','Internet de las cosas (Internet of Things)'],['RFID','Identificación por radiofrecuencia (Radio-Frequency Identification)'],['RGPD','Reglamento General de Protección de Datos'],['LOPDGDD','Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales']]
  },

  ei: {
    nombre: 'Educación Infantil',
    contexto: 'El sector de la educación infantil (0-6 años) está experimentando una transformación digital. Los sistemas ciberfísicos (dispositivos físicos conectados y controlados por sistemas digitales, como el Internet de las cosas o los juguetes inteligentes) y las herramientas de gestión digital ofrecen nuevas oportunidades, pero también grandes retos pedagógicos, éticos y de seguridad.',
    objetivo: 'Vamos a insertar en nuestra «Aula de Educación Infantil Digitalizada» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista pedagógico, organizativo y de seguridad.',
    f1: {
      intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en un aula de 0 a 6 años:',
      items: [
        'Juego con robótica educativa',
        'Sistemas de ubicación para padres',
        'Mejora lectoescritora',
        'Seguimiento de funciones vitales',
        'Otro de tu elección'
      ],
      instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en la educación infantil (beneficios para el usuario) y explica cómo se aplicarían en el día a día del centro.'
    },
    f2: {
      intro: 'Redacta un documento de «Preguntas Frecuentes» (FAQ) dirigido a los padres y madres de tu escuela, donde des una respuesta argumentada y tranquilizadora a estas objeciones:',
      grupos: [
        { t: 'Sobre la robótica educativa', q: [
          { p: '¿Estos juguetes robóticos van a sustituir el juego libre, la manipulación de materiales naturales y la interacción con otros niños?', ej: '«No, estos juguetes estarán limitados a un uso máximo diario de 45 minutos».' },
          { p: '¿No son demasiado pequeños para aprender «tecnología» a estas edades en lugar de desarrollar sus habilidades motrices y sociales?' }
        ]},
        { t: 'Sobre los sistemas de ubicación para padres', q: [
          { p: '¿Quién más, aparte del centro y de mí, puede tener acceso a la ubicación en tiempo real de mi hijo y cómo se protege esa información?' },
          { p: '¿Llevar un dispositivo de rastreo no genera un entorno de «hipervigilancia» que afecta a la autonomía y al desarrollo de la confianza del niño?' }
        ]},
        { t: 'Sobre las herramientas de mejora lectoescritora', q: [
          { p: '¿El uso de estas herramientas digitales significa que mi hijo va a pasar tiempo frente a una pantalla pasiva en lugar de usar cuentos y ceras de colores?' },
          { p: '¿Por qué usar un sistema digital para enseñar a leer o escribir si el método tradicional en papel ha funcionado siempre?' }
        ]},
        { t: 'Sobre el seguimiento de funciones vitales', q: [
          { p: '¿Es seguro que un niño tan pequeño lleve puesto un sensor o pulsera inteligente todo el día? ¿Emite algún tipo de radiación o puede causar alergias?' },
          { p: 'Si la educadora confía en una máquina para saber si mi hijo tiene fiebre o respira bien, ¿no perderá el contacto humano y la atención directa sobre él?' }
        ]},
        { t: 'Transversales (gestión y privacidad global)', q: [
          { p: '¿Qué ocurre con todo el historial de datos (ubicación, constantes vitales, progresos lectoescritores) cuando mi hijo termine su etapa en la escuela infantil?' },
          { p: 'Si recibo notificaciones automáticas en mi móvil sobre la ubicación, salud y aprendizajes de mi hijo, ¿se eliminará el trato directo y la charla diaria con la tutora a la salida?' }
        ]}
      ]
    },
    f3: {
      intro: 'Las recomendaciones sobre pantallas en la primera infancia limitan drásticamente la exposición pasiva, y los niños de 0 a 6 años no pueden dar un consentimiento informado. Por eso, cualquier tecnología que se introduzca en el aula debe presentarse primero a las familias, con un uso limitado, con un adulto presente y con una finalidad educativa clara. El centro ha decidido implantar estas tres tecnologías:',
      tecs: [
        ['Robot educativo de suelo', ''],
        ['Tablet con app de lectoescritura', ''],
        ['Pulsera con localización GPS para salidas', '']
      ],
      instr: 'Redacta un protocolo de presentación para cada una. Cada protocolo debe incluir:',
      puntos: [
        ['Qué se hace', 'cómo se presenta a las familias y cómo se integra en la actividad.'],
        ['Quién lo hace y cuándo', 'el profesional responsable y el momento de la presentación.'],
        ['Cómo se comprueba', 'que la familia ha entendido la tecnología y ha dado su consentimiento.']
      ],
      nota: ''
    },
    siglas: [['GPS','Sistema de posicionamiento global (Global Positioning System)'],['IoT','Internet de las cosas (Internet of Things)'],['RGPD','Reglamento General de Protección de Datos'],['LOPDGDD','Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales']]
  },

  hb: {
    nombre: 'Higiene Bucodental',
    contexto: 'El sector sanitario bucodental está experimentando una transformación digital: escáneres intraorales que sustituyen a las improntas tradicionales, radiografía digital, historias clínicas electrónicas, cepillos y sensores que registran la higiene oral y sistemas de diseño y fabricación asistidos por ordenador (CAD/CAM). Estas herramientas ofrecen más precisión y comodidad, pero plantean retos éticos, de privacidad de los datos de salud y de accesibilidad para pacientes con discapacidad, ansiedad dental o dependencia.',
    objetivo: 'Vamos a incorporar en nuestra «Clínica de Higiene Bucodental Digitalizada» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista clínico, organizativo, de seguridad y de protección de datos.',
    f1: {
      intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en la clínica:',
      items: [
        'Escaneado intraoral 3D',
        'Radiografía digital y sensores de imagen',
        'Cepillos o sensores de higiene con seguimiento de placa',
        'Software de historia clínica electrónica y gestión de citas con recordatorios',
        'Otro (de tu elección)'
      ],
      instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en la higiene bucodental (beneficios para el paciente y para el profesional) y explica cómo se aplicarían en el día a día de la clínica.'
    },
    f2: {
      intro: 'Redacta un documento de «Preguntas Frecuentes» dirigido a los pacientes y a sus familiares o tutores legales, donde des una respuesta argumentada, profesional y tranquilizadora a estas objeciones:',
      grupos: [
        { t: 'Sobre el escáner intraoral y la radiografía digital', q: [
          { p: '¿Estos aparatos van a sustituir el trato personal y la explicación del higienista o del odontólogo?', ej: '«Las explicaciones siempre serán de persona a persona, complementadas con historiales y radiografías físicas».' },
          { p: '¿Las radiografías digitales emiten radiación? ¿Son seguras para niños y para mujeres embarazadas?' },
          { p: 'Mi hijo tiene mucha ansiedad dental. ¿No le va a generar más miedo una cámara dentro de la boca?' }
        ]},
        { t: 'Sobre el software y los datos de salud', q: [
          { p: '¿Quién puede acceder a mi historia clínica digital y cómo se protegen mis datos de salud?' },
          { p: 'Si la clínica guarda mis datos en la nube, ¿qué pasa con ellos cuando cambio de centro o dejo de ser paciente?' },
          { p: 'Si recibo recordatorios automáticos en el móvil, ¿se pierde el trato directo con el equipo de la clínica?' }
        ]},
        { t: 'Sobre los cepillos y sensores de higiene', q: [
          { p: '¿Un cepillo que mide mi higiene no es una forma de control que vulnera mi intimidad y mi autonomía?' },
          { p: 'Una persona con discapacidad intelectual o con hipersensibilidad oral, ¿puede usar un sensor en la boca sin rechazo ni incomodidad?' },
          { p: '¿Las aplicaciones que puntúan mi higiene no generan culpa o frustración si no consigo buenos resultados?' }
        ]}
      ]
    },
    f3: {
      intro: 'El uso de tecnología con pacientes vulnerables (personas con discapacidad, dependencia, ansiedad dental o menores) puede generar miedo, infantilizar al paciente o reducir su participación en su propia salud. Para la clínica se han seleccionado tres tecnologías. Cada una se asocia a un paciente concreto:',
      tecs: [
        ['Escáner intraoral 3D', 'Lucía, 9 años. Tiene una ansiedad dental alta y se bloquea con las improntas tradicionales.'],
        ['Cepillo con sensor de presión y seguimiento de placa', 'Sr. Manuel, 78 años. Deterioro cognitivo leve; olvida si se ha cepillado y tiene encías sensibles.'],
        ['Software de historia clínica electrónica con acceso del paciente', 'Marta, 41 años. Quiere consultar su historial y recibir recordatorios, pero no quiere que sus datos se compartan con terceros.']
      ],
      instr: 'Redacta un protocolo de presentación para cada una. Cada protocolo debe incluir:',
      nota: 'En todos los casos debes respetar la dignidad y la autonomía del paciente. En el caso de los menores, el consentimiento corresponde a los tutores legales, pero debes contar también con la opinión del niño. Referencias a considerar: Ley 41/2002 (autonomía del paciente), Ley 8/2021 (apoyo a la capacidad jurídica), RGPD y LOPDGDD.'
    },
    siglas: [['CAD/CAM','Diseño y fabricación asistidos por ordenador'],['HCE','Historia clínica electrónica'],['IoT','Internet de las cosas (Internet of Things)'],['RGPD','Reglamento General de Protección de Datos'],['LOPDGDD','Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales']]
  },

  is: {
    nombre: 'Integración Social',
    contexto: 'El sector de los servicios sociales y la atención a la dependencia está experimentando una profunda transformación digital. Los sistemas ciberfísicos (dispositivos físicos conectados y controlados digitalmente, como la teleasistencia avanzada, los wearables de salud o la robótica social) y las herramientas de gestión digital ofrecen nuevas oportunidades para fomentar la autonomía personal. Sin embargo, también plantean grandes retos éticos, de privacidad, de prevención de la brecha digital y de mantenimiento del vínculo humano.',
    objetivo: 'Vamos a insertar en nuestro «Centro de Día y Atención a la Diversidad Funcional» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista integrador, terapéutico, organizativo y de seguridad ética.',
    f1: {
      intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en el centro (orientados a personas mayores, con deterioro cognitivo o con diversidad funcional):',
      items: [
        'Robótica social / terapéutica',
        'Sistemas de geolocalización para prevención del errabundeo',
        'Sistemas de comunicación aumentativa o de estimulación cognitiva',
        'Seguimiento de constantes vitales y detección de caídas',
        'Otro de tu elección'
      ],
      instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en la intervención social (beneficios para el usuario) y explica cómo se aplicarían en el día a día del centro.'
    },
    f2: {
      intro: 'Redacta un documento de «Preguntas Frecuentes» dirigido a los familiares, tutores legales y a los propios usuarios del centro, donde des una respuesta argumentada, profesional y tranquilizadora a estas objeciones:',
      grupos: [
        { t: 'Sobre la robótica social / terapéutica', q: [
          { p: '¿Estos robots van a sustituir el trato humano, el afecto real y las terapias tradicionales con los profesionales del centro?', ej: '«Estos robots se usarán para tareas específicas como, por ejemplo, mover una silla de ruedas hasta el comedor o buscar objetos perdidos en una habitación».' },
          { p: 'A su edad o con su discapacidad, ¿no les va a generar frustración intentar interactuar con «tecnología moderna» en lugar de hacer actividades más sencillas y conocidas?' }
        ]},
        { t: 'Sobre la geolocalización', q: [
          { p: '¿Quién más, aparte del centro y de la familia, puede tener acceso a la ubicación en tiempo real de mi familiar y cómo se protege esa información tan sensible?' },
          { p: '¿Llevar un dispositivo de rastreo no atenta contra su dignidad, generando un entorno de «hipervigilancia» que limita su derecho a la intimidad y la autonomía?' }
        ]},
        { t: 'Sobre la comunicación aumentativa y la estimulación cognitiva', q: [
          { p: '¿El uso de pantallas y tablets significa que el usuario va a estar aislado frente a una máquina en lugar de interactuar con sus compañeros?' },
          { p: '¿Por qué usar sistemas digitales (como comunicadores dinámicos o apps) si los métodos tradicionales (fichas de papel, pictogramas impresos) siempre han funcionado?' }
        ]},
        { t: 'Sobre las constantes vitales y la detección de caídas', q: [
          { p: '¿Es cómodo y seguro que una persona con piel sensible o problemas de conducta lleve puesto un sensor todo el día? ¿Emite radiación o puede causar rechazo?' },
          { p: 'Si el integrador social confía en una máquina para saber si el usuario se ha caído o tiene un problema de salud, ¿no se perderá la supervisión directa y la atención centrada en la persona?' }
        ]},
        { t: 'Transversales (gestión y privacidad global)', q: [
          { p: '¿Qué ocurre con todo el historial de datos (ubicación, constantes vitales, progresos cognitivos) cuando el usuario deje de asistir a este centro?' },
          { p: 'Si recibo notificaciones automáticas en mi móvil sobre el estado y las actividades de mi familiar, ¿se eliminará el trato directo y la charla diaria con el equipo de integración social a la salida del centro?' }
        ]}
      ]
    },
    f3: {
      intro: 'Para que una persona mayor, con deterioro cognitivo o con diversidad funcional use una tecnología con autonomía, primero tiene que entender qué es, para qué sirve y qué puede decidir sobre ella. Si se explica mal, el riesgo es doble: que la persona la use de forma pasiva o que se la trate como a un niño. Para estas tres propuestas:',
      tecs: [
        ['Robot terapéutico de compañía', ''],
        ['Reloj localizador GPS con botón SOS y zonas seguras', ''],
        ['Comunicador dinámico en una tablet con pictogramas', '']
      ],
      instr: 'Redacta un protocolo de 3 puntos para presentar tu propuesta tecnológica a los usuarios del centro. Cada punto debe incluir:',
      puntos: [
        ['Qué se hace', 'cómo se le explica.'],
        ['Quién lo hace y cuándo', 'el profesional responsable y el momento.'],
        ['Cómo se comprueba', 'que lo ha entendido y cómo expresa su consentimiento.']
      ],
      nota: ''
    },
    siglas: [['GPS','Sistema de posicionamiento global (Global Positioning System)'],['IoT','Internet de las cosas (Internet of Things)'],['SOS','Señal internacional de petición de auxilio'],['RGPD','Reglamento General de Protección de Datos'],['LOPDGDD','Ley Orgánica de Protección de Datos Personales y garantía de los derechos digitales']]
  }
};

// Ciclos semipresenciales: IS y EI reutilizan el contenido del presencial; MC tiene contenido propio
CICLOS.ei_sp = Object.assign(structuredClone(CICLOS.ei), { nombre: 'Educación Infantil Semipresencial', semipresencial: true });
CICLOS.is_sp = Object.assign(structuredClone(CICLOS.is), { nombre: 'Integración Social Semipresencial', semipresencial: true });
CICLOS.mc_sp = {
  nombre: 'Mediación Comunicativa Semipresencial', semipresencial: true,
  contexto: 'La mediación comunicativa está viviendo una transformación digital. Los sistemas ciberfísicos (dispositivos físicos conectados y controlados digitalmente, como los bucles magnéticos conectados a audífonos e implantes, los avisadores luminosos o las gafas con subtítulos) y las herramientas digitales (videointerpretación en lengua de signos, transcripción automática del habla, comunicadores) abren nuevas vías para que las personas sordas, sordociegas o con dificultades de comunicación participen en igualdad. También plantean retos de accesibilidad real, privacidad, dependencia de la conexión y mantenimiento del papel del profesional.',
  objetivo: 'Vamos a incorporar en nuestro «Servicio de Mediación Comunicativa» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista de la accesibilidad, la autonomía de la persona usuaria, la organización del servicio y la ética profesional.',
  f1: {
    intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en el servicio (orientados a personas sordas, sordociegas o con dificultades de comunicación):',
    items: [
      'Sistemas de videointerpretación y mediación a distancia en lengua de signos',
      'Subtitulado y transcripción automática del habla en tiempo real',
      'Bucles magnéticos o sistemas de FM conectados a audífonos e implantes cocleares',
      'Avisadores luminosos y vibratorios (timbre, alarmas, llamadas)',
      'Otro de tu elección'
    ],
    instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en la mediación comunicativa (beneficios para la persona usuaria) y explica cómo se aplicarían en el día a día del servicio.'
  },
  f2: {
    intro: 'Redacta un documento de «Preguntas Frecuentes» dirigido a las personas usuarias del servicio, a sus familias y a los profesionales con los que se coordina, donde des una respuesta argumentada, profesional y tranquilizadora a estas objeciones:',
    grupos: [
      { t: 'Sobre la videointerpretación a distancia', q: [
        { p: 'Si la interpretación se hace por videollamada, ¿no se pierde la cercanía y la calidad de tener al intérprete o mediador presente en la consulta o en la reunión?', ej: '«La videointerpretación se usará para gestiones breves o urgentes; las situaciones importantes seguirán teniendo un profesional presente».' },
        { p: '¿Qué pasa con la confidencialidad de lo que cuento en una videollamada con un intérprete? ¿Se graba o puede verlo alguien más?' }
      ]},
      { t: 'Sobre el subtitulado y la transcripción automática', q: [
        { p: 'Los subtítulos automáticos se equivocan a menudo. ¿No es peligroso fiarse de ellos en una cita médica o en una gestión importante?' },
        { p: 'Si ya hay subtítulos automáticos, ¿para qué hace falta un mediador comunicativo o un intérprete de lengua de signos?' }
      ]},
      { t: 'Sobre los bucles magnéticos y los sistemas de FM', q: [
        { p: '¿Funcionan con cualquier audífono o implante? ¿Qué tengo que hacer para conectarme y quién me lo explica?' },
        { p: 'Si el bucle falla en mitad de una charla o de una clase, ¿me quedo sin enterarme de nada?' }
      ]},
      { t: 'Sobre los avisadores luminosos y vibratorios', q: [
        { p: '¿No es invasivo tener luces y vibraciones avisando de todo en casa o en el centro? ¿Se pueden ajustar a lo que yo necesito?' },
        { p: 'Si un avisador se queda sin batería o pierde la conexión, ¿cómo me entero de una alarma de incendio o de una llamada importante?' }
      ]},
      { t: 'Transversales (accesibilidad, datos y autonomía)', q: [
        { p: '¿Quién guarda las transcripciones, las grabaciones y los datos de uso de estos sistemas, y durante cuánto tiempo?' },
        { p: 'Con tanta tecnología, ¿no se dejará de enseñar y de respetar la lengua de signos y la comunicación directa con la persona?' }
      ]}
    ]
  },
  siglas: [['LSE','Lengua de signos española'],['SAAC','Sistemas aumentativos y alternativos de comunicación'],['FM','Frecuencia modulada (sistema de transmisión de sonido a audífonos e implantes)'],['IA','Inteligencia artificial'],['RGPD','Reglamento General de Protección de Datos']]
};
// Los semipresenciales hacen el remix UT1_SP; siguen en CICLOS para poder abrir borradores antiguos
const ORDEN = ['af','as','ei','hb','is'];

// Fase 2: como máximo 5 preguntas por ciclo, cogiendo una de cada grupo por turnos
const MAX_FAQ = 5;
for (const k of Object.keys(CICLOS)){
  const gs = CICLOS[k].f2.grupos, sel = gs.map(() => []);
  let n = 0;
  for (let r = 0; n < MAX_FAQ; r++){
    let alguna = false;
    gs.forEach((g, i) => { if (n < MAX_FAQ && g.q[r]){ sel[i].push(g.q[r]); n++; alguna = true; } });
    if (!alguna) break;
  }
  gs.forEach((g, i) => { g.q = sel[i]; });
  CICLOS[k].f2.grupos = gs.filter(g => g.q.length);
  delete CICLOS[k].f3;
}
const faqDe = C => C.f2.grupos.flatMap(g => g.q);

function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Contexto</h2><p>${esc(C.contexto)}</p><h2 style="font-size:1.1rem">Objetivo principal</h2><p>${esc(C.objetivo)}</p>`;
}

function construirTarea(C){
  let h = `<section class="fase f1"><header><h2>Fase 1 · Productos reales</h2></header><div class="cuerpo"><p><b>${esc(C.f1.intro)}</b></p><div class="instr"><b>Instrucciones:</b> ${esc(C.f1.instr)}</div>`;
  C.f1.items.forEach((t, i) => { h += caja(`f1_${i}`, `1.${i+1}`, esc(t), `<div class="pista">Producto (nombre y marca), enlace o captura, justificación y aplicación en el día a día.</div>`); });
  h += `</div></section>`;
  h += `<section class="fase f2"><header><h2>Fase 2 · Preguntas frecuentes (FAQ)</h2></header><div class="cuerpo"><div class="instr">${esc(C.f2.intro)}</div>`;
  let n = 0;
  C.f2.grupos.forEach(g => {
    h += `<h3 class="grupo">${esc(g.t)}</h3>`;
    g.q.forEach(q => { n++; h += caja(`f2_${n-1}`, `2.${n}`, esc(q.p), q.ej ? `<div class="ejemplo"><b>Ejemplo de respuesta:</b> ${esc(q.ej)}</div>` : ''); });
  });
  h += `</div></section>`;
  return h;
}

async function pdfTarea(api, C){
  const { banda, P, caja, sitio, COL } = api;
  banda('Fase 1 · Productos reales', [223,243,234], COL.mint);
  P(C.f1.instr, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  for (let i = 0; i < C.f1.items.length; i++) await caja(`f1_${i}`, `1.${i+1}`, C.f1.items[i]);
  banda('Fase 2 · Preguntas frecuentes (FAQ)', [226,238,252], COL.sky);
  P(C.f2.intro, { size: 9.5, i: true, color: COL.muted, tras: 3 });
  let n = 0;
  for (const g of C.f2.grupos){
    sitio(24); P(g.t, { size: 11.5, b: true, color: COL.sky, tras: 2 });
    for (const q of g.q){ n++; await caja(`f2_${n-1}`, `2.${n}`, q.p, { ejemplo: q.ej }); }
  }
}

function listaChecks(C){
  const f1 = C.f1.items.map((_, i) => `f1_${i}`), f2 = faqDe(C).map((_, i) => `f2_${i}`);
  const n1 = cuentaLlenas(f1), n2 = cuentaLlenas(f2);
  return [
    { ok: n1 === f1.length, t: `Fase 1 · ${f1.length} productos reales`, cuenta: `${n1}/${f1.length}`, falta: 'Busca un producto real para cada tipo de sistema.' },
    { ok: n2 === f2.length, t: `Fase 2 · ${f2.length} preguntas respondidas`, cuenta: `${n2}/${f2.length}`, falta: 'Responde a todas las preguntas frecuentes.' }
  ];
}

function ejemploRespuesta(id){
  if (/^f1_/.test(id)) return '<p><b>[Nombre del producto · Marca]</b></p><p>[Enlace a la web del producto o captura]</p><p>[Texto de muestra] Por qué lo elegirías para el centro y cómo se usaría en el día a día.</p>';
  if (/^f2_/.test(id)) return '<p>[Texto de muestra] Respuesta clara y tranquilizadora para la familia o el usuario, sin tecnicismos.</p>';
  if (id === 'fuentes') return '<ul><li>[Fuente 1: título · web o institución · fecha · enlace]</li><li>[Fuente 2: título · web o institución · fecha · enlace]</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  return '';
}

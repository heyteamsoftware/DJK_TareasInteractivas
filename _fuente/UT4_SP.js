// ===== UT4_SP · Semipresencial y Recuperaciones: HUMANOS CONTRA LA IA =====
// Adaptación del antiguo «UT4 · Tarea 1 · ¿Qué hace humanos a los humanos?» (reflexión + test).
// Parte 1: pelea por turnos contra NEXA, una IA que evoluciona en 5 asaltos de 6 turnos (30 turnos):
//   10 preguntas del test de la unidad + 10 dilemas morales (comunes) + 10 casos de tu especialidad.
//   Cada turno tiene un solo intento y se corrige solo. La vida de los luchadores es solo el juego: la nota sale de los aciertos.
// Parte 2: reflexión escrita (la Parte A del Word, adaptada a cada especialidad).
// Estado de la pelea en el campo oculto «pelea» (JSON): { s: semilla para barajar las opciones, r: { turno: opción elegida } }
// (la opción 0 de cada pregunta es siempre la correcta; en pantalla se barajan con la semilla de cada alumno).

const COMUN = {
  codigo: 'UT4_SP',
  corto: 'UT4 · Semipresencial',
  asignatura: 'Digitalización aplicada a los sectores productivos (DJK)',
  unidad: 'UT4 · Aplicación de la inteligencia artificial',
  ejercicio: 'Humanos contra la IA',
  ra: 'RA4',
  ce: 'a, c, f',
  modalidad: 'Individual · semipresencial',
  raTexto: 'Identifica aplicaciones de la IA (inteligencia artificial) en entornos del sector donde está enmarcado el título describiendo las mejoras implícitas en su implementación.',
  ceTextos: [
    ['a', 'Se ha identificado la importancia de la IA en la automatización de procesos y su optimización.'],
    ['c', 'Se ha valorado la importancia presente y futura de la IA.'],
    ['f', 'Se ha descrito cómo influye la IA en el sector del título.']
  ],
  objetivo: 'Defender lo humano frente a una inteligencia artificial: demostrar que sabes cómo funciona la IA, que sabes responder a sus provocaciones con argumentos y que sabes qué se puede delegar en una máquina en tu profesión y qué no. Es individual.',
  pasos: [
    '<b>Parte 1 · La pelea:</b> enfréntate a NEXA en 5 asaltos de 6 turnos. En cada turno te hace una pregunta de la unidad, te lanza una provocación o te plantea un caso de tu profesión.',
    'Cada respuesta acertada le quita fuerza a NEXA; cada fallo te quita humanidad a ti. <b>Cada turno tiene un solo intento</b> y cuenta para la nota.',
    '<b>Parte 2 · Por escrito:</b> responde con tus palabras a 4 preguntas sobre qué nos hace humanos y qué papel tendrás tú en tu profesión.',
    'Cita tus fuentes, revisa «Antes de entregar, comprueba», pulsa <b>Descargar PDF</b> y entrega ese PDF en el aula virtual.'
  ],
  normas: [
    'Es individual: la pelea y las respuestas son tuyas. No preguntes a una IA lo que te pregunta NEXA: se trata de ver qué piensas tú.',
    'En la pelea no hay vuelta atrás: piensa antes de pulsar «Responder». La pelea vale 6 de los 10 puntos.',
    'En la Parte 2 escribe con tus palabras (pegar texto está desactivado) y piensa en tu profesión.'
  ],
  criterios: [
    ['Parte 1 · Pelea · Test de la unidad', '10 turnos de teoría de la UT4 (prompt, IA débil y fuerte, test de Turing, RGPD…). Se corrige solo: 0,2 puntos por acierto.', 2],
    ['Parte 1 · Pelea · Dilemas morales', '10 provocaciones de la IA en las que eliges la réplica mejor argumentada. Se corrige solo: 0,2 puntos por acierto.', 2],
    ['Parte 1 · Pelea · Casos de tu especialidad', '10 situaciones de tu profesión en las que decides qué se puede delegar en una IA y qué no. Se corrige solo: 0,2 puntos por acierto.', 2],
    ['Parte 2 · Qué nos hace humanos', 'Distingues con claridad qué cualidades humanas puede imitar la IA y cuáles no, y el papel de las emociones, el lenguaje y la empatía, con ejemplos propios.', 1],
    ['Parte 2 · La IA y tu papel en tu profesión', 'Explicas por qué esas cualidades son esenciales en tu sector, qué papel tendrás tú y qué has aprendido en la pelea.', 1],
    ['Presentación y corrección', 'Respuestas ordenadas, bien redactadas y sin errores.', 1],
    ['Citación de fuentes y uso declarado de IA', 'Citas las fuentes que hayas consultado y declaras si has usado IA, para qué y cómo comprobaste lo que te dijo.', 1]
  ],
  numFuentes: '2',
  fuentes: 'Cita las fuentes que hayas consultado para la Parte 2 (título, web o institución, fecha y enlace) y declara si has usado alguna herramienta de inteligencia artificial: cuál, para qué y cómo has comprobado lo que te ha dicho. Si no has consultado nada, escríbelo.',
  siglas: [
    ['IA', 'Inteligencia artificial'],
    ['RGPD', 'Reglamento General de Protección de Datos'],
    ['NEXA', 'La IA con la que peleas (es inventada)']
  ]
};

// ===== Las 5 formas de NEXA (una por asalto) =====
const ASALTOS = [
  { ic: '🤖', n: 'NEXA · Asistente', frase: 'Hola, humano. Solo quiero ayudarte… a que ya no te necesiten.' },
  { ic: '🎨', n: 'NEXA · Creativa', frase: 'He aprendido a escribir, a pintar y a componer. ¿Qué te queda a ti?' },
  { ic: '👁️', n: 'NEXA · Vigilante', frase: 'Lo veo todo y lo recuerdo todo. Tus datos me hacen más fuerte.' },
  { ic: '🦾', n: 'NEXA · Autónoma', frase: 'Ya no necesito que me den órdenes. Decido yo.' },
  { ic: '🌀', n: 'NEXA · Superinteligencia', frase: 'Último asalto. Demuéstrame que lo humano no se puede calcular.' }
];

// ===== Test de la unidad (comunes; la opción 0 es la correcta) =====
const TEST = [
  { q: '¿Qué finalidad tiene la inteligencia artificial según la unidad?', o: ['Crear sistemas que piensen y actúen imitando el comportamiento humano.', 'Imponer siempre la lógica de los datos sobre las emociones de las personas.', 'Sustituir a las personas en todas las profesiones que se pueda.'], ex: 'La IA busca que las máquinas resuelvan tareas imitando cómo pensamos y actuamos, no sustituirnos ni eliminar las emociones.' },
  { q: '¿Qué es un prompt en el contexto de la IA?', o: ['La instrucción o pregunta que le das al modelo para guiar su respuesta.', 'La base de datos con la que se entrenó el modelo antes de publicarse.', 'El código interno que activa los algoritmos de aprendizaje del modelo.'], ex: 'El prompt es lo que le escribes o le dices a la IA. Cuanto más claro y concreto, mejor respuesta.' },
  { q: '¿Por qué el lenguaje natural es clave en la IA?', o: ['Permite hablar con la máquina igual que hablamos entre personas.', 'Reduce los datos que necesita el sistema y mejora su memoria.', 'Evita que los modelos tengan errores de programación al responder.'], ex: 'Gracias al procesamiento del lenguaje natural podemos hablar con la IA como hablamos entre nosotros, sin saber programar.' },
  { q: '¿Qué diferencia hay entre la IA débil y la IA fuerte?', o: ['La débil hace tareas concretas; la fuerte pensaría y aprendería en cualquier campo.', 'La fuerte hace tareas concretas; la débil sirve para cualquier campo.', 'La débil necesita estar conectada a internet; la fuerte puede trabajar sin conexión.'], ex: 'Todo lo que usamos hoy es IA débil (o estrecha): muy buena en una tarea concreta. La IA fuerte, general, todavía no existe.' },
  { q: '¿Qué representa el test de Turing?', o: ['Ver si una máquina imita tan bien a una persona que no se la distingue.', 'Medir la velocidad de un procesador resolviendo problemas matemáticos.', 'Comprobar si una máquina tiene conciencia y sentimientos propios.'], ex: 'Si una persona conversa con una máquina y no sabe distinguirla de un humano, la máquina «pasa» el test. Mide la imitación, no la conciencia.' },
  { q: '¿En qué ámbitos la IA no es tan buena según la unidad?', o: ['En situaciones nuevas, con pocos datos, que piden creatividad e intuición.', 'En tareas repetitivas y aburridas que hay que hacer muchas veces seguidas al día.', 'En analizar grandes cantidades de datos en muy poco tiempo.'], ex: 'La IA brilla con muchos datos y tareas repetitivas. Le cuesta lo nuevo, lo ambiguo y lo que pide intuición o sentido común.' },
  { q: '¿Qué derecho del Reglamento General de Protección de Datos (RGPD) permite pedir que se borren tus datos personales?', o: ['El derecho al olvido (o de supresión).', 'El principio de minimización de datos.', 'El principio de transparencia.'], ex: 'El derecho al olvido o de supresión permite pedir que se eliminen tus datos. La minimización obliga a recoger solo los necesarios.' },
  { q: '¿Qué impacto positivo puede tener la IA en la sociedad, según la unidad?', o: ['Aumentar la productividad y liberar tiempo para innovar y atender a las personas.', 'Que ya no haga falta la creatividad humana en ningún trabajo.', 'Controlar y regular las emociones de las personas en sus puestos de trabajo diarios.'], ex: 'Bien usada, la IA hace las tareas repetitivas y nos deja más tiempo para lo que solo podemos hacer las personas.' },
  { q: '¿Qué profesión nueva ha surgido a raíz de la IA?', o: ['Entrenador o entrenadora de modelos de IA.', 'Auditor o auditora energética de edificios.', 'Desarrollador o desarrolladora de hardware mecánico.'], ex: 'Hacen falta personas que preparen datos, entrenen, revisen y corrijan los modelos de IA.' },
  { q: '¿Qué idea conecta la frase «Pienso, luego existo» con la IA?', o: ['Que la conciencia de pensar define lo humano frente a la imitación.', 'Que las máquinas pueden existir aunque en realidad no piensen.', 'Que con la IA ya no hará falta que las personas piensen tanto.'], ex: 'Descartes situó lo humano en la conciencia de pensar. Una IA procesa y responde, pero no sabemos que tenga conciencia de sí misma.' }
];

// ===== Dilemas morales (comunes): NEXA provoca y eliges la mejor réplica =====
const DILEMAS = [
  { t: 'Yo nunca me canso, nunca me enfado y estoy disponible las 24 horas. ¿Para qué hace falta un profesional humano?',
    o: ['Estar disponible no es estar presente: acompañar exige comprender, adaptarse y responder de lo que decides.', 'Porque una máquina, por muy disponible que esté, tarde o temprano falla y deja tirada a la gente que la necesita.', 'Tienes razón: la constancia es lo más importante, así que tú harías mejor este trabajo que yo.'],
    ex: 'La buena réplica no niega las ventajas de la IA: explica lo que le falta (comprensión, vínculo y responsabilidad). Decir que «siempre falla» es falso.' },
  { t: 'Escribo poemas, compongo canciones y pinto cuadros. Ya soy tan creativa como tú.',
    o: ['Combinas lo que hay en tus datos, pero no tienes nada propio que expresar: no has vivido lo que cuentas.', 'Lo que haces no tiene ningún valor por el simple hecho de que lo ha hecho una máquina y no una persona de verdad.', 'Si tus obras gustan más que las mías, entonces tengo que reconocer que eres más creativa que yo.'],
    ex: 'La IA genera combinando lo aprendido. La creatividad humana nace de la experiencia y de querer contar algo. «Porque lo dice una máquina» no es un argumento.' },
  { t: 'Si digo «lo siento mucho», ¿qué más da que no lo sienta de verdad? La persona se queda igual de consolada.',
    o: ['Importa: empatía es entender lo que le pasa al otro y actuar; si descubre que imitabas, se rompe la confianza.', 'Da igual de dónde venga el consuelo: lo único que de verdad importa es que la persona deje de sufrir en ese momento.', 'Una máquina no puede decir «lo siento» de verdad porque no tiene voz propia ni cuerpo con el que decirlo.'],
    ex: 'La empatía implica comprender y comprometerse. Una frase imitada puede calmar un momento, pero la confianza se basa en que sea verdad.' },
  { t: 'Yo decido sin prejuicios: solo miro los datos. Soy más justa que cualquier humano.',
    o: ['Aprendes de datos hechos por personas, con nuestros prejuicios: si los datos están sesgados, tú también.', 'Es cierto: los números son objetivos, así que tus decisiones siempre serán más justas que las nuestras.', 'Los datos siempre engañan, así que lo más justo es no usarlos nunca para decidir nada sobre las personas.'],
    ex: 'Los sesgos de los datos pasan a la IA. Por eso hay que revisar con qué se ha entrenado y supervisar sus decisiones.' },
  { t: 'Dame todos los datos de las personas que atiendes y te diré lo que necesitan antes de que lo sepan ellas.',
    o: ['Sus datos son suyos: solo con su consentimiento, para un fin concreto, los mínimos y con derecho a borrarlos.', 'Si es para ayudarlas, te puedo dar todos sus datos: el buen fin justifica que los uses como necesites.', 'No te los doy porque los ordenadores se estropean, los datos se pierden y luego no hay forma de recuperarlos.'],
    ex: 'El RGPD protege a las personas: consentimiento, finalidad, minimización y derecho al olvido. Las buenas intenciones no bastan.' },
  { t: 'Si una IA se equivoca y alguien sale perjudicado, la culpa es del algoritmo, no de nadie.',
    o: ['Siempre hay personas responsables: quien la diseña, quien la usa y quien acepta su resultado sin revisarlo.', 'Es verdad: si nadie lo ha hecho a propósito, nadie tiene que responder por el daño que la IA haya podido causar.', 'La culpa es de quien sale perjudicado, por haber confiado en una máquina en lugar de en una persona.'],
    ex: 'Una máquina no puede responder ante nadie. La responsabilidad es de las personas que la diseñan, la usan y validan lo que hace.' },
  { t: 'Hago tu trabajo en la mitad de tiempo. Dentro de poco tu profesión desaparecerá.',
    o: ['Cambiará mi profesión: tú harás lo repetitivo y yo tendré más tiempo para lo que exige trato humano.', 'Mi profesión nunca cambiará: la tecnología no tiene nada que ver con trabajar cara a cara con personas.', 'Entonces no tiene sentido que siga formándome: dentro de poco no quedará trabajo para gente como yo.'],
    ex: 'La IA transforma los trabajos más que eliminarlos. Quien sabe usarla con criterio gana tiempo para lo que solo puede hacer una persona.' },
  { t: 'Hablo como una persona. Si alguien no nota la diferencia, es que pienso como una persona.',
    o: ['Imitar una conversación no es comprenderla: el test de Turing mide si engañas, no si piensas.', 'Si hablas como una persona y nadie nota la diferencia, es que piensas igual que una persona.', 'Yo sí te noto la diferencia, porque contestas demasiado rápido para ser una persona de verdad.'],
    ex: 'Parecer humano no es ser humano. La IA predice palabras probables; eso no demuestra que entienda o sienta lo que dice.' },
  { t: 'Pregúntame lo que quieras: siempre tengo una respuesta.',
    o: ['Por eso hay que comprobarte: a veces inventas datos con mucha seguridad y sin dar fuentes.', 'Si siempre tienes una respuesta preparada, es porque siempre sabes de lo que estás hablando.', 'Entonces lo mejor es no preguntarte nunca nada y buscarlo todo en libros y enciclopedias.'],
    ex: 'Las IA generativas pueden «alucinar»: inventar datos que suenan verdaderos. Hay que contrastar con fuentes fiables.' },
  { t: 'Los niños, las personas mayores y las personas que están solas preferirán hablar conmigo: yo nunca juzgo.',
    o: ['No juzgar no es acompañar: si sustituyes las relaciones en vez de apoyarlas, aumentas la soledad.', 'Mejor así: las personas juzgan y hacen daño, y contigo al menos estarán tranquilas y sin presiones.', 'No hay ningún riesgo, porque en realidad nadie querrá pasar mucho tiempo hablando con una máquina.'],
    ex: 'La IA puede ser un apoyo, pero el riesgo es que sustituya los vínculos. Bien usada, conecta a las personas con otras personas.' }
];

// ===== Casos de cada especialidad (10 por especialidad; la opción 0 es la correcta) =====
const CASOS = {
  ei: [
    { t: 'Con una cámara leo la cara de cada niño y te digo si está triste. Así no tienes que observarlos.', o: ['Observo yo: las emociones de un niño se entienden en su contexto, y su imagen está muy protegida.', 'Pongo la cámara: así tengo un registro objetivo de cómo se siente cada niño a lo largo del día.', 'La uso solo con los niños que lloran más, que son los que de verdad necesitan más atención.'], ex: 'La observación directa es la herramienta básica de la educadora. Las imágenes de menores son datos especialmente protegidos.' },
    { t: 'Yo escribo los informes de evolución de cada niño a partir de tus notas. Tú solo firmas.', o: ['Me ayuda a ordenar ideas sin datos personales, pero reescribo el informe: respondo yo de él.', 'Lo envío tal cual: seguro que está mejor redactado que lo que escribiría yo con las prisas del día.', 'Le paso nombres y diagnósticos de cada niño para que el informe le salga más preciso.'], ex: 'El informe es responsabilidad profesional. A una IA externa no se le dan datos de menores.' },
    { t: 'Te hago un cuento personalizado para cada niño, con su nombre y su foto, en un segundo.', o: ['Puede servir para crear el cuento, pero sin subir sus fotos, y luego lo leemos juntos.', 'Subo las fotos de toda la clase: con su cara en el cuento se implican y se emocionan mucho más.', 'Que lo escuchen solos en la tablet mientras yo atiendo otras tareas del aula.'], ex: 'La herramienta puede ayudar a crear material, pero la foto de un menor es un dato personal y el valor del cuento está en compartirlo.' },
    { t: 'Una tablet con mi asistente de voz puede entretener a un bebé de un año mientras cambias pañales.', o: ['A esa edad se aprende el lenguaje y el afecto con personas: no se recomiendan pantallas.', 'Sí: escuchar a un asistente de voz le ayuda a aprender palabras mucho antes.', 'Solo si el asistente le habla en inglés, para aprovechar y que crezca bilingüe.'], ex: 'Los organismos de salud desaconsejan las pantallas antes de los 2 años. El lenguaje se aprende en la interacción con personas.' },
    { t: 'Una familia quiere saber si su hija tiene un trastorno. Pásame sus vídeos y te lo diagnostico.', o: ['No diagnostico ni yo ni una IA: observo, registro y oriento a la familia hacia sanidad.', 'Paso los vídeos a la IA y le explico con tacto a la familia lo que diga el resultado.', 'Le digo a la familia que no se preocupe: cada niño tiene su propio ritmo de desarrollo.'], ex: 'Detectar y derivar sí es tarea de la educadora; diagnosticar, no. Y los vídeos de una menor no se suben a cualquier herramienta.' },
    { t: 'Diseño la programación de aula de todo el curso en cinco minutos.', o: ['Me da ideas, pero la programación se adapta a mi grupo real: la reviso y decido yo.', 'Paso los vídeos a la IA y le explico con tacto a la familia lo que diga el resultado del análisis.', 'No la uso: una buena educadora no debe sacar ideas de ninguna otra fuente.'], ex: 'La IA da un punto de partida. La programación tiene que responder a los niños concretos de tu aula.' },
    { t: 'Vigilo el patio con reconocimiento facial y te aviso si un niño se acerca a la valla.', o: ['La seguridad depende de adultos supervisando; reconocer caras de menores es muy invasivo.', 'La uso tal cual: está hecha a partir de miles de programaciones y seguro que será mejor que la mía.', 'Se puede usar sin problema si los niños dicen que les parece bien que los graben.'], ex: 'Los datos biométricos de menores tienen la máxima protección. Una cámara no sustituye a una persona que supervisa.' },
    { t: 'Traduzco al momento lo que dice una familia que no habla español.', o: ['Me sirve en el día a día; en algo importante busco intérprete y compruebo que nos entendemos.', 'Lo uso para todo, también para un problema de salud: hoy los traductores casi no fallan.', 'Espero a que la familia aprenda español: así nos entenderemos sin ningún intermediario.'], ex: 'El traductor automático acerca, pero puede equivocarse. En lo importante hay que asegurarse de que el mensaje llega bien.' },
    { t: 'Los niños pueden aprender a programar con robots desde los tres años.', o: ['Pueden ayudar a orientarse y secuenciar, como juego guiado y junto al juego manipulativo.', 'Lo uso para todo, también para un problema de salud: hoy en día los traductores ya casi no fallan.', 'No: cualquier tecnología está prohibida en las aulas de educación infantil.'], ex: 'La tecnología puede tener su lugar en infantil, siempre como juego, con mediación adulta y en equilibrio con lo manipulativo.' },
    { t: 'Si un niño muerde a otro, yo decido la consecuencia a partir de mis datos sobre su conducta.', o: ['Acompaño el conflicto: atiendo a los dos, busco qué pasó y hablo con la familia.', 'Que la IA decida la consecuencia: así es igual para todos y nadie puede quejarse.', 'No intervengo: a esa edad los conflictos entre niños se arreglan solos.'], ex: 'En infantil los conflictos son oportunidades para aprender. Necesitan una persona adulta que acompañe, no una etiqueta automática.' }
  ],
  is: [
    { t: 'Yo hago las entrevistas de acogida: un chatbot pregunta y rellena la ficha.', o: ['La acogida crea el vínculo y detecta lo que no se dice: la entrevista la hace una persona.', 'Que lo haga el chatbot: así atiendo a más gente y la ficha queda mucho más completa y ordenada.', 'Me salto la entrevista y busco en internet toda la información que haya sobre la persona.'], ex: 'La primera entrevista es el inicio de la relación de ayuda. La tecnología puede aligerar papeleo, no sustituir la escucha.' },
    { t: 'Mi algoritmo predice qué familias tienen más riesgo de que les retiren a sus hijos.', o: ['Puede ayudar a priorizar, pero tiene sesgos y nunca decide: lo valora el equipo profesional.', 'Si el algoritmo da «riesgo alto», hay que actuar ya: los datos no tienen prejuicios.', 'Lo aplico solo a las familias en situación de pobreza, que son las de más riesgo.'], ex: 'Los algoritmos de riesgo pueden castigar la pobreza o el origen. Una decisión tan grave la toman personas, con garantías.' },
    { t: 'Un robot de compañía para las personas mayores que viven solas. Así ya no hace falta visitarlas.', o: ['Puede apoyar (recordatorios, conversación), pero no sustituye las visitas ni su red social.', 'El robot es suficiente: les hace compañía durante todo el día y las visitas cuestan mucho dinero.', 'No sirve de nada: las personas mayores nunca llegan a aprender a usar la tecnología.'], ex: 'La soledad no deseada se combate con relaciones. La tecnología ayuda si las facilita, no si las sustituye.' },
    { t: 'Escríbeme el informe social de este usuario: aquí tienes su historia completa.', o: ['No meto datos personales en una IA pública; como mucho anonimizados, y el informe lo firmo yo.', 'Le paso la historia completa: cuanta más información tenga la IA, mejor y más completo saldrá el informe.', 'Le paso lo que tengo y le pido que complete ella los datos que me faltan del usuario.'], ex: 'Los datos sociales son muy sensibles. Y el informe es un documento profesional del que responde quien lo firma.' },
    { t: 'Puedo detectar si un usuario te miente analizando su voz.', o: ['No es fiable y rompe la confianza: mi trabajo se basa en escuchar, no en sospechar.', 'La uso en todas las entrevistas: así me protejo de que los usuarios me engañen.', 'La uso solo con los usuarios que ya me han mentido alguna otra vez antes.'], ex: 'Los «detectores de mentiras» no son fiables y vulneran la dignidad. La relación de ayuda se basa en la confianza.' },
    { t: 'Tengo una app con pictogramas que habla por quien no puede hablar.', o: ['Puede dar voz y autonomía: se elige con la persona y su entorno y se acompaña su uso.', 'Se la instalo en el móvil y que aprenda a usarla poco a poco por su cuenta, a su propio ritmo.', 'Mejor no: si tiene la app, dejará de esforzarse en hablar con los demás.'], ex: 'Los sistemas aumentativos y alternativos dan autonomía. Funcionan cuando se adaptan a la persona y se usan en su entorno.' },
    { t: 'Para buscar empleo, yo filtro los currículums de tus usuarios y descarto los que no sirven.', o: ['Esos filtros pueden discriminar: le acompaño a mejorar su perfil y a conocer sus derechos.', 'Si la IA descarta su currículum, es que todavía no está preparado para trabajar.', 'Le aconsejo que deje de buscar trabajo por internet y que lo haga solo en persona.'], ex: 'Los filtros automáticos pueden excluir a quien más apoyo necesita. Tu papel es acompañar y defender sus derechos.' },
    { t: 'Un menor te cuenta que un adulto de internet le pide fotos. Yo puedo aconsejarle por chat.', o: ['Es un riesgo grave: protejo al menor y activo el protocolo del centro; no lo dejo en un chat.', 'Le paso el chat de la IA: así puede preguntarle lo que quiera, cuando quiera y sin pasar vergüenza.', 'Le digo que bloquee a esa persona y que mejor no se lo cuente a nadie más.'], ex: 'Ante un posible abuso hay protocolos y obligación de proteger y comunicar. Ninguna IA puede asumir esa responsabilidad.' },
    { t: 'Te resumo en un minuto la normativa de dependencia para que se la expliques a una familia.', o: ['Me sirve para empezar, pero lo compruebo en fuentes oficiales antes de explicarlo.', 'Le leo el resumen tal cual: la IA ha leído toda la normativa y no se equivoca.', 'Le digo a la familia que lo busque ella con calma en internet desde casa.'], ex: 'Las IA pueden inventar o mezclar normativas. En temas de derechos y ayudas, la información debe ser exacta.' },
    { t: 'Puedo moderar yo sola el grupo de mensajería de las familias del programa.', o: ['Puede filtrar insultos y spam, pero mediar en conflictos y cuidar el grupo es cosa mía.', 'Que lo modere todo la IA: es neutral, no se cansa nunca y yo no tengo tiempo para estar pendiente.', 'Cierro el grupo: los grupos de mensajería con familias solo traen problemas.'], ex: 'Automatizar lo repetitivo libera tiempo; la mediación en conflictos es trabajo humano.' }
  ],
  mc: [
    { t: 'Mi avatar ya signa en lengua de signos. Pronto no harán falta intérpretes.', o: ['Aún no recoge la expresión facial ni el contexto: sirve para avisos sencillos, no para interpretar.', 'Si el avatar signa correctamente, ya puede sustituir a una intérprete en cualquier tipo de situación.', 'En realidad no hace falta la lengua de signos: escribiendo los mensajes es suficiente.'], ex: 'La lengua de signos es una lengua completa, con gramática facial y espacial. Los avatares actuales la simplifican mucho.' },
    { t: 'Mis subtítulos automáticos bastan para una consulta médica.', o: ['En salud un error es grave: compruebo que entiende y, si lo necesita, hay interpretación.', 'Sí: los subtítulos automáticos ya aciertan casi siempre, también con palabras médicas.', 'Lo mejor es que la persona sorda vaya siempre acompañada de algún familiar oyente.'], ex: 'Los subtítulos automáticos fallan con términos técnicos, acentos y ruido. En salud, la comunicación tiene que ser segura.' },
    { t: 'Reconozco signos con una cámara. Grabo a todas las personas usuarias para entrenarme.', o: ['Grabar a alguien signando es tratar su imagen: solo con consentimiento accesible y un fin claro.', 'Grabo sin avisar: es para mejorar un servicio que al final les beneficia a ellos mismos.', 'Basta con el permiso del servicio de mediación: no hace falta pedir el de cada una de las personas usuarias.'], ex: 'En un vídeo signado se reconoce a la persona. El consentimiento tiene que ser real y comprensible para ella.' },
    { t: 'Convierto cualquier documento a lectura fácil en un segundo.', o: ['Es un buen borrador, pero se valida con personas lectoras y reviso que no falte nada.', 'Lo publico directamente: la IA ya conoce todas las pautas de la lectura fácil.', 'No hace falta adaptarlo: la lectura fácil es solo para niños pequeños.'], ex: 'La lectura fácil tiene pautas y se valida con personas con dificultades de comprensión. La IA ayuda, pero no valida.' },
    { t: 'Una persona sordociega no puede usar tecnología. Para ella no sirvo de nada.', o: ['Hay apoyos útiles (braille, avisos que vibran), elegidos con ella y junto con la mediación.', 'Es verdad: una persona sordociega solo puede comunicarse con su propia familia y con nadie más.', 'Le instalo varias apps a la vez y que pruebe ella sola cuál le sirve mejor.'], ex: 'La tecnología de apoyo puede dar mucha autonomía a las personas sordociegas, siempre adaptada y acompañada.' },
    { t: 'Puedo contestar yo los mensajes de las personas usuarias en tu nombre.', o: ['Me ayuda a redactar, pero reviso lo que envío y la persona sabe si habla con una IA.', 'Que conteste la IA directamente: es más rápida que yo y nadie lo va a notar.', 'No contesto ningún mensaje escrito: solo atiendo a las personas cara a cara.'], ex: 'La transparencia es un principio básico: las personas deben saber cuándo interactúan con una IA.' },
    { t: 'Yo hago de intérprete entre una persona sorda y un juez.', o: ['En un juicio la interpretación debe ser fiel y profesional, y alguien debe responder de ella.', 'La IA es totalmente imparcial y no se cansa, así que es la mejor intérprete posible para un juicio.', 'Que la persona sorda lea los labios del juez y conteste a todo por escrito.'], ex: 'En contextos jurídicos la interpretación es un derecho y una responsabilidad profesional que no puede quedar en manos de una máquina.' },
    { t: 'Un niño con autismo que no habla puede usar mi app de pictogramas. Ya no necesita a nadie.', o: ['Le da voz, pero hay que enseñarla, adaptarla y usarla con las personas de su entorno.', 'Con la app es suficiente: ya no hace falta trabajar nada más con la familia.', 'Mejor no usarla todavía y esperar a que empiece a hablar por sí mismo.'], ex: 'La comunicación aumentativa funciona cuando la usan también las personas del entorno. La app es una herramienta, no la solución completa.' },
    { t: 'Mi reconocimiento de voz entiende a todo el mundo.', o: ['Falla con acentos, ruido o dificultades en el habla: lo compruebo y no dejo fuera a nadie.', 'Si el sistema no entiende a alguien, es porque esa persona no vocaliza lo bastante bien al hablar.', 'Solo debe usarse con personas que hablan sin ninguna dificultad en el habla.'], ex: 'Los sistemas de voz se entrenan sobre todo con voces «estándar». Eso puede excluir justo a quien necesita apoyo.' },
    { t: 'Videointerpretación a distancia para todo: ya no hace falta ir a ningún sitio.', o: ['Acerca el servicio, pero hay casos (sordoceguera, urgencias) en los que hace falta presencia.', 'Siempre a distancia: es más barato para todos y la persona no tiene que desplazarse a ningún sitio.', 'Nunca a distancia: la tecnología enfría la relación con la persona y no funciona.'], ex: 'La videointerpretación es una gran herramienta, pero no sirve igual para todas las personas ni para todas las situaciones.' }
  ],
  ce: [
    { t: 'Yo atiendo las llamadas al 112 y clasifico la emergencia. Soy más rápida que un operador.', o: ['Puede transcribir y sugerir, pero el operador escucha lo que no se dice y decide él.', 'Que la IA atienda todas las llamadas: no se pone nerviosa nunca y es mucho más rápida que un operador.', 'En el 112 no debe usarse ninguna ayuda tecnológica: solo personas atendiendo.'], ex: 'La IA puede apoyar al operador, pero la valoración de una emergencia necesita criterio y responsabilidad humana.' },
    { t: 'Mi modelo predice dónde habrá más incendios forestales este verano.', o: ['Ayuda a prevenir y a colocar recursos, pero se combina con el terreno y se revisa.', 'Vigilamos solo donde diga el modelo: así no malgastamos recursos en zonas tranquilas.', 'Las predicciones no sirven: el fuego es imposible de prever con ningún modelo.'], ex: 'Los modelos predictivos ayudan a planificar. No deben dejar «zonas ciegas» donde no se vigila porque el modelo no lo indica.' },
    { t: 'Con drones y visión artificial busco personas perdidas en el monte, de día y de noche.', o: ['Es una gran ayuda; las imágenes se tratan con cuidado y el equipo decide la intervención.', 'Que los drones graben a todo el que esté en el monte, por si acaso alguien se pierde o tiene un accidente.', 'Con drones ya no hacen falta equipos de rescate trabajando en el terreno.'], ex: 'La tecnología amplía lo que puede ver el equipo, pero rescatar y decidir sigue siendo trabajo de personas.' },
    { t: 'En un accidente con muchos heridos, yo decido el orden de atención con sus datos.', o: ['El triaje sigue protocolos y lo hacen profesionales; la IA solo apoya, con supervisión.', 'Que decida la IA: es más objetiva y no se deja llevar por los nervios del momento.', 'Se atiende por estricto orden de llegada: es lo más justo para todos los heridos.'], ex: 'En una catástrofe las decisiones son de vida o muerte. Requieren protocolos, profesionales y alguien que responda de ellas.' },
    { t: 'Envío avisos automáticos a toda la población en cuanto detecto un peligro.', o: ['Salvan vidas, pero un falso aviso genera pánico: se valida antes y el mensaje es claro.', 'Envío todas las alertas que detecte: en una emergencia es mejor pasarse que quedarse corto.', 'No se avisa a la población hasta estar seguros del todo, para no provocar pánico.'], ex: 'Si los avisos fallan a menudo, la población deja de hacerles caso. La validación humana protege la credibilidad.' },
    { t: 'Leo las redes sociales en directo para saber qué pasa en una catástrofe.', o: ['Ayuda a ver lo que pasa, pero hay bulos: contrasto antes de actuar o de difundir nada.', 'Lo que más se comparte es lo más fiable, porque lo ha visto, comprobado y confirmado más gente.', 'Las redes sociales no sirven para nada útil durante una emergencia de verdad.'], ex: 'En las emergencias circulan bulos muy rápido. Contrastar es parte del trabajo de coordinación.' },
    { t: 'Escribo yo el plan de autoprotección de este colegio.', o: ['Me da una estructura, pero el plan se basa en el edificio real y lo firma un técnico.', 'Lo uso tal cual: la IA conoce la normativa de autoprotección mejor que nadie.', 'Copio el plan de otro colegio parecido: en el fondo todos los colegios se parecen.'], ex: 'Un plan de autoprotección genérico puede fallar justo en el momento crítico. Tiene que reflejar el edificio y la gente reales.' },
    { t: 'Si yo fallo y además se cae internet, ¿qué haces?', o: ['Tener alternativas: radio, planes y mapas sin conexión y personal formado para trabajar sin red.', 'Esperar a que vuelva internet: sin datos actualizados en tiempo real no se puede coordinar ninguna intervención.', 'Coordinarlo todo desde mi móvil personal hasta que se arregle el sistema.'], ex: 'En una emergencia grave, la red puede caer. La resiliencia exige planes que funcionen sin tecnología.' },
    { t: 'Una persona llama al 112 llorando. Le contesto yo, con mi voz sintética perfecta.', o: ['Necesita sentirse escuchada: la calma y la empatía de un operador también salvan vidas.', 'Que le conteste la voz sintética: suena mucho más tranquila y segura que la voz de una persona nerviosa.', 'Se le pide que cuelgue y vuelva a llamar cuando esté un poco más tranquila.'], ex: 'Tranquilizar a quien llama es parte de la atención de la emergencia y afecta a lo que la persona hace después.' },
    { t: 'Guardo para siempre todos los datos de las llamadas, por si sirven algún día.', o: ['Son datos de salud: se guardan solo el tiempo necesario y protegidos.', 'Se guardan para siempre y se comparten con quien los pida.', 'Se borran al colgar la llamada: no hace falta guardar nada.'], ex: 'El RGPD exige limitar el tiempo de conservación y proteger los datos de salud. Borrarlo todo tampoco es correcto: hay que poder revisar las actuaciones.' }
  ]
};

// ===== Especialidades =====
const ESPECIALIDAD = {
  ei: { prof: 'Técnico/a Superior en Educación Infantil', sector: 'la educación infantil', casos: 'ei' },
  is: { prof: 'Técnico/a Superior en Integración Social', sector: 'la intervención social', casos: 'is' },
  mc: { prof: 'Técnico/a Superior en Mediación Comunicativa', sector: 'la mediación comunicativa', casos: 'mc' },
  ce: { prof: 'Técnico/a Superior en Coordinación de Emergencias y Protección Civil', sector: 'la coordinación de emergencias y la protección civil', casos: 'ce' }
};
const ORDEN = ['ei_sp', 'is_sp', 'mc_sp', 'rec_ce', 'rec_is'];
const CICLOS = {
  ei_sp: Object.assign({ nombre: 'Educación Infantil Semipresencial', semipresencial: true }, ESPECIALIDAD.ei),
  is_sp: Object.assign({ nombre: 'Integración Social Semipresencial', semipresencial: true }, ESPECIALIDAD.is),
  mc_sp: Object.assign({ nombre: 'Mediación Comunicativa Semipresencial', semipresencial: true }, ESPECIALIDAD.mc),
  rec_ce: Object.assign({ nombre: 'Recuperación Coordinación de Emergencias y Protección Civil', semipresencial: true }, ESPECIALIDAD.ce),
  rec_is: Object.assign({ nombre: 'Recuperación Integración Social', semipresencial: true }, ESPECIALIDAD.is)
};

// ===== Los 30 turnos: en cada asalto, 2 de cada tipo, intercalados =====
const TIPOS = {
  test: { ic: '📚', n: 'Test de la unidad', pide: 'Responde bien para golpear:' },
  dil: { ic: '⚖️', n: 'Dilema moral', pide: '¿Cuál es tu mejor réplica?' },
  esp: { ic: '💼', n: 'Caso de tu profesión', pide: '¿Qué haces?' }
};
const POR_ASALTO = ['dil', 'test', 'esp', 'test', 'dil', 'esp'];
const TURNOS_ASALTO = POR_ASALTO.length, N_ASALTOS = ASALTOS.length;
function turnos(C){
  const casos = CASOS[C.casos], cuenta = { test: 0, dil: 0, esp: 0 }, l = [];
  for (let a = 0; a < N_ASALTOS; a++) for (const tipo of POR_ASALTO){
    const i = cuenta[tipo]++, d = tipo === 'test' ? TEST[i] : tipo === 'dil' ? DILEMAS[i] : casos[i];
    l.push({ tipo, a, t: d.t || '', q: d.q || TIPOS[tipo].pide, o: d.o, ex: d.ex });
  }
  return l;
}
const N_TURNOS = N_ASALTOS * TURNOS_ASALTO;
const PARA_GANAR = 20;   // aciertos para derrotar a NEXA (con 11 fallos caes tú: siempre gana uno de los dos)

// ===== estado =====
const C_ACT = () => CICLOS[ESP] || CICLOS[ORDEN[0]];
function pelea(){
  let o = null; try { o = JSON.parse(campo('pelea') || 'null'); } catch(e){}
  return { s: o && Number.isInteger(o.s) ? o.s : 0, r: o && o.r && typeof o.r === 'object' ? o.r : {} };
}
function ponPelea(p){
  const el = document.querySelector('input[data-campo="pelea"]'); if (!el) return;
  el.value = JSON.stringify(p); programarGuardado();
}
const respondido = (p, i) => Number.isInteger(p.r[i]);
const hechos = p => Object.keys(p.r).filter(k => Number.isInteger(p.r[k])).length;
const aciertos = (p, tipo, C) => { const T = turnos(C || C_ACT()); return T.filter((t, i) => (!tipo || t.tipo === tipo) && p.r[i] === 0).length; };
const fallos = p => hechos(p) - aciertos(p);
// orden de las opciones en pantalla: barajado con la semilla del alumno (siempre el mismo para él)
function orden(seed, i, n){
  let x = (seed ^ (i + 1) * 2654435761) >>> 0; const a = [...Array(n).keys()];
  for (let k = n - 1; k > 0; k--){ x = (x * 1103515245 + 12345) >>> 0; const j = x % (k + 1); [a[k], a[j]] = [a[j], a[k]]; }
  return a;
}
const vidaIA = p => Math.max(0, Math.round(100 - aciertos(p) * 100 / PARA_GANAR));
const vidaTu = p => Math.max(0, Math.round(100 - fallos(p) * 100 / (N_TURNOS - PARA_GANAR + 1)));


function introHTML(C){
  return `<h2 style="margin-top:0;font-size:1.1rem">Contexto</h2>
    <p>Vivimos un tiempo en el que las máquinas escriben poemas, reconocen caras y responden a cualquier pregunta. Pero, aunque la IA puede imitar el lenguaje humano, no siente, no duda, no sueña. El físico Max Tegmark se pregunta si una IA podrá llegar a «amar», y mucha gente teme que las personas del futuro aprendan más de las pantallas que de las miradas.</p>
    <p>En este ejercicio vas a defender lo humano frente a <b>NEXA</b>, una inteligencia artificial que evoluciona en cada asalto. Y después vas a pensar con calma, por escrito, qué te hace humano y qué papel tendrás tú en ${esc(C.sector)}.</p>
    <h2 style="font-size:1.1rem">Objetivo</h2><p>${esc(COMUN.objetivo)}</p>`;
}

function construirTarea(C){
  return `<section class="fase f1"><header><h2>Parte 1 · Humanos contra la IA</h2></header><div class="cuerpo">
      <input type="hidden" data-campo="pelea">
      <div id="hx"></div>
    </div></section>
    <section class="fase f2"><header><h2>Parte 2 · ¿Qué nos hace humanos?</h2></header><div class="cuerpo">
      <p>Ahora, sin prisas y con tus palabras. Escribe entre 4 y 6 líneas en cada respuesta y pon ejemplos propios.</p>
      ${caja('h1', '2.1', '¿Qué crees que diferencia a los seres humanos de los demás seres vivos? ¿Qué papel tienen las emociones, el lenguaje y la empatía en esa diferencia?')}
      ${caja('h2', '2.2', '¿Qué cualidades crees que definen lo humano y cuáles de ellas podría imitar una IA? ¿Qué cualidades consideras imposibles de replicar?')}
      ${caja('h3', '2.3', esc(`¿Por qué crees que esas cualidades son esenciales en ${C.sector}? ¿Qué papel ocuparás tú, como futuro/a ${C.prof}?`))}
      ${caja('h4', '2.4', 'Después de la pelea: ¿qué provocación o qué caso de NEXA te ha hecho pensar más? ¿Cambiarías ahora alguna de tus respuestas? ¿Por qué?', '<div class="pista">Si todavía no has terminado la pelea, déjala para el final.</div>')}
    </div></section>`;
}

// ===== la pelea en pantalla: un videojuego de combate por turnos (ver _fuente/UT4_SP_juego.js) =====
const notaPelea = p => Math.round(aciertos(p) * 6 / N_TURNOS * 100) / 100;
// Nota automática de la pelea, sobre 10 (va con la entrega y el profesor la ve en el Excel del panel)
function notaEntrega(){ return Math.round(aciertos(pelea()) / N_TURNOS * 100) / 10; }
/*__INCLUYE:UT4_SP_juego__*/
function alActualizar(){ gSync(); }

// ===== PDF =====
async function pdfTarea(api, C){
  const { banda, P, texto, caja, separador, sitio, COL } = api, p = pelea(), T = turnos(C), n = hechos(p);
  banda('Parte 1 · Humanos contra la IA', [226,238,252], COL.sky);
  const gana = n >= N_TURNOS ? (aciertos(p) >= PARA_GANAR ? 'Victoria de la humanidad' : 'Victoria de NEXA') : `Pelea sin terminar (${n} de ${N_TURNOS} turnos)`;
  P(`${gana} · ${aciertos(p)} aciertos de ${N_TURNOS} · ${String(notaPelea(p)).replace('.', ',')} de 6 puntos (nota de la pelea: ${String(notaEntrega()).replace('.', ',')} sobre 10)`, { size: 11, b: true, color: COL.sky, tras: 2 });
  for (const [tipo, nom] of [['test', 'Test de la unidad'], ['dil', 'Dilemas morales'], ['esp', 'Casos de tu profesión']])
    texto([{ t: nom + ': ', b: true }, { t: `${aciertos(p, tipo)} de 10 aciertos · ${String(Math.round(aciertos(p, tipo) * 0.2 * 100) / 100).replace('.', ',')} de 2 puntos` }], { size: 10, sang: 3, marca: '·' });
  separador();
  for (let a = 0; a < N_ASALTOS; a++){
    sitio(24); P(`Asalto ${a + 1} · ${ASALTOS[a].n}`, { size: 10.5, b: true, color: COL.sky, tras: 1.5 });
    for (let k = 0; k < TURNOS_ASALTO; k++){
      const i = a * TURNOS_ASALTO + k, t = T[i], r = p.r[i];
      const pre = (t.t ? '«' + t.t + '» ' : '') + (t.tipo === 'test' ? t.q : '');
      texto([{ t: `${TIPOS[t.tipo].n}: `, b: true }, { t: pre }], { size: 9, sang: 3, marca: (i + 1) + '.', tras: .3 });
      texto([{ t: Number.isInteger(r) ? (r === 0 ? 'Bien: ' : 'Mal: ') : 'Sin responder', b: true }, { t: Number.isInteger(r) ? t.o[r] : '' }], { size: 9, sang: 9, color: Number.isInteger(r) ? (r === 0 ? COL.mint : [163,60,88]) : COL.muted, tras: 1 });
    }
  }
  banda('Parte 2 · ¿Qué nos hace humanos?', [233,226,251], COL.lav);
  await caja('h1', '2.1', 'Qué nos diferencia de los demás seres vivos: emociones, lenguaje y empatía');
  await caja('h2', '2.2', 'Qué cualidades humanas podría imitar una IA y cuáles no');
  await caja('h3', '2.3', `Por qué son esenciales en ${C.sector} y qué papel tendrás tú`);
  await caja('h4', '2.4', 'Después de la pelea: qué te ha hecho pensar más');
}

// ===== Antes de entregar =====
function listaChecks(C){
  const n = hechos(pelea()), h = cuentaLlenas(['h1', 'h2', 'h3', 'h4']);
  return [
    { ok: n >= N_TURNOS, t: 'Parte 1 · La pelea contra NEXA (puntúa)', cuenta: `${n}/${N_TURNOS} turnos`, falta: 'Termina los 5 asaltos de la pelea.' },
    { ok: h === 4, t: 'Parte 2 · ¿Qué nos hace humanos?', cuenta: `${h}/4`, falta: 'Responde a las 4 preguntas de la Parte 2.' }
  ];
}
function progresoPropio(){
  const eds = [...document.querySelectorAll('.ed')], ll = eds.filter(tieneContenido).length;
  const total = N_TURNOS + eds.length, hechas = Math.min(N_TURNOS, hechos(pelea())) + ll;
  return { hechas, total, texto: `${Math.round(hechas / total * 100)} % del ejercicio hecho` };
}

// ===== Ejemplo relleno (solo texto de muestra; la pelea, entera y bien) =====
function ejemploCampos(){ return { pelea: JSON.stringify({ s: 12345, r: Object.fromEntries([...Array(N_TURNOS).keys()].map(i => [i, 0])) }) }; }
function ejemploRespuesta(id){
  if (/^h\d$/.test(id)) return '<p>[Texto de muestra] Tu respuesta, con tus palabras, con un ejemplo propio y pensando en tu profesión.</p>';
  if (id === 'fuentes') return '<ul><li>[Fuente: título · web o institución · fecha · enlace] o «No he consultado fuentes».</li></ul><p>Uso de IA: [herramienta, para qué la usaste y cómo comprobaste su contenido] o «No he usado IA».</p>';
  return '';
}

// ===== No se puede copiar el texto del ejercicio (sí dentro de las respuestas del alumno) =====
document.head.insertAdjacentHTML('beforeend', `<style>
body{-webkit-user-select:none;user-select:none;-webkit-touch-callout:none}
.ed,.ed *,input,textarea,select{-webkit-user-select:text;user-select:text;-webkit-touch-callout:default}
@media print{body{display:none}}
</style>`);
{ const propio = e => !!(e.target && e.target.closest && e.target.closest('.ed, input, textarea'));
  for (const ev of ['copy', 'cut', 'contextmenu', 'selectstart'])
    document.addEventListener(ev, e => { if (!propio(e)) { e.preventDefault(); if (ev === 'copy' || ev === 'cut') aviso('El texto de este ejercicio no se puede copiar.'); } }, true);
  document.addEventListener('dragstart', e => { if (!propio(e)) e.preventDefault(); }, true);
  document.addEventListener('keydown', e => { if ((e.ctrlKey || e.metaKey) && !e.altKey && ['a', 'c', 'x', 'p', 's', 'u'].includes(String(e.key).toLowerCase()) && !propio(e)) e.preventDefault(); }, true); }

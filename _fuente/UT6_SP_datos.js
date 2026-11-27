// ===== UT6_SP · datos: empresa propuesta por especialidad, bancos de tecnologías, organigrama, robot, datos y plan B =====
// Se incluye en UT6_SP.js con la marca INCLUYE. Los precios son ORIENTATIVOS (para practicar un presupuesto), no ofertas reales.

// Bancos comunes ---------------------------------------------------------------------------------------------
// Tecnologías analógicas: [id, icono, nombre, pista del problema que suele dar]
const ANALOG_COMUN = [
  ['a_archivador', '🗄️', 'Archivador de expedientes en papel', 'Ocupa sitio, se pierden papeles y solo se consulta estando allí.'],
  ['a_agenda', '📒', 'Agenda de citas en papel', 'Citas duplicadas o tachadas; nadie más puede verla a la vez.'],
  ['a_tablon', '📌', 'Tablón de corcho con avisos', 'Solo lo lee quien pasa por delante; los avisos se quedan viejos.'],
  ['a_telefono', '☎️', 'Teléfono fijo', 'Si comunica o no hay nadie, la llamada se pierde.'],
  ['a_fax', '📠', 'Fax', 'Lento, gasta papel y casi nadie lo usa ya.'],
  ['a_registro', '📕', 'Libro de registro de entradas y salidas', 'Difícil de buscar y de copiar; letra ilegible.'],
  ['a_buzon', '📮', 'Buzón de sugerencias', 'Pocas personas lo usan y las respuestas tardan.'],
  ['a_fichaje', '🕰️', 'Hoja de firmas para fichar', 'Se olvida firmar y es fácil de falsear.'],
  ['a_pizarra', '🖊️', 'Pizarra con turnos y tareas', 'Se borra, solo se ve en el local y no avisa de los cambios.'],
  ['a_recibos', '🧾', 'Recibos y facturas en papel', 'Errores al sumar, papeles perdidos y cobro lento.'],
  ['a_llaves', '🔑', 'Llavero con todas las llaves', 'Si se pierde, hay que cambiar cerraduras; no se sabe quién entró.'],
  ['a_correo', '✉️', 'Cartas por correo postal', 'Tardan días, cuestan dinero y no se sabe si llegan.'],
  ['a_inventario', '📋', 'Inventario de material en papel', 'Nunca está al día: se descubre que falta algo cuando hace falta.'],
  ['a_album', '📷', 'Álbum de fotos impreso', 'Hay que imprimir y repartir; no se controla quién ve las fotos.']
];
// Tecnologías habilitadoras: [id, icono, nombre, para qué sirve, coste inicial €, coste mensual €, ids analógicos a los que sustituye mejor]
const DIGITAL_COMUN = [
  ['d_nube', '☁️', 'Nube con archivos compartidos', 'Guardar y compartir documentos desde cualquier sitio, con permisos y copias.', 0, 60, ['a_archivador', 'a_registro', 'a_album']],
  ['d_gestion', '🗂️', 'Programa de gestión (ERP/CRM)', 'Llevar en un solo programa personas usuarias, citas, facturas y expedientes.', 600, 45, ['a_archivador', 'a_registro', 'a_recibos']],
  ['d_citas', '📅', 'Citas online con recordatorio', 'Que cada persona pida y cambie su cita, con aviso automático.', 0, 25, ['a_agenda', 'a_telefono']],
  ['d_chatbot', '💬', 'Chatbot o asistente virtual', 'Responder las preguntas repetitivas a cualquier hora.', 500, 30, ['a_telefono', 'a_buzon']],
  ['d_mensajeria', '📱', 'Mensajería y avisos por app', 'Mandar avisos al momento al equipo o a las familias y personas usuarias.', 0, 15, ['a_tablon', 'a_pizarra', 'a_correo']],
  ['d_fichaje', '🪪', 'Fichaje digital (tarjeta o app)', 'Registrar la jornada de forma fiable, como exige la ley.', 200, 15, ['a_fichaje']],
  ['d_firma', '✍️', 'Firma electrónica', 'Firmar contratos, autorizaciones y consentimientos sin papel.', 0, 15, ['a_correo', 'a_fax']],
  ['d_iot', '📡', 'Sensores IoT', 'Medir temperatura, presencia o consumo y avisar solos si algo va mal.', 400, 10, ['a_inventario']],
  ['d_cerradura', '🔐', 'Cerradura electrónica con tarjeta', 'Abrir con tarjeta o móvil y saber quién entra y cuándo.', 350, 0, ['a_llaves']],
  ['d_pantalla', '🖥️', 'Pantalla de avisos digital', 'Mostrar avisos y turnos que se cambian desde el ordenador.', 400, 5, ['a_tablon', 'a_pizarra']],
  ['d_factura', '💳', 'Facturación electrónica y pago con móvil', 'Cobrar y facturar sin papel, con las cuentas al día.', 100, 20, ['a_recibos']],
  ['d_datos', '📊', 'Panel de datos (Big Data)', 'Ver con gráficos cómo va el servicio y decidir con datos.', 0, 30, ['a_registro', 'a_buzon']],
  ['d_ia', '🧠', 'IA que resume y clasifica documentos', 'Ahorrar tiempo en tareas repetitivas de papeleo (siempre revisado por una persona).', 0, 25, ['a_archivador', 'a_registro']],
  ['d_video', '🎥', 'Videollamadas', 'Reunirse o atender a distancia sin desplazamientos.', 0, 10, ['a_telefono', 'a_correo']],
  ['d_gps', '🛰️', 'Localización GPS (GNSS)', 'Saber dónde está cada vehículo o equipo en el momento.', 150, 10, []],
  ['d_qr', '🏷️', 'Inventario con códigos QR', 'Saber qué material hay y dónde, escaneando con el móvil.', 50, 10, ['a_inventario']],
  ['d_formularios', '📝', 'Formularios online', 'Recoger inscripciones, encuestas y sugerencias sin papel.', 0, 0, ['a_buzon', 'a_registro']],
  ['d_web', '🌐', 'Web y redes sociales', 'Dar a conocer el servicio e informar a todo el mundo.', 600, 15, ['a_tablon', 'a_correo']]
];
// Ámbitos de la empresa (del ejercicio del curso pasado)
const AMBITOS = [
  ['comint', 'Comunicación interna'], ['comcli', 'Comunicación con clientes o personas usuarias'], ['registro', 'Registro y archivo de información'],
  ['atencion', 'Atención al cliente o a la persona usuaria'], ['coord', 'Coordinación del día a día'], ['servicio', 'Prestación del servicio'],
  ['admin', 'Administración y cobros'], ['seguridad', 'Seguridad del local y del material']
];
// Robots que se pueden «contratar» (precio orientativo de alquiler mensual) y sus capacidades
const ROBOTS = [
  ['asistente', '💬', 'Asistente virtual', 'No tiene cuerpo: vive en el ordenador o en el móvil y atiende por voz o por texto.', 50],
  ['autonomo', '🛞', 'Robot de servicio autónomo', 'Se mueve solo por el local, lleva cosas y evita obstáculos.', 400],
  ['cobot', '🦾', 'Robot colaborativo (cobot)', 'Un brazo que trabaja junto a las personas en tareas repetitivas o pesadas.', 600],
  ['humanoide', '🤖', 'Robot humanoide', 'Con forma humana: recibe, acompaña y conversa con las personas.', 1200]
];
const PIEZAS = [
  ['p_vision', '👁️', 'Cámara con visión artificial'], ['p_voz', '🎤', 'Micrófono con reconocimiento de voz'], ['p_altavoz', '🔊', 'Altavoz'],
  ['p_pantalla', '📲', 'Pantalla táctil'], ['p_obstaculos', '📶', 'Sensores de obstáculos'], ['p_pinza', '🤏', 'Brazo con pinza'],
  ['p_bandeja', '🛒', 'Bandeja para llevar cosas'], ['p_nube', '☁️', 'Conexión a la nube'], ['p_ia', '🧠', 'Inteligencia artificial'],
  ['p_gps', '🛰️', 'Localización GPS'], ['p_termica', '🌡️', 'Cámara térmica'], ['p_traduccion', '🌍', 'Traducción simultánea']
];
// Plan B (contingencia) ante una caída del sistema o un ciberataque
const PLAN_B = [
  ['copias', 'Copias de seguridad automáticas en otro lugar (regla 3-2-1)'], ['dospasos', 'Verificación en dos pasos en todas las cuentas'],
  ['papel', 'Protocolo en papel para seguir atendiendo si cae el sistema'], ['formacion', 'Formación del personal en ciberseguridad (contraseñas, correos falsos)'],
  ['actualiza', 'Actualizaciones automáticas y antivirus en todos los equipos'], ['permisos', 'Cada persona solo accede a lo que necesita para su trabajo'],
  ['responsable', 'Una persona responsable de avisar y coordinar si hay un incidente'], ['proveedor', 'Contrato de soporte con el proveedor (tiempo de respuesta)'],
  ['sai', 'SAI y conexión de respaldo (datos del móvil) si se va la luz o Internet']
];
const DONDE = [['nube', 'En la nube, con permisos'], ['gestion', 'En el programa de gestión'], ['local', 'En un ordenador del local'], ['papel', 'En papel, bajo llave']];
const QUIEN = [['todos', 'Toda la plantilla'], ['equipo', 'Solo el equipo que la atiende'], ['direccion', 'Solo la dirección'], ['persona', 'Solo la propia persona y quien la atiende']];

// Empresa propuesta por especialidad -----------------------------------------------------------------------------
// salas: [id, nombre]; analog / digital: extras propios; roles: [id, icono, puesto, nivel 1-3]; datos: datos personales que maneja
const ESPECIALIDAD = {
  ei: {
    prof: 'Técnico Superior en Educación Infantil',
    tipo: 'Escuela infantil', ejemploNombre: 'Escuela infantil «Pequeños Pasos»',
    empresa: 'una escuela infantil de 0 a 3 años con 4 aulas, comedor y patio, que hoy funciona casi todo en papel',
    clientes: 'familias con niños y niñas de 0 a 3 años',
    salas: [['recepcion', 'Recepción'], ['aula', 'Aula'], ['despacho', 'Despacho de dirección'], ['patio', 'Patio y comedor']],
    analog: [['a_diario', '📓', 'Hoja diaria de comidas, siestas y pañales', 'Las familias no la ven hasta la tarde y se pierden hojas.'],
             ['a_circular', '📄', 'Circulares en papel para las familias', 'Se quedan en la mochila y no llegan a casa.']],
    digital: [['d_agenda_fam', '👪', 'Agenda digital con las familias', 'Contar a las familias en el momento comidas, siesta y actividades.', 0, 40, ['a_diario', 'a_circular']],
              ['d_vigila', '👶', 'Vigilabebés con sensor de respiración', 'Vigilar el sueño de los bebés en la siesta y avisar si algo va mal.', 300, 0, []]],
    roles: [['dir', '👩‍💼', 'Dirección', 1], ['coordped', '🧑‍🏫', 'Coordinación pedagógica', 2], ['admin', '🗂️', 'Administración', 2],
            ['tutora', '👩‍🏫', 'Técnico/a en Educación Infantil (tutor/a)', 3], ['apoyo', '🧸', 'Educador/a de apoyo', 3], ['cocina', '🍲', 'Cocina', 3],
            ['limpieza', '🧹', 'Limpieza', 3], ['conserje', '🔧', 'Mantenimiento', 3]],
    datos: [['nombre', 'Nombre y apellidos de niños, niñas y familias'], ['salud', 'Alergias, salud y medicación'], ['imagen', 'Fotos y vídeos de los niños y las niñas'],
            ['contacto', 'Teléfonos y direcciones'], ['banco', 'Datos bancarios para el pago'], ['autorizados', 'Personas autorizadas a recoger'], ['desarrollo', 'Informes de desarrollo']]
  },
  is: {
    prof: 'Técnico Superior en Integración Social',
    tipo: 'Centro de día', ejemploNombre: 'Centro de día «Nuevo Horizonte»',
    empresa: 'un centro de día para personas mayores y con diversidad funcional, con sala de actividades, comedor y talleres, que hoy funciona casi todo en papel',
    clientes: 'personas mayores o con diversidad funcional y sus familias',
    salas: [['recepcion', 'Recepción'], ['actividades', 'Sala de actividades'], ['despacho', 'Despacho'], ['comedor', 'Comedor y jardín']],
    analog: [['a_historia', '📁', 'Historia social en carpeta de papel', 'Solo una persona puede consultarla a la vez y se desordena.'],
             ['a_medicacion', '💊', 'Hoja de medicación y pastillero manual', 'Riesgo de olvidos o de dar una dosis equivocada.']],
    digital: [['d_historia', '🗃️', 'Historia social digital', 'Registrar la evolución y el plan de atención de cada persona.', 300, 30, ['a_historia', 'a_archivador']],
              ['d_teleasist', '🆘', 'Pulsera de teleasistencia', 'Pedir ayuda con un botón y avisar si la persona se cae.', 0, 25, []],
              ['d_pastillero', '⏰', 'Pastillero inteligente', 'Recordar la medicación a su hora y avisar si no se toma.', 120, 0, ['a_medicacion']]],
    roles: [['dir', '👩‍💼', 'Dirección', 1], ['coordtec', '🧑‍💼', 'Coordinación técnica', 2], ['admin', '🗂️', 'Administración', 2],
            ['integrador', '🤝', 'Técnico/a en Integración Social', 3], ['social', '📋', 'Trabajador/a social', 3], ['auxiliar', '🧑‍⚕️', 'Auxiliar de atención', 3],
            ['terapeuta', '🧩', 'Terapeuta ocupacional', 3], ['cocina', '🍲', 'Cocina', 3], ['limpieza', '🧹', 'Limpieza', 3]],
    datos: [['nombre', 'Nombre y apellidos de las personas usuarias'], ['salud', 'Diagnósticos, salud y medicación'], ['social', 'Situación social y familiar'],
            ['contacto', 'Teléfonos y direcciones'], ['banco', 'Datos bancarios para el pago'], ['imagen', 'Fotos de las actividades'], ['dni', 'DNI y tarjeta sanitaria']]
  },
  mc: {
    prof: 'Técnico Superior en Mediación Comunicativa',
    tipo: 'Servicio de mediación comunicativa', ejemploNombre: 'Servicio de mediación «Manos que Hablan»',
    empresa: 'un servicio de mediación comunicativa e interpretación para personas sordas, sordociegas o con dificultades de comunicación, que hoy se organiza casi todo en papel y por teléfono',
    clientes: 'personas sordas, sordociegas o con dificultades de comunicación, sus familias y las entidades que las atienden',
    salas: [['recepcion', 'Recepción'], ['atencion', 'Sala de atención'], ['despacho', 'Despacho'], ['formacion', 'Aula de formación']],
    analog: [['a_solicitud', '📠', 'Solicitudes de servicio por fax o en mano', 'Lentas y poco accesibles para las propias personas sordas.'],
             ['a_timbre', '🔔', 'Timbre y avisos solo sonoros', 'Una persona sorda no se entera del turno ni de una alarma.']],
    digital: [['d_videoint', '🤟', 'Videointerpretación en lengua de signos', 'Conectar por vídeo con un intérprete a distancia.', 0, 40, ['a_telefono', 'a_solicitud']],
              ['d_avisos_luz', '💡', 'Avisos luminosos y vibratorios', 'Avisar del turno o de una alarma sin depender del sonido.', 250, 0, ['a_timbre']],
              ['d_subtitulos', '🔤', 'Subtitulado en directo', 'Convertir en texto lo que se dice en una charla o una reunión.', 0, 30, []]],
    roles: [['dir', '👩‍💼', 'Dirección', 1], ['coord', '🧑‍💼', 'Coordinación de servicios', 2], ['admin', '🗂️', 'Administración', 2],
            ['mediador', '🤟', 'Técnico/a en Mediación Comunicativa', 3], ['interprete', '🗣️', 'Intérprete de lengua de signos', 3], ['guia', '🦯', 'Guía-intérprete para personas sordociegas', 3],
            ['formador', '🧑‍🏫', 'Formador/a de lengua de signos', 3], ['limpieza', '🧹', 'Limpieza', 3]],
    datos: [['nombre', 'Nombre y apellidos de las personas usuarias'], ['discapacidad', 'Tipo de discapacidad y forma de comunicarse'], ['salud', 'Citas médicas y de servicios a las que se acompaña'],
            ['contacto', 'Teléfonos, correos y direcciones'], ['video', 'Grabaciones de vídeo en lengua de signos'], ['dni', 'DNI y certificado de discapacidad'], ['banco', 'Datos bancarios']]
  },
  ce: {
    prof: 'Técnico Superior en Coordinación de Emergencias y Protección Civil',
    tipo: 'Agrupación de protección civil', ejemploNombre: 'Agrupación de Protección Civil de «Villa del Mar»',
    empresa: 'la agrupación de voluntariado de protección civil de un municipio, con oficina, sala de radio, almacén de material y garaje, que hoy se organiza casi todo en papel y por radio analógica',
    clientes: 'la población del municipio, el ayuntamiento y los servicios de emergencia (112, bomberos, sanitarios)',
    salas: [['oficina', 'Oficina'], ['radio', 'Sala de radio y coordinación'], ['almacen', 'Almacén de material'], ['garaje', 'Garaje de vehículos']],
    analog: [['a_walkie', '📻', 'Walkie-talkies analógicos', 'Mala cobertura, cualquiera puede escuchar y no queda registro.'],
             ['a_mapa', '🗺️', 'Mapa de papel con chinchetas', 'No se actualiza solo: nadie sabe dónde está cada equipo en realidad.'],
             ['a_turnos', '📆', 'Cuadrante de turnos del voluntariado en papel', 'Cambios de última hora que no llegan a todo el mundo.']],
    digital: [['d_radio', '📡', 'Radio digital de emergencias', 'Comunicaciones seguras y cifradas entre todos los equipos.', 1200, 20, ['a_walkie']],
              ['d_mapa', '🗺️', 'Mapa digital con la posición de los equipos', 'Ver en tiempo real dónde está cada vehículo y cada equipo.', 0, 30, ['a_mapa']],
              ['d_avisos', '📢', 'Avisos masivos a la población', 'Mandar alertas a los móviles de una zona en peligro.', 0, 50, ['a_tablon', 'a_correo']],
              ['d_dron', '🚁', 'Dron con cámara', 'Ver una zona de difícil acceso o buscar a personas desde el aire.', 2500, 0, []],
              ['d_turnos', '📲', 'App de turnos del voluntariado', 'Organizar turnos y disponibilidad con avisos al momento.', 0, 15, ['a_turnos', 'a_pizarra']]],
    roles: [['jefe', '👨‍✈️', 'Jefatura de la agrupación', 1], ['jefeop', '🧭', 'Jefatura de operaciones', 2], ['admin', '🗂️', 'Administración y logística', 2],
            ['coordinador', '🎧', 'Técnico/a en Coordinación de Emergencias (sala)', 3], ['equipo', '🦺', 'Jefatura de equipo de intervención', 3], ['voluntario', '🙋', 'Voluntariado de intervención', 3],
            ['conductor', '🚒', 'Conducción de vehículos', 3], ['formador', '🧑‍🏫', 'Formación y simulacros', 3]],
    datos: [['nombre', 'Nombre y apellidos del voluntariado'], ['contacto', 'Teléfonos y direcciones del voluntariado'], ['salud', 'Aptitud médica y vacunas del voluntariado'],
            ['afectados', 'Datos de las personas afectadas en una emergencia'], ['ubicacion', 'Ubicación de equipos y vehículos'], ['imagen', 'Fotos y vídeos de intervenciones'], ['dni', 'DNI y permisos de conducir']]
  }
};

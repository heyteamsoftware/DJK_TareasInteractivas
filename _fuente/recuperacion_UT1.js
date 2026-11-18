// Recuperaciones · UT1_SP: contenido propio de Coordinación de Emergencias y Protección Civil (CFGS).
// Se basa en el centro coordinador de emergencias 112 (CECOES 112 Canarias) y en los servicios que coordina.
// Lo usa _fuente/remix_UT1_SP.js. «Recuperación Integración Social» no está aquí: copia el contenido de IS SP.
module.exports = {
  nombre: 'Recuperación Coordinación de Emergencias y Protección Civil',
  // Bloque 1 (de UT1_E1)
  centro: 'Céntrate en el centro coordinador de emergencias 112 de Canarias (CECOES 112) y en los servicios que coordina: bomberos, emergencias sanitarias, protección civil, salvamento y seguridad.',
  pistas: 'recepción y clasificación de las llamadas al 112, localización de quien llama, movilización y seguimiento de los recursos, comunicaciones por radio, planes de emergencia y de autoprotección, avisos a la población, simulacros.',
  // Bloque 2 (de UT1_E2)
  usuario: 'una persona afectada por una emergencia o un compañero del equipo que interviene en ella',
  // Bloque 3 (de UT1_E3)
  contexto: 'La coordinación de emergencias y la protección civil están viviendo una profunda transformación digital. Los sistemas ciberfísicos (dispositivos físicos conectados y controlados digitalmente, como los drones, las redes de sensores que vigilan el territorio o los equipos que localizan a los intervinientes) y las herramientas de gestión digital permiten detectar antes una emergencia, decidir mejor y proteger a quienes intervienen. Sin embargo, también plantean grandes retos: depender de la tecnología cuando fallan la luz o las comunicaciones, la privacidad de los datos de quien pide ayuda, las falsas alarmas y que la decisión final siga siendo de las personas.',
  objetivo: 'Vamos a incorporar en nuestro «Centro Coordinador de Emergencias 112» sistemas ciberfísicos y herramientas digitales, justificando su uso desde el punto de vista de la rapidez de la respuesta, la seguridad de la población y de los intervinientes, la organización del servicio y la ética.',
  f1: {
    intro: 'Busca productos reales de los siguientes tipos de sistemas para integrar en el servicio (orientados a la coordinación de emergencias y a la protección civil):',
    items: [
      'Drones para reconocer la zona, buscar personas o vigilar incendios',
      'Redes de sensores de alerta temprana (incendios forestales, barrancos, calidad del aire, volcanes)',
      'Localización y seguimiento de los intervinientes y de los vehículos de emergencia',
      'Sistemas de aviso masivo a la población (mensajes al móvil, sirenas conectadas)',
      'Otro de tu elección'
    ],
    instr: 'Adjunta capturas o enlaces de los productos, justifica su uso en la coordinación de emergencias (beneficios para la población y para los intervinientes) y explica cómo se aplicarían en el día a día del servicio.'
  },
  f2: {
    intro: 'Redacta un documento de «Preguntas Frecuentes» dirigido a la ciudadanía, al voluntariado de protección civil y a los profesionales con los que se coordina el servicio, donde des una respuesta argumentada, profesional y tranquilizadora a estas objeciones:',
    grupos: [
      { t: 'Sobre los drones', q: [
        { p: 'Si un dron sobrevuela mi barrio o mi finca durante una emergencia, ¿me está grabando? ¿Quién ve esas imágenes y qué se hace después con ellas?', ej: '«El dron se usa solo durante la emergencia para localizar a las personas y ver por dónde avanza el fuego; las imágenes se guardan el tiempo que marca la ley y solo las ve el personal del servicio».' },
        { p: '¿Un dron va a sustituir a los equipos que buscan a una persona desaparecida sobre el terreno?' }
      ]},
      { t: 'Sobre los sensores de alerta temprana', q: [
        { p: 'Si un sensor da una falsa alarma y se moviliza a medio servicio para nada, ¿no acabaremos por no hacer caso a los avisos?' },
        { p: 'Si el sensor se queda sin batería o sin cobertura en pleno monte, ¿quién se entera de que ha dejado de vigilar?' }
      ]},
      { t: 'Sobre la localización de intervinientes y vehículos', q: [
        { p: 'Como interviniente o voluntario, ¿llevar un localizador significa que me controlan cada minuto? ¿Se puede usar ese registro para sancionarme?' },
        { p: 'Si la sala ve en un mapa dónde está cada recurso, ¿quién decide cuál se envía: la persona que coordina o el programa?' }
      ]},
      { t: 'Sobre los avisos masivos a la población', q: [
        { p: 'Me ha llegado al móvil un aviso de emergencia sin haber dado mi número. ¿Cómo lo han conseguido y qué saben de mí?' },
        { p: '¿Qué pasa con las personas mayores, las que no tienen móvil o las que no entienden el idioma del aviso?' }
      ]},
      { t: 'Transversales (datos, fallos y decisiones)', q: [
        { p: 'Las llamadas al 112 se graban y se localizan. ¿Quién guarda esos datos, durante cuánto tiempo y quién puede escucharlas?' },
        { p: 'Si se cae la luz, internet o la telefonía durante una gran emergencia, ¿cómo sigue funcionando el servicio?' }
      ]}
    ]
  },
  siglas: [
    ['CECOES', 'Centro Coordinador de Emergencias y Seguridad (112 Canarias)'],
    ['GPS', 'Sistema de posicionamiento global (Global Positioning System)'],
    ['IoT', 'Internet de las cosas (Internet of Things)'],
    ['RGPD', 'Reglamento General de Protección de Datos'],
    ['ES-Alert', 'Sistema de avisos de emergencia a los móviles de la población']
  ]
};

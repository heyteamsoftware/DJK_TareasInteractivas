# Ejercicios Interactivos · DJK

| Dato | Valor |
|---|---|
| Asignatura | Digitalización aplicada a los sectores productivos (DJK) |
| Organización | Una carpeta por unidad (`UT1` … `UT5`) + carpeta `SEMI` con el ejercicio único de cada unidad para semipresencial |
| Nombre de archivo | `UTn_Em_Titulo_Corto.html` (un HTML por ejercicio) + `UTn_Em_EJEMPLO_relleno.html` |
| Código fuente | `_fuente/`: piezas comunes + un archivo de datos por ejercicio. Se genera con `node _fuente/construir.js` |
| Skill | `_skill/djk-creador-tareas/SKILL.md` (actualizada con las normas 1–20). Para que sea permanente hay que subir `_skill/djk-creador-tareas.zip` en claude.ai → Skills. |
| Repositorio | https://github.com/heyteamsoftware/DJK_TareasInteractivas |
| Acceso del alumnado | Solo por el enlace directo de cada ejercicio (el que se pone en el aula virtual). No hay portada pública. |
| Servidor | CIFP Tony Gallardo · Apache · `/var/www/html/DJK/DJK_EjerciciosInteractivos` (usuario `ubuntu`, clave en `Documentos\Oracle`) |
| Lista de ejercicios | Dentro de la administración: por unidad y con su color, con «Abrir», «Ejemplo» y «Copiar enlace» · `.htaccess` desactiva el listado de carpetas |
| Analítica | `api/visitas.php` (anónima, sin cookies) · base de datos en `/var/www/djk_datos/visitas.db`, fuera de la web · panel en `estadisticas.html` (no enlazado, sin indexar) |
| Administración | https://myappsserver.duckdns.org/DJK/DJK_EjerciciosInteractivos/ (dirección principal; la antigua `/admin/` redirige aquí) · solo contraseña (guardada cifrada en `/var/www/djk_datos/admin.json`) |

## Registro de ejercicios

| Código | Título | RA | CE | Ciclos | Modelo | Archivo | Ejemplo | Criterios unificados | Checks | Estado |
|---|---|---|---|---|---|---|---|---|---|---|
| UT1_E1 | Revoluciones industriales canarias y quinta revolución industrial | RA1 | a, b | AF, AS, EI, HB, IS + EI SP, IS SP, MC SP | A | [UT1_E1](UT1/UT1_E1_Revoluciones_Industriales_Canarias.html) | [Ejemplo](UT1/UT1_E1_EJEMPLO_relleno.html) | Sí | Sí | Hecho |
| UT1_E2 | Combinación de sistemas ciberfísicos | RA1 | e, f, g | AF, AS, EI, HB, IS + EI SP, IS SP, MC SP | A (bocadillos + diapositivas) | [UT1_E2](UT1/UT1_E2_Combinacion_Sistemas_Ciberfisicos.html) | [Ejemplo](UT1/UT1_E2_EJEMPLO_relleno.html) | Sí (4·2·2·1·1) | Sí | Hecho |
| UT1_E3 | Sistemas ciberfísicos y digitalización del sector | RA1 | c, d, e, f | AF, AS, EI, HB, IS + EI SP, IS SP, MC SP | A | [UT1_E3](UT1/UT1_E3_Digitalizacion_Sistemas_CiberFisicos.html) | [Ejemplo](UT1/UT1_E3_EJEMPLO_relleno.html) | Sí | Sí | Hecho |
| UT1_SP | Digitalización de los sectores productivos (semipresencial: reúne E1, E2 y E3 en versión corta) | RA1 | a, b, c, d, e, f, g | Solo EI SP, IS SP y MC SP | A (remix) | [UT1_SP](SEMI/UT1_SP_Digitalizacion_Sectores_Productivos.html) | [Ejemplo](SEMI/UT1_SP_EJEMPLO_relleno.html) | Sí (3·1,5·2·2·1,5) | Sí | Hecho |
| UT2_E1 | Parejas de tecnologías y su uso en tu profesión (juego + escritura) | RA2 | a | AF, AS, EI, HB, IS + EI SP, IS SP, MC SP | C (juego en el motor común) | [UT2_E1](UT2/UT2_E1_Parejas_Tecnologias_Habilitadoras.html) | [Ejemplo](UT2/UT2_E1_EJEMPLO_relleno.html) | Sí (5 rondas × 2) | Sí | Hecho |
| UT2_E2 | Diseñad vuestro robot (trabajo en grupo; se entrega la presentación de Canva) | RA2 | b, g | AF, AS, EI, HB, IS | C (constructor por piezas en el motor común) | [UT2_E2](UT2/UT2_E2_Disenad_Vuestro_Robot.html) | [Ejemplo](UT2/UT2_E2_EJEMPLO_relleno.html) | Sí (3·3·2·2) | Sí | Hecho |
| UT2_E3 | Diseña tu app de realidad virtual o mixta (tras probar las gafas en clase) | RA2 | b, d, g | AF, AS, EI, HB, IS | C (juego + constructor en el motor común) | [UT2_E3](UT2/UT2_E3_App_Realidad_Virtual_Mixta.html) | [Ejemplo](UT2/UT2_E3_EJEMPLO_relleno.html) | Sí (1,5·1·3,5·1,5·2,5) | Sí | Hecho (sustituye al Word «Informe técnico») |
| UT2_E4 | Tecnologías habilitadoras en tu centro (plano) | RA2 | a, c, d, e | Los 8 · plano y banco de 20 adaptados a cada especialidad | B | [UT2_E4](UT2/UT2_E4_Tecnologias_Habilitadoras.html) | `?ejemplo` | Sí (otro reparto) | Sí (original) | Hecho (antes era UT2_E1 y después UT2_E2) |

## Ciclos

| Sigla | Ciclo |
|---|---|
| AF | Acondicionamiento Físico |
| AS | Animación Sociodeportiva |
| EI | Educación Infantil |
| HB | Higiene Bucodental |
| IS | Integración Social |
| EI SP | Educación Infantil Semipresencial · mismo contenido que EI · trabajo individual |
| IS SP | Integración Social Semipresencial · mismo contenido que IS · trabajo individual |
| MC SP | Mediación Comunicativa Semipresencial · contenido propio (personas sordas, sordociegas o con dificultades de comunicación) · trabajo individual |

## Modelos de ejercicio

| Rasgo | A · Proyecto por partes con variante por ciclo (UT1_E1, UT1_E3) | B · Actividad visual con plano (UT2_E4) |
|---|---|---|
| Idea | Partes o fases con cajas de respuesta | Elegir 10 de 50 tecnologías y colocarlas en un plano de 4 espacios adaptado a la especialidad (ver «Planos de UT2_E4»), mínimo 2 por espacio |
| Inicio | Nombre, Apellidos y Ciclo a elegir (5 opciones) | Nombre, Apellidos y Ciclo a elegir (5 opciones) |
| Estructura | Inicio: RA + nombre, apellidos y ciclo · Ejercicio: Objetivo y criterios → Qué tienes que hacer (checks) → Partes → Fuentes e IA → Antes de entregar, comprueba → Entrega → Abreviaturas | Enunciado (checks) → Banco de tecnologías → Plano → Ficha por tecnología → Reflexión final |
| Escritura | Editor con formato; pegar texto bloqueado, pegar/soltar imágenes y redimensionarlas | Pegar texto desactivado; se pueden añadir imágenes |
| Guardado | IndexedDB con respaldo en `localStorage` (prefijo `DJK_UTn_Em_`); guarda también los checks; avisa de borradores (Cargar / Descartar) | IndexedDB con respaldo en `localStorage` |
| PDF | jsPDF embebido (funciona sin conexión), generado desde el DOM | jsPDF embebido (funciona sin conexión) |
| Ejemplo | Archivo `_EJEMPLO_relleno.html` aparte | Modo `?ejemplo` en la URL |

**C · Juego dentro del motor común (UT2_E1).** Usa todo lo común (inicio, barra, checks, «Cómo se califica», guardado, copia en el servidor, PDF) pero en lugar de cajas de texto tiene un juego. Ganchos del motor: `COMUN.sinFuentes` (sin sección de fuentes) y `progresoPropio()` (la barra de progreso cuenta el juego). El estado del juego se guarda en un campo oculto `data-campo="juego"`.

| Pieza | UT2_E1 · Parejas de tecnologías |
|---|---|
| Juego | Las 50 tecnologías y definiciones de UT2_E4. Tablero de 20 cuadrados (10 parejas); cuando queda libre la mitad, se rellena solo con nuevas parejas hasta casar las 50. Cuadrados mezclados: tecnología (verde, con icono) y definición (blanco). Orden aleatorio por alumno. |
| Cómo se juega | Tocar o hacer clic en una tecnología y luego en su definición (o al revés). Con ratón también se puede arrastrar un cuadrado encima de su pareja; en tablet, mantener pulsado un momento y arrastrar. Funciona con teclado. |
| Acierto / fallo | Acierto: la pareja brilla, desaparece del tablero y pasa a «Tus parejas». Fallo: los dos cuadrados tiemblan en rojo y suma un fallo. |
| Nota del juego | Sobre 10: cada fallo resta 0,1 (nota mínima 1). Si no se han casado las 50, se multiplica por la parte casada (25 de 50 → la mitad), mínimo 1. Las pistas y el tiempo no cuentan. Se calcula en décimas para no tener errores de redondeo (`notaD()`). **Vale la mitad: la parte 1 puntúa sobre 5** (9,4 → 4,7). |
| Parte 2 (desde el 9/11/2026) | Elegir **5** de las 50 tecnologías (lista desplegable en orden alfabético, sin repetir) y explicar en una caja con formato cómo la usaría en el día a día de su profesión: qué haría, con quién, en qué momento y qué mejora. Mínimo 30 palabras por tecnología (contador debajo). Bajo la lista sale la definición. 1 punto cada una (5 en total), la corrige el profesor. |
| Encaje con el ciclo (interno) | El alumnado no lo ve. En el PDF, junto a cada tecnología elegida, un punto de color: **verde** = encaja con su ciclo · **azul** = de uso general · **naranja** = poco relacionada. La tabla está en `_fuente/UT2_E1.js` (`ENCAJE_GENERAL`, `ENCAJE_CICLOS`, `ENCAJE_NINGUNO`) y abajo, en «Encaje de las tecnologías de UT2_E1». |
| Nota guardada | Al descargar el PDF, la nota viaja con la entrega (`notaEntrega()` → columna `nota` de `entregas`, la de la última descarga; se ignora si no está entre 0 y 10). En UT2_E1 son **los puntos del juego sobre 5**; en el panel la columna se llama «Juego (sobre 5)» (`nota` en `EJ_META` del panel). El profesor la ve en el panel DJK (pestaña Ejercicios, lista de alumnos de cada ejercicio) y la descarga en Excel. Cualquier ejercicio que se corrija solo puede hacer lo mismo definiendo `notaEntrega()` en su archivo de `_fuente`. |
| Extras | Marcador (parejas, en tablero, fallos, nota que lleva en ese momento, tiempo), 5 pistas para todo el juego, barra de progreso y pantalla final con trofeo, nota y precisión. |
| Tiempo | Solo cuenta con la página visible, la tarea desbloqueada y actividad en los últimos 90 s. |
| PDF | Parte 1: recuadro con los **puntos del juego (sobre 5)** y cómo salen; parejas, fallos, precisión, pistas y tiempo. Parte 2: las 5 tecnologías (con el punto de color), su definición y lo que ha escrito; debajo, «Parte 2: ___ / 5 · Total: juego + ___ = ___ / 10» para el profesor. Al final, las tecnologías casadas en orden y, si las hubiera, las que quedan sin casar. |
| Definiciones retocadas | 10 definiciones se reescribieron para no repetir el nombre de la tecnología (pizarra digital, documentos compartidos, firma electrónica, huella dactilar, tarjeta de acceso, detector de humo, iluminación LED, persianas, riego automático, gestor de contraseñas). |

## Encaje de las tecnologías de UT2_E1 (parte 2, interno)

Sale del banco de UT2_E4 (abajo), con las de uso general en cualquier centro aparte. Para cambiarla, edita las tres listas de `_fuente/UT2_E1.js` y vuelve a construir: si una tecnología queda sin clasificar o repetida, la página lo avisa en la consola.

| Grupo | Tecnologías |
|---|---|
| Uso general (azul en todos los ciclos) | Wi-Fi · Fibra óptica · Ordenadores portátiles · Videoconferencia · Documentos compartidos en línea · Calendario compartido · Mensajería instantánea de grupo · Firma electrónica · Certificado digital · Control horario digital · Detector de humo · Desfibrilador (DEA) · Impresora multifunción · Escáner de documentos · Copias de seguridad · Antivirus · Verificación en dos pasos · Gestor de contraseñas |
| Acondicionamiento Físico (verde) | Placas solares · Marcador electrónico · Reloj inteligente · Cámaras de videovigilancia · Códigos QR · Cámara deportiva · Pago con el móvil · Datáfono (TPV) · Lector de código de barras · Bluetooth · Lector de huella dactilar · Tarjeta de acceso · Sensor de presencia |
| Animación Sociodeportiva (verde) | Tablets · Riego automático · Marcador electrónico · Reloj inteligente · Aula virtual · Códigos QR · Cámara deportiva · Pago con el móvil · Datáfono (TPV) · Bluetooth · Drones · Megafonía · Pantalla de avisos digital |
| Educación Infantil (verde) | Pizarra digital interactiva · Tablets · Medidor de CO2 · Placas solares · Riego automático · Marcador electrónico · Reloj inteligente · Cámaras de videovigilancia · Videoportero · Iluminación LED · Persianas motorizadas · Termostato programable · Aula virtual · Códigos QR |
| Higiene Bucodental (verde) | Medidor de CO2 · Termostato programable · Aula virtual · Pago con el móvil · Datáfono (TPV) · Lector de código de barras · Lector de huella dactilar · Microscopio digital · Impresión 3D |
| Integración Social (verde) | Cámaras de videovigilancia · Videoportero · Termostato programable · Aula virtual · Lector de huella dactilar · Tarjeta de acceso · Cerradura electrónica |
| Ninguno (naranja en todos) | Alarma antirrobo · Enchufe programable · Punto de carga eléctrica · Etiquetas antirrobo |
| Resto | Las de otros ciclos salen en naranja para el tuyo |

## Banco de tecnologías de UT2_E4 por especialidad

Cada especialidad ve 20 de las 50 tecnologías (las que más se relacionan con su sector). El alumnado elige 10 de su banco.

| Especialidad | Tecnologías del banco (20 de las 50) |
|---|---|
| Educación Infantil (y SP) | Pizarra digital interactiva · Tablets · Medidor de CO2 · Firma electrónica · Certificado digital · Copias de seguridad · Placas solares · Riego automático · Marcador electrónico · Reloj inteligente · Cámaras de videovigilancia · Videoportero · Detector de humo · Iluminación LED · Persianas motorizadas · Termostato programable · Videoconferencia · Aula virtual · Calendario compartido · Códigos QR |
| Acondicionamiento Físico | Cámara deportiva · Reloj inteligente · Marcador electrónico · Pago con el móvil · Datáfono (TPV) · Lector de código de barras · Fibra óptica · Wi-Fi · Bluetooth · Códigos QR · Calendario compartido · Mensajería instantánea de grupo · Videoconferencia · Lector de huella dactilar · Tarjeta de acceso · Control horario digital · Cámaras de videovigilancia · Desfibrilador (DEA) · Sensor de presencia · Placas solares |
| Animación Sociodeportiva | Marcador electrónico · Cámara deportiva · Drones · Megafonía · Pantalla de avisos digital · Calendario compartido · Mensajería instantánea de grupo · Aula virtual · Videoconferencia · Ordenadores portátiles · Tablets · Pago con el móvil · Datáfono (TPV) · Códigos QR · Fibra óptica · Wi-Fi · Bluetooth · Reloj inteligente · Desfibrilador (DEA) · Riego automático |
| Higiene Bucodental | Microscopio digital · Impresión 3D · Copias de seguridad · Antivirus · Verificación en dos pasos · Gestor de contraseñas · Certificado digital · Firma electrónica · Escáner de documentos · Lector de código de barras · Datáfono (TPV) · Pago con el móvil · Desfibrilador (DEA) · Medidor de CO2 · Control horario digital · Lector de huella dactilar · Videoconferencia · Wi-Fi · Aula virtual · Termostato programable |
| Integración Social (y SP) | Videoconferencia · Aula virtual · Documentos compartidos en línea · Calendario compartido · Mensajería instantánea de grupo · Firma electrónica · Certificado digital · Escáner de documentos · Impresora multifunción · Copias de seguridad · Antivirus · Gestor de contraseñas · Videoportero · Cámaras de videovigilancia · Cerradura electrónica · Lector de huella dactilar · Tarjeta de acceso · Detector de humo · Desfibrilador (DEA) · Termostato programable |
| Mediación Comunicativa SP | Tablets · Ordenadores portátiles · Videoconferencia · Aula virtual · Documentos compartidos en línea · Mensajería instantánea de grupo · Calendario compartido · Pizarra digital interactiva · Pantalla de avisos digital · Reloj inteligente · Códigos QR · Wi-Fi · Bluetooth · Fibra óptica · Megafonía · Firma electrónica · Certificado digital · Escáner de documentos · Antivirus · Verificación en dos pasos |


## Semipresencial: un ejercicio por unidad (carpeta SEMI)

En semipresencial solo hay un ejercicio por unidad: un «remix» de los ejercicios de esa unidad. Los ciclos semipresenciales ya no aparecen en la lista de ciclos de ningún ejercicio normal (siguen pudiendo abrir sus borradores antiguos y recuperarlos con su código).

| Pieza | Cómo es |
|---|---|
| Código y archivo | `UTn_SP` en `SEMI/UTn_SP_Nombre_De_La_Unidad.html` + `SEMI/UTn_SP_EJEMPLO_relleno.html` |
| Nombre | El de la unidad (p. ej. «UT1 · Digitalización de los sectores productivos»). Al alumno **no se le dice que es un remix**: sin «Remix» ni referencias a E1/E2/E3 en la página, el título, el PDF ni la dirección |
| Ciclos | Solo EI SP, IS SP y MC SP (individual) |
| Contenido | Los ejercicios de la unidad enteros, con la mitad de elementos. Se saca de los originales en cada construcción (`_fuente/remix_UTn_SP.js`): si cambias UTn_Em, el remix se actualiza solo |
| Color | El de la unidad |
| Administración | Bloque propio «Semipresencial» en la lista de ejercicios (amarillo) |
| Servidor | Las API aceptan `UTn_Em` y `UTn_SP` |

| UT1_SP | De dónde sale | Qué tiene (antes → ahora) | Puntos |
|---|---|---|---|
| Bloque 1 | UT1_E1 | Las 4 revoluciones en Canarias (0,75 cada una) · mi profesión 3 → 2 (0,75 cada una) · **sin el debate de la 5ª revolución** | 3 · 1,5 |
| Bloque 2 | UT1_E2 | Dispositivo asignado al azar (mismas imágenes) · **sistemas ciberfísicos** 4 → 2 (bocadillos de arriba; no se dice «tecnología habilitadora») · funciones combinadas · **1 sola actividad** con explicación de qué hacer (título y «con quién» en los bocadillos de abajo; paso a paso, dónde, cuánto dura, qué datos recogen los sistemas y para qué se usan) · ventajas e inconvenientes · **sin diapositivas** | 2 · 2 |
| Bloque 3 | UT1_E3 | Producto real: de los 3 primeros tipos de sistema de UT1_E3, **a cada alumno le toca 1 al azar** (campo `producto`, se sortea la primera vez y queda guardado; si ya había escrito en alguno, le toca ese). Solo se ve, se comprueba y sale en el PDF ese · **sin preguntas frecuentes** | 1,5 |
| Checks | — | 2 pasos, 2 normas y 2 comprobaciones por bloque | — |
| Cambios 11/11/2026 | — | Fuera la 1.2 (quinta revolución) y la 3.2 (preguntas frecuentes) · 3.1: un solo producto, de un tipo de sistema sorteado · notas 3 · 1,5 · 2 · 2 · 1,5 | — |
| Cambios 04/11/2026 | — | 4 revoluciones (antes 2) · «Sistema ciberfísico» en lugar de «Tecnología habilitadora» (y fuera la sigla THD) · 1 actividad (antes 2) · sin diapositivas · 5 FAQ (antes 3) | — |

## Planos de UT2_E4 por especialidad

| Ciclo | Título del plano | Sala grande | Despacho | Zona inferior | Zona derecha |
|---|---|---|---|---|---|
| EI, EI SP | Plano de la escuela infantil | Aula Grande | Despacho | Patio | Cancha de Fútbol |
| AF | Plano del centro deportivo | Sala de Musculación | Despacho | Zona Exterior | Piscina |
| AS | Plano del polideportivo | Sala Polivalente | Oficina | Zona de Aire Libre | Pista Polideportiva |
| HB | Plano de la clínica dental | Gabinete Dental | Recepción | Sala de Espera | Esterilización y Rayos X |
| IS, IS SP | Plano del centro de día | Sala de Actividades | Despacho | Jardín y Huerto | Comedor |
| MC SP | Plano del servicio de mediación | Aula de Formación | Despacho | Sala de Espera | Salón de Actos |

## Autoguardado

| Cuándo | Qué hace |
|---|---|
| Al escribir | Guarda 1,5 s después de cada cambio (0,9 s en UT2_E4). |
| Cada 30 s | Copia de seguridad aunque no se detecte ningún cambio. |
| Al cerrar, ocultar la pestaña o cambiar de app en el móvil | Guardado inmediato, sin esperas, antes de que el navegador cierre la página. |
| Al volver a abrir | Avisa del borrador y carga la copia más reciente (Cargar / Descartar). |
| Almacenamiento | Primero copia instantánea (localStorage) y después IndexedDB (admite más imágenes). Se pide al navegador que no borre los datos. |
| Indicador | «✓ Guardado automáticamente · hh:mm:ss» en la barra superior. |
| Copia en el servidor | Cada minuto (si hay cambios), al pulsar «Guardar» y al cerrar (si el borrador es pequeño) se sube una copia a `api/borradores.php` (`/var/www/djk_datos/borradores.db`). Máximo 6 MB por borrador; si las imágenes lo superan, se avisa. Las copias de más de un año se borran solas. |
| Código de recuperación | Cada alumno tiene un código aleatorio (p. ej. `K7QF-M2XR-9P`) que vale para todos los ejercicios. Lo ve arriba del ejercicio con botón «Copiar». Sin el código no se puede leer ninguna copia; máximo 60 intentos de recuperación por hora e IP. |
| Seguir en otro dispositivo | En la pantalla de inicio: «¿Empezaste en otro ordenador o móvil?» → escribe el código → se recupera el trabajo. Si en ese dispositivo hay un borrador más reciente, pregunta cuál usar. |
| Sin conexión | Se sigue guardando en el navegador y la copia sube al servidor cuando vuelve la conexión. |
| Ordenadores compartidos | Cada alumno tiene su propio borrador y su propio código aunque usen el mismo navegador (la clave lleva ciclo + nombre). En UT2_E4, si otro alumno empieza en ese navegador, el borrador anterior se sube antes al servidor con el código de su dueño. |
| Seguridad al recuperar | El contenido que llega del servidor se limpia: solo formato, enlaces https e imágenes incrustadas. |

## Sistema de checks

| Pieza | Qué hace |
|---|---|
| Qué tienes que hacer | Lista de pasos y normas; el alumno marca cada uno con un tick al leerlo. Contador «n/m marcados». |
| Bloqueo | Hasta marcar todos, la tarea se ve atenuada y no se puede escribir. Al completarlos, se desbloquea y la sección se recoge (se puede volver a abrir). |
| Antes de entregar, comprueba | Lista que se pone en verde sola: pasos leídos, cada parte completa (con contador) y fuentes e IA. |
| Aviso al descargar | Si falta algo, al pulsar «Descargar PDF» sale «Tu ejercicio aún no está completo» con lo que falta: Seguir trabajando / Descargar igualmente. |

## Criterios unificados

Todos los ejercicios muestran una tabla «Cómo se califica» con esta forma, debajo el aviso «Todas las partes son obligatorias» y los 4 criterios generales de entrega.

| Parte | Qué se valora | Puntos |
|---|---|---|
| Una fila por parte del ejercicio | Qué tiene que hacer bien el alumno y cómo se reparten los puntos dentro de la parte | n |
| **Total** | | **10** |

| Ejercicio | Reparto |
|---|---|
| UT1_E1 | Parte 1 → 4 (1 por revolución) · Parte 2 → 3 (2 preguntas, 1,5 cada una) · Parte 3 → 3 (1 por pregunta) |
| UT1_E3 | Fase 1 → 5 (1 por producto) · Fase 2 → 5 (5 preguntas, 1 cada una) · Fase 3 eliminada |
| UT2_E3 | Parte 1 juego → 1,5 · Parte 2 experiencia con las gafas → 1 · Parte 3 constructor → 3,5 · Parte 4 ficha de tienda → 1,5 · Parte 5 ventajas, riesgos y mercado → 2,5 |
| UT2_E2 | Montaje del robot → 3 · Justificación del montaje → 3 · Imagen con IA → 2 · Presentación en Canva y exposición → 2 |
| UT2_E1 | Parte 1 juego → 5 (la mitad de la nota del juego: 10 − 0,1 por fallo, mínimo 1; sin las 50 parejas, en proporción; se calcula sola) · Parte 2 las 5 tecnologías en tu profesión → 5 (1 cada una, la corrige el profesor). Desde el 9/11/2026 (del 6 al 9, el juego valía 10) |

## Normas acordadas

| # | Norma |
|---|---|
| 1 | Base: skill `djk-creador-tareas` (editor, guardado, PDF con jsPDF, paleta pastel, sin modo oscuro, todo en un HTML). |
| 2 | Criterios unificados: tabla por partes con puntos sobre 10 + criterios generales (ver arriba). |
| 3 | Si el Word está escrito para un solo ciclo, se redacta la versión equivalente para los 5 ciclos. |
| 4 | El PDF no incluye contexto ni objetivo; lleva la marca de control invisible contra la IA en la última página. |
| 5 | Nombre del PDF: `UTn_Em_Apellido1_Apellido2_Nombre.pdf`. |
| 6 | El ejemplo relleno usa solo texto de muestra entre corchetes, nunca respuestas reales que el alumnado pueda copiar. |
| 7 | Cada ejercicio nuevo se sube al repositorio de GitHub. |
| 8 | Cada ejercicio nuevo se despliega en el servidor y se añade a la lista `LISTA` de la administración (`index.html` de la raíz). |
| 9 | Antes de publicar se repasa la lista de la skill `rematadorweb` (sin claves expuestas, HTTPS, metadatos, favicon, móvil). |
| 10 | Todos los ejercicios llevan el sistema de checks (ver arriba): el alumno sabe lo que tiene que hacer y lo confirma. |
| 11 | Datos iniciales unificados: Nombre, Apellidos y Ciclo a elegir entre los 8 (5 presenciales + 3 semipresenciales). |
| 16 | Ciclos semipresenciales: EI SP e IS SP reutilizan el contenido presencial; MC SP lleva contenido adaptado propio. En semipresencial el trabajo es individual (sin compañero/a). |
| 17 | En «Cómo se califica» se indica siempre, debajo de la tabla, que **todas las partes son obligatorias** (aviso destacado). |
| 18 | Lo relativo al guardado y al código de recuperación va **solo en el botón «🔑 Código»** de la barra superior (popup), no en la descripción de la tarea. |
| 19 | «🔑 ¿Has perdido tu código? Pídeselo a tu profesor» va **dentro del popup del botón «Código»** (destacado), no en el checklist. En la casilla de recuperar de la pantalla de inicio se mantiene «Si lo has perdido, pídeselo a tu profesor». El profesor ve los códigos en el Detalle de la administración. |
| 20 | Todas las tareas usan la **barra superior de UT2_E4 (antes UT2_E1)**: logo, título, «nombre · ciclo · cambiar datos», estado del guardado, botones Guardar, **🔑 Código** y Descargar PDF (en el color de la unidad, con línea inferior del mismo color). El botón «Código» abre un popup con el código del alumno, «Copiar», para qué sirve y que si lo pierde se lo pida al profesor. El código ya no aparece dentro del ejercicio. En móvil: sin logo ni estado, «Código» solo con 🔑, y la línea de abajo solo con «cambiar datos». |
| 12 | Los ejercicios nuevos se crean en `_fuente/` (archivo de datos `UTn_Em.js`) con el motor común; no se editan los HTML a mano. |
| 13 | Todos los ejercicios tienen versión para ordenador y para móvil/tablet, adaptada para que el alumno trabaje cómodo en cada dispositivo (ver «Versión por dispositivo»). |
| 14 | El resultado de aprendizaje y sus criterios se muestran en la pantalla de inicio (junto al nombre, apellidos y ciclo), no dentro del ejercicio. En el PDF se mantienen. |
| 21 | No hay bloque «Entrega» en la página: la entrega (formato, plazo, aula virtual) la comunica el profesor en clase. La página solo tiene Objetivo, Cómo se califica, la tarea, «Antes de entregar, comprueba» y las siglas. |
| 22 | Semipresencial: un solo ejercicio por unidad (`UTn_SP`, carpeta `SEMI`), remix de los ejercicios de la unidad con la mitad de elementos. Los ciclos semipresenciales se quitan de la lista de ciclos de **todos** los ejercicios normales (UTn_Em), haya o no ya un UTn_SP de esa unidad; siguen pudiendo abrir sus borradores antiguos. En la administración, sus filas solo muestran UTn_SP. |
| 15 | Cada unidad tiene su color (UT1 lavanda · UT2 menta · UT3 melocotón · UT4 cielo · UT5 rosa) en la administración, el ejercicio y el PDF. |
| 23 | Icono de la pestaña con las siglas del ejercicio (`U1E1`, `U2E2`, `U1SP`…) sobre el color de la unidad de las pruebas de DJK_Unidades (UT1 ámbar · UT2 verde azulado · UT3 violeta · UT4 rosa · UT5 verde). Lo pone `construir.js` en `comun_head.html` (`{{ICONO}}`); en UT2_E4 y su redirección va escrito en el HTML. |

## Versión por dispositivo

| Dispositivo | Ancho | Qué debe cumplir |
|---|---|---|
| Ordenador | ≥ 1024 px | Diseño completo; barra de formato con texto en los botones (en las cajas estrechas, solo iconos y en una fila); atajos de teclado; arrastrar y soltar imágenes. |
| Tablet | 600–1023 px | Botones y casillas grandes para tocar (mínimo 44 px); barra de formato con todos sus botones a la vista (si la caja es estrecha, en dos filas); todo lo que se arrastra tiene alternativa tocando. |
| Móvil | < 600 px | Una sola columna; sin desplazamiento horizontal; barra de formato reducida a iconos en una fila que se desliza con el dedo; botones Guardar y PDF siempre visibles; textos y casillas legibles sin hacer zoom. |
| Pruebas | 375 px, 768 px y escritorio | Se prueba cada ejercicio en los tres tamaños antes de publicarlo. |

| Cómo se aplica | Dónde |
|---|---|
| Botones, casillas y ticks de mínimo 44 px en tablet y móvil (o en cualquier pantalla táctil) | Motor común (`_fuente/comun_head.html`) y bloque «norma 13» en UT2_E4 |
| Barra de formato en una sola fila que se desliza con el dedo (solo en móvil) | Motor común y UT2_E4 |
| **Cada caja de texto lleva su propia barra de formato** encima (negrita, cursiva, subrayado, títulos, listas, enlace e imagen) y actúa sobre esa caja; está tenue y se ilumina al escribir en ella. Ya no hay barra en la cabecera (desde el 9/11/2026). La barra se adapta al ancho de su caja, no solo al de la pantalla | Motor común (`caja()` en `_fuente/motor.js`, estilos en `_fuente/comun_head.html`) y UT2_E4 (bloque «barrasCajas») |
| **Cajas que se pueden agrandar:** asa debajo de cada caja; se arrastra con el ratón o con el dedo (o flechas arriba/abajo con el teclado). El alto elegido se recuerda en ese navegador | Motor común y UT2_E4 |
| Barra superior con Guardar y PDF fija al hacer scroll (`overflow-x:clip`, no `hidden`) | Motor común |
| Cabecera de UT2_E4 en una sola fila en móvil, con «Descargar PDF» siempre visible | UT2_E1 |
| Asa para redimensionar imágenes más grande en pantallas táctiles | Motor común |

| Ejercicio | Ordenador | Tablet | Móvil |
|---|---|---|---|
| UT1_E1 | ✓ | ✓ | ✓ |
| UT1_E3 | ✓ | ✓ | ✓ |
| UT2_E1 | ✓ | ✓ | ✓ |
| UT2_E2 | ✓ | ✓ | ✓ |
| UT2_E4 | ✓ | ✓ | ✓ |

## Pendiente de unificar

| Ejercicio | Qué falta |
|---|---|
| UT2_E4 | No está en el motor común: cualquier norma nueva se aplica con scripts sobre su HTML. Guarda en el navegador con el nombre antiguo (`UT2_E1_Tecnologias_Habilitadoras`) para no perder borradores; en el servidor usa `UT2_E4`. El alto de sus cajas se guarda como `DJK_plano_UT2_alto_…`. El enlace antiguo `UT2/UT2_E1_Tecnologias_Habilitadoras.html` redirige a UT2_E4. |

## Zona de administración

| Pieza | Qué hace |
|---|---|
| Acceso | La dirección principal pide la contraseña. Máximo 10 intentos cada 15 minutos por IP. La sesión dura hasta cerrar el navegador o pulsar «Salir». |
| Disponibilidad | Tabla ciclo × ejercicio con interruptores «✓ Abierto / 🔒 Bloqueado». Un ejercicio bloqueado no se puede empezar ni cargar desde un borrador en ese ciclo (aparece con candado en la pantalla de inicio). |
| Entregas | Se registra cuando el alumno descarga el PDF: nombre, apellidos, ciclo, ejercicio, primera y última descarga y nº de veces. |
| Resumen | Tabla ciclo × ejercicio: «personas con PDF / personas que han empezado la tarea». |
| Detalle | Por ciclo (pestañas) y ejercicio, **todas las personas que han empezado la tarea**: apellidos, nombre, **código de recuperación**, cuándo empezó, última actividad y si ha descargado el PDF (fecha y nº de veces). Buscador por nombre, apellidos o código. Botón 🗑 para borrar el registro de un alumno (su descarga y la copia en el servidor; pide confirmación). |
| Archivos | `index.html` (raíz), `api/admin.php`, `api/entregas.php`, `api/estado.php`, `api/comun.php` (no accesible desde la web) · datos en `/var/www/djk_datos/entregas.db` |
| Sin conexión | Si el ejercicio se abre sin internet no puede consultar los bloqueos ni registrar la entrega: se puede hacer igualmente. |
| Inicio de tarea | En cuanto el alumno entra en una tarea (sin esperar a que escriba) se manda una copia al servidor: así aparece en el Detalle con su código. |
| Ejercicios nuevos | Añadir su código y nombre en `EJERCICIOS` de `index.html` (raíz) para que salga en las tablas aunque nadie lo haya descargado aún. |

## Analítica y contador de visitas

| Pieza | Qué hace |
|---|---|
| Identificador | Cada navegador guarda un número aleatorio (`djk_visitante`). Sin cookies, sin nombre, sin respuestas y sin IP guardada (solo una huella cifrada temporal para frenar abusos). |
| Qué se registra | Qué página se abre y qué día: `UT1_E1`, `UT1_E1_ejemplo`… |
| Contador | En la cabecera de la administración: «N visitantes distintos». El aviso de privacidad está en la pantalla de inicio de cada ejercicio. |
| Estadísticas | `estadisticas.html`: visitantes distintos, visitas totales y de los últimos 7 días, visitas por página y por día (30 días). |
| Ejercicios nuevos | El motor común registra la visita solo; en la página de estadísticas hay que añadir el nombre del ejercicio en `NOMBRES`. |

## UT2_E3 · Diseña tu app de realidad virtual o mixta

| Parte | Cómo es |
|---|---|
| 1 · ¿Virtual, mixta o aumentada? | Juego: 12 situaciones del sector (4 de cada tipo) en orden aleatorio. Se toca la caja (o se arrastra la tarjeta; en tablet, mantener pulsado). Si falla, sale la definición del tipo elegido (no la respuesta) y la tarjeta se queda. Marcador de errores y «a la primera». |
| 2 · Mi experiencia con las gafas | Fichas (qué probaste, qué te sorprendió, qué cambiarías), 4 escalas con caras (inmersión, comodidad, facilidad, mareo) y una frase. |
| 3 · Constructor de la app | 8 retos por ciclo + reto propio · caja con la idea · deslizador «cuánto mundo real se ve» (real / aumentada / mixta / virtual; tiene que quedar en mixta o virtual) · fichas: para quién, dónde, cómo se maneja, duración · boceto en un lienzo con forma de visor (lápiz, goma, 7 colores, 3 grosores, pegatinas, fondo blanco / sala real / foto propia, deshacer) · 3 escenas (caja con imagen). |
| 4 · Tu app en la tienda | Nombre, icono (24 emojis), color (6), eslogan, edad (+3 a +18), precio (gratis, pago único, suscripción, la paga el centro + importe). Ficha generada en directo con el boceto como captura; en el PDF va en página apaisada. |
| 5 · Ventajas, riesgos y mercado | 3 cajas (ventajas, riesgos con solución, nuevo mercado). |
| Guardado | Todo lo que no es caja va en el campo oculto `e3` (JSON revisado campo a campo al cargar; imágenes solo en formato `data:image/png` o `data:image/jpeg` en base64). |
| EI | Aviso de edad mínima de las gafas (10–13 años según fabricante) en el objetivo. |

## UT2_E2 · Diseñad vuestro robot (en grupo)

Hasta el 9-11-2026 era el **UT2_E4** (y el plano era el UT2_E2): se intercambiaron los números. El motor pasa solo los borradores del navegador guardados con el código antiguo (`codigoAntes` en `COMUN`); en el servidor se cambió el código de entregas, borradores, bloqueos y visitas, y las direcciones antiguas redirigen a las nuevas.

| Parte | Cómo es |
|---|---|
| 1 · Equipo y reto | Integrantes del grupo y el reto de la especialidad (un reto por ciclo). |
| 2 · Montaje | Constructor tipo puzle: 23 piezas comunes + 10 de la especialidad = 33, mezcladas por orden alfabético y **sin ninguna marca**: el alumno no sabe cuáles son las propias de su especialidad (decisión del profesor). Zonas: cabeza (antena, orejas y ojos: 1 pieza cada una), torso (3 módulos), brazos (de 2 a 4, una pieza en cada uno) y movimiento (1). Cada pieza solo encaja en su zona y cambia el aspecto del robot (forma de la cabeza, del brazo, ruedas, orugas, piernas o hélices). Se toca la pieza y su sitio, o se arrastra (en tablet, mantener pulsado). Nombre del robot en una placa. |
| Imagen del robot | Botón «⬇ Descargar robot (imagen)»: PNG de 1200 × 1680 px con el robot, el nombre y el ciclo, para Canva. Queda apuntado que se ha descargado (check). También va en el PDF. |
| 3 · Justificación | Una caja general: para qué sirve, por qué esas piezas, quién lo usaría, ventajas y riesgos. |
| 4 · Imagen con IA | Tabla de herramientas gratuitas (Canva Magic Media, Microsoft Designer/Copilot, Adobe Firefly, Google Gemini, Ideogram), descripción para la IA generada con sus piezas y el entorno del ciclo («Copiar»), caja para pegar la imagen y caja con la herramienta y el prompt. |
| 5 · Presentación en Canva | Estructura de 6 diapositivas recomendada. **La entrega es la presentación de Canva en el aula virtual**, con la imagen del robot; se expone en grupo. El PDF de la página queda como apoyo (y registra la descarga en la administración). |
| Guardado | Piezas, número de brazos y si se ha descargado la imagen van en el campo oculto `robot` (JSON revisado al cargar: solo piezas del ciclo y en su zona). |
| Ciclos | Solo los 5 presenciales. |

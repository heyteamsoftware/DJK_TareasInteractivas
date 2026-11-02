# Ejercicios Interactivos · DJK

| Dato | Valor |
|---|---|
| Asignatura | Digitalización aplicada a los sectores productivos (DJK) |
| Organización | Una carpeta por unidad (`UT1` … `UT5`) |
| Nombre de archivo | `UTn_Em_Titulo_Corto.html` (un HTML por ejercicio) + `UTn_Em_EJEMPLO_relleno.html` |
| Código fuente | `_fuente/`: piezas comunes + un archivo de datos por ejercicio. Se genera con `node _fuente/construir.js` |
| Repositorio | https://github.com/heyteamsoftware/DJK_TareasInteractivas |
| Acceso del alumnado | Solo por el enlace directo de cada ejercicio (el que se pone en el aula virtual). No hay portada pública. |
| Servidor | CIFP Tony Gallardo · Apache · `/var/www/html/DJK/DJK_EjerciciosInteractivos` (usuario `ubuntu`, clave en `Documentos\Oracle`) |
| Lista de ejercicios | Dentro de la administración: por unidad y con su color, con «Abrir», «Ejemplo» y «Copiar enlace» · `.htaccess` desactiva el listado de carpetas |
| Analítica | `api/visitas.php` (anónima, sin cookies) · base de datos en `/var/www/djk_datos/visitas.db`, fuera de la web · panel en `estadisticas.html` (no enlazado, sin indexar) |
| Administración | https://myappsserver.duckdns.org/DJK/DJK_EjerciciosInteractivos/ (dirección principal; la antigua `/admin/` redirige aquí) · solo contraseña (guardada cifrada en `/var/www/djk_datos/admin.json`) |

## Registro de ejercicios

| Código | Título | RA | CE | Ciclos | Modelo | Archivo | Ejemplo | Criterios unificados | Checks | Estado |
|---|---|---|---|---|---|---|---|---|---|---|
| UT1_E1 | Revoluciones industriales canarias y quinta revolución industrial | RA1 | a, b | AF, AS, EI, HB, IS | A | [UT1_E1](UT1/UT1_E1_Revoluciones_Industriales_Canarias.html) | [Ejemplo](UT1/UT1_E1_EJEMPLO_relleno.html) | Sí | Sí | Hecho |
| UT1_E2 | Combinación de sistemas ciberfísicos | RA1 | e, f, g | AF, AS, EI, HB, IS | A (bocadillos + diapositivas) | [UT1_E2](UT1/UT1_E2_Combinacion_Sistemas_Ciberfisicos.html) | [Ejemplo](UT1/UT1_E2_EJEMPLO_relleno.html) | Sí (4·2·2·1·1) | Sí | Hecho |
| UT1_E3 | Sistemas ciberfísicos y digitalización del sector | RA1 | c, d, e, f | AF, AS, EI, HB, IS | A | [UT1_E3](UT1/UT1_E3_Digitalizacion_Sistemas_CiberFisicos.html) | [Ejemplo](UT1/UT1_E3_EJEMPLO_relleno.html) | Sí | Sí | Hecho |
| UT2_E1 | Tecnologías habilitadoras | RA2 | a, c, d, e | Común (elige su ciclo entre los 5) | B | [UT2_E1](UT2/UT2_E1_Tecnologias_Habilitadoras.html) | `?ejemplo` | Sí (otro reparto) | Sí (original) | Hecho |

## Ciclos

| Sigla | Ciclo |
|---|---|
| AF | Acondicionamiento Físico |
| AS | Animación Sociodeportiva |
| EI | Educación Infantil |
| HB | Higiene Bucodental |
| IS | Integración Social |

## Modelos de ejercicio

| Rasgo | A · Proyecto por partes con variante por ciclo (UT1_E1, UT1_E3) | B · Actividad visual tipo juego (UT2_E1) |
|---|---|---|
| Idea | Partes o fases con cajas de respuesta | Elegir 10 de 50 tecnologías y colocarlas en un plano (aula, despacho, patio, cancha), mínimo 2 por espacio |
| Inicio | Nombre, Apellidos y Ciclo a elegir (5 opciones) | Nombre, Apellidos y Ciclo a elegir (5 opciones) |
| Estructura | Inicio: RA + nombre, apellidos y ciclo · Ejercicio: Objetivo y criterios → Qué tienes que hacer (checks) → Partes → Fuentes e IA → Antes de entregar, comprueba → Entrega → Abreviaturas | Enunciado (checks) → Banco de tecnologías → Plano → Ficha por tecnología → Reflexión final |
| Escritura | Editor con formato; pegar texto bloqueado, pegar/soltar imágenes y redimensionarlas | Pegar texto desactivado; se pueden añadir imágenes |
| Guardado | IndexedDB con respaldo en `localStorage` (prefijo `DJK_UTn_Em_`); guarda también los checks; avisa de borradores (Cargar / Descartar) | IndexedDB con respaldo en `localStorage` |
| PDF | jsPDF embebido (funciona sin conexión), generado desde el DOM | jsPDF embebido (funciona sin conexión) |
| Ejemplo | Archivo `_EJEMPLO_relleno.html` aparte | Modo `?ejemplo` en la URL |

## Sistema de checks

| Pieza | Qué hace |
|---|---|
| Qué tienes que hacer | Lista de pasos y normas; el alumno marca cada uno con un tick al leerlo. Contador «n/m marcados». |
| Bloqueo | Hasta marcar todos, la tarea se ve atenuada y no se puede escribir. Al completarlos, se desbloquea y la sección se recoge (se puede volver a abrir). |
| Antes de entregar, comprueba | Lista que se pone en verde sola: pasos leídos, cada parte completa (con contador) y fuentes e IA. |
| Aviso al descargar | Si falta algo, al pulsar «Descargar PDF» sale «Tu ejercicio aún no está completo» con lo que falta: Seguir trabajando / Descargar igualmente. |

## Criterios unificados

Todos los ejercicios muestran una tabla «Cómo se califica» con esta forma, y debajo los 4 criterios generales de entrega.

| Parte | Qué se valora | Puntos |
|---|---|---|
| Una fila por parte del ejercicio | Qué tiene que hacer bien el alumno y cómo se reparten los puntos dentro de la parte | n |
| **Total** | | **10** |

| Ejercicio | Reparto |
|---|---|
| UT1_E1 | Parte 1 → 4 (1 por revolución) · Parte 2 → 3 (2 preguntas, 1,5 cada una) · Parte 3 → 3 (1 por pregunta) |
| UT1_E3 | Fase 1 → 5 (1 por producto) · Fase 2 → 5 (5 preguntas, 1 cada una) · Fase 3 eliminada |

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
| 11 | Datos iniciales unificados: Nombre, Apellidos y Ciclo a elegir entre los 5. |
| 12 | Los ejercicios nuevos se crean en `_fuente/` (archivo de datos `UTn_Em.js`) con el motor común; no se editan los HTML a mano. |
| 13 | Todos los ejercicios tienen versión para ordenador y para móvil/tablet, adaptada para que el alumno trabaje cómodo en cada dispositivo (ver «Versión por dispositivo»). |
| 14 | El resultado de aprendizaje y sus criterios se muestran en la pantalla de inicio (junto al nombre, apellidos y ciclo), no dentro del ejercicio. En el PDF se mantienen. |
| 15 | Cada unidad tiene su color (UT1 lavanda · UT2 menta · UT3 melocotón · UT4 cielo · UT5 rosa) en la administración, el ejercicio y el PDF. |

## Versión por dispositivo

| Dispositivo | Ancho | Qué debe cumplir |
|---|---|---|
| Ordenador | ≥ 1024 px | Diseño completo; barra de formato con texto en los botones; atajos de teclado; arrastrar y soltar imágenes. |
| Tablet | 600–1023 px | Botones y casillas grandes para tocar (mínimo 44 px); barra de formato compacta; todo lo que se arrastra tiene alternativa tocando. |
| Móvil | < 600 px | Una sola columna; sin desplazamiento horizontal; barra de formato reducida a iconos; botones Guardar y PDF siempre visibles; textos y casillas legibles sin hacer zoom. |
| Pruebas | 375 px, 768 px y escritorio | Se prueba cada ejercicio en los tres tamaños antes de publicarlo. |

| Cómo se aplica | Dónde |
|---|---|
| Botones, casillas y ticks de mínimo 44 px en tablet y móvil (o en cualquier pantalla táctil) | Motor común (`_fuente/comun_head.html`) y bloque «norma 13» en UT2_E1 |
| Barra de formato en una sola fila que se desliza con el dedo | Motor común |
| En móvil, la barra de formato solo aparece mientras se escribe en una caja | Motor común (`_fuente/motor.js`) |
| Barra superior con Guardar y PDF fija al hacer scroll (`overflow-x:clip`, no `hidden`) | Motor común |
| Cabecera de UT2_E1 en una sola fila en móvil, con «Descargar PDF» siempre visible | UT2_E1 |
| Asa para redimensionar imágenes más grande en pantallas táctiles | Motor común |

| Ejercicio | Ordenador | Tablet | Móvil |
|---|---|---|---|
| UT1_E1 | ✓ | ✓ | ✓ |
| UT1_E3 | ✓ | ✓ | ✓ |
| UT2_E1 | ✓ | ✓ | ✓ |

## Pendiente de unificar

| Ejercicio | Qué falta |
|---|---|
| — | Nada pendiente |

## Zona de administración

| Pieza | Qué hace |
|---|---|
| Acceso | La dirección principal pide la contraseña. Máximo 10 intentos cada 15 minutos por IP. La sesión dura hasta cerrar el navegador o pulsar «Salir». |
| Disponibilidad | Tabla ciclo × ejercicio con interruptores «✓ Abierto / 🔒 Bloqueado». Un ejercicio bloqueado no se puede empezar ni cargar desde un borrador en ese ciclo (aparece con candado en la pantalla de inicio). |
| Entregas | Se registra cuando el alumno descarga el PDF: nombre, apellidos, ciclo, ejercicio, primera y última descarga y nº de veces. Las respuestas no se envían. |
| Resumen | Tabla ciclo × ejercicio con el número de personas que han descargado el PDF. |
| Detalle | Por ciclo (pestañas) y ejercicio: quién lo ha descargado y cuándo; buscador por nombre. |
| Archivos | `index.html` (raíz), `api/admin.php`, `api/entregas.php`, `api/estado.php`, `api/comun.php` (no accesible desde la web) · datos en `/var/www/djk_datos/entregas.db` |
| Sin conexión | Si el ejercicio se abre sin internet no puede consultar los bloqueos ni registrar la entrega: se puede hacer igualmente. |
| Ejercicios nuevos | Añadir su código y nombre en `EJERCICIOS` de `index.html` (raíz) para que salga en las tablas aunque nadie lo haya descargado aún. |

## Analítica y contador de visitas

| Pieza | Qué hace |
|---|---|
| Identificador | Cada navegador guarda un número aleatorio (`djk_visitante`). Sin cookies, sin nombre, sin respuestas y sin IP guardada (solo una huella cifrada temporal para frenar abusos). |
| Qué se registra | Qué página se abre y qué día: `UT1_E1`, `UT1_E1_ejemplo`… |
| Contador | En la cabecera de la administración: «N visitantes distintos». El aviso de privacidad está en la pantalla de inicio de cada ejercicio. |
| Estadísticas | `estadisticas.html`: visitantes distintos, visitas totales y de los últimos 7 días, visitas por página y por día (30 días). |
| Ejercicios nuevos | El motor común registra la visita solo; en la página de estadísticas hay que añadir el nombre del ejercicio en `NOMBRES`. |

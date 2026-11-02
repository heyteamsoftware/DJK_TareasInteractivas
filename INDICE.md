# Ejercicios Interactivos · DJK

| Dato | Valor |
|---|---|
| Asignatura | Digitalización aplicada a los sectores productivos (DJK) |
| Organización | Una carpeta por unidad (`UT1` … `UT5`) |
| Nombre de archivo | `UTn_Em_Titulo_Corto.html` (un HTML por ejercicio) + `UTn_Em_EJEMPLO_relleno.html` |
| Código fuente | `_fuente/`: piezas comunes + un archivo de datos por ejercicio. Se genera con `node _fuente/construir.js` |
| Repositorio | https://github.com/heyteamsoftware/DJK_TareasInteractivas |
| Web publicada | https://myappsserver.duckdns.org/DJK/DJK_EjerciciosInteractivos/ |
| Servidor | CIFP Tony Gallardo · Apache · `/var/www/html/DJK/DJK_EjerciciosInteractivos` (usuario `ubuntu`, clave en `Documentos\Oracle`) |
| Portada | `index.html` con enlaces a cada ejercicio y aviso de privacidad; `.htaccess` desactiva el listado de carpetas |

## Registro de ejercicios

| Código | Título | RA | CE | Ciclos | Modelo | Archivo | Ejemplo | Criterios unificados | Checks | Estado |
|---|---|---|---|---|---|---|---|---|---|---|
| UT1_E1 | Revoluciones industriales canarias y quinta revolución industrial | RA1 | a, b | AF, AS, EI, HB, IS | A | [UT1_E1](UT1/UT1_E1_Revoluciones_Industriales_Canarias.html) | [Ejemplo](UT1/UT1_E1_EJEMPLO_relleno.html) | Sí | Sí | Hecho |
| UT1_E2 | — | | | | | | | | | Pendiente |
| UT1_E3 | Sistemas ciberfísicos y digitalización del sector | RA1 | c, d, e, f | AF, AS, EI, HB, IS | A | [UT1_E3](UT1/UT1_E3_Digitalizacion_Sistemas_CiberFisicos.html) | [Ejemplo](UT1/UT1_E3_EJEMPLO_relleno.html) | Sí | Sí | Hecho |
| UT2_E1 | Tecnologías habilitadoras | RA2 | a, c, d, e | Común (el alumno escribe su ciclo) | B | [UT2_E1](UT2/UT2_E1_Tecnologias_Habilitadoras.html) | `?ejemplo` | Sí (otro reparto) | Sí (original) | Hecho |

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
| Inicio | Nombre, Apellidos y Ciclo a elegir (5 opciones) | Nombre, Apellidos y Ciclo escrito a mano |
| Estructura | RA → Objetivo y criterios → Qué tienes que hacer (checks) → Partes → Fuentes e IA → Antes de entregar, comprueba → Entrega → Abreviaturas | Enunciado (checks) → Banco de tecnologías → Plano → Ficha por tecnología → Reflexión final |
| Escritura | Editor con formato; pegar texto bloqueado, pegar/soltar imágenes y redimensionarlas | Pegar texto desactivado; se pueden añadir imágenes |
| Guardado | IndexedDB con respaldo en `localStorage` (prefijo `DJK_UTn_Em_`); guarda también los checks; avisa de borradores (Cargar / Descartar) | IndexedDB con respaldo en `localStorage` |
| PDF | jsPDF embebido (funciona sin conexión), generado desde el DOM | jsPDF desde CDN (necesita conexión) |
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
| 8 | Cada ejercicio nuevo se despliega en el servidor y se añade a la portada (`index.html`). |
| 9 | Antes de publicar se repasa la lista de la skill `rematadorweb` (sin claves expuestas, HTTPS, metadatos, favicon, móvil). |
| 10 | Todos los ejercicios llevan el sistema de checks (ver arriba): el alumno sabe lo que tiene que hacer y lo confirma. |
| 11 | Datos iniciales unificados: Nombre, Apellidos y Ciclo a elegir entre los 5. |
| 12 | Los ejercicios nuevos se crean en `_fuente/` (archivo de datos `UTn_Em.js`) con el motor común; no se editan los HTML a mano. |

## Pendiente de unificar

| Ejercicio | Qué falta |
|---|---|
| UT2_E1 | Pasar el ciclo a elegir entre los 5 (ahora se escribe a mano) y decidir si pasa a jsPDF embebido (ahora necesita conexión para el PDF) |
| Web | Pendiente de decidir: analítica y contador de visitas (lista `rematadorweb`) |

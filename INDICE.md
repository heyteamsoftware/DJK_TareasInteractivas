# Ejercicios Interactivos · DJK

| Dato | Valor |
|---|---|
| Asignatura | Digitalización aplicada a los sectores productivos (DJK) |
| Organización | Una carpeta por unidad (`UT1` … `UT5`) |
| Nombre de archivo | `UTn_Em_Titulo_Corto.html` (un HTML por ejercicio) + `UTn_Em_EJEMPLO_relleno.html` |
| Repositorio | https://github.com/heyteamsoftware/DJK_TareasInteractivas |
| Web publicada | https://myappsserver.duckdns.org/DJK/DJK_EjerciciosInteractivos/ |
| Servidor | CIFP Tony Gallardo · Apache · `/var/www/html/DJK/DJK_EjerciciosInteractivos` (usuario `ubuntu`, clave en `Documentos\Oracle`) |
| Portada | `index.html` con enlaces a cada ejercicio y aviso de privacidad; `.htaccess` desactiva el listado de carpetas |

## Registro de ejercicios

| Código | Título | RA | CE | Ciclos | Modelo | Archivo | Ejemplo | Criterios unificados | Estado |
|---|---|---|---|---|---|---|---|---|---|
| UT1_E1 | Revoluciones industriales canarias y quinta revolución industrial | RA1 | a, b | AF, AS, EI, HB, IS | A | [UT1_E1](UT1/UT1_E1_Revoluciones_Industriales_Canarias.html) | [Ejemplo](UT1/UT1_E1_EJEMPLO_relleno.html) | Sí | Hecho |
| UT1_E2 | — | | | | | | | | Pendiente |
| UT1_E3 | Sistemas ciberfísicos y digitalización del sector | RA1 | c, d, e, f | AF, AS, EI, HB, IS | A | [UT1_E3](UT1/UT1_E3_Digitalizacion_Sistemas_CiberFisicos.html) | [Ejemplo](UT1/UT1_E3_EJEMPLO_relleno.html) | Sí | Hecho |
| UT2_E1 | Tecnologías habilitadoras | RA2 | a, c, d, e | Común (el alumno escribe su ciclo) | B | [UT2_E1](UT2/UT2_E1_Tecnologias_Habilitadoras.html) | `?ejemplo` | Sí (otro reparto) | Hecho |

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
| Idea | Proyecto en 3 partes o fases con cajas de respuesta | Elegir 10 de 50 tecnologías y colocarlas en un plano (aula, despacho, patio, cancha), mínimo 2 por espacio |
| Estructura | RA → Objetivo y criterios → Partes → Fuentes e IA → Entrega → Abreviaturas | Pasos → Banco de tecnologías → Plano → Ficha por tecnología → Reflexión final |
| Ciclo | Selector de ciclo; cambia el contenido propio de cada ciclo | Igual para todos; el alumno escribe su ciclo |
| Escritura | Editor con formato; pegar texto bloqueado, pegar/soltar imágenes y redimensionarlas | Pegar texto desactivado; se pueden añadir imágenes |
| Guardado | IndexedDB con respaldo en `localStorage` (prefijo `DJK_UTn_Em_`); avisa de borradores (Cargar / Descartar) | IndexedDB con respaldo en `localStorage` |
| PDF | jsPDF embebido (funciona sin conexión), generado desde el DOM | jsPDF desde CDN (necesita conexión) |
| Ejemplo | Archivo `_EJEMPLO_relleno.html` aparte | Modo `?ejemplo` en la URL |

## Criterios unificados

Todos los ejercicios muestran una tabla «Cómo se califica» con esta forma, y debajo los 4 criterios generales de entrega.

| Parte | Qué se valora | Puntos |
|---|---|---|
| Una fila por parte del ejercicio | Qué tiene que hacer bien el alumno y cómo se reparten los puntos dentro de la parte | n |
| **Total** | | **10** |

| Ejercicio | Reparto |
|---|---|
| UT1_E1 | Parte 1 → 4 (1 por revolución) · Parte 2 → 3 (0,5 por pregunta) · Parte 3 → 3 (1 por pregunta) |
| UT1_E3 | Fase 1 → 4 (0,8 por producto) · Fase 2 → 3 (repartidos por igual; son 8–10 preguntas según el ciclo) · Fase 3 → 3 (1 por protocolo) |

## Normas acordadas

| # | Norma |
|---|---|
| 1 | Base: skill `djk-creador-tareas` (editor, guardado, PDF con jsPDF, paleta pastel, sin modo oscuro, todo en un HTML). |
| 2 | Criterios unificados: tabla por partes con puntos sobre 10 + criterios generales (ver arriba). |
| 3 | Si el Word está escrito para un solo ciclo, se redacta la versión equivalente para los 5 ciclos. |
| 4 | El PDF no incluye contexto ni objetivo; lleva la marca de control invisible contra la IA en la última página. |
| 5 | Nombre del PDF según el enunciado (en UT1_E1: `UT1_E1_Apellido1_Apellido2_Nombre.pdf`); por eso se piden nombre y apellidos por separado. |
| 6 | El ejemplo relleno usa solo texto de muestra entre corchetes, nunca respuestas reales que el alumnado pueda copiar. |
| 7 | Cada ejercicio nuevo se sube al repositorio de GitHub. |
| 8 | Cada ejercicio nuevo se despliega en el servidor y se añade a la portada (`index.html`). |
| 9 | Antes de publicar se repasa la lista de la skill `rematadorweb` (sin claves expuestas, HTTPS, metadatos, favicon, móvil). |

## Pendiente de unificar

| Ejercicio | Qué falta |
|---|---|
| UT2_E1 | Decidir si pasa a jsPDF embebido (ahora necesita conexión para el PDF) |
| Web | Pendiente de decidir: analítica y contador de visitas (lista `rematadorweb`) |

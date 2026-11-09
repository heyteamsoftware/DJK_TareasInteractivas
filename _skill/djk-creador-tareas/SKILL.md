---
name: djk-creador-tareas
description: Crea y mantiene los Ejercicios Interactivos de la asignatura DJK (Digitalización aplicada a los sectores productivos) del CIFP Tony Gallardo. Convierte una tarea en Word (enunciado, fases, FAQ, protocolos) en una página HTML que el alumno rellena, guarda (en su navegador y en el servidor) y descarga en PDF, y la publica en GitHub y en el servidor del centro. Úsala para crear un ejercicio nuevo, modificar uno existente o cambiar normas comunes de todos los ejercicios.
---

# Ejercicios Interactivos · DJK

Proyecto: `C:\Users\ferna\OneDrive\Documentos\DJK_Ejercicios_interactivos`
Índice con TODAS las normas acordadas, criterios y registro de ejercicios: `INDICE.md` (léelo siempre antes de empezar; manda sobre esta skill si hay diferencias).

## Flujo para un ejercicio nuevo

1. **Leer la tarea.** Extraer el texto del .docx (leer `word/document.xml` con PowerShell; no hay Python en este equipo), con títulos, listas, tablas e imágenes. Los Word están en `Desktop/DJK 2026-2027/00_PRESENCIALES_DJK_COMUN/Ejercicios/UTn/`. Los textos de RA y CE salen de la programación (`.../Programacion/*.docx`), no del Word.
2. **Preguntar dudas antes de construir** (el usuario lo pide): qué cambia por ciclo, reparto de puntos, cómo plantear partes que no encajan en la web (presentaciones, trabajo en grupo…), nombres, etc. Si el Word está escrito para un solo ciclo, proponer la versión para todos.
3. **Crear el archivo de datos** `_fuente/UTn_Em.js` (ver «Motor común») y registrarlo en `_fuente/construir.js`. Imágenes en `_fuente/img/UTn_Em/` (comprimidas a ~1000 px de ancho, JPEG).
4. **Construir:** `node _fuente/construir.js` → genera `UTn/UTn_Em_Titulo.html` y `UTn/UTn_Em_EJEMPLO_relleno.html`. Nunca editar los HTML generados a mano.
5. **Probar** (ver «Pruebas obligatorias»).
6. **Registrar:** fila en `INDICE.md` (todo en tablas), ejercicio en `LISTA` de `index.html` (administración) y nombre en `NOMBRES` de `estadisticas.html`.
7. **Publicar:** commit + push a GitHub y subida al servidor (ver «Publicación»).

## Motor común (`_fuente/`)

- `comun_head.html` (estilos + pantalla de inicio + barra), `jspdf.html` (jsPDF embebido: el PDF funciona sin conexión), `motor.js` (todo el comportamiento), `construir.js`.
- Cada ejercicio define antes del motor: `COMUN` (codigo, corto, asignatura, unidad, ejercicio, ra, ce, raTexto, ceTextos, pasos, normas, criterios, fuentes, numFuentes, siglas…), `CICLOS`, `ORDEN`, y las funciones `introHTML(C)`, `construirTarea(C)` (usa `caja()`), `pdfTarea(api, C)`, `listaChecks(C)`, `ejemploRespuesta(id)`. Opcionales: `alActualizar()`, `ejemploCampos()`, `progresoPropio()` (la barra de progreso cuenta otra cosa que las cajas, p. ej. un juego) y `COMUN.sinFuentes: true` (sin sección «Fuentes y uso de IA»). Campos a elegir con `data-campo` se guardan solos. `api.diapositiva()` genera páginas apaisadas en el PDF.
- **Ciclos (8):** `af` Acondicionamiento Físico, `as` Animación Sociodeportiva, `ei` Educación Infantil, `hb` Higiene Bucodental, `is` Integración Social, `ei_sp` Educación Infantil Semipresencial y `is_sp` Integración Social Semipresencial (reutilizan el contenido presencial con `structuredClone`, trabajo individual), `mc_sp` Mediación Comunicativa Semipresencial (contenido propio: personas sordas, sordociegas o con dificultades de comunicación). Los nombres deben coincidir con `CICLOS` de `api/comun.php`.
- **Juegos en el motor (ejemplo: UT2_E1, parejas de tecnologías):** el juego vive en `construirTarea`, guarda su estado como JSON en un `<input type="hidden" data-campo="…">` (llamando a `programarGuardado()` tras cada jugada), se repinta en `alActualizar()` cuando cambia ese valor (al cargar un borrador), y usa `progresoPropio()` + `COMUN.sinFuentes`. Debe funcionar con ratón (clic y arrastrar), con el dedo (tocar–tocar y mantener pulsado para arrastrar, sin bloquear el scroll) y con teclado.
- UT2_E4 (plano con 50 tecnologías, adaptado a cada especialidad; antes fue UT2_E1 y UT2_E2) NO está en el motor: se modifica con scripts sobre su HTML. Cualquier norma nueva hay que aplicarla también ahí.

## Semipresencial (un ejercicio por unidad)

- En semipresencial (EI SP, IS SP, MC SP) hay **un solo ejercicio por unidad**: `UTn_SP`, un «remix» de los ejercicios de la unidad con la mitad de elementos, en la carpeta `SEMI/` (`SEMI/UTn_SP_Nombre_De_La_Unidad.html`). Se llama como la unidad (p. ej. «UT1 · Digitalización de los sectores productivos») y al alumno no se le presenta como recopilación: nada de «Remix» ni de referencias a los ejercicios originales en la página, el PDF o la dirección.
- Se hace con el motor: `_fuente/UTn_SP.js` (con `const D = __DATOS__;`) + `_fuente/remix_UTn_SP.js`, que saca el contenido de los ejercicios originales en cada construcción. En `construir.js`: `dir: 'SEMI', img: 'UTn_Em' (si usa sus imágenes), remix: 'remix_UTn_SP.js'`.
- `CICLOS`/`ORDEN` solo con los 3 semipresenciales. En todos los ejercicios normales (UTn_Em) se quitan de `ORDEN` (pero se dejan en `CICLOS` para abrir borradores antiguos).
- En la administración va en el bloque «Semipresencial» (`semi: true` en `LISTA`). Las API aceptan `UTn_SP`.

## Normas de todos los ejercicios

- **Inicio:** Nombre, Apellidos y Ciclo a elegir (8 opciones). El resultado de aprendizaje y sus criterios se muestran en esta pantalla, no dentro del ejercicio. Casilla «¿Empezaste en otro ordenador o móvil?» para recuperar con código («Si lo has perdido, pídeselo a tu profesor»).
- **Barra superior (diseño de UT2_E4):** logo, título, «nombre · ciclo · cambiar datos», estado del guardado, botones Guardar, **🔑 Código** y Descargar PDF (color de la unidad, línea inferior del mismo color). En móvil: sin logo ni estado, «Código» solo con 🔑, debajo del título solo «cambiar datos».
- **Botón «Código»:** popup con el código, «Copiar», para qué sirve (seguir en otro dispositivo, vale para todos los ejercicios) y, destacado, «🔑 ¿Has perdido tu código? Pídeselo a tu profesor». Todo lo relativo al guardado y al código va SOLO aquí, nunca en la descripción de la tarea ni en el checklist.
- **Checks:** «Antes de empezar · Qué tienes que hacer» con pasos y normas que el alumno marca con tick; la tarea está bloqueada hasta marcarlos todos y entonces la sección se recoge. «Antes de entregar, comprueba» se pone en verde por partes. Al descargar el PDF con cosas pendientes, aviso «Tu ejercicio aún no está completo» (Seguir trabajando / Descargar igualmente).
- **Cómo se califica:** tabla por partes con puntos sobre 10 + debajo el aviso destacado «⚠️ Todas las partes son obligatorias…» + los 4 criterios generales de entrega.
- **Editor:** cajas con formato; la barra de formato solo aparece mientras se escribe en una caja (todos los dispositivos). Pegar texto bloqueado (solo imágenes), arrastrar/soltar y redimensionar imágenes.
- **Guardado:** automático (1,5 s tras cada cambio + cada 30 s + inmediato al cerrar/ocultar/cambiar de app), primero localStorage y luego IndexedDB, la copia más reciente al cargar. Borrador y código **por alumno** aunque compartan ordenador (clave = ciclo + nombre).
- **Copia en el servidor:** al entrar, cada minuto si hay cambios, al guardar y al volver al inicio; máximo 6 MB; protegida por el código de recuperación del alumno; el contenido recuperado se limpia (solo formato, enlaces https e imágenes).
- **PDF:** nombre `UTn_Em_Apellido1_Apellido2_Nombre.pdf`; sin contexto ni objetivo; color de la unidad; marca de control invisible contra la IA en la última página (ya incluida en el motor). Al descargarlo se registra la entrega (nombre, apellidos, ciclo, ejercicio, fecha).
- **Bloqueos:** el profesor puede bloquear un ejercicio por ciclo desde la administración; el ciclo sale con candado y no se puede empezar ni cargar.
- **Colores por unidad:** UT1 lavanda · UT2 menta · UT3 melocotón · UT4 cielo · UT5 rosa (pantalla y PDF; el motor los aplica solo por el código del ejercicio).
- **Dispositivos:** versión de ordenador y de móvil/tablet; zonas táctiles de 44 px; sin desplazamiento horizontal.
- **Ejemplo relleno:** solo texto de muestra entre corchetes, nunca respuestas reales; no guarda nada.
- Estilo pastel claro, sin modo oscuro, todo en un único HTML.
- **Sin bloque «Entrega»:** la página no muestra «Entrega» ni «Entrega y criterios generales»; esas indicaciones las da el profesor en clase. No definir `entregaEj` ni `entrega` en los datos del ejercicio.

## Servidor, administración y analítica

- Web: `https://myappsserver.duckdns.org/DJK/DJK_EjerciciosInteractivos/` → la raíz (`index.html`) es la **administración con contraseña** (no hay portada pública; el alumnado entra por el enlace directo de cada ejercicio). Contiene: lista de ejercicios con «Copiar enlace», disponibilidad (bloqueos por ciclo), resumen y detalle por ciclo con todos los que han empezado cada tarea, su código, inicio, última actividad, PDF descargado y botón para borrar.
- APIs PHP en `api/`: `admin.php`, `entregas.php`, `estado.php`, `borradores.php`, `visitas.php`, `comun.php` (bloqueado desde la web). Bases de datos SQLite en `/var/www/djk_datos/` (fuera de la web); la contraseña de administración está cifrada en `admin.json`. **Nunca poner la contraseña en el repositorio.**
- Analítica anónima sin cookies; panel en `estadisticas.html` (no enlazado).

## Publicación

- GitHub: `https://github.com/heyteamsoftware/DJK_TareasInteractivas` (rama `main`). Mensajes de commit en español.
- Servidor: `scp -i "C:\Users\ferna\OneDrive\Documentos\Oracle\servidor-apps.key"` a `ubuntu@129.151.249.242:/var/www/html/DJK/DJK_EjerciciosInteractivos/` (subir `UTn/*.html`, `index.html`, `api/` si cambia). Después comprobar con `curl` que la versión publicada contiene el cambio.

## Pruebas obligatorias antes de publicar

- Los 8 ciclos cargan (nº de cajas correcto) y sin errores en consola; validar la sintaxis de los scripts.
- Pantalla de inicio (errores sin nombre/apellidos/ciclo), checks y bloqueo, aviso de pendientes.
- Pegar texto (bloqueado), pegar/soltar imagen y redimensionarla.
- Guardar, recargar, Cargar y Descartar; dos alumnos en el mismo navegador no se pisan.
- Generar el PDF y revisar páginas, texto, imágenes y (si hay) diapositivas apaisadas.
- Ordenador, tablet (768 px) y móvil (375 px): sin scroll horizontal, botones de 44 px, barra en una fila.
- Ejemplo relleno con todos los checks en verde.
- Borrar los datos de prueba que se creen en el servidor.

## Avisos

- Confirmar con el usuario qué ciclos y qué formato quiere antes de construir.
- Si algo depende de un navegador o dispositivo concreto (iPad, Campus), decir que no está probado en real.
- No prometer que el PDF o el guardado funcionan en todos los dispositivos sin probarlo.
- Al añadir una norma nueva: aplicarla en el motor, en UT2_E4 y apuntarla en `INDICE.md`.

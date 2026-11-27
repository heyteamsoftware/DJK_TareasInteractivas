<?php
// Copia de seguridad de los borradores en el servidor, para seguir en otro dispositivo.
// Cada alumno tiene un código de recuperación aleatorio tipo matrícula (p. ej. 4821K) que sirve para todos los ejercicios.
// Los códigos antiguos (p. ej. K7QF-M2XR-9P) siguen valiendo. Los nuevos se apuntan en la tabla «codigos» con su alumno:
// si otro alumno manda el mismo código, se contesta 409 y su navegador saca otro.
//   POST {"codigo","ejercicio","ciclo","nombre","apellidos","datos":"<borrador en JSON>"} → guarda la copia
//   GET  ?codigo=…&ejercicio=…                                                 → devuelve la copia
// Sin el código no se puede leer nada. Las copias de más de un año se borran solas.
declare(strict_types=1);
require __DIR__ . '/comun.php';

const MAX_BYTES = 6 * 1024 * 1024;   // el servidor acepta 8 MB por envío

$codigoValido = fn(string $c): bool => (bool) preg_match('/^(\d{4}[BCDFGHJKLMNPRSTVWXYZ]|[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{2})$/', $c);
// Igual que normNombre() de los ejercicios: sin tildes, en minúsculas y con _ entre palabras
$alumnoDe = function (string $n, string $a): string {
    $s = trim($n . ' ' . $a);
    if (class_exists('Normalizer')) $s = (string) Normalizer::normalize($s, Normalizer::FORM_D);
    $s = mb_strtolower((string) preg_replace('/\p{Mn}/u', '', $s));
    return trim((string) preg_replace('/[^a-z0-9]+/', '_', $s), '_');
};
$ejercicioValido = fn(string $e): bool => (bool) preg_match('/^UT\d{1,2}_(E\d{1,2}|SP)$/', $e);

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $codigo = strtoupper(trim((string) ($_GET['codigo'] ?? '')));
        $ejercicio = (string) ($_GET['ejercicio'] ?? '');
        if (!$codigoValido($codigo) || !$ejercicioValido($ejercicio)) salir(400, ['ok' => false, 'error' => 'Código no válido.']);
        // Tope de intentos de recuperación por IP para que no se puedan probar códigos al azar
        if (!limite(bd(), 'recuperar', 60, 3600)) salir(429, ['ok' => false, 'error' => 'Demasiados intentos. Espera un rato.']);
        $q = bdb()->prepare('SELECT datos, actualizado FROM borradores WHERE codigo = ? AND ejercicio = ?');
        $q->execute([$codigo, $ejercicio]);
        $f = $q->fetch(PDO::FETCH_ASSOC);
        if (!$f) salir(404, ['ok' => false, 'error' => 'No hay ninguna copia de este ejercicio con ese código.']);
        salir(200, ['ok' => true, 'datos' => $f['datos'], 'actualizado' => (int) $f['actualizado']]);
    }

    if ($_SERVER['REQUEST_METHOD'] !== 'POST') salir(405, ['ok' => false]);
    if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > MAX_BYTES) salir(413, ['ok' => false, 'error' => 'demasiado grande']);
    $in = json_decode((string) file_get_contents('php://input', false, null, 0, MAX_BYTES + 1), true);
    if (!is_array($in)) salir(400, ['ok' => false]);
    $codigo = (string) ($in['codigo'] ?? '');
    $ejercicio = (string) ($in['ejercicio'] ?? '');
    $ciclo = nombreCiclo(mb_substr(trim((string) ($in['ciclo'] ?? '')), 0, 60));
    $nombre = mb_substr(trim((string) ($in['nombre'] ?? '')), 0, 60);
    $apellidos = mb_substr(trim((string) ($in['apellidos'] ?? '')), 0, 80);
    $datos = (string) ($in['datos'] ?? '');
    $reg = $datos === '' ? null : json_decode($datos, true);
    if (!$codigoValido($codigo) || !$ejercicioValido($ejercicio) || !is_array($reg)) salir(400, ['ok' => false]);
    // Tiempo de trabajo que lleva (solo los ejercicios con COMUN.cronometro lo guardan en el borrador)
    $segundos = segundos_validos($reg['tiempo'] ?? null);
    unset($reg);

    // El centro comparte IP: tope holgado (una clase entera guardando cada minuto)
    if (!limite(bd(), 'copia', 5000, 3600)) salir(429, ['ok' => false]);
    $db = bdb();
    // Código nuevo (corto): solo puede ser de un alumno
    if (strlen($codigo) === 5) {
        $db->exec('CREATE TABLE IF NOT EXISTS codigos (codigo TEXT PRIMARY KEY, alumno TEXT NOT NULL, creado INTEGER NOT NULL)');
        $alumno = $alumnoDe($nombre, $apellidos);
        $db->prepare('INSERT OR IGNORE INTO codigos (codigo, alumno, creado) VALUES (?, ?, ?)')->execute([$codigo, $alumno, time()]);
        $q = $db->prepare('SELECT alumno FROM codigos WHERE codigo = ?');
        $q->execute([$codigo]);
        if ($q->fetchColumn() !== $alumno) salir(409, ['ok' => false, 'repetido' => true]);
    }
    $db->prepare('INSERT INTO borradores (codigo, ejercicio, ciclo, nombre, apellidos, datos, actualizado, creado, segundos) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(codigo, ejercicio) DO UPDATE SET ciclo = excluded.ciclo, nombre = excluded.nombre, apellidos = excluded.apellidos,
        datos = excluded.datos, actualizado = excluded.actualizado, segundos = excluded.segundos')
       ->execute([$codigo, $ejercicio, $ciclo, $nombre, $apellidos, $datos, time(), time(), $segundos]);
    if (random_int(1, 200) === 1) $db->prepare('DELETE FROM borradores WHERE actualizado < ?')->execute([time() - 365 * 86400]);
    salir(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('DJK borradores: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

<?php
// Copia de seguridad de los borradores en el servidor, para seguir en otro dispositivo.
// Cada alumno tiene un código de recuperación aleatorio (p. ej. K7QF-M2XR-9P) que sirve para todos los ejercicios.
//   POST {"codigo","ejercicio","ciclo","nombre","apellidos","datos":"<borrador en JSON>"} → guarda la copia
//   GET  ?codigo=…&ejercicio=…                                                 → devuelve la copia
// Sin el código no se puede leer nada. Las copias de más de un año se borran solas.
declare(strict_types=1);
require __DIR__ . '/comun.php';

const MAX_BYTES = 6 * 1024 * 1024;   // el servidor acepta 8 MB por envío

$codigoValido = fn(string $c): bool => (bool) preg_match('/^[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{2}$/', $c);
$ejercicioValido = fn(string $e): bool => (bool) preg_match('/^UT\d{1,2}_(E\d{1,2}|SP)$/', $e);

try {
    if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        $codigo = strtoupper(trim((string) ($_GET['codigo'] ?? '')));
        $ejercicio = (string) ($_GET['ejercicio'] ?? '');
        if (!$codigoValido($codigo) || !$ejercicioValido($ejercicio)) salir(400, ['ok' => false, 'error' => 'Código no válido.']);
        // Tope de intentos de recuperación por IP para que no se puedan probar códigos al azar
        if (!limite(bd(), 'recuperar', 300, 3600)) salir(429, ['ok' => false, 'error' => 'Demasiados intentos. Espera un rato.']);
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
    if (!$codigoValido($codigo) || !$ejercicioValido($ejercicio) || $datos === '' || !is_array(json_decode($datos, true))) salir(400, ['ok' => false]);

    // El centro comparte IP: tope holgado (una clase entera guardando cada minuto)
    if (!limite(bd(), 'copia', 5000, 3600)) salir(429, ['ok' => false]);
    $db = bdb();
    $db->prepare('INSERT INTO borradores (codigo, ejercicio, ciclo, nombre, apellidos, datos, actualizado, creado) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        ON CONFLICT(codigo, ejercicio) DO UPDATE SET ciclo = excluded.ciclo, nombre = excluded.nombre, apellidos = excluded.apellidos,
        datos = excluded.datos, actualizado = excluded.actualizado')
       ->execute([$codigo, $ejercicio, $ciclo, $nombre, $apellidos, $datos, time(), time()]);
    if (random_int(1, 200) === 1) $db->prepare('DELETE FROM borradores WHERE actualizado < ?')->execute([time() - 365 * 86400]);
    salir(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('DJK borradores: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

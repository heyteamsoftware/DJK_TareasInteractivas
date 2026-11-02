<?php
// Registro de entregas: el ejercicio llama aquí cuando el alumno descarga su PDF.
//   POST {"ejercicio":"UT1_E1","ciclo":"Educación Infantil","nombre":"Lucía","apellidos":"García Pérez"}
// Solo se guardan esos datos y la fecha; las respuestas del alumno no salen de su navegador.
declare(strict_types=1);
require __DIR__ . '/comun.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') salir(405, ['ok' => false]);

$in = json_decode((string) file_get_contents('php://input', false, null, 0, 2048), true);
if (!is_array($in)) salir(400, ['ok' => false]);
$limpia = fn($v) => trim(preg_replace('/\s+/u', ' ', (string) $v));
$ejercicio = $limpia($in['ejercicio'] ?? '');
$ciclo = $limpia($in['ciclo'] ?? '');
$nombre = $limpia($in['nombre'] ?? '');
$apellidos = $limpia($in['apellidos'] ?? '');

if (!preg_match('/^UT\d{1,2}_E\d{1,2}$/', $ejercicio) || !in_array($ciclo, CICLOS, true)
    || mb_strlen($nombre) < 1 || mb_strlen($nombre) > 60 || mb_strlen($apellidos) < 1 || mb_strlen($apellidos) > 80) {
    salir(400, ['ok' => false]);
}

try {
    $db = bd();
    // Tope por IP y hora para que nadie llene la lista de nombres falsos (el centro comparte IP: tope holgado)
    if (!limite($db, 'entrega', 300, 3600)) salir(429, ['ok' => false]);

    $ahora = time();
    $clave = mb_strtolower($nombre . '|' . $apellidos);
    $upd = $db->prepare('UPDATE entregas SET ultima = ?, veces = veces + 1, nombre = ?, apellidos = ? WHERE ejercicio = ? AND ciclo = ? AND clave = ?');
    $upd->execute([$ahora, $nombre, $apellidos, $ejercicio, $ciclo, $clave]);
    if ($upd->rowCount() === 0) {
        $db->prepare('INSERT INTO entregas (ejercicio, ciclo, clave, nombre, apellidos, primera, ultima) VALUES (?, ?, ?, ?, ?, ?, ?)')
           ->execute([$ejercicio, $ciclo, $clave, $nombre, $apellidos, $ahora, $ahora]);
    }
    salir(200, ['ok' => true]);
} catch (Throwable $e) {
    error_log('DJK entregas: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

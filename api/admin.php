<?php
// Zona de administración: entrar con contraseña y ver las entregas.
//   POST {"accion":"entrar","clave":"…"}  → abre sesión
//   GET  ?accion=datos                    → entregas (requiere sesión)
//   POST {"accion":"salir"}               → cierra sesión
// La contraseña se guarda cifrada (password_hash) en /var/www/djk_datos/admin.json, fuera de la web.
declare(strict_types=1);
require __DIR__ . '/comun.php';

session_name('djk_admin');
session_set_cookie_params(['lifetime' => 0, 'path' => '/DJK/DJK_EjerciciosInteractivos/', 'secure' => true, 'httponly' => true, 'samesite' => 'Strict']);
session_start();

try {
    $db = bd();
    $metodo = $_SERVER['REQUEST_METHOD'];
    $in = $metodo === 'POST' ? json_decode((string) file_get_contents('php://input', false, null, 0, 2048), true) : null;
    $accion = $metodo === 'POST' ? (string) (($in['accion'] ?? '')) : (string) ($_GET['accion'] ?? '');

    if ($accion === 'entrar' && $metodo === 'POST') {
        // Máximo 10 intentos cada 15 minutos por IP
        if (!limite($db, 'login', 10, 900)) salir(429, ['ok' => false, 'error' => 'Demasiados intentos. Espera unos minutos.']);
        $conf = json_decode((string) @file_get_contents(DIR_DATOS . '/admin.json'), true);
        $hash = is_array($conf) ? (string) ($conf['hash'] ?? '') : '';
        if ($hash === '' || !password_verify((string) ($in['clave'] ?? ''), $hash)) salir(401, ['ok' => false, 'error' => 'Contraseña incorrecta.']);
        session_regenerate_id(true);
        $_SESSION['admin'] = true;
        salir(200, ['ok' => true]);
    }
    if ($accion === 'salir' && $metodo === 'POST') {
        $_SESSION = [];
        session_destroy();
        salir(200, ['ok' => true]);
    }
    if (empty($_SESSION['admin'])) salir(401, ['ok' => false, 'error' => 'Sin sesión.']);

    if ($accion === 'datos') {
        $filas = $db->query('SELECT ejercicio, ciclo, nombre, apellidos, primera, ultima, veces FROM entregas ORDER BY ciclo, ejercicio, apellidos, nombre')->fetchAll(PDO::FETCH_ASSOC);
        $bloqueos = $db->query('SELECT ejercicio, ciclo FROM bloqueos')->fetchAll(PDO::FETCH_ASSOC);
        salir(200, ['ok' => true, 'ciclos' => CICLOS, 'entregas' => $filas, 'bloqueos' => $bloqueos]);
    }
    // POST {"accion":"bloqueo","ejercicio":"UT1_E1","ciclo":"…","bloqueado":true|false}
    if ($accion === 'bloqueo' && $metodo === 'POST') {
        $ejercicio = (string) ($in['ejercicio'] ?? ''); $ciclo = (string) ($in['ciclo'] ?? '');
        if (!preg_match('/^UT\d{1,2}_E\d{1,2}$/', $ejercicio) || !in_array($ciclo, CICLOS, true)) salir(400, ['ok' => false]);
        if (!empty($in['bloqueado'])) $db->prepare('INSERT OR IGNORE INTO bloqueos (ejercicio, ciclo, desde) VALUES (?, ?, ?)')->execute([$ejercicio, $ciclo, time()]);
        else $db->prepare('DELETE FROM bloqueos WHERE ejercicio = ? AND ciclo = ?')->execute([$ejercicio, $ciclo]);
        salir(200, ['ok' => true]);
    }
    salir(400, ['ok' => false]);
} catch (Throwable $e) {
    error_log('DJK admin: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

<?php
// Contador anónimo de visitas de los Ejercicios Interactivos DJK.
// No usa cookies ni guarda datos personales: cada navegador manda un identificador aleatorio.
//   POST {"id":"<aleatorio>","pagina":"UT1_E1"} → registra la visita y devuelve el total de visitantes
//   GET                                        → total de visitantes
//   GET ?estadisticas                          → visitas por página y por día (últimos 30 días)
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const DATOS = '/var/www/djk_datos/visitas.db';

function salir(int $codigo, array $datos): never
{
    http_response_code($codigo);
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}

try {
    $db = new PDO('sqlite:' . DATOS);
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec('PRAGMA busy_timeout = 3000');
    $db->exec('CREATE TABLE IF NOT EXISTS visitantes (
        id TEXT PRIMARY KEY, primera INTEGER NOT NULL, ultima INTEGER NOT NULL, visitas INTEGER NOT NULL DEFAULT 1)');
    $db->exec('CREATE TABLE IF NOT EXISTS vistas (
        dia TEXT NOT NULL, pagina TEXT NOT NULL, n INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (dia, pagina))');
    $db->exec('CREATE TABLE IF NOT EXISTS visitantes_pagina (
        id TEXT NOT NULL, pagina TEXT NOT NULL, PRIMARY KEY (id, pagina))');
    $db->exec('CREATE TABLE IF NOT EXISTS altas_ip (ip TEXT NOT NULL, hora INTEGER NOT NULL)');

    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $in = json_decode((string) file_get_contents('php://input', false, null, 0, 1024), true);
        $id = is_array($in) ? (string) ($in['id'] ?? '') : '';
        $pagina = is_array($in) ? (string) ($in['pagina'] ?? '') : '';
        if (!preg_match('/^[A-Za-z0-9-]{16,64}$/', $id) || !preg_match('/^[A-Za-z0-9_]{1,40}$/', $pagina)) salir(400, ['ok' => false]);

        $ahora = time();
        $upd = $db->prepare('UPDATE visitantes SET ultima = ?, visitas = visitas + 1 WHERE id = ?');
        $upd->execute([$ahora, $id]);
        $valido = $upd->rowCount() > 0;
        if (!$valido) {
            // Visitante nuevo: tope de altas por IP y hora para que nadie infle el contador (el centro comparte IP).
            $ip = hash('sha256', $_SERVER['REMOTE_ADDR'] ?? '0');
            $db->prepare('DELETE FROM altas_ip WHERE hora < ?')->execute([$ahora - 3600]);
            $n = $db->prepare('SELECT COUNT(*) FROM altas_ip WHERE ip = ?');
            $n->execute([$ip]);
            if ((int) $n->fetchColumn() < 300) {
                $db->prepare('INSERT OR IGNORE INTO visitantes (id, primera, ultima) VALUES (?, ?, ?)')->execute([$id, $ahora, $ahora]);
                $db->prepare('INSERT INTO altas_ip (ip, hora) VALUES (?, ?)')->execute([$ip, $ahora]);
                $valido = true;
            }
        }
        if ($valido) {
            $dia = date('Y-m-d', $ahora);
            $db->prepare('INSERT INTO vistas (dia, pagina, n) VALUES (?, ?, 1) ON CONFLICT(dia, pagina) DO UPDATE SET n = n + 1')->execute([$dia, $pagina]);
            $db->prepare('INSERT OR IGNORE INTO visitantes_pagina (id, pagina) VALUES (?, ?)')->execute([$id, $pagina]);
        }
    } elseif ($_SERVER['REQUEST_METHOD'] !== 'GET') {
        salir(405, ['ok' => false]);
    }

    $total = (int) $db->query('SELECT COUNT(*) FROM visitantes')->fetchColumn();
    if (isset($_GET['estadisticas'])) {
        $porPagina = $db->query('SELECT v.pagina, SUM(v.n) AS vistas,
            (SELECT COUNT(*) FROM visitantes_pagina p WHERE p.pagina = v.pagina) AS personas
            FROM vistas v GROUP BY v.pagina ORDER BY v.pagina')->fetchAll(PDO::FETCH_ASSOC);
        $desde = date('Y-m-d', time() - 29 * 86400);
        $q = $db->prepare('SELECT dia, SUM(n) AS vistas FROM vistas WHERE dia >= ? GROUP BY dia ORDER BY dia');
        $q->execute([$desde]);
        salir(200, ['ok' => true, 'total' => $total, 'paginas' => $porPagina, 'dias' => $q->fetchAll(PDO::FETCH_ASSOC)]);
    }
    salir(200, ['ok' => true, 'total' => $total]);
} catch (Throwable $e) {
    error_log('DJK visitas: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

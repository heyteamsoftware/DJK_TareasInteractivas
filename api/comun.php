<?php
// Piezas comunes de las APIs de entregas y administración.
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const DIR_DATOS = '/var/www/djk_datos';
const CICLOS = ['Acondicionamiento Físico', 'Animación Sociodeportiva', 'Educación Infantil', 'Higiene Bucodental', 'Integración Social'];

function salir(int $codigo, array $datos): never
{
    http_response_code($codigo);
    echo json_encode($datos, JSON_UNESCAPED_UNICODE);
    exit;
}

function bd(): PDO
{
    $db = new PDO('sqlite:' . DIR_DATOS . '/entregas.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec('PRAGMA busy_timeout = 3000');
    $db->exec('CREATE TABLE IF NOT EXISTS entregas (
        id INTEGER PRIMARY KEY, ejercicio TEXT NOT NULL, ciclo TEXT NOT NULL, clave TEXT NOT NULL,
        nombre TEXT NOT NULL, apellidos TEXT NOT NULL, primera INTEGER NOT NULL, ultima INTEGER NOT NULL,
        veces INTEGER NOT NULL DEFAULT 1, UNIQUE (ejercicio, ciclo, clave))');
    $db->exec('CREATE TABLE IF NOT EXISTS limites (tipo TEXT NOT NULL, ip TEXT NOT NULL, hora INTEGER NOT NULL)');
    $db->exec('CREATE TABLE IF NOT EXISTS bloqueos (ejercicio TEXT NOT NULL, ciclo TEXT NOT NULL, desde INTEGER NOT NULL, PRIMARY KEY (ejercicio, ciclo))');
    return $db;
}

// Cuenta un intento de este tipo para esta IP; devuelve false si se ha pasado del tope en la ventana de tiempo.
function limite(PDO $db, string $tipo, int $tope, int $ventana): bool
{
    $ahora = time();
    $ip = hash('sha256', $_SERVER['REMOTE_ADDR'] ?? '0');
    $db->prepare('DELETE FROM limites WHERE hora < ?')->execute([$ahora - 86400]);
    $n = $db->prepare('SELECT COUNT(*) FROM limites WHERE tipo = ? AND ip = ? AND hora >= ?');
    $n->execute([$tipo, $ip, $ahora - $ventana]);
    if ((int) $n->fetchColumn() >= $tope) return false;
    $db->prepare('INSERT INTO limites (tipo, ip, hora) VALUES (?, ?, ?)')->execute([$tipo, $ip, $ahora]);
    return true;
}

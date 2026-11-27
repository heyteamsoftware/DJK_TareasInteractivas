<?php
// Piezas comunes de las APIs de entregas y administración.
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

const DIR_DATOS = '/var/www/djk_datos';
const CICLOS = ['Acondicionamiento Físico', 'Animación Sociodeportiva', 'Educación Infantil', 'Higiene Bucodental', 'Integración Social',
    'Educación Infantil Semipresencial', 'Integración Social Semipresencial', 'Mediación Comunicativa Semipresencial',
    // Recuperaciones: hacen los ejercicios semipresenciales (UTn_SP)
    'Recuperación Coordinación de Emergencias y Protección Civil', 'Recuperación Integración Social'];

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
    // Nota de los ejercicios que se corrigen solos (p. ej. UT2_E1): la de la última vez que se descargó el PDF
    $cols = array_column($db->query('PRAGMA table_info(entregas)')->fetchAll(PDO::FETCH_ASSOC), 'name');
    if (!in_array('nota', $cols, true)) $db->exec('ALTER TABLE entregas ADD COLUMN nota REAL');
    // Tiempo de trabajo en segundos (ejercicios con COMUN.cronometro): el que llevaba la última vez que descargó el PDF
    if (!in_array('segundos', $cols, true)) $db->exec('ALTER TABLE entregas ADD COLUMN segundos INTEGER');
    // Copia del PDF en el servidor (api/pdf.php): nombre con el que lo descargó, tamaño y hora (el archivo está en DIR_DATOS/pdfs)
    if (!in_array('pdf', $cols, true)) $db->exec('ALTER TABLE entregas ADD COLUMN pdf TEXT');
    if (!in_array('pdf_bytes', $cols, true)) $db->exec('ALTER TABLE entregas ADD COLUMN pdf_bytes INTEGER');
    if (!in_array('pdf_hora', $cols, true)) $db->exec('ALTER TABLE entregas ADD COLUMN pdf_hora INTEGER');
    $db->exec('CREATE TABLE IF NOT EXISTS limites (tipo TEXT NOT NULL, ip TEXT NOT NULL, hora INTEGER NOT NULL)');
    $db->exec('CREATE TABLE IF NOT EXISTS bloqueos (ejercicio TEXT NOT NULL, ciclo TEXT NOT NULL, desde INTEGER NOT NULL, PRIMARY KEY (ejercicio, ciclo))');
    return $db;
}

// Los ejercicios del motor común mandan la clave del ciclo (hb, is_sp…); el plano (UT2_E4) manda el nombre. Se guarda siempre el nombre.
const CLAVES_CICLO = ['af' => 'Acondicionamiento Físico', 'as' => 'Animación Sociodeportiva', 'ei' => 'Educación Infantil',
    'hb' => 'Higiene Bucodental', 'is' => 'Integración Social', 'ei_sp' => 'Educación Infantil Semipresencial',
    'is_sp' => 'Integración Social Semipresencial', 'mc_sp' => 'Mediación Comunicativa Semipresencial',
    'rec_ce' => 'Recuperación Coordinación de Emergencias y Protección Civil', 'rec_is' => 'Recuperación Integración Social'];
function nombreCiclo(string $c): string { return CLAVES_CICLO[$c] ?? $c; }

// Base de datos de las copias de los borradores (quién ha empezado cada tarea, su código y su trabajo)
function bdb(): PDO
{
    $db = new PDO('sqlite:' . DIR_DATOS . '/borradores.db');
    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->exec('PRAGMA busy_timeout = 5000');
    $db->exec('PRAGMA journal_mode = WAL');
    $db->exec('CREATE TABLE IF NOT EXISTS borradores (
        codigo TEXT NOT NULL, ejercicio TEXT NOT NULL, ciclo TEXT NOT NULL, nombre TEXT NOT NULL, apellidos TEXT NOT NULL,
        datos TEXT NOT NULL, actualizado INTEGER NOT NULL, creado INTEGER NOT NULL DEFAULT 0, PRIMARY KEY (codigo, ejercicio))');
    // Bases creadas antes de existir la columna «creado»
    $cols = array_column($db->query('PRAGMA table_info(borradores)')->fetchAll(PDO::FETCH_ASSOC), 'name');
    if (!in_array('creado', $cols, true)) $db->exec('ALTER TABLE borradores ADD COLUMN creado INTEGER NOT NULL DEFAULT 0');
    // Tiempo de trabajo que lleva (segundos), sacado del borrador (reg.tiempo) en los ejercicios con COMUN.cronometro
    if (!in_array('segundos', $cols, true)) $db->exec('ALTER TABLE borradores ADD COLUMN segundos INTEGER');
    return $db;
}

// Segundos de trabajo válidos (entero de 0 a 1000 horas) o null
const MAX_SEGUNDOS = 1000 * 3600;
function segundos_validos(mixed $v): ?int
{
    if (is_float($v) && $v == floor($v)) $v = (int) $v;
    return is_int($v) && $v >= 0 && $v <= MAX_SEGUNDOS ? $v : null;
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

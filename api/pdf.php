<?php
// Copia en el servidor del PDF que el alumno acaba de descargar (el profesor lo descarga desde el panel, suelto o en un ZIP).
//   POST cuerpo = el PDF (Content-Type: application/pdf)
//   cabecera X-Entrega = JSON (codificado como en encodeURIComponent) {"ejercicio","ciclo","nombre","apellidos","archivo"}
// Se guarda solo el de la última descarga de cada alumno en cada ejercicio, en /var/www/djk_datos/pdfs (fuera de la web),
// y su nombre y tamaño en la fila de su entrega (columnas pdf, pdf_bytes, pdf_hora). Si la entrega aún no existe, se crea.
declare(strict_types=1);
require __DIR__ . '/comun.php';

//   GET  ?t=<enlace> → abre ese PDF (para iPhone / iPad y navegadores dentro de apps, que no descargan el PDF generado en la página).
//        El enlace lo devuelve el POST, va firmado y caduca a los 3 días.
const MAX_PDF = 40 * 1024 * 1024;
const VIDA_ENLACE = 3 * 86400;

// Clave para firmar los enlaces: se crea sola la primera vez, fuera de la web
function clave_enlaces(): string
{
    $f = DIR_DATOS . '/pdf_enlaces.key';
    $k = @file_get_contents($f);
    if (!is_string($k) || strlen($k) < 32) {
        $k = bin2hex(random_bytes(32));
        if (@file_put_contents($f, $k, LOCK_EX) === false) throw new RuntimeException('no se puede guardar la clave de enlaces');
        @chmod($f, 0640);
    }
    return $k;
}
function firma(string $h, int $hasta): string { return substr(hash_hmac('sha256', $h . '|' . $hasta, clave_enlaces()), 0, 32); }

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $t = (string) ($_GET['t'] ?? '');
    if (!preg_match('/^([0-9a-f]{64})\.(\d{9,11})\.([0-9a-f]{32})$/', $t, $m)) salir(400, ['ok' => false]);
    [, $h, $hasta, $fi] = $m;
    try { $ok = hash_equals(firma($h, (int) $hasta), $fi); } catch (Throwable $e) { error_log('DJK pdf: ' . $e->getMessage()); salir(500, ['ok' => false]); }
    if (!$ok) salir(403, ['ok' => false]);
    if ((int) $hasta < time()) {
        header('Content-Type: text/html; charset=utf-8');
        http_response_code(410);
        echo '<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><p style="font:18px system-ui;padding:1rem">Este enlace ha caducado. Vuelve a la tarea y pulsa otra vez «Descargar PDF».</p>';
        exit;
    }
    $file = DIR_DATOS . '/pdfs/' . $h . '.pdf';
    if (!is_file($file)) salir(404, ['ok' => false]);
    // Nombre con que lo descargó
    $nom = 'tarea.pdf';
    try {
        foreach (bd()->query('SELECT ejercicio, ciclo, clave, pdf FROM entregas WHERE pdf IS NOT NULL')->fetchAll(PDO::FETCH_ASSOC) as $f) {
            if (hash('sha256', $f['ejercicio'] . '|' . $f['ciclo'] . '|' . $f['clave']) === $h) { $nom = (string) $f['pdf']; break; }
        }
    } catch (Throwable $e) {}
    header('Content-Type: application/pdf');
    header('Content-Disposition: inline; filename="' . str_replace('"', '', $nom) . '"');
    header('Content-Length: ' . filesize($file));
    header('Cache-Control: private, no-store');
    readfile($file);
    exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') salir(405, ['ok' => false]);

$in = json_decode(rawurldecode((string) ($_SERVER['HTTP_X_ENTREGA'] ?? '')), true);
if (!is_array($in)) salir(400, ['ok' => false]);
$limpia = fn($v) => trim(preg_replace('/\s+/u', ' ', (string) $v));
$ejercicio = $limpia($in['ejercicio'] ?? '');
$ciclo = $limpia($in['ciclo'] ?? '');
$nombre = $limpia($in['nombre'] ?? '');
$apellidos = $limpia($in['apellidos'] ?? '');
// Nombre del archivo como lo descargó el alumno (UT1_E1_Apellidos_Nombre.pdf); si no es válido, se compone
$archivo = (string) ($in['archivo'] ?? '');
if (!preg_match('/^[A-Za-z0-9_]{1,150}\.pdf$/', $archivo)) $archivo = $ejercicio . '.pdf';

if (!preg_match('/^UT\d{1,2}_(E\d{1,2}|SP)$/', $ejercicio) || !in_array($ciclo, CICLOS, true)
    || mb_strlen($nombre) < 1 || mb_strlen($nombre) > 60 || mb_strlen($apellidos) < 1 || mb_strlen($apellidos) > 80) {
    salir(400, ['ok' => false]);
}
$largo = (int) ($_SERVER['CONTENT_LENGTH'] ?? 0);
if ($largo < 100 || $largo > MAX_PDF) salir(413, ['ok' => false]);

$tmp = null;
try {
    $db = bd();
    if (!limite($db, 'pdf', 300, 3600)) salir(429, ['ok' => false]);

    // El cuerpo va directo a un archivo temporal (sin cargarlo entero en memoria) y se comprueba que es un PDF
    $dir = DIR_DATOS . '/pdfs';
    if (!is_dir($dir) && !mkdir($dir, 0750, true) && !is_dir($dir)) throw new RuntimeException('no se puede crear ' . $dir);
    $tmp = tempnam($dir, 'sub');
    $src = fopen('php://input', 'rb'); $dst = fopen($tmp, 'wb');
    $n = stream_copy_to_stream($src, $dst, MAX_PDF + 1);
    fclose($src); fclose($dst);
    $f = fopen($tmp, 'rb'); $cab = (string) fread($f, 5); fclose($f);
    if ($n === false || $n < 100 || $n > MAX_PDF || $cab !== '%PDF-') { @unlink($tmp); salir(400, ['ok' => false]); }

    $ahora = time();
    $clave = mb_strtolower($nombre . '|' . $apellidos);
    // Mismo alumno, mismo ejercicio y ciclo → mismo archivo (el nuevo sustituye al anterior)
    $h = hash('sha256', $ejercicio . '|' . $ciclo . '|' . $clave);
    $destino = $dir . '/' . $h . '.pdf';
    if (!rename($tmp, $destino)) throw new RuntimeException('no se puede guardar el PDF');
    $tmp = null;
    @chmod($destino, 0640);

    $upd = $db->prepare('UPDATE entregas SET pdf = ?, pdf_bytes = ?, pdf_hora = ? WHERE ejercicio = ? AND ciclo = ? AND clave = ?');
    $upd->execute([$archivo, $n, $ahora, $ejercicio, $ciclo, $clave]);
    if ($upd->rowCount() === 0) {
        $db->prepare('INSERT INTO entregas (ejercicio, ciclo, clave, nombre, apellidos, primera, ultima, pdf, pdf_bytes, pdf_hora) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)')
           ->execute([$ejercicio, $ciclo, $clave, $nombre, $apellidos, $ahora, $ahora, $archivo, $n, $ahora]);
    }
    $hasta = $ahora + VIDA_ENLACE;
    salir(200, ['ok' => true, 'enlace' => 'pdf.php?t=' . $h . '.' . $hasta . '.' . firma($h, $hasta)]);
} catch (Throwable $e) {
    if ($tmp) @unlink($tmp);
    error_log('DJK pdf: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

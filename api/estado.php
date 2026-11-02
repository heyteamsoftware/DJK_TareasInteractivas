<?php
// Qué ciclos tienen bloqueado un ejercicio (lo consulta cada ejercicio al abrirse).
//   GET ?ejercicio=UT1_E1  → {"ok":true,"bloqueados":["Higiene Bucodental", …]}
declare(strict_types=1);
require __DIR__ . '/comun.php';

$ejercicio = (string) ($_GET['ejercicio'] ?? '');
if (!preg_match('/^UT\d{1,2}_(E\d{1,2}|SP)$/', $ejercicio)) salir(400, ['ok' => false]);
try {
    $q = bd()->prepare('SELECT ciclo FROM bloqueos WHERE ejercicio = ?');
    $q->execute([$ejercicio]);
    salir(200, ['ok' => true, 'bloqueados' => $q->fetchAll(PDO::FETCH_COLUMN)]);
} catch (Throwable $e) {
    error_log('DJK estado: ' . $e->getMessage());
    salir(500, ['ok' => false]);
}

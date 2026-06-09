<?php

declare(strict_types=1);

$path = parse_url($_SERVER['REQUEST_URI'] ?? '/', PHP_URL_PATH) ?: '/';

if ($path === '/api/contact') {
    require __DIR__ . '/contact.php';
    exit;
}

if (preg_match('#^/api/#', $path)) {
    http_response_code(404);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode([
        'success' => false,
        'message' => 'API route not found.'
    ]);
    exit;
}

return false;

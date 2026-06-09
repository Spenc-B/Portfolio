<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Method not allowed'
    ]);
    exit;
}

$autoloadPath = __DIR__ . '/vendor/autoload.php';
if (!file_exists($autoloadPath)) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'PHPMailer is not installed. Run composer install in contact-mailer/.'
    ]);
    exit;
}

require_once $autoloadPath;

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

$name = trim((string)($data['name'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please fill in name, email, and message.'
    ]);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode([
        'success' => false,
        'message' => 'Please enter a valid email address.'
    ]);
    exit;
}

$smtpHost = getenv('SMTP_HOST') ?: '';
$smtpPort = (int)(getenv('SMTP_PORT') ?: 587);
$smtpUser = getenv('SMTP_USERNAME') ?: '';
$smtpPass = getenv('SMTP_PASSWORD') ?: '';
$fromEmail = getenv('SMTP_FROM_EMAIL') ?: '';
$fromName = getenv('SMTP_FROM_NAME') ?: 'Portfolio Contact Form';
$toEmail = getenv('CONTACT_TO_EMAIL') ?: '';

if ($smtpHost === '' || $smtpUser === '' || $smtpPass === '' || $fromEmail === '' || $toEmail === '') {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'SMTP environment variables are missing on the PHP server.'
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $smtpHost;
    $mail->SMTPAuth = true;
    $mail->Username = $smtpUser;
    $mail->Password = $smtpPass;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $smtpPort;

    $mail->setFrom($fromEmail, $fromName);
    $mail->addAddress($toEmail);
    $mail->addReplyTo($email, $name);

    $mail->isHTML(true);
    $mail->Subject = 'New portfolio contact message from ' . $name;

    $safeName = htmlspecialchars($name, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeEmail = htmlspecialchars($email, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8');
    $safeMessage = nl2br(htmlspecialchars($message, ENT_QUOTES | ENT_SUBSTITUTE, 'UTF-8'));

    $mail->Body = "
        <h2>New Contact Form Message</h2>
        <p><strong>Name:</strong> {$safeName}</p>
        <p><strong>Email:</strong> {$safeEmail}</p>
        <p><strong>Message:</strong><br>{$safeMessage}</p>
    ";

    $mail->AltBody = "New Contact Form Message\n\n"
        . "Name: {$name}\n"
        . "Email: {$email}\n\n"
        . "Message:\n{$message}\n";

    $mail->send();

    echo json_encode([
        'success' => true,
        'message' => 'Message sent successfully.'
    ]);
} catch (Exception $exception) {
    http_response_code(500);
    echo json_encode([
        'success' => false,
        'message' => 'Mailer error: ' . $mail->ErrorInfo
    ]);
}

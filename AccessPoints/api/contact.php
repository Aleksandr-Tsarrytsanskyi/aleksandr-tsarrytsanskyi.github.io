
<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

// JSON response
function response(int $status, array $data): never
{
    http_response_code($status);

    echo json_encode(
        $data,
        JSON_UNESCAPED_UNICODE
    );

    exit;
}

// Only POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    response(405, [
        'success' => false,
        'message' => 'Метод запроса не поддерживается'
    ]);
}

// Get data
$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
// $phone = trim($_POST['phone'] ?? '');
$message = trim($_POST['message'] ?? '');

$errors = [];

// Name validation
if ($name === '') {
    $errors['name'] = 'Введите имя';

} elseif (mb_strlen($name) < 2) {
    $errors['name'] = 'Минимум 2 символа';

} elseif (mb_strlen($name) > 50) {
    $errors['name'] = 'Максимум 50 символов';
}

// Email validation
if ($email === '') {
    $errors['email'] = 'Введите email';

} elseif (
    mb_strlen($email) > 254 ||
    !filter_var($email, FILTER_VALIDATE_EMAIL)
) {
    $errors['email'] = 'Некорректный email';
}

// Phone validation
// if ($phone === '') {
//     $errors['phone'] = 'Введите номер телефона';

// } elseif (!preg_match('/^\+?[0-9\s()-]{7,20}$/', $phone)) {
//     $errors['phone'] = 'Некорректный номер телефона';
// }

// Message validation
if ($message === '') {
    $errors['message'] = 'Введите сообщение';

} elseif (mb_strlen($message) < 10) {
    $errors['message'] = 'Минимум 10 символов';

} elseif (mb_strlen($message) > 2000) {
    $errors['message'] = 'Максимум 2000 символов';
}

// Return validation errors
if (!empty($errors)) {
    response(422, [
        'success' => false,
        'errors' => $errors
    ]);
}

// All data is valid
response(200, [
    'success' => true,
    'message' => 'Форма успешно проверена'
]);

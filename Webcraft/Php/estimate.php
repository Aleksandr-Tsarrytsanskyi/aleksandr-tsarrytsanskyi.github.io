<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

require_once __DIR__ . '/db.php';

$config = require __DIR__ . '/config.php';


/*
|--------------------------------------------------------------------------
| Только POST
|--------------------------------------------------------------------------
*/

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {

    http_response_code(405);

    echo json_encode([
        'success' => false,
        'message' => 'Метод не поддерживается.'
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| Получение данных
|--------------------------------------------------------------------------
*/

$type = trim($_POST['type'] ?? '');

$design = trim($_POST['design'] ?? '');

$budget = trim($_POST['budget'] ?? '');

$deadline = trim($_POST['deadline'] ?? '');

$name = trim($_POST['name'] ?? '');

$contact = trim($_POST['contact'] ?? '');

$comment = trim($_POST['comment'] ?? '');

$features = $_POST['features'] ?? [];


/*
|--------------------------------------------------------------------------
| Проверка features
|--------------------------------------------------------------------------
*/

if (!is_array($features)) {
    $features = [];
}

$features = array_map(
    'trim',
    $features
);

$features = array_filter(
    $features
);


/*
|--------------------------------------------------------------------------
| Валидация
|--------------------------------------------------------------------------
*/

if (
    $type === '' ||
    $design === '' ||
    $budget === '' ||
    $deadline === '' ||
    $name === '' ||
    $contact === ''
) {

    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'Заполните обязательные поля.'
    ]);

    exit;
}


if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {

    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'Некорректное имя.'
    ]);

    exit;
}


if (mb_strlen($contact) < 3 || mb_strlen($contact) > 255) {

    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'Некорректный контакт.'
    ]);

    exit;
}


if (mb_strlen($comment) > 5000) {

    http_response_code(422);

    echo json_encode([
        'success' => false,
        'message' => 'Комментарий слишком длинный.'
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| Features → строка
|--------------------------------------------------------------------------
*/

$featuresText = $features
    ? implode(', ', $features)
    : 'Не указаны';


/*
|--------------------------------------------------------------------------
| Сохранение в БД
|--------------------------------------------------------------------------
*/

try {

    $stmt = $pdo->prepare("
        INSERT INTO project_requests (
            type,
            design,
            features,
            budget,
            deadline,
            name,
            contact,
            comment
        )
        VALUES (
            :type,
            :design,
            :features,
            :budget,
            :deadline,
            :name,
            :contact,
            :comment
        )
    ");


    $stmt->execute([
        ':type' => $type,
        ':design' => $design,
        ':features' => $featuresText,
        ':budget' => $budget,
        ':deadline' => $deadline,
        ':name' => $name,
        ':contact' => $contact,
        ':comment' => $comment,
    ]);


    /*
     * ID заявки
     */
    $requestId = (int)$pdo->lastInsertId();


} catch (Throwable $e) {

    http_response_code(500);

    echo json_encode([
        'success' => false,
        'message' => 'Не удалось сохранить заявку.'
    ]);

    exit;
}


/*
|--------------------------------------------------------------------------
| Telegram
|--------------------------------------------------------------------------
*/

$telegramToken =
    $config['telegram']['bot_token'];

$telegramChatId =
    $config['telegram']['chat_id'];


/*
|--------------------------------------------------------------------------
| Сообщение
|--------------------------------------------------------------------------
*/

$telegramMessage =
    "🔔 <b>Новая заявка на оценку проекта</b>\n\n" .

    "🆔 <b>Заявка:</b> #{$requestId}\n\n" .

    "🌐 <b>Тип сайта:</b>\n" .
    htmlspecialchars($type, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "🎨 <b>Дизайн:</b>\n" .
    htmlspecialchars($design, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "⚙️ <b>Функции:</b>\n" .
    htmlspecialchars($featuresText, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "💰 <b>Бюджет:</b>\n" .
    htmlspecialchars($budget, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "⏱ <b>Срок:</b>\n" .
    htmlspecialchars($deadline, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "👤 <b>Имя:</b>\n" .
    htmlspecialchars($name, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "📞 <b>Контакт:</b>\n" .
    htmlspecialchars($contact, ENT_QUOTES, 'UTF-8') .
    "\n\n" .

    "💬 <b>Комментарий:</b>\n" .
    htmlspecialchars(
        $comment ?: 'Не указан',
        ENT_QUOTES,
        'UTF-8'
    );


/*
|--------------------------------------------------------------------------
| Отправка Telegram
|--------------------------------------------------------------------------
*/

$telegramUrl =
    "https://api.telegram.org/bot" .
    $telegramToken .
    "/sendMessage";


$telegramData = [
    'chat_id' => $telegramChatId,
    'text' => $telegramMessage,
    'parse_mode' => 'HTML',
];


$ch = curl_init($telegramUrl);

curl_setopt_array($ch, [
    CURLOPT_POST => true,

    CURLOPT_POSTFIELDS =>
        http_build_query($telegramData),

    CURLOPT_RETURNTRANSFER => true,

    CURLOPT_TIMEOUT => 10,

    CURLOPT_CONNECTTIMEOUT => 5,
]);


$telegramResponse = curl_exec($ch);

$telegramHttpCode =
    curl_getinfo(
        $ch,
        CURLINFO_HTTP_CODE
    );

$telegramError =
    curl_error($ch);

curl_close($ch);


/*
|--------------------------------------------------------------------------
| Проверяем Telegram
|--------------------------------------------------------------------------
*/

$telegramSuccess = false;


if (
    $telegramResponse !== false &&
    $telegramHttpCode === 200
) {

    $telegramResult =
        json_decode(
            $telegramResponse,
            true
        );


    if (
        is_array($telegramResult) &&
        ($telegramResult['ok'] ?? false) === true
    ) {

        $telegramSuccess = true;
    }
}


/*
|--------------------------------------------------------------------------
| Обновляем статус Telegram
|--------------------------------------------------------------------------
*/

if ($telegramSuccess) {

    $stmt = $pdo->prepare("
        UPDATE project_requests
        SET telegram_sent = 1
        WHERE id = :id
    ");

    $stmt->execute([
        ':id' => $requestId
    ]);
}


/*
|--------------------------------------------------------------------------
| Ответ JS
|--------------------------------------------------------------------------
|
| Важно:
| заявка уже сохранена в БД.
|
*/

echo json_encode([
    'success' => true,
    'request_id' => $requestId,
    'telegram_sent' => $telegramSuccess,
    'message' => 'Заявка успешно отправлена.'
]);
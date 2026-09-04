<?php

function sendTelegramMessage(array $data): void
{
    $botToken = '8924831706:AAGlbsNhf9SdgnZG92a8-Nm_eNbRKSLxjNk';
    $chatId = '-1004376455891';


    $telegram =
        trim($data['telegram'] ?? '');


    $telegramText =
        $telegram !== ''
            ? $telegram
            : 'Не указан';


    $text =

        "📩 Обсудить проект\n\n" .

        "🆔 Заявка: #{$data['id']}\n" .

        "👤 Имя: {$data['name']}\n" .

        "📧 Email: {$data['email']}\n" .

        "💬 Telegram: {$telegramText}\n\n" .

        "📝 Сообщение:\n" .
        $data['message'];


    $url =
        "https://api.telegram.org/bot" .
        $botToken .
        "/sendMessage";


    $postData = [
        'chat_id' => $chatId,
        'text' => $text
    ];


    $ch = curl_init($url);


    curl_setopt_array($ch, [

        CURLOPT_POST =>
            true,

        CURLOPT_POSTFIELDS =>
            $postData,

        CURLOPT_RETURNTRANSFER =>
            true,

        CURLOPT_TIMEOUT =>
            5,

        CURLOPT_CONNECTTIMEOUT =>
            3

    ]);


    $response =
        curl_exec($ch);


    $httpCode =
        curl_getinfo(
            $ch,
            CURLINFO_HTTP_CODE
        );


    $curlError =
        curl_error($ch);


    curl_close($ch);


    /*
     * Telegram действительно вернул ошибку.
     */

    if (
        $response === false ||
        $httpCode < 200 ||
        $httpCode >= 300
    ) {

        throw new RuntimeException(
            $curlError ||
            'Telegram API error'
        );
    }
}
<?php
// Проверяем, были ли отправлены данные методом POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Получаем данные из формы
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Адрес, на который будет отправлено письмо
    $to = "sashatsar11@mail.ru"; // Замените на ваш email

    // Тема письма
    $subject = "Новое сообщение с сайта";

    // Тело письма
    $body = "Имя: " . htmlspecialchars($name) . "\n";
    $body .= "Email: " . htmlspecialchars($email) . "\n";
    $body .= "Сообщение: " . htmlspecialchars($message) . "\n";

    // Заголовки письма
    $headers = "From: tsarewalex2006@gmail.com\r\n"; // Замените на ваш email или оставьте как есть
    $headers .= "Reply-To: " . htmlspecialchars($email) . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Отправка письма
    if (mail($to, $subject, $body, $headers)) {
        echo "Сообщение успешно отправлено!";
    } else {
        echo "Ошибка при отправке сообщения.";
    }
} else {
    // Если данные не были отправлены методом POST
    echo "Данные не были отправлены.";
}
?>
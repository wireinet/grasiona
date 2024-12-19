<?php
$recepient = "wireinet@yandex.ru";
$siteName = "ГРАСИОНА";

// Данные пользователя
$your_name = trim($_POST['your-name']);
$your_phone = trim($_POST['your-phone']);
$your_address = trim($_POST['your-address']);
// $yandex_id = trim($_POST['yandex-id']);

$message = "
    <h2 style='font-size:20px;color: #FF4500;'>Данные клиента:</h2>
    <span>Имя: $your_name</span><br/>
    <span>Телефон: $your_phone</span><br/>
    <span>Адрес объекта: $your_address</span><br/>
";
$pagetitle = "Заявка с сайта grasiona.ru";

mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
// mail($recepient, $pagetitle, $message, $headers);

?>
<?php
$recepient = "stroi-gazon@yandex.ru";
// $recepient = "wireinet@yandex.ru";
$siteName = "СТРОЙ-ГАЗОН";

// Данные пользователя
$your_name = trim($_POST['your-name']);
$your_phone = trim($_POST['your-phone']);
$yandex_id = trim($_POST['yandex-id']);

$message = "
    <img width='30' height='30' style='display:block;margin-bottom:10px' src='https://landshaft-plan.ru/images/logo150.png'
    <span>Имя: <b>$your_name</b></span><br/>
    <span>Телефон: <b><a style='display:inline;color:#0000FF;' href='tel:$your_phone'>$your_phone</a></b></span><br/>
    <h3 style='font-size:14px;color: #FF4500;'>Запрос на образец проекта</h3><br/>
    <span>ЯНДЕКС ID: $yandex_id</span>
";
$pagetitle = "Запрос на образец";

mail($recepient, $pagetitle, $message, "Content-type: text/html; charset=\"utf-8\"\n From: $recepient");
// mail($recepient, $pagetitle, $message, $headers);

?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $to = "beniakryt@gmail.com"; // Замените на ваш email
    $subject = "New Quote Request";
    $message = "Name: $name\nPhone: $phone";
    $headers = "From: no-reply@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?>
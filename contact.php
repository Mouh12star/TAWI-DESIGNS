<?php
$to = "tawigraphicdesigns@gmail.com";
$subject = "New Contact Form Submission";
$message = $_POST['message'];
$headers = "From: " . $_POST['email'];
mail($to, $subject, $message, $headers);
?>

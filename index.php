<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
    $message = filter_var($_POST['message'], FILTER_SANITIZE_STRING);

    $to = "kirujsx@gmail.com";
    $subject = "New Contact Form Submission";
    $body = "Name: $name\nEmail: $email\n\nMessage:\n$message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        $response = array("success" => true, "message" => "Message sent successfully!");
    } else {
        $response = array("success" => false, "message" => "Failed to send message. Please try again later.");
    }

    header('Content-Type: application/json');
    echo json_encode($response);
    exit;
}

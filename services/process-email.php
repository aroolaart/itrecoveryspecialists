<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['comments'];
    $recipient = "anton.roolaart@gmail.com";
    $subject = "ITRS Comments Received";
    $formcontent = "From: $name <br/> Email: $email <br/> Telephone: $phone <hr><br/><br/> Message: <br/><br/>$message";

    $headers = "From: " .$email . "\r\n";
    $headers .= "Reply-To: ". $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if(mail($recipient, $subject, $formcontent, $headers))
    {
        echo "successful";
    }
    else
    {
        echo "error";
    }
?>
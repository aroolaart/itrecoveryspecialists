<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['comments'];
    $recipient = "anton.roolaart@gmail.com";
    $subject = "ITRS Comments Received";
    $company = $_POST['company'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $formcontent = "From: $name <br/> Email: $email <br/> Telephone: $phone <br/> Company: $company<br/>Address: $address<br/>State: $state  Zip: $zip<hr><br/><br/> Message: <br/><br/>$message";

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
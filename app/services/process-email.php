<?php
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $comments = $_POST['comments'];
    $recipient = "john@itrecoveryspecialists.com";
    $subject = "ITRS Comments Received";
    $company = $_POST['company'];
    $address = $_POST['address'];
    $state = $_POST['state'];
    $zip = $_POST['zip'];
    $now = date('l jS \of F Y h:i:s A');

    $message = '<html><body>';
    $message .= '<table rules="all" style="border-color: #666;" cellpadding="10">';
    $message .= "<tr style='background: #eee;'><td><strong>Date:</strong> </td><td>Message received: " . $now . "</td></tr>";
    $message .= "<tr><td><strong>Name:</strong> </td><td>" . $name . "</td></tr>";
    $message .= "<tr><td><strong>Phone:</strong> </td><td>" . $phone . "</td></tr>";
    $message .= "<tr><td><strong>Email:</strong> </td><td>" . $email . "</td></tr>";
    $message .= "<tr><td><strong>Company:</strong> </td><td>" . $company . "</td></tr>";
    $message .= "<tr><td><strong>Address:</strong> </td><td>" . $address . "</td></tr>";
    $message .= "<tr><td><strong>State:</strong> </td><td>" . $state . "</td></tr>";
    $message .= "<tr><td><strong>Zip:</strong> </td><td>" . $zip . "</td></tr>";
    $message .= "<tr><td><strong>Company:</strong> </td><td>" . $company . "</td></tr>";        
    $message .= "<tr><td><strong>Message:</strong> </td><td>" . htmlentities($comments) . "</td></tr>";
    $message .= "</table>";
    $message .= "</body></html>";


    $headers = "From: " .$email . "\r\n";
    $headers .= 'Cc: anton.roolaart@gmail.com' . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if(mail($recipient, $subject, $message, $headers))
    {
        echo "successful";
    }
    else
    {
        echo "error";
    }
?>
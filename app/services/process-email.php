<?php

	// let's help with spam and clean input fields
	function test_input($data) {
	  $data = trim($data);
	  $data = stripslashes($data);
	  $data = htmlspecialchars($data);
	  return $data;
	}

    $name = test_input($_POST['name']);
    $email = test_input($_POST['email']);
    $phone = test_input($_POST['phone']);
    $comments = test_input($_POST['comments']);
    $recipient_email = "john@itrecoveryspecialists.com";
    //$recipient_email = "anton.roolaart@gmail.com";
	$subject = "ITRS FORM SUBMITTED";
    $company = test_input($_POST['company']);
    $address = test_input($_POST['address']);
    $state = test_input($_POST['state']);
    $zip = test_input($_POST['zip']);
    $country = test_input($_POST['country']);
    $interest = test_input($_POST['interest']);
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
    $message .= "<tr><td><strong>Country:</strong> </td><td>" . $country . "</td></tr>";
    $message .= "<tr><td><strong>Interested in:</strong> </td><td>" . $interest . "</td></tr>";
    $message .= "<tr><td><strong>Company:</strong> </td><td>" . $company . "</td></tr>";        
    $message .= "<tr><td><strong>Message:</strong> </td><td>" . htmlentities($comments) . "</td></tr>";
    $message .= "</table>";
    $message .= "</body></html>";


    $headers = "From: " .$email . "\r\n";
    $headers .= 'Cc: anton.roolaart@gmail.com' . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

    if(mail($recipient_email, $subject, $message, $headers))
    {
        echo "successful";
    }
    else
    {
        echo "error";
    }
?>
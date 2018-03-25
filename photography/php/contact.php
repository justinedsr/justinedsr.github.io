<?php
	$to = "justine.desire.a@gmail.com";

	$name = $_POST['name'];
	$email = $_POST['email'];
	$message = $_POST['message'];

	$subject = 'Website contact';
	$from = 'From: ' . $name;
	$body = "From: $name \nE-Mail: $email \nMessage: \n$message";

	if (mail ($to, $subject, $body, $from)) {
		echo '<p>Your message has been sent!</p>';
	} else {
		echo '<p class="error">Something went wrong, try again!</p>';
	}
?>

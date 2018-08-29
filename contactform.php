<?php
if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];
  $mailTo = "directlytest@yahoo.com";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from Leo and here are the message";
  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend")
}

<?php

if(isset($_POST['submit'])) {

  $name = $_POST['name'];
  $subject = $_POST['subject'];
  $mailFrom = $_POST['mail'];
  $message = $_POST['message'];

  $mailTo = "enter_email_here";
  $headers = "From: ".$mailFrom;
  $txt = "You have received an email from ".$name ".\n\n".$message;

  mail($mailTo, $subject, $txt, $headers);
  header("Location: index.php?mailsend")
}

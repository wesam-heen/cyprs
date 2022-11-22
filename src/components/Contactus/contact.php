<?php
//get data from form  
$name = $_POST['firstName'];
$lastName = $_POST['lastName'];
$Email = $_POST['email'];
$phone = $_POST['phone'];
$nationality= $_POST['nationality'];
$message= $_POST['message'];
$to = "info@avioncitizenship.com";
$txt ="First Name : ". $name . "\r\Last Name : " . $lastName . "\r\Email : " . $Email . "\r\nPhone : " . $phone . "\r\Nationality : " . $nationality . "\r\nMessage :" . $message;
$headers = "From: Idress@website.com" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:/thankYou");
?>
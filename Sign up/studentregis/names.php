<?php

$mysqli = mysqli_connect("localhost","root","","studentregistration");

if($mysqli->connect_errno) {
    echo "Failed to connect to Mysql: " . $mysqli->connect_error;
}

$sname = $_POST['sname'];
$gender_type = $_POST['gender_type'];
$email = $_POST['email'];
$phone_number = $_POST['phone_number'];
$course_type = $_POST['course_type'];
$email = $_POST['email'];
$dob = $_POST['dob'];
$university_name = $_POST['university_name'];
$sem_type = $_POST['sem_type'];
$saddress = $_POST['saddress'];
$city = $_POST['city'];
$pincode = $_POST['pincode'];
$card_type = $_POST['card_type'];
$card_no = $_POST['card_no'];
$father_name = $_POST['father_name'];
$f_email = $_POST['f_email'];
$f_phone_number = $_POST['f_phone_number'];
$confirm_type = $_POST['confirm_type'];

$sql1 = "INSERT INTO student (sname,gender_type,email, phone_number, course_type, dob, university_name,
 sem_type, saddress, city, pincode, card_type, card_no, father_name, f_email, f_phone_number,
  confirm_type)
VALUES ('$sname', '$gender_type', '$email', '$phone_number', '$course_type', '$dob', '$university_name',
 '$sem_type', '$saddress', '$city', '$pincode', '$card_type', '$card_no', '$father_name',
'$f_email', '$f_phone_number', '$confirm_type')";

if($mysqli->query($sql1) === TRUE){
    echo "New record created";
header("Location: ../../index.html"); 

} else {
    echo "Error: ".$sql1."<br>".$mysqli->error;
}

$mysqli->close();
?>
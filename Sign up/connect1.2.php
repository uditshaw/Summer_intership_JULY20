<?php

$mysqli = mysqli_connect("localhost","root","","studentregistration");

if($mysqli->connect_errno) {
    echo "Failed to connect to Mysql: " . $mysqli->connect_error;
}

$username = $_POST['username'];
$email = $_POST['email'];
$password1 = $_POST['password1'];
$password2 = $_POST['password2'];
if(strcmp($password1,$password2) === 0)
{
$c=0;
$sql = "SELECT username, email FROM signup";
$result = $mysqli->query($sql);

if($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) 
    {
        if($email==$row['email'])
       { echo "Email already exists";
    $c++;}
    
        if($username==$row['username'])
        {
            echo "Username already exists";
            $c++;
        }
    }
}
if($c==0) {
$sql1 = "INSERT INTO signup (username, email, password)
VALUES ('$username', '$email', '$password1')";

if($mysqli->query($sql1) === TRUE){
    echo "New record created";
header("Location: studentregis/index.html"); 

} else {
    echo "Error: ".$sql1."<br>".$mysqli->error;
}
}
}
else
echo "Password and Confirm password not same";
$mysqli->close();

?>
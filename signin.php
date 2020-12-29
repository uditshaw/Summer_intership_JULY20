<?php

$mysqli = mysqli_connect("localhost","root","","studentregistration");

if($mysqli->connect_errno) {
    echo "Failed to connect to Mysql: " . $mysqli->connect_error;
}
$username="";
$email = $_POST['email'];
$password = $_POST['password'];
$sql = "SELECT * FROM signup";
$result = $mysqli->query($sql);
$flag=0;
if($result->num_rows > 0) {
    while($row = $result->fetch_assoc())
    {
        if($email==$row['email'] && $password==$row['password'])
        {
            $username=$row['username'];
            echo "<h1>Welcome ".$username."</h1>";
            $flag=1;
            $sql2 = "SELECT * FROM student";
            $result1 = $mysqli->query($sql2);
            if($result1->num_rows > 0) 
            {
                while($row1 = $result1->fetch_assoc())
                {
                    if(strcmp($row1['email'],$row['email']) === 0)
                    {
                        echo "<h3><b>Details of the student are as follows:-</b></h3>";
                        echo "Student Id: ".$row1['id']."<br>";
                        echo "Name: ".$row1['sname']."<br>";
                        echo "Gender: ".$row1['gender_type']."<br>";
                        echo "Email: ".$row1['email']."<br>";
                        echo "Phone Number: ".$row1['phone_number']."<br>";
                        echo "Course: ".$row1['course_type']."<br>";
                        echo "Date of Birth: ".$row1['dob']."<br>";
                        echo "University name: ".$row1['university_name']."<br>";
                        echo "Semester: ".$row1['sem_type']."<br>";
                        echo "Address: ".$row1['saddress']."<br>";
                        echo "City: ".$row1['city']."<br>";
                        echo "Pincode: ".$row1['pincode']."<br>";
                        echo "Card Type chosen: ".$row1['card_type']."<br>";
                        echo "Card number: ".$row1['card_no']."<br>";
                        echo "Father's name: ".$row1['father_name']."<br>";
                        echo "Father's Email id: ".$row1['f_email']."<br>";
                        echo "Father's phone number: ".$row1['f_phone_number']."<br>";
                        echo "Communication mode: ".$row1['confirm_type']."<br>";
                    }
                }
            }

        } 
    }
    if($flag === 0)
    echo "Invalid email or password. Please try again";
}
else {echo "No User Exists";}
$mysqli->close();
?>
<br>
<button><a href="index.html">Logout</a></button>

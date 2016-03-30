<?php

//http://www.tutorialrepublic.com/php-tutorial/php-mysql-insert-query.php
//http://www.w3schools.com/php/php_mysql_insert_lastid.asp

//http://php.net/manual/en/tutorial.forms.php

$postData = file_get_contents("php://input");
$dataObject = json_decode($postData);

$servername = "localhost";
$username = "Thomas";
$password = "123456";
$dbname = "new_DII";

// Create connection
$conn = mysql_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysql_connect_error());
}

mysql_select_db('new_DBII', $conn);

// Escape user inputs for security
$SID = mysqli_real_escape_string($dataObject->SID);
$name = mysqli_real_escape_string($dataObject->name);
$IID = mysqli_real_escape_string($dataObject->IID);
$major = mysqli_real_escape_string($dataObject->major);
$degreeHeld = mysqli_real_escape_string($dataObject->degreeHeld);
$career = mysqli_real_escape_string($dataObject->career);

$sql = "INSERT INTO `students` (`SID`, `name`, `IID`, `major`, `degreeHeld`, `career`) VALUES
        (" . $SID . ", '" .$name. "'," .$IID. ", '" .$major. "', '" . $degreeHeld . "', '" . $career. "')";

echo "<script>console.log( $sql );</script>";


mysql_query($sql);

mysql_close($conn);
?>

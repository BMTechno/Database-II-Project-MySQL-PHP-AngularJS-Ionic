<?php
$postData = file_get_contents("php://input");
$dataObject = json_decode($postData);

$servername = "localhost";
$username = "Thomas";
$password = "123456";
$dbname = "DB_II";

// Create connection
$conn = mysql_connect($servername, $username, $password);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysql_connect_error());
}

mysql_select_db($dbname, $conn);

// Escape user inputs for security
$SID = mysql_real_escape_string($dataObject->SID);
$IID = mysql_real_escape_string($dataObject->IID);
$major = mysql_real_escape_string($dataObject->major);


$myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
$txt = $SID . " " . $IID . " " . $major. "\n";
fwrite($myfile, $txt);

$sql = "UPDATE students
        SET IID = $IID, major = '$major'
        WHERE SID = $SID ";


fwrite($myfile, $sql);

mysql_query($sql);

fclose($myfile);
mysql_close($conn);
?>

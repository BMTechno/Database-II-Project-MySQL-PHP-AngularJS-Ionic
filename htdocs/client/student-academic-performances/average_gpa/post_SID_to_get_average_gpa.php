<?php

$postData = file_get_contents("php://input");
$dataObject = json_decode($postData);

$SID = mysql_real_escape_string($dataObject->SID);

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

$sql = "SELECT grade FROM enrollment WHERE SID = $SID";

$result = mysql_query($sql) or die(mysql_error());

$counter = 0;
$grade_point = 0;

while($row = mysql_fetch_array($result)){
	if($row['grade'] == 'A'){
	    $grade_point += 4;
        $counter++;
	}
	else if($row['grade'] == 'A-'){
	    $grade_point += 3.7;
        $counter++;
	}
	else if($row['grade'] == 'B+'){
	    $grade_point += 3.3;
        $counter++;
    }
    else if($row['grade'] == 'B'){
	    $grade_point += 3.0;
        $counter++;
    }
    else if($row['grade'] == 'B-'){
	    $grade_point += 2.7;
        $counter++;
    }
    else if($row['grade'] == 'C+'){
	    $grade_point += 2.3;
        $counter++;
    }
    else if($row['grade'] == 'C'){
	    $grade_point += 2.0;
        $counter++;
    }
    else if($row['grade'] == 'C-'){
	    $grade_point += 1.7;
        $counter++;
    }
    else if($row['grade'] == 'D+'){
	    $grade_point += 1.3;
        $counter++;
    }
    else if($row['grade'] == 'D'){
	    $grade_point += 1;
        $counter++;
    }
    else if($row['grade'] == 'F'){
	    $grade_point += 0;
        $counter++;
    }
}

$myfile = fopen("testfile.txt", "w") or die("Unable to open file!");
fwrite($myfile, $sql);

$avg = $grade_point/$counter;
$sql = "UPDATE students
        SET GPA = ".$avg."
        WHERE SID = $SID ";

mysql_query($sql);

fwrite($myfile, $outp ."\n");
fwrite($myfile, $sql ."\n");
fclose($myfile);

mysql_close($conn);
?>

<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "Thomas", "123456", "DB_II");

$result = $conn->query("SELECT * from students");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"SID":"'         . $rs["SID"]        . '",';
    $outp .= '"name":"'         . $rs["name"]       . '",';
    $outp .= '"IID":"'          . $rs["IID"]        . '",';
    $outp .= '"major":"'        . $rs["major"]      . '",';
    $outp .= '"degreeHeld":"'   . $rs["degreeHeld"] . '",';
    $outp .= '"career":"'       . $rs["career"]     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "Thomas", "123456", "new_DII");

$result = $conn->query("SELECT CID, name, credits, groupID
                        FROM courses");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"CID":"'  . $rs["CID"] . '",';
    $outp .= '"name":"'   . $rs["name"]        . '",';
    $outp .= '"credits":"'. $rs["credits"]     . '",';
    $outp .= '"groupID":"'. $rs["groupID"]     . '"}';

}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>

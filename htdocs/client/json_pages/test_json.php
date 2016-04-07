<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$conn = new mysqli("localhost", "Thomas", "123456", "DB_II");

$result = $conn->query("SELECT * from students");

$outp = "";
while($rs = $result->fetch_array(MYSQLI_ASSOC)) {
    if ($outp != "") {$outp .= ",";}
    $outp .= '{"SID":"'                       . $rs["SID"]                        . '",';
    $outp .= '"name":"'                       . $rs["name"]                       . '",';
    $outp .= '"IID":"'                        . $rs["IID"]                        . '",';
    $outp .= '"major":"'                      . $rs["major"]                      . '",';
    $outp .= '"degreeHeld":"'                 . $rs["degreeHeld"]                 . '",';
    $outp .= '"career":"'                     . $rs["career"]                     . '",';
    $outp .= '"GPA":"'                        . $rs["GPA"]                        . '",';
    $outp .= '"cumulative_credit":"'          . $rs["cumulative_credit"]          . '",';
    $outp .= '"algorithm":"'                  . $rs["algorithm"]                  . '",';
    $outp .= '"core_courses_credits":"'       . $rs["core_courses_credits"]       . '",';
    $outp .= '"elective_courses_credits":"'   . $rs["elective_courses_credits"]   . '",';
    $outp .= '"grade_below_B":"'              . $rs["grade_below_B"]              . '",';
    $outp .= '"con_class":"'                  . $rs["con_class"]                  . '",';
    $outp .= '"passing_status":"'             . $rs["passing_status"]             . '",';
    $outp .= '"reason":"'                     . $rs["reason"]                     . '"}';
}
$outp ='{"records":['.$outp.']}';
$conn->close();

echo($outp);
?>
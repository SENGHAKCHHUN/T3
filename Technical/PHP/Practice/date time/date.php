<?php
date_default_timezone_set('America/New_York');
// date_default_timezone_set("America/New_York");
// echo date('Y-m-d');
// echo "\n";
// echo date('h-i-sa');
$d = mktime(12, 39, 55, 8, 12, 2014);
echo "Created date is " . date("Y-m-d h:i:sa", $d);

$d=strtotime("10:30pm April 15 2014");
echo "Created date is " . date("Y-m-d h:i:sa", $d);
?>

<?php
// TODO
if (isset($_GET["ID"])){
    $ID = $_GET["ID"];
}
require_once "database.php";
$users = $db->prepare("DELETE FROM users WHERE ID = :ID");
$users->execute([":ID"=> $ID]);
header("Location: index.php");



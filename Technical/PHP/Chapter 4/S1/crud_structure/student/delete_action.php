<?php
// TODO
require_once "database.php";

if (isset($_GET["id"])){
    $id = $_GET["id"];
    $student = $connect->prepare("DELETE FROM student WHERE id=:id");
    $student->execute([":id"=> $id]);
    header("Location: index.php");
}

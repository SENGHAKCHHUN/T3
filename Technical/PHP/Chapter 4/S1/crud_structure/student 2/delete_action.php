<?php
// TODO
require_once "database.php";
if (isset($_GET["id"])):
    $id = $_GET["id"];
    $student = $connect->prepare("delete from student where id=:id;");
    $student->execute([":id" => $id]);
endif;
header("Location: index.php");

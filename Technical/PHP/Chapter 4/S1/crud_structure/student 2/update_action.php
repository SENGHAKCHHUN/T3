<?php
// TODO
require_once "database.php";

if ($_SERVER["REQUEST_METHOD"] == "POST"){
    var_dump($_POST);
    $name = $_POST["name"];
    $age = $_POST["age"];
    $class = $_POST["class"];
    $id = $_POST["id"];
    echo ($id);
    $student = $connect->prepare("update student set name=:name, age=:age, class=:class where id=:id;");
    $student->execute([
        ":name" => $name,
        ":age" => $age,
        ":class" => $class,
        ":id" => $id

    ]);
}
header("Location: index.php");
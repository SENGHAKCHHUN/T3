<?php
//TODO:
require_once "database.php";
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    $name = $_POST["name"];
    $age = $_POST["age"];
    $class = $_POST["class"];

    $student = $connect->prepare("INSERT INTO student (name, age, class) values (:name,:age,:class);");
    $student->execute([
        ":name" => $name,
        ":age" => $age,
        ":class" => $class
    ]);
    header("Location: index.php");
}

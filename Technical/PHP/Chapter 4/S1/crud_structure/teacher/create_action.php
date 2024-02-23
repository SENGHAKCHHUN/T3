<?php
//TODO:
require_once("database.php");
if ($_SERVER["REQUEST_METHOD"] == 'POST') {
    var_dump($_POST);
    $name = $_POST["name"];
    $age =  $_POST['age'];
    $class = $_POST["class"];
    $users = $db->prepare("INSERT INTO users (Name, age, class) VALUES (:name,:age,:class);");
    $users->execute([
        ":name" => $name,
        ":age" => $age,
        ":class" => $class
    ]);
    header("Location: index.php");
}

<?php
// TODO
require_once "database.php";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    // var_dump($_POST);
    $name = $_POST["name"];
    $age = $_POST["age"];
    $class = $_POST["class"];
    $ID = $_POST["id"];
    $user = $db->prepare("update users set Name = :name, age = :age, class= :class WHERE ID = :ID");  
    print_r($user);
    $user->execute([
        ":name" => $name,
        ":age" => $age,
        ":class" => $class,
        ":ID" => $ID
    ]);
    header("Location: index.php");
}

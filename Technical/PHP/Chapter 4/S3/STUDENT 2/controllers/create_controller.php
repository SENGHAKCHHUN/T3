<?php
// TODO:
require_once "../models/student.php";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $name = $_POST["name"];
    $age = $_POST["age"];
    $province = $_POST["province"];
    createStudent($name, $age, $province);
}
header("Location: ../index.php");
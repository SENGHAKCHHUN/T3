<?php
// TODO:


require_once "../models/student.php";
if ($_SERVER["REQUEST_METHOD"] == "POST"){
    $id = $_POST["id"];
    $name = $_POST["name"];
    $age = $_POST["age"];
    $province = $_POST["province"];
    updateStudent($id ,$name, $age, $province);
}
header("Location: ../index.php");
<?php
// TODO:
require_once "../models/student.php";
if (!empty(isset($_GET["id"]))){
    $id = $_GET["id"];
    deleteStudent($id);
}
header("Location: ../index.php");

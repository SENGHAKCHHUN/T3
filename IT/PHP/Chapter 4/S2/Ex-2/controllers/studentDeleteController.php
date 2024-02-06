<?php
//TODO: DELETE STUDENT BY ID

require_once "../models/student.php";
$id = $_GET['studentID'];
deleteStudent($id);
header("Location: ../index.php");
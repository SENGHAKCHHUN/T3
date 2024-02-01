<?php
//TODO: EDIT THE STUDENT BY ID
require_once "../models/student.php";
$id = $_POST['id'];
$studentName = $_POST['name'];
$classCode = $_POST['class'];
$studentEmail = $_POST['email'];
$genderCode = $_POST['gender'];
$studentHobby = $_POST['hobby'];
editStudent($id,$studentName,$genderCode,$classCode,$studentHobby,$studentEmail);
header('Location: ../index.php');

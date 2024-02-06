<?php
// TODO: CREATE OR ADD A NEW STUDENT  
require_once "../models/student.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $studentName = $_POST['name'];
    $classCode = $_POST['class'];
    $genderCode = $_POST['gender'];
    $studentEmail = $_POST['email'];
    $studentHobby = $_POST['hobby'];
    addStudent($studentName,$genderCode,$classCode,$studentHobby,$studentEmail);
    header('Location: ../index.php');
}
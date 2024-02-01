<?php
// TODO: connect to database
$database = "practice";
$user = "root";
$host = "localhost";
$password = "";
$dsn = "mysql:host=$host;dbname=$database;charset=UTF8";
$connect = new PDO($dsn, $user, $password);

// $student = $connect->prepare("SELECT * FROM student");
// $student->execute();
// $students = $student->fetchAll();


?>
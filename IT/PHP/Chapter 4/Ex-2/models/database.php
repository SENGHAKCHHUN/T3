<?php
/**
 * TODO: Database Connection
 */
$user = "root";
$password = "";
$dbname = "student_management";
$local = "localhost";
$dsn = "mysql:host=$local;dbname=$dbname; charset=UTF8";
$connect = new PDO($dsn, $user, $password);




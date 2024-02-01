<?php
// TODO: connect to database
$host = "localhost";
$user = "root";
$database = "crud";
$password = "";
$dsn = "mysql:host=$host; dbname=$database;charset=UTF8";
$db = new PDO($dsn, $user, $password);



$states = $db->query("select * from users")->fetchAll();
$dsn = "mysql:host=localhost;dbname=crud;charset=UTF8";
?>
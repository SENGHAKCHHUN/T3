<?php
// TODO: connect to database
$user = "root";
$password = "";
$database = "practice";
$hostname = "localhost";

$dsn = "mysql:host=$hostname;dbname=$database;charset=UTF8";
$connect = new PDO($dsn , $user, $password);
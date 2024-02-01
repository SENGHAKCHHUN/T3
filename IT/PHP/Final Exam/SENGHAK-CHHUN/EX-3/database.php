<?php
// TODO: connect to database
$localname = 'localhost';
$database = ' blog_db';
$user = 'root';
$password = '';
$dsn = "mysql:host=$localname;dbname=$database;charset=UTF8";
$db = new PDO($dsn , $user, $password);
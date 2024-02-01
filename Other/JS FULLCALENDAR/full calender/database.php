<?php
    $user = 'root';
    $database = 'calendar';
    $hostname = 'localhost';
    $password = '';
    $dsn = "mysql:host=$hostname;dbname=$database;charset=UTF8";
    $connect = new PDO($dsn, $user, $password);
    
?>
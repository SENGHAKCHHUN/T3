<?php
require "../../database/database.php";
$emails = $connection->prepare("select * from users");
$emails->execute();
$data =$emails->fetchAll();
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = $_POST['email'];
    $password = $_POST['password'];
    foreach ($data as $value){
        if ($value['email'] == $email && password_verify($password, $value['password'] )){
            echo "successful";
        };
    }
    
}

?>
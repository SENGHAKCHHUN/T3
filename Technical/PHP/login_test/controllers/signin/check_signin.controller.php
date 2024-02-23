<?php
require "../../database/database.php";
require "../../models/user.model.php";
$emails = $connection->prepare("select * from users");
$emails->execute();
$data =$emails->fetchAll();
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);
    $user = accountExist($email);
    if (count($user) > 0){
        if (password_verify($password, $user[3])){
            echo "YES";
            header("Location: /signout");
        }else{
            echo "Wrong heart";
        }
    }    
    else{
        echo "Wrong email";
    }
}
?>
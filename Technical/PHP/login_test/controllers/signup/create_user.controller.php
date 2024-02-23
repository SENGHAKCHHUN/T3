<?php
    session_start();
    require "../../database/database.php";
    require "../../models/user.model.php";
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])){
            $name = htmlspecialchars($_POST['name']);
            $password = htmlspecialchars($_POST['password']);
            $email = htmlspecialchars($_POST['email']);
            $password_encrypt = password_hash($password, PASSWORD_BCRYPT);
            $user = accountExist($email);
            if (count($user) == 0){
                createUser($name,  $password_encrypt, $email);
                header("Location: /signin");
                $_SESSION['success'] = "Account Created successfully";
            }else{
                echo "Account already exists";
            }
        }
    }
?>
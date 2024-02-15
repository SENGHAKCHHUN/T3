<?php
    require "../../database/database.php";
    require "../../models/user.model.php";
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        if (!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])){
            $name = htmlspecialchars($_POST['name']);
            $password = htmlspecialchars($_POST['password']);
            $email = htmlspecialchars($_POST['email']);
            $password_encrypt = password_hash($password, PASSWORD_BCRYPT);
            $iscreated =  createUser($name, $password_encrypt, $email);
            if ($iscreated){
                header("Location: /signin");
            }else{
                header("Location: /");
            }

        }
    }
?>
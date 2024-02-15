<?php
function  createUser($name, $password, $email): bool
{
    global $connection;
    $user = $connection->prepare("INSERT INTO users (name, email, password) values (:name, :email, :password_encrypt);");
    $user->execute([
        ":name" => $name,
        ":email" => $email,
        ":password_encrypt" => $password
    ]);
    return $user->rowCount() > 0;
}
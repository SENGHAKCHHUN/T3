<?php

require "database.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (!empty($_POST['title']) and !empty($_POST['description'])) {
        $statement = $connection->prepare("update posts set title = :title, description = :description where id = :id");
        $statement->execute([
            ':title' => $_POST['title'],
            ':description' => $_POST['description'],
            ':id' => $_POST['id']

        ]);

        header('location: /post');
    }
}

<?php
require 'database.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {

    if (!empty($_POST['title']) and !empty($_POST['description'])) {

        $statement = $connection->prepare("insert into posts (title, description) values (:title, :description)");
        $statement->execute([
            ':title' => $_POST['title'],
            ':description' =>  $_POST['description']
        ]);

        header('location: /post');
    }
}
?>
<?php
require '../../database/database.php';
require '../../models/post.model.php';
if($_SERVER['REQUEST_METHOD'] == 'GET'){
    $title =htmlspecialchars($_GET['title']);
    $description =htmlspecialchars($_GET['description']);
    $id = $_GET['id'];
    if(!empty($title) && !empty($description)){
        editPost($title, $description, $id);
        header('Location: /post');
    }
}

?>
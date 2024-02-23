<?php
require '../../database/database.php';
require '../../models/post.model.php';
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    $title =htmlspecialchars($_POST['title']);
    $description =htmlspecialchars($_POST['description']);
    if(!empty($title) && !empty($description)){
        createPost($title, $description);
        header('location: /post');
    }
}

?>
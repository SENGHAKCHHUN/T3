<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');
require_once "database.php";

if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (!empty($_POST['title']) and !empty($_POST['description'])){
        $id = $_POST['id'];
        $title = $_POST['title'];
        $description = $_POST['description'];
        $post_date = date('Y-m-d');
        $posts = $db->prepare("UPDATE posts SET title=:title, description=:description, post_date=:post_date WHERE id=:id ;");
        $posts->execute([
            ":title" => $title,
            ":description" => $description,
            ":post_date" => $post_date,
            ":id" => $id
        ]);
    }else{
        error_log("All inputs must be not empty!");
    }
    header("Location: index.php");
};

<?php
// Get current date
date_default_timezone_set('Asia/Phnom_Penh');
require_once "database.php";
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
    if (!empty($_POST['title']) and !empty($_POST['description'])){
        $title = $_POST['title'];
        $description = $_POST['description'];
        $post_date = date('Y-m-d');
        $posts = $db->prepare("INSERT INTO posts ( title, description, post_date) VALUES (:title, :description, :post_date) ;");
        $posts->execute([
            ":title" => $title,
            ":description" => $description,
            ":post_date" => $post_date
        ]);
    }else{
        error_log(" You must input all field!");
    }
    header("Location: index.php");
};

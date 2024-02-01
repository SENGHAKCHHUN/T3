<?php
require_once "database.php";
$id = $_GET['id'];
$posts = $db->prepare('DELETE FROM posts WHERE id=:id');
$posts->execute([":id" => $id]);
header("Location: index.php"); 

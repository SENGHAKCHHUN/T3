<?php
require '../../database/database.php';
require '../../models/post.model.php';
$id = isset($_GET['id']) ? $_GET['id'] : null;
if ($id != null)
{
    deletePost($id);

    header('Location: /post');
}
<?php 

function getPosts(){
    global $connection;
    $statement = $connection->prepare('SELECT * from posts');
    $statement->execute();
    return $statement->fetchAll(PDO::FETCH_ASSOC);
}

function getPostById($id){
    global $connection;
    $statement = $connection->prepare("SELECT * FROM posts WHERE id = :id ");
    $statement->execute(
        [':id' => $id]
    );
    return $statement->fetch(PDO::FETCH_ASSOC);
}


function createPost($title, $description){
    global $connection;
    $statement = $connection->prepare("INSERT INTO posts (title, description) VALUES (:title, :description)");
    $statement->execute([
    ':title' => $title,
    ':description' => $description
    ]);
    return $statement->rowCount()>0;
}

function editPost($title, $description, $id){
    global $connection;
    $statement = $connection->prepare("UPDATE posts SET title = :title, description = :description WHERE id = :id");
    $statement->execute([
        ':title' => $title,
        ':description' => $description,
        ':id' => $id
    ]);
    return $statement -> rowCount()>0;
}

function deletePost($id){
    global $connection;
    $statement = $connection->prepare("DELETE FROM posts WHERE id = :id");
    $statement->execute([
    ':id' => $id
    ]);
    return $statement ->rowCount()>0;
}


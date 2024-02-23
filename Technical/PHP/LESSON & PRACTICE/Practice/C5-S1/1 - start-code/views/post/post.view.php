<?php
require "partials/head.php"; 
require "partials/nav.php" ;
require "models/post.model.php";
?>

  <a href="views/post/post.create.view.php" class="btn btn-primary mt-2">Add Post</a>
  <main>
    <div class="p-3">
    <?php
        $posts= getPosts();
        foreach($posts as $post): ?>
      <li>
        <?= $post['title'] ?> |  
        <span><?= $post['description'] ?></span> | 
        <a href="../../controllers/post/post.delete.controller.php?id=<?=$post['id'] ?>" >Delete</a> |
        <a href="views/post/post.edit.view.php?id=<?=$post['id']?>">Edit</a>
      </li>

    <?php endforeach; ?>
    </div>
  </main>

<?php require "partials/footer.php" ?>
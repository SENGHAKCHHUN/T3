
<?php
    require "../../partials/head.php";
    require "../../functions.php";
    require "../../partials/nav.php";   

    require '../../models/post.model.php';
    // $id =isset($_GET["id"]) ?  $_GET["id"] : null;
    $post = getPostById($_GET['id']);
    echo $post;
?>
<div class="card mt-5">
    <div class="card-body">
        <form action="../../controllers/post/post.edit.contoller.php" method="get">
            <input type="hidden" name="id" value="<?= $post['id'] ?>">
            <div class="form-group">
                <input type="text" placeholder="title" class="form-control" name="title" value="<?= $post['title'] ?>">
            </div>
            <div class="form-group">
                <textarea class="form-control" placeholder="Description" name="description"><?= $post['description'] ?></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-block btn-warning">Edit Post</button>
            </div>
        </form>
    </div>
</div>

<?php 
    require "../../partials/footer.php" 
?>
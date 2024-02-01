<?php
require_once('../templates/header.php');
?>

<div class="container p-4">
    <form action="" method="post">
        <div class="form-group">
            <input type="text" class="form-control" placeholder="Item name" name="item">
        </div>
        <div class="form-group">
            <input type="number" class="form-control" placeholder="Item price" name="price">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary btn-block">Save</button>
        </div>
    </form>
</div>

<?php
require_once('../templates/footer.php');
?>
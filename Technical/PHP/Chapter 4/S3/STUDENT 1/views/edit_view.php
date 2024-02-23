<?php
require_once('templates/header.php');

?>

<div class="container p-4">
    <?php
   // TO DO:
   // Get the id of the item to update in query
   // Get data for this item from database

    ?>


        <form action="/edit_model.php" method="post">
            <input type="hidden" value="" name="itemId">
            <div class="form-group">
                <input type="text" class="form-control" name="item" >
            </div>
            <div class="form-group">
                <input type="number" class="form-control" name="price" >
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Change</button>
            </div>
        </form>
 
</div>

<?php
require_once('templates/footer.php');
?>
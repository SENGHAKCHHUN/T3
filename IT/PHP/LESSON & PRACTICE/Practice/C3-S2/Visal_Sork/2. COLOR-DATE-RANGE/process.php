<?php require_once('templates/header.php') ?>
<?php
    // YOUR CODE HERE 
    function getValue($key) {
        return isset($_POST[$key]) && !empty($_POST[$key]) ? $_POST[$key] : "Not Defined";
    }
?>
    <div class="alert alert-secondary">
        <strong>Color: </strong> <span><?= getValue('color') ?></span>
    </div>
    <div class="alert alert-info">
        <strong>Range: </strong> <span><?= getValue('range') ?></span>
    </div>
    <div class="alert alert-danger">
        <strong>Date: </strong> <span><?= getValue('date') ?></span>
    </div>

<?php require_once('templates/footer.php') ?>
<?php require_once 'templates/header.php' ?>
<?php
function getFromPost($key)
{
    return isset($_POST[$key]) ? $_POST[$key] : null;
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') :
    $color = getFromPost('color');
    $range = getFromPost('range');
    $date = getFromPost('date');

?>
    <div class="alert alert-secondary">
        <strong>Color: </strong> <span><?= $color; ?></span>
    </div>
    <div class="alert alert-info">
        <strong>Range: </strong> <span><?= $range; ?></span>
    </div>
    <div class="alert alert-danger">
        <strong>Date: </strong> <span><?= $date; ?></span>
    </div>
<?php endif; ?>
<?php require_once 'templates/footer.php' ?>
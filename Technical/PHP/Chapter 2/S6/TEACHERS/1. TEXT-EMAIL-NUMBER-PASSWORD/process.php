<?php require_once 'templates/header.php' ?>
<ul class="list-group">
<?php
    function getFromPost($key)
    {
        return isset($_POST[$key]) ? $_POST[$key] : null;
    }

    if ($_SERVER['REQUEST_METHOD'] == 'POST') :
        $name = getFromPost('username');
        $number = getFromPost('number');
        $email = getFromPost('email');
        $password = getFromPost('password');
        $message = getFromPost('message');
    ?>
    <li class="list-group-item"><?= $name; ?></li>
    <li class="list-group-item"><?= $email; ?></li>
    <li class="list-group-item"><?= $password; ?></li>
    <li class="list-group-item"><?= $number; ?></li>
    <li class="list-group-item"><?= $message; ?></li>
<?php endif; ?>
</ul>
<?php require_once 'templates/footer.php' ?>
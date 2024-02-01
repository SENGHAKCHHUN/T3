<?php 
    require 'config/config.php';
    require 'templates/header.php';
?>
<div class="card">
        <div class="card-header">
            <p><?= $_SESSION['username']; ?></p>
            <p><?= $_SESSION['email']; ?></p>
        </div>
        <div class="card-body">
            <p class="card-text"><?= $_SESSION['message']; ?></p>
        </div>
    </div>
<a href="logout.php">log out</a>
<?php require 'templates/footer.php'?>
<?php require_once('templates/header.php') ?>
<ul class="list-group">
<?php
   // YOUR CODE HERE
   function getValue($value){
    return isset($_POST[$value]) && !empty($_POST[$value]) ? $_POST[$value] : "Not Defined";
   }
   if($_SERVER["REQUEST_METHOD"] == "POST"):
?>
    <li class="list-group-item"><?= getValue('name') ?></li>
    <li class="list-group-item"><?= getValue('email') ?></li>
    <li class="list-group-item"><?= getValue('password') ?></li>
    <li class="list-group-item"><?= getValue('number') ?></li>
    <li class="list-group-item"><?= getValue('message') ?></li>
    
<?php endif ?>
</ul>
<?php require_once('templates/footer.php') ?>
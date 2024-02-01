<?php // HEADER
    require_once("./templates/header.php");
?>
<ul class="list-group">
<?php
   // YOUR CODE HERE
   $name = '';
    $number = '';
    $email = '';
    $password = '';
    $message = '';
    if (isset($_POST["name"])){
        $name =  $_POST["name"];
    }
    if (isset($_POST["number"])){
        $number = $_POST["number"];
    }
    if (isset($_POST["email"])){
        $email = $_POST["email"];
    }
    if (isset($_POST["password"])){
        $password = $_POST["password"];
    }
    if (isset($_POST["message"])){
        $message = $_POST["message"];
    }
?>
    <li class="list-group-item"><?php echo $name // name; ?></li>
    <li class="list-group-item"><?php echo $email // email; ?></li>
    <li class="list-group-item"><?php echo $password // password; ?></li>
    <li class="list-group-item"><?php echo $number // number; ?></li>
    <li class="list-group-item"><?php echo $message // message; ?></li>

</ul>
<?php // FOOTER 
    require_once("./templates/footer.php");
?>
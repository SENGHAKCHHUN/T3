q<!-- ===== HEADER ===== -->
<?php require_once('template/header.php') ?>


<!-- ==== MAIN ====== -->
<?php
$name = $club = $time = $skill = "";
if (isset($_POST['name'])) {
    $name = $_POST['name'];
}
if (isset($_POST['club'])) {
    $club = $_POST['club'];
}
if (isset($_POST['time'])) {
    $time = $_POST['time'];
}
if (isset($_POST['skill'])) {
    for($i = 0; $i < count($_POST['skill']); $i++) {
        ($i < count($_POST['skill']) - 1) ? $skill = $skill . $_POST['skill'][$i] . " and " : $skill = $skill . $_POST['skill'][$i];
    }
}
?>


<div class="container application">
    <div class="frame">
        <div class="header">
            <img src="img/image-removebg-preview.png" alt="">
            <h1>Thank You <strong style="color: darkorange;"><?= $name ?></strong> !!</h1>
        </div>
       <p>We received your application for the <?=$club?></p>
       <p>You are <strong><?= $skill ?></strong> </p> 
        <p>You will be available on <strong><?= $time ?></strong></p>
    </div>
</div>





<!-- === FOOTER ==== -->
<?php require_once('template/footer.php') ?>
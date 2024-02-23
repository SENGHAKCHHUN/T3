<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="./css/result.css">
</head>
<?php
if (isset($_POST['name'])) {
    $name = $_POST['name'];
};

if (isset($_POST["skill"])) {
    $skills = $_POST["skill"];
    $skillText = " are ";
    if ((count($skills)) > 1) {
        for ($i = 0; $i < count($skills); $i++) {
            if (count($skills) - 1 == $i) {
                $skillText = $skillText . " and ";
            } elseif ($i != 0) {
                $skillText = $skillText . ", ";
            }
            $skillText = $skillText . $skills[$i];
        }
    } else {
        foreach ($skills as $skill) {
            $skillText = $skillText . $skill;
        }
    }
};


if (isset($_POST['club'])) {
    $club =  $_POST['club'];
};
if (isset($_POST['time'])) {
    $time = $_POST['time'];
};

?>

<body>
    <div class="container">
        <img src="./image/pn.png">
        <div class="thank">
            <img src="./image/prize.png">
            <h1>CERTIFICATION OF CLUB LEADER <br>
                <hr>
            </h1>
            <img src="./image/prize.png">
        </div>
        <h1 id="name">THANKS <br><?php echo $name ?> <br></h1>
        <h3>We received your application for the<?php echo " " . $club ?></h3>
        <h3>You<?php echo $skillText ?></h3>
        <h3>You will be available on <?php echo " " . $time ?></h3>
        <div class="time">
            <?php
            echo "<h4> Presented on " . date("y,m,d") .  "</h4>"
            ?>
            <hr>
            <h5 id="boss">MEANGHEANG PHO</h5>
            <h5>SOCIAL AFFAIR</h5>
        </div>
    </div>
</body>

</html>
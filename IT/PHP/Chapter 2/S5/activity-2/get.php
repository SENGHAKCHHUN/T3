<?php
require_once('templates/header.php');

echo "<ul>";

// TODO
// - Your name is XXXXX
echo "<li> Your name is ". $_GET["name"] . "</li". '<br>';
// - Your hobbies areXXXXX
echo "<li> Your hobbies are ". $_GET["hobby"] . "</li". '<br>';
// - You are a boy/girl
$sex = isset($_GET["gender"])=="male"?"boy":"girl";
echo $sex;
echo "<li> You are a ". $sex . "</li";

echo "</ul>";

require_once('templates/footer.php');

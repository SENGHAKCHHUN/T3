<?php
// include of header
require('includes/header.php');
//  Get value from URL here

if (isset($_GET['page'])) {
    echo "<h1>" . $_GET['page'] ."</h1>";
}else{
    echo "<h1> Home </h1>";
}

//  include of footer 
require('includes/footer.php');






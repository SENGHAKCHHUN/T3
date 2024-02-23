<?php 
// include of header
require("includes/header.php");
// include navbar
require("includes/navbar.php");
//  include of pages 

$path = "home";
if (isset($_GET["page"])){
    $path = $_GET["page"];
    if (file_exists("pages/" .$path . '.php')){
        require_once("pages/" .$path . '.php');
    }
    else{
        require_once("pages/404.php");
    }
}
//  include of footer 
require("includes/footer.php");
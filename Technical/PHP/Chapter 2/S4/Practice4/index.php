<?php
// include of header
require("includes/header.php");
// include navbar
require("includes/navbar.php");
//  include of pages 
if (isset($_GET["page"])){
    if (file_exists("pages/" . $_GET["page"] . ".php")) {
        require_once("pages/" . $_GET["page"] . ".php");
    }
    else{
        require("pages/404.php");
    }
}
//  include of footer 
require("includes/footer.php");

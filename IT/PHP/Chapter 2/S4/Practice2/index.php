
<?php 
// include of header
require_once("includes/header.php");


//  include of pages 
$path = "home";
if (isset($_GET["page"])){
    $path = $_GET["page"];
}
require_once("pages/" .$path . ".php");


//  include of footer
require_once("includes/footer.php"); 
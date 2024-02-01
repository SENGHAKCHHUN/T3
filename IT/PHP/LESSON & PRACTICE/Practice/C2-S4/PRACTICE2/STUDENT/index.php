
<?php 
// include of header
require_once('includes/header.php');

// include of navbar
require_once('includes/navbar.php');

// include of pages 
if($_GET['page']=="home"){
    require_once('pages/home.php');
}
else{
    require_once('pages/about.php');
}

// include of footer 
require_once('includes/footer.php');




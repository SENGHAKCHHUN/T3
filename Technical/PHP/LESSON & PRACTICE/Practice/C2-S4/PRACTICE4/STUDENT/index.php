<?php 
// include of header
require_once('includes/header.php');

// include navbar
require_once('includes/navbar.php');

// include of pages 
if(isset($_GET['page'])){
    $page='pages/'. $_GET['page'] . '.php';
    file_exists($page) ? $page : $page='pages/404.php';
    require_once($page);
}
else {
    require_once('pages/home.php');
}
// include of footer 
require_once('includes/footer.php');




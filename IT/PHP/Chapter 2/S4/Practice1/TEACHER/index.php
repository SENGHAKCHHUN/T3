
<?php 
// include of header
include_once 'includes/header.php'; 
//  Get value from url  
if (isset($_GET['page'])) {
    echo "<h1>" . $_GET['page'] . "</h1>";
} else {
    echo "<h1>Home</h1>";
}
//  include of footer 
include_once 'includes/footer.php';





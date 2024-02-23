
<?php 
// include of header
 require_once('includes/header.php');
//  Get value from URL here
$result='';
isset($_GET['page']) ? $result = $_GET['page'] : $result = 'Home';
echo "<h1>$result</h1>";

//  include of footer 
require_once('includes/footer.php');






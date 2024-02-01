<li><a href="page_one.php">Page One</a></li>
<!-- <li><a href="home.php">Home</a></li> -->


<?php 
session_start();
if(isset($_SESSION['username'])){
    echo '<li><a href="logout.php">Log Out</a></li>';
    echo $_SESSION['username'];
}
else{ 
    echo '<li><a href="home.php">Log In</a></li>';
}
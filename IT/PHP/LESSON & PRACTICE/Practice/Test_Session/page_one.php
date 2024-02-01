
<li><a href="page_two.php">Page Two</a></li>
<li><a href="home.php">Home</a></li>
<li><a href="logout.php">Log Out</a></li>

<?php 
session_start();
if(isset($_SESSION['username'])){
    echo $_SESSION['username'];
}
else{
    echo "No Session";
}
?>
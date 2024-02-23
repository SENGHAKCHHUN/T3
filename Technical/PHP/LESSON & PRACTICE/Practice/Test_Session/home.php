<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <li><a href="page_one.php">Page One</a></li>
    <li><a href="page_two.php">Page Two</a></li>
    <li><a href="logout.php">Log Out Please</a></li>
    <form action="" method="POST"> 
        <input type="text" name="username" placeholder="Your Name">
        <button>Add You</button>
    </form>
</body>
</html>

<?php
session_start();
if($_SERVER['REQUEST_METHOD'] == 'POST'){
    if(isset($_POST['username'])) {
        $_SESSION['username'] = $_POST['username'];
    }
}
?>
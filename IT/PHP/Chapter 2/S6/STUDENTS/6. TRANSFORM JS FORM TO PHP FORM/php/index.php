<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
</head>
<body>
    <form action="index.php" method="post">
        <input type="password" placeholder="password" name="password">
        <button type="submit">log in</button>
        <?php 
            $password ="";
            if (isset($_POST["password"])){
                $password = $_POST["password"];
                if ($password == "1234"){
                    echo "<div>This is sensitive data visible only if the user knows the correct password</div>";
                }
            }
        ?>
    </form>
</body>
</html>
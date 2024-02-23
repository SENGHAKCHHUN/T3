<?php
    require_once "./templete/header.php";
    require_once "./templete/footer.php";
    $connect = new PDO("mysql:host=localhost;dbname=practice;charset=UTF8", "root", "");
    $student = $connect->prepare("SELECT * FROM student");
    $student->execute();
    $users = $student->fetchAll();
    // print_r($users);
?>
<div class="container">
    <div class="table table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>AGE</th>
                <th>CLASS</th>
            </tr>
        </thead>
        
    </div>
</div>


<?php
require_once "./templete/footer.php";

?>
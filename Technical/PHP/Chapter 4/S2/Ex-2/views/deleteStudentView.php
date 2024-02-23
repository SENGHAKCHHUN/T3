<link rel="stylesheet" href="../assets/css/style.css">
<?php
require_once '../models/student.php';
// TODO 
$id = $_GET["studentID"];
$student = $connect->prepare("select * from students where studentID=:id;");
$student->execute([":id" => $id]);
$user = $student->fetch();
$sex = $user['genderCode'];
if ($sex == 'm') {
    $src = 'male.jpg';
} elseif ($sex == 'f') {
    $src = 'female.jpg';
}
$classCode = $user['classCode'];
$className = $database->prepare("SELECT className FROM classes WHERE classCode =:classCode;");
$className->execute([':classCode' => $classCode]);
$nameClass = $className->fetch();
?>
<div class="card-alert box-shadow">
    <div class="card-alert-header">
        <img src="../assets/images/alert-icon.png" alt="">
    </div>
    <hr>
    <div class="card-alert-profile">
        <img src="<?= "../assets/images/" . $src ?>// TODO" alt="">
        <h2> <?= $user['studentName'] ?></h2>
        <h4>From batch:<?= $nameClass[0] ?></h4>
    </div>
    <div class="card-alert-btn">
        <p>Are you sure that you want to delete this student?</p>
        <div>
            <button class='btn teal'><a href="../index.php">Cancel</a></button>
            <button class='btn warning'><a href="../controllers/studentDeleteController.php?studentID=<?= $user['studentID'] ?>">Delete</a></button>
        </div>
    </div>
</div>
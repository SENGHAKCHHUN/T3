<link rel="stylesheet" href="assets/css/style.css">
<?php
require_once 'models\student.php';
// TODO
$students = getStudents();
?>
<h1>Student Management</h1>
<button class="addStudent-btn btn teal">
    <a href="./views/addStudentView.php">Add Student +</a>
</button>
<div class="container">
    <?php
    foreach ($students as $student) :
        $classCode = $student['classCode'];
        $className = $database->prepare("SELECT className FROM classes WHERE classCode =:classCode;");
        $className->execute([':classCode' => $classCode]);
        $nameClass = $className->fetch();
    ?>
        <div class="card box-shadow">
            <div class="card-profile">
                <!-- TODO  -->
                <?php
                $sex = $student['genderCode'];
                if ($sex == 'm') {
                    $src = 'male.jpg';
                } elseif ($sex == 'f') {
                    $src = 'female.jpg';
                }
                ?>
                <img src=" <?= '../assets/images/' . $src ?>//TODO" alt="">
            </div>
            <div class="card-info">
                <h2><?= $student["studentName"] ?><!-- TODO  --></h2>
                <h4>From batch: <?= $nameClass[0] ?><!-- TODO  --></h4>
                <span><b>Email: <?= $student['studentEmail'] ?><!-- TODO  --></span>
                <p><b>Student hobbie: <?= $student['studentHobby'] ?><!-- TODO  --> </p>
            </div>
            <div class="card-btn">
                <button class='btn teal'><a href="views/editStudentView.php?studentID=<?= $student['studentID'] ?>">Edit</a></button>
                <button class='btn warning'><a href="views/deleteStudentView.php?studentID=<?= $student['studentID'] ?> ">Delete</a></button>
            </div>
        </div>
    <?php
    endforeach;
    ?>
</div>
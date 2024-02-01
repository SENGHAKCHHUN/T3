<link rel="stylesheet" href="../assets/css/style.css">
<?php
require_once '../models/student.php';
// TODO
$id = $_GET['studentID'];
$students = $connect->prepare("SELECT * FROM students WHERE studentID=:id");
$students->execute([':id' => $id]);
$student = $students->fetch();
$classCode = $student['classCode'];
$genderCode = $student['genderCode'];
$hobby = $student['studentHobby'];
?>
<form action="../controllers/studentEditController.php" method="post" class="box-shadow">
    <h2> Edit Student</h2>
    <div>
        <?php
        $classes = getClasses();
        foreach ($classes as $class) :
            // TODO 
            if (($class['classCode']) == $classCode) {
                $code =  $class[0];
                echo "<div><input type='radio' checked name='class' value='$class[0]' required> $class[1]</div>";
            } else {
                echo "<div><input type='radio' name='class' value='$class[0]' required> $class[1]</div>";
            }
        endforeach;
        ?>
    </div>
    <input type="text" style="display:none" name='id' value="<?= $id ?>">
    <input type="text" name="name" placeholder="Enter your name" required value="<?= $student['studentName'] ?>">
    <input type="email" name="email" placeholder="Enter your email" required value=<?= $student['studentEmail'] ?>>
    <select name="gender" required>
        <option selected disabled>Select your gender</option>
        <?php
        $genders = getGenders();
        foreach ($genders as $gender) :
            // TODO
            if (($gender[0]) == $genderCode) {
                echo "<option value=" . $gender[0] . " selected>" . $gender[1] . "</option>";
            } else {
                echo "<option value=" . $gender[0] . ">" . $gender[1] . "</option>";
            }
        endforeach;
        ?>
    </select>
    <textarea required name="hobby" id="" cols="20" rows="5" placeholder="Enter your hobby"> <?= $hobby; ?></textarea>
    <div class='form-btn'>
        <button class='btn teal'><a href="../index.php">Cancel</a></button>
        <button class="btn warning" type="submit">Edit Student</button>
    </div>

</form>
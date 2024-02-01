<link rel="stylesheet" href="../assets/css/style.css">
<?php
require_once '../models/student.php';
?>
<form action="../controllers/studentAddController.php" method="post" class="box-shadow">
    <h2>+ Add Student</h2>
    <div>
        <?php
        $classes = getClasses();
        foreach ($classes as $class) :
        ?>
            <div><input type="radio" name="class" value="<?= $class[0] ?>" required> <?= $class[1] ?></div>
        <?php
        endforeach;
        ?>
    </div>
    <input type="text" name="name" placeholder="Enter your name" required>
    <input type="email" name="email" placeholder="Enter your email" required>
    <select name="gender" required>
        <option value="" selected disabled>Select your gender</option>
        <?php
        $genders = getGenders();
        foreach ($genders as $gender) :
        ?>
            <option value="<?= $gender[0] ?>"><?= $gender[1] ?></option>
        <?php
        endforeach;
        ?>
    </select>
    <textarea required name="hobby" id="" cols="20" rows="5" placeholder="Enter your hobby"></textarea>
    <div class='form-btn'>
        <button class='btn teal'><a href="../index.php">Cancel</a></button>
        <button class="btn warning" type="submit">+Add Student</button>
    </div>
</form>
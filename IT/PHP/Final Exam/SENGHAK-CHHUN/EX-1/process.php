<?php
require_once 'templates/header.php';
?>
<!-- TODO WRITE CODE PHP AFTER SUBMIT FORM -->
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $birth_day = $_POST["birth_day"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $gender = $_POST["gender"];
    $province = $_POST["province"];
    $subjects = $_POST["subjects"];
    $comment = $_POST["comment"];
}
?>

<div class="container mt-3">
    <div class="card">
        <div class="card-header text-center">
            <p>RESULT</p>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <p>Username is:
                        <?php echo $username; //TODO: display of username 
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your birth day is:
                        <?php echo $birth_day; //TODO: display of birth day 
                        ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your email address is:
                        <?php echo $email; //TODO: display of email address 
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your password is:
                        <?php echo $password; //TODO: display of password 
                        ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your gender is:
                        <?php echo $gender; //TODO: display of gender 
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your province is:
                        <?php echo $province; //TODO: display of province 
                        ?>
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="col">
                    <p>Your subjects are:
                        <?php //TODO: display of subject 
                        foreach ($subjects as $subject) {
                            echo $subject. ' ';
                        }
                        ?>
                    </p>
                </div>
                <div class="col">
                    <p>Your comment is:
                        <?php echo $comment; //TODO: display of comment 
                        ?>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>


<?php
require_once 'templates/header.php';
?>
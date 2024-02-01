<?php
function secureData($data)
{
    $data = trim($data); //remove space
    $data = htmlspecialchars($data); //not allow to run script
    return $data;
}
$values = [
    'username' => '',
    'code' => '',
];
$errors = [
    'username' => '',
    'code' => '',
];
$is_form = false;
$userBool = false;
$codeBool = false;
$userInput = "";
$codeInput = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $values['username'] = isset($_POST['username']) ? $_POST['username'] : '';
    $values['code'] = isset($_POST['code']) ? $_POST['code'] : '';


    $regex = "/^[a-zA-Z\s\d]+$/";
    $code = "/^[a-zA-Z\s\d\.\!\@\#\$]+$/";


    if (isset($_POST["submit"])) {
        if (preg_match($regex, secureData($_POST['username']))) {
            $values["username"] = secureData($_POST["username"]);
            $userBool = true;
            $userInput = "border-success border-2";
        } else {
            $errors['username'] = "username is Invalid";
            $userInput = "border-danger border-1";
        }
        if (preg_match($code, secureData($_POST["code"]))) {
            if ((strlen(secureData($_POST["code"]))) > 7) {
                $values["code"] = secureData($_POST['code']);
                $codeBool = true;
                $codeInput = "border-success border-2";
            } else {
                $errors['code'] = "Code must have more or equal 8 chars";
                $userInput = "border-danger border-1";
            }
        } else {
            $errors["code"] = "code is Invalid";
            $userInput = "border-danger border-1";
        }
        if ($codeBool and $userBool) {
            $is_form = true;
        }
    };
    // show the error message below the username if the username is beside rules below:
    //     - characters(Lower and upper) 
    //     - digits
    // show the error message below code if the code is beside rules below:
    //     - characters(Lower and upper)
    //     - digits
    //     - special characters (!@#$)
    //     - more or equal 8 chars
    //     * the correct code must be:
    //         - has at least one uppercase character 
    //         - has at least one special character
    // both username and code should be checked secureData() function
}
?>
<div class="container">
    <div class="row">
        <div class="col-4"></div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h1>Form</h1>
                </div>
                <div class="card-body">
                    <form action="#" method="post">
                        <div class="mb-3">
                            <label for="username" class="form-label">Username</label>
                            <input type="text" class="form-control  <?php echo $userInput ?>" value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                <?= $errors['username'] ?>
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="code" class="form-label">Code</label>
                            <input type="text" class="form-control <?php echo $codeInput ?>" value="" id="code" name="code" value="">
                            <small class="form-text text-danger">
                                <?= $errors['code'] ?>
                            </small>
                        </div>
                        <button type="submit" name="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>

<?php if ($is_form) : ?>
    <div class="container mt-3">
        <div class="row">
            <div class="col"></div>
            <div class="col">
                <div class="card">
                    <div class="card-header text-center">
                        <p>Result</p>
                    </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col">Your username is:
                                <?= $values['username'] ?>
                            </div>
                            <div class="col">Your code is:
                                <?= $values['code'] ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col"></div>
        </div>
    </div>
<?php
endif;
?>
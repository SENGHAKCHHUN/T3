<!-- WRIRE CODE PHP Submit FORM WITH VALIDATION -->
<?php
function secureData($data)
{
    $data = trim($data);
    $data = htmlspecialchars($data);
    return $data;
}
$is_form = false;
$isname = false;
$ispassword = false;
$values = [
    'username' => '',
    'password' => '',
];
$error = [
    'usererror' => '',
    'passworderror' => ''
];
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $values['username'] = $_POST['username'];
    $values['password'] = $_POST['password'];
    $regexname = '/^[a-zA-Z\s\d]+$/';
    $regexpassword = '/^[?a-zA-Z\s\d\.!@#$%]+$/';
    if (!empty($values['username'])) {
        if (preg_match($regexname, $values['username'])) {
            $values['username'] = secureData($values['username']);
            $isname = true;
        } else {
            $error['usererror'] = 'Username can contains only lowercase, uppercase, number and space';
        }
    } else {
        $error['usererror'] = 'Please Enter the username';
    }
    if (!empty($values['password'])) {
        if (preg_match($regexpassword, $values['password'])) {
            if (strlen(trim($values['password'])) > 5) {
                $values['password'] = secureData($values['password']);
                $ispassword = true;
            } else {
                $error['passworderror'] = 'Password must be five or more characters.';
            }
        } else {
            $error['passworderror'] = 'Password must be contains lowercase, uppercase, number and sign (!@#$%)';
        }
    } else {
        $error['passworderror'] = 'Please Enter the password';
    };
    if ($isname and $ispassword) :
        $is_form = true;
    endif;
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
                            <input type="text" class="form-control" value="" id="username" name="username" value="">
                            <small class="form-text text-danger">
                                <?php echo $error['usererror']; //TODO:Display message error username 
                                ?>
                            </small>
                        </div>
                        <div class="mb-3">
                            <label for="password" class="form-label">password</label>
                            <input type="text" class="form-control" value="" id="password" name="password" value="">
                            <small class="form-text text-danger">
                                <?php echo $error['passworderror']; //TODO:Display message error password 
                                ?>
                            </small>
                        </div>
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="col-4"></div>
    </div>
</div>
<br>
<?php
if ($is_form) :
?>
    <div class="container">
        <div class="row">
            <div class="col-4"></div>
            <div class="col-4">
                <div class="card">
                    <div class="card-body">
                        <p>
                            username:
                            <?= $values['username'] ?>
                        </p>
                        <p>
                            password:
                            <?= $values['password'] ?>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-4"></div>
        </div>
    </div>
<?php
endif;
?>
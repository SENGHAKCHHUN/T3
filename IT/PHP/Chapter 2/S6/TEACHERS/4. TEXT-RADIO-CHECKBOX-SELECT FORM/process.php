<?php require_once 'templates/header.php' ?>
<table class="table table-striped table-bordered">
    <tr>
        <th>Username</th>
        <th>Email</th>
        <th>Password</th>
        <th>Number</th>
        <th>Message</th>
        <th>Provinces</th>
        <th>Gender</th>
        <th>Subject</th>
    </tr>
    <?php
    function getFromPost($key)
    {
        return isset($_POST[$key]) ? $_POST[$key] : null;
    }
    if ($_SERVER['REQUEST_METHOD'] == 'POST') :
        $name = getFromPost('username');
        $number = getFromPost('number');
        $email = getFromPost('email');
        $password = getFromPost('password');
        $message = getFromPost('message');
        $province = getFromPost('province');
        $subjects = getFromPost('subject');
        $gender = getFromPost('gender');
    ?>
        <tr>
            <td><?= $name; ?></td>
            <td><?= $email; ?></td>
            <td><?= $password; ?></td>
            <td><?= $number; ?></td>
            <td><?= $message; ?></td>
            <td><?= $province; ?></td>
            <td>
                <?php 
                    if (!empty($subjects)):
                        foreach ($subjects as $subject):
                            echo $subject . ' | ';
                        endforeach;
                    endif;
                ?>
            </td>
            <td><?= $gender; ?></td>
        </tr>
    <?php endif; ?>
</table>
<?php require_once 'templates/footer.php' ?>
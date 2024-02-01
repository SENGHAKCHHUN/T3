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
        function getValue($key){
            return isset($_POST[$key]) && !empty($_POST[$key]) ? $_POST[$key] : "Not found";
        }
        if($_SERVER["REQUEST_METHOD"] == "POST"):
    ?>
        <tr>
            <td><?= getValue('name') ?></td>
            <td><?= getValue('email') ?></td>
            <td><?= getValue('password') ?></td>
            <td><?= getValue('number') ?></td>
            <td><?= getValue('message') ?></td>
            <td><?= getValue('province') ?></td>
            <td><?= getValue('gender') ?></td>
            <?php
                $subject = 'Not Found';
                if(isset($_POST['subject']) && !empty($_POST['subject'])){
                    $subject = '';
                    foreach($_POST['subject'] as $key){
                        $subject .=  $key ." | ";
                    }
                }
            ?>
            <td><?= $subject ?></td>
        </tr>

    <?php endif ?>
 
</table>
<?php require_once 'templates/footer.php' ?>
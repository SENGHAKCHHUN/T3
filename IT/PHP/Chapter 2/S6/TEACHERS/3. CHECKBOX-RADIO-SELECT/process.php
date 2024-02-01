<?php require_once 'templates/header.php' ?>
<?php
function getFromPost($key){
    return isset($_POST[$key]) ? $_POST[$key] : null;
}

if (isset($_POST)) :
    $province = getFromPost('province');
    $subjects = getFromPost('subject');
    $gender = getFromPost('gender');
    echo $province;
    print_r($subjects);
    echo $gender;
?>
    <div class="card mb-3">
        <div class="card-header">Province</div>
        <div class="card-body">
            <h2 class="display-3"><?= $province ?></h2>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">Gender</div>
        <div class="card-body">
            <?php if ($gender == 'Male') : ?>
                <img src="images/male.png" alt="" width="100">
            <?php else : ?>
                <img src="images/female.png" alt="" width="100">
            <?php endif; ?>

        </div>
    </div>
    <div class="card">
        <div class="card-header">Subject</div>
        <div class="card-body">
            <?php
            if (!empty($subjects)) :
                foreach ($subjects as $subject) :
            ?>
                    <span class="badge bg-primary"><?= $subject ?></span>
            <?php
                endforeach;
            endif;
            ?>
        </div>
    </div>

<?php endif; ?>
<?php require_once 'templates/footer.php' ?>
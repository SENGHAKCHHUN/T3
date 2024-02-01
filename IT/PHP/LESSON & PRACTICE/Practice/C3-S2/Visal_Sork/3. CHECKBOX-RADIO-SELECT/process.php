<?php require_once('templates/header.php') ?>
<?php
// YOUR CODE HERE
    function getValue($key) {
        return isset($_POST[$key]) && $_POST[$key]=="Female" ? "images/female.png" : "images/male.png";
    }
    function getProvince($key) {
        return isset($_POST[$key]) && $_POST[$key]? $_POST[$key]: "Not found";
    }
?>
    <div class="card mb-3">
        <div class="card-header">Province</div>
        <div class="card-body">
            <h2 class="display-3"> <?= getProvince('province') ?> </h2>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">Gender</div>
        <div class="card-body">
            <!-- YOUR CODE HERE [gender] -->
            <img src="<?= getValue('gender')?>" alt="Gender" width="100">
        </div>
    </div>
    <div class="card">
        <div class="card-header">Subject</div>
        <div class="card-body">
            <?php
                // YOUR CODE HERE [subject]
                foreach ($_POST['subject'] as $key):
            ?>
            <span class="bg-danger m-2 p-2 rounded-3"><?= $key ?></span>
            <?php
                endforeach;
            ?>
        </div>
    </div>

<?php require_once('templates/footer.php') ?>
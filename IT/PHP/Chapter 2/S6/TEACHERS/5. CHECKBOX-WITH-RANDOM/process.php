<?php require_once 'templates/header.php' ?>
<?php
function getFromPost($key)
{
    return isset($_POST[$key]) ? $_POST[$key] : null;
}

$colors = ['primary', 'danger', 'info', 'warning', 'success', 'secondary', 'dark'];
if ($_SERVER['REQUEST_METHOD'] == 'POST') :
    $subjects = getFromPost('subject');
?>
    <div class="card">
        
        <div class="card-body">
            <?php
            if (!empty($subjects)):
                foreach ($subjects as $subject) :
            ?>
                    <span class="badge bg-<?= $colors[random_int(0, count($colors) - 1)] ?>"><?= $subject ?></span>
            <?php
                endforeach;
            endif;
            ?>
        </div>
    </div>



<?php endif; ?>
<?php require_once 'templates/footer.php' ?>
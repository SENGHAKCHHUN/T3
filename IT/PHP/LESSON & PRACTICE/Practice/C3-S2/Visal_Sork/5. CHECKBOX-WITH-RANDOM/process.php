<?php require_once 'templates/header.php' ?>
<?php

$colors = ['primary', 'danger', 'info', 'warning', 'success', 'secondary', 'dark'];
// CODE HERE 
    function getColor($colors){
        return array_rand($colors, 1);
    }
?>
    <div class="card">
        
        <div class="card-body">
            <?php
            // CODE HERE
            if(isset($_POST['subject'])){
                foreach ($_POST['subject'] as $key):
                    $random_color = $colors[getColor($colors)];
            ?>
                <span class='mx-2 p-2 rounded-2 <?= "bg-". $random_color ?>'> <?= $key ?> </span>
                <?php 
                    endforeach;
                ?>
            <?php
            } 
            ?>
        </div>
    </div>


<?php require_once 'templates/footer.php' ?>
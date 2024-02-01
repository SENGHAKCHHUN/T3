<?php require_once 'templates/header.php' ?>
<?php

$colors = ['primary', 'danger', 'info', 'warning', 'success', 'secondary', 'dark'];
// CODE HERE 
$subject = [];
if ($_SERVER["REQUEST_METHOD"] === "POST"){
    if (isset($_POST["subject"])){
        $subject = $_POST["subject"];
    }
};

?>
    <div class="card">
        
        <div class="card-body">
            <?php
            // CODE HERE
            foreach($subject as $sub){
                $index = rand(0, count($subject));
                echo "<button class='bg-$colors[$index] p-1 m-1 border-0 rounded'>" . $sub ."</button>";
            }
            ?>
        </div>
    </div>


<?php require_once 'templates/footer.php' ?>
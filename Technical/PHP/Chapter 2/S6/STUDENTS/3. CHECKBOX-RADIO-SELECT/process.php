<?php // HEADER
    require("./templates/header.php");
?>
<?php
// YOUR CODE HERE
$province = "";
$gender = "";
$subject = "";
if (isset($_POST["province"])){
    $province = $_POST["province"];
};
if (isset($_POST["gender"])){
    $gender = $_POST["gender"];
    if ($gender == "Male"){
        $gender = "./images/male.png";
    }
    else{
        $gender = "./images/female.png";
    }
};
if (isset($_POST["subject"])){
    $subject = $_POST["subject"];
    
};

?>
    <div class="card mb-3">
        <div class="card-header">Province</div>
        <div class="card-body">
            <h2 class="display-3"><?php echo $province // province ?></h2>
        </div>
    </div>
    <div class="card mb-3">
        <div class="card-header">Gender</div>
        <div class="card-body">
            <!-- YOUR CODE HERE [gender] -->
            <img style="width: 70px" src=" <?php echo $gender ?> ">
        </div>
    </div>
    <div class="card">
        <div class="card-header">Subject</div>
        <div class="card-body">
            <?php
                // YOUR CODE HERE [subject]
                foreach ($subject as $sub){
                    echo "<span class='bg-info m-1 p-2'>". $sub ."</span>";
                }
            ?>
        </div>
    </div>

<?php // FOOTER
    include("./templates/footer.php")
?>
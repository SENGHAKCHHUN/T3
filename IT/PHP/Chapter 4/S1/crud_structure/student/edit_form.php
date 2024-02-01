<?php require_once 'partials/header.php';?>
<div class="container mt-5">
   <div class="row">
    <div class="col-3"></div>
    <div class="col-6">
        
        <div class="card bg-light">
            <div class="card-body">
            <?php
                require_once "database.php";
                if (isset($_GET["id"])){
                    $id = $_GET["id"];
                }
                $student = $connect->prepare("SELECT * FROM student WHERE id=:id");
                $student->execute([":id" => $id]);
                $user= $student->fetch();
                

            ?>
                <form action="update_action.php" method="POST">
                    <input type="hidden" name="id" value="<?php echo $user['id'];// id ?>">
                    <div class="mb-3">
                        <input type="text" name="name" value="<?= $user["name"]; ?>" class="form-control" placeholder="Name">
                    </div>
                    <div class="mb-3">
                        <input type="number" name="age" value="<?= $user["age"] ?>" class="form-control" placeholder="age">
                    </div>
                    <div class="mb-3">
                        <select name="class" id="" class="form-control">
                            <option value="A">Web A</option>
                            <option value="B">Web B</option>
                            <option value="C">Web C</option>
                        </select>
                    </div>
                    <div class="mb-3 d-grid gap-2">
                        <button class="btn btn-warning btn-block">Update Now</button>
                    </div>
                </form>
        </div>
    </div>
    <div class="col-3"></div>
   </div>
</div>
<?php require_once 'partials/footer.php';?>
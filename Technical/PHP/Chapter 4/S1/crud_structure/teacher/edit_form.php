<?php require_once 'partials/header.php'; ?>
<div class="container mt-5">
    <div class="row">
        <div class="col-3"></div>
        <div class="col-6">
            <div class="card bg-light">
                <div class="card-body">
                    <?php  
                        require_once "database.php";
                        if (isset($_GET["ID"])){
                            $ID = $_GET["ID"];
                            $users = $db->prepare("SELECT * FROM users WHERE ID = :ID");
                            $users->execute([":ID"=>$ID]);
                            $user= $users->fetch();
                        }
                    ?>
                    <form action="update_action.php" method="POST">
                        <input type="hidden" name="id" value="<?= $ID;// id  ?>">
                        <div class="mb-3">
                            <input type="text" name="name" value=" <?= $user["Name"]; ?> " class="form-control" placeholder="Name">
                        </div>
                        <div class="mb-3">
                            <input type="number" name="age" value="<?= $user["age"]; ?>" class="form-control" placeholder="Age">
                        </div>
                        <div class="mb-3">
                            <input type="text" name="class" value="<?= $user["class"]; ?>" class="form-control" placeholder="Class">
                            <!-- <select name="class" id="" class="form-control">
                                <option value="A">Class A</option>
                                <option value="B">Class B</option>
                                <option value="C">Class C</option>
                            </select> -->
                        </div>
                        <!-- <div class="mb-3">
                            <textarea name="description" class="form-control"></textarea>
                        </div> -->
                        <div class="mb-3 d-grid gap-2">
                            <button class="btn btn-warning btn-block">Update Now</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="col-3"></div>
        </div>
    </div>
    <?php require_once 'partials/footer.php'; ?>
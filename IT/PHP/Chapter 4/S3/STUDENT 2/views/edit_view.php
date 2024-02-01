<?php require_once '../templates/header.php' ?>
    <div class="container p-4">
        <?php 
        // TODO:
        require_once "../models/student.php";
        $id = $_GET['id'];
        $students = $connect->prepare("select * from students where id = :id");
        $students->execute([":id" => $id]);
        $user = $students->fetch();
        ?>
        <form action="../controllers/edit_controller.php" method="post">
            <input type="hidden" name="id" value="<?= $id ?>">
            <div class="form-group">
                <input type="text" value="<?= $user["name"] ?>" class="form-control" placeholder="Name" name="name" >
            </div>
            <div class="form-group">
                <input type="number" value="<?= $user["age"] ?>" class="form-control" placeholder="Age" name="age" >
            </div>
            <div class="form-group">
                <input type="text" value="<?= $user["province"] ?>" class="form-control" placeholder="Province" name="province">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-warning btn-block">Update</button>
            </div>
        </form>
       
    </div>
<?php require_once '../templates/footer.php' ?>
<?php require_once '../templates/header.php' ?>
    <div class="container p-4">
        <form action="../controllers/create_controller.php" method="post">
            <div class="form-group">
                <input type="text" name="name" class="form-control" placeholder="Name" >
            </div>
            <div class="form-group">
                <input type="number" name="age" class="form-control" placeholder="Age" >
            </div>
            <div class="form-group">
                <input type="text" name="province" class="form-control" placeholder="Province">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-primary btn-block">Save</button>
            </div>
        </form>
    </div>
<?php require_once '../templates/footer.php' ?>

<form action="process.php" method="post" enctype="multipart/form-data">
    <div class="row mb-3 mt-3">
        <div class="col">
            <input type="color" class="form-range" name="color">
        </div>
        <div class="col">
            <input type="range" class="form-range" name="range" max="100" min="1">
        </div>
    </div>
    <div class="mb-3">
        <input type="date" name="date" class="form-control">
    </div>
    <div class="d-grid">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
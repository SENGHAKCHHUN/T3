
<form action="process.php" method="post">
    <div class="row mb-3 mt-3">
        <div class="col">
            <input type="text" name="name" class="form-control" placeholder="Enter Name" >
        </div>
        <div class="col">
            <input type="number" name="number" class="form-control" placeholder="Enter number" >
        </div>
    </div>
    <div class="row mb-3 mt-3">
        <div class="col">
            <input type="email" name="email" class="form-control" placeholder="Enter email" >
        </div>
        <div class="col">
            <input type="password" name="password" class="form-control" placeholder="Enter password" >
        </div>
    </div>
    <div class="mb-3">
        <textarea  placeholder="Enter message" name="message" class="form-control"></textarea>
    </div>
    <div class="mb-3">
        <select class="form-control" name="province">
            <option selected disabled>Choose province</option>
            <option value="Banteay Mean Chey">Banteay Mean Chey</option>
            <option value="Battambang">Battambang</option>
            <option value="Siem Riep">Siem Riep</option>
            <option value="Prey Veng">Prey Veng</option>
        </select>
    </div>
    <div class="mb-3">
        <input type="checkbox" name="subject[]" class="form-control-check" id="html"  value="HTML">
        <label for="html" class="form-label">HTML</label>

        <input type="checkbox" name="subject[]" class="form-control-check" id="css"  value="CSS">
        <label for="css" class="form-label">CSS</label>

        <input type="checkbox" name="subject[]" class="form-control-check" id="js"  value="JavaScript">
        <label for="js" class="form-label">Javascript</label>

        <input type="checkbox" name="subject[]" class="form-control-check" id="php"  value="PHP">
        <label for="php" class="form-label">PHP</label>

    </div>
    <div class="mb-3">
        <input type="radio" name="gender" class="form-control-check" id="Female"  value="Female">
        <label for="Female" class="form-label">Female</label>

        <input type="radio" name="gender" class="form-control-check" id="Male"  value="Male">
        <label for="Male" class="form-label">Male</label>
    </div>
   
    <div class="d-grid">
        <button type="submit" class="btn btn-primary">Submit</button>
    </div>
</form>
<!-- ==== HEADER ==== -->
<?php require_once('template/header.php') ?>


<div class="container bg-black">
    <div class="form-banner">
        <img src="img/image-removebg-preview (1).png" alt="">
    </div>
    <form action="result.php" method="POST">
        <h1>Club Application</h1>
        <div class="username input">
            <label for="name">Name</label>
            <input type="text" name="name" id="name">
        </div>
        <div class="select input">
            <label for="club">Club you want to apply</label>
            <div class="club">
                <select name="club" id="club">
                    <option disabled selected>Select club...</option>
                    <option value="Robotic Club">Robotic Club</option>
                    <option value="Aerobic Club">Aerobic Club</option>
                    <option value="Sport Club">Sport Club</option>
                    <option value="Music Club">Music Club</option>
                    <option value="Film Club">Film Club</option>
                </select>
            </div>
        </div>
        <div class="radio input">
            <label for="time">Be time for you</label>
            <div class="times">
                <input type="radio" name="time" id="sat" value="Saturday morning">Saturday morning
                <input type="radio" name="time" id="sun" value="Sunday morning">Sunday morning
                <input type="radio" name="time" id="fri" value="Friday morning">Friday morning
            </div>
        </div>
        <div class="skill input">
            <label for="skill"> Yours skills</label>
            <div class="checkbox">
                <input type="checkbox" name="skill[]" id="skill" value="the best coder">the best coder
                <input type="checkbox" name="skill[]" id="skill" value="a super star">a super star
                <input type="checkbox" name="skill[]" id="skill" value="a singer">a singer
                <input type="checkbox" name="skill[]" id="skill" value="a designer">a designer
                <input type="checkbox" name="skill[]" id="skill" value="the best eater">the best eater
            </div>
        </div>
        <button type="submit">SUBMIT !</button>
    </form>
</div>






<!-- ==== FOOTER ==== -->
<?php require_once('template/footer.php') ?>
<form action="result.php" method="post">
    <div class="image">
        <img src="../image/pn.png">
        <h1>CLUB LEADER REGISTER</h1>
    </div>
    <div class="name">
        <label for="name" class="title">Name</label>
        <input type="text" name="name" placeholder="your name">
    </div>
    <div class="club">
        <label for="club" class="title">Club you want to apply</label>
        <select name="club">
            <option></option>
            <option value="Robot Club">Robot Club</option>
            <option value="Public Speaking Club">Public Speaking Club</option>
            <option value="Food Club">Food Club</option>
            <option value="Enviorment Club">Enviorment Club</option>
        </select>
    </div>
    <div class="time">
        <label for="time" class="title">Be time for you</label>
        <div class="date">
            <div>
                <input type="radio" id="morning" name="time" value="Saturday mornings">
                <label for="morning">Saturday mornings</label>
            </div>
            <div>
                <input type="radio" id="afternoon" name="time" value="Saturday afternoon">
                <label for="afternoon">Saturday afternoon</label>
            </div>
            <div>
                <input type="radio" id="evening" name="time" value="Saturday evening">
                <label for="evening">Saturday evening</label>
            </div>
        </div>
    </div>
    <div class="skill">
        <label for="skill" class="title">Your skills</label>
        <div class="skills">
            <div>
                <input type="checkbox" id="coder" name="skill[]" value="The best coder">
                <label for="coder">The best coder</label>
            </div>
            <div>
                <input type="checkbox" id="star" name="skill[]" value="a super star">
                <label for="star">a super star</label>
            </div>
            <div>
                <input type="checkbox" id="singer" name="skill[]" value="singer">
                <label for="singer">singer</label>
            </div>
            <div>
                <input type="checkbox" id="eat" name="skill[]" value="the best eater">
                <label for="eat">the best eater</label>
            </div>
            <div>
                <input type="checkbox" id="art" name="skill[]" value="good at arts">
                <label for="art">good at arts</label>
            </div>
            <div>
                <input type="checkbox" id="dancer" name="skill[]" value="a crazy dancer">
                <label for="dancer">a crazy dancer</label>
            </div>
            <div>
                <input type="checkbox" id="design" name="skill[]" value="good in design">
                <label for="design">good in design</label>
            </div>
            <div>
                <input type="checkbox" id="speeches" name="skill[]" value="good in speeches">
                <label for="speeches">good in speeches</label>
            </div>
        </div>
    </div>
    <button type="submit">SUBMIT !</button>
</form>

</body>

</html>
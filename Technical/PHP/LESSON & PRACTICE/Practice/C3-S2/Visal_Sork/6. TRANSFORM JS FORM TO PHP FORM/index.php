<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Log in page</title>
</head>
<body>
    <form>
        <input type="text" name="password" id="password" placeholder="Password">
        <button id="login_btn">Log in</button>
    </form>

    <div id="hidden" style="display:none">This is sensitive data visible only if the user knows the correct password</div>
    
    <script type='text/javascript'>
        function logIn(event) {
            event.preventDefault();
            let password = document.getElementById('password').value;
            if (password == '1234') {
                document.getElementById('hidden').style.display = 'block';
                alert("Hello world!");
            }
        }
        document.getElementById('login_btn').addEventListener('click', logIn);
    </script>

</body>
</html>



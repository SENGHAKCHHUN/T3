<?php
if (isset($_POST['search'])) {
    echo $search = $_POST['search'];
}
?>
<html>
<head>
    <script>
        document.onkeydown = function(event) {
            // var keyCode = event ? (event.which ? event.which : event.keyCod/e) : event.keyCode;
            if (event.keyCode == 13) {
                document.test.submit();
            }
        }
    </script>
</head>
<body>
    <form name="test" action="#" method="POST">
        <input type="text" name="search" />
    </form>
</body>
</html>
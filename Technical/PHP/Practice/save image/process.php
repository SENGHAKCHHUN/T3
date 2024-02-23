<?php
    if (isset($_POST['submit'])){
        $file = $_FILES['file'];
        $fileName = $file['name'];
        $fileTemName = $_FILES['file']['tmp_name'];
        $fileSize = $file['size'];
        $fileError = $file['error'];
        $fileType = $file['type'];
        $fileExt = explode('.', $fileName);
        $fileActualExt = strtolower(end($fileExt));
        $allowed = array('jpg', 'png', 'jpeg', 'pdf', 'docx');
        if (in_array($fileActualExt, $allowed)){
            if ($fileError === 0){
                if ($fileSize < 1000000){
                    $fileNameNew = uniqid('', true). '.'.$fileActualExt;
                    $fileDestination = 'upload/'. $fileNameNew;
                    move_uploaded_file($fileTemName, $fileDestination);
                    // header('Location : process.php?uploadSuccess');
                    echo "<img src='./upload/$fileNameNew'>";
                }
            }
            else{
                echo 'There was an error uploading your file!';
            }
        }
        else{
            echo 'You cannot upload files of this type!';
        }
    }
?>
<?php  
    if ($_SERVER["REQUEST_METHOD"] === "POST"){
        $file = $_FILES["file"];
        $fileName = $file["name"];
        $fileType = $file["type"];
        $fileTem = $file["tmp_name"];
        $fileError = $file["error"];
        $fileSize = $file["size"];
        $fileExt = explode(".",$fileName);
        $fileActual = strtolower(end($fileExt));
        $allowed = ['pptx', 'pdf', 'docx','jpg','png','zip'];
        if (in_array($fileActual, $allowed)){
            if ($fileError == 0){
                if ($fileSize < 1000000){
                    $fileNameNew = uniqid('','true').".".$fileActual;
                    $fileDes = "uploads/". $fileNameNew;
                    move_uploaded_file($fileTem, $fileDes);
                }
            }
        }
        
        
        echo $fileActual;
        

        // $file = $_FILES["file"];
        // $fileName = $file['name'];
        // $fileType = $file["type"];
        // $fileTmp = $file["tmp_name"];
        // $fileError = $file["error"];
        // $fileSize = $file["size"];
        // $fileExt = explode('.',$fileName);
        // $fileActual = strtolower(end($fileExt));
        // $allowed = array('pdf', 'docx', 'pptx', 'jpeg', 'gif','png', 'jpg', 'zip');
        // if (in_array($fileActual, $allowed)){
        //     if ($fileError == 0){
        //         if ($fileSize < 10000000){
        //             $fileNameNew = uniqid('', 'true').'.'.$fileActual;
        //             $fileDes = 'uploads/'. $fileNameNew;
        //             move_uploaded_file($fileTmp, $fileDes);
        //         }
        //         else{
        //             echo "This file is big size";
        //         }
        //     }
        //     else{
        //         echo "Can't upload 'This file is error'";
        //     }
        // }
        // else{
        //     echo 'This allow for this file';
        // }
    }

?>
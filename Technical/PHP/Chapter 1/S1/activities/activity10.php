<?php
    $numbers = [5, 3, 4, 0, 5, 1];

    // Use a WHILE loop to display the numbers until it is a 0 (so display 5, 3, 4 only)
    $i = 0;
    while($i < count($numbers)){
        if( $numbers[$i] != 0){
            echo $numbers[$i];
            echo "\n";
            $i ++;
        };
    }


    
?>
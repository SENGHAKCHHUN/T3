<?php
    $numbers = [5, 3, 4, 0, 5, 1];

    // Use a WHILE loop to display the numbers until it is a 0 (so display 5, 3, 4 only)
    $x = 0;
    while($x < count($numbers)){
        if($numbers[$x] >0){
            echo $numbers[$x];
        }
        $x++;
    }
?>
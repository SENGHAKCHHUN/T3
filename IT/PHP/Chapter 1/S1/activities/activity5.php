<?php
    $wep = ["Ronan", "Him", "Rady", "Hyacinthe"];

    // Add "Ratha" in the list of WEP trainers
    // print_r($wep);
    array_push($wep, 'Ratha');
    for ( $i = 0; $i < count($wep); $i++){
        echo $wep[$i];
        echo "\n";
    }
?>
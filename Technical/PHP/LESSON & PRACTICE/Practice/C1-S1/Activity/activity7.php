<?php
    $fruit = ['name' => 'mango', 'quantity' => 15, 'price' => 10, 'country' => "Cambodia"];
    // You have a discount, change the price to 8$
    $fruit['price'] = 8;
$output = $fruit["quantity"] ." ". $fruit["name"] . " from " . $fruit["country"] . " cost " . $fruit["price"]. "$";   // Change this line to dislay the data about the fruit !
    echo $output;
?>
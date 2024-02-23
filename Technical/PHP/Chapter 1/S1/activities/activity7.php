<?php
    $fruit = ['name' => 'mango', 'quantity' => 15, 'price' => 10, 'country' => "Cambodia"];
    // You have a discount, change the price to 8$
    $fruit['quantity'] = 8;
    // $output = "<quantity> <name> from <country> cost <price>$";   // Change this line to dislay the data about the fruit !
    $output = $fruit['quantity'] . ' ' . $fruit['name'] . ' from ' . $fruit['country'] . ' cost ' . $fruit['price'];
    echo $output;
?>
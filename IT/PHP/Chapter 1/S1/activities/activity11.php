<?php

    $fruit = ['name' => 'mango', 'quantity' => 15, 'price' => 10, 'country' => "Cambodia"];
	
	// The money you have
    $money = 5;
	
    // Display 
	// "Error: Your money cannot be negative" if money is negative,
    // or "You have enough money to buy this fruit"
    // or "You need more money to buy this fruit"

    if ($money < 0){
        echo "Your money cannot be negative";
    }elseif ($fruit['price'] < $money){
        echo "You have enough money to buy this fruit";
    }elseif ($fruit['price'] >= $money){
        echo "You need more money to buy this fruit";
    }

?>
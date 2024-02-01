<?php

    $fruit = ['name' => 'mango', 'quantity' => 15, 'price' => 10, 'country' => "Cambodia"];
	
	// The money you have
    $money = 5;
	
    // Display 
    // "Error: Your money cannot be negative" if money is negative,
    if(0 > $money){
        echo ("Your money cannot be negative");
    }
    // or "You have enough money to buy this fruit"
    elseif($money>$fruit["price"]){
        echo ("Your have enough money to buy this fruit");
    }
    // or "You need more money to buy this fruit"
    else{
        echo ("Your need more money to buy this fruit");
    }
?>
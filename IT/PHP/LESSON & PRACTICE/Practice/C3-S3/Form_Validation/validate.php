<?php

function validate_message($message){
    // function to check if message is correct (must have at least 10 caracters (after trimming))
    if(strlen(test_input($message))<10){
        return false;
    }
    else {
        return true;
    }
}

function validate_username($username){
    // function to check if username is correct (must be alphanumeric => Use the function 'ctype_alnum()')
    $validate = test_input($username);
    if(ctype_alnum($validate)){
        return true;
    }
    else{
        return false;
    }
}

function validate_email($email){
    // function to check if email is correct (must contain '@') and email is correct format
    $validate=test_input($email);
    if(str_contains($validate, '@') && filter_var($email, FILTER_VALIDATE_EMAIL)){
        return true;
    }
    else{
        return false;
    }

}

function test_input($input){
    $input = htmlspecialchars($input);
    $input = trim($input);
    $input = stripslashes($input);
    return $input;
}

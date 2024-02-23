<?php 
require 'config/config.php';
require 'validate.php';

$username_error= $email_error =$terms_error = $message_error= "";
$username = $email = $message = "";

$form_valid = false;

if (isset($_GET['submit'])) {

    // "Message must be at least 10 caracters long"
    if(isset($_GET['message'])){
        $message_valid = validate_message($_GET['message']);
        if($message_valid){
            $_SESSION['message']=$_GET['message'];
        }
        elseif(empty($_GET['message'])){
            $message_error = "Message must filled";
        }
        else{
            $message_error = "Message must be at least 10 caracters long";
        }
    };

    // "Please enter a username"
    // "Username should contains only letters and numbers"
    if(isset($_GET['username'])){
        $username_valid = validate_username($_GET['username']);
        if($username_valid){
            $_SESSION['username']=$_GET['username'];
        }
        elseif (empty($_GET['username'])){
            $username_error = "Please enter a username";
        }
        else{
            $username_error = "Username should contains only letters and numbers";
        }
    }
  
    // "Please enter an email"
    // "email must contain '@'"
    if(isset($_GET['email'])){
        $email_valid = validate_email($_GET['email']); 
        if($email_valid){
            $_SESSION['email']=$_GET['email'];
        }
        elseif(empty($_GET['email'])){
            $email_error = "Please enter an email";
        }
        else{
            $email_error = "Invalid email address";
        }
    }

    // Form valid 
   if($username_valid && $email_valid && $message_valid){
        $form_valid = true;
     // "You must accept the Terms of Service"
        // isset($_GET['terms']) ? $form_valid = true : $terms_error = "Please accept the Terms of Service";
   }
}
if($form_valid){
    header('location:home.php');
}
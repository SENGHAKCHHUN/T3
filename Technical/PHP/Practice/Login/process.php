

<?php
$password = "12khme3";
$hash = password_hash($password, PASSWORD_DEFAULT);
$verity = password_verify($password, $hash);
if ($verity) {
    echo $verity;
} else {
    echo "0";
}
?>


<?php
$array1 = array(
    1 => 'S',
    2 => 'E'
);
$array2 = array( 
    3 => 'N', 
    4 => 'G', 
    5 => 'H'
);
$array3 = array_replace($array1, $array2);
print_r($array3)
?>
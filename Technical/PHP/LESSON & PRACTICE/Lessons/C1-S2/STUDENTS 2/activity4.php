<?php
// A for loop to display a text without 'echo'
for ($i = 0; $i < 3; $i++) {
?>
    hello world
<?php
}
?>

<?php
// Other syntax to do the same
for ($i = 0; $i < 3; $i++) :
?>
    hello world
<?php
endfor
?>

<?php
// Instructions: Do the same to display 5 times your name
for ($i = 0; $i < 5; $i++):
?>
    Visal boy loy
<?php
endfor
?>
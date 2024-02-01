<?php
$url = "https://www.w3schools.com/quiztest/quiztest.asp?qtest=HTML";
$components = parse_url($url);

print_r(($components));

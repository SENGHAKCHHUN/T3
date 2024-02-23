<?php
$url = "https://testurl.com/test/1234?email=abc@test.com&name=sarah";
$components = parse_url($url);
$data = "https://www.w3schools/html?email=senghakchhun@gmail.com";
$elements = parse_url($data);
print_r(($components));
print_r(($elements));

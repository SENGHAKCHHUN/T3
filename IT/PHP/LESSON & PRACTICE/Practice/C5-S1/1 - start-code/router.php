<?php
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    '/' => 'controllers/home/index.controller.php',
    '/post' => 'controllers/post/post.controller.php',
   ];

if (array_key_exists($uri, $routes)) {
    require $routes[$uri];
}


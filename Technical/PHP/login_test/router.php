<?php
session_start();
$uri = parse_url($_SERVER['REQUEST_URI'])['path'];

$routes = [
    '/' => 'controllers/welcome/welcome.controller.php',
    '/signout' => 'controllers/signout/signout.controller.php',
    '/admin' => 'controllers/admin/admin.controller.php',
    '/signup' => 'controllers/signup/signup.controller.php',
    '/signin' => 'controllers/signin/signin.controller.php',
];
if (array_key_exists($uri, $routes)) {
    require 'layouts/head.php';
    require $routes[$uri];
    require 'layouts/footer.php';
} else {
   http_response_code(404);
   require 'views/errors/404.php';
   die();
}
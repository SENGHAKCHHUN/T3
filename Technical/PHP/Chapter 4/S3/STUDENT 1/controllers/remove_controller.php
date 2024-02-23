<?php
require_once('../models/item.php');
$id = $_GET['id'];
deleteItem($id);

header('location: /index.php');
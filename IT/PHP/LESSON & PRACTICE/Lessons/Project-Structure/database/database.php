<?php

$hostname = "127.0.0.1";
$database = "booking_db";
$username = "root";
$password = "";

$dsn = "mysql:host=$hostname;dbname=$database;charset=utf8mb4";
$connection = new PDO($dsn, $username, $password);


<button type="button" class="btn bg-blue-500 p-4 my-4"><a href="views/seller/movie/movie.create.view.php">Add Movie</a></button>
<table class="w-full text-sm text-center bg-gray-500 text-gray-500 ">
  <thead class="text-xs text-white uppercase dark:bg-gray-700">
    <tr class="border-solid border-cyan-50">
      <th class="px-3 py-3" scope="col">Image</th>
      <th class="px-3 py-3" scope="col">Movie Titles</th>
      <th class="px-3 py-3" scope="col">Genre</th>
      <th class="px-3 py-3" scope="col">Subtitles</th>
      <th class="px-3 py-3" scope="col">Date</th>
      <th class="px-3 py-3" scope="col">Duration</th>
      <th class="px-3 py-3" scope="col">Venue_Id</th>
      <th class="px-3 py-3" scope="col">Action</th>
    </tr>
  </thead>
  <tbody id="tbody">
  <?php
    foreach ($movies as $movie) :
    ?>
        <tr class="bg-gray-800 border-gray-700 border-b">
            <td class="border-r border-gray-700 text-center"><img src="<?= $movie['image'] ?>" width="200" height="200"></td>
            <td scope="row" class=" ont-medium whitespace-nowrap text-white border-r border-gray-700"><?= $movie['movie_name'] ?></td>
            <td class=" border-r border-gray-700"><?= $movie['genre'] ?></td>
            <td class=" border-r border-gray-700"><?= $movie['subtitle'] ?></td>
            <td class=" border-r border-gray-700"><?= $movie['date'] ?></td>
            <td class=" border-r border-gray-700"><?= $movie['duration'] ?></td>
            <td class=" border-r border-gray-700"><?= $movie['venue_id'] ?></td>
            <td class=" border-r border-gray-700">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
            </td>
        </tr>
    <?php endforeach; ?>
  </tbody>
</table>

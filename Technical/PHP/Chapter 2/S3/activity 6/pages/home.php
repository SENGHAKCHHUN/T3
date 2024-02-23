<div class="main-content">
  <main>

    <?php

    $currentPage = "I dont know";
    // 1-  Check if the querry parameter "page" exist on the URL, using isset
    $run = false;
    // isset($_GET["page"])? $run=true : $run =false;
    // 2 - If exist set $currentPage with the value of this querry parameter
    // $currentPage = ($run)? $par : "Don't have the parameter!";
    // 3 - Test the URL with different values 


    $currentPage = isset($_GET['page'])? $_GET['page'] : "I don't see it";

    echo "<h1>" . $currentPage . "</h1>";
    ?>


  </main>
</div>
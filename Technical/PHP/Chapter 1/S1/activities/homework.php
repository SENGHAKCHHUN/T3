<?php
    $age = 10;
    $name = "Rady Y";
    $isDone = FALSE;
    $average = 10.4;

    // echo "Hello JS!";
    
    

    // $numbers = [1,3,3,4];
    // $fruits = ["apple", "banana"];
    // $avg = [1.5, 3.5, 8.8];
    // $numbers = array (1, 3, 5);
    // $fruits = array("Mango", "Coconut");



    // $numbers = [1,3,3,4];
    // echo $numbers[2];
    // echo count($numbers);
    // $numbers[0] = 10;
    // array_push($numbers, 30);

    // $numbers = [1,3,3,4];
    // array_push($numbers, 10);
    // array_pop($numbers);
    // array_shift($numbers);
    // array_unshift($numbers, 1,3);
    // print_r($numbers);

    // $user = [
    //     "name" => "rady",
    //     "age" => 27
    // ];
    // echo $user["name"];
    // unset($user->name);

    // define("SCHOOL" , "PNC CAMBODIA");
    // echo SCHOOL;

    // $n = 10;
    // if ($n == 10){
    //     echo "Sure";
    // }elseif($n > 10){
    //     echo "Not really";
    // }elseif($n < 10){
    //     echo "Not exactly";
    // }else{
    //     echo "No answer";
    // }

    // $numbers = [1, 2, 3, 4];
    // for loop
    // for ($i = 0; $i < count($numbers); $i++){
    //     echo $numbers[$i];
    // };
    // loop by index
    // foreach (array_keys($numbers) as $index) {
    //     echo $index;
    // }
    // loop by value
    // foreach($numbers as $value){
    //     echo $value;
    // }
    // $numbers = [1, 2, 3, 4];
    // $i = 0;
    // while ($i < count($numbers)){
    //     echo $numbers[$i];
    //     $i++;
    // }


    // $numbers = [1, 2, 3, 4];
    // foreach($numbers as $value){
    //     echo $value;
    // }

    // function getName($name){
    //     return "My name is ". $name;
    // };
    // echo getName("Rady");


    //Single Line comment
    /*Multple Line commnt*/
    
    // $message = "Hello PHP";




?>

<?php
    define("SCHOOL", "PNC CAMBODIA");
    // echo SCHOOL;
    // echo strpos("Hello world", "world");
    $numbers = [1, 2, 3, 4];
    // for ($i = 0; $i < count($numbers); $i++):
    //     echo $numbers[$i];
    //     echo "\n";
    // endfor;
    $i = 0;
    // while ($i < count($numbers)){
    //     echo $numbers[$i];
    //     $i++;
    //     echo "\n";
    // }
    $arrayAssociative = [
        [
            "id" => 1,
            "name" => 'senghak',
            "age" => 19,
            "class" => 'WEB A'
        ],
        [
            "id" => 2,
            "name" => 'hak',
            "age" => 25,
            "class" => 'WEB B'
        ],
        [
            "id" => 3,
            "name" => 'seng',
            "age" => 27,
            "class" => 'WEB C'
        ]
    ];
    foreach ($arrayAssociative as $array):
        $id = $array["id"];
        echo $id;
        foreach ($array as $value){
            switch ($id){
                case ("1"):
                    echo "hello";
                break;
            }
        };
    endforeach;
?>

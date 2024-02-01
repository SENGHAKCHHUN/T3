<?php
    $students = [
        ['name' => 'Mengui', 'age' => 30, 'status' => 'single'],
        ['name' => 'Nga', 'age' => 18, 'status' => 'married'],
        ['name' => 'Theavy', 'age' => 19, 'status' => 'in-relationship'],
        ['name' => 'Hak', 'age' => 20, 'status' => 'unknown']
    ];

    $number = 0;
    for ($i = 0; $i < count($students); $i ++){
        $student = $students[$i];
        if ($student["status"] == "single"){
            $number += 1;
        };
    }
    echo $number;

    
    for ($i = 0; $i < count($students); $i ++){
        $student = $students[$i];
        if ($student["status"] == "single" && $student["age"] >= 25 && $student["age"] <= 30){
            echo $student["name"];
        };
    };

    $name;
    $age = $students[0]["age"];
    for ($i = 0; $i < count($students); $i ++){
        $student = $students[$i];
        if ($student["age"] < $age ){
            $age = $student["age"];
            $name = $student["name"];
        };
    };
    echo $name;
?>
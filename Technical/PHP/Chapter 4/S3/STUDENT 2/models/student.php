<?php
// database connection
    $user = "root";
    $password = "";
    $database = "student_db";
    $hostname = "localhost";
    $dsn = "mysql:host=$hostname;dbname=$database;charset=UTF8";
    $connect = new PDO($dsn, $user, $password);
   
/**
 * Get all students from the database
 * 
 * @return array of students 
 */
function getStudents()
{
    global $connect;
    $student = $connect->prepare("select * from students");
    $student->execute();
    $users = $student->fetchAll();
    return $users;
}


/**
 * Get single student from the database
 * @param integer $id : the student id
 
 * @return associative_array: the student related to given id
 */
function getStudentById($id)
{
   
}

/**
 * Remove single student from the database
 * @param integer $id : the id of the student to delete
 
 * @return boolean: true if deletion was successful, false otherwise
 */
function deleteStudent($id)
{
    global $connect;
    $students = $connect->prepare("delete from students where id=:id");
    $students->execute([":id" => $id]);
}

/**
 * Update single student from the database
 * @param integer $id :  		the id of the student to update
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if deletion was successful, false otherwise
 */
function updateStudent($id, $name, $age, $province)
{
    global $connect;
    $students = $connect->prepare("update students set name=:name, age=:age, province=:province where id=:id");
    $students->execute([
        ":id" => $id,
        ":name" => $name,
        ":age" => $age,
        ":province" => $province
    ]);
}

/**
 * Create single student from the database
 * @param string $name :  		the student name
 * @param integer $age :  		the age of the student
 * @param string $province :  	the student's province

 * @return boolean: true if create was successful, false otherwise */
function createStudent($name, $age, $province)
{
    global $connect;
    $students= $connect->prepare("INSERT INTO students (name, age, province) values (:name, :age,:province);");
    $students->execute([
        ":name" => $name,
        ":age" => $age,
        ":province" => $province
    ]);
}

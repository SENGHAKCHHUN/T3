const express = require("express");
const fs = require("fs");
const app = express();
const port = 2000;
let students = JSON.parse(fs.readFileSync("database.json"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

function save(data){
    fs.writeFileSync("database.json", JSON.stringify(data))
}

app.listen(port, ()=>{
    console.log("SERVER IS RUNNING ON PORT : " + port)
})


app.get("/student", (req, res)=>{
    res.json({status: 200, message: "get student succesfully", data: students})
})

app.post("/create/student", (req, res)=>{
    let student = req.body;
    students.push(student);
    save(students);
    res.json({status: 200, message: "create successfully ", data: students})
})

app.delete("/delete/student/:id", (req, res)=>{
    let id = req.params.id;
    let student = students.findIndex(student => student.id == id);
    if (student > -1){
        students.splice(student, 1);
        save(students);
        res.json({status: 200, message: "delete successfully"})
    }
})

app.put("/update/student/:id", (req, res)=>{
    let id = req.params.id;
    let data = req.body;
    let student = students.findIndex(student => student.id == id);
    if (student !== -1){
        students[student] = {...students[student], ...data};
        save(students);
        res.json({status: 200, message: "update student successfully", data: students})
    }else{
        res.json({status: 404, message: "student not found"})
    }
})
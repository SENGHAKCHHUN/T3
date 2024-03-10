const express = require('express');
const app = express();
const cors = require("cors");
const fs = require("fs");
const PORT = 3000   ;
let data = JSON.parse(fs.readFileSync("database.json"))
app.use(express.static('public'));
app.use(cors({ origin: "*" }));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
function save() {
    fs.writeFileSync("database.json", JSON.stringify(data))
}
app.listen(PORT, () => {
    console.log("SERVER IS RUNNING!!!");
})
app.get("/book", (req, res) => {
    res.send("I love you cambodia...")
})
app.get("/student", (req, res) => {
    try {
        res.json({ status: 200, message: "REQUEST SUCCESSFULLY", data: data })
    } catch {
        res.json({ status: 404, message: "Can not request" })
    }
})
app.post("/student/create", (req, res) => {
    let student = req.body;
    data.push(student);
    save()
    res.json({ status: 200, message: "student created", student: student })
})
app.delete("/student/delete/:id", (req, res) => {
    let id = req.params.id;
    if (data.length > id) {
        data.splice(id, 1)
        save();
        res.json({ status: 200, message: "student deleted successfully"})
    }else{
        res.json({status: 404, message: "Not fuound"})
    }
})
app.put("/student/update/:id", (req, res)=>{
    let id = req.params.id;
    let student = req.body;
    if (data.length > id){
        data[id] = student;
        save();
        res.json({status: 200, message: "Update successufully", data : data})
    }
    else{
        res.json({status: 404, message: "student Not found"})
    }
})
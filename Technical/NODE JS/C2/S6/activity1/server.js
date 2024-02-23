const express = require('express');
const { toNamespacedPath } = require('path');
const app = express();

app.listen(3000,  () =>{
    console.log("server is running !!!");
});

app.get("/hak", (req, res) =>{
    res.send("TRY THE BEST WITH LIFE TODAY IS HARD. TOMORROW POWERFUL");

})
let teacherScore = {
    him: 45,
    vorleak: 45,
};

app.get("/result", (req, res) =>{
    let name = req.query.name;
    let score = teacherScore[name];
    res.send("Score for teacher " + name + " is " + score)
})
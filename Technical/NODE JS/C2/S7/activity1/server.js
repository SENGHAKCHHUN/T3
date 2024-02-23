const express = require('express');
const { toNamespacedPath } = require('path');
const app = express();
app.listen(3000, () => {
    console.log("server is running !!!");
});
app.use(express.static('public'));
let Books = [
    { id: 1, name: "Rady dreams in 2019" },
    { id: 2, name: "How to dream of code?" },
    { id: 3, name: "How to kill covid" },
];
app.get("/Books", (req, res) => {
    let name = '';
    // let params = req.params.id;
    let id = req.query.name;
    if (id < Books.length){
        name = Books[id].id;
        res.send("Book name : " + name)
    }
    else{
        res.send(Books)
    }
})
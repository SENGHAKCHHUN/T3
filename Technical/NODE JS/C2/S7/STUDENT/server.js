const express = require("express");
const app = express();
const PORT = 3000;
//Start server
app.listen(PORT, (err) => {
    console.log('server is running')
});

//+++++++++++++++TODO+++++++++++++++++++++++
let books = [
    { id: 1, name: "Rady dreams in 2019" },
    { id: 2, name: "How to dream of code?" },
    { id: 3, name: "How to kill covid" },
];

// Example of REQUEST using QUERRY PARAMETERS
// localhost:3000/book?id=100
app.get("/books", (req, res) => {
    let id = req.query.id;
    if (id < books.length){
        res.send(books[id].name)
    }else{
        res.send('Book not fount')
    }
});

// Example of REQUEST using ROUTE PARAMETERS
// localhost:3000/book/200
app.get("/books/:id", (req, res) => {
    let id = req.params.id;
    if (id < books.length){
        res.send(books[id].name)
    }else{
        res.send("Book os hy jg read mes cher na ke merl ha")
    }
});
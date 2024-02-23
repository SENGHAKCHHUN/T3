let express = require('express');
let app = express();
let port = 3000;

app.listen(port, (err) =>{
    console.log("SERVER IS RUNNING!!!");
});
let books = [
    {id: 1, name : 'rady fake'},
    {id: 2, name : 'him smos sne'},
    {id: 3, name : 'papa yon'},
]

app.use("/book", (req , res) =>{
    let id = req.query.id;
    if (id < books.length){
        res.send(books[id].name);
    }else{
        res.send("Book not found");
    }
})


app.get("/store/:id", (req, res)=>{
    let book_id = req.params.id;
    if (book_id < books.length) {
        res.send(books[book_id].name);
    }else{
        res.send("min mean book ng hee jg read mes dek tv try mes cher na ke merl!!!")
    }
})
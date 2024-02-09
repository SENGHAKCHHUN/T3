const express = require("express")
const app = express()
app.get('/tasks', (req, res) =>{
    res.send("hello chen");
})

app.listen(3000, ()=>{
    console.log("chen is running>>>....")
})


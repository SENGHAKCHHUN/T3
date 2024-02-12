const express = require('express');
const app = express();
app.listen(3000, () => console.log("server is running...!!!"));
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.post('/', (req, res) => {
    res.send("Hello world")
})
app.post("/tasks", (req, res) => {
    res.send(req.body)
})
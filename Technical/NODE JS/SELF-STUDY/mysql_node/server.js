const express = require('express');
const app = express();
const  {db} = require('./database');
const { error } = require('console');
const { stat } = require('fs');

const PORT = 3000;
app.listen(PORT, () => console.log('server running...'));
app.get('/', (req, res) => {
    res.send('love you Vorleak kun')
})

app.get('/users', (req, res) => {
    let sql = 'select * from students';
    db.query(sql, (error, result) => {
        if (error) {
            return console.log(error)
        }
        res.send(result)
    })
})



app.get('/users/:id', (req, res) => {
    let id = req.params.id;
    let sql = 'select * from students where id=?';
    db.query(sql,[id], (error, result) => {
        if (error) {
            return console.log(error)
        }
        res.send(result)
    })
})
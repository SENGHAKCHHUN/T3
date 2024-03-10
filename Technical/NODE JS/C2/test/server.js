const express = require('express');
const taskModel = require('./task_model');
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//1.get all task
app.get('/task', function (req, res) {
   let tasks = taskModel.getAllTasks();
   res.send(tasks)
});

//2.get or show specific task
app.get('/task/:id', (req, res) => {
    let task = taskModel.show(req.params.id);
    if (!task){
        res.status(404),({success: false, message:`Can not get tas by ${req.params.id}`});
    }
    res.status(202),({success: true, data: task});
});

//3.create task
app.post('/task', (req, res) => {
    const task = taskModel.store(req.body);
    res.status(200).json({success:true, data: task});
})


const port = 3000;
app.listen(port, () => {
    console.log('Server run port:' + port);
});

// Select DOM for needed----------------
let taskInput = document.querySelector("#task");
let priorityInput = document.querySelector("#priority");
let btn = document.querySelector("button");
btn.addEventListener('click', addTask)
function save() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}
function loadData() {
    let data = localStorage.getItem("tasks");
    return data;
}
// Database to store all the tasks---------
let tasks = [
    {description:"Task1", priority:1},
    {description:"Task2", priority:0},
    {description:"Task3", priority:1},
]

function addTask(e){
    e.preventDefault();
    let task = {description: taskInput.value, priority: parseInt(priorityInput.value)};
    tasks.push(task);
    displayTask()
    tasks = JSON.parse(loadData())
}
// save();
loadData();
// Function used for display all the tasks


function displayTask(){

    let result = document.querySelector(".result");
    // console.log(tasks)
    console.log(result)
    if (result){
        result.remove()
    }
    let output = document.createElement("div");
    output.className = "result";
    console.log(tasks)
    for (value of tasks){
        let div = document.createElement("div");
        div.className = "list";
        let h1 = document.createElement("h1");
        if (value.priority === 0){
            div.style.background = "gray";
        }else{
            div.style.background = 'red'
        }
        h1.textContent = value.description;

        div.appendChild(h1)
        output.appendChild(div);
        save()
    }
    document.body.appendChild(output);
    
}
displayTask()
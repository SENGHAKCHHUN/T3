let body = document.querySelector('body')
body.style.margin = '0px 100px'
let container = document.getElementById('container');
function save() {
    localStorage.setItem('tasks');   
}
function loadData() {
    let data = localStorage.getItem("tasks");
    return data;
}
let tasks = [
    { description: 'Task 1', proiority: 1 },
    { description: 'Task 2', proiority: 0 },
    { description: 'Task 3', proiority: 1 }
]
for (let task of tasks) {
    let x = task.description
    let y = task.proiority
    tasks = JSON.parse(loadData())
    save()
    createTask(x, y)
}
save();
loadData();
console.log(loadData())
function createTask(x, y) {

    let task = document.createElement('h2');
    task.style.padding = '5px';
    task.style.color = 'white';
    task.style.textAlign = 'center';
    task.textContent = x;
    if (y == 0) {
        task.style.background = 'green';
    } else {
        task.style.background = 'greenyellow'
    }
    container.appendChild(task);
}

let submitButton = document.getElementById('summit');
let data = document.getElementById('task');
let option = document.getElementById("option");

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    let obj = {};
    obj.description = data.value;
    obj.proiority = option.value;
    tasks.push(obj)
    while (container.firstChild) {
        container.removeChild(container.firstChild)
    }
    tasks = loadData()
    for (let element of tasks) {
        createTask(element.description, element.proiority);
    }
});
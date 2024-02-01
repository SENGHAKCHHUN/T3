// This is our data structure of TASKS
let tasks = [
  { description: "Do homework", priority: 1 },
  { description: "Wash clothes", priority: 0 },
  { description: "Dream about Javascript", priority: 1 },
];

function displayArray(array) {
  // 1 - From the parent body : create a new div  (class : container)
  const container = document.createElement('div');
  container.classList.add('container');
  // 2 - For all tasks,  create a new div (class : item), (textContent : task.description)
  for (let task of tasks){
    let item = document.createElement('div');
    item.classList.add('item');
    item.textContent = task.description;
    // 3 - The priority defines the color of your task (1 (HIGH) = red, 0 (LOW) = gray)
    if (task.priority == 1){
      item.style.background = 'red';
    }else if (task.priority == 0){
      item.style.background = 'gray'
    }
    container.appendChild(item)
  }
  // 4 - append it the container
  // 5 - append div class container to body
  body.appendChild(container)
}
const body = document.querySelector('body');
console.log(body);
displayArray(tasks);

let li = document.getElementById('Teacher');
// console.log(li.parentElement)
// let li4 = li.previousElementSibling.previousElementSibling
// console.log(li4)
let container = document.querySelector('.container');
let div = document.createElement('div')
div.className = 'group'
let h1 = document.createElement('h1');
h1.textContent = 'Hollo group study'
div.appendChild(h1)
container.appendChild(div)
// parentElement
// children
// firstElementChild
// lastElementChild
// previousElementSibling
// nextElementSibling
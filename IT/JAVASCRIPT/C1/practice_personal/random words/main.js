
let fruits = ['banana', 'coconut', 'orange', 'jackfruit', 'mango'];
let heading = document.createElement('h1')
let body = document.querySelector('body');
let index = Math.floor(Math.random() * fruits.length);
heading.textContent = fruits[index];
body.appendChild(heading)
const container = document.querySelector('.container');
console.log(container)
const ul = document.querySelector('ul')
const firstLi = ul.lastElementChild;
console.log(firstLi)
console.log(firstLi.previousElementSibling)
console.log(firstLi.parentElement.parentElement.firstElementChild);
console.log(firstLi.parentElement.parentElement.lastElementChild)
console.log(firstLi.parentElement.parentElement.lastElementChild.firstElementChild)
console.log(firstLi.parentElement.parentElement.lastElementChild.lastElementChild)
console.log(firstLi.parentElement.children)
console.log(firstLi.parentElement.nextElementSibling)
const btn = firstLi.parentElement.nextElementSibling;
console.log(btn.previousElementSibling.parentElement.children)



function createLi(){
    let li = document.createElement('li');
    li.textContent = inputCreate.value
    ul.appendChild(li)
}
let inputCreate = document.getElementById('fruit');
var ul = document.querySelector('ul');
const create = document.getElementById('create');
create.addEventListener('click', createLi)
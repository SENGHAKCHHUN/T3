//get last li in ul by using service.parentLeement
const service = document.querySelector('#services')
// console.log(service.parentElement.parentElement)

//get first button in group button
// console.log(service.parentElement.parentElement.nextElementSibling.firstElementChild);

// go to container by jenh pi service to li to ul to container
// console.log(service.parentElement.parentElement.parentElement)

const ul = service.closest('ul')
console.log(ul)

// console.log(ul.nextElementSibling.firstElementChild)

// /// get container form html
// let container = document.querySelector('.container')
// //create div
// let div = document.createElement('div')
// //set div to class .content
// div.classList.add('content')
// //append div .content to container
// container.appendChild(div)
// //create h1
// let h1 = document.createElement('h1')
// //put text in h1
// h1.innerHTML = 'Hello social affair '
// //append h1 to div
// div.appendChild(h1)
// //create one more div
// let div2 = document.createElement('div')
// //put text in div2
// div2.textContent = 'Hello';
// //set id to div2
// div2.setAttribute('id','hello')
// //append div 2 to div
// div.appendChild(div2)
// for (let i = 0; i<3;i++){
//     let btn = document.createElement('button');
//     btn.className = 'btn';
//     btn.innerHTML = 'Check score';
//     div.appendChild(btn)    
// }
// console.log(container)


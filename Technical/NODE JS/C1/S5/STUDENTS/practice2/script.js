// TODO
// Get URL https://reqres.in/api/users?page=2
let btn = document.querySelector('button');
let body = document.querySelector('body');
btn.addEventListener('click', getData)
function getData (){
    const link = 'https://reqres.in/api/users?page=2';
    axios.get(link).then(afterResponse)
    btn.removeEventListener('click', getData)
}
const afterResponse = (Response) => {
    let data = Response.data.data;
    data.forEach(element => {
        let ul = document.createElement('ul');
        ul.style.border = '3px solid black'
        ul.innerHTML = `
            <li> ${element.first_name} </li>
            <li> ${element.email} </li>
            <img src= '${element.avatar}'>
        `;
        body.appendChild(ul)
    });
    ul.classList.toggle(ul);
}
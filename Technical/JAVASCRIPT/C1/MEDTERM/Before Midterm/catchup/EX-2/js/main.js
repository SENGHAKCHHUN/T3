let a = document.querySelectorAll('a');
let h1 = document.querySelector('h1');
function changeText(){
    let index = Math.floor(Math.random()*a.length)
    h1.textContent = a[index].textContent;
}
h1.addEventListener('click', changeText)
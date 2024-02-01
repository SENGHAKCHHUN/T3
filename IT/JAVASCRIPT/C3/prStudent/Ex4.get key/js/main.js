
function myFunction(event){
    key.textContent = event.key
    console.log(event.key)
}

let key = document.querySelector('h1');
console.log(key)
document.addEventListener('keydown', myFunction)

function addBook(event){

  event.preventDefault();
  let data = inputField.value;
  if (data !== ''){
    let newli = document.createElement('li');
    let span1 = document.createElement('span');
    span1.classList.add('name');
    span1.textContent = data;
    inputField.value = '';
    let span2 = document.createElement('span');
    span2.className = "delete";
    span2.textContent = 'delete'
    newli.appendChild(span1);
    newli.appendChild(span2);
    listBook.appendChild(newli)
  }
}

let listBook = document.querySelector("ul")


let inputField = document.getElementById("add-book-textfield")
let add = document.getElementById("add-book")
add.addEventListener('click',addBook)


//delete book list
function deleteCard(event){
  if (window.confirm){
    event.target.parentElement.remove()
  }
}

let listDelete = document.getElementsByClassName('delete')
for (let btn of listDelete){
  btn.addEventListener('click',deleteCard)
}
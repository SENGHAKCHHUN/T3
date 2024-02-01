// TODO 

let NumberOfBooks = document.getElementsByClassName('book-name')
bookslist = NumberOfBooks.length;
let result = '';
for (let value of NumberOfBooks) {
    result += value.textContent + '   '
}



let booksNumber = document.querySelector('#books-number');
booksNumber.textContent = bookslist;


let bookTitle = document.querySelector('#books-titles')
bookTitle.textContent = result;


let deleteList = document.querySelectorAll(".delete");
for (let value of deleteList){
   value.addEventListener('click', (event)=>{
      event.target.closest('li').remove()

   })
}
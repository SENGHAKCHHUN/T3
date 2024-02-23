//  FUNCTIONS -------------------------------------------------------------
function deleteBook(event) {
  event.preventDefault();
  // 1- Check the event if raised on the button delete 
  if (window.confirm("Do you want to remove")) {
    // element.closest('li').remove();
    let element = event.target.parentElement
    element.remove()

  }
  //  2  if yes, get the parent and remove it from the  bookList
}

function addBook(event) {
  event.preventDefault();
  let ul = document.querySelector('ul')
  // 1- Get the book name from the input field
  
  let dataName = data.value
  data.value = ''
  if (dataName !==''){
    // 2- Create a new spam bookName for the book name, class name = name
    let span1 = document.createElement('span')
    span1.setAttribute('class', "name")
    span1.textContent = dataName
  
    // 3- Create a new spam deleteBtn for the button delete, class name = delete
    let span2 = document.createElement('span')
    span2.classList = "delete"
    span2.textContent = 'delete';
  
    // 4- Create a new li
    let bookName = document.createElement('li');
    bookName.addEventListener('click', deleteBook)
    // 5- Add bookName and deleteBtn to li and li to the  bookList UL
    bookName.appendChild(span1)
    bookName.appendChild(span2)
    ul.appendChild(bookName)
  }
}

function searchBook(event) {
  // 1- Get the search text
  event.preventDefault();
  let b = searchBookInput.value;
  let name;
  // 2- Loop on all LI
  for (let book of bookList.children) {
    if (book.firstElementChild.textContent == b) {
      name = book.closest('li');
    }

  }

  // Update the style of the LI (visible or hidden)
  bookList.appendChild(name);
}
//  MAIN -------------------------------------------------------------
let bookList = document.querySelector("#book-list ul");
bookList.addEventListener("click", deleteBook);

// let addForm = document.getElementById("add-book");
// addForm.addEventListener("submit", addBook);

let searchBookInput = document
  .getElementById("search-books")
  .querySelector("input");
searchBookInput.addEventListener("keyup", searchBook);


let data = document.getElementById("add-book-textfield");
let add = document.getElementById("add-book");
add.addEventListener('click', addBook)

// let deleteList = document.querySelectorAll('.delete')
// for (let element of deleteList) {
//   element.addEventListener('click', function () {
//     if (window.confirm("Do you want to remove")) {
//       element.closest('li').remove();
//       console.log(element)
//     }
//   })
// }
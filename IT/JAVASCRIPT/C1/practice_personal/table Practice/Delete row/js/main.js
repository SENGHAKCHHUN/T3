
let btnRemove = document.querySelectorAll('.btn');
// add event listener to all btn
btnRemove.forEach(btn =>{
    btn.addEventListener("click", remove);
})

// create function to remove card 
function remove(event) {
    let row = event.target.closest("tr");
    if(window.confirm("Are you sure you want to remove this item")){
        row.remove();
    }
}

// create one variable to store the row
// use build in function closet on button with tag parent name to get the parent row 
// ex :
// btn.closet("tr")

// use window.confirm with value("Are you sure you want to remove this item?")
// if confirm remove the row 

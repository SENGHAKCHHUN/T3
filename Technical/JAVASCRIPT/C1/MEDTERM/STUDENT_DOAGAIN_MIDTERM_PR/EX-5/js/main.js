
// Remove row functions from the table
const removeRow = (event) => {
   // TODO: Remove row with confirmation message when click on remove button
   if (confirm('Are you sure to remove this user?')){
       console.log(event.target.closest('tr').remove())
   }
}
// View user information in list 
let ul = document.createElement('ul')
let liFirst = document.createElement('li')
let liLast = document.createElement('li')
let liProvince = document.createElement('li')
let liGender = document.createElement('li')
const viewUser = (event) => {
    // TODO: View user information in list by click on view button
    let data = event.target.closest('tr').children;
    liFirst.textContent = data[0].textContent;
    liLast.textContent = data[1].textContent;
    liProvince.textContent = data[2].textContent;
    liGender.textContent = data[3].textContent;
    ul.appendChild(liFirst);
    ul.appendChild(liLast);
    ul.appendChild(liProvince);
    ul.appendChild(liGender);
    leftBox.appendChild(ul);
}
// Main
const leftBox = document.querySelector('.left-box');
const btnViews = document.querySelectorAll('.view');
const btnRemoves = document.querySelectorAll('.remove');
// TODO: Add Event listeners to remove button
for (let btn of btnRemoves){
    btn.addEventListener('click', removeRow)
}
// TODO: Add event listeners to view button
for (let view of btnViews){
    view.addEventListener('click', viewUser)
}
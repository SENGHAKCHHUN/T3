
// Remove row functions from the table
const removeRow = (event) => {
    // TODO: Remove row with confirmation message when click on remove button
    if (window.confirm('do you want to delte')) {
        event.target.closest('tr').remove()
    }
}
// View user information in list
// let ul = document.createElement('ul')
let ul = document.querySelector('ul')
let firstName = document.createElement('li')
let lastName = document.createElement('li')
let province = document.createElement('li')
let gender = document.createElement('li')
const viewUser = (event) => {
    // TODO: View user information in list by click on view button
    firstName.textContent = event.target.closest('tr').children[0].textContent;
    lastName.textContent = event.target.closest('tr').children[1].textContent;
    province.textContent = event.target.closest('tr').children[0].textContent;
    gender.textContent = event.target.closest('tr').children[0].textContent;

    ul.appendChild(firstName)
    ul.appendChild(lastName)
    ul.appendChild(province)
    ul.appendChild(gender)

}

// Main
const leftBox = document.querySelector('.left-box');
const btnViews = document.querySelectorAll('.view');
const btnRemoves = document.querySelectorAll('.remove');
// TODO: Add Event listeners to remove button

for (let del of btnRemoves) {
    del.addEventListener('click', removeRow)
}
// TODO: Add event listeners to view button
for (let btn of btnViews) {
    // console.log(btn)
    btn.addEventListener('click', viewUser)
}
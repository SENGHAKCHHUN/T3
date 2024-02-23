
function AddPerson() {
    // to check gender 
    let sex = gender.checked ? gender.value : 'Female';

    // create table row name tableRow 

    // create table data name tdFirstName 
    // add value of firstName as textContent 

    // create table data name tdLastName
    // add value of lastName as textContent 

    // create table data name tdEmail
    // add value of email as textContent 

    // create table name tdProvince
    // add value of province as textContent

    // create table data name tdFavourite 
    // add value of favourite as textContent

    // create table data name tdGender 
    // add value of sex as textContent


    // append tdFirstName, tdLastName, tdEmail, tdProvince, tdGender, tdFavourite to tableRow
    
    // append tableRow to tbody 
}



// Main
const firstName = document.querySelector('#first');
const lastName = document.querySelector('#last');
const email = document.querySelector('#email');
const province = document.querySelector('#province');
const favourite = document.querySelector('#favorite');
let gender = document.querySelector('input[name="gender"]');
const submitButton = document.querySelector('#submit');
const tbody = document.querySelector('tbody');

submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    AddPerson();
});
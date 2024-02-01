let students = [
    {
        id: 1,
        name: "John",
        email: "john@example.com",
        phone: "123-456-3303"
    },
    {
        id: 2,
        name: "Jane",
        email: "jane@example.com",
        phone: "123-456-3304"
    },
    {
        id: 3,
        name: "Mary",
        email: "mary@example.com",
        phone: "123-456-3305"
    },
    {
        id: 4,
        name: "Peter",
        email: "peter@example.com",
        phone: "123-456-3306"
    },
    {
        id: 5,
        name: "Lisa",
        email: "lisa@example.com",
        phone: "123-456-3307"
    }
];

function createRow(student) {
    let tr = document.createElement('tr')
    let tdId = document.createElement('td')
    let tdName = document.createElement('td')
    let tdEmail = document.createElement('td')
    let tdPhone = document.createElement('td')
    let btn = document.createElement('button')
    let tdAction = document.createElement('td')
    btn.textContent = 'Detail';
    btn.style.background = '#4CAF50';
    btn.style.border = 'none';
    btn.style.padding = '5px' 
    tdAction.appendChild(btn)
    btn.style.borderRadius = '5px';
    btn.className = 'detail'
    tdId.textContent = student.id;
    tdName.textContent = student.name;
    tdEmail.textContent = student['email'];
    tdPhone.textContent = student.phone;
    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdPhone);
    tr.appendChild(tdAction)
    tbody.appendChild(tr)
}
function showStudentDetails(student) {
    console.log(student.firstElementChild.textContent)
    let cardId = document.getElementById('cardId');
    let cardName = document.getElementById('cardName');
    let cardEmail = document.getElementById('cardEmail');
    let cardPhone = document.getElementById('cardPhone');
    let show = document.getElementById('studentCard');
    cardId.textContent = student.firstElementChild.textContent;
    let id = student.firstElementChild.textContent;
    let name = student.firstElementChild.nextElementSibling.textContent
    let email = student.firstElementChild.nextElementSibling.nextElementSibling.textContent;
    let phone = student.lastElementChild.previousElementSibling.textContent;
    cardId.textContent = id;
    cardName.textContent = name;
    cardEmail.textContent = email;
    cardPhone.textContent = phone;
    show.style.display = 'block'
}

// Main
const tbody = document.getElementById('studentsTableBody');
for (let student of students) {
    createRow(student);
}
let deleteList = document.querySelectorAll('.detail');
for (let value of deleteList){
    value.addEventListener('click',function(){
        let data = value.parentElement.parentElement;
        showStudentDetails(data)
    })
}
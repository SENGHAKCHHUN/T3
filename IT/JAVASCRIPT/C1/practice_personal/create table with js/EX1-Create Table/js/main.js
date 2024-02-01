function createRow(data) {
    // TODO:
    // create tr element 
    // create tdId, tdName, tdEmail, tdPhone, tdAction and btn element following the format in html file
    let row = document.createElement("tr");
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdEmail = document.createElement("td");
    let tdPhone = document.createElement('td');
    let tdAction = document.createElement("td");
    let btn = document.createElement("button");
    btn.textContent = 'Delete';
    btn.setAttribute("class","btn btn-danger")
    // add text content to tdId, tdEmail, tdPhone, tdName, and add btn to tdAction
    tdId.textContent = data['id'];
    tdName.textContent = data['name'];
    tdEmail.textContent = data['email']
    tdPhone.textContent = data['phone'];
    // append tdId, tdName, tdEmail, tdPhone, tdAction to tr
    row.appendChild(tdId)
    row.appendChild(tdName)
    row.appendChild(tdEmail)
    row.appendChild(tdPhone)
    row.appendChild(tdAction)
    tdAction.appendChild(btn)
    // append tr to tbody 
    let body = document.querySelector('tbody')
    body.appendChild(row)
}
// main
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

const tbody = document.querySelector('tbody');
for (let student of students) {
    createRow(student)
}

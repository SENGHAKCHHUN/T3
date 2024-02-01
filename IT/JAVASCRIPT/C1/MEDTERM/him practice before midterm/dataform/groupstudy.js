let array = [
    { First: 'Chal', Last: 'Chhey', Email: '@chal' },
    { First: 'Yong', Last: 'Men', Email: '@Yong' },
    { First: 'Riya', Last: 'Chhun', Email: '@Riya' },
    { First: 'Yiem', Last: 'Chhun', Email: '@Yiem' },
    { First: 'Chan', Last: 'Chhun', Email: '@Chan' },
    { First: 'Senghak', Last: 'Chhun', Email: '@Senghak' },
    { First: 'Maly', Last: 'Chhun', Email: '@Maly' },
    { First: 'Leakana', Last: 'Lonh', Email: '@Leakana' },
]

let tbody = document.getElementById("tbody");
function createRow(data){
    let tr = document.createElement('tr');
    let tdFirstName = document.createElement('td')
    let tdLastName = document.createElement('td')
    let tdEmail = document.createElement('td')

    tdFirstName.textContent = data.First
    tdLastName.textContent = data.Last
    tdEmail.textContent = data.Email
    
    tr.appendChild(tdFirstName)
    tr.appendChild(tdLastName)
    tr.appendChild(tdEmail)
    tbody.appendChild(tr)
}
for (let obj of array){
    createRow(obj)
}
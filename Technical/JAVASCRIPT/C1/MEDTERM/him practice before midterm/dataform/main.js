let tbody = document.getElementById('tbody');
console.log(tbody)
function save() {
    localStorage.setItem('array', JSON.stringify(array))
}
function getBack() {
    let data = localStorage.getItem('array');
    return data;
}
let array = [
    { first: 'Chal', Last: 'Chhey', Email: '@chal' },
    { first: 'Yong', Last: 'Men', Email: '@Yong' },
    { first: 'Riya', Last: 'Chhun', Email: '@Riya' },
    { first: 'Yiem', Last: 'Chhun', Email: '@Yiem' },
    { first: 'Chan', Last: 'Chhun', Email: '@Chan' },
    { first: 'Senghak', Last: 'Chhun', Email: '@Senghak' },
    { first: 'Maly', Last: 'Chhun', Email: '@Maly' },
    { first: 'Leakana', Last: 'Lonh', Email: '@Leakana' },
    
]
getBack()
function createdata() {
    array = JSON.parse(getBack());
    for (let obj of array){
        createTbody(obj)
    }
}
function createTbody(obj) {
    let tr = document.createElement('tr');
    let tdFirst = document.createElement('td');
    let tdLast = document.createElement('td');
    let tdEmail = document.createElement('td');
    tdFirst.textContent = obj.first;
    tdLast.textContent = obj.Last;
    tdEmail.textContent = obj.Email;
    tr.appendChild(tdFirst);
    tr.appendChild(tdLast);
    tr.appendChild(tdEmail);
    tbody.appendChild(tr)
}
// save()
createdata()
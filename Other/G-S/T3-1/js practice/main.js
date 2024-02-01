let body = document.querySelector('body');
const input = document.createElement('input');
body.appendChild(input)

let table = document.createElement('table');
table.classList.add('table-bordered')
let thead = document.createElement('thead');
let tbody = document.createElement('tbody');
let tr = document.createElement('tr')
let thName = document.createElement('th')
let thAge = document.createElement('th')
let thProvince = document.createElement('th')
thName.textContent = 'Name';
thAge.textContent = 'Age';
thProvince.textContent = 'Province';
tr.appendChild(thName);
tr.appendChild(thAge);
tr.appendChild(thProvince);
thead.appendChild(tr);
table.appendChild(thead);
body.appendChild(table)
let arrobj = [
    {name : 'veak', age : 22, province : 'Siem reap'},
    {name : 'Sanok', age : 12, province: 'KPT'},
    {name : 'pheaktra', age : 17, province: 'Batbong'},
    {name : 'Neardy', age : 18, province: 'pp'},
    {name : 'Chin', age : 18, province : 'banana'}
]
function createRow(data){
    let row = document.createElement('tr')
    let tdName = document.createElement('td')
    let tdAge = document.createElement('td')
    let tdProvince = document.createElement('td')
    tdName.textContent = data['name'];
    tdAge.innerHTML = data.age;
    tdProvince.textContent = data.province;
    row.appendChild(tdName)
    row.appendChild(tdAge)
    row.appendChild(tdProvince)
    tbody.appendChild(row)
    table.appendChild(tbody)
}
for (let obj of arrobj){
    createRow(obj)
}
input.addEventListener('input', searchName);
let nameList = document.querySelector('tbody');
function searchName(event){
    let result = input.value.toLowerCase();
    console.log(result)
    for (let user of nameList.children){
        console.log(user)
        if (user.firstElementChild.textContent.toLowerCase().includes(result)){
            user.style.display = '';
        }else {
            user.style.display = 'none'
        }
    }
}
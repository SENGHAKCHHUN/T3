function afterSuccess(response) {
  // log the data from the response
  console.log(response.data)
  let studentsContainer = document.querySelector('.studentsContainer');
  let datas = response['data'];

  
  let table = document.createElement('table');
  table.className = "table table-striped";
  let thead = document.createElement('thead');
  let trth = document.createElement('tr');
  let IDth = document.createElement('th');
  let nameth = document.createElement('th');
  let userNameth = document.createElement('th');
  let emailth = document.createElement('th');
  let phoneth = document.createElement('th');
  let websiteth = document.createElement('th');
  let companyth = document.createElement('th');
  IDth.textContent = 'ID',
  nameth.textContent = "Name";
  userNameth.textContent = "UserName";
  emailth.textContent = "Email";
  phoneth.textContent = "Phone";
  websiteth.textContent = "Website";
  companyth.textContent = "Company";
  trth.appendChild(IDth);
  trth.appendChild(nameth);
  trth.appendChild(userNameth);
  trth.appendChild(emailth);
  trth.appendChild(phoneth);
  trth.appendChild(websiteth);
  trth.appendChild(companyth);
  thead.appendChild(trth);
  table.appendChild(thead);
  let tbody = document.createElement('tbody');



  datas.forEach(data => {
    let trtd = document.createElement('tr');
    let IDtd = document.createElement('td');
    let nametd = document.createElement('td');
    let userNametd = document.createElement('td');
    let emailtd = document.createElement('td');
    let phonetd = document.createElement('td');
    let websitetd = document.createElement('td');
    let companytd = document.createElement('td');
    IDtd.textContent = data.id,
    nametd.textContent = data.name;
    userNametd.textContent = data.username;
    emailtd.textContent = data.email;
    phonetd.textContent = data.phone;
    websitetd.textContent = data.website;
    companytd.textContent = data.company.name;
    trtd.appendChild(IDtd);
    trtd.appendChild(nametd);
    trtd.appendChild(userNametd);
    trtd.appendChild(emailtd);
    trtd.appendChild(phonetd);
    trtd.appendChild(websitetd);
    trtd.appendChild(companytd);
    tbody.appendChild(trtd);
  })
  table.appendChild(tbody);
  studentsContainer.appendChild(table);
}

function afterFailed(error) {
  // 2 - TODO log the error message
  console.error(error)
}

// 1 - TODO change the request to produce an ERROR
let request = "https://jsonplaceholder.typicode.com/users";
axios.get(request).then(afterSuccess).catch(afterFailed);

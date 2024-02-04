function afterSuccess(response) {
  // log the data from the response
  let users = response.data;
  let container = document.querySelector(".studentsContainer");
  let table = document.createElement("table");
  table.className = "table table-striped table-dark";
  let thead = document.createElement("thead");

  thead.innerHTML += `
       
            <tr> 
                <th> ID </th>
                <th> Name </th>
                <th> UserName </th>
                <th> Email </th>
                <th> Website </th>
                <th> Phone </th>
                <th> Company </th>
            </tr>
        
    `;
  table.appendChild(thead);
  let tbody = document.createElement("tbody");
  users.forEach((user) => {
    tbody.innerHTML += `
            <tr>
                <td> ${user.id}</td>
                <td> ${user.name}</td>
                <td> ${user.username}</td>
                <td> ${user.email}</td>
                <td> ${user.website}</td>
                <td> ${user.phone}</td>
                <td> ${user.company.name}</td>
            </tr>
        
    `;
  });
  table.appendChild(tbody);
  container.appendChild(table);
}

function afterFailed(error) {
  // 2 - TODO log the error message
  console.log(error);
}

// 1 - TODO change the request to produce an ERROR
let request = "https://jsonplaceholder.typicode.com/users";
axios.get(request).then(afterSuccess).catch(afterFailed);

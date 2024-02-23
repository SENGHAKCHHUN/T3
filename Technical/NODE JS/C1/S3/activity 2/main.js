function afterSuccess(response) {
    // log the data from the response
    let studentsContainer = document.querySelector('.studentsContainer');
    let datas = response['data'];
    let table = document.createElement('table');
    table.className = "table table-striped";
    table.innerHTML += `
       <thead> 
            <tr class="bg-success text-light">
                <th> ID </th>
                <th> Name </th>
                <th> UserName </th>
                <th> Email </th>
                <th> Phone </th>
                <th> Website </th>
                <th> Company </th>
            </tr>
       </thead> 
    `;
    let tbody = document.createElement('tbody');
    datas.forEach(data => {
        tbody.innerHTML += `
        <tr>
            <td> ${data.id}</td>
            <td> ${data.name}</td>
            <td> ${data.username}</td>
            <td> ${data.email}</td>
            <td> ${data.phone}</td>
            <td> ${data.website}</td>
            <td> ${data.company.name}</td>
        </tr>
        `
    })
    table.appendChild(tbody);
    studentsContainer.appendChild(table);
}

function afterFailed(error) {
    // 2 - TODO log the error message
    console.log(error)
}

// 1 - TODO change the request to produce an ERROR
let request = "https://jsonplaceholder.typicode.com/users";
axios.get(request).then(afterSuccess).catch(afterFailed);

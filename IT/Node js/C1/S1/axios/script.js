function afterResponse(Response) {
    
    let datas = Response.data;
    console.log(datas)
    let container = document.querySelector('.container');
    let table = document.createElement('table');
    table.className = 'table table-striped table-dark';
    table.innerHTML += `
        <thead>
            <tr> 
                <th>ID</th>
                <th>Name</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Website</th>
                <th>Phone</th>
                <th>Company</th>
            </tr>
        </thead>
    `
    let tbody = document.createElement('tbody');
    
    datas.forEach(data => {
        tbody.innerHTML += `
        <tr> 
            <td> ${data.id}</td> 
            <td> ${data.name}</td> 
            <td> ${data.username}</td> 
            <td> ${data.email}</td> 
            <td> ${data.website}</td> 
            <td> ${data.phone}</td> 
            <td> ${data.company.name}</td> 
        </tr>
        `
    })
    table.appendChild(tbody)
    container.appendChild(table)
}

let afterError = (error) => {
    console.error(error)
}

axios.get('https://jsonplaceholder.typicode.com/users')
.then(afterResponse)
.catch(afterError)
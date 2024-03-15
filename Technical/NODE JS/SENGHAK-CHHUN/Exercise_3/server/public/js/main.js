let tbody = document.querySelector('tbody');
function getUsers(res) {
    let users = res.data.data;
    users.forEach(element => {
        let tr = document.createElement('tr');
        tr += `
            <td> ${element.id} </>
            <td> ${element.title} </>
            <td> ${element.description} </>
        `
        tbody.appendChild(tr)
    });
}
axios
    .get('http://localhost:3000/api/v1/todos')
    .then(getUsers)
    .catch((error) => { console.log(error) })
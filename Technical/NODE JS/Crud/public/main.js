let url = "http://localhost:3000/";
let tbody = document.querySelector(".tbody");

function displayStudents() {
    axios.get(url + "student").then((res) => {
        res.data.data.forEach(element => {
            let tr = document.createElement("tr");
            tr.innerHTML = `
            <td> ${element.title}</td>
            <td> ${element.price}</td>
            <td>
                <button class="btn btn-danger" onclick="deleteStudent('${element.id}')">Delete</button>
                <button class="btn btn-primary" onclick="view('${element.id}')">View</button>
            </td>
            `
            tbody.appendChild(tr);
        });
    })
}

function deleteStudent(U_id) {
    let id = U_id;
    axios.delete(url + "delete/" + id).then(
        location.reload(),
        displayStudents()
    )
}

function view(id){
    axios.get(url + "view/", id).then((req, res)=>{
        console.log(res)
    })
}

displayStudents();


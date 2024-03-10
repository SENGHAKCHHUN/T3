let url = "http://localhost:3000";
index = 0;
function disPlayStudent() {
    axios.get(url + "/student").then((res) => {
        let data = res.data.data;
        let ul = document.querySelector("#show");
        data.forEach(element => {
            let li = document.createElement("li");
            let p = document.createElement("p");
            p.textContent = element.name;
            let btnDelete = document.createElement("button");
            btnDelete.textContent = "delete";
            btnDelete.id = index;
            btnDelete.addEventListener("click", deleteStudent);
            li.appendChild(p)
            li.appendChild(btnDelete);
            ul.appendChild(li);
            index++;
        });
    })
}

disPlayStudent();
function addNewStudent() {
    let studentName = document.querySelector("#student").value;
    let student = { "name": studentName };
    axios.post(url + "/student/create", student).then((res) => {
        if (res.data.status = 200) {
            location.reload();
            disPlayStudent();
        }
    })
}

function deleteStudent(e) {
    let deleteId = e.target.id;
    axios.delete(url + "/student/delete/" + deleteId).then((res) => {
        location.reload();
        disPlayStudent();
    })
}

function updateStudent(e) {
    let id = document.querySelector("#id").value;
    let newName = document.querySelector("#name").value;
    let obj;
    axios.get(url + "/student").then((res) => {
        let data = res.data.data;
        if (data[id]) {
            obj = data[id]['name'] = newName;
            axios.put(url + "/student/update/" + data[id]).then((res) => {
                location.reload()
            });
        }
    })
};


let btn = document.querySelector("#add");
let updatebtn = document.querySelector("#update");
btn.addEventListener("click", addNewStudent);
updatebtn.addEventListener("click", updateStudent);
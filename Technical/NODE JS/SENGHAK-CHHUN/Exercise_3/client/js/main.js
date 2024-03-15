const URL = "http://localhost:3000/api/v1/todos";
let tbody = document.querySelector('tbody');
function getTodo(res) {
   // TODO
   res.data.data.forEach(element => {
      let tr = document.createElement("tr");
      if (element.isCompleted == true){
         let btn = "bg-success";
         let text = "done";
      }else{
         let btn = "bg-danger";
         let text = "To do"
      }
      tr+= `
         <td> ${element.id} </td>
         <td> ${element.title} </td>
         <td> ${element.description} </td>
         <td>​<button class= btn}> success </button> </td>
      `;
      tbody.appendChild(tr);
   });
}

// TODO : request axios.get(...)...
axios.get(URL).then(getTodo);
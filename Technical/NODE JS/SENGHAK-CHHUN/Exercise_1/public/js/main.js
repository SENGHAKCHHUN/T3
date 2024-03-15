const container = document.querySelector('#container');
function getUsers(res) {
   // TODO
   let datas = res.data.data;
   datas.forEach(element => {
      let card = document.createElement("div");
      card.className = "card mb-2"
      let cardBody = document.createElement('div');
      cardBody.className = "card-body rounded d-flex justify-content-between";
      let h5 = document.createElement('h5');
      h5.textContent = element.name;
      let btn = document.createElement('button');
      btn.textContent = "view";
      btn.className = "btn btn-success";
      cardBody.appendChild(h5)
      cardBody.appendChild(btn)
      card.appendChild(cardBody);
      container.appendChild(card)
      let model =document.createElement("div");
      model.className = "modal fade";
      model.id = "myModal";
      let modal_dialog = document.createElement("div");
      modal_dialog.className = "modal-dialog";
      let h1 = document.createElement("h1");
      h1.textContent = "hello";
      modal_dialog.appendChild(h1);
      model.appendChild(modal_dialog);
      card.appendChild(model);
   });
}

// TODO with axios.get() ...
axios.get("/api/users").then(getUsers);

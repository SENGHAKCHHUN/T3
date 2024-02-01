const users = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

function displayTable(info) {
  // your code here
  let tr = document.createElement('tr')
  const tdId = document.createElement('td')
  const tdEmail = document.createElement('td')
  const tdFirstName = document.createElement('td')
  const tdLastName = document.createElement('td')
  const tdAvatar = document.createElement('td')
  const img = document.createElement('img');
  tdId.textContent = info.id;
  tdEmail.textContent = info.email;
  tdFirstName.textContent = info.first_name;
  tdLastName.textContent = info.last_name;
  img.src = info.avatar;
  tdAvatar.appendChild(img)
  tr.appendChild(tdId)
  tr.appendChild(tdEmail)
  tr.appendChild(tdFirstName)
  tr.appendChild(tdLastName)
  tr.appendChild(tdAvatar)
  tbody.appendChild(tr)
}
// main
const tbody = document.querySelector('tbody');
// call function here
const data = users.data;
for (let create of data){
  displayTable(create)
}
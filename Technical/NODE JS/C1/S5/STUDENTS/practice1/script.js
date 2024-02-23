// GET URL : https://reqres.in/api/unknown/2
let p = document.querySelector('#theText');

let afterResponse = (Response) => {
    console.log(Response.data.data)
    p.textContent = Response.data.data.name;
    p.style.background = Response.data.data.color;
}

const link = 'https://reqres.in/api/unknown/2';
axios.get(link).then(afterResponse);
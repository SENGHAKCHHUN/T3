const path = 'datas/user.json';
let afterRequest = (response) => {
    console.log(response.data)
}

let errorRequest = (response) => {
    console.error('error hy fix tv jam kal tt ha')
}

axios.get(path)
    .then(afterRequest)
    .catch(errorRequest)

const url = 'https://jsonplaceholder.typicode.com/posts';
axios.get(url).then(Response => console.log(Response.data));
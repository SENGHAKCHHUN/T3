// TODO
// GET URL https://reqres.in/api/unknown/23

const link = 'https://reqres.in/api/unknown/23';
let afterRequest = (Response) => {
    console.log(Response)
}
let afterError = (error) => {
    let theText = document.querySelector('#theText');
    theText.textContent = 'SORRY WE ARE SLEEPING!!';
    theText.style.color = 'red';
    console.log(error)
}
axios.get(link).then(afterRequest).catch(afterError);
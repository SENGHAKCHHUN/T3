const randomAuthor = () => {
    // TODO: random author name
    let array = []
    for (let name of trs) {
        array.push(name.firstElementChild.nextElementSibling.textContent)
    }
    let index = Math.floor(Math.random() * array.length);
    showTitle.textContent = array[index]
}
// search movie title
const searchMovieTitle = () => {
    // TODO: search movie by title
    let data = searchText.value;
    for (let tr of trs){
        if (tr.firstElementChild.textContent.toLowerCase().includes(data.toLowerCase())){
            tr.style.display = '';
        }else {
            tr.style.display = 'none'
        }
    }
}
// Main
const trs = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');
// TODO: Add event listeners on input search
searchText.addEventListener('input', searchMovieTitle)

// TODO: call randomAuthor function every 1000 milliseconds
setInterval(randomAuthor, 1000)
const randomAuthor = () => {
    // TODO: random author name
    let author = [];
    for (let t of tr) {
        author.push(t.children[1].textContent)
    }
    showTitle.textContent = author[Math.floor(Math.random()*author.length)]
}
// search movie title
const searchMovieTitle = () => {
    // TODO: search movie by title
    for (let t of tr){
        if (t.children[0].textContent.toLocaleLowerCase().includes(searchText.value.toLocaleLowerCase())){
            t.style.display = ''
        }else{
            t.style.display = 'none'
        }
    }
}
// Main
const tr = document.querySelectorAll('tbody tr');
const searchText = document.querySelector('#search');
const showTitle = document.querySelector('h1');
console.log(tr)
// TODO: Add event listeners on input search
searchText.addEventListener('input', searchMovieTitle)
// searchMovieTitle()
// TODO: call randomAuthor function every 1000 milliseconds
setInterval(randomAuthor, 1000)
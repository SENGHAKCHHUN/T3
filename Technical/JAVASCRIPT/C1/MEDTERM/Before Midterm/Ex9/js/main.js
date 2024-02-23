const removePoster = (event) => {
   event.target.closest('.poster').remove()
}
// Main 
const btn = document.querySelectorAll('button');
for (let b of btn){
    b.addEventListener('click',removePoster)
}
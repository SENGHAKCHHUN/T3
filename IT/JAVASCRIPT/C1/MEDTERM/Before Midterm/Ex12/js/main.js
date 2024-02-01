const viewImage = (event) => {
    let posterRight = event.target.closest('.poster');
    right.appendChild(posterRight);
    const p = posterRight.lastElementChild.lastElementChild;
    p.style.display = 'block'    
}
const posters = document.querySelectorAll('.poster');
const right = document.querySelector('.right');
for (let poster of posters){
    poster.addEventListener('click',viewImage)
    
}
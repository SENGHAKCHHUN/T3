let btn = document.querySelectorAll('.btn');
for (let b of btn){
    b.addEventListener('click', function(){
        // b.parentElement.parentElement.remove()
        event.target.closest('tr').remove()
    })
}
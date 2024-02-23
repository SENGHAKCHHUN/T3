let deleteList = document.querySelectorAll(".delete");
for (let btn of deleteList){
    btn.addEventListener('click',function(){
        btn.parentElement.remove()
    })
}






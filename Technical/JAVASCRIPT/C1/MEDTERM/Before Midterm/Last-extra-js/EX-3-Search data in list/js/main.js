function searchName(){
    let lis = document.querySelectorAll('ul li');
    let user = searchText.value.toLocaleLowerCase(); 
    for (let li of lis){
        let text = li.textContent.toLocaleLowerCase();
        if (text.includes(user)){
            li.style.display = 'block'
        }else{
            li.style.display = 'none'
        }
    }
}
let searchText = document.querySelector('#search');
searchText.addEventListener('keyup', searchName)
function showPassword(){
    let passwords = document.querySelectorAll('.pwd');
    for (let password of passwords){
        if (password.type == 'text'){
            password.type = 'password'
        }else{
            password.type = 'text'
        }
    }
}
let view = document.getElementById('view_pwd')
view.addEventListener('click',showPassword)
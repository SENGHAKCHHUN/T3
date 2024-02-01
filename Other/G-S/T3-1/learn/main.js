let btn = document.getElementById('btn');
btn.addEventListener('click', mylove);

function mylove(){
    let arr = ['0','1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b','c','d','e']
    let sign = '#';
    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random()*arr.length);
        sign += arr[index]
    }
    document.body.style.background = sign;
    btn.textContent = sign;
    btn.style.color = sign
}

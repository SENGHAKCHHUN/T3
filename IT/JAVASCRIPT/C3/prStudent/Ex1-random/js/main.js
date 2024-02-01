let btn = document.querySelector('button');
console.log(btn)
let h1 = document.getElementById('result')
console.log(h1)

let hex = [1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
function randomNumber(){
    return (Math.floor(Math.random()*hex.length))
}
function randomColor(){
    let color = '#'
    for (i = 0; i<6; i++){
        color += hex[randomNumber()]
    }
    return color
}

btn.addEventListener('click', function(){
    let bgColor = randomColor()
    console.log(bgColor)
    document.body.style.backgroundColor = bgColor;
    h1.textContent = bgColor;
    h1.style.color = bgColor;
    
})
let color = document.getElementById('color');
function mixColor(){
    let array = ['1','2','3','4','5','6','7','8','9','a','b','c','d','e','f']
    let string = '';
    for (let i = 0; i < 6; i++){
        let index = Math.floor(Math.random()*array.length)
        string += array[index]
    }
    return string
}
function randomColor(){
    let color1 = '#' + mixColor()
    let color2 = '#' + mixColor()
    let color3 = '#' + mixColor()
    let colorBg = 'linear-gradient('+'to left'+','+ color1 +',' +color2 +',' +color3 +')';
    document.body.style.backgroundImage = colorBg
    color.textContent = colorBg
}
document.addEventListener('click',randomColor)
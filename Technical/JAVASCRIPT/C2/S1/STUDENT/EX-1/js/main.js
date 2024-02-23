const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let color = "#"

// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp

function randomcolor(){
    for (let i = 0; i < 6; i++) {
        color += colorCode[Math.floor(Math.random() * colorCode.length)];
    }
    // set background color to body =  color code
    document.body.style.backgroundColor = color;
    // add text content to h1 = color code
    document.getElementById("color").textContent = color;
    
};
console.log(color)
document.addEventListener('click', function(){
    color = '#';
    change = (6, randomcolor())
})

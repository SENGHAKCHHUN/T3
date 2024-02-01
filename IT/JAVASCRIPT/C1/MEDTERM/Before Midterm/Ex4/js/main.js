const colorCode = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
let color = "#"

// Loop 6 times to get the color code by random from items in array
// https://www.w3schools.com/js/js_random.asp

function randomcolor(){
    let string;
   for (let i = 0; i < 6; i++){
        string = Math.floor(Math.random()*colorCode.length);
        color += colorCode[string];
   }
   document.body.style.background = color;
   h1.textContent = color
   h1.style.padding = '10px';
   h1.style.background = '#000';
   h1.style.color = color;
   h1.style.textAlign = 'center';
   h1.style.borderRadius = '5px'
   h1.style.width = '130px'
   color = '#'
   
};
let h1 = document.getElementById('text');
document.addEventListener('click', randomcolor)
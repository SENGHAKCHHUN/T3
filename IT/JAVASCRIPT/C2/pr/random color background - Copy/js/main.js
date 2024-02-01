const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector('button')// TODO  your code here
console.log(btn)
const color = '#'// TODO  your code here

// return the color string code like example: #f00233
function colorCode() {
   // TODO your code here
   return (color + getRandomColor)
   
}

// return the number by random number between 0 and 16 (length of hex)
function getRandomColor() {
   //  TODO your code here
   for (let i = 0; i< 6; i++){
      let number = Math.floor(Math.random() * hex.length)
      color += hex[number]
   }
   return color
}

btn.addEventListener('click', function() {
   // TODO  your code here
   let bgcolor = colorCode()
   document.body.style.background = bgcolor
   let result = document.getElementById('result-color')
   result.textContent = bgcolor
   result.style.color = bgcolor
   color = '#'
});
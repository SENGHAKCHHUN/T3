let temperature = prompt('Input you Number here?');
let img = document.getElementById('fan');
if (temperature > 80){
    img.src = 'cold.png'
}else if(temperature > 50){
    img.src = 'nice.png'
}else if (temperature < 50){
    img.src = 'sunny.png'
}
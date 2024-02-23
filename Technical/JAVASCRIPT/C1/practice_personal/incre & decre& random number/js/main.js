
let value = 0;
document.querySelector("#increment").onclick = function(){
    value +=1
    document.querySelector("#result").textContent = value;
}
document.querySelector("#decrement").onclick = function(){
    value -=1
    document.querySelector("#result").textContent = value;
}
document.querySelector("#reset").onclick = function(){
    value = 0
    document.querySelector("#result").textContent = value;
}


document.getElementById("random").onclick = function(){
    let x = Math.floor(Math.random() * 3)
    document.querySelector("#number").innerHTML = x;
}
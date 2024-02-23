// TODO 


let btnBackground = document.querySelector("button");
let btnParagraph = document.querySelector("p");
let btndiv = document.querySelector("div")
btnBackground.addEventListener('click' ,function(){
    document.body.style.background = 'red'
})
btnParagraph.addEventListener('click',function(){
    document.body.style.background = 'orange'
})
btndiv.addEventListener('click', function(){
    document.body.style.background = 'teal'
})
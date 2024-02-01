function clearSRC() {
    image.src = ''
}
let apple = document.querySelector('#apple');
let banana = document.querySelector('#banana');
let carrot = document.querySelector('#carrot');
let orange = document.querySelector('#orange');
let pineapple = document.querySelector('#pineapple');
let image = document.querySelector('img')
apple.addEventListener('mouserover', function () {
    image.src = 'apple.jpg'
})
banana.addEventListener('mouseover', function () {
    image.src = 'bananaGradeA.jpg'
})
carrot.addEventListener('mouseover', function () {
    image.src = 'carrot.webp'
})
orange.addEventListener('mouseover', function () {
    image.src = 'orange.jpg'
})
pineapple.addEventListener('mouseover', function () {
    image.src = 'pineapple.jpg'
})
apple.addEventListener('mouseout', clearSRC)
banana.addEventListener('mouseout', clearSRC)
carrot.addEventListener('mouseout', clearSRC)
orange.addEventListener('mouseout', clearSRC)
pineapple.addEventListener('mouseout', clearSRC)
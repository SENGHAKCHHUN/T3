function randomWord() {
    let index = Math.floor(Math.random() * text.length);
    output.textContent = text[index]
}
const textElement = document.querySelector('.text');
let text = textElement.textContent
const output = document.querySelector('#output');
setInterval(randomWord, 1000);
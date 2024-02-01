
function checkdata(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result
}
function show() {
    let elements = document.querySelectorAll('.product')
    let arrayCheckbox = checkdata(checkBoxes)
    if (arrayCheckbox.lenght != 0) {
        for (let card of elements) {
            let word = card.lastElementChild.textContent;
            let w = '';
            let run = false;
            for (let i = 0; i < word.length; i++) {
                if (word[i] == ' ' && !run) {
                    run = true
                } else if (run) {
                    w += word[i]
                }
            }
            if (arrayCheckbox.includes(w)) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }show
        }
    }
}
let checkBoxes = document.querySelectorAll('.category');
const cards = document.querySelector('.content')
for (let checkBox of checkBoxes) {
    checkBox.addEventListener('change', show)
}
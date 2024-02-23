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
    let elements = document.querySelectorAll('.image')
    let arrayCheckbox = checkdata(checkBoxes)
    if (arrayCheckbox.lenght != 0) {
        for (let card of elements) {
            if (arrayCheckbox.includes(card.getAttribute('data-categories'))) {
                card.style.display = 'block'
            } else {
                card.style.display = 'none'
            }
        }
    }
}
let checkBoxes = document.querySelectorAll('.category');
const cards = document.querySelector('.content')
for (let checkBox of checkBoxes) {
    checkBox.addEventListener('change', show)
}

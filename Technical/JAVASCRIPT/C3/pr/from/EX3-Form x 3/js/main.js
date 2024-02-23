function getValue(elements) {
    let result = []
    for (let element of elements) {
        if (element.checked) {
            result.push(element.value)
        }
    }
    return result
}
function showCase() {
    const cards = document.querySelectorAll('.card'); //list card
    let arrayCheckbox = getValue(checkboxes); // list array checkbox
    console.log(arrayCheckbox)
    if (arrayCheckbox.length === 0){
        for (let card of cards){
            card.style.display ='block';
        }
    }else{
        for (let card of cards){
            if (arrayCheckbox.includes(card.firstElementChild.textContent)){
                // card.classList.add('show')
                card.style.display ='block';
                console.log(card)
            }
            else{
                // card.classList.add('hide')
                card.style.display ='none'
                console.log(card)
            }
        }
    }
    // TODO: 
    //If there is no check, all cards is visible
    //If at least one of them is checked display that card to block otherwise is invisible.
}
// Main
let content = document.querySelectorAll('.content');
const checkboxes = document.querySelectorAll('.lang')
console.log(checkboxes)
for (let checkbox of checkboxes) {
    checkbox.addEventListener('change', showCase);
}

// function showCase() {
//     const cards = document.querySelectorAll('.card'); //list card
//     let arrayCheckbox = getValue(checkboxes); // list array checkbox
//     if(arrayCheckbox.length===0){
//         cards.forEach((card)=>{
//             card.style.display ='block';
//         })
//     }else{
//         cards.forEach((card)=>{
//             const language=card.querySelector('h1').textContent;
//             if (arrayCheckbox.includes(language)) {
//                 card.style.display ='block';
//             }else{
//                 card.style.display ='none'
//             }
//         });
//     }
// }
// let n1 = '';
// let n2 = '';
// let opeartor = '';
// let input = document.querySelector('#display');
// function calcutor(element) {
//     if (opeartor === '') {
//         n1 += element;
//         document.querySelector('#display').value = n1
//     } else {
//         n2 += element;
//         document.querySelector('#display').value = n2
//     }
// }
// function addOperator(sign) {
//     opeartor = sign
// }
// function clearData() {
//     console.log("hel")
//     n1 = '';
//     n2 = '';
//     document.querySelector('#display').value = ''
// }
// function result() {
//     if (opeartor == '+') {
//         document.querySelector('#display').value = Number(n1) + Number(n2);
//     } else if (opeartor == '-') {
//         document.querySelector("#display").value = Number(n1) - Number(n2)
//     } else if (opeartor == '*') {
//         document.querySelector("#display").value = Number(n1) * Number(n2);
//     } else if (opeartor == "/") {
//         document.querySelector('#display').value = Number(n1) / Number(n2)
//     }
// }
let number1 = '';
let number2 = '';
let opeartor = '';
function calcutor(element){
    if (opeartor === ''){
        number1 += element;
        document.querySelector('#display').value = number1
    }else {
        number2 += element;
        document.querySelector("#display").value = number1 + opeartor + number2
    }
}
function addOperator(veak){
    opeartor = veak;
}
function result(){
    if (opeartor == '+'){
        document.querySelector('#display').value = Number(number1) + Number(number2)
    }else if (opeartor == '-'){
        document.querySelector('#display').value = Number(number1) - Number(number2)
    }else if (opeartor == '*'){
        document.querySelector('#display').value = Number(number1) * Number(number2)
    }else if (opeartor == '/'){
        document.querySelector('#display').value = Number(number1) / Number(number2)
    }
}
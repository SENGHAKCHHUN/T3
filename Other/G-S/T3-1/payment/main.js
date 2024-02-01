let min = document.getElementById('min')
let plus = document.getElementById('plus')
let result = document.getElementById('result')
let total = document.getElementById('total')
let number = 0;
plus.addEventListener('click', function(){
    number += 1 // number = number + 1
    result.textContent = 'Quantity : ' + number
    total.textContent = 'Total : ' + number * 50
})
min.addEventListener('click', function(){
    number -= 1; // number = number - 1
    result.textContent =  'Quantity : '+ number
    total.textContent = 'Total : ' + number * 50

});
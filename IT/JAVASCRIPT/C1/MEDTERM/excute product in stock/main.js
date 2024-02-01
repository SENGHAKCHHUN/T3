let products = [
    { product: 'Book', stock: 5, price: '5$' },
    { product: 'pen', stock: 20, price: '3$' },
    { product: 'Computer', stock: 10, price: '400$' },
    { product: 'IPhone 15pro', stock: 100, price: '2000$' },
    { product: 'Mouse pad', stock: 100, price: '1$' },
    { product: 'Keyborad', stock: 100, price: '12$' },
    { product: 'Keyborad Light', stock: 100, price: '20$' },
]
let arr = [];
let number = 0;
let calculator = '';
let store;
let quantity;
let total;
let priceP;
let stock;
let col = document.querySelector('.col')
function saveProduct() {
    localStorage.setItem('products', JSON.stringify(products));
}
function loadData() {
    return JSON.parse(localStorage.getItem('products'));
}
function saveBooking(){
    localStorage.setItem('arr', JSON.stringify(arr))
}
function loadBooing(){
    return JSON.parse(localStorage.getItem('arr'))
}
saveProduct()
loadData()
function createCard(element) {
    let card = document.createElement('div');
    card.className = 'card p-3 mt-3 product border-danger border-2'
    let h3 = document.createElement('h3');
    h3.textContent = element.product;
    let pOne = document.createElement('p');
    pOne.textContent = 'Number in Stock: ' + element.stock;
    let pTwo = document.createElement('p');
    pTwo.textContent = 'Price : ' + element.price;
    let btn = document.createElement('button');
    btn.textContent = 'Add to card';
    btn.className = 'bg-info';
    btn.addEventListener('click', booking)
    card.appendChild(h3)
    card.appendChild(pOne)
    card.appendChild(pTwo)
    card.appendChild(btn)
    col.appendChild(card)
}
function displayCard() {
    products = loadData()
    for (let product of products) {
        createCard(product)
    }
}
displayCard()
function booking(event) {
    number = 0
    let data = event.target.closest('.card');
    stock = data.children[1].textContent.slice(17);
    console.log(stock);
    event.target.removeEventListener('click', booking)
    event.target.addEventListener('click', clickToAdd)
    let card_result = document.createElement('div');
    card_result.className = 'card p-3 mt-3 flex-row justify-content-between border-danger border-2 select'
    let h5 = document.createElement('h5');
    h5.style.width = '150px'
    h5.textContent = data.firstElementChild.textContent;
    let price = document.createElement('p');
    price.textContent = data.children[2].textContent;
    price.className = 'price'
    let i_decre = document.createElement('i');
    i_decre.className = 'bi bi-file-minus-fill fs-4 lh-1 minus-icon';
    i_decre.addEventListener('click', decreProduct)
    let result = document.createElement('p');
    // result.textContent = 'Quanlity : 0'
    result.className = 'number'
    let span1 = document.createElement('span')
    span1.textContent = "Quantity : "
    let span2 = document.createElement('span')
    span2.textContent = '0';
    result.appendChild(span1)
    result.appendChild(span2)
    let i_incre = document.createElement('i');
    i_incre.className = "bi bi-file-plus-fill fs-4 lh-1 plus-icon";
    i_incre.addEventListener('click', increProduct)
    let total = document.createElement('p');
    total.textContent = 'total : 0.00$';
    total.className = 'total'
    let image = document.createElement('img');
    let payNow = document.createElement('p');
    payNow.textContent = 'PayNow';
    payNow.classList.add('bg-info');
    payNow.style.padding = '5px';
    payNow.addEventListener('click', createAgain)
    image.src = 'delete.png';
    image.style.width = '25px'
    image.style.height = '25px'
    image.addEventListener('click', function () {
        if (confirm('Are you sure to remove order?')) {
            image.parentElement.remove()
            data.addEventListener('click', booking)
            number = 0;
            res = 0
        }
    })
    card_result.appendChild(h5)
    card_result.appendChild(price)
    card_result.appendChild(i_decre)
    card_result.appendChild(result)
    card_result.appendChild(i_incre)
    card_result.appendChild(total)
    card_result.appendChild(payNow)
    card_result.appendChild(image)
    right_info.appendChild(card_result)
}
function createAgain(){
    saveBooking()
}
let right_info = document.querySelector('.showInfo');
function clickToAdd(event) {
    let cardResult = document.querySelectorAll('.select')
    let EX = event.target.parentElement.children[0].textContent;
    for (let res of cardResult) {
        if (EX === res.children[0].textContent) {
            quantity = res.children[3].children[1];
            if (quantity.textContent < stock) {
                let N = res.children[3].children[1].textContent;
                number = Number(N) + 1;
                priceP = res.children[1].textContent
                quantity = res.children[3].children[1];
                total = res.children[5];
                quantity.textContent = number;
                total.textContent = "Total : " + totalMoney(priceP, number) + '$';
            }
        }
    }
}
function increProduct(event) {
    store = event.target.parentElement;
    quantity = store.children[3].children[1];
    let N = store.children[3].children[1].textContent;
    if (number == 5){
        alert('You booking This product all.❤️❤️')
    }
    if (stock > quantity.textContent){
        total = store.children[5]
        priceP = store.children[1].textContent
        number = Number(N) + 1
        quantity.textContent = number;
        total.textContent = 'Total : ' + totalMoney(priceP, number) + '$'
    }
}
function decreProduct(event) {
    store = event.target.parentElement;
    quantity = store.children[3].children[1];
    console.log(quantity)
    let N = store.children[3].textContent.slice(10);
    total = store.children[5];
    priceP = store.children[1].textContent
    
    if (number > 0){
        number = Number(N) - 1
        quantity.textContent = number;
        total.textContent = 'Total : ' + totalMoney(priceP, number) + '$'
    }

}
function totalMoney(price, number) {
    let isRun = false;
    let res = ''
    for (let i = 0; i < price.length; i++) {
        if (price[i] === ':') {
            isRun = true;
        } else if (isRun && price[i] !== '$') {
            res += price[i]
        }
    }
    return parseInt(res) * number
}
function createCard(id) {
  // card body
  // card image in card body
  // card text in card body
  // card footer
  // button in card footer
  // add card to containers
  const card = document.createElement('div');
  card.classList.add('card')
  const cardBody = document.createElement('div');
  cardBody.className = 'card-body';
  const img = document.createElement('img');
  img.src = 'images/sample.png';
  const p = document.createElement('p');
  p.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, harum. Dignissimos voluptatum pr'
  const cardFooter = document.createElement('div');
  cardFooter.classList.add('card-footer')
  const btn = document.createElement('button')
  btn.textContent = 'romove Card' + id
  btn.addEventListener('click',removeButton)
  cardBody.appendChild(img)
  cardBody.appendChild(p)
  cardFooter.appendChild(btn)
  card.appendChild(cardBody)
  card.appendChild(cardFooter)
  container.appendChild(card)
}
function removeButton(event){
  let e = event.target.parentElement.parentElement
  e.remove()
}
const container = document.querySelector('.container');
for (let i=0 ; i <10; i++){
  createCard(i+1)
}
let clearBtn = document.querySelectorAll('button');
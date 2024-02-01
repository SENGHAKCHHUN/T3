// create a new card

function createCard() {
  const card = document.createElement('div');
  card.classList.add('card');

  // TODO CARD BODY 
  // Create a div named "cardBody"
  const cardBody = document.createElement('div');
  // Add class name "card-body" to cardBody
  cardBody.classList.add('card-body')
  // append cardBody to card 
  card.appendChild(cardBody)
  
  
  // TODO CARD IMAGE 
  // create a img named cardImage
  const cardImage = document.createElement('img')
  // add src images/sample.png to the cardImage 
  cardImage.src = 'images/sample.png';
  // append cardImage to cardBody 
  cardBody.appendChild(cardImage)


  //  TODO CARD TEXT 
  // Create a p named cardText
  const cardText = document.createElement('p');
  // add text above to cardText
  // text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque."
  cardText.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque."
  // append cardText to cardBody 
  cardBody.appendChild(cardText)
  

  // TODO CARD FOOTER 
  // create a div named cardFooter
  const cardFooter = document.createElement('div');
  // add class name "card-footer" to cardFooter
  cardFooter.classList.add('card-footer')
  // append cardFooter to  card
  card.appendChild(cardFooter)


  // TODO BUTTON IN CARD FOOTER 
  // create a button named cardButton
  const cardButton = document.createElement('button');
  // add class name "button" to cardButton
  cardButton.classList.add('button');
  // add text content "Add Card" to cardButton 
  cardButton.textContent = 'Add Card';
  // append cardButton to cardFooter 
  cardFooter.appendChild(cardButton)

  // add card to containers
  console.log(card)
  container.appendChild(card)
}


// Main
const btnCreate = document.querySelector('#create');
const container = document.querySelector('.container');

btnCreate.addEventListener('click', createCard);
// create a new card

var x = 0;
function createCard() {
   x +=1
   const card = document.createElement('div');
   card.classList.add('card');

   // TODO CARD BODY 
   // Create a div named "cardBody"
   let cardBody = document.createElement('div');
   cardBody.classList.add('card-body');
   card.appendChild(cardBody)
   // Add class name "card-body" to cardBody
   // append cardBody to card 


   // TODO CARD IMAGE 
   // create a img named cardImage
   let cardImage = document.createElement('img');
   cardImage.src = 'images/sample.png';
   cardBody.appendChild(cardImage)
   // add src images/sample.png to the cardImage 
   // append cardImage to cardBody 


   //  TODO CARD TEXT 
   // Create a p named cardText
   let cardText = document.createElement('p');
   cardText.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque.";
   cardBody.appendChild(cardText)
   // add text above to cardText
   // text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, atque."
   // append cardText to cardBody 


   // TODO CARD FOOTER 
   // create a div named cardFooter
   let cardFooter = document.createElement('div');
   cardFooter.classList.add('card-footer');
   card.appendChild(cardFooter)
   // add class name "card-footer" to cardFooter
   // append cardFooter to  card


   // TODO BUTTON IN CARD FOOTER 
   // create a button named cardButton

   let cardButton = document.createElement('button');
   cardButton.textContent = 'Remove Card' + x;
   cardButton.className = 'button'
   cardFooter.appendChild(cardButton)
   // add class name "button" to cardButton
   // add text content "Add Card" to cardButton 
   // append cardButton to cardFooter 

   
   // add card to containers
   
   container.appendChild(card)


   var deleteList = document.querySelectorAll('.button');
   for (var value of deleteList){
      value.addEventListener('click', (event)=>{
         event.target.closest('.card').remove();
      })
   }
}

// Number of card
function numberOfCard() {
   n = number.value;

   // TODO 
   for (let i = 0; i < n; i++) {
      createCard()

   }
}

// Main
const btnCreate = document.querySelector('#create');
const number = document.querySelector('#input');
const container = document.querySelector('.container');
const addCard = document
btnCreate.addEventListener('click', numberOfCard);


// console.log(deleteList)
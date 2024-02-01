const keyboardEvent = (event) => {
    // TODO 
    // https://www.w3schools.com/jsref/event_key_key.asp
    
    let h1 = document.querySelector('h1')
    h1.textContent = event.key
    
}

document.addEventListener('keydown', keyboardEvent)
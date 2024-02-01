
function displayCard(obj){
    let container = document.createElement('div');
    container.className = 'container';
    let row = document.createElement('div');
    row.className = 'row';
    let col = document.createElement('div');
    col.className = 'col-6 mt-5';
    let h2 = document.createElement('h2');
    h2.textContent = 'All tasks';
    let rowInrow = document.createElement('div');
    rowInrow.className = 'row';
    let card = document.createElement('div');
    card.className = 'card p-4 border-danger mt-2';
    let span = document.createElement('span');
    let input = document.createElement('input');
    input.type = 'checkbox';
    input.setAttribute('id', 'markAsDone')
    input.name = 'markAsDone';
    let p = document.createElement('p');
    p.textContent = obj.task
    let a = document.createElement('a');
    a.href = obj.link;
    a.textContent = 'Read More';
    a.style.textDecoration = 'none';
    a.style.color = 'blue'
    let button = document.createElement('button');
    button.className = 'btn btn-danger';
    button.textContent = 'Delete';
    span.appendChild(input)
    span.appendChild(p)
    span.appendChild(a)
    card.appendChild(span);
    card.appendChild(button);
    rowInrow.appendChild(card);
    col.appendChild(h2);
    col.appendChild(rowInrow);
    row.appendChild(col);
    container.appendChild(row)
    let body = document.querySelector('body');
    body.appendChild(container);

}
function createCard(){
    for (let obj of tasks){
        displayCard(obj)
    }
}
let tasks = [
    {task : 'Khmer temple Angkor Wat', link : 'https://google.com'},
    {task : 'Khmer history', link :' https://www.w3schools.com/'},
    {task : 'Tiger on the mountain', link : 'https://www.passerellesnumeriques.org/en/our-actions/cambodia/'},
    {task : 'The five Languages of Love', link : 'https://www.passerellesnumeriques.org/en/our-actions/cambodia/'}
]
createCard()
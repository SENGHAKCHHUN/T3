
let data = {};
function noteData(event) {
    event.preventDefault();
    let choise = document.getElementsByName("check");
    var result;
    for (let ch of choise) {
        if (ch.checked) {
            result = ch.value
            let listInput = document.getElementsByName('user')
            data.FirstName = listInput[0].value;
            data.LastName = listInput[1].value;
            data.Email = listInput[2].value;
            data.PhoneNumber = listInput[3].value;
            data.Date = listInput[4].value;
            data.condition = result;
            let see = document.getElementById('see_info');
            see.textContent = 'See your info'

        }
    }
}
let button = document.querySelector("button");
button.addEventListener('click', noteData)

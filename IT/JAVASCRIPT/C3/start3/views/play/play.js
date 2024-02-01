// CODE FOR PLAY

// TODO Add the code related to STEP 2

// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.createElement("div");
const dom_playView = document.querySelector('#play-view')
// DATA  ---------------------------------------------------------
let questions = [
    {
        title: "What does HTML stand for?",
        choiceA: "Hi Thierry More Laught",
        choiceB: "How To move Left",
        choiceC: "Ho Theary Missed the Laundry !",
        choiceD: "Hypertext Markup Language",
        correct: "D",
    },
    {
        title: "What does CSS stand for?",
        choiceA: "Cisco and Super Start",
        choiceB: "Ci So Sa",
        choiceC: "Cascading Style Sheets ",
        choiceD: "I don't know !",
        correct: "C",
    },
    {
        title: "What does JS stand for?",
        choiceA: "Junior stars",
        choiceB: "Justing Star",
        choiceC: "Javascript",
        choiceD: "RonanScript",
        correct: "C",
    }
];

let runningQuestionIndex = 0;
let score = 0;

// FUNCTIONS ---------------------------------------------------------
function hide(element) {
    element.style.display = "none";
}
function show(element) {
    element.style.display = "block";
}
function renderQuestion() {
    let question = questions[runningQuestionIndex]
    dom_question.textContent = question.title;
    dom_choiceA.textContent = question.choiceA;
    dom_choiceB.textContent = question.choiceB;
    dom_choiceC.textContent = question.choiceC;
    dom_choiceD.textContent = question.choiceD;
}
renderQuestion()
function checkAnswer(answer) {
    if (answer == questions[runningQuestionIndex].correct) {
        score++;
    }
    if (runningQuestionIndex < questions.length - 1) {
        runningQuestionIndex++;
        renderQuestion(); // Show the next question
    } else {
        renderSCore(); // end the quiz and show the score
    }
}
function renderSCore() {
    hide(dom_quiz);
    show(dom_score);
    const scorePerCent = Math.floor(score * 100 / 3); // TODO to change
    comment = "AMAZING !";
    image = "img/100.png";
    if (scorePerCent <= 20) {
        comment = "HUMM !";
        image = "img/20.png";
    } else if (scorePerCent <= 40) {
        comment = "YOU CAN IMPROVE !";
        image = "img/40.png";
    } else if (scorePerCent <= 60) {
        comment = "NOT BAD !";
        image = "img/60.png";
    } else if (scorePerCent <= 80) {
        comment = "GOOD !";
        image = "img/80.png";
    }
    dom_score.innerHTML = "<img src=" + image + ">";
    dom_score.textContent +=  comment + " : " + scorePerCent + " %";
    dom_playView.appendChild(dom_score)
}
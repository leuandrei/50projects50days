const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d"
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars Suvs Sailboats",
        correct: "b"
    },
    {
        question: "What does HTML stand for?",
        a: "HyperText Markup Language",
        b: "HyperText Markdown Language",
        c: "HyperLoop Machine Language",
        d: "Helicopters Terminals Motorboats Lambos",
        correct: "a"
    },
    {
        question: "In what year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b"
    }
];

const quiz = document.getElementById('quiz');
const answers = document.querySelectorAll('.answer');
const question = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

function loadQuiz(){
    const currentQuizData = quizData[currentQuiz];
    question.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
    answers.forEach(answer => answer.checked = false);
}

function getSelected() {
    let answerId;
    answers.forEach(answer => {
        if(answer.checked) {
            answerId = answer.id;
        }
    })
    return answerId;
}

submitBtn.addEventListener('click', () => {
    const answerId = getSelected();
    if (answerId) {
        if (answerId === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <h2>You Answered ${score}/${quizData.length} questions correctly</h2>
            <button onClick="location.reload()>Reloac</button>
            `;
        }
    }
});

loadQuiz();
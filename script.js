quizData = [
    {
        question : "What colour is the sky?",
        a : "red",
        b : "blue",
        c : "yellow",
        d : "green",
        answer : "b"
    },
    {
        question : "How many legs does an octopus?",
        a : "2",
        b : "4",
        c : "6",
        d : "8",
        answer : "d"
    },
    {
        question : "When is Christmas?",
        a : "25th Dec",
        b : "1st Jan",
        c : "19th June",
        d : "7th Sept",
        answer : "a"
    }
]

const quesitonEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sumbitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz(); 

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quesitonEl.innerHTML = currentQuizData.question;

    a_text.innerHTML = currentQuizData.a;
    b_text.innerHTML = currentQuizData.b;
    c_text.innerHTML = currentQuizData.c;
    d_text.innerHTML = currentQuizData.d;
};

function getSelected() {
    const answerEl = document.querySelectorAll('.answer');

    let answer = undefined;

    answerEl.forEach((answerEl) => {
        if(answerEl.checked) {
            answer =  answerEl.id;
        }
    })
    return answer;
}

sumbitBtn.addEventListener( "click", () => {
    const correctAnswer = quizData[currentQuiz].answer;
    const answer = getSelected();

    if(answer) {
        if (correctAnswer === answer ) {
            score++;
        } 

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz(); 
        } else {
            alert("congradulations! You have finished the quiz, you scored " + score + " out of " + quizData.length);
            loadQuiz(); 
        }
    }


    
})


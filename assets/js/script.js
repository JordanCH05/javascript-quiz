//Questions and answers for quiz grouped by quiz type

let questions = {
    html:
    [
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        },
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        }
    ],
    css:
    [
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        },
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        }
    ],
    javascript:
    [
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        },
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        }
    ],
    python:
    [
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        },
        {
            question: "",
            ans1: "",
            ans2: "",
            ans3: "",
            ans4: "",
            correct: "",
        }
    ]
}


//add event listeners to all buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function() {
            let quizType = this.getAttribute("data-type");
            if (this.getAttribute("data-type").startsWith("answer")) {
                checkAnswer(this);
            } else {
                displayQuestion(quizType);
            }
        })
    }
})

/**
* Increments correct score if correct or incorrect score if wrong
*/
function checkAnswer(ans) {}

/**
* Gets the current score from the DOM and increments it by 1
*/
function incrementScore() {}

/**
* Gets the current incorrect score from the DOM and increments it by 1
*/
function incrementWrongAnswer() {}

/**
* Displays a new question based on the quiz type
*/
function displayQuestion(quizType) {
    if (quizType === "html" || quizType === "css" || quizType === "javascript" || quizType === "python") {
        // Creates a random number to select a question
        let questionNum = Math.floor(Math.random()*questions[quizType].length);

        //Changes question and answers based on quiz type
        document.getElementById('question').textContent = questions[quizType][questionNum].question;
        for (let j = 1; j < 5; j++) {
            document.getElementById(`choice_${j}`).textContent = questions[quizType][questionNum][`ans${j}`];
        }
    } else {
        alert(`Unknown quiz type: ${quizType}`);
        throw `Unknown quiz type: ${quizType}. Aborting!`;
    }
}

/**
* Changes data-type from quizType to answer and vice versa
*/
function changeDataType(quizType) {}
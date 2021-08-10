//Questions and answers for quiz grouped by quiz type

let questions = {
    html:
    [
        {
            question: "What Is The Purpose Of An If/Else Statement?",
            ans1: "It executes one chunk of code if a condition is true, but a different chunk of code if the condition is false.",
            ans2: "It runs one chunk of code if all the imports were successful, and another chunk of code if the imports were not successful.",
            ans3: "It tells the computer which chunk of code to run if there is enough memory to handle it, and which chunk of code to run if there is not enough memory to handle it.",
            ans4: "It tells the computer which chunk of code to run if the instructions you coded are incorrect.",
            correct: "1",
        },
        {
            question: "HTML Question 2",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "2",
        }
    ],
    css:
    [
        {
            question: "CSS Question 1",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "1",
        },
        {
            question: "CSS Question 2",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "2",
        }
    ],
    javascript:
    [
        {
            question: "JavaScript Question 1",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "1",
        },
        {
            question: "JavaScript Question 2",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "2",
        }
    ],
    python:
    [
        {
            question: "Python Question",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "1",
        },
        {
            question: "Python Question 2",
            ans1: "Answer 1",
            ans2: "Answer 2",
            ans3: "Answer 3",
            ans4: "Answer 4",
            correct: "2",
        }
    ]
};

let oldQuizType;
let score = document.getElementById("count-correct");

//counting length of questions for counter
var htmlLength = questions['html'].length
var cssLength = questions['css'].length
var javascriptLength = questions['javascript'].length
var pythonLength = questions['python'].length

//add event listeners to all buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(event) {
            event.preventDefault();
            let quizType = this.getAttribute("data-type");
            if (this.getAttribute("data-type").startsWith("answer")) {
                checkAnswer(this);
                changeDataType(quizType);
                quizType = this.getAttribute("data-type");
                displayQuestion(quizType);
            } else if (this.getAttribute("data-type") === "saveScore") {
                saveScore();
            } else {
                displayQuestion(quizType);
            }
        })
    }

    if (window.location.pathname === "/final-score.html") {
        let username = document.getElementById("username");
        let saveButton = document.getElementById("save-score");

        username.addEventListener("keyup", function() {
            saveButton.disabled = !username.value;
        })
        
        const fScore = document.getElementById('final-score');
        fScore.innerText = localStorage.getItem('finalScore');
    }
    
})


/**
 * Saves score to scoreboard
 */
 function saveScore() { 
    localStorage.setItem("highScores", JSON.stringify([]));
    const highScores = JSON.parse(localStorage.getItem("highScores"));
    const qType = localStorage.getItem("qType");
    const fScore = localStorage.getItem('finalScore');
    const score = {
        name: username.value,
        score: fScore,
        quiz: qType
    };
    highScores.push(score);
    localStorage.setItem("highScores", JSON.stringify(highScores))
    return window.location.assign("high-scores.html");
}

/**
* Increments correct score if correct or incorrect score if wrong
*/
function checkAnswer(ans) {
    if (ans.className === 'correct') {
      incrementScore();
    } else {
      incrementWrongAnswer();
    }
}

/**
* Gets the current score from the DOM and increments it by 1
*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("count-correct").innerText);
    score.innerText = ++oldScore;
}

/**
* Gets the current incorrect score from the DOM and increments it by 1
*/
function incrementWrongAnswer() {
    let oldScore = parseInt(document.getElementById("count-incorrect").innerText);
    document.getElementById("count-incorrect").innerText = ++oldScore;
}

/**
* Displays a new question based on the quiz type
*/
function displayQuestion(quizType) {

    if (questions[quizType].length > 0){
        if (quizType === "html" || quizType === "css" || quizType === "javascript" || quizType === "python") {

            // Creates a random number to select a question
            let questionNum = Math.floor(Math.random()*questions[quizType].length);
    
            //Changes question and answers based on quiz type
            document.getElementById('question').textContent = questions[quizType][questionNum].question;
            for (let j = 1; j < 5; j++) {
                document.getElementById(`choice_${j}`).textContent = questions[quizType][questionNum][`ans${j}`];
            }
    
            //Changes counter based on how many questions left
            let quizLength = window[quizType + 'Length'];
    
            let counter = quizLength - questions[quizType].length + 1;
    
            document.getElementById('counter').innerHTML = `Question <span id="count">${counter}</span> of ${quizLength}`;
    
            //Removes correct class from previous question
            for (let j = 1; j < 5; j++) {
                document.getElementById(`choice_${j}`).classList.remove('correct');
            }
    
            //Adds correct class to correct answer
            let correct = `choice_${questions[quizType][questionNum]['correct']}`;
            document.getElementById(correct).classList.add('correct');
    
            //Saves the quiz type before the data-type is changed to answer
            oldQuizType = quizType;
            changeDataType(quizType);
    
            //Removes question so it is not reused
            questions[quizType].splice(questionNum,1);
    
        } else {
            alert(`Unknown quiz type: ${quizType}`);
            throw `Unknown quiz type: ${quizType}. Aborting!`;
        } 
    }  else {
        localStorage.setItem('qType', quizType)
        localStorage.setItem('finalScore', score.innerText);
        return window.location.assign("final-score.html");
    }
}

/**
* Changes data-type from quizType to answer and vice versa
*/
function changeDataType(quizType) {
    if (quizType === "html" || quizType === "css" || quizType === "javascript" || quizType === "python") {
      for (let j = 1; j < 5; j++) {
        document.getElementById(`choice_${j}`).dataset['type'] = `answer_${j}`;
      }
    } else {
      for (let j = 1; j < 5; j++) {
        document.getElementById(`choice_${j}`).dataset['type'] = oldQuizType;
      }
    }
}

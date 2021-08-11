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
            question: 'Which statement references the DOM node created by this code? &lt;p class="pull"&gt;lorem ipsum&lt;/p&gt;</p>',
            ans1: "document.querySelector('#pull')",
            ans2: "document.querySelector('pull')",
            ans3: "document.querySelector('class.pull')",
            ans4: "document.querySelector('.pull')",
            correct: "4",
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
            question: "In Python 3, the maximum value for an integer is:",
            ans1: "2<sup>63</sup> - 1",
            ans2: "3 x 10<sup>8</sup>",
            ans3: "10<sup>10<sup>100</sup></sup>",
            ans4: "There is no limit",
            correct: "4",
        },
        {
            question: "How would you express the hexadecimal value a5 as a base-16 integer constant in Python?",
            ans1: "0x(a5)",
            ans2: "0xa5",
            ans3: "hex(a5)",
            ans4: "int('a5', 16)",
            correct: "2",
        },
        {
            question: "How would you express the constant floating-point value 3.2 × 10<sup>-12</sup> in Python:",
            ans1: "3.2*10^(-12)",
            ans2: "3.2 x 10 sup(-12)",
            ans3: "3.2e-12",
            ans4: "0.0000000000032",
            correct: "3",
        },
        {
            question: "Which of the following are valid ways to specify the string literal foo'bar in Python:",
            ans1: "'foo'bar'",
            ans2: `"foo'bar"`,
            ans3: "foo\\'bar",
            ans4: "'foo' 'bar'",
            correct: "2",
        },
        {
            question: "Which are the correct expressions for ASCII new tab and new line?",
            ans1: "\\t and \\n",
            ans2: "\/t and \/n",
            ans3: "t\\ and n\\",
            ans4: "t\/ and n\/ ",
            correct: "1",
        },
        {
            question: "What is the correct output of print(r'foo\\bar\nbaz')",
            ans1: "foo\\\\barnbaz",
            ans2: "foo\\\\bar\\nbaz",
            ans3: "foo\\bar\\nbaz",
            ans4: `foo\\bar<br>baz`,
            correct: "2",
        },
        {
            question: "Which of the following is not a Python built-in function:",
            ans1: "repr()",
            ans2: "map()",
            ans3: "round()",
            ans4: "diff()",
            correct: "4",
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
                const qType = localStorage.getItem("qType");
                saveScore(qType);
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
         
        //localStorage.setItem("highScores", JSON.stringify([]));
    }
    
    if (window.location.pathname === "/high-scores.html") {
        let quizTypes = ["html", "css", "javascript", "python"];
        for (quizType of quizTypes) {
            let highScores = JSON.parse(localStorage.getItem(`${quizType}HighScores`));
            let highScoreList = document.getElementById(`${quizType}-scores-area`);
            if (!!highScores) {
                for(i = 0; i < highScores.length; i++) {
                    let li = document.createElement("li");
                    li.innerText = `${highScores[i].name} ${highScores[i].score}`;
                    highScoreList.appendChild(li);
                }
            }
        }
        
    }
    
    
})


/**
 * Saves score to scoreboard
 */
 function saveScore(qType) {
    const highScores = JSON.parse(localStorage.getItem(`${qType}HighScores`));
    const fScore = localStorage.getItem('finalScore');
    const score = {
        name: username.value,
        score: fScore,
        quiz: qType
    };
    highScores.push(score);
    highScores.sort((a, b) => {return b.score - a.score;});
    while (highScores.length > 5) {
        highScores.pop();
    }
    localStorage.setItem(`${qType}HighScores`, JSON.stringify(highScores))
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
    score.innerText = oldScore + 10;
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
            document.getElementById('question').innerHTML = questions[quizType][questionNum].question;
            for (let j = 1; j < 5; j++) {
                document.getElementById(`choice_${j}`).innerHTML = questions[quizType][questionNum][`ans${j}`];
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
        if (localStorage.getItem(`${quizType}HighScores`) === null) {
            localStorage.setItem(`${quizType}HighScores`,JSON.stringify([]));
        }
        localStorage.setItem('qType', quizType);
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

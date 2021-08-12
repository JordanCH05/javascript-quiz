//Questions and answers for quiz grouped by quiz type

let questions = {
    html:
    [
        {
            question: "What does HTML stand for?",
            ans1: "Hyperlinks and Text Markup Language",
            ans2: "Hyper Text Markup Language",
            ans3: "Home Tool Markup Language",
            ans4: "Hypertext Transfer Markup Language",
            correct: "2",
        },
        {
            question: "Choose the correct HTML element for the largest heading:",
            ans1: "&lt;heading&gt;",
            ans2: "&lt;h1&gt;",
            ans3: "&lt;head&gt;",
            ans4: "&lt;h6&gt;",
            correct: "2",
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            ans1: "&lt;break&gt;",
            ans2: "&lt;br&gt;",
            ans3: "&lt;lb&gt;",
            ans4: "&lt;linebreak&gt;",
            correct: "2",
        },
        {
            question: "What is the correct HTML for adding a background color?",
            ans1: '&lt;body bg="yellow"&gt;',
            ans2: '&lt;body style="background-color:yellow;"&gt;',
            ans3: '&lt;background&gt;yellow&lt;\/background&gt;',
            ans4: '&lt;background color="yellow"&gt;',
            correct: "2",
        },
        {
            question: "What is the correct HTML for creating a hyperlink?",
            ans1: '&lt;a href="http://www.w3schools.com"&gt;W3Schools&lt;\/a&gt;',
            ans2: '&lt;a url="http://www.w3schools.com"&gt;W3Schools.com&lt;\/a&gt;',
            ans3: '&lt;a name="http://www.w3schools.com"&gt;W3Schools.com&lt;\/a&gt;',
            ans4: '&lt;a web="http://www.w3schools.com"&gt;W3Schools.com&lt;\/a&gt;',
            correct: "1",
        },
        {
            question: "How can you open a link in a new tab/browser window?",
            ans1: '&lt;a href="url" new&gt;',
            ans2: '&lt;a href="url" target="new"&gt;',
            ans3: '&lt;a href="url" target="_blank"&gt;',
            ans4: '&lt;a href="url" target="new_tab"&gt;',
            correct: "1",
        }
    ],
    css:
    [
        {
            question: "What does CSS stand for?",
            ans1: "Creative Style Sheets",
            ans2: "Colorful Style Sheets",
            ans3: "Cascading Style Sheets",
            ans4: "Computer Style Sheets",
            correct: "3",
        },
        {
            question: "What is the correct HTML for referring to an external style sheet?",
            ans1: '&lt;link rel="stylesheet" type="text/css" href="mystyle.css"&gt;',
            ans2: '&lt;stylesheet&gt;mystyle.css&lt;\/stylesheet&gt;',
            ans3: '&lt;style src="mystyle.css"&gt;',
            ans4: '&lt;a href="style.css" target="stylesheet"&gt;',
            correct: "1",
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            ans1: "font",
            ans2: "class",
            ans3: "style",
            ans4: "styles",
            correct: "3",
        },
        {
            question: "Which is the correct CSS syntax?",
            ans1: "body {color: black;}",
            ans2: "{body;color:black;}",
            ans3: "body:color=black;",
            ans4: "{body:color=black;}",
            correct: "1",
        },
        {
            question: "How do you insert a comment in a CSS file?",
            ans1: "// this is a comment //",
            ans2: "' this is a comment",
            ans3: "// this is a comment",
            ans4: "/* this is a comment */",
            correct: "4",
        }
    ],
    javascript:
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
            question: 'Which statement references the DOM node created by this code? &lt;p class="pull"&gt;lorem ipsum&lt;/p&gt;</p>',
            ans1: "document.querySelector('#pull')",
            ans2: "document.querySelector('pull')",
            ans3: "document.querySelector('class.pull')",
            ans4: "document.querySelector('.pull')",
            correct: "4",
        },
        {
            question: "Which line would you use to specify a customised error has occured?",
            ans1: "throw('An error has occured')",
            ans2: "exception('An error has occured')",
            ans3: "error('An error has occured')",
            ans4: "catch('An error has occured')",
            correct: "1",
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
            ans2: '"foo\'bar"',
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
            ans4: "foo\\bar<br>baz",
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
var htmlLength = questions['html'].length;
var cssLength = questions['css'].length;
var javascriptLength = questions['javascript'].length;
var pythonLength = questions['python'].length;

//add event listeners to all buttons
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for(let button of buttons){
        button.addEventListener("click", function(event) {
            //prevent form save button default
            event.preventDefault();
            //quizType is either "html", "css", "javascript" or "python"
            let quizType = this.getAttribute("data-type");
            if (this.getAttribute("data-type").startsWith("answer")) {
                //check answer then display new question with same quizType
                checkAnswer(this);
                changeDataType(quizType);
                quizType = this.getAttribute("data-type");
                displayQuestion(quizType);
            } else if (this.getAttribute("data-type") === "saveScore") {
                //save quizType to local storage and save score
                const qType = localStorage.getItem("qType");
                saveScore(qType);
            } else {
                //initial display question based on quiz type
                displayQuestion(quizType);
            }
        })
    ;}
    //final score screen after quiz is finished
    if (window.location.pathname.endsWith("final-score.html")) {
        let username = document.getElementById("username");
        let saveButton = document.getElementById("save-score");
        //disables save button until username is filled
        username.addEventListener("keyup", function() {
            saveButton.disabled = !username.value;
        });
        //displays final score from local storage
        const fScore = document.getElementById('final-score');
        fScore.innerText = localStorage.getItem('finalScore');
    }
    
    //highscore screen to show all highscores
    if (window.location.pathname.endsWith("/high-scores.html")) {
        let quizTypes = ["html", "css", "javascript", "python"];
        //go through all highscore lists of each quizType
        for (let quizType of quizTypes) {
            //put each highscore list in the correct area of the html doc
            let highScores = JSON.parse(localStorage.getItem(`${quizType}HighScores`));
            let highScoreList = document.getElementById(`${quizType}-scores-area`);
            //ignore highscore lists that are null
            if (!!highScores) {
                for(i = 0; i < highScores.length; i++) {
                    //append list items to ordered list
                    let li = document.createElement("li");
                    li.innerText = `${highScores[i].name} ${highScores[i].score}`;
                    highScoreList.appendChild(li);
                }
            }
        }
        
    }
    
    
});


/**
 * Saves score to scoreboard
 */
 function saveScore(qType) {
    // get highscores and final score from local storage
    const highScores = JSON.parse(localStorage.getItem(`${qType}HighScores`));
    const fScore = localStorage.getItem('finalScore');
    // get username and final score from form
    const score = {
        name: username.value,
        score: fScore,
        quiz: qType
    };
    // add new username and final score
    highScores.push(score);
    // sort by score in descending order
    highScores.sort((a, b) => {return b.score - a.score;});
    // only keep top 5 scores
    highScores.splice(5);
    // put highscores back into local storage and go to highscores page
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
      
    }
}

/**
* Gets the current score from the DOM and increments it by 10
*/
function incrementScore() {
    let oldScore = parseInt(document.getElementById("count-correct").innerText, 10);
    score.innerText = oldScore + 10;
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
    // save score to local storage when questions are finished
    }  else {
        //create highscore list if there is none in local storage
        if (localStorage.getItem(`${quizType}HighScores`) === null) {
            localStorage.setItem(`${quizType}HighScores`,JSON.stringify([]));
        }
        //save quizType and final score to local storage
        localStorage.setItem('qType', quizType);
        localStorage.setItem('finalScore', score.innerText);
        //go to final score page
        return window.location.assign("final-score.html");
    }
}

/**
* Changes data-type from quizType to answer and vice versa
*/
function changeDataType(quizType) {
    //change datatype to answer_1 2 and so on
    if (quizType === "html" || quizType === "css" || quizType === "javascript" || quizType === "python") {
      for (let j = 1; j < 5; j++) {
        choice = document.getElementById(`choice_${j}`)
        choice.dataset['type'] = `answer_${j}`;
        choice.style.setProperty('font-size','24px')
      }
      document.querySelector('.correct-score').style.setProperty('display', 'initial');
      document.querySelector('#question').style.setProperty('font-size', '48px');
    // or change datatype to previous quiztype
    } else {
      for (let j = 1; j < 5; j++) {
        document.getElementById(`choice_${j}`).dataset['type'] = oldQuizType;
      }
    };
}

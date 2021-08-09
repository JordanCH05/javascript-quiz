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
                checkAnswer();
            } else {
                displayQuestion(quizType);
            }
        })
    }
})
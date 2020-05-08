const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submitButton');
var myQuestions;
var questionNumber = 0;
var questionSet;
var results = 0;
var image_src;
var image;
var counter;
var quizType;
var resultOptions;
var resultOptCounter = [];

function populateData(newQuestions, newQuestionSet, flag, newResultOptions) {
    myQuestions = newQuestions;
    questionSet = newQuestionSet;
    quizType = flag;
    resultOptions = newResultOptions; 
    //index will represent the character and be set to 0
    
    for (var i = 0; i < resultOptions.length; i++) {
        resultOptCounter[i] = 0;
    }
}

function buildQuiz() {
    const quizContainer = document.getElementById('quiz');

    changeDisplay();
    nextButton = document.getElementById('next');
    nextButton.addEventListener('click', nextQuestion);
}

function nextQuestion() {

    if (questionNumber > myQuestions.length -1)
        return;
      
    var radio_buttons = document.getElementsByName('question1');
    for (var i = 0; i < radio_buttons.length; i++) {
        if (quizType == 0) {
            if (radio_buttons[i].value == myQuestions[questionNumber][2] 
            && radio_buttons[i].checked) {
                results++;   
            }
        }
        else if (quizType == 1) {
            if (radio_buttons[i].checked) {
                // get the value array from myQuestions and add to the counter array
                var array = myQuestions[questionNumber][2][i]
                for (var j = 0; j < array.length; j++) {
                resultOptCounter[array[j]]++;
                }
            }
        }
        radio_buttons[i].checked = false;
    }

    questionNumber++;

    if (questionNumber >= myQuestions.length) {
        showResults();
        return;
    }

    changeDisplay();
    

}

function changeDisplay() {
    image_src = "../img/" + questionSet + "/image" + (questionNumber + 1) + ".png";

    image = document.getElementById('quiz-image');
    image.src = image_src;

    var questionText = document.getElementById('question-text');
    questionText.textContent = myQuestions[questionNumber][0];
    

    var label = document.getElementById('labela');
    label.textContent = myQuestions[questionNumber][1][0];
    label = document.getElementById('labelb');
    label.textContent = myQuestions[questionNumber][1][1];
    label = document.getElementById('labelc');
    label.textContent = myQuestions[questionNumber][1][2];
}
    
function showResults() {

    var resultDiv = document.getElementById('quiz-question');
    while (resultDiv.hasChildNodes()) {
        resultDiv.removeChild(resultDiv.firstChild);
    }
    var button = document.getElementById('next');
    button.parentNode.removeChild(button);

    if (quizType == 0) {
        image_src = "../img/" + questionSet + "/results" + results + ".png";
        image.src = image_src;

        p = document.createElement('p');
        p_text = document.createTextNode('You scored ' + results + ' out of ' + myQuestions.length + '!');
        p.appendChild(p_text);
        resultDiv.appendChild(p);
    }
    else if (quizType == 1) {
        var max = 0;
        for (var i = 0; i < resultOptCounter.length; i++) {
            if (resultOptCounter[i] > max)
                max = i;
        }
        image_src = "../img/" + questionSet + "/results" + max + ".png";
        image.src = image_src;

        p = document.createElement('p');
        p_text = document.createTextNode('You got ' + resultOptions[max] + '!');
        p.appendChild(p_text);
        resultDiv.appendChild(p);
    }
    
    

    
}


window.addEventListener('load', buildQuiz);

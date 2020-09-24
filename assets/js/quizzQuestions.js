var selectedQuizz;
var countQuestion = 0;
var rightAnswers = 0;

function openQuizz(ele) {
    renderQuestionScreen();
    renderQuizzTitle(ele);

}

function renderResultScreen () {
    console.log('res');
}

function changeQuestionScreen () {
    if (++countQuestion === selectedQuizz.data.questions.length)
        renderResultScreen();
    else {
        question = document.querySelector('.quizz .container article');
        question.classList.add('hide-screen');
        setTimeout(resetsQuestionScreen, 200);
    }
}

function resetsQuestionScreen() {
    question.style.display = 'none';
    renderQuestion();
}

function processClickedAnswer() {
    var answers = Array.from(document.querySelectorAll('.quizz .container article .options-container > *'));
    for (answer of answers) {
        if (answer.id === 'right'){
            answer.querySelector('h3').classList.add('right');
            rightAnswers++;
        }
        else {
            answer.querySelector('h3').classList.add('wrong');
        }
    }
    setTimeout(changeQuestionScreen, 2000);
}

function selectQuizz() {
    for (quizz of quizzes)
        if (h1.innerText == quizz.title)
            return quizz;
}

function renderQuestion() {
    var question = selectedQuizz.data.questions[countQuestion];
    var answers = renderedAnswers(question);

    var article = document.createElement('article');
    article.classList.add('spacing');
    document.querySelector('.quizz .container').appendChild(article);

    var h2 = document.createElement('h2');
    h2.classList.add('question-title');
    h2.innerText = `${countQuestion + 1}. ${question.title}`;
    article.appendChild(h2);

    var ul = document.createElement('ul');
    ul.classList.add('options-container');

    for (answer of answers){
        ul.innerHTML += answer;
    } 
    article.appendChild(ul);
}

function renderedAnswers (question){
    var rendered = [];
    var rightAnswer = ` <li id='right' onclick="processClickedAnswer(this)"><img src="${question.answers[0].image}" alt=""><h3 class="answer">${question.answers[0].value}</h3></li>`
    rendered.push(rightAnswer);

    for (i = 1; i < question.answers.length; i++){
        wrongAnswer = ` <li onclick="processClickedAnswer(this)"><img src="${question.answers[i].image}" alt=""><h3 class="answer">${question.answers[i].value}</h3></li>`
        rendered.push(wrongAnswer);
    }
    return rendered.sort(() => { return .5 - Math.random(); });
}

function renderQuizzTitle(element) {
    h1 = document.createElement("h1");
    h1.classList.add('quizz-title');
    h1.innerText = element.querySelector('h2').innerText;

    document.querySelector('.quizz .container').appendChild(h1);


    selectedQuizz = selectQuizz(h1.innerText);
    renderQuestion();
}

function renderQuestionScreen() {
    document.querySelector(".quizzes-list").classList.add('hide-screen');
    document.querySelector(".create-quizz").classList.add('hide-screen');
}
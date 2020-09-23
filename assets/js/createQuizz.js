var questions = [];
var levels = [];
var countQuestions = 0;
var countLevels = 0;

function processQuizz() {
    getQuestions();
    getLevels();

    var quizz = {
        title: document.querySelector('#quizz-title').value,
        data: {
            questions: questions,
            levels: levels
        }
    }

    publishQuizz(quizz);
    resetQuizzCreation();
}

function getQuestions () {
    var preProcessQuestions = Array.from(document.querySelectorAll('.questions > *'));
    for (element of preProcessQuestions) {
        questions.push(processQuestion(element));
    }
}
function getLevels () {
    var preProcessLevels = Array.from(document.querySelectorAll('.levels > *'));
    for (element of preProcessLevels){
        levels.push(preProcessLevel(element));
    }
}
function processQuestion (preProcessQuestion) {
    var question = {
        title: preProcessQuestion.querySelector('#question-title').value,
        answers: getAnswers(preProcessQuestion)
    }
    return question;
}
function preProcessLevel (preProcessLevel) {
    var level = {
        title: preProcessLevel.querySelector('#level-title').value,
        image: preProcessLevel.querySelector('input[type=url]'),
        description: preProcessLevel.querySelector('textarea').value,
        minPercent: preProcessLevel.querySelector('#min-percent').value,
        maxPercent: preProcessLevel.querySelector('#max-percent').value
    }
    return level;
}

function getAnswers (preProcessQuestion) {
    var answers = [];
    var preProcessAnswers = Array.from(preProcessQuestion.querySelectorAll('.answers-container > *'));
    for (preProcessAnswer of preProcessAnswers) {
        answers.push(getAnswer(preProcessAnswer));
    }
    return answers;
}

function getAnswer (preProcessAnswer) {
    var answer = {
        value: preProcessAnswer.querySelector('input[type=text]').value,
        image: preProcessAnswer.querySelector('input[type=url]').value
    }
    return answer;
}

function publishQuizz(quizz) {
    const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', quizz, config);
    leaveCreateQuizzScreen();
}

function createQuestion(){
    var container = document.querySelector('.create-quizz .container.spacing .questions');
    var question = document.createElement('div');
    question.classList.add('create-question-container');
    question.classList.add('forms-spacing');
    question.setAttribute('id', 'question-'+ ++countQuestions);
    question.innerHTML = `<h2>Pergunta ${countQuestions}</h2>`;
    question.innerHTML += '<input type="text" name="question" id="question-title" placeholder="Digite a pergunta">';
    question.innerHTML += `<ul class="answers-container forms-spacing">
    <li><input type="text" name="answer" id="answer-1" class='right' placeholder="Digite a resposta correta"><input type="url" name="answer" class='right' placeholder="Link para imagem correta"></li>
    <li><input type="text" name="answer" id="answer-2" class='wrong' placeholder="Digite uma resposta errada 1"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 1"></li>
    <li><input type="text" name="answer" id="answer-3" class='wrong' placeholder="Digite uma resposta errada 2"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 2"></li>
    <li><input type="text" name="answer" id="answer-4" class='wrong' placeholder="Digite uma resposta errada 3"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 3"></li></ul>`;
  
    container.appendChild(question);
}

function createLevel () {
    var container = document.querySelector('.create-quizz .container.spacing .levels');
    var level = document.createElement('div');
    level.classList.add('create-question-container');
    level.classList.add('forms-spacing');
    level.setAttribute('id', 'level-'+ ++countLevels);
    level.innerHTML = `<h2>Nível ${countLevels}</h2>`;
    level.innerHTML += `<ul class="percentage-container forms-spacing">
    <li><input type="text" name="min-percent" id="min-percent" placeholder="% Mínima de Acerto do nível"><input type="text" name="max-percent" id='max-percent' placeholder="% Máxima de Acerto do nível"></li></ul>`;
    level.innerHTML += '<input type="text" name="level-title" id="level-title" placeholder="Título do nível">';
    level.innerHTML += '<input type="url" name="level-image" placeholder="Link da imagem do nível">';
    level.innerHTML += '<textarea type="text" name="level-description" placeholder="Descrição do nível">';
  
    container.appendChild(level);
}

function resetQuizzCreation () {
    document.querySelector('.create-quizz .container .questions').innerHTML = '';
    document.querySelector('.create-quizz .container .levels').innerHTML = '';
    countQuestions = 0;
    countLevels = 0;
}

function leaveCreateQuizzScreen(){
    getQuizzes();
    document.querySelector(".quizzes-list").classList.remove('hide-screen');
    document.querySelector(".create-quizz").style.display = 'none';
}
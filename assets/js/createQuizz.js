var questions = [];
var levels = [];
var countQuestions = 0;
var countLevels = 0;

createQuestion();
createLevel();




function createQuestion(){
    var container = document.querySelector('.create-quizz .container.spacing .questions');
    var question = document.createElement('div');
    question.classList.add('create-question-container');
    question.classList.add('forms-spacing');
    question.innerHTML = `<h2>Pergunta ${++countQuestions}</h2>`;
    question.innerHTML += '<input type="text" name="question" placeholder="Digite a pergunta">';
    question.innerHTML += '<ul class="answers-container forms-spacing">';
    question.innerHTML += `<li><input type="text" name="answer" id="answer-1" class='right' placeholder="Digite a resposta correta"><input type="url" name="answer" class='right' placeholder="Link para imagem correta"></li>`;
    question.innerHTML += `<li><input type="text" name="answer" id="answer-2" class='wrong' placeholder="Digite uma resposta errada 1"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 1"></li>`;
    question.innerHTML += `<li><input type="text" name="answer" id="answer-3" class='wrong' placeholder="Digite uma resposta errada 2"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 2"></li>`;
    question.innerHTML += `<li><input type="text" name="answer" id="answer-4" class='wrong' placeholder="Digite uma resposta errada 3"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 3"></li></ul>`;
  
    container.appendChild(question);
}

function createLevel () {
    var container = document.querySelector('.create-quizz .container.spacing .levels');
    var level = document.createElement('div');
    level.classList.add('create-question-container');
    level.classList.add('forms-spacing');
    level.innerHTML = `<h2>Nível ${++countLevels}</h2>`;
    level.innerHTML += '<ul class="answers-container forms-spacing">';
    level.innerHTML += `<li><input type="text" name="min-percent" id="min-percent" placeholder="% Mínima de Acerto do nível"><input type="text" name="max-percent" id='max-percent' placeholder="% Máxima de Acerto do nível"></li></ul>`;
    level.innerHTML += '<input type="text" name="level-title" placeholder="Título do nível">';
    level.innerHTML += '<input type="text" name="level-image" placeholder="Link da imagem do nível">';
    level.innerHTML += '<textarea type="text" name="level-description" placeholder="Descrição do nível">';
  
    container.appendChild(level);
}

function processQuizz() {
    console.log('oiiii');

    document.querySelector(".quizzes-list").classList.remove('hide-screen');
    document.querySelector(".create-quizz").style.display = 'none';
}

function publishQuizz() {
    const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', quizz, config);

    document.querySelector(".create-quizz").style.display = 'none';
}
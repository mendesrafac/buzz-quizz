var questions = [];
var i = 0;

createQuestion();
createLevel();




function createQuestion(){
    var container = document.querySelector('.create-quizz .container.spacing .questions');
    var question = document.createElement('div');
    question.classList.add('create-question-container');
    question.classList.add('forms-spacing');
    question.innerHTML = `<h2>Pergunta ${++i}</h2>`;
    question.innerHTML += '<input type="text" name="question" placeholder="Digite a pergunta">';
    question.innerHTML += '<ul class="answers-container forms-spacing">';
    question.innerHTML += `<li><input type="text" name="anwer" id="answer-1" class='right' placeholder="Digite a resposta correta"><input type="url" name="answer" class='right' placeholder="Link para imagem correta"></li>`;
    question.innerHTML += `<li><input type="text" name="anwer" id="answer-2" class='wrong' placeholder="Digite uma resposta errada 1"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 1"></li>`;
    question.innerHTML += `<li><input type="text" name="anwer" id="answer-3" class='wrong' placeholder="Digite uma resposta errada 2"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 2"></li>`;
    question.innerHTML += `<li><input type="text" name="anwer" id="answer-4" class='wrong' placeholder="Digite uma resposta errada 3"><input type="url" name="answer" class='wrong' placeholder="Link para imagem errada 3"></li></ul>`;
  
    container.appendChild(question);
}

function createLevel () {

}

function createQuizz() {

    //const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', quizz, config);
}
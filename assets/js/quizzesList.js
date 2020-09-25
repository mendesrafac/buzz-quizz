var quizzes = [];

function getQuizzes(){
    const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', config);
    request.then(processQuizzes);
}

function processQuizzes (response) {
    quizzes = [...response.data];
    renderNewQuizzBtn();
    for (quizz of quizzes) renderQuizz(quizz);
}
function renderNewQuizzBtn (){
    var ul = document.querySelector(".quizzes-list ul");
    ul.innerHTML =`<li class="create-quiz spacing" onclick="leaveQuizzesListScreen()"><h2>Novo Quizz</h2><ion-icon name="add-circle" class='add-icon'></ion-icon></li>`
}

function renderQuizz(quizz) {
    var li = document.createElement('li');
    var quizzTitle = document.createElement('h2');
    quizzTitle.innerText = quizz.title;
    li.appendChild(quizzTitle);
    li.setAttribute('onclick','openQuizz(this)');
    var ul = document.querySelector(".quizzes-list ul");
    ul.appendChild(li);
}

function leaveQuizzesListScreen (){
    createQuestion();
    createLevel();
    document.querySelector(".quizzes-list").classList.add('hide-screen');
    document.querySelector(".create-quizz").classList.remove('hide-screen');
    
}

function goToQuizzesListScreen() {
    getQuizzes();
    resetQuizzCreation();
    countQuestion = 0;
    rightAnswers = 0;
    document.querySelector(".quizz .container").innerHTML = '';
    document.querySelector(".quizzes-list").classList.remove('hide-screen');
}
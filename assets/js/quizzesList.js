var quizzes = [];

function getQuizzes(){
    const request = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', config);
    request.then(processQuizzes);
}

function processQuizzes (response) {
    quizzes = [...response.data];
    for (quizz of quizzes) renderQuizz(quizz);
}

function renderQuizz(quizz) {
    var li = document.createElement('li');
    var quizzTitle = document.createElement('h2');
    quizzTitle.innerText = quizz.title;
    li.appendChild(quizzTitle);
    
    var ul = document.querySelector(".quizzes-list ul");
    ul.appendChild(li);
}

function leaveQuizzesListScreen (){
    const quizzesListScreen = document.querySelector(".quizzes-list");
    quizzesListScreen.classList.add('hide-screen');
}

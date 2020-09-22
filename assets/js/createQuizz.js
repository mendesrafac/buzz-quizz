function leaveQuizzesListScreen (){
    const quizzesListScreen = document.querySelector(".quizzes-list");
    quizzesListScreen.classList.add('hide-screen');
}

function createQuizz() {
    leaveQuizzesListScreen();

    //const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/quizzes', quizz, config);
}
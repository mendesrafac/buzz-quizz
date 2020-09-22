var user = {};
var config = { headers: { }};

function signIn () {
    user.email = document.querySelector(".forms-container #email").value;
    user.password = document.querySelector(".forms-container #password").value;
    clearInput();
    validateInput();
}
function clearInput () {
    document.querySelector(".forms-container #email").value = '';
    document.querySelector(".forms-container #password").value = '';
}

function validateInput () {
    if (user.email === '' || user.password === '')
        alert('Preencha todos os campos');
    else { inputHandler(); }
}

function inputHandler () {
    disableBtn();
    const request = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v1/buzzquizz/users', user);
    request.then(processToken).catch(errorHandler)
}

function errorHandler () {
    alert("E-mail / senha incorretos");
    enableBtn();
}

function processToken (response){
    config.headers['User-Token'] = response.data.token;
    leaveMainScreen();
    getQuizzes();
}

function leaveMainScreen () {
    const loginScreen = document.querySelector(".login-screen");
    const header = document.querySelector('header');
    
    loginScreen.classList.add('hide-screen');
    header.classList.remove('hide-screen');
}

function disableBtn () {
    var signInBtn = document.querySelector(".forms-container button");
    signInBtn.setAttribute('disabled','');
}

function enableBtn () {
    var signInBtn = document.querySelector(".forms-container button");
    signInBtn.removeAttribute('disabled','');
}

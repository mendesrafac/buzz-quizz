
function renderResultScreen() {
    question.style.display = 'none';
    var levels = selectedQuizz.data.levels;
    var numQuestions = selectedQuizz.data.questions.length;
    var percent = (Math.round((rightAnswers / numQuestions + Number.EPSILON) * 100));

    article = document.createElement("article");
    article.classList.add('result-screen');
    article.classList.add('spacing');
    document.querySelector(".quizz .container").appendChild(article);

    var scoreLevel = getScoreLevel(levels, percent);

    article.innerHTML = `<h2>Você acertou ${rightAnswers} de ${numQuestions} perguntas!<br>Score: ${percent}%</h2>`;
    article.innerHTML += `<div class='result-container'><div class='text-container'><h3>${levels[scoreLevel].title}</h3><p>${levels[scoreLevel].description}</p></div><img src=${levels[scoreLevel].image}></div>`;

}

function getScoreLevel (levels, percent) {
    for (i = 0; i < levels.length; i++) {
        if(levels[i].minPercent <= percent && levels[i].maxPercent >= percent)
            return i;
    }
}
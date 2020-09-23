function validateStr (element) {
    return (element.charAt(0).toUpperCase() + element.slice(1).toLowerCase()).trim();
}

function validateQuizz () {
    for (question of questions){
        if (!validatedQuestion(question.title))
            return false;
    }
    return true;
}
function validatedQuestion(string) {
    if(string.indexOf('?') === string.lastIndexOf('?')){
        if (string.indexOf('?') !== string.length-1)
            return false;
        else return true;
    }
    return false;
}
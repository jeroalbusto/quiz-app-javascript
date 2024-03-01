import { newQuestions } from "./data/questions.js";

import { Quiz } from "./models/quiz.js";

import { Ui } from "./models/ui.js";


const renderPage = (quiz, ui) => {
    if(quiz.isEnded()){
    ui.showScores(quiz.score)

    }else {
    ui.showQuestion(quiz.getQuestionIndex().text)

    ui.showChoices(quiz.getQuestionIndex().choices, (currentChoice) => {
    quiz.guess(currentChoice)
    renderPage(quiz,ui)
    })
    ui.showProgress(quiz.choicesIndex + 1, quiz.choices.length)
    }
}


function main(){
    const quiz = new Quiz(newQuestions);

    const ui = new Ui()

    
    renderPage(quiz, ui)
}


main();
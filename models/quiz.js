import {Question} from './question.js'

export class Quiz {

    choicesIndex = 0

    score = 0

    constructor(choices){
        this.choices = choices
    }

    getQuestionIndex(){
        return this.choices[this.choicesIndex]
    }

    isEnded(){
        return this.choices.length === this.choicesIndex
    }

    guess(answer){

        if(this.getQuestionIndex().correctAnswer(answer)){
            this.score++
        }

        this.choicesIndex++
    }
}
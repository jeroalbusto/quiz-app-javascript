export class Question {

    /**
     * 
     * @param {string} text this is the text
     * @param {string[]} choices this is the array
     * @param {string} answer  this is the answer
     */

    constructor(text, choices,answer){
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    /**
     * 
     * @param {string} choice some text to guess
     * @returns {boolean} return true if the answer is correct
     */

    correctAnswer(choice){
        return choice === this.answer
    }
}


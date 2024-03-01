export class Ui {
    constructor(){}

    showQuestion(text){
        const questionTitle = document.getElementById('question2')
        
        questionTitle.innerText = text 
    }


    showChoices(choices, callback){
        const choicesContainer = document.getElementById('choices')

        choicesContainer.innerHTML = ''

        for(let i = 0; i < choices.length; i++){
            const button = document.createElement('button')
            button.innerText = choices[i]
            button.className = 'button'

            button.addEventListener('click', ()=>{
                callback(choices[i])
            })

            choicesContainer.append(button)
        }
    }

    showScores(score){
        const quizEndHtml = `
        <h1>Result</h1>
        <iframe src="https://giphy.com/embed/JnZdM8OOYA3mk7HyFn" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h2>Your Score: ${score}</h2>
        `
        const quizEndHtml2 = `
        <h1>Result</h1>
        <iframe src="https://giphy.com/embed/6XIibyHGBQRmqLR5s2" width="280" height="280" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <h2>Your Score: ${score}</h2>
        `

    const element = document.getElementById('quiz')
    if(score === 0){
        element.innerHTML = quizEndHtml2 
    }else{
        element.innerHTML = quizEndHtml
    }
    }


    showProgress(currentIndex, total){
        const element = document.getElementById('progress')
        element.innerHTML = `Question ${currentIndex} of ${total}`
    }
}
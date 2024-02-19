export default class Questions {
    constructor(question, incorrectAnswer, correctAnswer) {
        this.question = question
        this.incorrectAnswer = incorrectAnswer
        this.correctAnswer = correctAnswer
    }

    shuffleOptions() {
        let newOptions = [...this.incorrectAnswer]
        newOptions.push(this.correctAnswer)
        newOptions.sort()
        return newOptions
    }

    checkAnswer(attempt) {
        return attempt === this.correctAnswer
    }
}




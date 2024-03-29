export default class Glossary {
    constructor(id, question, incorrectAnswer, correctAnswer, extraInfo, isVisible) {
        this.id = id
        this.question = question
        this.incorrectAnswer = incorrectAnswer
        this.correctAnswer = correctAnswer
        this.extraInfo = extraInfo
        this.isVisible = isVisible
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
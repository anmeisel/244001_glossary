export default class Questions {
    constructor(question, difficulty, incorrectAnswer, correctAnswer) {
        this.question = question
        this.difficulty = difficulty
        this.incorrectAnswer = incorrectAnswer
        this.correctAnswer = correctAnswer
    }

    // {*} means its an optional parameter
    /**
     * Shuffle all possible options
     * @returns Whether the attempt was correct or not
     */

    shuffleOptions() {
        let newOptions = [...this.incorrectAnswer] // copy the array
        newOptions.push(this.correctAnswer) // appends correctAnswer to the end of the array
        newOptions.sort() // sorts alphabetically
        return newOptions
        // return [...this]
    }

    checkAnswer(attempt) {
        return attempt === this.correctAnswer
    }
}




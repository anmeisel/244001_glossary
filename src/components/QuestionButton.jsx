import "./QuestionButton.css"

export default function QuestionButton(props) {
    return (
        <button onClick={props.onAttempt}>
            {props.label}
        </button>
    )
}
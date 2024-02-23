import "./QuestionButton.css"

export default function QuestionButton(props) {
    return (
        <button className="choice" onClick={props.onAttempt}>
            {props.label}
        </button>
    )
}
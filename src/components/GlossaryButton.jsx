import "./QuestionButton.css"

export default function GlossaryButton(props) {
    return (
        <div className="glossary">
        <button onClick={() => props.action(props.terms)}>
            {props.subject}
        </button>
        <button>
        {props.toggle ? `${props.terms}` : ""}
        </button>
        </div>
    )
}
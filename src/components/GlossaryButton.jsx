import "./QuestionButton.css"

// const [targetIndex, setTargetIndex] = useState(0)

export default function QuestionButton(props) {
    return (
        <div key={props.index} className="glossary">
            <button className="subject" onClick={props.toggleVisibility}>{props.item.question}</button>
            {/* <button onClick={() => setTargetIndex(index)}>{item.question}</button>
            <div>{item[targetIndex].question}</div> */}
            <button className="terms" style={{ display: props.item.isVisible ? 'block' : 'none' }}>{props.item.correctAnswer}. {props.item.extraInfo}</button>
        </div>
    )
}
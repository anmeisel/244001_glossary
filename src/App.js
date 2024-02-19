import './App.css';
import { useState } from 'react';
import Glossary from './model/Glossary'
import QuestionButton from './components/QuestionButton'

function App() {
  const [message, setMessage] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [glossary, setGlossary] = useState([
    new Glossary(0, "React", ["First answer", "Second answer", "Third answer"], "JavaScript framework that works with JSX files.", false),
    new Glossary(1, "JSX", ["First answer", "Second answer", "Third answer"], "HTML + JavaScript. Server-side scripting. Functions can be returned in pure HTML.", false),
    new Glossary(2, "XML", ["First answer", "Second answer", "Third answer"], "Extensible Markup Language. XML was designed to carry data - with focus on what data is. Does not display data.", false),
    new Glossary(3, "To start a project...", ["First answer", "Second answer", "Third answer"], "npx create-react-app [name of project]", false),
    new Glossary(4, "Component", ["First answer", "Second answer", "Third answer"], "Reusable functions. React only re-renders components that have changed. State is like a variable.", false),
    new Glossary(5, "useState", ["First answer", "Second answer", "Third answer"], "Re-renders once the function has been manipulated. It’s a React hook - functional compenet that tracks its own data. It takes a reference to the value (variable - but don't refer to this variable in the function), and then a function name. UseState will start at whatever is in its parameter. UseState is how we use a function to a component instead of a class. E.g.: const [count, setCount] = useState(0). A state variable should always be declared at the highest level its needed.", false),
    new Glossary(6, "Hooks", ["First answer", "Second answer", "Third answer"], "functional components as opposed to class components. Functional component is a reusable, imported. A function that returns some HTML.", false),
    new Glossary(7, "Props", ["First answer", "Second answer", "Third answer"], "A generic parameter passed via the function. Object full of properties that we can assign. For example, you can give props to a component and assign them in the component name in app.js.", false),
    new Glossary(8, "OnChange", ["First answer", "Second answer", "Third answer"], "This will always give you an event object. Every onChange passes an event object, containing info about the event.", false),
    new Glossary(9, "Callback function", ["First answer", "Second answer", "Third answer"], "Parent (app.js) passes a State function as props to a child element (colourbutton.js). The child gets State of parent. This function or state can be a prop. Steps for making a prop: 1. Make a custom prop in your app.js component name i.e. <ColourButton col={'green'}/>. 2. Bring prop as an attribute in the component function name i.e. ColourButton(props). 3. Use it inside your component i.e. style={{backgroundColor: props.col}}. All inline!", false),
    new Glossary(10, "Toggle", ["First answer", "Second answer", "Third answer"], "Make a useState(false). Underneath make a toggleClass function (i.e. const toggleClass = () => {setBackground(!background)}). In the button inline make a ternary operator (i.e. style={{ backgroundColor: background ? 'darkslateblue' : 'green' }} ).", false),
    new Glossary(11, "Map", ["First answer", "Second answer", "Third answer"], "Like a For loop. Applies a function to an array and returns a new array. Make sure to always put a key right inside the return statement when calling the component.", false),
    new Glossary(12, "Flex", ["First answer", "Second answer", "Third answer"], "Flex will always affect the child elements. Full flex is 1. 50% will be 0.5.", false),
  ])

  // for Quiz:

  function nextQuestion() {
    setMessage("")
    currentQuestion >= glossary.length - 1 ?
      setCurrentQuestion(0) : setCurrentQuestion(currentQuestion + 1)
  }
  
  function onAttempt(attempt) {
    if (glossary[currentQuestion].checkAnswer(attempt)) {
      setMessage("Correct!! :)")
      setTimeout(() => nextQuestion(), 1500);
    } else {
      setMessage("Incorrect.. :(")
    }
  }

  const toggleVisibility = (index) => {
    const updatedGlossary = [...glossary]
    updatedGlossary[index].isVisible = !updatedGlossary[index].isVisible
    setGlossary(updatedGlossary)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="glossary-container">
          {glossary.map((item, index) => (
            <div key={index} className="glossary">
            <button className="subject" onClick={() => toggleVisibility(index)}>
              {item.question}</button>
            <button className="terms" style={{ display: item.isVisible ? 'block' : 'none' }}>{item.correctAnswer}</button>
            </div>
          ))}
        </div>
        <div className="quiz">
          <h1>Quiz time!</h1>
            <div>What is {glossary[currentQuestion].question}?</div>
            <h3>{message}</h3>
            <div className="answers"> 
            {glossary[currentQuestion].shuffleOptions().map((option, index) => {
              return (
                <QuestionButton key={index} label={option} onAttempt={() => onAttempt(option)}/>
              )
            })}
            </div>
        </div>
      </header>
    </div>
  );
}

export default App;

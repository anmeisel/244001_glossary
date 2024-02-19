import './App.css';
import { useState } from 'react';
import Question from './model/Questions'
import Glossary from './model/Glossary'
import GlossaryButton from './components/GlossaryButton'
import QuestionButton from './components/QuestionButton'

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [message, setMessage] = useState()

  const [questions, setQuestions] = useState([
    new Question("What is sequencing?", "easy", ["A variable", "An operator", "A function"], "A control structure"),
    new Question("What is the result of 2 * 3?", "easy", ["4", "3", "10"], "6")
  ])

  const [glossary, setGlossary] = useState([
    new Glossary("React", "JavaScript framework that works with JSX files."),
    new Glossary("JSX", "HTML + JavaScript. Server-side scripting. Functions can be returned in pure HTML."),
    new Glossary("XML", "Extensible Markup Language. XML was designed to carry data - with focus on what data is. Does not display data."),
    new Glossary("To start a project...", "npx create-react-app [name of project]"),
    new Glossary("Component", "Reusable functions. React only re-renders components that have changed. State is like a variable."),
    new Glossary("useState", "Re-renders once the function has been manipulated. It’s a React hook - functional compenet that tracks its own data. It takes a reference to the value (variable - but don't refer to this variable in the function), and then a function name. UseState will start at whatever is in its parameter. UseState is how we use a function to a component instead of a class. E.g.: const [count, setCount] = useState(0). A state variable should always be declared at the highest level its needed."),
    new Glossary("Hooks", "functional components as opposed to class components. Functional component is a reusable, imported. A function that returns some HTML."),
    new Glossary("Props", "A generic parameter passed via the function. Object full of properties that we can assign. For example, you can give props to a component and assign them in the component name in app.js."),
    new Glossary("OnChange", "This will always give you an event object. Every onChange passes an event object, containing info about the event."),
    new Glossary("Callback function", "Parent (app.js) passes a State function as props to a child element (colourbutton.js). The child gets State of parent. This function or state can be a prop. Steps for making a prop: 1. Make a custom prop in your app.js component name i.e. <ColourButton col={'green'}/>. 2. Bring prop as an attribute in the component function name i.e. ColourButton(props). 3. Use it inside your component i.e. style={{backgroundColor: props.col}}. All inline!"),
    new Glossary("Toggle", "Make a useState(false). Underneath make a toggleClass function (i.e. const toggleClass = () => {setBackground(!background)}). In the button inline make a ternary operator (i.e. style={{ backgroundColor: background ? 'darkslateblue' : 'green' }} )."),
    new Glossary("Map", "Like a For loop. Applies a function to an array and returns a new array. Make sure to always put a key right inside the return statement when calling the component."),
    new Glossary("Flex", "Flex will always affect the child elements. Full flex is 1. 50% will be 0.5."),
  ])

  function nextQuestion() {
    currentQuestion >= questions.length - 1 ?
      setCurrentQuestion(0) : setCurrentQuestion(currentQuestion + 1)
  }

    function onAttempt(attempt) {
      if (questions[currentQuestion].checkAnswer(attempt)) {
        setMessage("Correct")
        // nextQuestion()
      } else {
        setMessage("Incorrect")
      }
    }

  const answers = questions[currentQuestion].shuffleOptions()

  const [toggle, setToggle] = useState(false)
  const isToggled = () => {
    setToggle(!toggle);
  };

  return (
    <div className="App">
      <header className="App-header">
          {glossary.map((item, index) => {
            return (
              <>
              <GlossaryButton key={index} action={isToggled} subject={item.subject} toggle={toggle} terms={item.terms}/>
              </>
            )
          })}
        <br/><br/><br/><br/>
        <h1>Quiz!</h1>
        <div>
          <div>{questions[currentQuestion].question}</div>
          <h3>{message}</h3>
          <div className="answers"> 
          {answers.map((option) => {
            return (
              <QuestionButton label={option} onAttempt={() => onAttempt(option)}/>
            )
          })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

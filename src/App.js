import './App.css';
import { useState } from 'react';
import Glossary from './model/Glossary'
import GlossaryArray from './model/GlossaryArray'
import GlossaryButton from './components/GlossaryButton'
import QuestionButton from './components/QuestionButton'

function App() {
  const [message, setMessage] = useState()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [glossary, setGlossary] = useState(GlossaryArray)

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
          {glossary.map((item, index) => {
            return (
            <GlossaryButton key={index} item={item} toggleVisibility={() => toggleVisibility(index)}/>
            )
          })}
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

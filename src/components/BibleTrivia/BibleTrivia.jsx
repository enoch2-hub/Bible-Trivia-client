import React, { useState } from 'react';
import './BibleTrivia.css';

const BibleTrivia = ({ triviaData }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < triviaData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const restartTrivia = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
  };

   // Check if triviaData is not available yet
   if (!triviaData || triviaData.length === 0) {
    return <div>Loading...</div>; // Handle loading state or display an error message
  }

  return (
    <div className="bible-trivia">
      {showResult ? (
        <div className="result">
          <h2>Result</h2>
          <p>You scored {score} out of {triviaData.length}.</p>
          <button onClick={restartTrivia}>Restart</button>
        </div>
      ) : (
        <div className="question">
          <h2>{triviaData[currentQuestion].question}</h2>
          <div className="options">
            {triviaData[currentQuestion].options.map((option, index) => (
              <button key={index} onClick={() => handleAnswerOptionClick(option.isCorrect)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );

};

export default BibleTrivia;

/* eslint-disable react/prop-types */
import "./Question.css";

function Question({ question, handleAnswerButtonClick }) {
  return (
    <div className="question-section">
      <div className="question-text">{question.questionText}</div>
      <div className="answer-section">
        {question.answerOptions.map((answerOption, index) => (
          <button
            key={index}
            onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
          >
            {answerOption.answerText}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;

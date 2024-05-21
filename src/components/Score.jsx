/* eslint-disable react/prop-types */
import "./Score.css";

function Score({ score, totalQuestions }) {
  return (
    <div className="score-section">
      You scored {score} out of {totalQuestions}
    </div>
  );
}

export default Score;

import "./AddQuestion.scss";
import binIcon from "../../assets/bin-icon.svg";

const AddQuestion = ({ question, answers, questionNumber, handleDelete }) => {
  let answerJSX = answers?.map((answer, index) => {
    return answer.includes("*") ? (
      <li key={index} className="question__each-answer">
        {answer.replace("*", "")} <b className="question__correct">(correct)</b>
      </li>
    ) : (
      <li key={index} className="question__each-answer">
        {answer}
      </li>
    );
  });

  return (
    <div className="question">
      <div className="question__container">
        <h6 className="question__title">
          Q{questionNumber}. {question}?{" "}
        </h6>
        <ol className="question__answers" type="A">
          {answerJSX}
        </ol>
      </div>
      <div className="buttons">
        <img
          className="buttons__bin"
          src={binIcon}
          alt="Delete Question"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
};

export default AddQuestion;

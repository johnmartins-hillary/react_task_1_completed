import React from "react";
import { useSelector } from "react-redux";
import useAuth from "../../hooks/useAuth";
import "./Result.css";
import {Link} from  'react-router-dom'

const Result = () => {
  const { answeredQuiz } = useAuth();
  const { currentQuiz } = useSelector((state) => state.quiz);

  return (
    <div className="result_container">
      <h3 className="title">Result</h3>
      <table className="wrapper">
        <thead></thead>
        <tr className="question">
          {currentQuiz.map((question, index) => (
            <th className="qst" key={index}>
              {`${index + 1}`}. {question.question}
            </th>
          ))}
        </tr>
        <tr className="correct_answer">
          {answeredQuiz?.map((answer, index) => (
            <>
              {answer && typeof answer !== "number" ? (
                <td className="answer" key={index}>
                  {Array.isArray(answer) ? (
                    answer.map((a, index) => (
                      <span className="ans" key={index}>
                        {`${a}, `}
                      </span>
                    ))
                  ) : (
                    <span className="ans">{answer}</span>
                  )}
                </td>
              ) : (
                <td className="no_ans">No answer</td>
              )}
            </>
          ))}
        </tr>
      </table>
      <Link to="/">Answer questions again</Link>
    </div>
  );
};

export default Result;

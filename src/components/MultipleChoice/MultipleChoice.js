import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./MultipleChoice.module.css";
const MultipleChoice = (props) => {
  const { question, answers } = props.quiz;
  const { handleSimpleInput } = useAuth();

  return (
    <div>
      <div className={styles.MultipleChoice}>
        <div className="py-2 h5">
          <b>{question}</b>
        </div>
        <select onChange={handleSimpleInput} multiple className={styles.select}>
          {answers.map((ans) => (
            <option
              className="d-block mx-2  border-2 border my-3 "
              value={ans.answer}
              label={ans.answer}
              key={ans.id}
            />
          ))}
        </select>
      </div>
    </div>
  );
};

export default MultipleChoice;

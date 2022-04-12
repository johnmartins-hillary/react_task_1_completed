import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./TrueFalse.module.css";

const TrueFalse = (props) => {
  const { question } = props.quiz;
  const { handleSimpleInput } = useAuth();

  return (
    <div className=" p-2 ">
      <h4 className="  mb-4">{question}</h4>
      <select onChange={handleSimpleInput} multiple className={styles.select}>
        <option className="d-block mx-2  border-2 border my-3" value="True">
          True
        </option>
        <option className="d-block mx-2  border-2 border my-3" value="False">
          False
        </option>
      </select>
    </div>
  );
};

export default TrueFalse;

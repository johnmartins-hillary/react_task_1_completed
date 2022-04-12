import React from "react";
import useAuth from "../../hooks/useAuth";
import styles from "./LongText.module.css";

const LongText = (props) => {
  const { question } = props.quiz;
  const { handleSimpleInput } = useAuth();

  return (
    <div className=" p-2 ">
      <h4 className=" text-success">{question}</h4>
      <input
        placeholder="long text"
        onChange={handleSimpleInput}
        className={styles.LongTextInput}
        required
        type="text"
      />
    </div>
  );
};

export default LongText;

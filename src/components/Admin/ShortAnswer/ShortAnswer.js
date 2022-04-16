import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editQuestion } from "../../../redux/quizReducer";

import "./ShortText.css";

const ShortAnswer = (props) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentQuiz } = useSelector((state) => state.quiz);

  const [shortText, setShortText] = useState({
    id: id,
    text: "",
  });
  console.log(currentQuiz);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = currentQuiz.find((n) => n?.id == shortText?.id);
    text = { ...text, question: shortText.text };
    console.log(text);
    dispatch(editQuestion(text));
  };
  console.log(shortText);
  return (
    <form className="text_continer" onSubmit={(e) => handleSubmit(e)}>
      <h4>Question text</h4>
      <input
        className="input"
        required
        type="text"
        onChange={(e) => setShortText({ ...shortText, text: e.target.value })}
      />
      <button type="submit" className="submitText">
        submit
      </button>
    </form>
  );
};

export default ShortAnswer;

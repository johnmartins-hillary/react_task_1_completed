import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editQuestion } from "../../../redux/quizReducer";
import "./LongText.css";

const LongText = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentQuiz } = useSelector((state) => state.quiz);

  const [longText, setLongText] = useState({
    id: id,
    text: "",
  });
  console.log(currentQuiz);
  const handleSubmit = (e) => {
    e.preventDefault();
    let text = currentQuiz.find((n) => Number(n?.id) === Number(longText?.id));
    text = { ...text, question: longText.text, type: "long_text" };
    dispatch(editQuestion(text));
  };
  return (
    <form className="text_container " onSubmit={(e) => handleSubmit(e)}>
      <h4>Question Text</h4>
      <textarea
        placeholder="long text"
        required
        cols="50"
        rows="4"
        onChange={(e) => setLongText({ ...longText, text: e.target.value })}
      />
      <button type="submit">submit</button>
    </form>
  );
};

export default LongText;

import React, { useState } from "react";
import "../../../components/Admin/MainBody/MainBody.css";
import { addQuestion } from "../../../redux/quizReducer";
import { useDispatch, useSelector } from "react-redux";
import { quiz } from "../../../main";

const NewQuestion = () => {
  const [questionType, setQuestionType] = useState("");
  const dispatch = useDispatch();
  const { currentQuiz } = useSelector((state) => state.quiz);

  const handleClick = (type) => {
    setQuestionType(type);
    // adding a new question
    const newQuestion = {
      id: currentQuiz.length + 1,
      type: type,
      question: "",
      answers: [],
      correct_answer: 1,
    };
    dispatch(addQuestion(newQuestion));
  };

  return (
    <div>
      <div className="question_type_continer">
        <div className="title">
          <h1>Question Type</h1>
        </div>
        <div className="content">
          {quiz?.map((item, index) => (
            <button
              className="question_type"
              key={index}
              onClick={() => handleClick(item.type)}
            >
              {item.type}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewQuestion;

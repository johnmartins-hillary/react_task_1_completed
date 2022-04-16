import React from "react";
import "./Question.css";
import { useDispatch } from "react-redux";
import { deleteQuestion } from "../../../redux/quizReducer";

const Question = ({ navigate, type, id }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    console.log(id);
    dispatch(deleteQuestion(id));
  };
  const handleNavigate = (type, id) => {
    console.log(type);
    if (type === "short_answer") {
      navigate(`/admin/short_text/${id}`);
    } else if (type === "long_text") {
      navigate(`/admin/long_text/${id}`);
    } else if (type === "multiple_choice") {
      navigate(`/admin/multiple_choice/${id}`);
    } else if (type === "multiple_selection_choice") {
      navigate(`/admin/multiple_selection_choice/${id}`);
    }
  };

  return (
    <div className="question_container">
      <div className="" onClick={() => handleNavigate(type, id)}>
        <p className="question_title">Question {id}</p>
        <div className="question_type_name">{type}</div>
      </div>
      <div className="right">
        <button className="" onClick={() => handleDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Question;

import React from "react";
import "./Question.css";

const Question = ({ navigate, type, id }) => {
  return (
    <div className="question_container">
      <div className="" onClick={() => navigate("/admin/short_text")}>
        <p className="question_title">Question {id}</p>
        <div className="question_type_name">{type}</div>
      </div>
      <div className="right">
        <button className="">Delete</button>
      </div>
    </div>
  );
};

export default Question;

import React from "react";
import "./Sidebar.css";
import { useNavigate } from "react-router-dom";
import Question from "../Question/Question";
import { useSelector } from "react-redux";


const Sidebar = () => {
  const navigate = useNavigate();
  const { currentQuiz } = useSelector((state) => state.quiz);

  return (
    <div className="sidebar_container">
      <div className="add_question">
        Questions
        <button
          className="add_button"
          onClick={() => navigate("/admin/question_type")}
        >
          +
        </button>
        <div className="new_question">
          {currentQuiz.map((q, index) => (
            <Question navigate={navigate} type={q.type} id={q.id} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

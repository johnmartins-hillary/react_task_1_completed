import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editQuestion } from "../../../redux/quizReducer";
import "./MultipleChoice.css";

const MultipleChoice = () => {
  const [inputList, setInputList] = useState([{ answerText: "" }]);
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentQuiz } = useSelector((state) => state.quiz);

  console.log(inputList);

  const handleInputAdd = () => {
    setInputList([...inputList, { answerText: "" }]);
  };

  const handleInputRemove = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let answers = currentQuiz.find((n) => n?.id == id);
    answers = { ...answers, answers: inputList };
    console.log(answers);
    dispatch(editQuestion(answers));
  };

  return (
    <div className="multiple_choice">
      <h4>Question text</h4>
      <input type="text" placeholder="question text" />
      <div className="answer_text_collection">
        <h4>Answer text</h4>
        {inputList.map((input, index) => (
          <div key={index}>
            <div className="answer_list" key={index}>
              <input
                type="text"
                className="answer_text_one"
                placeholder="answer text"
                value={input.answerText}
                onChange={(e) => handleInputChange(e, index)}
                required
              />
              {inputList.length > 1 && (
                <button onClick={() => handleInputRemove(index)}>
                  Removes
                </button>
              )}
            </div>
            {inputList.length - 1 === index && inputList.length < 10 && (
              <button onClick={handleInputAdd}>Add input</button>
            )}
          </div>
        ))}
        <button onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </div>
  );
};

export default MultipleChoice;

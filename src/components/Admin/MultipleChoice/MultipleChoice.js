import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { editQuestion } from "../../../redux/quizReducer";
import "./MultipleChoice.css";

const MultipleChoice = () => {
  const [inputList, setInputList] = useState([{ answerText: "" }]);
  const [questionText, setQuestionText] = useState("");
  const { id } = useParams();
  const dispatch = useDispatch();
  const { currentQuiz } = useSelector((state) => state.quiz);

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
    let answers = currentQuiz.find((n) => Number(n?.id) === Number(id));
    console.log(inputList);
    let answerList = inputList.map((answer, index) => {
      return {
        id: index + 1,
        answer: answer.answerText,
        correct_answer: 0
      };
    });
    console.log(answerList);
    answers = {
      ...answers,
      question: questionText,
      type: "multiple_choice",
      answers: answerList,
    };
    dispatch(editQuestion(answers));
  };

  return (
    <div className="multiple_choice">
      <h4>Question text</h4>
      <input
        type="text"
        placeholder="question text"
        onChange={(e) => setQuestionText(e.target.value)}
      />
      <div className="answer_text_collection">
        <h4>Answer text</h4>
        {inputList.map((input, index) => (
          <div key={index}>
            <div className="answer_list" key={index}>
              <input
                name="answerText"
                className="answer_text_one"
                placeholder="answer text"
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

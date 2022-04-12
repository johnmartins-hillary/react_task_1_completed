import React, { useState } from "react";
import Select from "react-select";
import useAuth from "../../hooks/useAuth";

const MultipleSelectionChoice = (props) => {
  const { question, answers } = props.quiz;
  const { answeredQuiz, currentQuestion } = useAuth();
  //state for multiple selection
  const [selectedCategories, setSelectedCategories] = useState([]);

  //
  const handleAnswer = (e) => {
    const updateCategory = selectedCategories.map((category) => category.value);
    // updating the answer for the current quiz
    answeredQuiz[currentQuestion].correct_answer = updateCategory;
  };

  //   handeling the changes for multiple choices
  const handleChange = (selectedCategories) => {
    setSelectedCategories(selectedCategories);
  };
  return (
    <div>
      <h4 className="text-primary mb-3">{question}</h4>

      <Select
        onBlur={handleAnswer}
        isMulti
        value={selectedCategories}
        name="categories"
        onChange={handleChange}
        options={answers}
        className="mb-2  rounded border-2 mt-1"
      />
    </div>
  );
};

export default MultipleSelectionChoice;

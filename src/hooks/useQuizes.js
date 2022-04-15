import { useState } from "react";
import { useSelector } from "react-redux";

const useQuizes = () => {
  const { currentQuiz } = useSelector((state) => state.quiz);
  //
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answeredQuiz, setAnsweredQuiz] = useState(currentQuiz);

  //   taking value from each input and updating the correct answer from quiz
  const handleSimpleInput = (e) => {
    answeredQuiz[currentQuestion].correct_answer = e.target.value;
  };

  // ------------------------------
  // allAnswers  holds the correct answers to all questions
  const handleSubmit = () => {
    const allAnswers = answeredQuiz.map((answer) => answer.correct_answer);
    console.log(allAnswers);
    // navigate("/admin");
  };
  // ------------------------------

  return {
    currentQuestion,
    setCurrentQuestion,
    answeredQuiz,
    setAnsweredQuiz,
    handleSimpleInput,
    handleSubmit,
  };
};

export default useQuizes;

import useAuth from "../../hooks/useAuth";
import styles from "./Home.module.css";
import Description from "../../components/Description/Description";
import LongText from "../../components/LongText/LongText";
import MultipleChoice from "../../components/MultipleChoice/MultipleChoice";
import MultipleSelectionChoice from "../../components/MultipleSelectionChoice/MultipleSelectionChoice";
import TrueFalse from "../../components/TrueFalse/TrueFalse";
import ShortAnswer from "../../components/ShortAnswer/ShortAnswer";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { currentQuestion, setCurrentQuestion, handleSubmit } = useAuth();
  const { currentQuiz } = useSelector((state) => state.quiz);
  const navigate = useNavigate();

  //   increasing quiz set no by 1 after clicking
  const handleNext = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  //   decreasing quiz set no by 1 after clicking
  const handlePrev = () => {
    setCurrentQuestion(currentQuestion - 1);
  };

  //   matching quiz type with components to render
  const renderElement = () => {
    if (currentQuiz[currentQuestion].type === "short_answer") {
      return <ShortAnswer quiz={currentQuiz[currentQuestion]}></ShortAnswer>;
    } else if (currentQuiz[currentQuestion].type === "multiple_choice") {
      return <MultipleChoice quiz={currentQuiz[currentQuestion]}></MultipleChoice>;
    } else if (currentQuiz[currentQuestion].type === "multiple_selection_choice") {
      return (
        <MultipleSelectionChoice
          quiz={currentQuiz[currentQuestion]}
        ></MultipleSelectionChoice>
      );
    } else if (currentQuiz[currentQuestion].type === "long_text") {
      return <LongText quiz={currentQuiz[currentQuestion]}></LongText>;
    } else if (currentQuiz[currentQuestion].type === "description") {
      return <Description quiz={currentQuiz[currentQuestion]}></Description>;
    } else if (currentQuiz[currentQuestion].type === "true_false") {
      return <TrueFalse quiz={currentQuiz[currentQuestion]}></TrueFalse>;
    }
  };

  return (
    <div className={styles.home}>
      {/* rendering the matched quiz with type and current number */}
      <div className={styles.quizContainer}>{renderElement()}</div>

      <div className={styles.HomeButtonContainer}>
        {currentQuestion > 0 && (
          <button onClick={handlePrev} className={styles.prevBtns}>
            PREV
          </button>
        )}
        {currentQuestion < currentQuiz.length - 1 ? (
          <button onClick={handleNext} className={styles.nextBtns}>
            NEXT
          </button>
        ) : (
          <button
            onClick={() => handleSubmit(navigate)}
            className={styles.nextBtns}
            style={{ backgroundColor: "skyblue", color: "black" }}
          >
            SUBMIT
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;

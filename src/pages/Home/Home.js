import { quiz } from "../../main";
import useAuth from "../../hooks/useAuth";
import styles from "./Home.module.css";
import Description from "../../components/Description/Description";
import LongText from "../../components/LongText/LongText";
import MultipleChoice from "../../components/MultipleChoice/MultipleChoice";
import MultipleSelectionChoice from "../../components/MultipleSelectionChoice/MultipleSelectionChoice";
import ShortAnswer from "../../components/ShortAnswer/ShortAnswer";
import TrueFalse from "../../components/TrueFalse/TrueFalse";

const Home = () => {
  const { currentQuestion, setCurrentQuestion, handleSubmit } = useAuth();
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
    if (quiz[currentQuestion].type === "short_answer") {
      return <ShortAnswer quiz={quiz[currentQuestion]}></ShortAnswer>;
    } else if (quiz[currentQuestion].type === "multiple_choice") {
      return <MultipleChoice quiz={quiz[currentQuestion]}></MultipleChoice>;
    } else if (quiz[currentQuestion].type === "multiple_selection_choice") {
      return (
        <MultipleSelectionChoice
          quiz={quiz[currentQuestion]}
        ></MultipleSelectionChoice>
      );
    } else if (quiz[currentQuestion].type === "long_text") {
      return <LongText quiz={quiz[currentQuestion]}></LongText>;
    } else if (quiz[currentQuestion].type === "description") {
      return <Description quiz={quiz[currentQuestion]}></Description>;
    } else if (quiz[currentQuestion].type === "true_false") {
      return <TrueFalse quiz={quiz[currentQuestion]}></TrueFalse>;
    }
  };

  return (
    <div className={styles.home}>
      {/* redering the matched quiz with type and curent number */}
      <div className={styles.quizContainer}>{renderElement()}</div>

      <div className={styles.HomeButtonContainer}>
        {currentQuestion > 0 && (
          <button onClick={handlePrev} className={styles.prevBtns}>
            PREV
          </button>
        )}
        {currentQuestion < quiz.length - 1 ? (
          <button onClick={handleNext} className={styles.nextBtns}>
            NEXT
          </button>
        ) : (
          <button
            onClick={handleSubmit}
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

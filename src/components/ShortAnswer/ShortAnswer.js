import React from 'react';
import useAuth from '../../hooks/useAuth';

const ShortAnswer = (props) => {
    const {question}= props.quiz;
    const { answeredQuiz, setAnsweredQuiz,currentQuestion} = useAuth();
    
    const handleAnswer=(e)=>{
answeredQuiz[currentQuestion].correct_answer= e.target.value;
    }
    return (
        <div className=' p-2 '>
           <h4 className=' text-danger' >{question}</h4>
           <input placeholder='short answer' onChange={handleAnswer} className='border-0 rounded mt-2 text-start' required type="text" />
        </div>
    );
};

export default ShortAnswer;
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { QuestionsData } from '../data/data.js';
import Question from './Question';
import Buttons from './Buttons';

function QuizPage() {
    const TIME_ONE = 30;
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submittedData, setSubmittedData] = useState({});
    const navigate = useNavigate();

    const [totalTime, setTotalTime] = useState(QuestionsData.length * TIME_ONE);

    const updateSubmission = (index, value) => {
        setSubmittedData({ ...submittedData, [index]: value });
    };


    const timerId = setTimeout(() => {
        if (totalTime === 0) {
            calculateScore();
        }
        else {
            setTotalTime(totalTime - 1);
        }
    }, 1000);


    const calculateScore = () => {
        clearTimeout(timerId);
        let score = 0;
        QuestionsData.forEach((question, index) => {
            if (question.answer === submittedData[index]) {
                score += 1;
            }
        })
        navigate("/score", { state: { score: score, submittedData: submittedData } });
    };



    return (
        <div className="">
            <div className="">
                <span>Timer: {totalTime} sec</span>
                <Question
                    currentQuestionIndex={currentQuestionIndex}
                    currentQuestion={QuestionsData[currentQuestionIndex]}
                    updateSubmission={updateSubmission}
                    selectedOption={submittedData[currentQuestionIndex]}

                />
                <Buttons
                    setCurrentQuestionIndex={setCurrentQuestionIndex}
                    currentQuestionIndex={currentQuestionIndex}
                    submittedData={submittedData}
                    calculateScore={calculateScore}
                />
            </div>
            <div className=""></div>
        </div>
    );
}

export default QuizPage;

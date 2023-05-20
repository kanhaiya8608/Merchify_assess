import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { QuestionsData } from '../data/data.js';
import Question from './Question';
import Buttons from './Buttons';
import { BsJournalText, BsStopwatch } from 'react-icons/bs';

function QuizPage() {
    const TIME_ONE = 10;
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
        } else {
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
        });
        navigate("/score", { state: { score: score, submittedData: submittedData } });
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-orange-200">
            <div className="w-full max-w-md p-4 bg-white rounded-lg shadow-lg">
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                        <BsJournalText className="text-2xl text-blue-500 mr-2" />
                        <span className="text-lg font-bold">
                            {currentQuestionIndex + 1}/{QuestionsData.length}
                        </span>
                    </div>
                    <div className="flex items-center"><BsStopwatch className="text-2xl text-blue-500" />
                        <span className="text-lg font-bold">{totalTime} sec</span></div>
                </div>
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
        </div>
    );
}

export default QuizPage;

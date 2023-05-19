import { QuestionsData } from "../data/data";
const Buttons = ({ setCurrentQuestionIndex, currentQuestionIndex, submittedData }) => {
    return (
        <div className="textcenter">
            <button
                className={`btn ${currentQuestionIndex === 0 && "disabled"}`}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                disabled={currentQuestionIndex === 0}
            >
                Back
            </button>
            <button
                className={`btn ${!submittedData[currentQuestionIndex] ? 'disabled' : ''}`}
                onClick={() => {
                    if (currentQuestionIndex < QuestionsData.length - 1) {
                        setCurrentQuestionIndex(currentQuestionIndex + 1);
                    } else {
                        calculateScore();
                    }
                }}
                disabled={!submittedData[currentQuestionIndex]}
            >
                {currentQuestionIndex < QuestionsData.length - 1 ? 'Next' : 'Submit'}
            </button>
        </div>
    );
};

export default Buttons;

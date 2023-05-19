import { QuestionsData } from '../data/data';

const Buttons = ({ setCurrentQuestionIndex, currentQuestionIndex, submittedData, calculateScore }) => {
    return (
        <div className="flex justify-center mt-6">
            <button
                className={`bg-blue-500 text-white py-2 px-4 rounded mr-4 ${currentQuestionIndex === 0 && 'opacity-50 cursor-not-allowed'}`}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
                disabled={currentQuestionIndex === 0}
            >
                Back
            </button>
            <button
                className={`bg-blue-500 text-white py-2 px-4 rounded ${!submittedData[currentQuestionIndex] && 'opacity-50 cursor-not-allowed'}`}
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
}

export default Buttons;

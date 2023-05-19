import React from 'react';

const Question = ({ currentQuestionIndex, currentQuestion, updateSubmission, selectedOption }) => {
    return (
        <div>
            <h1>{currentQuestion.question}</h1>
            <div>
                {currentQuestion.options.map((option, index) => (
                    <label htmlFor={`${currentQuestionIndex}-${index}`}>
                        <input
                            type="radio"
                            value={option.text}
                            id={`${currentQuestionIndex}-${index}`}
                            onChange={() => updateSubmission(currentQuestionIndex, option.text)}
                            name={`question-${currentQuestionIndex}`}
                            checked={option.text === selectedOption}
                        />
                        {option.text}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default Question;

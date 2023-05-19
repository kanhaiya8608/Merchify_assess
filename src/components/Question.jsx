import React from 'react';

const Question = ({ currentQuestionIndex, currentQuestion, updateSubmission, selectedOption }) => {
    return (
        <div>
            <h1 className="font-bold mb-4 sm:mb-6">{currentQuestion.question}</h1>
            <div className="flex flex-col space-y-4">
                {currentQuestion.options.map((option, index) => (
                    <label
                        htmlFor={`${currentQuestionIndex}-${index}`}
                        key={`${currentQuestionIndex}-${index}`}
                        className={`flex items-center p-3 rounded-full border border-gray-300 hover:bg-blue-200 transition-colors ${option.text === selectedOption ? 'bg-blue-200' : ''
                            }`}
                    >
                        <input
                            type="radio"
                            value={option.text}
                            id={`${currentQuestionIndex}-${index}`}
                            onChange={() => updateSubmission(currentQuestionIndex, option.text)}
                            name={`question-${currentQuestionIndex}`}
                            checked={option.text === selectedOption}
                            className="sr-only"
                        />
                        <span className="text-lg font-semibold border bg-black text-white border-gray-400 rounded-full w-8 h-8 flex items-center justify-center mr-2">
                            {String.fromCharCode(97 + index)}
                        </span>
                        <span className="ml-2">{option.text}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default Question;

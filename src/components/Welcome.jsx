import React from 'react';
import { useNavigate } from 'react-router';
import { QuestionsData } from '../data/data';

function Welcome() {
    const [showModal, setShowModal] = React.useState(false);
    const navigate = useNavigate();

    const calculateScore = () => {
        let score = 0;
        // Calculate the score logic here
        navigate("/score", { state: { score: score, submittedData: {} } });
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 from-10% via-blue-300 via-30% to-orange-200 to-90% ...">
            <img src="./assets/apo.png" alt="Quiz" className="max-w-full mb-8" />
            <button
                className="text-blue-400 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-blue mr-1 mb-1 ease-linear transition-all duration-150 bg-white"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Start Quiz
            </button>

            {showModal && (
                <>
                    <div className="justify-center items-center flex overflow-x-hidden h-screen fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="flex flex-col items-center justify-end h-screen md:justify-center md:max-w-none">


                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*header*/}
                                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">Quiz Information</h3>
                                    <button
                                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="bg-transparent text-black h-6 w-6 text-3xl block outline-none focus:outline-none">
                                            ×
                                        </span>
                                    </button>
                                </div>
                                <div className="relative p-6 flex-auto">
                                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                        Welcome to the quiz! Here are some important details:
                                    </p>
                                    <ul className="list-disc pl-6">
                                        <li>Number of Questions: {QuestionsData.length}</li>
                                        <li>Time Limit: 30 minutes</li>
                                        <li>Each question has a single correct answer.</li>
                                        <li>Score will be calculated at the end based on your answers.</li>
                                    </ul>
                                </div>
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => setShowModal(false)}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={() => navigate("/quiz")}
                                    >
                                        Start Quiz
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            )}
        </div>
    );
}

export default Welcome;
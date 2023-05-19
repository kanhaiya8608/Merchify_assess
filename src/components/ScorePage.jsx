import React from 'react';
import { useLocation } from 'react-router-dom';

function ScorePage() {
    const { state } = useLocation();

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-500 via-blue-300 to-orange-200">
            <img src="./assets/competitive.png" alt="Score" className="max-w-full mb-8" />
            <h1 className="text-3xl font-bold mb-4">Congratulations</h1>
            <h2 className="text-2xl">Score: {state.score}</h2>
        </div>
    );
}

export default ScorePage;

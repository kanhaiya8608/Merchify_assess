import React from 'react'
import { useLocation } from 'react-router-dom'
function ScorePage() {
    const { state } = useLocation();
    console.log
    return (
        <div>
            <h1 className='text-center'>Congratulations</h1>
            <h2 className='textcenter'>Score: {state.score}</h2>

        </div>
    )
}

export default ScorePage
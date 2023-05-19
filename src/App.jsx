import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './components/Welcome'
import QuizPage from './components/QuizPage';
import ScorePage from './components/ScorePage';
import ErrorPage from './components/ErrorPage.jsx'
function App() {
  return (
    <BrowserRouter>
      <div className='box-container'>
        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route path='/quiz' element={<QuizPage />} />
          <Route path='/score' element={<ScorePage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes></div>
    </BrowserRouter>
  )
}

export default App;
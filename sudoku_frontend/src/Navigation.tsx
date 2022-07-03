import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllScoresPage from './components/pages/AllScores/AllScoresPage';
import InstructionsPage from './components/pages/Instructions/InstructionsPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import PersonalScores from './components/pages/PersonalScores/PersonalScores';
import RegistrationPage from './components/pages/Registration/RegistrationPage';
import SudokuPage from './components/pages/SudokuPage';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SudokuPage />} />
                <Route path="/instructions" element={<InstructionsPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registration" element={<RegistrationPage />} />
                <Route path="/all" element={<AllScoresPage />} />
                <Route path="/personal" element={<PersonalScores />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
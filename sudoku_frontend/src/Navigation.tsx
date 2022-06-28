import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AllUsersPage from './components/pages/AllUsersPage';
import InstructionsPage from './components/pages/InstructionsPage';
import LoginPage from './components/pages/LoginPage/LoginPage';
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
                <Route path="/all" element={<AllUsersPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
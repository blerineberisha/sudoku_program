import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SudokuPage from './components/pages/SudokuPage';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<SudokuPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Navigation;
/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { SudokuProvider } from '../../context/SudokuContext'
import { Game } from '../organisms/Game'

export default function () {
    return (
        <>
            <h1>Sudoku</h1>
            <SudokuProvider>
                <Game />
            </SudokuProvider>
        </>
    )
}
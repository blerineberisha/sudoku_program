import React, { useState, useEffect, SetStateAction } from 'react';
import moment from 'moment';
import { useSudokuContext } from '../../context/SudokuContext';
import GameSection from './GameSection';
import StatusSection from './StatusSection';
import { getUniqueSudoku } from '../../solver/UniqueSudoku';
import { Button, SelectChangeEvent } from '@mui/material';

/**
 * Game is the main React component.
 */
export const Game = () => {
  let { numberSelected, setNumberSelected,
    gameArray, setGameArray,
    difficulty, setDifficulty,
    setTimeGameStarted,
    cellSelected, setCellSelected,
    initArray, setInitArray,
    setWon } = useSudokuContext();
  let [history, setHistory] = useState<string[][]>([]);
  let [solvedArray, setSolvedArray] = useState<string[]>([]);
  let [overlay, setOverlay] = useState<boolean>(false);

  /**
   * Creates a new game and initializes the state variables.
   */
  function _createNewGame(e?: SelectChangeEvent<SetStateAction<string>>) {
    let [temporaryInitArray, temporarySolvedArray] = getUniqueSudoku(difficulty, e);

    setInitArray(temporaryInitArray);
    setGameArray(temporaryInitArray);
    setSolvedArray(temporarySolvedArray);
    setNumberSelected('0');
    setTimeGameStarted(moment());
    setCellSelected(-1);
    setHistory([]);
    setWon(false);
  }

  /**
   * Checks if the game is solved.
   */
  function _isSolved(index: number, value: string) {
    if (gameArray.every((cell: string, cellIndex: number) => {
      if (cellIndex === index)
        return value === solvedArray[cellIndex];
      else
        return cell === solvedArray[cellIndex];
    })) {
      return true;
    }
    return false;
  }

  /**
   * Fills the cell with the given 'value'
   * Used to Fill / Erase as required.
   */
  function _fillCell(index: number, value: string) {
    if (initArray[index] === '0') {
      let tempArray = gameArray.slice();
      let tempHistory = history.slice();
      tempHistory.push(gameArray.slice());
      setHistory(tempHistory);



      tempArray[index] = value;
      setGameArray(tempArray);

      if (_isSolved(index, value)) {
        setOverlay(true);
        setWon(true);
      }
    }
  }

  function _userFillCell(index: number, value: string) {
    _fillCell(index, value);
  }

  /**
   * On Click of 'New Game' link,
   * create a new game.
   */
  function onClickNewGame() {
    _createNewGame();
  }

  /**
   * On Click of a Game cell.
   */
  function onClickCell(indexOfArray: number) {
    if (numberSelected !== '0') {
      _userFillCell(indexOfArray, numberSelected);
    }
    setCellSelected(indexOfArray);
  }

  function onChangeDifficulty(e: SelectChangeEvent<SetStateAction<string>>) {
    setDifficulty(e.target.value);
    _createNewGame(e);
  }

  /**
   * On Click of Number in Status section,
   * either fill cell or set the number.
   */
  function onClickNumber(number: string) {
    if (cellSelected !== -1) {
      _userFillCell(cellSelected, number);
    }
  }


  /**
   * On Click Undo,
   * try to Undo the latest change.
   */
  function onClickUndo() {
    if (history.length) {
      let tempHistory = history.slice();
      let tempArray = tempHistory.pop();
      setHistory(tempHistory);
      if (tempArray !== undefined)
        setGameArray(tempArray);
    }
  }

  /**
   * On Click Erase,
   * try to delete the cell.
   */
  function onClickErase() {
    if (cellSelected !== -1 && gameArray[cellSelected] !== '0') {
      _fillCell(cellSelected, '0');
    }
  }

  /**
   * On Click Hint,
   * fill the selected cell if its empty or wrong number is filled.
   */
  const onClickHint = () => {
    if (cellSelected !== -1) {
      _fillCell(cellSelected, solvedArray[cellSelected]);
    }
  }

  /**
   * Close the overlay on Click.
   */
  function onClickOverlay() {
    setOverlay(false);
    _createNewGame();
  }

  /**
   * On load, create a New Game.
   */
  useEffect(() => {
    _createNewGame();
  }, []);

  return (
    <>
      <div className={overlay ? "container blur" : "container"}>
        <div className="innercontainer">
          <GameSection
            id="gameSec"
            onClick={(indexOfArray: number) => onClickCell(indexOfArray)}
          />
          <div id="statussect">
            <Button id="newgame" variant='contained' onClick={() => onClickNewGame()}>New</Button>
            <StatusSection
              onClickNumber={(number: string) => onClickNumber(number)}
              onChange={(e: SelectChangeEvent<SetStateAction<string>>) => onChangeDifficulty(e)}
              onClickUndo={onClickUndo}
              onClickErase={onClickErase}
              onClickHint={onClickHint}
            />
          </div>
        </div>

      </div>

      <div className={overlay
        ? "overlay overlay--visible"
        : "overlay"
      }
        onClick={onClickOverlay}
      >
      </div>
    </>
  );
}
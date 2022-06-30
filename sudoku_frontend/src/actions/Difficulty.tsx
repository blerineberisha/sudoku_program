import { MenuItem, Select, SelectChangeEvent } from '@mui/material';
import React, { SetStateAction } from 'react';
import { useSudokuContext } from '../context/SudokuContext';


type DifficultyProps = {
    onChange: (e: SelectChangeEvent<SetStateAction<string>>) => void
};

/**
 * React component for the Difficulty Selector.
 */
const Difficulty = (props: DifficultyProps) => {
    let { difficulty } = useSudokuContext();

    return (
        <div className="status__difficulty">
            <Select name="status__difficulty-select" className="status__difficulty-select"
                defaultValue={difficulty}
                onChange={props.onChange}>
                <MenuItem value={"Easy"}>Easy</MenuItem>
                <MenuItem value={"Medium"}>Medium</MenuItem>
                <MenuItem value={"Hard"}>Hard</MenuItem>
            </Select>
        </div>
    )
}

export default Difficulty;
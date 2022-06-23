import React from 'react';
import { useSudokuContext } from '../context/SudokuContext';
import { Grid } from '@mui/material';

type NumbersProps = {
    onClickNumber: (number: string) => void
};

/**
 * React component for the Number Selector in the Status Section.
 */
const Numbers = ({ onClickNumber }: NumbersProps) => {
    let { numberSelected } = useSudokuContext();

    return (
        <div className="status__numbers">
            <Grid container rowSpacing={5} spacing={1} id="number-grid">
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => {
                        if (numberSelected === number.toString()) {
                            return (
                                <Grid item sm={'auto'} md={4} lg={4}>
                                    <div className="status__number status__number--selected" key={number} onClick={() => onClickNumber(number.toString())}>{number}</div>
                                </Grid>
                            )

                        } else {
                            return (
                                <Grid item sm={'auto'} md={4} lg={4}>
                                    <div className="status__number" key={number} onClick={() => onClickNumber(number.toString())}>{number}</div>
                                </Grid>
                            )
                        }

                    })
                }
            </Grid>
            <hr id="numberRule"/>
        </div>
    )
}

export default Numbers;
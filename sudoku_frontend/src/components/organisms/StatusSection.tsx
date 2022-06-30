import React, { SetStateAction } from 'react';
import Difficulty from '../../actions/Difficulty';
import Timer from '../../actions/Timer';
import Numbers from '../../actions/Numbers';
import Action from '../../actions/Action';
import { Button, SelectChangeEvent } from '@mui/material';


type StatusSectionProps = {
    onChange: (e: SelectChangeEvent<SetStateAction<string>>) => void,
    onClickNumber: (number: string) => void,
    onClickUndo: () => void,
    onClickErase: () => void,
    onClickHint: () => void,
    id?: string
};

/**
 * React component for the Status Section.
 */
const StatusSection = (props: StatusSectionProps) => {
    return (
        <section className="status">
            <Difficulty onChange={props.onChange} />
            <Numbers onClickNumber={(number) => props.onClickNumber(number)} />
            <Timer />
            <div className="status__actions">
                <Action action='undo' onClickAction={props.onClickUndo} />
                <Action action='erase' onClickAction={props.onClickErase} />
                <Action action='hint' onClickAction={props.onClickHint} />
            </div>

        </section>
    )
}
export default StatusSection;
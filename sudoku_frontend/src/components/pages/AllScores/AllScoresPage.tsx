import React, { useEffect, useState } from 'react'
import { AxiosService } from '../../../services/AxiosService'
import { User } from '../../../Types/User';
import { score } from "../../../Types/Score";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import "./AllScores.css"

const AllScoresPage = () => {
    const aService = new AxiosService();
    const [scores, setScores] = useState<score[]>([]);
    useEffect(() => {
        aService.getScores().then((res) => {
            setScores(res.data);
        }).catch((e) => {
            console.log(e)
        })
    }, [scores])

    function convertTime(time: number) {
        var m = Math.floor(time % 3600 / 60);
        var s = Math.floor(time % 3600 % 60);
        return { m, s }
    }
    return (
        <div>
            <Table id="scoreTable">
                <TableHead>
                    <TableRow>
                        <TableCell id="tablehead" align='center' variant='head'>
                            <b>User</b>
                        </TableCell>
                        <TableCell id="tablehead" align='center' variant='head'>
                            <b>Difficulty</b>
                        </TableCell>
                        <TableCell id="tablehead" align='center' variant='head'>
                            <b>Time</b>
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {scores.map((s: score) => {

                        let scoreTime = convertTime(s.time);

                        return (

                            <TableRow id="colored">
                                <TableCell id="datacell" align='center'>
                                    {s.user.username}
                                </TableCell>
                                <TableCell id="datacell" align='center'>
                                    {s.difficulty}
                                </TableCell>
                                <TableCell id="datacell" align='center'>
                                    {scoreTime.m + " min " + scoreTime.s + " s "}
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}
export default AllScoresPage;
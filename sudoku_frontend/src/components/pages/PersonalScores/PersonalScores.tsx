import React, { useEffect, useState } from 'react'
import { AxiosService } from '../../../services/AxiosService'
import { score } from "../../../Types/Score";
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { TablePagination } from '@mui/material';
import "./PersonalScores.css"
import { Paper } from '@material-ui/core';
import { User } from '../../../Types/User';



const PersonalScores = () => {
    const aService = new AxiosService();
    const [loggedin, setLoggedin] = React.useState<User>();
    const [page, setPage] = React.useState(0);
    const [scores, setScores] = useState<score[]>([]);
    const [searched, setSearched] = useState<string>("");
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    useEffect(() => {
        aService.getLoggedinUser().then((result) => {
            setLoggedin(result.data);
        })
        aService.personalScores(loggedin?.user_id).then((res) => {
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

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    let count = 0;
    return (
        <div id="container">
            <Paper>
                <Table id="scoretable">
                    <TableHead>
                        <TableRow>
                            <TableCell id="tablehead" align='center' variant='head'>
                                <b>Rank</b>
                            </TableCell>
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
                        {scores.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((s: score) => {
                            let scoreTime = convertTime(s.time);
                            return (
                                <TableRow id="colored" tabIndex={-1}>
                                    <TableCell   align='center'>
                                        {++count}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {s.user.username}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {s.difficulty}
                                    </TableCell>
                                    <TableCell align='center'>
                                        {scoreTime.m + " min " + scoreTime.s + " s "}
                                    </TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                    <TablePagination
                        rowsPerPage={rowsPerPage}
                        rowsPerPageOptions={[10]}
                        count={scores.length}
                        onPageChange={handleChangePage}
                        page={page}
                    />
                </Table>
            </Paper>
        </div>
    )
}
export default PersonalScores;
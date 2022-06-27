import { Button, TextField } from '@mui/material';
import React from 'react';
import './LoginPage.css';
export default function LoginPage() {
    return (
        <div id="login">
            <div><h2>Login</h2></div>
            <div>
                <TextField label="Username" variant='standard' />
            </div>
            <div>
                <TextField type="password" label="Password" variant='standard'/>
            </div>
            <Button type="submit" id="submit">Submit</Button>
            <p>Still dont have an account?</p>
            <a href="/registration">Register</a>
        </div>

    )
}
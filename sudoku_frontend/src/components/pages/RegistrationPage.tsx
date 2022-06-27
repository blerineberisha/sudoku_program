import { Button, TextField } from '@mui/material'
import React from 'react'

export default function RegistrationPage() {
  return (
    <div id="registration">
            <div><h2>Registration</h2></div>
            <div>
                <TextField label="Username" variant='standard' />
            </div>
            <div>
                <TextField label="Email" variant='standard' />
            </div>
            <div>
                <TextField type="password" label="Password" variant='standard'/>
            </div>
            <Button type="submit" id="submit">Submit</Button>
            <p>Already have an account?</p>
            <a href="/login">Login</a>
        </div>
  )
}

import { Button } from '@mui/material';
import React from 'react';
//import { AxiosService } from '../../../services/AxiosService';
import './LoginPage.css';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-mui";


export default function LoginPage() {
    const validationSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Username has to be at least 2 characters")
            .max(20, "Usernames shouldn't be longer than 20 characters")
            .required("Please enter a username"),
        password: Yup.string()
            .min(3, "Password has to be at least 3 characters")
            .max(20, "Password shouldn't be longer than 20 characters")
            .required("Please enter a password")
    })
    const handleSubmit = (username: string, password: string) => {
        alert("Username: " + username + " " + "Password: " + password)
    }
    return (
        <div id="login">
            <Formik 
            onSubmit={(values) => handleSubmit(values.username, values.password)}
            initialValues={{
                username: "",
                password: ""
            }}
            validationSchema={validationSchema}
            >
                <Form>
                    <div><h2>Login</h2></div>
                    <div>
                        <Field component={TextField} name="username" label="Username" variant='standard' />
                    </div>
                    <div>
                        <Field component={TextField} name="password" type="password" label="Password" variant='standard' />
                    </div>
                    <Button type="submit" id="submit">Submit</Button>
                </Form>
            </Formik>
            <p>Don't have an account?</p><p>What are you waiting for? <a href="/registration">Register now</a></p>
            
        </div>

    )
}
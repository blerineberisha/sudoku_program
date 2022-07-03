import { Button } from '@mui/material';
import React, { useContext, useState } from 'react';
import './LoginPage.css';
import * as Yup from 'yup';
import { Field, Form, Formik } from 'formik';
import { TextField } from "formik-mui";
import LoginIcon from '@mui/icons-material/Login';
import { AxiosService } from '../../../services/AxiosService';


export default function LoginPage() {
    const aService = new AxiosService();
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
        aService.login(username, password);
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
                {({ errors, touched }) => (
                    <Form id="login_form">
                        <div id="legend"><LoginIcon id="loginicon" /></div>
                        <div id='field'>
                            <Field id="login_input" component={TextField} name="username" label="Username" variant='outlined' />
                            {errors.username && touched.username && <div className="error">{errors.username}</div>}
                        </div>
                        <div id='field'>
                            <Field id="login_input" component={TextField} name="password" type="password" label="Password" variant='outlined' />
                            {errors.password && touched.password && <div className="error">{errors.password}</div>}
                        </div>
                        <Button variant='contained' type="submit" id="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
            <p>Don't have an account?</p><p>What are you waiting for? <a href="/registration">Register now</a></p>

        </div>

    )
}
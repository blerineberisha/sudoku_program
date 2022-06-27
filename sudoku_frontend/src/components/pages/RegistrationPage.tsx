import { Formik, Field, Form } from "formik";
import { Button, TextField } from '@mui/material'
import React from 'react'
import { AxiosService } from '../../services/AxiosService'
import { User } from '../../Types/User';
import * as Yup from 'yup';

export default function RegistrationPage() {
    const aService = new AxiosService();
    const handleSubmit = (values: User) => {
        aService.postNewUser(values)
    }
    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Username has to be at least 5 characters long.")
            .max(20, "Username shouldn't be longer than 20 characters.")
            .required("Please enter a username"),
        email: Yup.string()
            .email("Has to be a valid email")
            .min(10, "Email has to be at least 10 characters long.")
            .max(50, "Email shouldnt' be longer than 50 characters.")
            .required("Please enter an email address"),
        password: Yup.string()
            .min(6, "Password has to be at least 6 characters")
            .max(20, "Password shouldn't be longer than 20 characters")
            .matches(RegExp(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/),
                "Password has to have at least one upper case letter, a lower case letter, a number and a special character")
            .required("Please enter a password")
    });
    return (
        <div id="registration">
            <Formik
/*                 initialValues={{
                    username: "",
                    email: "",
                    password: ""
                }} */
                onSubmit={(values: User) => handleSubmit(values)}
                validationSchema={SignupSchema}
            >
                <div><h2>Registration</h2></div>
                <div>
                    <TextField label="Username" variant='standard' />
                </div>
                <div>
                    <TextField label="Email" variant='standard' />
                </div>
                <div>
                    <TextField type="password" label="Password" variant='standard' />
                </div>
                <Button type="submit" id="submit" onClick={() => handleSubmit}>Submit</Button>
                <p>Already have an account?</p>
                <a href="/login">Login</a>
            </Formik>
        </div >
    )
}

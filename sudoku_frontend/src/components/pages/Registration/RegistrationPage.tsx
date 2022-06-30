import { Formik, Form, Field } from "formik";
import React from 'react'
import { AxiosService } from '../../../services/AxiosService'
import { User } from '../../../Types/User';
import * as Yup from 'yup';
import './Registration.css';
import { TextField } from "formik-mui";
import { Button } from "@mui/material";
import HowToRegIcon from '@mui/icons-material/HowToReg';

export default function RegistrationPage() {
    const aService = new AxiosService();
    const handleSubmit = (values: User) => {
        aService.postNewUser(values)
    }

    const SignupSchema = Yup.object().shape({
        username: Yup.string()
            .min(2, "Username has to be at least 2 characters long.")
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
            .required("Please enter a password")
    });

    let initialValues = {
        username: "",
        email: "",
        password: ""
    }
    return (
        <div id="registration">
            <Formik
                initialValues={initialValues}
                onSubmit={(values: User) => { handleSubmit(values) }}
                validationSchema={SignupSchema}
                validateOnBlur={true}
            >
                {({ errors, touched }) => (
                    <Form id="reg_form">
                        <div id="legend"><HowToRegIcon id="regicon" /></div>
                        <div id='field'>
                            <Field
                                component={TextField} name="username" label="Username" id="reg_input" variant='outlined' />
                            {errors.username && touched.username && <div className="error">{errors.username}</div>}
                        </div>
                        <div id='field'>
                            <Field
                                component={TextField} name="email" label="Email" id="reg_input" variant='outlined' />
                            {errors.email && touched.email && <div className="error">{errors.email}</div>}
                        </div>

                        <div id='field'>
                            <Field
                                component={TextField} name="password" type="password" id="reg_input" label="Password" variant='outlined' />
                            {errors.password && touched.password && <div className="error">{errors.password}</div>}
                        </div>

                        <Button variant='contained' type="submit" id="submit">Submit</Button>

                        <p>Already have an account?</p>
                        <p>Great! <a href="/login">Login</a></p>
                    </Form>
                )}
            </Formik >
        </div>
    );
}

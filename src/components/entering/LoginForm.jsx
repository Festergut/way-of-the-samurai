import { Button, Checkbox, TextField } from "@mui/material";
import React from "react";
import css from './LoginForm.module.css'
import { Form, Field } from 'react-final-form'
import { useSelector } from "react-redux";


const LoginForm = (props) => {
    const apiError = useSelector(state => state.AuthData.error)
    const captcha = useSelector(state => state.AuthData.captchaURL)

    return (

        <Form onSubmit={props.onSubmit}
            validate={(values) => {
                const errors = {}
                if (!values.email) {
                    errors.email = 'Required'
                }
                if (!values.password) {
                    errors.password = 'Required'
                }
                return errors
            }}>
            {props => (
                <form onSubmit={props.handleSubmit} className={css.loginform}>
                    <div className={css.error}>{apiError}</div>

                    <div className={css.indent}>
                        <Field name="email">
                            {({ input, meta }) => (
                                <div>
                                    <TextField error={meta.error && meta.touched}
                                        id="standard-basic"
                                        label={meta.error && meta.touched ? "Email is required" : "Email"}
                                        variant="standard"
                                        {...input}
                                    />
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={css.indent}>
                        <Field name="password"  >
                            {({ input, meta }) => (
                                <div>
                                    <TextField error={meta.error && meta.touched}
                                        id="standard-basic"
                                        type="password"
                                        label={meta.error && meta.touched ? "Password is required" : "Password"}
                                        variant="standard"
                                        {...input} />
                                </div>
                            )}
                        </Field>
                    </div>
                    <div className={css.indent}>
                        <Field name="rememberMe" type="checkbox">
                            {({ input, meta }) => (
                                <div>
                                    <label>Remember me</label>
                                    <Checkbox {...input} />
                                </div>
                            )}
                        </Field>
                    </div>
                    <div>
                        {captcha && <img src={captcha} />}
                        {captcha &&
                            <Field name="captcha" >
                                {({ input, meta }) => (
                                    <div className={css.indent}>
                                        <TextField error={meta.error && meta.touched}
                                            id="standard-basic"
                                            type="text"
                                            label={meta.error && meta.touched ? "Captcha is required" : "captcha"}
                                            variant="standard"
                                            {...input} />
                                    </div>
                                )}
                            </Field>}
                    </div>
                    <Button variant="contained" type="submit" >Enter</Button>
                </form>
            )}
        </Form >
    )
}

export default LoginForm
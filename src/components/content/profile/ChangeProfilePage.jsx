import React from "react";
import css from './profile.module.css'
import { Field, Form } from "react-final-form";
import { Button, Checkbox, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { updateProfileData } from "../../../redux/ProfileReducer";

export const ChangeProfilePage = () => {
    const dispatch = useDispatch()

    const onSubmit = (props) => {
        debugger
        dispatch(updateProfileData(props))
    }

    return (
        <div className={css.ChangeProfileForm}>
            <Form onSubmit={onSubmit}
                render={(props) => ( //ЗДЕСЬ ПИШУТСЯ КРУГЛЫЕ СКОБКИ
                    <form onSubmit={props.handleSubmit}>
                        <div className={css.indent}>
                            <Field name="fullName">
                                {({input, meta}) => (
                                    <div>
                                        <TextField {...input} label={"New nickname"} />
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={css.indent}>
                            <Field name="lookingForAJobDescription">
                                {({input, meta}) => (
                                    <div>
                                        <TextField {...input} multiline label={"Your skills"} />
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={css.indent}>
                            <Field name="aboutMe">
                                {({input, meta}) => (
                                    <div>
                                        <TextField {...input} multiline label={"About me"} />
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={css.indent}>
                            <Field name="lookingForAJob" type="checkbox">
                                {({input, meta}) => (
                                    <div>
                                        <label>Looking for a job?</label>
                                        <Checkbox {...input} />
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={css.indent}>
                            <Button variant="text" type="submit">Send</Button>
                        </div>
                    </form>
                )}
            />
        </div>
    )
}


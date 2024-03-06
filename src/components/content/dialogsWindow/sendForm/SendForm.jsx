import React from "react";
import css from "./sendForm.module.css"
import { Field, Form } from "react-final-form"
import { maxValue, required } from "../../../../utils/validators";
import { Textarea } from "./../../common/forms/Textarea"

const composeValidators = (...validators) => value => {
    validators.reduce((error, validator) => {
        return error || validator(value), undefined
    })
}

const SendForm = (props) => {

    const onSubmit = (values) => {
        props.AddMessage(values.sendMessage)
    }

    return (
        <div className={css.sendMessageForm}>
            <Form onSubmit={onSubmit}>
                {({ handleSubmit, values, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label>Сообщение</label>
                            <Field component={Textarea} name="sendMessage" validate={composeValidators(required, maxValue(500))} />
                        </div>
                        <div>
                            <button type="submit" disabled={submitting}>Send</button>
                        </div>
                    </form>
                )
                }
            </Form>
        </div>
    )
}

export default SendForm
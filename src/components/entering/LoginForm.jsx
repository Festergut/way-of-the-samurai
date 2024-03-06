import React from "react";
import { Form, Field } from 'react-final-form'


const LoginForm = (props) => {
    
    return (
        <Form onSubmit={props.onSubmit}>
            {props => (
                <form onSubmit={props.handleSubmit}>
                    <div>
                        <Field name="email" type="text" component='input' placeholder="email" />
                    </div>
                    <div>
                        <Field name="password" type="password" component='input' placeholder="password" />
                    </div>
                    <div>
                        <Field name="rememberMe" type="checkbox" component='input'/>
                        <label>Remember me</label>
                    </div>
                    <button type="submit">login</button>
                </form>
            )}
        </Form >
    )
}

export default LoginForm
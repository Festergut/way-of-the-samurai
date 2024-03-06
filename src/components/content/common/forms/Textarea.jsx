import React from "react";
import { CommonForm } from "./CommonForms";

export const Textarea = ({input, meta, ...props}) => {
    return <CommonForm {...props} input={input} meta={meta}>
        <textarea {...input} {...props}/>
        </CommonForm>
}
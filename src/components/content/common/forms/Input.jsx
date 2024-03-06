import React from "react";
import { CommonForm } from "./CommonForms";

export const Input = ({input, meta, ...props}) => {
    return <CommonForm {...props}><input {...input} {...props}/></CommonForm>
}
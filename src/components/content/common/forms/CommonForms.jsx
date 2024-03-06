import React from "react"
import css from './commonForms.module.css'

export const CommonForm = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error 
    return (
        <div className={css.CommonForm}>
                <div className={hasError ? css.error : ''}>
                    {props.children}
                </div>
                {hasError && <span className="error">{meta.error}</span>}
        </div>
    )
}
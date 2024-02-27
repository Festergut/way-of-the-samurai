import React from "react";
import css from "./dialog.module.css"
import { NavLink } from "react-router-dom";

const Dialog = (props) => {
   
    return (
        <div className={css.dialog}>
            <NavLink to="/dialogs/"  >{props.DialogName}</NavLink>
        </div>
    )
}

export default Dialog
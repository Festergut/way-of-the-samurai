import React, { useState } from "react";
import css from './header.module.css'
import { NavLink } from "react-router-dom";

const Header = (props) => {

    let [header, setHeader] = useState('Амеба и Дебил')
    let [editMode, setEditMode] = useState(false)



    return (
        <div className={css.header}>
            <div>


                {editMode ? <input autoFocus value={header} onBlur={() => { setEditMode(false) }} onChange={(e) => {
                    
                    setHeader(e.currentTarget.value)

                }
                } />
                    : <h1 onClick={() => {
                        setEditMode(true)
                    }}>{header}</h1>}

            </div>
            <div className={css.login}>
                {props.auth.isAuth ? props.auth.data.login : <NavLink to={"/login"}>login</NavLink>}
            </div>
        </div>
    )
}

export default Header
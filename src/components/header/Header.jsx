import React from "react";
import css from './header.module.css'
import { NavLink } from "react-router-dom";
import { logout } from "../../redux/AuthReducer";
import { useDispatch } from "react-redux";

const Header = (props) => {
    let dispatch = useDispatch()


    return (
        <div className={css.header}>
            <div>
                <h1>пися попа</h1>
            </div>
            <div className={css.login}>
                {props.auth.isAuth 
                ? <div> {props.auth.data.login} <button onClick={()=>{dispatch(logout())}}>logout</button></div> 
                : <NavLink to={"/login"}>login</NavLink>}
            </div>
        </div>
    )
}

export default Header
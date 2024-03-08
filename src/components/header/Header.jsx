import React from "react";
import css from './header.module.css'
import { NavLink } from "react-router-dom";
import BasicMenu from "./Menu";
import Button from '@mui/material/Button';

const Header = (props) => {

    return (
        <div className={css.header}>
            <div>
                <h2>SOCIALKA</h2>
            </div>
            <div className={css.login}>
                {props.auth.isAuth
                    ? <BasicMenu name={props.auth.data.login} isAuth={props.auth.isAuth} />
                    : <NavLink to={"/login"}><Button>Login</Button></NavLink>
                }
            </div>
        </div>
    )
}

export default Header
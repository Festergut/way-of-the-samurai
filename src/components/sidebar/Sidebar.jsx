import React from "react";
import css from './sidebar.module.css'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className={css.sidebar}>
            <div className={css.tabs}>
                <p>
                    <NavLink to={"/profile"} className={({ isActive }) =>(isActive ? css.active : "")}>profile</NavLink>
                </p>
                <p>
                    <NavLink to="/friends" className={({ isActive }) =>(isActive ? css.active : "")}>friends</NavLink>
                </p>
                <p>
                    <NavLink to="/dialogs" className={({ isActive }) =>(isActive ? css.active : "")}>dialogs</NavLink>
                </p>
                <p>
                    <NavLink to="/music" className={({ isActive }) =>(isActive ? css.active : "")}>music</NavLink>
                </p>
                <p>
                    <NavLink to="/news" className={({ isActive }) =>(isActive ? css.active : "")}>news</NavLink>
                </p>
                <p>
                    <NavLink to="/settings" className={({ isActive }) =>(isActive ? css.active : "")}>settings</NavLink>
                </p>
            </div>
        </div>
    )
}

export default Sidebar
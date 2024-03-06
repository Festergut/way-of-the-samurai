import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { login } from "../../redux/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Login() {
    let dispatch = useDispatch()
    let isAuth = useSelector(state => state.AuthData.isAuth)



    const onSubmit = (props) => {
        dispatch(login(props))
        //допилить редирект ПРИХОДИТСЯ ПЕРЕЗАГРУЖАТЬ
    }
    if (isAuth) {
        <Navigate to={'profile'} />
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login
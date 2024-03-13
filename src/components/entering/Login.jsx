import React, { useEffect } from "react";
import LoginForm from "./LoginForm";
import { login } from "../../redux/AuthReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Login() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let isAuth = useSelector(state => state.AuthData.isAuth)

    useEffect(()=>{
        if (isAuth) {
            navigate('/profile')
        }
    }, [isAuth, navigate])

    const onSubmit = (props) => {
        debugger
        dispatch(login(props))
    }
    if (isAuth) {
        navigate('/profile')
    }

    return (
        <div>
            <h2>Login</h2>
            <LoginForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login
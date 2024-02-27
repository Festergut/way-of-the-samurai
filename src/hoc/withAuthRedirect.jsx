// надо сделать редирект возможно через хок но лучше использовать хуки из реакт роутер дом
import React from "react"
import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export function withAuthRedirect(Component) {
    function Wrapper(props) {
        let isAuth = useSelector(state=> state.AuthData.isAuth)
        if (!isAuth) { return <Navigate to='/login'/>}
        return <Component {...props}/>    
    }
    return Wrapper
}
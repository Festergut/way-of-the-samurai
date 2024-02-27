import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { getAuthData } from "../../redux/AuthReducer";

export const HeaderContainer = () => {
    let dispatch = useDispatch()
    let auth = useSelector(state => state.AuthData)

    useEffect(() => {
        dispatch(getAuthData())
    }, [])


    return (
        <Header auth={auth} />
    )

}

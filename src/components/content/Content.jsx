import React from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from "./newsList/NewsList";
import css from './content.module.css'
import DialogsWindowContainer from "./dialogsWindow/DialogsWindowContainer";
import { FriendsContainer } from "./friends/FriendsContainer";
import ProfileContainer from "./profile/ProfileContainer";
import Login from "../entering/Login";


const Content = () => {
    return (
        <div className={css.content}>
            <Routes>
                <Route path="/profile/:userId?" element={<ProfileContainer />} />
                <Route path="/dialogs" element={<DialogsWindowContainer />} />
                <Route path="/friends" element={<FriendsContainer />} />
                <Route path="/news" element={<NewsList />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </div>
    )
}

export default Content
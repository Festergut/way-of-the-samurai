import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import NewsList from "./newsList/NewsList";
import css from './content.module.css'
import DialogsWindowContainer from "./dialogsWindow/DialogsWindowContainer";
import ProfileContainer from "./profile/ProfileContainer";
import Login from "../entering/Login";
const FriendsContainer = lazy(() => import('./friends/FriendsContainer'))
// lazy компонент работает только с default export

const Content = () => {
    return (
        <div className={css.content}>
            <Suspense fallback={<p>Загрузка...</p>}>
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer />} />
                    <Route path="/dialogs" element={<DialogsWindowContainer />} />
                    <Route path="/friends" element={<FriendsContainer />} />
                    <Route path="/news" element={<NewsList />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default Content
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Friends from "./Friends";
import { getUsers, follow, unfollow, addIdtoDisable, changeCurrentPage, toggleLoading } from "../../../redux/FriendsReducer";
import Preloader from "../common/preloader/preloader";

export const FriendsContainer = (props) => {
    const dispatch = useDispatch()
    let isLoading = useSelector(state => state.FriendsData.isLoading)
    let friends = useSelector(state => state.FriendsData.friends)
    let currentPage = useSelector(state => state.FriendsData.currentPage)
    let pagesCount = useSelector(state => state.FriendsData.pagesCount)
    let disableButtonByID = useSelector(state => state.FriendsData.disableButtonByID)

    useEffect(() => {
        dispatch(toggleLoading(true))
        dispatch(getUsers({ currentPage: currentPage, pagesCount: pagesCount }))
    }, [])

    const changePage = (p) => {
        dispatch(toggleLoading(true))
        dispatch(changeCurrentPage(p))
        dispatch(getUsers({ currentPage: p, pagesCount: pagesCount }))
        debugger
    }
    return <>
        {isLoading ? <Preloader /> : null}

        <Friends friends={friends}
            changePage={changePage}
            follow={follow}
            unfollow={unfollow}
            currentPage={currentPage}
            pagesCount={pagesCount}
            disableButtonByID={disableButtonByID}
            addIdtoDisable={addIdtoDisable}
        />
    </>
}
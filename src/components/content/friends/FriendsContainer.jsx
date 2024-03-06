import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Friends from "./Friends";
import { getUsers, follow, unfollow, addIdtoDisable, changeCurrentPage, toggleLoading } from "../../../redux/FriendsReducer";
import Preloader from "../common/preloader/preloader";

const FriendsContainer = (props) => {
    const dispatch = useDispatch()
    let isLoading = useSelector(state => state.FriendsData.isLoading)
    let friends = useSelector(state => state.FriendsData.friends)
    let currentPage = useSelector(state => state.FriendsData.currentPage)
    let pageSize = useSelector(state=>state.FriendsData.pageSize)
    let totalUsersCount = useSelector(state=>state.FriendsData.totalUsersCount)
    let disableButtonByID = useSelector(state => state.FriendsData.disableButtonByID)
    useEffect(() => {
        dispatch(toggleLoading(true))
        dispatch(getUsers({ currentPage: currentPage, pageSize: pageSize }))
    }, [dispatch, currentPage, pageSize])

    const changePage = (p) => {
        dispatch(toggleLoading(true))
        dispatch(changeCurrentPage(p))
        dispatch(getUsers({ currentPage: p, pageSize: pageSize }))
    }
    return <>
        {isLoading ? <Preloader /> : null}

        <Friends friends={friends}
            changePage={changePage}
            follow={follow}
            unfollow={unfollow}
            currentPage={currentPage}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            disableButtonByID={disableButtonByID}
            addIdtoDisable={addIdtoDisable}
        />
    </>
}
export default FriendsContainer
import React from "react";
import Friend from "./friend/Friend";
import css from "./friends.module.css"
import { Paginator } from "../common/paginator/Paginator";



const Friends = (props) => {

    let FriendsData = props.friends.map((friend) => {
        return <Friend FriendsData={friend}
            follow={props.follow}
            unfollow={props.unfollow}
            disableButtonByID={props.disableButtonByID}
            addIdtoDisable={props.addIdtoDisable} />
    })

    return (
        <div>
            <div className={css.paginator}>
                <Paginator 
                    pageSize={props.pageSize}
                    currentPage={props.currentPage}
                    totalItemsCount={props.totalUsersCount}
                    changePage={props.changePage}
                />
            </div>
            <div className={css.friends}>
                {FriendsData}
            </div>
        </div>
    )
}

export default Friends
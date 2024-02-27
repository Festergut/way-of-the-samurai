import React from "react";
import Friend from "./friend/Friend";
import css from "./friends.module.css"



const Friends = (props) => {
    let FriendsData = props.friends.map((friend) => {
        return <Friend FriendsData={friend}
            follow={props.follow}
            unfollow={props.unfollow}
            disableButtonByID={props.disableButtonByID}
            addIdtoDisable={props.addIdtoDisable} />
    })

    // let pagesCount = Math.ceil(props.FriendsData.usersCount / props.FriendsData.pagesCount)
    let pages = []
    for (let i = Math.max(props.currentPage - 3, 1); i <= Math.max(Math.max(props.currentPage + 3, 1)); i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map((p) => { return <span  className={props.currentPage === p && css.selectedPage} onClick={(e) => { props.changePage(p) }}>{p}</span> })}
            </div>
            <div className={css.friends}>
                {FriendsData}
            </div>
        </div>
    )
}

export default Friends
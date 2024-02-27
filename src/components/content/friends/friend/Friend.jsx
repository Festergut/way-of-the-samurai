import React from "react";
import css from "./friend.module.css"
import defUser from "../../../../assets/img/default_user.jpg"
import { NavLink } from "react-router-dom";
import { followAPI } from "../../../../api/auth-api";
import { useDispatch } from "react-redux";

const Friend = (props) => {
    let dispatch = useDispatch()

    return (
        <div className={css.friend} key={props.FriendsData.id}>
            <div>
                <NavLink to={"/profile/" + props.FriendsData.id} >
                    <img src={props.FriendsData.photos.small != null ? props.FriendsData.photos.small : defUser} alt="friend_image" />
                </NavLink>
            </div>
            <div>
                <div>{props.FriendsData.name}</div>
                <div>{props.FriendsData.description}</div>
                <div>{props.FriendsData.city}</div>
                <div>
                    {props.FriendsData.followed
                        ?
                        <button disabled={props.disableButtonByID.some(id => id === props.FriendsData.id)} onClick={() => {
                            dispatch(props.addIdtoDisable({ toggle: true, id: props.FriendsData.id }))
                            followAPI.ajaxUnfollow(props.FriendsData.id).then(data => {
                                if (data.resultCode === 0) {
                                    dispatch(props.unfollow(props.FriendsData.id))

                                }
                                dispatch(props.addIdtoDisable({ toggle: false, id: props.FriendsData.id }))
                            }
                            )

                        }}>Unfollow</button>
                        :
                        <button disabled={props.disableButtonByID.some(id => id === props.FriendsData.id)} onClick={() => {
                            dispatch(props.addIdtoDisable({ toggle: true, id: props.FriendsData.id }))
                            followAPI.ajaxFollow(props.FriendsData.id).then(data => {
                                if (data.resultCode === 0) {
                                    dispatch(props.follow(props.FriendsData.id))
                                }
                                dispatch(props.addIdtoDisable({ toggle: false, id: props.FriendsData.id }))
                            }

                            )
                        }}>Follow</button>
                    }
                </div>
            </div>
        </div >
    )
}

export default Friend
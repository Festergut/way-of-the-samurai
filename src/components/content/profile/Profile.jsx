import React, { useEffect, useState } from "react";
import css from './profile.module.css'
import { getProfileStatus, updateProfileStatus } from "../../../redux/ProfileReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateProfilePhoto } from "../../../redux/ProfileReducer";
import defaultUser from './../../../assets/img/default_user.jpg'
import { ProfileDescription } from "./ProfileDescription";

function Profile (props) {
    let dispatch = useDispatch()
    let params = useParams()
    let [editMode, setEditMode] = useState(false)
    let selectedStatus = useSelector(state => state.ProfileData.status)
    let [status, setStatus] = useState(selectedStatus)
    let ownID = useSelector(state => state.AuthData.data.id)
    let [showDescription, setShowDescription] = useState(false)

    useEffect(() => {
        let userId = params.userId
        if (!userId) {
            userId = ownID
        }
        dispatch(getProfileStatus(userId))
        setStatus(selectedStatus)
    }, [selectedStatus])

    return (
        <div>
            {props.loading ? "loading..."
                :
                <div className={css.profilepage}>
                    <div className={css.leftSide}>

                        <div className={css.image}>
                            <img src={props.profile.photos.large || defaultUser} alt="profile-icon" onClick={() => { }} />
                            {!params.userId ? <input type="file" onChange={(e) => {
                                dispatch(updateProfilePhoto(e.target.files[0]))
                            }} /> : ""}
                        </div>
                    </div>

                    <div className={css.rightSide}>
                        <div className={css.fullName}>
                            <h1>{props.profile.fullName}</h1>
                        </div>
                        <div>
                            <span>Status: </span>
                            <span className={css.status} onClick={() => {
                                setEditMode(true)
                            }}>

                                {editMode ? <input autoFocus onBlur={(e) => {
                                    setEditMode(false)
                                    dispatch(updateProfileStatus(e.currentTarget.value))
                                }} value={status} onChange={(e) => { setStatus(e.currentTarget.value) }} /> : selectedStatus}
                                {selectedStatus == '' ? 'enter status' : ''}

                            </span>
                        </div>
                        <div className={css.contacts}>
                            <div>
                                {showDescription
                                    ? <button onClick={() => { setShowDescription(false) }}>скрыть</button>
                                    : <button onClick={() => { setShowDescription(true) }}>подробнее</button>}
                            </div>
                            <div>
                                {showDescription
                                    ? <ProfileDescription profile={props.profile}/>
                                    : ""
                                }
                            </div>
                        </div>
                    </div>
                </div>
            }


        </div>
    )
};

export default Profile
import React, { useEffect, useState } from "react";
import css from './profile.module.css'
import { getProfileStatus, updateProfileStatus } from "../../../redux/ProfileReducer";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const Profile = (props) => {
    let dispatch = useDispatch()
    let params = useParams()
    let [editMode, setEditMode] = useState(false)
    let selectedStatus = useSelector(state => state.ProfileData.status)
    let [status, setStatus] = useState(selectedStatus)
    let ownID = useSelector(state => state.AuthData.data.id)

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
            {/* <img src="https://react.dev/images/tutorial/two-x-filled-squares.png"/> */}
            {props.loading ?
                <div>
                    <div className={css.image}>
                        <img src={props.profile.photos.large} alt="profile-icon" />
                    </div>
                    <div className={css.fullName}>
                        <h1>{props.profile.fullName}</h1>
                    </div>
                    <div className={css.description}>

                        Status:
                        <span className={css.status} onClick={() => {
                            setEditMode(true)
                        }}>

                            {editMode ? <input autoFocus onBlur={(e) => {
                                setEditMode(false)
                                dispatch(updateProfileStatus(e.currentTarget.value))
                            }} value={status} onChange={(e) => { setStatus(e.currentTarget.value) }} /> : status}
                            {status == '' ? 'enter status': ''}
                            
                        </span>
                    </div>
                    <div className={css.contacts}>
                        My contacts: {props.profile.contacts.vk}
                    </div>
                </div>
                : "loading..."
            }


        </div>
    )
}

export default Profile
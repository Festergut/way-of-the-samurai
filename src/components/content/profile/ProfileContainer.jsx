import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Profile from "./Profile";
import { useParams } from "react-router-dom";
import { getProfile } from "../../../redux/ProfileReducer";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


function ProfileContainer() {
    let params = useParams()
    let profile = useSelector(state => state.ProfileData.profile)
    let loading = useSelector(state => state.ProfileData.loading)
    let ownID = useSelector(state => state.AuthData.data.id)
    let dispatch = useDispatch()


    useEffect(() => {
        let userId = params.userId
        if (!userId) {
            userId = ownID
        } 
        dispatch(getProfile(userId))
    }, [dispatch, params.userId, ownID])

    return (
        <Profile profile={profile} params={params} loading={loading}/>
    )
}

export default compose(withAuthRedirect)(ProfileContainer)

import React from "react";
import css from "./profile.module.css"

export const ProfileDescription = (props) => {
    const contacts = Object.keys(props.profile.contacts).map((c) => { return <div key={c}>{c}: {props.profile.contacts[c]}</div> })

    return (
        <div>
            <div>About me: {props.profile.aboutMe}</div>
            <div>Looking for a job: {props.profile.lookingForAJob ? "yes" : "no"}</div>
            <div>Skills: {props.profile.lookingForAJobDescription}</div>
            <div>
                <b>Contacts:</b>
                <div className={css.contacts}>
                    {contacts}
                </div>
            </div>
        </div>
    )
}
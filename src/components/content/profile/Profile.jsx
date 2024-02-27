import React from "react";
import css from './profile.module.css'

const Profile = (props) => {
    debugger
    return (
        <div>
            {/* <img src="https://react.dev/images/tutorial/two-x-filled-squares.png"/> */}
            {props.loading ?
                <div>
                    <div className={css.image}>
                        <img src={props.profile.photos.large} alt="profile-icon"/>
                    </div>
                    <div className={css.fullName}>
                        <h1>{props.profile.fullName}</h1>
                    </div>
                    <div className={css.description}>
                        About me: {props.profile.aboutMe}
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
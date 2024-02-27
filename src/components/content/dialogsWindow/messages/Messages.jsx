import React from "react";
import css from './messages.module.css'
import Message from "./message/Message";

const Messages = (props) => {

    let MessagesData = props.MessagesData.map( (messages) => {return (<Message message={messages.message} />)})
    return (
        <div className={css.messages}>
            {MessagesData}
        </div>
    )
}

export default Messages
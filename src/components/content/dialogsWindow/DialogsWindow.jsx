import React from "react";
import css from './dialogsWindow.module.css'
import Messages from "./messages/Messages";
import Dialogs from "./dialogs/Dialogs";
import SendButton from "./sendButton/SendButton";

const DialogsWindow = (props) => {
    return (
        <div className={css.dialogWindow}>
            <Dialogs DialogsData={props.DialogsData}/>
            <Messages MessagesData={props.MessagesData}/>
            <SendButton Message={props.Message} ChangeMessage={props.ChangeMessage} AddMessage={props.AddMessage}/>
        </div>
    )
}

export default DialogsWindow
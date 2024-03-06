import React from "react";
import css from './dialogsWindow.module.css'
import Messages from "./messages/Messages";
import Dialogs from "./dialogs/Dialogs";
import SendForm from "./sendForm/SendForm";

const DialogsWindow = (props) => {
    return (
        <div className={css.dialogWindow}>
            <Dialogs DialogsData={props.DialogsData}/>
            <Messages MessagesData={props.MessagesData}/>
            <SendForm AddMessage={props.AddMessage}/>
        </div>
    )
}

export default DialogsWindow
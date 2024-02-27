import React from "react";
import css from "./sendButton.module.css"

const SendButton = (props) => {
    let ref = React.createRef()

    let send_Message = () => {
        props.AddMessage()
    }

    let change_Message_Text = () => {
        debugger
        let changeMessage = ref.current.value
        props.ChangeMessage(changeMessage)
    }

    return (
        <div className={css.sendButton}>
            <textarea ref={ref} onChange={change_Message_Text} value={props.Message}></textarea>
            <button onClick={send_Message}>Send</button>
        </div>
    )
}

export default SendButton
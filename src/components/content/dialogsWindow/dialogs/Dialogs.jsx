import React from "react";
import css from './dialogs.module.css'
import Dialog from './dialog/Dialog'

const Dialogs = (props) => {
    let DialogsData = props.DialogsData.map( (dialog) => {return (<Dialog DialogName={dialog.name} />) })
    return (
        <div className={css.dialogs}>
            {DialogsData}
        </div>
    )
}

export default Dialogs
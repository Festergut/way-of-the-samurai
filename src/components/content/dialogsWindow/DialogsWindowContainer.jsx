import { changeMessageText, sendMessage } from "../../../redux/DialogsReducer";
import DialogsWindow from "./DialogsWindow";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
    return {
        DialogsData: state.DialogsData.Dialogs,
        MessagesData: state.DialogsData.Messages,
        Message: state.DialogsData.Message
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddMessage: () => {
            dispatch(sendMessage())
        },
        ChangeMessage: (message) => {
            dispatch(changeMessageText(message))
        }
    }
}

const DialogsWindowContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsWindow)

export default DialogsWindowContainer
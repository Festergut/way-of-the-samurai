import { createSlice } from "@reduxjs/toolkit";

const DialogsReducer = createSlice({
    name: "DialogsData",
    initialState: {
            Dialogs: [
                { 'id': 1, "name": "Masha" },
                { 'id': 2, "name": "Maria" },
                { 'id': 3, "name": "Makiavelly" },
                { 'id': 4, "name": "Makaronina" },
            ],
            Messages: [
                { 'id': 1, 'message': "hello" },
                { 'id': 2, 'message': "nigga" },
                { 'id': 3, 'message': "rabochii" },
                { 'id': 4, 'message': "collective" },
                { 'id': 5, 'message': "correctly" }
            ],
            Message: '',
    },
    reducers: {
        sendMessage: (state) => {
            return {
                ...state,
                Message: '',
                Messages: [...state.Messages, { 'id': 7, 'message': state.Message }]
            }
        },
        changeMessageText: (state, action) => {
            return {
                ...state,
                Message: action.payload
            }
        }
    }
})
export const {sendMessage, changeMessageText} = DialogsReducer.actions

export default DialogsReducer.reducer;
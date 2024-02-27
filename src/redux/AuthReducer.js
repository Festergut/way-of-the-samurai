import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAuthData = createAsyncThunk(
    'AuthData/getAuthData',
    async () => {
        let response = await axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', { withCredentials: true }).then((response) => {
            return response
        })
        return response
    }
)

const AuthReducer = createSlice({
    name: "AuthData",
    initialState: {
        data: {
            id: null,
            login: null,
            email: null,
        },
        ownID: null,
        isAuth: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthData.fulfilled, (state, action) => {
            if (action.payload.data.resultCode === 0) {
                 state.isAuth = true
            }
            state.data = action.payload.data.data
            state.ownID = action.payload.data.data.id
        })
    }
})

export const { setAuthData } = AuthReducer.actions

export default AuthReducer.reducer
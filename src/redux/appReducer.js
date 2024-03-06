import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authMe } from "../api/auth-api";

export const initializeApp = createAsyncThunk(
    'APP/initializeApp',
    async () => {
        let response = await authMe()
        return response
    }
)

export const appReducer = createSlice({
    name: "APP",
    initialState: {
        initialized: false,
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(initializeApp.fulfilled, (state, action) => {
            return { ...state, initialized: true }
        })
    }
})

export const { } = appReducer.actions

export default appReducer.reducer
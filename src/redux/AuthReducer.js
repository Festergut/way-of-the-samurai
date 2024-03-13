import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authMe, captchaReq, loginReq, logoutReq } from "../api/auth-api";

export const getAuthData = createAsyncThunk(
    'AuthData/getAuthData',
    async () => {
        let response = await authMe()
        return response.data
    }
)
export const login = createAsyncThunk(
    'login/AuthData',
    async (data) => {
        let loginRes = await loginReq(
            {
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe,
                captcha: data.captcha
            })
        if (loginRes.data.resultCode === 0) {
            let response = await authMe().then((response) => {
                return response.data
            })
            return response
        }
        if (loginRes.data.resultCode === 1) {
            return loginRes.data
        }
        if (loginRes.data.resultCode === 10) {
            let response = await captchaReq().then((response) => {
                debugger
                return response.data
            })
            return response
        }

    }
)

export const logout = createAsyncThunk(
    'logout/AuthData',
    async () => {
        let response = await logoutReq()
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
        isAuth: false,
        error: null,
        captchaURL: null, 
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthData.fulfilled, (state, action) => {
            if (action.payload.resultCode === 0) {
                state.data = action.payload.data
                state.isAuth = true
            }
        })
        builder.addCase(login.fulfilled, (state, action) => {
            if (action.payload.resultCode === 0) {
                state.data = action.payload.data
                state.isAuth = true
                state.error = null
            }
            if (action.payload.resultCode === 1) {
                state.error = action.payload.messages[0]
            }
            state.captchaURL = action.payload.url
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            if (action.payload.data.resultCode === 0) {
                state.isAuth = false
                state.data.id = null
                state.data.login = null
                state.data.email = null
            }
        })
    }
})

export const { setAuthData } = AuthReducer.actions

export default AuthReducer.reducer
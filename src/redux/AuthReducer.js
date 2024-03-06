import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authMe, loginReq, logoutReq } from "../api/auth-api";

export const getAuthData = createAsyncThunk(
    'AuthData/getAuthData',
    async () => {
        let response = await authMe()
        return response
    }
)
export const login = createAsyncThunk(
    'login/AuthData',
    async (data) => {
        let response = await loginReq(
            {
                email: data.email,
                password: data.password,
                rememberMe: data.rememberMe
            }).then((response) => {
                if (response.data.resultCode === 0) {
                    authMe().then((response) => {
                        console.log(response)
                    })
                }
                return response
            })
        return response
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
        isAuth: false
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAuthData.fulfilled, (state, action) => {
            if (action.payload.data.resultCode === 0) {
                state.isAuth = true
            }
            state.data = action.payload.data.data
        })
        builder.addCase(login.fulfilled, (state, action) => {
            console.log(action)
        })
        builder.addCase(logout.fulfilled, (state, action) => {
            if(action.payload.data.resultCode === 0) {
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
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const getProfile = createAsyncThunk(
    'ProfileData/getProfile',
    async (userId) => {
        let response = await axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then((response) => {
            return response.data
        })
        return response
    }
)

const ProfileReducer = createSlice({
    name: "ProfileData",
    initialState: {
        profile: null,
        loading: false
    },
    reducers: {
        setProfile: (state, action) => {
            return { ...state, profile: action.payload }
        },
        toggleLoading: (state, action) => {
            return { ...state, loading: action.payload }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.fulfilled, (state, action) => {
            return { ...state, profile: action.payload, loading: true}
        })
    }
})

export const { setProfile, toggleLoading } = ProfileReducer.actions

export default ProfileReducer.reducer;
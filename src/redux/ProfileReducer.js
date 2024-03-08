import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { profileAPI } from "../api/profile-api"

export const getProfile = createAsyncThunk(
    'ProfileData/getProfile',
    async (userId) => {
        let response = await profileAPI.getProfile(userId)
        return response
    }
)

export const getProfileStatus = createAsyncThunk(
    'ProfileData/getProfileStatus',
    async (userId) => {
        let response = await profileAPI.getProfileStatus(userId)
        return response
    }
)

export const updateProfileStatus = createAsyncThunk(
    'ProfileData/UpdateProfileStatus',
    async (statustext) => {
        let response = await profileAPI.updateProfileStatus(statustext)
        return response
    }
)

export const updateProfilePhoto = createAsyncThunk(
    'ProfileData/updateProfilePhoto',
    async (photo) => {
        let response = await profileAPI.updateProfilePhoto(photo)
        return response
    }
)

const ProfileReducer = createSlice({
    name: "ProfileData",
    initialState: {
        profile: null,
        loading: true,
        status: ''
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
            return { ...state, profile: action.payload, loading: false }
        })
        builder.addCase(getProfileStatus.fulfilled, (state, action) => {
            return { ...state, status: action.payload.data }
        })
    }
})

export const { setProfile, toggleLoading } = ProfileReducer.actions

export default ProfileReducer.reducer;
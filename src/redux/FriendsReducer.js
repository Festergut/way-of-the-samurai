import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ajaxGetUsers } from "../api/auth-api"

export const getUsers = createAsyncThunk(
    "FriendsData/getUsers",
    async (args, thunkapi) => {
        const response = await ajaxGetUsers(args.currentPage, args.pagesCount).then((data) => {
            return data.items
        })
        return response
    }

)


const FriendsReducer = createSlice({
    name: "FriendsData",
    initialState: {
        friends: [],
        usersCount: 0,
        pagesCount: 5,
        currentPage: 1,
        isLoading: false,
        disableButtonByID: []
    },
    reducers: {
        follow: (state, action) => {
            return {
                ...state,
                friends: state.friends.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        },
        unfollow: (state, action) => {
            return {
                ...state,
                friends: state.friends.map(u => {
                    if (u.id === action.payload) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        },
        setFriends: (state, action) => {
            return {
                ...state, friends: action.payload.map(f => {
                    return f
                })
            }
        },
        changeCurrentPage: (state, action) => {
            return {
                ...state, currentPage: action.payload
            }
        },
        setUsersCount: (state, action) => {
            return {
                ...state, usersCount: action.payload
            }
        },
        toggleLoading: (state, action) => {
            return {
                ...state, isLoading: action.payload
            }
        },
        addIdtoDisable: (state, action) => {
            return {
                ...state, disableButtonByID: action.payload.toggle
                    ? [...state.disableButtonByID, action.payload.id]
                    : [state.disableButtonByID.filter(id => id !== action.payload.id)],
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUsers.fulfilled, (state, action) => {
            state.isLoading = false
            state.friends = action.payload
        })
    }
}
)






export const { follow, unfollow, setFriends, changeCurrentPage, setUsersCount, toggleLoading, addIdtoDisable } = FriendsReducer.actions

export default FriendsReducer.reducer;
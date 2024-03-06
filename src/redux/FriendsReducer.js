import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { ajaxGetUsers } from "../api/api"

export const getUsers = createAsyncThunk(
    "FriendsData/getUsers",
    async (args) => {
        const response = await ajaxGetUsers(args.currentPage, args.pagesCount)
        return response
    }

)


const FriendsReducer = createSlice({
    name: "FriendsData",
    initialState: {
        friends: [],
        totalUsersCount: 0,
        pageSize: 10,
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
            state.friends = action.payload.items
            state.totalUsersCount = action.payload.totalCount
        })
    }
}
)






export const { follow, unfollow, setFriends, changeCurrentPage, setUsersCount, toggleLoading, addIdtoDisable } = FriendsReducer.actions

export default FriendsReducer.reducer;
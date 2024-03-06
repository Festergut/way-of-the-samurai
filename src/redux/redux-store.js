import { combineReducers, configureStore }  from "@reduxjs/toolkit"
import DialogsReducer from "./DialogsReducer";
import FriendsReducer from "./FriendsReducer";
import ProfileReducer from "./ProfileReducer";
import AuthReducer from "./AuthReducer";
import appReducer from "./appReducer";

let reducers = combineReducers({
    DialogsData: DialogsReducer,
    FriendsData: FriendsReducer,
    ProfileData: ProfileReducer,
    AuthData: AuthReducer,
    APP: appReducer
})


let store = configureStore({
    reducer:reducers
    
});

window.state = store;

export default store;
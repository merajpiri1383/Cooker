import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer/user";
import settingsSlice from "./reducer/settings";
const Store = configureStore({
    reducer : {
        user : userSlice,
        settings : settingsSlice ,
    }
});export default Store;
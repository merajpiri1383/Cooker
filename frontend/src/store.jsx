import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./reducer/user";
const Store = configureStore({
    reducer : {
        user : userSlice
    }
});export default Store;
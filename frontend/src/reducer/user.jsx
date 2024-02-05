import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name : "user",
    initialState : {
        phone : 0,
        token : "",
        is_valid : false
    },
    reducers : {
        setPhone : (state,action) => {
            state.phone = action.payload;
        },
        setToken : (state,action) => {
            state.token = action.payload;
        },
        setIsValid : (state,action) => {
            state.is_valid = action.payload;
        },logout : (state) => {
            state.phone = 0 ;
            state.token = null 
            state.is_valid = false
        }
    }
});export const {setPhone ,setToken , setIsValid , logout} = userSlice.actions ;
export default userSlice.reducer ;
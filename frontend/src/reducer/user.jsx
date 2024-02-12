import {createSlice} from "@reduxjs/toolkit";
const userSlice = createSlice({
    name : "user",
    initialState : {
        phone : 0,
        token : "",
        is_valid : false,
        is_active : null ,
        is_master : null ,
        is_staff : null ,
        is_chef : null ,
        username : "",
        age : null ,
        address : null ,
        experience_age : null,
        image : null ,
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
            state.token = null ;
            state.is_valid = false;
            state.is_master = false;
        },setPermission : (state,action) => {
            state.is_active = action.payload.is_active ;
            state.is_chef = action.payload.is_chef ;
            state.is_staff = action.payload.is_staff ;
            state.is_master = action.payload.is_master ;
        },setProfile : (state,action) => {
            console.log("user reducer change profile")
            state.username = action.payload.username; 
            state.age = action.payload.age ;
            state.address = action.payload.address ;
            state.experience_age = action.payload.experience_age;
            state.image = action.payload.image;

        }
    }
});export const {setPhone ,setToken , setIsValid , logout ,setPermission , setProfile } = userSlice.actions ;
export default userSlice.reducer ;
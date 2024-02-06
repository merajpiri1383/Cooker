import { createSlice } from "@reduxjs/toolkit";
const settingsSlice = createSlice({
    name : "settings",
    initialState : {
        background_image : null,
        brand : null ,
        default_product_image : null
    },reducers : {
        setBrand : (state,action) => {
            state.brand = action.payload ;
        },setDefaultProductImage : (state,action) => {
            state.default_product_image = action.payload ;
        }
    }
});export const {setBrand,setDefaultProductImage} = settingsSlice.actions ;
export default settingsSlice.reducer ;
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice"
//this rtk Store for storing data
const appStore = configureStore({
    reducer:{
        cart:cartReducer
    }

});

export default appStore;
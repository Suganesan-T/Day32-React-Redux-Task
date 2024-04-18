import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./reducers/counter-reducer";


export const store = configureStore({
    reducer:{
        app: counterSlice.reducer
    }
})
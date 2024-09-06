import { configureStore } from "@reduxjs/toolkit";
import shopping from './Slices/Saleslice'

export const Store=configureStore({
    reducer:{
        Ecommerce:shopping
    }
})
import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import product from "./products/productSlice"

const store = configureStore({
    reducer: { auth, admin, product }
})


export default store
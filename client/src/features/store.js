import { configureStore } from "@reduxjs/toolkit";

import auth from "./auth/authSlice"
import admin from "./admin/adminSlice"
import product from "./products/productSlice"
import cart from "./cart/cartSlice"

const store = configureStore({
    reducer: { auth, admin, product, cart }
})


export default store
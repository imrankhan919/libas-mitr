import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import cartService from './cartService';

const initialState = {
    cart: [],
    cartLoading: false,
    cartSuccess: false,
    cartError: false,
    cartMessage: ""
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
    extraReducers: (builder) => {

        builder
            .addCase(addItemToCart.pending, (state, action) => {
                state.cartLoading = true
                state.cartSuccess = false
                state.cartError = false
            })
            .addCase(addItemToCart.fulfilled, (state, action) => {
                state.cartLoading = false
                state.cartSuccess = true
                state.cart = action.payload
                state.cartError = false
            })
            .addCase(addItemToCart.rejected, (state, action) => {
                state.cartLoading = false
                state.cartSuccess = false
                state.cartError = true
                state.cartMessage = action.payload
            })
            .addCase(getCartItems.pending, (state, action) => {
                state.cartLoading = true
                state.cartSuccess = false
                state.cartError = false
            })
            .addCase(getCartItems.fulfilled, (state, action) => {
                state.cartLoading = false
                state.cartSuccess = true
                state.cart = action.payload
                state.cartError = false
            })
            .addCase(getCartItems.rejected, (state, action) => {
                state.cartLoading = false
                state.cartSuccess = false
                state.cartError = true
                state.cartMessage = action.payload
            })
            .addCase(removeCartItem.pending, (state, action) => {
                state.cartLoading = true
                state.cartSuccess = false
                state.cartError = false
            })
            .addCase(removeCartItem.fulfilled, (state, action) => {
                state.cartLoading = false
                state.cartSuccess = true
                state.cart = state.cart.products.filter(product => product._id !== action.payload._id)
                state.cartError = false
            })
            .addCase(removeCartItem.rejected, (state, action) => {
                state.cartLoading = false
                state.cartSuccess = false
                state.cartError = true
                state.cartMessage = action.payload
            })


    }
});

export const { } = cartSlice.actions

export default cartSlice.reducer


// ADD TO CART

export const addItemToCart = createAsyncThunk("ADD/CART", async (cartData, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await cartService.addToCart(token, cartData)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})


// GET  CART
export const getCartItems = createAsyncThunk("FETCH/CART", async (_, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await cartService.getCart(token)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

// REMOVE FROM  CART
export const removeCartItem = createAsyncThunk("REMOVE_ITEM/CART", async (productId, thunkAPI) => {
    let token = thunkAPI.getState().auth.user.token
    try {
        return await cartService.removeFromCart(token, productId)
    } catch (error) {
        let message = error.response.data.message
        return thunkAPI.rejectWithValue(message)
    }
})

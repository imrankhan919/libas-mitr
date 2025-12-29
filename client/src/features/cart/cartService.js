import axios from "axios"

const addToCart = async (token, cartData) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.post("/api/cart", cartData, options)
    console.log(response.data)
    return response.data


}

const getCart = async (token) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.get("/api/cart", options)
    return response.data


}


const removeFromCart = async (token, productId) => {

    let options = {
        headers: {
            authorization: `Bearer ${token}`
        }
    }


    const response = await axios.delete("/api/cart/" + productId, options)
    console.log(response.data)
    return response.data


}


const cartService = { addToCart, getCart, removeFromCart }

export default cartService
import React from 'react'
import {useSelector} from "react-redux"

function CartComp() {
    const cartItems=useSelector(state=>state.cartReducer.itemsInCart)
    return (
        <div>
            <h1>Items in cart: {cartItems}</h1>
        </div>
    )
}

export default CartComp

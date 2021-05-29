import React from 'react'
import {useSelector} from "react-redux"

function DetailedCartComp() {
    const noOfCakes=useSelector(state=>state.cakeReducer.cakesInCart)

    const noOfBurgers=useSelector(state=>state.burgerReducer.burgersInCart)

    return (
        <div>
            <h1>cakes:{noOfCakes}</h1>
            <h1>Burgers:{noOfBurgers}</h1> 
        </div>
    )
}

export default DetailedCartComp

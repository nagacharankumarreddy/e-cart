import React from 'react'
import BurgerComp from './BurgerComp'
import CakeComp from './CakeComp'
import CartComp from './CartComp'
import { Provider } from "react-redux";
import store from "../redux/store";

function AllItems() {
    return (
    <Provider store={store}>

        <div>
            <CakeComp/>
            <BurgerComp/>
            <CartComp/>
        </div>
        </Provider>
    )
}

export default AllItems

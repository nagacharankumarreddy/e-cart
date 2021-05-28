import {combineReducers} from "redux"
import cakeReducer from "./cake/cakeReducer"
import burgerReducer from "./burger/burgerReducer"
import cartReducer from "./cartReducer"

const rootReducer=combineReducers({
    cakeReducer,
    burgerReducer,
    cartReducer
})
export default rootReducer;
import * as cakeactions from "./cake/actionTypes"
import * as burgeractions from "./burger/actionTypes"

const initState={
    itemsInCart:0
}

const cakeReducer=(state=initState,action)=>
{
    if( action.type===cakeactions.BUY_CAKE || action.type===burgeractions.BUY_BURGER  )
    return {...state,itemsInCart:state.itemsInCart+1}
return state;
}
export default cakeReducer
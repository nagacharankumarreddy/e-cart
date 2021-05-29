import * as actions from "./actionTypes"
const initState={
    noOfBurgers:5,
    burgersInCart:0
}
const burgerReducer=(state=initState,action)=>
{
    if(action.type===actions.BUY_BURGER && state.noOfBurgers>1 )
    {
    return {...state,
        noOfBurgers:state.noOfBurgers-1,
        burgersInCart:state.burgersInCart+1}
    }
    else if (action.type===actions.BUY_BURGER && state.noOfBurgers===1)
    {
        return {...state,
            noOfBurgers:0,
        burgersInCart:state.burgersInCart+1}

    }
return state;
}
export default burgerReducer
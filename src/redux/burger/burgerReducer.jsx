import * as actions from "./actionTypes"
const initState={
    noOfBurgers:5
}
const burgerReducer=(state=initState,action)=>
{
    if(action.type===actions.BUY_BURGER && state.noOfBurgers>1 )
    {
    return {...state,
        noOfBurgers:state.noOfBurgers-1}
    }
    else if (action.type===actions.BUY_BURGER && state.noOfBurgers===1)
    {
        return {...state,
            noOfBurgers:"Out of Stock"}
    }
return state;
}
export default burgerReducer
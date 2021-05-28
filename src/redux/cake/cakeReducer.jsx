import * as actions from "./actionTypes"
const initState={
    noOfCakes:10
}
const cakeReducer=(state=initState,action)=>
{
    if(action.type===actions.BUY_CAKE && state.noOfCakes>1)
    return {...state,
        noOfCakes:state.noOfCakes-1}
        else if(action.type===actions.BUY_CAKE && state.noOfCakes===1){
           return  {...state,
                noOfCakes:"Out Of Stock"}
        }
return state;
}
export default cakeReducer
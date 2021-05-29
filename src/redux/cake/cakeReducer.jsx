import * as actions from "./actionTypes"
const initState={
    noOfCakes:10,
    cakesInCart:0
}
const cakeReducer=(state=initState,action)=>
{
    if(action.type===actions.BUY_CAKE && state.noOfCakes>1)
    return {...state,
        noOfCakes:state.noOfCakes-1,
        cakesInCart:state.cakesInCart+1    
    }
        else if(action.type===actions.BUY_CAKE && state.noOfCakes===1){
           return  {...state,
                noOfCakes:0,
        cakesInCart:state.cakesInCart+1    
    }
        }
return state;
}
export default cakeReducer
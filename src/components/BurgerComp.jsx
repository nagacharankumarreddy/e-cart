import React from 'react'
import buyburger from "../redux/burger/burgerActions"
// import {connect} from "react-redux"
import {useDispatch,useSelector} from "react-redux"
export default function BurgerComp(props) {
    const noOfBurgers=useSelector(state=>state.burgerReducer.noOfBurgers)
    const dispatch=useDispatch()
    return (
        <div>
            <img src="assets/burger.jpeg" alt="burger" height="210px" style={{borderRadius:"30%"}} />
            <h1>Available Burgers : {noOfBurgers}</h1>
            <div>Click on Below button to <br /> Buy Burger </div>
            <h1>
                {
                    noOfBurgers==="Out of Stock"?  
                    <button disabled>Buy</button>:
                    <button onClick={()=>dispatch(buyburger()) }>Buy</button>
                }
            </h1>
            
        </div>
    )
}
// const mapStateToProps=(state)=>{
//     return {noOfBurgers:state.burgerReducer.noOfBurgers}
// }
// const mapDispatchToProps=(dispatch)=>{
//     return {
//         buyBurger:()=>dispatch(buyburger())
//     }
// }

// export default connect(mapStateToProps,mapDispatchToProps)(BurgerComp) 

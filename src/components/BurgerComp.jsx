import React from 'react'
import buyburger from "../redux/burger/burgerActions"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";

// import {connect} from "react-redux"
import {useDispatch,useSelector} from "react-redux"
export default function BurgerComp(props) {
    const noOfBurgers=useSelector(state=>state.burgerReducer.noOfBurgers)
    const dispatch=useDispatch()
    return (
        <div>
            <img src={require('../assets/burger.jpeg').default} alt="burger" height="210px" style={{borderRadius:"30%"}} />
            <h1>Available : {noOfBurgers}</h1>
            <h1>
                {
                    noOfBurgers===0?  
                    <button className="btn" disabled style={{margin: '0',
                    position: 'relative',
                    top:'15%',
                    left: '35%',
                    transform: 'translateY(-50%)'}
                   }>Buy</button>:
                    <button className="btn btn-primary" style={{margin: '0',
                    position: 'relative',
                    top:'15%',
                    left: '35%',
                    transform: 'translateY(-50%)'}
                   } onClick={()=>dispatch(buyburger()) }>Buy</button>
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

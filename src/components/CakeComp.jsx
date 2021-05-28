import React from 'react'
import buycake from "../redux/cake/cakeactions"
import {connect} from "react-redux"
function CakeComp(props) {
    return (
        <div>
            <img src="assets/cake.jpeg" alt="cake"  style={{borderRadius:"30%"}} />
            <h1>Available Cakes : {props.noOfCakes}</h1>
            <div>Click on Below button to <br /> Buy CAKE </div>
            <h1>
                {/* <button onClick={props.buyCake}>Buy</button> */}
                {
                    props.noOfCakes==="Out Of Stock"?  
                    <button disabled>Buy</button>:
                    <button onClick={props.buyCake}>Buy</button>
                
                }
            </h1>
        </div>
    )
}
const mapStateToProps=(state)=>{
    return {noOfCakes:state.cakeReducer.noOfCakes}
}
const mapDispatchToProps=(dispatch)=>{
    return {
        buyCake:()=>dispatch(buycake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeComp) 

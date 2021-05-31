import React from 'react'
import buycake from "../redux/cake/cakeactions"
import {connect} from "react-redux"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function CakeComp(props) {
    return (
        <div>
            <img src={require('../assets/cake.jpeg').default}  alt="cake"  style={{borderRadius:"30%"}} />
            <h1>Available : {props.noOfCakes}</h1>
            <h1>
                {/* <button onClick={props.buyCake}>Buy</button> */}
                {
                    props.noOfCakes===0?  
                  <button className="btn" style={{margin: '0',
                  position: 'relative',
                  top:'15%',
                  left: '35%',
                  transform: 'translateY(-50%)'}
                 }
                 disabled>Buy</button>:
                    <button className="btn btn-primary" style={{margin: '0',
                        position: 'relative',
                        top:'15%',
                        left: '35%',
                        transform: 'translateY(-50%)'}
                       } onClick={props.buyCake}>Buy</button>
                
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

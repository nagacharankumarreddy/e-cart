import React from 'react'
import {useSelector} from "react-redux"
import "../styles/DetailedCartComp.css"
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css"
function print(){
    console.log("hey");
    // window.print();
}

function DetailedCartComp() {
    const noOfCakes=useSelector(state=>state.cakeReducer.cakesInCart)
    const cakesPrice=noOfCakes*25.0;

    const noOfBurgers=useSelector(state=>state.burgerReducer.burgersInCart)
    const burgersPrice=noOfBurgers*70.0;
    const total=cakesPrice+burgersPrice;
    
    return (
        <div className="main-cart">
            <h1>Cakes  :{noOfCakes} * 25.0 = {cakesPrice}</h1>
            <h1>Burgers:{noOfBurgers}* 70.0 = {burgersPrice}</h1> 
            <hr />
            <h1>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Total  ={total}</h1>
            <br />
            {/* <button className="btn btn-primary" onClick="print()">Get Bill</button> */}
        </div>
    )
}

export default DetailedCartComp

import React, { Component } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "../Components/Home";
import DetailedCartComponent from "./DetailedCartComp"
import AllItems from "./AllItems";
import {useSelector} from "react-redux"

function NavBar() {
    const cartItems=useSelector(state=>state.cartReducer.itemsInCart)
    return (
      <div>
        <Router>
          <nav class="navbar navbar-expand-sm navbar-dark bg-dark  m-0">
            <div class="container">
              
              <Link to="/" className=" navbar-brand btn  btn-light text-dark  ">e-Cart</Link>
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/login">
                    <button
                      type="button"
                      class="btn btn-info btn-lg  m-1 p-1 h-75 d-inline-block text-center"
                    >
                      Login
                    </button>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/more">
                    <button
                      type="button"
                      class="btn btn-info btn-lg  m-1 p-1 h-75 d-inline-block text-center"
                    >
                      More{" "}
                    </button>
                    </Link>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    <Link to="/services">
                    <button
                      type="button"
                      class="btn btn-info btn-lg  m-1 p-1 h-75 d-inline-block text-center"
                    >
                      <img
                        src={require("../assets/s-cart.png").default}
                        alt="cart"
                        height="20px"
                        width="30px"
                      />
                      <span class="badge badge-pill badge-danger text-success">{cartItems}</span>
                    </button>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <Switch>
          <Route exact path="/" component={AllItems}/>
          {/* <Route exact path="/home" component={Home}/>
          <Route exact path="/about" component={About}/>*/}
           <Route exact path="/services" component={DetailedCartComponent}/> 
          </Switch>
        </Router>
      </div>
    );
  }


export default NavBar;

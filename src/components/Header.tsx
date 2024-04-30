import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
const Header = ()=>{
    const[status,setStatus] =useState("Login")
    return(
        <div className="header-container">
        <div className="header">
        <div className="img-container">
            <img src="https://thumbs.dreamstime.com/z/food-logo-food-delivery-logo-cooking-restaurant-logo-find-food-food-delivery-restaurant-logo-design-vector-180575305.jpg"></img>  </div>
        <ul className="nav-items">
            <Link to='/'>Home</Link>
            <Link to='/about'>about</Link>
            <Link to='/contact'>ContactUs</Link>
            <li onClick={()=> {status === "Login"?setStatus("LogOut"):setStatus("Login")}}>{status}</li>

        </ul>
        </div>
        </div>
    )
}

export default Header;
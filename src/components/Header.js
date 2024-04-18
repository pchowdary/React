import React from "react";
import ReactDOM from "react-dom";

const Header = ()=>{
    return(
        <div className="header-container">
        <div className="img-container">
            <img src="https://thumbs.dreamstime.com/z/food-logo-food-delivery-logo-cooking-restaurant-logo-find-food-food-delivery-restaurant-logo-design-vector-180575305.jpg"></img>  </div>
        <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>ContactUs</li>
        </ul>
        </div>
    )
}

export default Header;
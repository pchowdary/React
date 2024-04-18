import React from 'react';
import ReactDOM from 'react-dom';

const CardContainer = (props)=>{
    return(
        <div className="card-container">
            <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/yfyo8aklppbwdplv7ofp"/>
            <h1> {props.resName || "noname"}</h1>
            <p>*4.3 25Mins</p>
            <p>Biryani,Andhara Foods</p>
            <p>Marathahalli</p>

        </div>
    )
}

export default CardContainer;
import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

const CardContainer = (props)=>{
    return(
        <Link to={`/details/${props.id}`}>
        <div className="card-container">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.image}`}/>
            <h1> {props.resName || "noname"}</h1>
            <p>{props.rating}</p>
            <p>{props.area}</p>
            <p>{props.cost}</p>
        

        </div>
           </Link>
    )
}

export default CardContainer;
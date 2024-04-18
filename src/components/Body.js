import React from "react";
import ReactDOM from "react-dom";
import CardContainer from "./CardContainer";

const Body = ()=>{
    return(
        <div className="body">
            <CardContainer res="KFC"/>
            <CardContainer resName="MCD"/>
            <CardContainer resName="MCDONALD"/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
            <CardContainer/>
        </div>
    )
}

export default Body;